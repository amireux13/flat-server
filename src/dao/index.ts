import { DAOImplement } from "./Implement";
import { RoomModel } from "../model/room/Room";
import { DAO } from "./Type";
import { RoomUserModel } from "../model/room/RoomUser";
import { UserModel } from "../model/user/User";
import { UserWeChatModel } from "../model/user/WeChat";
import { RoomPeriodicConfigModel } from "../model/room/RoomPeriodicConfig";
import { RoomPeriodicModel } from "../model/room/RoomPeriodic";
import { RoomPeriodicUserModel } from "../model/room/RoomPeriodicUser";
import { RoomRecordModel } from "../model/room/RoomRecord";
import { CloudStorageFilesModel } from "../model/cloudStorage/CloudStorageFiles";
import { CloudStorageUserFilesModel } from "../model/cloudStorage/CloudStorageUserFiles";
import { CloudStorageConfigsModel } from "../model/cloudStorage/CloudStorageConfigs";
import { UserGithubModel } from "../model/user/Github";
import { UserAppleModel } from "../model/user/Apple";

export const UserDAO = DAOImplement(UserModel) as ReturnType<DAO<UserModel>>;

export const UserWeChatDAO = DAOImplement(UserWeChatModel) as ReturnType<DAO<UserWeChatModel>>;

export const UserGithubDAO = DAOImplement(UserGithubModel) as ReturnType<DAO<UserGithubModel>>;

export const UserAppleDAO = DAOImplement(UserAppleModel) as ReturnType<DAO<UserAppleModel>>;

export const RoomDAO = DAOImplement(RoomModel) as ReturnType<DAO<RoomModel>>;

export const RoomUserDAO = DAOImplement(RoomUserModel) as ReturnType<DAO<RoomUserModel>>;

export const RoomPeriodicConfigDAO = DAOImplement(RoomPeriodicConfigModel) as ReturnType<
    DAO<RoomPeriodicConfigModel>
>;

export const RoomPeriodicDAO = DAOImplement(RoomPeriodicModel) as ReturnType<
    DAO<RoomPeriodicModel>
>;

export const RoomPeriodicUserDAO = DAOImplement(RoomPeriodicUserModel) as ReturnType<
    DAO<RoomPeriodicUserModel>
>;

export const RoomRecordDAO = DAOImplement(RoomRecordModel) as ReturnType<DAO<RoomRecordModel>>;

export const CloudStorageUserFilesDAO = DAOImplement(CloudStorageUserFilesModel) as ReturnType<
    DAO<CloudStorageUserFilesModel>
>;

export const CloudStorageFilesDAO = DAOImplement(CloudStorageFilesModel) as ReturnType<
    DAO<CloudStorageFilesModel>
>;

export const CloudStorageConfigsDAO = DAOImplement(CloudStorageConfigsModel) as ReturnType<
    DAO<CloudStorageConfigsModel>
>;
