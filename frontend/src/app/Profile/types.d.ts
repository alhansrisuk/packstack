import { WeightUnit } from "enums";
import { Delete, GetUserPacks } from "types/api/pack";
import { Update } from "types/api/user";
import { PackOverview } from "types/pack";
import { User } from "types/user";

export declare module ProfileSpecs {
    export interface OwnProps {
        getPacks: GetUserPacks;
        deletePack: Delete;
        updateUser: Update;
        fetchUser: () => void;
        user: User;
    }

    export interface State {
        loading: boolean;
        packs: PackOverview[];
    }

    export interface SettingsForm {
        username: string;
        default_weight_unit: WeightUnit;
    }

    export type Props = OwnProps;
}