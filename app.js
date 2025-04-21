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
    ],
    unsaturatedFat: [
        { min: 0, max: 18.80, score: 10 },
        { min: 18.80, max: 22.20, score: 9 },
        { min: 22.20, max: 25.00, score: 8 },
        { min: 25.00, max: 27.69, score: 7 },
        { min: 27.69, max: 30.47, score: 6 },
        { min: 30.47, max: 33.46, score: 5 },
        { min: 33.46, max: 36.92, score: 4 },
        { min: 36.92, max: 41.11, score: 3 },
        { min: 41.11, max: 46.72, score: 2 },
        { min: 46.72, max: 55.20, score: 1 },
        { min: 55.20, max: 100, score: 0 }
    ],
    animalProtein: [
        { min: 0, max: 9.34, score: 10 },
        { min: 9.34, max: 13.20, score: 9 },
        { min: 13.20, max: 16.13, score: 8 },
        { min: 16.13, max: 18.74, score: 7 },
        { min: 18.74, max: 21.27, score: 6 },
        { min: 21.27, max: 23.87, score: 5 },
        { min: 23.87, max: 26.71, score: 4 },
        { min: 26.71, max: 29.95, score: 3 },
        { min: 29.95, max: 34.01, score: 2 },
        { min: 34.01, max: 40.23, score: 1 },
        { min: 40.23, max: 100, score: 0 }
    ],
    lowQualityCarb: [
        { min: 0, max: 14.00, score: 10 },
        { min: 14.00, max: 23.79, score: 9 },
        { min: 23.79, max: 31.10, score: 8 },
        { min: 31.10, max: 36.79, score: 7 },
        { min: 36.79, max: 41.49, score: 6 },
        { min: 41.49, max: 45.74, score: 5 },
        { min: 45.74, max: 49.76, score: 4 },
        { min: 49.76, max: 53.93, score: 3 },
        { min: 53.93, max: 58.49, score: 2 },
        { min: 58.49, max: 64.63, score: 1 },
        { min: 64.63, max: 100, score: 0 }
    ]
};

// 能量范围限制
const energyLimits = {
    male: { min: 800, max: 4200 },
    female: { min: 600, max: 3500 }
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

// 计算总死亡率风险等级
function calculateTotalMortalityRisk(healthyScore, unhealthyScore) {
    if (healthyScore <= 15 && unhealthyScore <= 15) return 1;
    if (healthyScore > 15 && unhealthyScore <= 15) return 2;
    if (healthyScore <= 15 && unhealthyScore > 15) return 3;
    if (healthyScore > 15 && unhealthyScore > 15) return 4;
    return '-';
}

// 计算心血管疾病死亡率风险等级
function calculateCVDMortalityRisk(healthyScore, unhealthyScore) {
    if (healthyScore >= 10 && healthyScore <= 15 && unhealthyScore <= 15) return 1;
    if (healthyScore < 10 && unhealthyScore <= 15) return 2;
    if (healthyScore > 15 && unhealthyScore <= 15) return 3;
    if (healthyScore >= 10 && healthyScore <= 15 && unhealthyScore > 15) return 4;
    if (healthyScore < 10 && unhealthyScore > 15) return 5;
    if (healthyScore > 15 && unhealthyScore > 15) return 6;
    return '-';
}

// 修改计算总能量函数
function calculateTotalEnergy(foods) {
    let unhealthyEnergy = 0;
    let healthyEnergy = 0;

    foods.forEach(food => {
        const foodData = window.foodData.find(f => f["Ingredient description"] === food.name);
        if (foodData) {
            const weight = food.weight;
            
            // 直接使用数据中的能量值
            unhealthyEnergy += foodData["Unhealthy energy (kcal/g)"] * weight;
            healthyEnergy += foodData["Healthy energy (kcal/g)"] * weight;
        }
    });

    return { unhealthyEnergy, healthyEnergy };
}

// 修改计算营养素占比函数
function calculateNutrientPercentages(foods, totalEnergy) {
    let saturatedFat = 0;
    let plantProtein = 0;
    let highQualityCarb = 0;
    let unsaturatedFat = 0;
    let animalProtein = 0;
    let lowQualityCarb = 0;

    foods.forEach(food => {
        const foodData = window.foodData.find(f => f["Ingredient description"] === food.name);
        if (foodData) {
            const weight = food.weight;
            
            // 不健康高脂饮食营养素
            saturatedFat += foodData["Saturated fat (kcal/g)"] * weight;
            plantProtein += foodData["Plant protein (kcal/g)"] * weight;
            highQualityCarb += foodData["High-quality carbohydrates (kcal/g)"] * weight;

            // 健康高脂饮食营养素
            unsaturatedFat += foodData["Unsaturated fat (kcal/g)"] * weight;
            animalProtein += foodData["Animal protein"] * weight;
            lowQualityCarb += foodData["Low-quality carbohydrates"] * weight;
        }
    });

    return {
        // 不健康高脂饮食占比
        unhealthy: {
            saturatedFat: (saturatedFat / totalEnergy.unhealthyEnergy) * 100,
            plantProtein: (plantProtein / totalEnergy.unhealthyEnergy) * 100,
            highQualityCarb: (highQualityCarb / totalEnergy.unhealthyEnergy) * 100
        },
        // 健康高脂饮食占比
        healthy: {
            unsaturatedFat: (unsaturatedFat / totalEnergy.healthyEnergy) * 100,
            animalProtein: (animalProtein / totalEnergy.healthyEnergy) * 100,
            lowQualityCarb: (lowQualityCarb / totalEnergy.healthyEnergy) * 100
        }
    };
}

// 修改主计算函数
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
    const gender = document.getElementById('gender').value;
    const limits = energyLimits[gender];
    const alertDiv = document.getElementById('alert');
    const resultsDiv = document.getElementById('results');

    // 检查能量范围
    if (unhealthyEnergy+healthyEnergy < limits.min || unhealthyEnergy+healthyEnergy > limits.max) {
        alertDiv.style.display = '';
        alertDiv.textContent = `Total energy (${(unhealthyEnergy+healthyEnergy).toFixed(0)} kcal) is outside the recommended range for ${gender}s (${limits.min}-${limits.max} kcal/day).`;
        resultsDiv.style.display = 'none';
        return;
    }

    alertDiv.style.display = 'none';
    resultsDiv.style.display = '';

    const percentages = calculateNutrientPercentages(foods, { unhealthyEnergy, healthyEnergy });

    // 计算不健康高脂饮食得分
    const unhealthyScore = 
        calculateScore(percentages.unhealthy.saturatedFat, scoreRanges.saturatedFat) +
        calculateScore(percentages.unhealthy.plantProtein, scoreRanges.plantProtein) +
        calculateScore(percentages.unhealthy.highQualityCarb, scoreRanges.highQualityCarb);

    // 计算健康高脂饮食得分
    const healthyScore = 
        calculateScore(percentages.healthy.unsaturatedFat, scoreRanges.unsaturatedFat) +
        calculateScore(percentages.healthy.animalProtein, scoreRanges.animalProtein) +
        calculateScore(percentages.healthy.lowQualityCarb, scoreRanges.lowQualityCarb);

    // 更新UI
    document.getElementById('unhealthyScore').textContent = unhealthyScore;

    document.getElementById('healthyScore').textContent = healthyScore;
    
    document.getElementById('totalMortality').textContent = 
        calculateTotalMortalityRisk(healthyScore, unhealthyScore);
    document.getElementById('cvdMortality').textContent = 
        calculateCVDMortalityRisk(healthyScore, unhealthyScore);
}


