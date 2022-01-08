export default function anySample(){
    //any=メタモン
    //unknown=イーブイ何になるか分からない

    let name: any = 'Hikari'//string
    console.log("any sample 1:", typeof name, name)

    name = 28//int
    console.log("any sample 2:", typeof name, name)

    //結果anyは危険
}