import { Chateau } from "./Chateau";
import { User } from "./User";

export interface Commentaire {
    
    id: number;
    commentaire: string;
    create_at: Date;
    chateau: Chateau;
    user: User;
}
