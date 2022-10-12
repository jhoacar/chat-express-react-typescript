/* eslint-disable class-methods-use-this */
import { User as UserBase, UserQuery, UserSchema } from '@models/schemas'
import DataTypes, {
    InferAttributes,
    InferCreationAttributes,
    Model as BaseModel,
} from 'sequelize'
import sequelize from '@config/sql/connection'

UserBase.schema = {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}

interface UserModel
    extends BaseModel<
            InferAttributes<UserModel>,
            InferCreationAttributes<UserModel>
        >,
        UserSchema {}

const driver = sequelize.define<UserModel>('User', UserBase.schema, {
    tableName: 'users',
})
UserBase.driver = driver

export default class User extends UserBase {
    public async save() {
        const data: any = { ...this.user }
        const user = await driver.create(data, { raw: true })
        return {
            ...this.user,
            password: undefined,
            id: user.id,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public async find(query: UserQuery) {
        const users = await driver.findAll({
            where: { ...query },
            raw: true,
            nest: true,
        })
        return users
    }

    public async findOne(query: UserQuery) {
        const user = await driver.findOne({
            where: { ...query },
            raw: true,
            nest: true,
        })
        return user
    }

    public async updateOne(query: UserQuery, data: UserQuery) {
        const user = await driver.update(data, { where: { ...query } })
        return user
    }

    public async deleteOne(query: UserQuery) {
        const user = await driver.destroy({ where: { ...query } })
        return user
    }
}
