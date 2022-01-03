const os = require('os');

const { arch, platform, totalmem, freemem } = os;

setInterval(() => {
    const tRam = totalmem() / 1024 / 1024 / 1024;
    const fRam = freemem() / 1024 / 1024 / 1024;
    const usage = (fRam / tRam) * 100;

    const stats = {
        OS: platform(),
        Arch: arch(),
        TotalRAM: `${tRam.toFixed(2)}GB`,
        FreeRAM: `${fRam.toFixed(2)}GB`,
        Usage: `${usage.toFixed(2)}%`
    };

    exports.stats = stats;
}, 2000)

