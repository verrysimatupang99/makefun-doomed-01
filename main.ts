#!/usr/bin/env node

const message = 'Tell my checkpoints I almost made it.';
const usage = 'Usage: node main.ts [--shout] [--help]\n';

function renderLine(shout: boolean): string {
  if (shout) {
    return message.toUpperCase();
  }

  return message;
}

function hasFlag(flag: string): boolean {
  const args = process.argv.slice(2);
  const terminator = args.indexOf('--');
  const flags = terminator === -1 ? args : args.slice(0, terminator);

  return flags.includes(flag);
}

function main(): void {
  if (hasFlag('--help')) {
    process.stderr.write(usage);
    return;
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
