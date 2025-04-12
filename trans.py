import pandas as pd
import json

# 读取Excel文件
df = pd.read_excel('膳食转换表.xlsx', sheet_name='Sheet2')

# 转换为JSON格式
data = df.to_dict('records')

# 保存为JSON文件
with open('food_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)