// 自动完成功能
function autocomplete(input) {
    let currentFocus;
    let autocompleteList;
    
    input.addEventListener("input", function(e) {
        let val = this.value;
        closeAllLists();
        if (!val || typeof val !== 'string') { return false; }
        currentFocus = -1;
        
        autocompleteList = document.createElement("div");
        autocompleteList.setAttribute("id", this.id + "autocomplete-list");
        autocompleteList.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(autocompleteList);

        const matches = window.foodData.filter(food => 
            food["Ingredient description"].toLowerCase().includes(val.toLowerCase())
        );

        if (matches.length === 0) {
            closeAllLists();
            return;
        }

        matches.forEach(food => {
            let item = document.createElement("div");
            item.innerHTML = food["Ingredient description"];
            item.addEventListener("click", function(e) {
                input.value = this.innerHTML;
                closeAllLists();
            });
            autocompleteList.appendChild(item);
        });

        // 设置下拉框的最大高度和滚动
        autocompleteList.style.maxHeight = "200px";
        autocompleteList.style.overflowY = "auto";
    });

    function closeAllLists(elmnt) {
        let x = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != input) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    // 添加键盘导航
    input.addEventListener("keydown", function(e) {
        let x = document.getElementById(this.id + "autocomplete-list");
        if (!x) return;
        let items = x.getElementsByTagName("div");
        
        if (e.keyCode == 40) { // 向下键
            currentFocus++;
            addActive(items);
        } else if (e.keyCode == 38) { // 向上键
            currentFocus--;
            addActive(items);
        } else if (e.keyCode == 13) { // 回车键
            e.preventDefault();
            if (currentFocus > -1 && items) {
                items[currentFocus].click();
            }
        }
    });

    function addActive(items) {
        if (!items) return false;
        removeActive(items);
        if (currentFocus >= items.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (items.length - 1);
        items[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(items) {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("autocomplete-active");
        }
    }

    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

// 初始化自动完成
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.food-name').forEach(input => {
        autocomplete(input);
    });
});

// 修改添加食物按钮的事件监听
document.getElementById('addFood').addEventListener('click', () => {
    const foodList = document.getElementById('foodList');
    const newItem = document.createElement('div');
    newItem.className = 'food-item row g-3';
    newItem.innerHTML = `
        <div class="col-md-6">
            <input type="text" class="form-control food-name" placeholder="Food Name">
        </div>
        <div class="col-md-4">
            <input type="number" class="form-control food-weight" placeholder="Weight (g)">
        </div>
        <div class="col-md-2">
            <button class="btn btn-danger remove-food">Delete</button>
        </div>
    `;
    foodList.appendChild(newItem);
    
    // 为新添加的输入框初始化自动完成
    newItem.querySelectorAll('.food-name').forEach(input => {
        autocomplete(input);
    });
});

document.getElementById('foodList').addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-food')) {
        e.target.closest('.food-item').remove();
    }
});

document.getElementById('calculate').addEventListener('click', calculateScores); 