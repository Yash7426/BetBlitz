export default interface IUserContext {
  username: string;
  setUsername: React.Dispatch<string>;
  userId: string;
  setUserId: React.Dispatch<string>;
}
