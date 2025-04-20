import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email } = req.body;
      
      // 驗證輸入
      if (!name || !email) {
        return res.status(400).json({ error: '請提供姓名和電子郵件' });
      }

      // 讀取現有訂閱者數據
      const dataPath = path.join(process.cwd(), 'src/data/member_data/subscribers.json');
      let subscribers = [];
      
      if (fs.existsSync(dataPath)) {
        const fileContent = fs.readFileSync(dataPath, 'utf8');
        subscribers = JSON.parse(fileContent);
      }

      // 檢查是否已訂閱
      const existingSubscriber = subscribers.find(sub => sub.email === email);
      if (existingSubscriber) {
        return res.status(400).json({ error: '此電子郵件已訂閱' });
      }

      // 添加新訂閱者
      subscribers.push({
        id: Date.now().toString(),
        name,
        email,
        subscribedAt: new Date().toISOString()
      });

      // 保存更新後的數據
      fs.writeFileSync(dataPath, JSON.stringify(subscribers, null, 2));

      return res.status(200).json({ message: '訂閱成功' });
    } catch (error) {
      console.error('訂閱處理錯誤:', error);
      return res.status(500).json({ error: '訂閱處理失敗' });
    }
  }

  return res.status(405).json({ error: '方法不允許' });
} 