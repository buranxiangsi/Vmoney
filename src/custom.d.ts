
type RootState = {
  recordList: RecordItem[],
  createRecordError: Error | null,
  createTagError: Error | null,
  tagList: Tag[],
  currentTag?: Tag,
  userList:User[],
  currentUser?:User
}
type RecordItem = {
  tags: Tag[];
  notes: string;
  type: string;
  amount: number; //数据类型
  createdAt?: string; //类 /构造函数
};
type Tag = {
  id: string;
  name: string;
};
type User = {
  name: string;
  password: string;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated';
  update: (id: string, name: string) => 'success' | 'not Found' | 'duplicated';
  remove: (id: string) => boolean;
  save: () => void;
};
interface Window {
  
}