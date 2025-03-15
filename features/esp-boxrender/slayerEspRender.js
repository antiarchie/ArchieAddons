import { EntityArmorStand } from '../../misc/entities';
import Settings from '../../config';
import RenderLibV2 from '../../../RenderLibV2'

const targetEntity = "zombie";
const Color = Java.type("java.awt.Color");

register('renderWorld', () => {
    if (Settings.slayerEspBox) {
        World.getAllEntitiesOfType(EntityArmorStand).forEach((stand) => {
            let name = stand.getName().removeFormatting().toLowerCase();
            if (name.includes(targetEntity) && !name.includes(" 0❤")) {
              RenderLibV2.drawEspBoxV2(
                stand.getX(),
                stand.getY() - 2,
                stand.getZ(),
                1,
                2,
                1,
                1,
                0,
                0,
                100,
                true,
                3
              );
            }
          });
    };
});
console.log('Skaro >>> Slayer ESP Loaded.');