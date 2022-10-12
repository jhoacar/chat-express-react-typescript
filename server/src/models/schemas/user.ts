export interface UserSchema {
    id: number
    name: string
    email: string
    password: string
    createdAt: string
    updatedAt: string
}

export interface UserQuery {
    name?: string
    email?: string
    id?: number
}

export abstract class User {
    user: UserSchema

    static schema: any | null

    static driver: any | null

    constructor(user: UserSchema) {
        this.user = user
    }

    public abstract save(): Promise<UserSchema | any>

    public abstract find(user: UserQuery): Promise<Array<UserSchema | any>>

    public abstract findOne(user: UserQuery): Promise<UserSchema | any>

    public abstract updateOne(
        user: UserQuery,
        data: UserQuery
    ): Promise<UserSchema | any>

    public abstract deleteOne(user: UserQuery): Promise<UserSchema | any>
}
