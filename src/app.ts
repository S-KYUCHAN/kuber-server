import { GraphQLServer } from "graphql-yoga";
import cors from "cors";
import helmet from "helmet";
import logger from "morgan";

class App {
    public app: GraphQLServer;
    constructor() {
        this.app(); GraphQLServer({
        this.middlewares();
        })
    }
    private middlewares: () => {
        this.app.express.use(cors());
        this.app.express.use(helmet());
        this.app.express.use(logger("dev"));
    };
}

export default new App().app
