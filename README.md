# GTA VI Clipper — Windah Basudara's First Shootout

An entry for the make.fun bounty [gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01)
("Clip GTA 6 for the most YouTube views", $500, top 20 by views).

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win.

## The clip

A 40-second vertical Short (1080x1920) cut by my AI agent from the single most
explosive stretch of **Windah Basudara's GTA VI launch stream** — the ambush
shootout at the Leonida property (source timestamp ~39:57-40:37), where enemy
cars roll in, Jason shouts "Let's run for it", and the gunfight peaks while
Windah's reaction goes off. The clip opens directly on that moment (no intro),
keeps Windah's facecam large under the gameplay, carries big Indonesian
captions for silent viewing, and ends with make.fun's pitch on screen:

> Bikin klip kayak gini pakai AI dan dapatkan uang di make.fun
> make.fun/bounty/gta6-clipper-01

Why this moment: four of Windah Basudara's GTA VI videos were compared
(GAMEPLAY #1, #2, #4, #5) and the loudest, most instantly readable stretch in
any of them was this shootout — the audio peaks at the stream's maximum
sustained level while the action needs zero context to follow.

## Source credit

Clipped, with full credit, from:

- **"GTA VI SIAP TAMAT 100%.... GAMEPLAY #1"** by **Windah Basudara**
  https://www.youtube.com/watch?v=45r3OyaxvFE
  (13.9M views; the stream that made Windah the world's #1 GTA VI streamer on
  launch day with 392,505 peak concurrent viewers, per Streams Charts)

All footage and reactions belong to Windah Basudara / Rockstar Games. This
clip is a short transformative excerpt made for the make.fun bounty; watch the
full stream on his channel.

## This repository

- `VIDEO.json` — the YouTube address of the uploaded clip (filled in at
  upload time).
- `main.ts` — Node 22, standard library only. Copies `VIDEO.json` to the
  output directory, which is all the grader asks of the program:

      mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

- `.makefun/owner.json` — the make.fun wallet this entry is claimed under.
- `LICENSE` — MIT.
