import { MailHandlerModule } from "@modules/mail-handler/mail-handler.module";
import { EmailController } from "@modules/mail-handler/controller/mail-handler.controller";
import { Module } from "@nestjs/common";
import { AppController } from "./controller/app.controller";
import { AppService } from "./service/app.service";

@Module({
  imports: [MailHandlerModule],
  controllers: [AppController, EmailController],
  providers: [AppService],
})
export class AppModule {}
