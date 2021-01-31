import { GraphQLObjectType,  } from 'graphql';
import addTask from './addTask';
import updateTask from './updateTask';
import removeTask from './removeTask';

const Mutations = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addTask,
        updateTask,
        removeTask,
    },
})

export default Mutations;