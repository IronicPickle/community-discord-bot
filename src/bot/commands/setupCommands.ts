import { bot } from "../setupBot.ts";
import getTime from "./getTime.ts";
import listGuildConfig from "./listGuildConfig.ts";
import play from "./play.ts";
import seek from "./seek.ts";
import setPitch from "./setPitch.ts";
import skip from "./skip.ts";
import volume from "./volume.ts";
import stop from "./stop.ts";
import pause from "./pause.ts";
import resume from "./resume.ts";
import getQueue from "./getQueue.ts";
import setBass from "./setBass.ts";
import setTreble from "./setTreble.ts";

export default async () => {
  // Affect track
  await play();
  await skip();
  await pause();
  await seek();
  await resume();
  await stop();

  // Filters
  await volume();
  await setPitch();
  await setBass();
  await setTreble();

  // Get info
  await getTime();
  await getQueue();

  // Misc
  await listGuildConfig();

  bot.commandManager.registerListener();
};
