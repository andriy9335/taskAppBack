import { GraphQLString } from 'graphql';
import taskGraphQLType from '../taskType';
import Task from '../../models/task';
export default {
    type: taskGraphQLType,
    args: {
        title: { type: GraphQLString },
        description: { type: GraphQLString },
    },
    resolve(parent, args) {
        const task = new Task({
            title: args.title,
            description: args.description,
        });
        return task.save();
    }
}