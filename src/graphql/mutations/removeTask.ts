import { GraphQLString } from 'graphql';
import taskGraphQLType from '../taskType';
import Task from '../../models/task';
export default {
    type: taskGraphQLType,
    args: {
        id: { type: GraphQLString },
    },
    async resolve(parent, args) {
        return Task.findById(args.id).remove();
    }
}