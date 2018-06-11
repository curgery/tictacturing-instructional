import Relay from 'react-relay/classic'


export default class CreateGame extends Relay.Mutation {

    getVariables() {
        return {
            p1player: this.props.p1player,
            winner: this.props.winner,
            p1Guess: this.props.guess,
            p1GuessCorrect: this.props.guessCorrect
        }
    }

    getMutation () {
        return Relay.QL`mutation{createGame}`
    }

    getFatQuery () {
        return Relay.QL`
            fragment on CreateGamePayload {
                p1player
            }
        `
    }

    getConfigs() {
        return [
            {
                type: 'RANGE_ADD',
                ParentName: 'p1player',
                parentId: this.props.p1player.id,
                connectionName: 'p1games',
                edgeName: 'edge',
                rangeBehaviors: {
                    '': 'append',
                },
            },
                       
        ]
    }
}