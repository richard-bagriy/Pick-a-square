const SET_SETTING = 'GAME/SET_SETTING'
const SET_USER_NAME = 'GAME/SET_USER_NAME'
const SET_GAME_BOARD = 'GAME/SET_GAME_BOARD'
const SET_GAME_START = 'GAME/SET_GAME_START'
const SET_GAME_END = 'GAME/SET_GAME_END'
const SET_SCORE_PC = 'GAME/SET_SCORE_PC'
const SET_SCORE_PLAYER = 'GAME/SET_SCORE_PLAYER'
const SET_WINNER = 'GAME/SET_WINNER'
const ADD_TO_HISTORY = 'GAME/ADD_TO_HISTORY'
const CLEAR_SCORE = 'GAME/CLEAR_SCORE'
const SET_COL = 'GAME/SET_COL'

type SettingType = {
    name: string
    field: number
    delay: number
}

type WinnerType = {
    time: string
    name: string
}

type InitialStateType = {
    settings: Array<SettingType>
    setting: SettingType | {}
    userName: string
    board: Array<number> | []
    start: boolean
    end: boolean
    score: { pc: number, player: number }
    winner: WinnerType | {}
    history: Array<WinnerType> | []
}

export const initialState: InitialStateType = {
    settings: [
        { name: 'Easy', field: 5, delay: 2000 },
        { name: 'Normal', field: 10, delay: 1000 },
        { name: 'Hard', field: 15, delay: 900 }
    ],
    setting: {},
    userName: '',
    board: [],
    start: false,
    end: false,
    score: { pc: 0, player: 0 },
    winner: {},
    history: []
}

// Todo: Add type for action
export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_SETTING: 
            return {
                ...state,
                setting: action.payload
            }
        case SET_USER_NAME:
            return {
                ...state,
                userName: action.payload
            }
        case SET_GAME_BOARD: 
            return {
                ...state,
                board: [
                    ...new Array(action.payload).fill(0)
                        .map(() => new Array(action.payload).fill(0) )
                ]
            }
        case SET_GAME_START:
            return {
                ...state,
                start: action.payload
            }
        case SET_GAME_END:
            return {
                ...state,
                end: action.payload
            }
        case SET_SCORE_PC: 
            return {
                ...state,
                score: {
                    ...state.score,
                    pc: state.score.pc + 1
                },
            }
        case SET_SCORE_PLAYER:
            return {
                ...state,
                score: {
                    ...state.score,
                    player: state.score.player + 1
                },
            }
        case SET_WINNER:
            return {
                ...state,
                winner: action.payload
            }
        case ADD_TO_HISTORY:
            return {
                ...state,
                history: [...state.history, action.payload]
            }
        case CLEAR_SCORE:
            return {
                ...state,
                score: { player: 0, pc: 0 }
            }
        case SET_COL:
            return {
                ...state,
                // Todo: Change that in future
                // @ts-ignore
                board: state.board.map((row: any, y: any) => 
                    (y === action.payload.y)
                        ? row.map((col: any, x: any) => 
                            (x === action.payload.x)
                                ? action.payload.value
                                : col
                        )
                        : row
                )
            }
        default: return state
    }
}

type SetGameSettingType = {
    type: typeof SET_SETTING
    payload: SettingType
}
export const setGameSetting = (setting: SettingType): SetGameSettingType => ({ type: SET_SETTING, payload: setting })

type SetUserNameType = {
    type: typeof SET_USER_NAME
    payload: string

}
export const setUserName = (name: string): SetUserNameType => ({ type: SET_USER_NAME, payload: name })

type SetGameBoardType = {
    type: typeof SET_GAME_BOARD
    payload: number
}
export const setGameBoard = (size: number): SetGameBoardType => ({ type: SET_GAME_BOARD, payload: size })

type SetGameStartType = {
    type: typeof SET_GAME_START
    payload: boolean
}
export const setGameStart = (start: boolean): SetGameStartType => ({ type: SET_GAME_START, payload: start })

type SetGameEndType = {
    type: typeof SET_GAME_END
    payload: boolean
}
export const setGameEnd = (end: boolean): SetGameEndType => ({ type: SET_GAME_END, payload: end })

type SetColProps = {
    x: number
    y: number
    value: number
}
type SetColType = {
    type: typeof SET_COL
    payload: { x: number, y: number, value: number }
}
export const setCol: (obj: SetColProps) => SetColType 
    = ({ x, y, value }) => ({ type: SET_COL, payload: { x, y, value } })

type SetScorePcType = {
    type: typeof SET_SCORE_PC
}
export const setScorePc = (): SetScorePcType => ({ type: SET_SCORE_PC })

type SetScorePlayerType = {
    type: typeof SET_SCORE_PLAYER
}
export const setScorePlayer = (): SetScorePlayerType => ({ type: SET_SCORE_PLAYER })

type SetWinnerType = {
    type: typeof SET_WINNER
    payload: WinnerType
}
export const setWinner = (winner: WinnerType): SetWinnerType => ({ type: SET_WINNER, payload: winner })

type AddToHistoryType = {
    type: typeof ADD_TO_HISTORY
    payload: WinnerType
}
export const addToHistory = (winner: WinnerType): AddToHistoryType => ({ type: ADD_TO_HISTORY, payload: winner })

type ClearScroreType = {
    type: typeof CLEAR_SCORE
}
export const clearScore = (): ClearScroreType => ({ type: CLEAR_SCORE })