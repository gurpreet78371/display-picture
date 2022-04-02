import {
    IAppAccessors,
    IConfigurationExtend,
    IEnvironmentRead,
    IHttp,
    ILogger,
    IPersistence,
    IRead,
} from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IMessage } from '@rocket.chat/apps-engine/definition/messages';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';
import {HelloWorldCommand} from './Commands/HelloWorldCommand'

export class DisplayPictureApp extends App {
    public appLogger: ILogger

    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    public async extendConfiguration(configuration: IConfigurationExtend, environmentRead: IEnvironmentRead): Promise<void> {
        const helloWorldCommand: HelloWorldCommand = new HelloWorldCommand()
        await configuration.slashCommands.provideSlashCommand(helloWorldCommand)
    }
    public async executePreMessageSentPrevent(message: IMessage, read: IRead, http: IHttp, persistence: IPersistence) : Promise<boolean> {
        return true;
    }
}
