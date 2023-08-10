"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorMessages = exports.messages = void 0;
exports.messages = {
    authError: '権限がありません。',
    dbUnknownError: 'データベースエラーが発生しました。システム管理者にお問い合わせください。',
    fileUploadSizeError: (size) => `アップロードサイズの上限(${size})を超えています。`,
    undefinedValueError: ($1) => `定義されていない入力です。(${$1})`,
    notFoundParameterError: (paramName) => `データベースに登録されていないため処理に失敗しました(${paramName})`,
    passwordError: 'ユーザ名またはパスワードが間違っています。',
    dataMismatchingError: 'データ不整合のため処理を実行出来ませんでした。システム管理者にお問い合わせください。',
    systemError: 'システムエラーが発生しました。',
    duplicateValueError: ($1) => `すでに使用されている${$1}です。`,
    invalidTokenError: 'INVALID_TOKEN',
    imageUploadSizeError: (size) => `画像アップロードサイズの上限(${size}MB)を超えています。`,
    imageUploadTypeError: '画像の形式が正しくありません。png, jpeg, jpgをアップロードしてください。',
    emailFormatError: `メールアドレスの形式が正しくありません。`,
    documentUploadTypeError: '資料の形式が正しくありません。xlsx, doc, pptx, pdf, png, jpg, jpegをアップロードしてください。',
    documentUploadSizeError: (size) => `資料アップロードサイズの上限(${size})を超えています。`,
    fileImportSizeError: (size) => `取り込みファイルサイズの上限(${size}MB)を超えています。`,
    fileImportFormatError: `取り込みファイルがCSV形式ではありません。`,
    fileImportCharsetError: `取り込みファイルの文字コードが正しくありません。`,
    fileImportTypeError: `許可されていない取込ファイルです。`,
    invalidEmailAddressError: '有効なメールアドレスではありません。',
    invalidPassAuthKeyError: '無効なURLです。パスワード再発行メールから1時間を経過している場合、再度パスワードの再発行を行って下さい。',
};
exports.validatorMessages = {
    required: (column) => `「${column}」は必須です。`,
    typeError: (column, type) => `「${column}」は${type}のみ入力可能です。`,
    effectivenessError: (column) => `有効な「${column}」を入力してください。`,
    lengthExceeded: (column, length) => `「${column}」は${length}文字以内で入力してください。`,
    decimalError: (column, length1, length2) => `「${column}」は小数点前${length1}桁、小数点以下${length2}桁で入力してください。`,
    emailAddressFormatError: (column) => `「${column}」は不正なメールアドレス形式です。`,
    dataExist: (column) => `入力された「${column}」は既に使用されています。`,
    nonKatakanaInputError: (column) => `「${column}」はカタカナを入力してください。`,
    passwordError: 'パスワードは以下を満たす必要があります\n　　文字種が半角英数字のみ\n　　最低8文字以上\n　　半角英字と数字がそれぞれ1文字以含まれている',
    inputMismatchError: (...args) => `「${args[0]}」と「${args[1]}」が一致していません。`,
};
//# sourceMappingURL=constants.js.map