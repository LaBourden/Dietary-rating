
这是一个用于计算饮食评分的静态网页，放在GitHub page上

一、 不健康高脂饮食评分计算步骤
第一步：计算总能量及各营养素摄入能量
首先通过查表获取每种食物中蛋白质、碳水化合物和脂肪的单位能量值和其膳食所属类别（category），然后将患者每日摄入的各类食物量（g）分别乘以其对应的蛋白质、碳水化合物和脂肪能量系数，最后将各组分的乘积结果按类别求和，即可得到植物蛋白质(Plant protein)、高质量碳水化合物(High-quality carbohydrate)和饱和脂肪(Saturated fat)能量值。
第二步：计算不健康高脂饮食总能量和三大营养素占比
不健康高脂饮食总能量 = 植物蛋白质能量+高质量碳水化合物+饱和脂肪能量
植物蛋白质占比（%） = （植物蛋白能量 / 不健康高脂饮食总能量）× 100
高质量碳水占比（%） = （高质量碳水能量 / 不健康高脂饮食总能量）× 100
饱和脂肪占比（%） = （饱和脂肪能量 / 不健康高脂饮食总能量）× 100
第三步：查表和计算不健康高脂饮食评分
不健康高脂饮食评分 = 植物蛋白质得分 + 高质量碳水得分 + 饱和脂肪得分
范围：0~30分


二、 健康高脂饮食评分计算步骤
第一步：计算总能量及各营养素摄入能量
首先通过查表获取每种食物中蛋白质、碳水化合物和脂肪的单位能量值和其膳食所属类别（category），然后将患者每日摄入的各类食物量（g）分别乘以其对应的蛋白质、碳水化合物和脂肪能量系数，最后将各组分的乘积结果按类别求和，即可得到动物蛋白质(Animal protein)、低质量碳水化合物(Low-quality carbohydrate)和不饱和脂肪(Unsaturated fat)能量值。
第二步：计算不健康高脂饮食总能量和三大营养素占比
健康高脂饮食总能量 = 动物蛋白质能量+低质量碳水化合物+不饱和脂肪能量
动物蛋白质占比（%） = （动物蛋白能量 / 健康高脂饮食总能量）× 100
低质量碳水占比（%） = （低质量碳水能量 / 健康高脂饮食总能量）× 100
不饱和脂肪占比（%） = 【（单不饱和和脂肪能量+多不饱和脂肪能量） / 健第三步：查表和计算健康高脂饮食评分
健康高脂饮食评分 = 动物蛋白质得分 + 低质量碳水得分 + 不饱和脂肪得分
范围：0~30分。
注意：men: < 800 or > 4,200 kcal/day; women: < 600 or > 3,500 kcal/day.（这个范围才计算）

 根据分数的范围得到
total mortality：Level 1-4
CVD mortality：Level 1-6


网站页：
Tatal：Please enter the type and weight of your 24-hour diet

Sex：男、女（可选框）
Diet1：    weight (g): （食物的类型从表里搜索）    
+（加行）

Calculate score
Unhealthy HFD score：0-30  Healthy HFD score：0-30
total mortality risk：Level 1-4
CVD mortality risk：Level 1-6



膳食转换表包含以下列：
Ingredient description	"Saturated fat (kcal/g)"	"Plant protein(kcal/g)" "High-quality carbohydrates (kcal/g)"	"Unhealthy energy (kcal/g)"	"Unsaturated fat (kcal/g)"	"Animal protein"	"Low-quality carbohydrates"	"Healthy energy (kcal/g)"



