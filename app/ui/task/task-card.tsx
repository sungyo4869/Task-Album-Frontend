import { Card, CardContent, FormControl, InputLabel, NativeSelect } from "@mui/material"

const tasks = [
    {
        task_name: "レポート提出",
        limit: new Date('2024-04-21T07:30:00'),
        summary: "ネットワークの実験のレポート書かなきゃ、単位落とすよ",
        status: "planning"
    },
    {
        task_name: "デート",
        limit: new Date('2024-04-25T10:30:00'),
        summary: "太郎くんとデートだよ、おめかししようね",
        status: "planning"
    },
    {
        task_name: "会議",
        limit: new Date('2024-04-21T17:30:00'),
        summary: "バイトの会議が入ってるよ、寝ちゃだめだよ",
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

