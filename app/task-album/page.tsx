export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center h-screen py-8 bg-gray-50">
            <div className="max-w-2xl text-center w-full">
                <h1 className="text-4xl font-bold mb-4 text-blue-600">たすくあるばむ</h1>
                <p className="text-lg text-gray-700 mb-4">「たすくあるばむ」はタスク管理＋アルバムをテーマとしたWebアプリです</p>
                <br/>
                <p className="text-lg text-gray-700 mb-2">タスクが完了すると、思い出ページにタスクが遷移し、思い出を振り返ることができます。</p>
                <p className="text-lg text-gray-700 mb-2">思い出ページでは、写真、コメントを追加することができます</p>
                <br/>
                <p className="text-lg mt-4">バックエンドソースコード : <a href="https://github.com/sungyo4869/Task-Album-Backend" className="underline text-blue-500">https://github.com/sungyo4869/Task-Album-Backend</a></p>
                <p className="text-lg mt-2">フロントエンドソースコード : <a href="https://github.com/sungyo4869/Task-Album-Frontend" className="underline text-blue-500">https://github.com/sungyo4869/Task-Album-Frontend</a></p>
            </div>
        </div>
    )
}
