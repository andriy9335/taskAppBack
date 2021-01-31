import { GraphQLString } from 'graphql';
import taskGraphQLType from '../taskType';
import Task from '../../models/task';
export default {
    type: taskGraphQLType,
    args: {
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
    },
    async resolve(parent, args) {
        const task = await Task.findById(args.id);
        task.title = args.title;
        task.description = args.description;
        task.updated_at = Date.now();

        return task.save();
    }
}