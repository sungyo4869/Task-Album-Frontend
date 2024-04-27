import { Card, CardContent, FormControl, InputLabel, NativeSelect } from "@mui/material"
import { comment } from "postcss"

const tasks = [
    {
        task_name: "起きる",
        limit: new Date('2024-04-21T08:30:00'),
        summary: "明日は会議があるよ、がんばろうね",
        comment: "クララが立った"
    },
    {
        task_name: "起きる",
        limit: new Date('2024-04-21T08:30:00'),
        summary: "明日は会議があるよ、がんばろうね",
        comment: "クララが立った"
    },
    {
        task_name: "起きる",
        limit: new Date('2024-04-21T08:30:00'),
        summary: "明日は会議があるよ、がんばろうね",
        comment: "クララが立った"
    },
]

export default function memoryCard() {
    return (
        <>
            {tasks.map((task) => {
                return (
                    <Card sx={{ mt: 1 }}>
                        <CardContent>
                            <p>{task.task_name}</p>
                            <p>期限：{task.limit.toString()}</p>
                            <p>メモ：{task.summary}</p>  
                            <p>コメント：{task.comment}</p>                     
                        </CardContent>
                    </Card>
                )
            })}
        </>
    )
}

