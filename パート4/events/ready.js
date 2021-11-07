module.exports = {
    name: 'ready', //イベントの名前
    once: true, // true -> 一度だけ
    async execute(client) {
        console.log(`起動完了：ログイン中=> ${client.user.tag}`);
    },
};