膳食转换表示例：
"Ingredient description"	"Saturated fat (kcal/g)"	"Plant protein(kcal/g)" "High-quality carbohydrates (kcal/g)"	"Unhealthy energy (kcal/g)"	"Unsaturated fat (kcal/g)"	"Animal protein"	"Low-quality carbohydrates"	"Healthy energy (kcal/g)"
Restaurant, Chinese, chicken and vegetables	0.0693 	0.0000 	0.2039 	0.2732 	0.0000 	0.2888 	0.0000 	0.2888 
Restaurant, Chinese, beef and vegetables	0.0880 	0.0000 	0.2763 	0.3643 	0.0010 	0.2499 	0.0000 	0.2509 
Potato salad with egg	0.1293 	0.0000 	0.0000 	0.1293 	0.0000 	0.0692 	0.6132 	0.6824 
Cereals, oats, instant, fortified, plain, dry	0.1211 	0.4208 	2.6348 	3.1767 	0.0000 	0.0000 	0.0000 	0.0000 
Cereals, whole wheat hot natural cereal, dry	0.0270 	0.3954 	2.8501 	3.2724 	0.0000 	0.0000 	0.0000 	0.0000 
Avocados, raw, all commercial varieties	0.1913 	0.0706 	0.3233 	0.5852 	0.0000 	0.0000 	0.0000 	0.0000 
Cereals, QUAKER, QUAKER MultiGrain Oatmeal, dry	0.0405 	0.4462 	2.7523 	3.2390 	0.0000 	0.0000 	0.0000 	0.0000 
Cereals ready-to-eat, wheat germ, toasted, plain	0.1647 	1.0272 	1.8798 	3.0718 	0.0000 	0.0000 	0.0000 	0.0000 
Cereals, oats, regular and quick, not fortified, dry	0.0999 	0.4642 	2.5658 	3.1299 	0.0000 	0.0000 	0.0000 	0.0000 
Cereals, corn grits, white, regular and quick, enriched, dry	0.0306 	0.2700 	0.0000 	0.3006 	0.0000 	0.0000 	2.9975 	2.9975 
Cereals, QUAKER, corn grits, instant, plain, dry	0.0326 	0.2580 	0.0000 	0.2906 	0.0000 	0.0000 	2.9721 	2.9721 
Cereals, CREAM OF WHEAT, instant, dry	0.0200 	0.3742 	0.0000 	0.3942 	0.0000 	0.0000 	2.8615 	2.8615 
Rice and Wheat cereal bar	0.0000 	0.3209 	0.0000 	0.3209 	0.0000 	0.0000 	2.7565 	2.7565 
Cereals, CREAM OF RICE, dry	0.0122 	0.2224 	0.0000 	0.2346 	0.0000 	0.0000 	3.1230 	3.1230 
Cereals, CREAM OF WHEAT, regular, 10 minute cooking, dry	0.0214 	0.3707 	0.0000 	0.3921 	0.0000 	0.0000 	2.8994 	2.8994 
Cereals, oats, instant, fortified, maple and brown sugar, dry	0.0700 	0.3265 	0.0000 	0.3965 	0.0000 	0.0000 	2.9058 	2.9058 
Milk and cereal bar	0.8203 	0.2284 	0.0000 	1.0487 	0.0086 	0.0000 	2.7307 	2.7392 
Restaurant, Latino, pupusas con queso (pupusas, cheese)	0.5831 	0.4137 	0.8486 	1.8454 	0.0378 	0.0000 	0.0000 	0.0378 
Restaurant, Mexican, refried beans	0.1656 	0.2439 	0.6363 	1.0459 	0.0044 	0.0000 	0.0000 	0.0044 
Beans, baked, canned, no salt added	0.0093 	0.1694 	0.7766 	0.9553 	0.0000 	0.0000 	0.0000 	0.0000 
Cowpeas (blackeyes), immature seeds, frozen, cooked, boiled, drained, without salt	0.0158 	0.2997 	0.9005 	1.2160 	0.0000 	0.0000 	0.0000 	0.0000 
Mushrooms, shiitake, cooked, without salt	0.0045 	0.0551 	0.5454 	0.6049 	0.0000 	0.0000 	0.0000 	0.0000 
Beans, snap, green, canned, no salt added, drained solids	0.0093 	0.0395 	0.1637 	0.2125 	0.0000 	0.0000 	0.0000 	0.0000 
Beets, canned, no salt added, solids and liquids	0.0010 	0.0282 	0.2490 	0.2782 	0.0000 	0.0000 	0.0000 	0.0000 
Nuts, cashew butter, plain, with salt added	0.9545 	0.4278 	1.1484 	2.5307 	0.0000 	0.0000 	0.0000 	0.0000 
Nuts, macadamia nuts, dry roasted, with salt added	1.0752 	0.2750 	0.4863 	1.8365 	0.0000 	0.0000 	0.0000 	0.0000 
...
一共有1700行数据



按百分比计算得分的表
Point	Saturated fat	Plant protein	High-quality carbohydrate	Unsaturated fat	Animal protein	Low-quality carbohydrate
0	< 13.43	> 32.51	> 83.51	< 18.80	> 40.23	> 64.63
1	13.43 - 17.03	29.63 - 32.51	79.80 - 83.51	18.80 - 22.20	34.01 - 40.23	58.49 - 64.63
2	17.03 - 20.23	27.06 - 29.63	76.54 - 79.80	22.20 - 25.00	29.95 - 34.01	53.93 - 58.49
3	20.23 - 23.40	26.85 - 27.06	73.34 - 76.54	25.00 - 27.69	26.71 - 29.95	49.76 - 53.93
4	23.40 - 26.81	25.52 - 26.85	69.89 - 73.34	27.69 - 30.47	23.87 - 26.71	45.74 - 49.76
5	26.81 - 30.67	18.10 - 25.52	66.05 - 69.89	30.47 - 33.46	21.27 - 23.87	41.49 - 45.74
6	30.67 - 35.18	14.72 - 18.10	61.57 - 66.04	33.46 -36.92	18.74 - 21.27	36.79 - 41.49
7	35.18 - 40.76	14.13 - 14.72	56.09 - 61.57	36.92 - 41.11	16.13 - 18.74	31.10 - 36.79
8	40.76 - 48.32	13.81 - 14.13	48.73 - 56.09	41.11 - 46.72	13.20 - 16.13	23.79 - 31.10
9	48.32 - 60.69	13.45 - 13.81	36.72 - 48.73	46.72 - 55.20	9.34 - 13.20	14.00 - 23.79
10	> 60.69	< 13.45	< 36.72	> 55.20	< 9.34	<14.00
