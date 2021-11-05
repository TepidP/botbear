const shell = require("child_process")

module.exports = {
    name: "uptime",
    ping: true,
    description: 'This command will tell you how long the bot has been live for',
    permission: 100,
    category: "Bot command",
    execute: async (channel, user, input, perm) => {
        try {
            if (module.exports.permission > perm) {
                return;
            }

            const test = shell.execSync("free -h")

            let total = test.toString().split(":")[1]

            total = total.split(" ")
            console.log(total)

            let used = total[17];
            total = total[10];

            used = used.slice(0, -2);
            total = total.slice(0, -1);

            const cpu = shell.execSync("mpstat")

            let cpuused = cpu.toString().split("all")[1]
            console.log(cpuused = cpuused.split(" "))
            cpuused = cpuused.split(" ")[4]

            let temp = shell.execSync("vcgencmd measure_temp");

            temp = temp.toString().split("=")[1];


            return `CPU: ${cpuused}% - Memory: ${used}/${total}B - Temperature: ${temp}`;

        } catch (err) {
            console.log(err);
            return `FeelsDankMan Error`;
        }
    }
}