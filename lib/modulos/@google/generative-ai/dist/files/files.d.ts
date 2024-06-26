/**
 * Metadata to provide alongside a file upload
 * @public
 */
export declare interface FileMetadata {
    name?: string;
    displayName?: string;
    mimeType: string;
}

/**
 * File metadata response from server.
 * @public
 */
export declare interface FileMetadataResponse {
    name: string;
    displayName?: string;
    mimeType: string;
    sizeBytes: string;
    createTime: string;
    updateTime: string;
    expirationTime: string;
    sha256Hash: string;
    uri: string;
    state: FileState;
}

/**
 * Processing state of the `File`.
 * @public
 */
export declare enum FileState {
    STATE_UNSPECIFIED = 0,
    PROCESSING = 1,
    ACTIVE = 2,
    FAILED = 10
}

/**
 * Class for managing GoogleAI file uploads.
 * @public
 */
export declare class GoogleAIFileManager {
    apiKey: string;
    private _requestOptions?;
    constructor(apiKey: string, _requestOptions?: RequestOptions);
    /**
     * Upload a file
     */
    uploadFile(filePath: string, fileMetadata: FileMetadata): Promise<UploadFileResponse>;
    /**
     * List all uploaded files
     */
    listFiles(listParams?: ListParams): Promise<ListFilesResponse>;
    /**
     * Get metadata for file with given ID
     */
    getFile(fileId: string): Promise<FileMetadataResponse>;
    /**
     * Delete file with given ID
     */
    deleteFile(fileId: string): Promise<void>;
}

/**
 * Response from calling {@link GoogleAIFileManager.listFiles}
 * @public
 */
export declare interface ListFilesResponse {
    files: FileMetadataResponse[];
    nextPageToken?: string;
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Params to pass to {@link GoogleAIFileManager.listFiles}
 * @public
 */
export declare interface ListParams {
    pageSize?: number;
    pageToken?: string;
}

/**
 * Params passed to getGenerativeModel() or GoogleAIFileManager().
 * @public
 */
export declare interface RequestOptions {
    /**
     * Request timeout in milliseconds.
     */
    timeout?: number;
    /**
     * Version of API endpoint to call (e.g. "v1" or "v1beta"). If not specified,
     * defaults to latest stable version.
     */
    apiVersion?: string;
    /**
     * Additional attribution information to include in the x-goog-api-client header.
     * Used by wrapper SDKs.
     */
    apiClient?: string;
    /**
     * Base endpoint url. Defaults to "https://generativelanguage.googleapis.com"
     */
    baseUrl?: string;
    /**
     * Custom HTTP request headers.
     */
    customHeaders?: Headers | Record<string, string>;
}

/**
 * Response from calling {@link GoogleAIFileManager.uploadFile}
 * @public
 */
export declare interface UploadFileResponse {
    file: FileMetadataResponse;
}

export { }
