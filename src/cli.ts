import minimist from 'minimist';

const args = minimist(process.argv.slice(2), {
    boolean: ['help', 'version'],
    string: ['name', 'lastname'],
    alias: {
        h: 'help',
        v: 'version',
    },
});

if (args.help) {
    console.log('Usage: node cli.ts [OPTIONS] [COMMAND]');
    process.exit(0);
}

if (args.version) {
    console.log('V 1.0');
    process.exit(0);
}
