import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

const SubscribeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [error, setError] = useState('');
    const [subscribers, setSubscribers] = useState(() => {
        // 從 localStorage 讀取訂閱者數據
        if (typeof window !== 'undefined') {
            const savedSubscribers = localStorage.getItem('subscribers');
            return savedSubscribers ? JSON.parse(savedSubscribers) : [];
        }
        return [];
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // 驗證電子郵件格式
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('請輸入有效的電子郵件地址');
            setIsLoading(false);
            return;
        }

        // 檢查是否已訂閱
        if (subscribers.some(sub => sub.email === formData.email)) {
            setError('此電子郵件已訂閱');
            return;
        }

        // 添加新訂閱者
        const newSubscriber = {
            id: Date.now().toString(),
            name: formData.name,
            email: formData.email,
            subscribedAt: new Date().toISOString()
        };

        const updatedSubscribers = [...subscribers, newSubscriber];
        setSubscribers(updatedSubscribers);

        // 保存到 localStorage
        localStorage.setItem('subscribers', JSON.stringify(updatedSubscribers));

        setIsSubscribed(true);
        setFormData({ name: '', email: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="w-full max-w-md mx-auto pt-12 pb-20 rounded-lg max-sm:px-4">
            {isSubscribed ? (
                <div className="text-center">
                    <Check className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">訂閱成功！</h3>
                    <p className="text-gray-600">感謝您的訂閱，我們會在第一時間通知您最新文章。</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h3 className=" text-3xl leading-10 text-center font-[350] text-xl font-bold text-gray-800 mb-4">訂閱最新文章</h3>
                    {error && (
                        <div className="mb-4 p-2 bg-red-100 text-red-600 rounded">
                            {error}
                        </div>
                    )}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 ">
                            姓名
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 "
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            電子郵件
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full rounded-[4px] p-6 bg-[#DC3545]  font-[400] text-lg max-lg:text-md max-md:text-sm  max-md:p-4 transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#D63C3D] hover:to-[#7A31C1]  ">
                        <span className="text-white font-semibold">訂閱</span>
                       
                    </Button>

                </form>
            )}
        </div>
    );
};

export default SubscribeForm; 