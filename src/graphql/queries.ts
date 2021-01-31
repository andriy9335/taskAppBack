import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import Task from '../models/task';
import taskGraphQLType from './taskType';

const Queries = new GraphQLObjectType({
    name: 'Query',
    fields: {
        task: {
            type: taskGraphQLType,
            args: { id: { type: GraphQLString }},
            resolve(parent, args) {
                return Task.findById(args.id)
            },
        },
        tasks: {
            type: new GraphQLList(taskGraphQLType),
            async resolve() {
                return  Task.find();
            }
        }
    }
})

export default Queries;
