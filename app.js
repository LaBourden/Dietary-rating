// 评分范围表
const scoreRanges = {
    saturatedFat: [
        { min: 0, max: 13.43, score: 0 },
        { min: 13.43, max: 17.03, score: 1 },
        { min: 17.03, max: 20.23, score: 2 },
        { min: 20.23, max: 23.40, score: 3 },
        { min: 23.40, max: 26.81, score: 4 },
        { min: 26.81, max: 30.67, score: 5 },
        { min: 30.67, max: 35.18, score: 6 },
        { min: 35.18, max: 40.76, score: 7 },
        { min: 40.76, max: 48.32, score: 8 },
        { min: 48.32, max: 60.69, score: 9 },
        { min: 60.69, max: 100, score: 10 }
    ],
    plantProtein: [
        { min: 0, max: 13.45, score: 10 },
        { min: 13.45, max: 13.81, score: 9 },
        { min: 13.81, max: 14.13, score: 8 },
        { min: 14.13, max: 14.72, score: 7 },
        { min: 14.72, max: 18.10, score: 6 },
        { min: 18.10, max: 25.52, score: 5 },
        { min: 25.52, max: 26.85, score: 4 },
        { min: 26.85, max: 27.06, score: 3 },
        { min: 27.06, max: 29.63, score: 2 },
        { min: 29.63, max: 32.51, score: 1 },
        { min: 32.51, max: 100, score: 0 }
    ],
    highQualityCarb: [
        { min: 0, max: 36.72, score: 10 },
        { min: 36.72, max: 48.73, score: 9 },
        { min: 48.73, max: 56.09, score: 8 },
        { min: 56.09, max: 61.57, score: 7 },
        { min: 61.57, max: 66.04, score: 6 },
        { min: 66.04, max: 69.89, score: 5 },
        { min: 69.89, max: 73.34, score: 4 },
        { min: 73.34, max: 76.54, score: 3 },
        { min: 76.54, max: 79.80, score: 2 },
        { min: 79.80, max: 83.51, score: 1 },
        { min: 83.51, max: 100, score: 0 }
    ]
};

// 死亡率风险等级
const mortalityRisks = {
    total: [
        { min: 0, max: 7, level: 1 },
        { min: 8, max: 15, level: 2 },
        { min: 16, max: 23, level: 3 },
        { min: 24, max: 30, level: 4 }
    ],
    cvd: [
        { min: 0, max: 5, level: 1 },
        { min: 6, max: 10, level: 2 },
        { min: 11, max: 15, level: 3 },
        { min: 16, max: 20, level: 4 },
        { min: 21, max: 25, level: 5 },
        { min: 26, max: 30, level: 6 }
    ]
};

// 计算得分
function calculateScore(percentage, ranges) {
    for (const range of ranges) {
        if (percentage >= range.min && percentage < range.max) {
            return range.score;
        }
    }
    return 0;
}

// 计算风险等级
function calculateRiskLevel(score, risks) {
    for (const risk of risks) {
        if (score >= risk.min && score <= risk.max) {
            return risk.level;
        }
    }
    return '-';
}

// 计算总能量
function calculateTotalEnergy(foods) {
    let unhealthyEnergy = 0;
    let healthyEnergy = 0;

    foods.forEach(food => {
        const foodData = window.foodData.find(f => f.name === food.name);
        if (foodData) {
            unhealthyEnergy += foodData.unhealthyEnergy * food.weight;
            healthyEnergy += foodData.healthyEnergy * food.weight;
        }
    });

    return { unhealthyEnergy, healthyEnergy };
}

// 计算营养素占比
function calculateNutrientPercentages(foods, totalEnergy) {
    let saturatedFat = 0;
    let plantProtein = 0;
    let highQualityCarb = 0;

    foods.forEach(food => {
        const foodData = window.foodData.find(f => f.name === food.name);
        if (foodData) {
            saturatedFat += foodData.saturatedFat * food.weight;
            plantProtein += foodData.plantProtein * food.weight;
            highQualityCarb += foodData.highQualityCarb * food.weight;
        }
    });

    return {
        saturatedFat: (saturatedFat / totalEnergy.unhealthyEnergy) * 100,
        plantProtein: (plantProtein / totalEnergy.unhealthyEnergy) * 100,
        highQualityCarb: (highQualityCarb / totalEnergy.unhealthyEnergy) * 100
    };
}

// 主计算函数
function calculateScores() {
    const foods = [];
    document.querySelectorAll('.food-item').forEach(item => {
        const name = item.querySelector('.food-name').value;
        const weight = parseFloat(item.querySelector('.food-weight').value);
        if (name && weight) {
            foods.push({ name, weight });
        }
    });

    const { unhealthyEnergy, healthyEnergy } = calculateTotalEnergy(foods);
    const percentages = calculateNutrientPercentages(foods, { unhealthyEnergy, healthyEnergy });

    // 计算不健康高脂饮食得分
    const unhealthyScore = 
        calculateScore(percentages.saturatedFat, scoreRanges.saturatedFat) +
        calculateScore(percentages.plantProtein, scoreRanges.plantProtein) +
        calculateScore(percentages.highQualityCarb, scoreRanges.highQualityCarb);

    // 更新UI
    document.getElementById('unhealthyScore').textContent = unhealthyScore;
    document.getElementById('totalMortality').textContent = 
        calculateRiskLevel(unhealthyScore, mortalityRisks.total);
    document.getElementById('cvdMortality').textContent = 
        calculateRiskLevel(unhealthyScore, mortalityRisks.cvd);
}

// 事件监听
document.getElementById('addFood').addEventListener('click', () => {
    const foodList = document.getElementById('foodList');
    const newItem = document.createElement('div');
    newItem.className = 'food-item row g-3';
    newItem.innerHTML = `
        <div class="col-md-6">
            <input type="text" class="form-control food-name" placeholder="食物名称">
        </div>
        <div class="col-md-4">
            <input type="number" class="form-control food-weight" placeholder="重量(克)">
        </div>
        <div class="col-md-2">
            <button class="btn btn-danger remove-food">删除</button>
        </div>
    `;
    foodList.appendChild(newItem);
});

document.getElementById('foodList').addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-food')) {
        e.target.closest('.food-item').remove();
    }
});

document.getElementById('calculate').addEventListener('click', calculateScores); 