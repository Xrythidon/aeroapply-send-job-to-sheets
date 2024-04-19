type IStorage = {
    storage_token: string | undefined
    storage_sheet_id: string | undefined
};

const defaultStorage: IStorage = {
    storage_token: undefined,
    storage_sheet_id: undefined
};

export const storage = {
    get: (): Promise<IStorage> =>
        chrome.storage.sync.get(defaultStorage) as Promise<IStorage>,
    set: (value: IStorage): Promise<void> => chrome.storage.sync.set(value),
};
