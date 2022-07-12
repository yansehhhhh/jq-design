import {
  Toast,
  Loading,
  Icon,
  Button,
  Cell,
  CellGroup,
  Dialog,
  Empty,
  Uploader,
  Image,
  Overlay,
} from "vant";

export default (app: any) => {
  app.use(Toast);
  app.use(Loading);
  app.use(Icon);
  app.use(Button);
  app.use(Cell);
  app.use(CellGroup);
  app.use(Dialog);
  app.use(Empty);
  app.use(Uploader);
  app.use(Image);
  app.use(Overlay);
};
