import { Card, CardContent, FormControl, InputLabel, NativeSelect } from "@mui/material"
import Image from 'next/image';
import { comment } from "postcss"

const tasks = [
    {
        task_name: "カラオケ",
        limit: new Date('2024-04-21T08:30:00'),
        summary: "みみちゃんとカラオケだよ、練習しとこうね",
        comment: "君が代で60点をとってしまった…",
        src: '/images/karaoke.jpg'
    },
    {
        task_name: "眉毛サロン",
        limit: new Date('2024-04-21T08:30:00'),
        summary: "眉毛当日までに伸ばそうね",
        comment: "超きれいなイケメン眉毛爆誕！！！",
        src: '/images/mayuge.jpg'
    },
    {
        task_name: "動物園いく",
        limit: new Date('2024-04-21T08:30:00'),
        summary: "ペンギンがいるらしい",
        comment: "ペンギン生臭かった！",
        src: '/images/pengin.jpg'
    },
]

export default function memoryCard() {
    return (
        <>
            {tasks.map((task, index) => {
                return (
                    <Card key={index} sx={{ mt: 1 }}>
                        <CardContent>
                            <p>{task.task_name}</p>
                            <p>期限：{task.limit.toString()}</p>
                            <p>メモ：{task.summary}</p>
                            <p>コメント：{task.comment}</p>
                            <Image
                                src={task.src}
                                alt="写真の説明"
                                width={300}
                                height={300}
                            />
                        </CardContent>
                    </Card>
                )
            })}
        </>
    )
}

