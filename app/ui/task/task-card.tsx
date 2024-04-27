import { Card, CardContent, FormControl, InputLabel, NativeSelect } from "@mui/material"

const tasks = [
    {
        task_name: "起きる",
        limit: new Date('2024-04-21T08:30:00'),
        summary: "明日は会議があるよ、がんばろうね",
        status: "planning"
    },
    {
        task_name: "起きる",
        limit: new Date('2024-04-21T08:30:00'),
        summary: "明日は会議があるよ、がんばろうね",
        status: "planning"
    },
    {
        task_name: "起きる",
        limit: new Date('2024-04-21T08:30:00'),
        summary: "明日は会議があるよ、がんばろうね",
        status: "planning"
    },
]

export default function taskCard() {
    return (
        <>
            {tasks.map((task, index) => {
                return (
                    <Card key={ index } sx={{ mt: 1 }}>
                        <CardContent>
                            <p>{task.task_name}</p>
                            <p>期限：{task.limit.toString()}</p>
                            <p>メモ：{task.summary}</p>
                            <FormControl fullWidth>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    ステータス
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={10}
                                    inputProps={{
                                    name: 'status',
                                    id: 'status',
                                    }}
                                >
                                    <option value={10}>計画中</option>
                                    <option value={20}>実行中</option>
                                    <option value={30}>完了</option>
                                </NativeSelect>
                                </FormControl>
                        </CardContent>
                    </Card>
                )
            })}
        </>
    )
}

