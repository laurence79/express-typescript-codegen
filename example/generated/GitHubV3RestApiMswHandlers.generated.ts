import * as msw from 'msw';

export type MetaRootRequestQuery = {};

export type MetaRootRequestHeaders = {};

export type MetaRootRequestParams = {};

export type MetaRootRequestBody = never;

export type MetaRootResponseStatus = 200;

export type Root = {
  readonly current_user_url: string;
  readonly current_user_authorizations_html_url: string;
  readonly authorizations_url: string;
  readonly code_search_url: string;
  readonly commit_search_url: string;
  readonly emails_url: string;
  readonly emojis_url: string;
  readonly events_url: string;
  readonly feeds_url: string;
  readonly followers_url: string;
  readonly following_url: string;
  readonly gists_url: string;
  readonly hub_url: string;
  readonly issue_search_url: string;
  readonly issues_url: string;
  readonly keys_url: string;
  readonly label_search_url: string;
  readonly notifications_url: string;
  readonly organization_url: string;
  readonly organization_repositories_url: string;
  readonly organization_teams_url: string;
  readonly public_gists_url: string;
  readonly rate_limit_url: string;
  readonly repository_url: string;
  readonly repository_search_url: string;
  readonly current_user_repositories_url: string;
  readonly starred_url: string;
  readonly starred_gists_url: string;
  readonly topic_search_url?: string;
  readonly user_url: string;
  readonly user_organizations_url: string;
  readonly user_repositories_url: string;
  readonly user_search_url: string;
};

export type MetaRootResponseBody = Root;

export type MetaRootResolver = msw.HttpResponseResolver<
  MetaRootRequestParams,
  MetaRootRequestBody,
  MetaRootResponseBody
>;

export type AppsGetAuthenticatedRequestQuery = {};

export type AppsGetAuthenticatedRequestHeaders = {};

export type AppsGetAuthenticatedRequestParams = {};

export type AppsGetAuthenticatedRequestBody = never;

export type AppsGetAuthenticatedResponseStatus = 200;

export type SimpleUser = {
  readonly name?: string | null;
  readonly email?: string | null;
  readonly login: string;
  readonly id: number;
  readonly node_id: string;
  readonly avatar_url: string;
  readonly gravatar_id: string | null;
  readonly url: string;
  readonly html_url: string;
  readonly followers_url: string;
  readonly following_url: string;
  readonly gists_url: string;
  readonly starred_url: string;
  readonly subscriptions_url: string;
  readonly organizations_url: string;
  readonly repos_url: string;
  readonly events_url: string;
  readonly received_events_url: string;
  readonly type: string;
  readonly site_admin: boolean;
  readonly starred_at?: string;
} | null;

export type GitHubApp = {
  readonly id: number;
  readonly slug?: string;
  readonly node_id: string;
  readonly owner: SimpleUser;
  readonly name: string;
  readonly description: string | null;
  readonly external_url: string;
  readonly html_url: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly permissions: {
    readonly issues?: string;
    readonly checks?: string;
    readonly metadata?: string;
    readonly contents?: string;
    readonly deployments?: string;
  };
  readonly events: ReadonlyArray<string>;
  readonly installations_count?: number;
  readonly client_id?: string;
  readonly client_secret?: string;
  readonly webhook_secret?: string | null;
  readonly pem?: string;
};

export type AppsGetAuthenticatedResponseBody = GitHubApp;

export type AppsGetAuthenticatedResolver = msw.HttpResponseResolver<
  AppsGetAuthenticatedRequestParams,
  AppsGetAuthenticatedRequestBody,
  AppsGetAuthenticatedResponseBody
>;

export type AppsCreateFromManifestRequestQuery = {};

export type AppsCreateFromManifestRequestHeaders = {};

export type AppsCreateFromManifestRequestParams = { readonly code: string };

export type AppsCreateFromManifestRequestBody = never;

export type AppsCreateFromManifestResponseStatus = 201 | 404 | 422;

export type BasicError = {
  readonly message?: string;
  readonly documentation_url?: string;
  readonly url?: string;
  readonly status?: string;
};

export type ValidationErrorSimple = {
  readonly message: string;
  readonly documentation_url: string;
  readonly errors?: ReadonlyArray<string>;
};

export type AppsCreateFromManifestResponseBody =
  | (GitHubApp & {
      readonly client_id: string;
      readonly client_secret: string;
      readonly webhook_secret: string | null;
      readonly pem: string;
    })
  | BasicError
  | ValidationErrorSimple;

export type AppsCreateFromManifestResolver = msw.HttpResponseResolver<
  AppsCreateFromManifestRequestParams,
  AppsCreateFromManifestRequestBody,
  AppsCreateFromManifestResponseBody
>;

export type AppsGetWebhookConfigForAppRequestQuery = {};

export type AppsGetWebhookConfigForAppRequestHeaders = {};

export type AppsGetWebhookConfigForAppRequestParams = {};

export type AppsGetWebhookConfigForAppRequestBody = never;

export type AppsGetWebhookConfigForAppResponseStatus = 200;

export type WebhookConfigUrl = string;

export type WebhookConfigContentType = string;

export type WebhookConfigSecret = string;

export type WebhookConfigInsecureSsl = string | number;

export type WebhookConfiguration = {
  readonly url?: WebhookConfigUrl;
  readonly content_type?: WebhookConfigContentType;
  readonly secret?: WebhookConfigSecret;
  readonly insecure_ssl?: WebhookConfigInsecureSsl;
};

export type AppsGetWebhookConfigForAppResponseBody = WebhookConfiguration;

export type AppsGetWebhookConfigForAppResolver = msw.HttpResponseResolver<
  AppsGetWebhookConfigForAppRequestParams,
  AppsGetWebhookConfigForAppRequestBody,
  AppsGetWebhookConfigForAppResponseBody
>;

export type AppsUpdateWebhookConfigForAppRequestQuery = {};

export type AppsUpdateWebhookConfigForAppRequestHeaders = {};

export type AppsUpdateWebhookConfigForAppRequestParams = {};

export type AppsUpdateWebhookConfigForAppRequestBody = {
  readonly url?: WebhookConfigUrl;
  readonly content_type?: WebhookConfigContentType;
  readonly secret?: WebhookConfigSecret;
  readonly insecure_ssl?: WebhookConfigInsecureSsl;
};

export type AppsUpdateWebhookConfigForAppResponseStatus = 200;

export type AppsUpdateWebhookConfigForAppResponseBody = WebhookConfiguration;

export type AppsUpdateWebhookConfigForAppResolver = msw.HttpResponseResolver<
  AppsUpdateWebhookConfigForAppRequestParams,
  AppsUpdateWebhookConfigForAppRequestBody,
  AppsUpdateWebhookConfigForAppResponseBody
>;

export type AppsListWebhookDeliveriesRequestQuery = {
  readonly per_page?: string;
  readonly cursor?: string;
};

export type AppsListWebhookDeliveriesRequestHeaders = {};

export type AppsListWebhookDeliveriesRequestParams = {};

export type AppsListWebhookDeliveriesRequestBody = never;

export type AppsListWebhookDeliveriesResponseStatus = 200 | 400 | 422;

export type SimpleWebhookDelivery = {
  readonly id: number;
  readonly guid: string;
  readonly delivered_at: string;
  readonly redelivery: boolean;
  readonly duration: number;
  readonly status: string;
  readonly status_code: number;
  readonly event: string;
  readonly action: string | null;
  readonly installation_id: number | null;
  readonly repository_id: number | null;
};

export type ValidationError = {
  readonly message: string;
  readonly documentation_url: string;
  readonly errors?: ReadonlyArray<{
    readonly resource?: string;
    readonly field?: string;
    readonly message?: string;
    readonly code: string;
    readonly index?: number;
    readonly value?:
      | string
      | null
      | number
      | null
      | ReadonlyArray<string>
      | null;
  }>;
};

export type AppsListWebhookDeliveriesResponseBody =
  | ReadonlyArray<SimpleWebhookDelivery>
  | BasicError
  | ValidationError;

export type AppsListWebhookDeliveriesResolver = msw.HttpResponseResolver<
  AppsListWebhookDeliveriesRequestParams,
  AppsListWebhookDeliveriesRequestBody,
  AppsListWebhookDeliveriesResponseBody
>;

export type AppsGetWebhookDeliveryRequestQuery = {};

export type AppsGetWebhookDeliveryRequestHeaders = {};

export type AppsGetWebhookDeliveryRequestParams = {
  readonly delivery_id: string;
};

export type AppsGetWebhookDeliveryRequestBody = never;

export type AppsGetWebhookDeliveryResponseStatus = 200 | 400 | 422;

export type WebhookDelivery = {
  readonly id: number;
  readonly guid: string;
  readonly delivered_at: string;
  readonly redelivery: boolean;
  readonly duration: number;
  readonly status: string;
  readonly status_code: number;
  readonly event: string;
  readonly action: string | null;
  readonly installation_id: number | null;
  readonly repository_id: number | null;
  readonly url?: string;
  readonly request: {
    readonly headers: never | null;
    readonly payload: never | null;
  };
  readonly response: {
    readonly headers: never | null;
    readonly payload: string | null;
  };
};

export type AppsGetWebhookDeliveryResponseBody =
  | WebhookDelivery
  | BasicError
  | ValidationError;

export type AppsGetWebhookDeliveryResolver = msw.HttpResponseResolver<
  AppsGetWebhookDeliveryRequestParams,
  AppsGetWebhookDeliveryRequestBody,
  AppsGetWebhookDeliveryResponseBody
>;

export type AppsRedeliverWebhookDeliveryRequestQuery = {};

export type AppsRedeliverWebhookDeliveryRequestHeaders = {};

export type AppsRedeliverWebhookDeliveryRequestParams = {
  readonly delivery_id: string;
};

export type AppsRedeliverWebhookDeliveryRequestBody = never;

export type AppsRedeliverWebhookDeliveryResponseStatus = 202 | 400 | 422;

export type AppsRedeliverWebhookDeliveryResponseBody =
  | never
  | BasicError
  | ValidationError;

export type AppsRedeliverWebhookDeliveryResolver = msw.HttpResponseResolver<
  AppsRedeliverWebhookDeliveryRequestParams,
  AppsRedeliverWebhookDeliveryRequestBody,
  AppsRedeliverWebhookDeliveryResponseBody
>;

export type AppsListInstallationsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
  readonly since?: string;
  readonly outdated?: string;
};

export type AppsListInstallationsRequestHeaders = {};

export type AppsListInstallationsRequestParams = {};

export type AppsListInstallationsRequestBody = never;

export type AppsListInstallationsResponseStatus = 200;

export type Enterprise = {
  readonly description?: string | null;
  readonly html_url: string;
  readonly website_url?: string | null;
  readonly id: number;
  readonly node_id: string;
  readonly name: string;
  readonly slug: string;
  readonly created_at: string | null;
  readonly updated_at: string | null;
  readonly avatar_url: string;
};

export type AppPermissions = {
  readonly actions?: 'read' | 'write';
  readonly administration?: 'read' | 'write';
  readonly checks?: 'read' | 'write';
  readonly contents?: 'read' | 'write';
  readonly deployments?: 'read' | 'write';
  readonly environments?: 'read' | 'write';
  readonly issues?: 'read' | 'write';
  readonly metadata?: 'read' | 'write';
  readonly packages?: 'read' | 'write';
  readonly pages?: 'read' | 'write';
  readonly pull_requests?: 'read' | 'write';
  readonly repository_announcement_banners?: 'read' | 'write';
  readonly repository_hooks?: 'read' | 'write';
  readonly repository_projects?: 'read' | 'write' | 'admin';
  readonly secret_scanning_alerts?: 'read' | 'write';
  readonly secrets?: 'read' | 'write';
  readonly security_events?: 'read' | 'write';
  readonly single_file?: 'read' | 'write';
  readonly statuses?: 'read' | 'write';
  readonly vulnerability_alerts?: 'read' | 'write';
  readonly workflows?: 'write';
  readonly members?: 'read' | 'write';
  readonly organization_administration?: 'read' | 'write';
  readonly organization_custom_roles?: 'read' | 'write';
  readonly organization_announcement_banners?: 'read' | 'write';
  readonly organization_hooks?: 'read' | 'write';
  readonly organization_plan?: 'read';
  readonly organization_projects?: 'read' | 'write' | 'admin';
  readonly organization_packages?: 'read' | 'write';
  readonly organization_secrets?: 'read' | 'write';
  readonly organization_self_hosted_runners?: 'read' | 'write';
  readonly organization_user_blocking?: 'read' | 'write';
  readonly team_discussions?: 'read' | 'write';
};

export type Installation = {
  readonly id: number;
  readonly account: SimpleUser | Enterprise | null;
  readonly repository_selection: 'all' | 'selected';
  readonly access_tokens_url: string;
  readonly repositories_url: string;
  readonly html_url: string;
  readonly app_id: number;
  readonly target_id: number;
  readonly target_type: string;
  readonly permissions: AppPermissions;
  readonly events: ReadonlyArray<string>;
  readonly created_at: string;
  readonly updated_at: string;
  readonly single_file_name: string | null;
  readonly has_multiple_single_files?: boolean;
  readonly single_file_paths?: ReadonlyArray<string>;
  readonly app_slug: string;
  readonly suspended_by: SimpleUser;
  readonly suspended_at: string | null;
  readonly contact_email?: string | null;
};

export type AppsListInstallationsResponseBody = ReadonlyArray<Installation>;

export type AppsListInstallationsResolver = msw.HttpResponseResolver<
  AppsListInstallationsRequestParams,
  AppsListInstallationsRequestBody,
  AppsListInstallationsResponseBody
>;

export type AppsGetInstallationRequestQuery = {};

export type AppsGetInstallationRequestHeaders = {};

export type AppsGetInstallationRequestParams = {
  readonly installation_id: string;
};

export type AppsGetInstallationRequestBody = never;

export type AppsGetInstallationResponseStatus = 200 | 404;

export type AppsGetInstallationResponseBody = Installation | BasicError;

export type AppsGetInstallationResolver = msw.HttpResponseResolver<
  AppsGetInstallationRequestParams,
  AppsGetInstallationRequestBody,
  AppsGetInstallationResponseBody
>;

export type AppsDeleteInstallationRequestQuery = {};

export type AppsDeleteInstallationRequestHeaders = {};

export type AppsDeleteInstallationRequestParams = {
  readonly installation_id: string;
};

export type AppsDeleteInstallationRequestBody = never;

export type AppsDeleteInstallationResponseStatus = 204 | 404;

export type AppsDeleteInstallationResponseBody = never | BasicError;

export type AppsDeleteInstallationResolver = msw.HttpResponseResolver<
  AppsDeleteInstallationRequestParams,
  AppsDeleteInstallationRequestBody,
  AppsDeleteInstallationResponseBody
>;

export type AppsCreateInstallationAccessTokenRequestQuery = {};

export type AppsCreateInstallationAccessTokenRequestHeaders = {};

export type AppsCreateInstallationAccessTokenRequestParams = {
  readonly installation_id: string;
};

export type AppsCreateInstallationAccessTokenRequestBody =
  | {
      readonly repositories?: ReadonlyArray<string>;
      readonly repository_ids?: ReadonlyArray<number>;
      readonly permissions?: AppPermissions;
    }
  | undefined;

export type AppsCreateInstallationAccessTokenResponseStatus =
  | 201
  | 401
  | 403
  | 404
  | 422;

export type LicenseSimple = {
  readonly key: string;
  readonly name: string;
  readonly url: string | null;
  readonly spdx_id: string | null;
  readonly node_id: string;
  readonly html_url?: string;
} | null;

export type Repository = {
  readonly id: number;
  readonly node_id: string;
  readonly name: string;
  readonly full_name: string;
  readonly license: LicenseSimple;
  readonly organization?: SimpleUser;
  readonly forks: number;
  readonly permissions?: {
    readonly admin: boolean;
    readonly pull: boolean;
    readonly triage?: boolean;
    readonly push: boolean;
    readonly maintain?: boolean;
  };
  readonly owner: SimpleUser;
  readonly private: boolean;
  readonly html_url: string;
  readonly description: string | null;
  readonly fork: boolean;
  readonly url: string;
  readonly archive_url: string;
  readonly assignees_url: string;
  readonly blobs_url: string;
  readonly branches_url: string;
  readonly collaborators_url: string;
  readonly comments_url: string;
  readonly commits_url: string;
  readonly compare_url: string;
  readonly contents_url: string;
  readonly contributors_url: string;
  readonly deployments_url: string;
  readonly downloads_url: string;
  readonly events_url: string;
  readonly forks_url: string;
  readonly git_commits_url: string;
  readonly git_refs_url: string;
  readonly git_tags_url: string;
  readonly git_url: string;
  readonly issue_comment_url: string;
  readonly issue_events_url: string;
  readonly issues_url: string;
  readonly keys_url: string;
  readonly labels_url: string;
  readonly languages_url: string;
  readonly merges_url: string;
  readonly milestones_url: string;
  readonly notifications_url: string;
  readonly pulls_url: string;
  readonly releases_url: string;
  readonly ssh_url: string;
  readonly stargazers_url: string;
  readonly statuses_url: string;
  readonly subscribers_url: string;
  readonly subscription_url: string;
  readonly tags_url: string;
  readonly teams_url: string;
  readonly trees_url: string;
  readonly clone_url: string;
  readonly mirror_url: string | null;
  readonly hooks_url: string;
  readonly svn_url: string;
  readonly homepage: string | null;
  readonly language: string | null;
  readonly forks_count: number;
  readonly stargazers_count: number;
  readonly watchers_count: number;
  readonly size: number;
  readonly default_branch: string;
  readonly open_issues_count: number;
  readonly is_template?: boolean;
  readonly topics?: ReadonlyArray<string>;
  readonly has_issues: boolean;
  readonly has_projects: boolean;
  readonly has_wiki: boolean;
  readonly has_pages: boolean;
  readonly has_downloads: boolean;
  readonly archived: boolean;
  readonly disabled: boolean;
  readonly visibility?: string;
  readonly pushed_at: string | null;
  readonly created_at: string | null;
  readonly updated_at: string | null;
  readonly allow_rebase_merge?: boolean;
  readonly template_repository?: {
    readonly id?: number;
    readonly node_id?: string;
    readonly name?: string;
    readonly full_name?: string;
    readonly owner?: {
      readonly login?: string;
      readonly id?: number;
      readonly node_id?: string;
      readonly avatar_url?: string;
      readonly gravatar_id?: string;
      readonly url?: string;
      readonly html_url?: string;
      readonly followers_url?: string;
      readonly following_url?: string;
      readonly gists_url?: string;
      readonly starred_url?: string;
      readonly subscriptions_url?: string;
      readonly organizations_url?: string;
      readonly repos_url?: string;
      readonly events_url?: string;
      readonly received_events_url?: string;
      readonly type?: string;
      readonly site_admin?: boolean;
    };
    readonly private?: boolean;
    readonly html_url?: string;
    readonly description?: string;
    readonly fork?: boolean;
    readonly url?: string;
    readonly archive_url?: string;
    readonly assignees_url?: string;
    readonly blobs_url?: string;
    readonly branches_url?: string;
    readonly collaborators_url?: string;
    readonly comments_url?: string;
    readonly commits_url?: string;
    readonly compare_url?: string;
    readonly contents_url?: string;
    readonly contributors_url?: string;
    readonly deployments_url?: string;
    readonly downloads_url?: string;
    readonly events_url?: string;
    readonly forks_url?: string;
    readonly git_commits_url?: string;
    readonly git_refs_url?: string;
    readonly git_tags_url?: string;
    readonly git_url?: string;
    readonly issue_comment_url?: string;
    readonly issue_events_url?: string;
    readonly issues_url?: string;
    readonly keys_url?: string;
    readonly labels_url?: string;
    readonly languages_url?: string;
    readonly merges_url?: string;
    readonly milestones_url?: string;
    readonly notifications_url?: string;
    readonly pulls_url?: string;
    readonly releases_url?: string;
    readonly ssh_url?: string;
    readonly stargazers_url?: string;
    readonly statuses_url?: string;
    readonly subscribers_url?: string;
    readonly subscription_url?: string;
    readonly tags_url?: string;
    readonly teams_url?: string;
    readonly trees_url?: string;
    readonly clone_url?: string;
    readonly mirror_url?: string;
    readonly hooks_url?: string;
    readonly svn_url?: string;
    readonly homepage?: string;
    readonly language?: string;
    readonly forks_count?: number;
    readonly stargazers_count?: number;
    readonly watchers_count?: number;
    readonly size?: number;
    readonly default_branch?: string;
    readonly open_issues_count?: number;
    readonly is_template?: boolean;
    readonly topics?: ReadonlyArray<string>;
    readonly has_issues?: boolean;
    readonly has_projects?: boolean;
    readonly has_wiki?: boolean;
    readonly has_pages?: boolean;
    readonly has_downloads?: boolean;
    readonly archived?: boolean;
    readonly disabled?: boolean;
    readonly visibility?: string;
    readonly pushed_at?: string;
    readonly created_at?: string;
    readonly updated_at?: string;
    readonly permissions?: {
      readonly admin?: boolean;
      readonly maintain?: boolean;
      readonly push?: boolean;
      readonly triage?: boolean;
      readonly pull?: boolean;
    };
    readonly allow_rebase_merge?: boolean;
    readonly temp_clone_token?: string;
    readonly allow_squash_merge?: boolean;
    readonly allow_auto_merge?: boolean;
    readonly delete_branch_on_merge?: boolean;
    readonly allow_update_branch?: boolean;
    readonly use_squash_pr_title_as_default?: boolean;
    readonly squash_merge_commit_title?: 'PR_TITLE' | 'COMMIT_OR_PR_TITLE';
    readonly squash_merge_commit_message?:
      | 'PR_BODY'
      | 'COMMIT_MESSAGES'
      | 'BLANK';
    readonly merge_commit_title?: 'PR_TITLE' | 'MERGE_MESSAGE';
    readonly merge_commit_message?: 'PR_BODY' | 'PR_TITLE' | 'BLANK';
    readonly allow_merge_commit?: boolean;
    readonly subscribers_count?: number;
    readonly network_count?: number;
  } | null;
  readonly temp_clone_token?: string;
  readonly allow_squash_merge?: boolean;
  readonly allow_auto_merge?: boolean;
  readonly delete_branch_on_merge?: boolean;
  readonly allow_update_branch?: boolean;
  readonly use_squash_pr_title_as_default?: boolean;
  readonly squash_merge_commit_title?: 'PR_TITLE' | 'COMMIT_OR_PR_TITLE';
  readonly squash_merge_commit_message?:
    | 'PR_BODY'
    | 'COMMIT_MESSAGES'
    | 'BLANK';
  readonly merge_commit_title?: 'PR_TITLE' | 'MERGE_MESSAGE';
  readonly merge_commit_message?: 'PR_BODY' | 'PR_TITLE' | 'BLANK';
  readonly allow_merge_commit?: boolean;
  readonly allow_forking?: boolean;
  readonly web_commit_signoff_required?: boolean;
  readonly subscribers_count?: number;
  readonly network_count?: number;
  readonly open_issues: number;
  readonly watchers: number;
  readonly master_branch?: string;
  readonly starred_at?: string;
  readonly anonymous_access_enabled?: boolean;
};

export type InstallationToken = {
  readonly token: string;
  readonly expires_at: string;
  readonly permissions?: AppPermissions;
  readonly repository_selection?: 'all' | 'selected';
  readonly repositories?: ReadonlyArray<Repository>;
  readonly single_file?: string;
  readonly has_multiple_single_files?: boolean;
  readonly single_file_paths?: ReadonlyArray<string>;
};

export type AppsCreateInstallationAccessTokenResponseBody =
  | InstallationToken
  | BasicError
  | ValidationError;

export type AppsCreateInstallationAccessTokenResolver = msw.HttpResponseResolver<
  AppsCreateInstallationAccessTokenRequestParams,
  AppsCreateInstallationAccessTokenRequestBody,
  AppsCreateInstallationAccessTokenResponseBody
>;

export type AppsSuspendInstallationRequestQuery = {};

export type AppsSuspendInstallationRequestHeaders = {};

export type AppsSuspendInstallationRequestParams = {
  readonly installation_id: string;
};

export type AppsSuspendInstallationRequestBody = never;

export type AppsSuspendInstallationResponseStatus = 204 | 404;

export type AppsSuspendInstallationResponseBody = never | BasicError;

export type AppsSuspendInstallationResolver = msw.HttpResponseResolver<
  AppsSuspendInstallationRequestParams,
  AppsSuspendInstallationRequestBody,
  AppsSuspendInstallationResponseBody
>;

export type AppsUnsuspendInstallationRequestQuery = {};

export type AppsUnsuspendInstallationRequestHeaders = {};

export type AppsUnsuspendInstallationRequestParams = {
  readonly installation_id: string;
};

export type AppsUnsuspendInstallationRequestBody = never;

export type AppsUnsuspendInstallationResponseStatus = 204 | 404;

export type AppsUnsuspendInstallationResponseBody = never | BasicError;

export type AppsUnsuspendInstallationResolver = msw.HttpResponseResolver<
  AppsUnsuspendInstallationRequestParams,
  AppsUnsuspendInstallationRequestBody,
  AppsUnsuspendInstallationResponseBody
>;

export type AppsDeleteAuthorizationRequestQuery = {};

export type AppsDeleteAuthorizationRequestHeaders = {};

export type AppsDeleteAuthorizationRequestParams = {
  readonly client_id: string;
};

export type AppsDeleteAuthorizationRequestBody = {
  readonly access_token: string;
};

export type AppsDeleteAuthorizationResponseStatus = 204 | 422;

export type AppsDeleteAuthorizationResponseBody = never | ValidationError;

export type AppsDeleteAuthorizationResolver = msw.HttpResponseResolver<
  AppsDeleteAuthorizationRequestParams,
  AppsDeleteAuthorizationRequestBody,
  AppsDeleteAuthorizationResponseBody
>;

export type AppsCheckTokenRequestQuery = {};

export type AppsCheckTokenRequestHeaders = {};

export type AppsCheckTokenRequestParams = { readonly client_id: string };

export type AppsCheckTokenRequestBody = { readonly access_token: string };

export type AppsCheckTokenResponseStatus = 200 | 404 | 422;

export type ScopedInstallation = {
  readonly permissions: AppPermissions;
  readonly repository_selection: 'all' | 'selected';
  readonly single_file_name: string | null;
  readonly has_multiple_single_files?: boolean;
  readonly single_file_paths?: ReadonlyArray<string>;
  readonly repositories_url: string;
  readonly account: SimpleUser;
} | null;

export type Authorization = {
  readonly id: number;
  readonly url: string;
  readonly scopes: ReadonlyArray<string> | null;
  readonly token: string;
  readonly token_last_eight: string | null;
  readonly hashed_token: string | null;
  readonly app: {
    readonly client_id: string;
    readonly name: string;
    readonly url: string;
  };
  readonly note: string | null;
  readonly note_url: string | null;
  readonly updated_at: string;
  readonly created_at: string;
  readonly fingerprint: string | null;
  readonly user?: SimpleUser;
  readonly installation?: ScopedInstallation;
  readonly expires_at: string | null;
};

export type AppsCheckTokenResponseBody =
  | Authorization
  | BasicError
  | ValidationError;

export type AppsCheckTokenResolver = msw.HttpResponseResolver<
  AppsCheckTokenRequestParams,
  AppsCheckTokenRequestBody,
  AppsCheckTokenResponseBody
>;

export type AppsResetTokenRequestQuery = {};

export type AppsResetTokenRequestHeaders = {};

export type AppsResetTokenRequestParams = { readonly client_id: string };

export type AppsResetTokenRequestBody = { readonly access_token: string };

export type AppsResetTokenResponseStatus = 200 | 422;

export type AppsResetTokenResponseBody = Authorization | ValidationError;

export type AppsResetTokenResolver = msw.HttpResponseResolver<
  AppsResetTokenRequestParams,
  AppsResetTokenRequestBody,
  AppsResetTokenResponseBody
>;

export type AppsDeleteTokenRequestQuery = {};

export type AppsDeleteTokenRequestHeaders = {};

export type AppsDeleteTokenRequestParams = { readonly client_id: string };

export type AppsDeleteTokenRequestBody = { readonly access_token: string };

export type AppsDeleteTokenResponseStatus = 204 | 422;

export type AppsDeleteTokenResponseBody = never | ValidationError;

export type AppsDeleteTokenResolver = msw.HttpResponseResolver<
  AppsDeleteTokenRequestParams,
  AppsDeleteTokenRequestBody,
  AppsDeleteTokenResponseBody
>;

export type AppsScopeTokenRequestQuery = {};

export type AppsScopeTokenRequestHeaders = {};

export type AppsScopeTokenRequestParams = { readonly client_id: string };

export type AppsScopeTokenRequestBody = {
  readonly access_token: string;
  readonly target?: string;
  readonly target_id?: number;
  readonly repositories?: ReadonlyArray<string>;
  readonly repository_ids?: ReadonlyArray<number>;
  readonly permissions?: AppPermissions;
};

export type AppsScopeTokenResponseStatus = 200 | 401 | 403 | 404 | 422;

export type AppsScopeTokenResponseBody =
  | Authorization
  | BasicError
  | ValidationError;

export type AppsScopeTokenResolver = msw.HttpResponseResolver<
  AppsScopeTokenRequestParams,
  AppsScopeTokenRequestBody,
  AppsScopeTokenResponseBody
>;

export type AppsGetBySlugRequestQuery = {};

export type AppsGetBySlugRequestHeaders = {};

export type AppsGetBySlugRequestParams = { readonly app_slug: string };

export type AppsGetBySlugRequestBody = never;

export type AppsGetBySlugResponseStatus = 200 | 403 | 404;

export type AppsGetBySlugResponseBody = GitHubApp | BasicError;

export type AppsGetBySlugResolver = msw.HttpResponseResolver<
  AppsGetBySlugRequestParams,
  AppsGetBySlugRequestBody,
  AppsGetBySlugResponseBody
>;

export type CodesOfConductGetAllCodesOfConductRequestQuery = {};

export type CodesOfConductGetAllCodesOfConductRequestHeaders = {};

export type CodesOfConductGetAllCodesOfConductRequestParams = {};

export type CodesOfConductGetAllCodesOfConductRequestBody = never;

export type CodesOfConductGetAllCodesOfConductResponseStatus = 200 | 304;

export type CodeOfConduct = {
  readonly key: string;
  readonly name: string;
  readonly url: string;
  readonly body?: string;
  readonly html_url: string | null;
};

export type CodesOfConductGetAllCodesOfConductResponseBody =
  | ReadonlyArray<CodeOfConduct>
  | never;

export type CodesOfConductGetAllCodesOfConductResolver = msw.HttpResponseResolver<
  CodesOfConductGetAllCodesOfConductRequestParams,
  CodesOfConductGetAllCodesOfConductRequestBody,
  CodesOfConductGetAllCodesOfConductResponseBody
>;

export type CodesOfConductGetConductCodeRequestQuery = {};

export type CodesOfConductGetConductCodeRequestHeaders = {};

export type CodesOfConductGetConductCodeRequestParams = {
  readonly key: string;
};

export type CodesOfConductGetConductCodeRequestBody = never;

export type CodesOfConductGetConductCodeResponseStatus = 200 | 304 | 404;

export type CodesOfConductGetConductCodeResponseBody =
  | CodeOfConduct
  | never
  | BasicError;

export type CodesOfConductGetConductCodeResolver = msw.HttpResponseResolver<
  CodesOfConductGetConductCodeRequestParams,
  CodesOfConductGetConductCodeRequestBody,
  CodesOfConductGetConductCodeResponseBody
>;

export type EmojisGetRequestQuery = {};

export type EmojisGetRequestHeaders = {};

export type EmojisGetRequestParams = {};

export type EmojisGetRequestBody = never;

export type EmojisGetResponseStatus = 200 | 304;

export type EmojisGetResponseBody = never;

export type EmojisGetResolver = msw.HttpResponseResolver<
  EmojisGetRequestParams,
  EmojisGetRequestBody,
  EmojisGetResponseBody
>;

export type EnterpriseAdminGetServerStatisticsRequestQuery = {
  readonly date_start?: string;
  readonly date_end?: string;
};

export type EnterpriseAdminGetServerStatisticsRequestHeaders = {};

export type EnterpriseAdminGetServerStatisticsRequestParams = {
  readonly enterprise_or_org: string;
};

export type EnterpriseAdminGetServerStatisticsRequestBody = never;

export type EnterpriseAdminGetServerStatisticsResponseStatus = 200;

export type ServerStatisticsProxyEndpoint = ReadonlyArray<{
  readonly server_id?: string;
  readonly collection_date?: string;
  readonly schema_version?: string;
  readonly ghes_version?: string;
  readonly host_name?: string;
  readonly github_connect?: {
    readonly features_enabled?: ReadonlyArray<string>;
  };
  readonly ghe_stats?: {
    readonly comments?: {
      readonly total_commit_comments?: number;
      readonly total_gist_comments?: number;
      readonly total_issue_comments?: number;
      readonly total_pull_request_comments?: number;
    };
    readonly gists?: {
      readonly total_gists?: number;
      readonly private_gists?: number;
      readonly public_gists?: number;
    };
    readonly hooks?: {
      readonly total_hooks?: number;
      readonly active_hooks?: number;
      readonly inactive_hooks?: number;
    };
    readonly issues?: {
      readonly total_issues?: number;
      readonly open_issues?: number;
      readonly closed_issues?: number;
    };
    readonly milestones?: {
      readonly total_milestones?: number;
      readonly open_milestones?: number;
      readonly closed_milestones?: number;
    };
    readonly orgs?: {
      readonly total_orgs?: number;
      readonly disabled_orgs?: number;
      readonly total_teams?: number;
      readonly total_team_members?: number;
    };
    readonly pages?: { readonly total_pages?: number };
    readonly pulls?: {
      readonly total_pulls?: number;
      readonly merged_pulls?: number;
      readonly mergeable_pulls?: number;
      readonly unmergeable_pulls?: number;
    };
    readonly repos?: {
      readonly total_repos?: number;
      readonly root_repos?: number;
      readonly fork_repos?: number;
      readonly org_repos?: number;
      readonly total_pushes?: number;
      readonly total_wikis?: number;
    };
    readonly users?: {
      readonly total_users?: number;
      readonly admin_users?: number;
      readonly suspended_users?: number;
    };
  };
  readonly dormant_users?: {
    readonly total_dormant_users?: number;
    readonly dormancy_threshold?: string;
  };
}>;

export type EnterpriseAdminGetServerStatisticsResponseBody = ServerStatisticsProxyEndpoint;

export type EnterpriseAdminGetServerStatisticsResolver = msw.HttpResponseResolver<
  EnterpriseAdminGetServerStatisticsRequestParams,
  EnterpriseAdminGetServerStatisticsRequestBody,
  EnterpriseAdminGetServerStatisticsResponseBody
>;

export type ActionsGetActionsCacheUsageForEnterpriseRequestQuery = {};

export type ActionsGetActionsCacheUsageForEnterpriseRequestHeaders = {};

export type ActionsGetActionsCacheUsageForEnterpriseRequestParams = {
  readonly enterprise: string;
};

export type ActionsGetActionsCacheUsageForEnterpriseRequestBody = never;

export type ActionsGetActionsCacheUsageForEnterpriseResponseStatus = 200;

export type ActionsCacheUsageOrgEnterprise = {
  readonly total_active_caches_count: number;
  readonly total_active_caches_size_in_bytes: number;
};

export type ActionsGetActionsCacheUsageForEnterpriseResponseBody = ActionsCacheUsageOrgEnterprise;

export type ActionsGetActionsCacheUsageForEnterpriseResolver = msw.HttpResponseResolver<
  ActionsGetActionsCacheUsageForEnterpriseRequestParams,
  ActionsGetActionsCacheUsageForEnterpriseRequestBody,
  ActionsGetActionsCacheUsageForEnterpriseResponseBody
>;

export type EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequestQuery = {};

export type EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequestHeaders = {};

export type EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequestParams = {
  readonly enterprise: string;
};

export type EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequestBody = never;

export type EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponseStatus = 200;

export type EnabledOrganizations = 'all' | 'none' | 'selected';

export type AllowedActions = 'all' | 'local_only' | 'selected';

export type SelectedActionsUrl = string;

export type ActionsEnterprisePermissions = {
  readonly enabled_organizations: EnabledOrganizations;
  readonly selected_organizations_url?: string;
  readonly allowed_actions?: AllowedActions;
  readonly selected_actions_url?: SelectedActionsUrl;
};

export type EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponseBody = ActionsEnterprisePermissions;

export type EnterpriseAdminGetGithubActionsPermissionsEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequestParams,
  EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequestBody,
  EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponseBody
>;

export type EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestQuery = {};

export type EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestHeaders = {};

export type EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestParams = {
  readonly enterprise: string;
};

export type EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody = {
  readonly enabled_organizations: EnabledOrganizations;
  readonly allowed_actions?: AllowedActions;
};

export type EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponseStatus = 204;

export type EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponseBody = never;

export type EnterpriseAdminSetGithubActionsPermissionsEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestParams,
  EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody,
  EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponseBody
>;

export type EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequestHeaders = {};

export type EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequestParams = {
  readonly enterprise: string;
};

export type EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody = never;

export type EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponseStatus = 200;

export type OrganizationSimple = {
  readonly login: string;
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly repos_url: string;
  readonly events_url: string;
  readonly hooks_url: string;
  readonly issues_url: string;
  readonly members_url: string;
  readonly public_members_url: string;
  readonly avatar_url: string;
  readonly description: string | null;
};

export type EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponseBody = {
  readonly total_count: number;
  readonly organizations: ReadonlyArray<OrganizationSimple>;
};

export type EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequestParams,
  EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody,
  EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponseBody
>;

export type EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestQuery = {};

export type EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestHeaders = {};

export type EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestParams = {
  readonly enterprise: string;
};

export type EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody = {
  readonly selected_organization_ids: ReadonlyArray<number>;
};

export type EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponseStatus = 204;

export type EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponseBody = never;

export type EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestParams,
  EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody,
  EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponseBody
>;

export type EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequestQuery = {};

export type EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequestHeaders = {};

export type EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequestParams = {
  readonly enterprise: string;
  readonly org_id: string;
};

export type EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequestBody = never;

export type EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponseStatus = 204;

export type EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponseBody = never;

export type EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequestParams,
  EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequestBody,
  EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponseBody
>;

export type EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequestQuery = {};

export type EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequestHeaders = {};

export type EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequestParams = {
  readonly enterprise: string;
  readonly org_id: string;
};

export type EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequestBody = never;

export type EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponseStatus = 204;

export type EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponseBody = never;

export type EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequestParams,
  EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequestBody,
  EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponseBody
>;

export type EnterpriseAdminGetAllowedActionsEnterpriseRequestQuery = {};

export type EnterpriseAdminGetAllowedActionsEnterpriseRequestHeaders = {};

export type EnterpriseAdminGetAllowedActionsEnterpriseRequestParams = {
  readonly enterprise: string;
};

export type EnterpriseAdminGetAllowedActionsEnterpriseRequestBody = never;

export type EnterpriseAdminGetAllowedActionsEnterpriseResponseStatus = 200;

export type SelectedActions = {
  readonly github_owned_allowed?: boolean;
  readonly verified_allowed?: boolean;
  readonly patterns_allowed?: ReadonlyArray<string>;
};

export type EnterpriseAdminGetAllowedActionsEnterpriseResponseBody = SelectedActions;

export type EnterpriseAdminGetAllowedActionsEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminGetAllowedActionsEnterpriseRequestParams,
  EnterpriseAdminGetAllowedActionsEnterpriseRequestBody,
  EnterpriseAdminGetAllowedActionsEnterpriseResponseBody
>;

export type EnterpriseAdminSetAllowedActionsEnterpriseRequestQuery = {};

export type EnterpriseAdminSetAllowedActionsEnterpriseRequestHeaders = {};

export type EnterpriseAdminSetAllowedActionsEnterpriseRequestParams = {
  readonly enterprise: string;
};

export type EnterpriseAdminSetAllowedActionsEnterpriseRequestBody = SelectedActions;

export type EnterpriseAdminSetAllowedActionsEnterpriseResponseStatus = 204;

export type EnterpriseAdminSetAllowedActionsEnterpriseResponseBody = never;

export type EnterpriseAdminSetAllowedActionsEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminSetAllowedActionsEnterpriseRequestParams,
  EnterpriseAdminSetAllowedActionsEnterpriseRequestBody,
  EnterpriseAdminSetAllowedActionsEnterpriseResponseBody
>;

export type ActionsGetGithubActionsDefaultWorkflowPermissionsEnterpriseRequestQuery = {};

export type ActionsGetGithubActionsDefaultWorkflowPermissionsEnterpriseRequestHeaders = {};

export type ActionsGetGithubActionsDefaultWorkflowPermissionsEnterpriseRequestParams = {
  readonly enterprise: string;
};

export type ActionsGetGithubActionsDefaultWorkflowPermissionsEnterpriseRequestBody = never;

export type ActionsGetGithubActionsDefaultWorkflowPermissionsEnterpriseResponseStatus = 200;

export type ActionsDefaultWorkflowPermissions = 'read' | 'write';

export type ActionsCanApprovePullRequestReviews = boolean;

export type ActionsGetDefaultWorkflowPermissions = {
  readonly default_workflow_permissions: ActionsDefaultWorkflowPermissions;
  readonly can_approve_pull_request_reviews: ActionsCanApprovePullRequestReviews;
};

export type ActionsGetGithubActionsDefaultWorkflowPermissionsEnterpriseResponseBody = ActionsGetDefaultWorkflowPermissions;

export type ActionsGetGithubActionsDefaultWorkflowPermissionsEnterpriseResolver = msw.HttpResponseResolver<
  ActionsGetGithubActionsDefaultWorkflowPermissionsEnterpriseRequestParams,
  ActionsGetGithubActionsDefaultWorkflowPermissionsEnterpriseRequestBody,
  ActionsGetGithubActionsDefaultWorkflowPermissionsEnterpriseResponseBody
>;

export type ActionsSetDefaultWorkflowPermissions = {
  readonly default_workflow_permissions?: ActionsDefaultWorkflowPermissions;
  readonly can_approve_pull_request_reviews?: ActionsCanApprovePullRequestReviews;
};

export type ActionsSetGithubActionsDefaultWorkflowPermissionsEnterpriseRequestQuery = {};

export type ActionsSetGithubActionsDefaultWorkflowPermissionsEnterpriseRequestHeaders = {};

export type ActionsSetGithubActionsDefaultWorkflowPermissionsEnterpriseRequestParams = {
  readonly enterprise: string;
};

export type ActionsSetGithubActionsDefaultWorkflowPermissionsEnterpriseRequestBody = ActionsSetDefaultWorkflowPermissions;

export type ActionsSetGithubActionsDefaultWorkflowPermissionsEnterpriseResponseStatus = 204;

export type ActionsSetGithubActionsDefaultWorkflowPermissionsEnterpriseResponseBody = never;

export type ActionsSetGithubActionsDefaultWorkflowPermissionsEnterpriseResolver = msw.HttpResponseResolver<
  ActionsSetGithubActionsDefaultWorkflowPermissionsEnterpriseRequestParams,
  ActionsSetGithubActionsDefaultWorkflowPermissionsEnterpriseRequestBody,
  ActionsSetGithubActionsDefaultWorkflowPermissionsEnterpriseResponseBody
>;

export type EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
  readonly visible_to_organization?: string;
};

export type EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequestHeaders = {};

export type EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequestParams = {
  readonly enterprise: string;
};

export type EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequestBody = never;

export type EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponseStatus = 200;

export type RunnerGroupsEnterprise = {
  readonly id: number;
  readonly name: string;
  readonly visibility: string;
  readonly default: boolean;
  readonly selected_organizations_url?: string;
  readonly runners_url: string;
  readonly allows_public_repositories: boolean;
  readonly workflow_restrictions_read_only?: boolean;
  readonly restricted_to_workflows?: boolean;
  readonly selected_workflows?: ReadonlyArray<string>;
};

export type EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponseBody = {
  readonly total_count: number;
  readonly runner_groups: ReadonlyArray<RunnerGroupsEnterprise>;
};

export type EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequestParams,
  EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequestBody,
  EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponseBody
>;

export type EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestQuery = {};

export type EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestHeaders = {};

export type EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestParams = {
  readonly enterprise: string;
};

export type EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody = {
  readonly name: string;
  readonly visibility?: 'selected' | 'all';
  readonly selected_organization_ids?: ReadonlyArray<number>;
  readonly runners?: ReadonlyArray<number>;
  readonly allows_public_repositories?: boolean;
  readonly restricted_to_workflows?: boolean;
  readonly selected_workflows?: ReadonlyArray<string>;
};

export type EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponseStatus = 201;

export type EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponseBody = RunnerGroupsEnterprise;

export type EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestParams,
  EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody,
  EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponseBody
>;

export type EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequestQuery = {};

export type EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequestHeaders = {};

export type EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequestParams = {
  readonly enterprise: string;
  readonly runner_group_id: string;
};

export type EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequestBody = never;

export type EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponseStatus = 200;

export type EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponseBody = RunnerGroupsEnterprise;

export type EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequestParams,
  EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequestBody,
  EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponseBody
>;

export type EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestQuery = {};

export type EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestHeaders = {};

export type EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestParams = {
  readonly enterprise: string;
  readonly runner_group_id: string;
};

export type EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody =
  | {
      readonly name?: string;
      readonly visibility?: 'selected' | 'all';
      readonly allows_public_repositories?: boolean;
      readonly restricted_to_workflows?: boolean;
      readonly selected_workflows?: ReadonlyArray<string>;
    }
  | undefined;

export type EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponseStatus = 200;

export type EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponseBody = RunnerGroupsEnterprise;

export type EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestParams,
  EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody,
  EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponseBody
>;

export type EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequestQuery = {};

export type EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequestHeaders = {};

export type EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequestParams = {
  readonly enterprise: string;
  readonly runner_group_id: string;
};

export type EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequestBody = never;

export type EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponseStatus = 204;

export type EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponseBody = never;

export type EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequestParams,
  EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequestBody,
  EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponseBody
>;

export type EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestHeaders = {};

export type EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestParams = {
  readonly enterprise: string;
  readonly runner_group_id: string;
};

export type EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody = never;

export type EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponseStatus = 200;

export type EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponseBody = {
  readonly total_count: number;
  readonly organizations: ReadonlyArray<OrganizationSimple>;
};

export type EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestParams,
  EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody,
  EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponseBody
>;

export type EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestQuery = {};

export type EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestHeaders = {};

export type EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestParams = {
  readonly enterprise: string;
  readonly runner_group_id: string;
};

export type EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody = {
  readonly selected_organization_ids: ReadonlyArray<number>;
};

export type EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponseStatus = 204;

export type EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponseBody = never;

export type EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestParams,
  EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody,
  EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponseBody
>;

export type EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestQuery = {};

export type EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestHeaders = {};

export type EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestParams = {
  readonly enterprise: string;
  readonly runner_group_id: string;
  readonly org_id: string;
};

export type EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody = never;

export type EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponseStatus = 204;

export type EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponseBody = never;

export type EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestParams,
  EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody,
  EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponseBody
>;

export type EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestQuery = {};

export type EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestHeaders = {};

export type EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestParams = {
  readonly enterprise: string;
  readonly runner_group_id: string;
  readonly org_id: string;
};

export type EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody = never;

export type EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponseStatus = 204;

export type EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponseBody = never;

export type EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestParams,
  EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody,
  EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponseBody
>;

export type EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequestHeaders = {};

export type EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequestParams = {
  readonly enterprise: string;
  readonly runner_group_id: string;
};

export type EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequestBody = never;

export type EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponseStatus = 200;

export type SelfHostedRunnerLabel = {
  readonly id?: number;
  readonly name: string;
  readonly type?: 'read-only' | 'custom';
};

export type SelfHostedRunners = {
  readonly id: number;
  readonly name: string;
  readonly os: string;
  readonly status: string;
  readonly busy: boolean;
  readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
};

export type EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponseBody = {
  readonly total_count: number;
  readonly runners: ReadonlyArray<SelfHostedRunners>;
};

export type EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequestParams,
  EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequestBody,
  EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponseBody
>;

export type EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestQuery = {};

export type EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestHeaders = {};

export type EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestParams = {
  readonly enterprise: string;
  readonly runner_group_id: string;
};

export type EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody = {
  readonly runners: ReadonlyArray<number>;
};

export type EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponseStatus = 204;

export type EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponseBody = never;

export type EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestParams,
  EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody,
  EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponseBody
>;

export type EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequestQuery = {};

export type EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequestHeaders = {};

export type EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequestParams = {
  readonly enterprise: string;
  readonly runner_group_id: string;
  readonly runner_id: string;
};

export type EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequestBody = never;

export type EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponseStatus = 204;

export type EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponseBody = never;

export type EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequestParams,
  EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequestBody,
  EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponseBody
>;

export type EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequestQuery = {};

export type EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequestHeaders = {};

export type EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequestParams = {
  readonly enterprise: string;
  readonly runner_group_id: string;
  readonly runner_id: string;
};

export type EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequestBody = never;

export type EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponseStatus = 204;

export type EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponseBody = never;

export type EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequestParams,
  EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequestBody,
  EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponseBody
>;

export type EnterpriseAdminListSelfHostedRunnersForEnterpriseRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type EnterpriseAdminListSelfHostedRunnersForEnterpriseRequestHeaders = {};

export type EnterpriseAdminListSelfHostedRunnersForEnterpriseRequestParams = {
  readonly enterprise: string;
};

export type EnterpriseAdminListSelfHostedRunnersForEnterpriseRequestBody = never;

export type EnterpriseAdminListSelfHostedRunnersForEnterpriseResponseStatus = 200;

export type EnterpriseAdminListSelfHostedRunnersForEnterpriseResponseBody = {
  readonly total_count?: number;
  readonly runners?: ReadonlyArray<SelfHostedRunners>;
};

export type EnterpriseAdminListSelfHostedRunnersForEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminListSelfHostedRunnersForEnterpriseRequestParams,
  EnterpriseAdminListSelfHostedRunnersForEnterpriseRequestBody,
  EnterpriseAdminListSelfHostedRunnersForEnterpriseResponseBody
>;

export type EnterpriseAdminListRunnerApplicationsForEnterpriseRequestQuery = {};

export type EnterpriseAdminListRunnerApplicationsForEnterpriseRequestHeaders = {};

export type EnterpriseAdminListRunnerApplicationsForEnterpriseRequestParams = {
  readonly enterprise: string;
};

export type EnterpriseAdminListRunnerApplicationsForEnterpriseRequestBody = never;

export type EnterpriseAdminListRunnerApplicationsForEnterpriseResponseStatus = 200;

export type RunnerApplication = {
  readonly os: string;
  readonly architecture: string;
  readonly download_url: string;
  readonly filename: string;
  readonly temp_download_token?: string;
  readonly sha256_checksum?: string;
};

export type EnterpriseAdminListRunnerApplicationsForEnterpriseResponseBody = ReadonlyArray<RunnerApplication>;

export type EnterpriseAdminListRunnerApplicationsForEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminListRunnerApplicationsForEnterpriseRequestParams,
  EnterpriseAdminListRunnerApplicationsForEnterpriseRequestBody,
  EnterpriseAdminListRunnerApplicationsForEnterpriseResponseBody
>;

export type EnterpriseAdminCreateRegistrationTokenForEnterpriseRequestQuery = {};

export type EnterpriseAdminCreateRegistrationTokenForEnterpriseRequestHeaders = {};

export type EnterpriseAdminCreateRegistrationTokenForEnterpriseRequestParams = {
  readonly enterprise: string;
};

export type EnterpriseAdminCreateRegistrationTokenForEnterpriseRequestBody = never;

export type EnterpriseAdminCreateRegistrationTokenForEnterpriseResponseStatus = 201;

export type AuthenticationToken = {
  readonly token: string;
  readonly expires_at: string;
  readonly permissions?: never;
  readonly repositories?: ReadonlyArray<Repository>;
  readonly single_file?: string | null;
  readonly repository_selection?: 'all' | 'selected';
};

export type EnterpriseAdminCreateRegistrationTokenForEnterpriseResponseBody = AuthenticationToken;

export type EnterpriseAdminCreateRegistrationTokenForEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminCreateRegistrationTokenForEnterpriseRequestParams,
  EnterpriseAdminCreateRegistrationTokenForEnterpriseRequestBody,
  EnterpriseAdminCreateRegistrationTokenForEnterpriseResponseBody
>;

export type EnterpriseAdminCreateRemoveTokenForEnterpriseRequestQuery = {};

export type EnterpriseAdminCreateRemoveTokenForEnterpriseRequestHeaders = {};

export type EnterpriseAdminCreateRemoveTokenForEnterpriseRequestParams = {
  readonly enterprise: string;
};

export type EnterpriseAdminCreateRemoveTokenForEnterpriseRequestBody = never;

export type EnterpriseAdminCreateRemoveTokenForEnterpriseResponseStatus = 201;

export type EnterpriseAdminCreateRemoveTokenForEnterpriseResponseBody = AuthenticationToken;

export type EnterpriseAdminCreateRemoveTokenForEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminCreateRemoveTokenForEnterpriseRequestParams,
  EnterpriseAdminCreateRemoveTokenForEnterpriseRequestBody,
  EnterpriseAdminCreateRemoveTokenForEnterpriseResponseBody
>;

export type EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequestQuery = {};

export type EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequestHeaders = {};

export type EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequestParams = {
  readonly enterprise: string;
  readonly runner_id: string;
};

export type EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequestBody = never;

export type EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponseStatus = 200;

export type EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponseBody = SelfHostedRunners;

export type EnterpriseAdminGetSelfHostedRunnerForEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequestParams,
  EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequestBody,
  EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponseBody
>;

export type EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequestQuery = {};

export type EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequestHeaders = {};

export type EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequestParams = {
  readonly enterprise: string;
  readonly runner_id: string;
};

export type EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequestBody = never;

export type EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponseStatus = 204;

export type EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponseBody = never;

export type EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequestParams,
  EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequestBody,
  EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponseBody
>;

export type EnterpriseAdminListLabelsForSelfHostedRunnerForEnterpriseRequestQuery = {};

export type EnterpriseAdminListLabelsForSelfHostedRunnerForEnterpriseRequestHeaders = {};

export type EnterpriseAdminListLabelsForSelfHostedRunnerForEnterpriseRequestParams = {
  readonly enterprise: string;
  readonly runner_id: string;
};

export type EnterpriseAdminListLabelsForSelfHostedRunnerForEnterpriseRequestBody = never;

export type EnterpriseAdminListLabelsForSelfHostedRunnerForEnterpriseResponseStatus =
  | 200
  | 404;

export type EnterpriseAdminListLabelsForSelfHostedRunnerForEnterpriseResponseBody =
  | {
      readonly total_count: number;
      readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
    }
  | BasicError;

export type EnterpriseAdminListLabelsForSelfHostedRunnerForEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminListLabelsForSelfHostedRunnerForEnterpriseRequestParams,
  EnterpriseAdminListLabelsForSelfHostedRunnerForEnterpriseRequestBody,
  EnterpriseAdminListLabelsForSelfHostedRunnerForEnterpriseResponseBody
>;

export type EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseRequestQuery = {};

export type EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseRequestHeaders = {};

export type EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseRequestParams = {
  readonly enterprise: string;
  readonly runner_id: string;
};

export type EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseRequestBody = {
  readonly labels: ReadonlyArray<string>;
};

export type EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseResponseStatus =
  | 200
  | 404
  | 422;

export type EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseResponseBody =
  | {
      readonly total_count: number;
      readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
    }
  | BasicError
  | ValidationErrorSimple;

export type EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseRequestParams,
  EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseRequestBody,
  EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseResponseBody
>;

export type EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseRequestQuery = {};

export type EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseRequestHeaders = {};

export type EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseRequestParams = {
  readonly enterprise: string;
  readonly runner_id: string;
};

export type EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseRequestBody = {
  readonly labels: ReadonlyArray<string>;
};

export type EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseResponseStatus =
  | 200
  | 404
  | 422;

export type EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseResponseBody =
  | {
      readonly total_count: number;
      readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
    }
  | BasicError
  | ValidationErrorSimple;

export type EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseRequestParams,
  EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseRequestBody,
  EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseResponseBody
>;

export type EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseRequestQuery = {};

export type EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseRequestHeaders = {};

export type EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseRequestParams = {
  readonly enterprise: string;
  readonly runner_id: string;
};

export type EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseRequestBody = never;

export type EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseResponseStatus =
  | 200
  | 404
  | 422;

export type EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseResponseBody =
  | {
      readonly total_count: number;
      readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
    }
  | BasicError
  | ValidationErrorSimple;

export type EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseRequestParams,
  EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseRequestBody,
  EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseResponseBody
>;

export type EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseRequestQuery = {};

export type EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseRequestHeaders = {};

export type EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseRequestParams = {
  readonly enterprise: string;
  readonly runner_id: string;
  readonly name: string;
};

export type EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseRequestBody = never;

export type EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseResponseStatus =
  | 200
  | 404
  | 422;

export type EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseResponseBody =
  | {
      readonly total_count: number;
      readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
    }
  | BasicError
  | ValidationErrorSimple;

export type EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseResolver = msw.HttpResponseResolver<
  EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseRequestParams,
  EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseRequestBody,
  EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseResponseBody
>;

export type CodeScanningListAlertsForEnterpriseRequestQuery = {
  readonly tool_name?: string;
  readonly tool_guid?: string;
  readonly before?: string;
  readonly after?: string;
  readonly page?: string;
  readonly per_page?: string;
  readonly direction?: string;
  readonly state?: string;
  readonly sort?: string;
};

export type CodeScanningListAlertsForEnterpriseRequestHeaders = {};

export type CodeScanningListAlertsForEnterpriseRequestParams = {
  readonly enterprise: string;
};

export type CodeScanningListAlertsForEnterpriseRequestBody = never;

export type CodeScanningListAlertsForEnterpriseResponseStatus = 200 | 404 | 503;

export type AlertNumber = number;

export type AlertCreatedAt = string;

export type AlertUpdatedAt = string;

export type AlertUrl = string;

export type AlertHtmlUrl = string;

export type AlertInstancesUrl = string;

export type CodeScanningAlertState = 'open' | 'closed' | 'dismissed' | 'fixed';

export type AlertFixedAt = string | null;

export type AlertDismissedAt = string | null;

export type CodeScanningAlertDismissedReason =
  | null
  | 'false positive'
  | "won't fix"
  | 'used in tests'
  | null;

export type CodeScanningAlertDismissedComment = string | null;

export type CodeScanningAlertRule = {
  readonly id?: string | null;
  readonly name?: string;
  readonly severity?: 'none' | 'note' | 'warning' | 'error' | null;
  readonly security_severity_level?:
    | 'low'
    | 'medium'
    | 'high'
    | 'critical'
    | null;
  readonly description?: string;
  readonly full_description?: string;
  readonly tags?: ReadonlyArray<string> | null;
  readonly help?: string | null;
  readonly help_uri?: string | null;
};

export type CodeScanningAnalysisToolName = string;

export type CodeScanningAnalysisToolVersion = string | null;

export type CodeScanningAnalysisToolGuid = string | null;

export type CodeScanningAnalysisTool = {
  readonly name?: CodeScanningAnalysisToolName;
  readonly version?: CodeScanningAnalysisToolVersion;
  readonly guid?: CodeScanningAnalysisToolGuid;
};

export type CodeScanningRef = string;

export type CodeScanningAnalysisAnalysisKey = string;

export type CodeScanningAlertEnvironment = string;

export type CodeScanningAnalysisCategory = string;

export type CodeScanningAlertLocation = {
  readonly path?: string;
  readonly start_line?: number;
  readonly end_line?: number;
  readonly start_column?: number;
  readonly end_column?: number;
};

export type CodeScanningAlertClassification =
  | 'source'
  | 'generated'
  | 'test'
  | 'library'
  | null;

export type CodeScanningAlertInstance = {
  readonly ref?: CodeScanningRef;
  readonly analysis_key?: CodeScanningAnalysisAnalysisKey;
  readonly environment?: CodeScanningAlertEnvironment;
  readonly category?: CodeScanningAnalysisCategory;
  readonly state?: CodeScanningAlertState;
  readonly commit_sha?: string;
  readonly message?: { readonly text?: string };
  readonly location?: CodeScanningAlertLocation;
  readonly html_url?: string;
  readonly classifications?: ReadonlyArray<CodeScanningAlertClassification>;
};

export type SimpleRepository = {
  readonly id: number;
  readonly node_id: string;
  readonly name: string;
  readonly full_name: string;
  readonly owner: SimpleUser;
  readonly private: boolean;
  readonly html_url: string;
  readonly description: string | null;
  readonly fork: boolean;
  readonly url: string;
  readonly archive_url: string;
  readonly assignees_url: string;
  readonly blobs_url: string;
  readonly branches_url: string;
  readonly collaborators_url: string;
  readonly comments_url: string;
  readonly commits_url: string;
  readonly compare_url: string;
  readonly contents_url: string;
  readonly contributors_url: string;
  readonly deployments_url: string;
  readonly downloads_url: string;
  readonly events_url: string;
  readonly forks_url: string;
  readonly git_commits_url: string;
  readonly git_refs_url: string;
  readonly git_tags_url: string;
  readonly issue_comment_url: string;
  readonly issue_events_url: string;
  readonly issues_url: string;
  readonly keys_url: string;
  readonly labels_url: string;
  readonly languages_url: string;
  readonly merges_url: string;
  readonly milestones_url: string;
  readonly notifications_url: string;
  readonly pulls_url: string;
  readonly releases_url: string;
  readonly stargazers_url: string;
  readonly statuses_url: string;
  readonly subscribers_url: string;
  readonly subscription_url: string;
  readonly tags_url: string;
  readonly teams_url: string;
  readonly trees_url: string;
  readonly hooks_url: string;
};

export type CodeScanningOrganizationAlertItems = {
  readonly number: AlertNumber;
  readonly created_at: AlertCreatedAt;
  readonly updated_at?: AlertUpdatedAt;
  readonly url: AlertUrl;
  readonly html_url: AlertHtmlUrl;
  readonly instances_url: AlertInstancesUrl;
  readonly state: CodeScanningAlertState;
  readonly fixed_at?: AlertFixedAt;
  readonly dismissed_by: SimpleUser;
  readonly dismissed_at: AlertDismissedAt;
  readonly dismissed_reason: CodeScanningAlertDismissedReason;
  readonly dismissed_comment?: CodeScanningAlertDismissedComment;
  readonly rule: CodeScanningAlertRule;
  readonly tool: CodeScanningAnalysisTool;
  readonly most_recent_instance: CodeScanningAlertInstance;
  readonly repository: SimpleRepository;
};

export type CodeScanningListAlertsForEnterpriseResponseBody =
  | ReadonlyArray<CodeScanningOrganizationAlertItems>
  | BasicError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type CodeScanningListAlertsForEnterpriseResolver = msw.HttpResponseResolver<
  CodeScanningListAlertsForEnterpriseRequestParams,
  CodeScanningListAlertsForEnterpriseRequestBody,
  CodeScanningListAlertsForEnterpriseResponseBody
>;

export type SecretScanningListAlertsForEnterpriseRequestQuery = {
  readonly state?: string;
  readonly secret_type?: string;
  readonly resolution?: string;
  readonly sort?: string;
  readonly direction?: string;
  readonly per_page?: string;
  readonly before?: string;
  readonly after?: string;
};

export type SecretScanningListAlertsForEnterpriseRequestHeaders = {};

export type SecretScanningListAlertsForEnterpriseRequestParams = {
  readonly enterprise: string;
};

export type SecretScanningListAlertsForEnterpriseRequestBody = never;

export type SecretScanningListAlertsForEnterpriseResponseStatus =
  | 200
  | 404
  | 503;

export type NullableAlertUpdatedAt = string | null;

export type SecretScanningAlertState = 'open' | 'resolved';

export type SecretScanningAlertResolution =
  | null
  | 'false_positive'
  | 'wont_fix'
  | 'revoked'
  | 'used_in_tests'
  | null;

export type OrganizationSecretScanningAlert = {
  readonly number?: AlertNumber;
  readonly created_at?: AlertCreatedAt;
  readonly updated_at?: NullableAlertUpdatedAt;
  readonly url?: AlertUrl;
  readonly html_url?: AlertHtmlUrl;
  readonly locations_url?: string;
  readonly state?: SecretScanningAlertState;
  readonly resolution?: SecretScanningAlertResolution;
  readonly resolved_at?: string | null;
  readonly resolved_by?: SimpleUser;
  readonly secret_type?: string;
  readonly secret_type_display_name?: string;
  readonly secret?: string;
  readonly repository?: SimpleRepository;
  readonly push_protection_bypassed?: boolean | null;
  readonly push_protection_bypassed_by?: SimpleUser;
  readonly push_protection_bypassed_at?: string | null;
  readonly resolution_comment?: string | null;
};

export type SecretScanningListAlertsForEnterpriseResponseBody =
  | ReadonlyArray<OrganizationSecretScanningAlert>
  | BasicError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type SecretScanningListAlertsForEnterpriseResolver = msw.HttpResponseResolver<
  SecretScanningListAlertsForEnterpriseRequestParams,
  SecretScanningListAlertsForEnterpriseRequestBody,
  SecretScanningListAlertsForEnterpriseResponseBody
>;

export type BillingGetGithubAdvancedSecurityBillingGheRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type BillingGetGithubAdvancedSecurityBillingGheRequestHeaders = {};

export type BillingGetGithubAdvancedSecurityBillingGheRequestParams = {
  readonly enterprise: string;
};

export type BillingGetGithubAdvancedSecurityBillingGheRequestBody = never;

export type BillingGetGithubAdvancedSecurityBillingGheResponseStatus =
  | 200
  | 403;

export type AdvancedSecurityActiveCommittersUser = {
  readonly user_login: string;
  readonly last_pushed_date: string;
};

export type AdvancedSecurityActiveCommittersRepository = {
  readonly name: string;
  readonly advanced_security_committers: number;
  readonly advanced_security_committers_breakdown: ReadonlyArray<AdvancedSecurityActiveCommittersUser>;
};

export type AdvancedSecurityActiveCommitters = {
  readonly total_advanced_security_committers?: number;
  readonly total_count?: number;
  readonly repositories: ReadonlyArray<AdvancedSecurityActiveCommittersRepository>;
};

export type BillingGetGithubAdvancedSecurityBillingGheResponseBody =
  | AdvancedSecurityActiveCommitters
  | BasicError;

export type BillingGetGithubAdvancedSecurityBillingGheResolver = msw.HttpResponseResolver<
  BillingGetGithubAdvancedSecurityBillingGheRequestParams,
  BillingGetGithubAdvancedSecurityBillingGheRequestBody,
  BillingGetGithubAdvancedSecurityBillingGheResponseBody
>;

export type ActivityListPublicEventsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActivityListPublicEventsRequestHeaders = {};

export type ActivityListPublicEventsRequestParams = {};

export type ActivityListPublicEventsRequestBody = never;

export type ActivityListPublicEventsResponseStatus = 200 | 304 | 403 | 503;

export type Actor = {
  readonly id: number;
  readonly login: string;
  readonly display_login?: string;
  readonly gravatar_id: string | null;
  readonly url: string;
  readonly avatar_url: string;
};

export type Milestone = {
  readonly url: string;
  readonly html_url: string;
  readonly labels_url: string;
  readonly id: number;
  readonly node_id: string;
  readonly number: number;
  readonly state: 'open' | 'closed';
  readonly title: string;
  readonly description: string | null;
  readonly creator: SimpleUser;
  readonly open_issues: number;
  readonly closed_issues: number;
  readonly created_at: string;
  readonly updated_at: string;
  readonly closed_at: string | null;
  readonly due_on: string | null;
} | null;

export type AuthorAssociation =
  | 'COLLABORATOR'
  | 'CONTRIBUTOR'
  | 'FIRST_TIMER'
  | 'FIRST_TIME_CONTRIBUTOR'
  | 'MANNEQUIN'
  | 'MEMBER'
  | 'NONE'
  | 'OWNER';

export type ReactionRollup = {
  readonly url: string;
  readonly total_count: number;
  readonly '+1': number;
  readonly '-1': number;
  readonly laugh: number;
  readonly confused: number;
  readonly heart: number;
  readonly hooray: number;
  readonly eyes: number;
  readonly rocket: number;
};

export type Issue = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly repository_url: string;
  readonly labels_url: string;
  readonly comments_url: string;
  readonly events_url: string;
  readonly html_url: string;
  readonly number: number;
  readonly state: string;
  readonly state_reason?: 'completed' | 'reopened' | 'not_planned' | null;
  readonly title: string;
  readonly body?: string | null;
  readonly user: SimpleUser;
  readonly labels: ReadonlyArray<
    | string
    | {
        readonly id?: number;
        readonly node_id?: string;
        readonly url?: string;
        readonly name?: string;
        readonly description?: string | null;
        readonly color?: string | null;
        readonly default?: boolean;
      }
  >;
  readonly assignee: SimpleUser;
  readonly assignees?: ReadonlyArray<SimpleUser> | null;
  readonly milestone: Milestone;
  readonly locked: boolean;
  readonly active_lock_reason?: string | null;
  readonly comments: number;
  readonly pull_request?: {
    readonly merged_at?: string | null;
    readonly diff_url: string | null;
    readonly html_url: string | null;
    readonly patch_url: string | null;
    readonly url: string | null;
  };
  readonly closed_at: string | null;
  readonly created_at: string;
  readonly updated_at: string;
  readonly draft?: boolean;
  readonly closed_by?: SimpleUser;
  readonly body_html?: string;
  readonly body_text?: string;
  readonly timeline_url?: string;
  readonly repository?: Repository;
  readonly performed_via_github_app?: GitHubApp;
  readonly author_association: AuthorAssociation;
  readonly reactions?: ReactionRollup;
};

export type IssueComment = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly body?: string;
  readonly body_text?: string;
  readonly body_html?: string;
  readonly html_url: string;
  readonly user: SimpleUser;
  readonly created_at: string;
  readonly updated_at: string;
  readonly issue_url: string;
  readonly author_association: AuthorAssociation;
  readonly performed_via_github_app?: GitHubApp;
  readonly reactions?: ReactionRollup;
};

export type Event = {
  readonly id: string;
  readonly type: string | null;
  readonly actor: Actor;
  readonly repo: {
    readonly id: number;
    readonly name: string;
    readonly url: string;
  };
  readonly org?: Actor;
  readonly payload: {
    readonly action?: string;
    readonly issue?: Issue;
    readonly comment?: IssueComment;
    readonly pages?: ReadonlyArray<{
      readonly page_name?: string;
      readonly title?: string;
      readonly summary?: string | null;
      readonly action?: string;
      readonly sha?: string;
      readonly html_url?: string;
    }>;
  };
  readonly public: boolean;
  readonly created_at: string | null;
};

export type ActivityListPublicEventsResponseBody =
  | ReadonlyArray<Event>
  | never
  | BasicError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type ActivityListPublicEventsResolver = msw.HttpResponseResolver<
  ActivityListPublicEventsRequestParams,
  ActivityListPublicEventsRequestBody,
  ActivityListPublicEventsResponseBody
>;

export type ActivityGetFeedsRequestQuery = {};

export type ActivityGetFeedsRequestHeaders = {};

export type ActivityGetFeedsRequestParams = {};

export type ActivityGetFeedsRequestBody = never;

export type ActivityGetFeedsResponseStatus = 200;

export type LinkWithType = { readonly href: string; readonly type: string };

export type Feed = {
  readonly timeline_url: string;
  readonly user_url: string;
  readonly current_user_public_url?: string;
  readonly current_user_url?: string;
  readonly current_user_actor_url?: string;
  readonly current_user_organization_url?: string;
  readonly current_user_organization_urls?: ReadonlyArray<string>;
  readonly security_advisories_url?: string;
  readonly _links: {
    readonly timeline: LinkWithType;
    readonly user: LinkWithType;
    readonly security_advisories?: LinkWithType;
    readonly current_user?: LinkWithType;
    readonly current_user_public?: LinkWithType;
    readonly current_user_actor?: LinkWithType;
    readonly current_user_organization?: LinkWithType;
    readonly current_user_organizations?: ReadonlyArray<LinkWithType>;
  };
};

export type ActivityGetFeedsResponseBody = Feed;

export type ActivityGetFeedsResolver = msw.HttpResponseResolver<
  ActivityGetFeedsRequestParams,
  ActivityGetFeedsRequestBody,
  ActivityGetFeedsResponseBody
>;

export type GistsListRequestQuery = {
  readonly since?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type GistsListRequestHeaders = {};

export type GistsListRequestParams = {};

export type GistsListRequestBody = never;

export type GistsListResponseStatus = 200 | 304 | 403;

export type BaseGist = {
  readonly url: string;
  readonly forks_url: string;
  readonly commits_url: string;
  readonly id: string;
  readonly node_id: string;
  readonly git_pull_url: string;
  readonly git_push_url: string;
  readonly html_url: string;
  readonly files: never;
  readonly public: boolean;
  readonly created_at: string;
  readonly updated_at: string;
  readonly description: string | null;
  readonly comments: number;
  readonly user: SimpleUser;
  readonly comments_url: string;
  readonly owner?: SimpleUser;
  readonly truncated?: boolean;
  readonly forks?: ReadonlyArray<never>;
  readonly history?: ReadonlyArray<never>;
};

export type GistsListResponseBody =
  | ReadonlyArray<BaseGist>
  | never
  | BasicError;

export type GistsListResolver = msw.HttpResponseResolver<
  GistsListRequestParams,
  GistsListRequestBody,
  GistsListResponseBody
>;

export type GistsCreateRequestQuery = {};

export type GistsCreateRequestHeaders = {};

export type GistsCreateRequestParams = {};

export type GistsCreateRequestBody = {
  readonly description?: string;
  readonly files: never;
  readonly public?: boolean | 'true' | 'false';
};

export type GistsCreateResponseStatus = 201 | 304 | 403 | 404 | 422;

export type PublicUser = {
  readonly login: string;
  readonly id: number;
  readonly node_id: string;
  readonly avatar_url: string;
  readonly gravatar_id: string | null;
  readonly url: string;
  readonly html_url: string;
  readonly followers_url: string;
  readonly following_url: string;
  readonly gists_url: string;
  readonly starred_url: string;
  readonly subscriptions_url: string;
  readonly organizations_url: string;
  readonly repos_url: string;
  readonly events_url: string;
  readonly received_events_url: string;
  readonly type: string;
  readonly site_admin: boolean;
  readonly name: string | null;
  readonly company: string | null;
  readonly blog: string | null;
  readonly location: string | null;
  readonly email: string | null;
  readonly hireable: boolean | null;
  readonly bio: string | null;
  readonly twitter_username?: string | null;
  readonly public_repos: number;
  readonly public_gists: number;
  readonly followers: number;
  readonly following: number;
  readonly created_at: string;
  readonly updated_at: string;
  readonly plan?: {
    readonly collaborators: number;
    readonly name: string;
    readonly space: number;
    readonly private_repos: number;
  };
  readonly suspended_at?: string | null;
  readonly private_gists?: number;
  readonly total_private_repos?: number;
  readonly owned_private_repos?: number;
  readonly disk_usage?: number;
  readonly collaborators?: number;
};

export type GistHistory = {
  readonly user?: SimpleUser;
  readonly version?: string;
  readonly committed_at?: string;
  readonly change_status?: {
    readonly total?: number;
    readonly additions?: number;
    readonly deletions?: number;
  };
  readonly url?: string;
};

export type Gist = {
  readonly url: string;
  readonly forks_url: string;
  readonly commits_url: string;
  readonly id: string;
  readonly node_id: string;
  readonly git_pull_url: string;
  readonly git_push_url: string;
  readonly html_url: string;
  readonly files: never;
  readonly public: boolean;
  readonly created_at: string;
  readonly updated_at: string;
  readonly description: string | null;
  readonly comments: number;
  readonly user: SimpleUser;
  readonly comments_url: string;
  readonly owner?: SimpleUser;
  readonly truncated?: boolean;
  readonly forks?: ReadonlyArray<never>;
  readonly history?: ReadonlyArray<never>;
} | null;

export type GistSimple = {
  readonly forks?: ReadonlyArray<{
    readonly id?: string;
    readonly url?: string;
    readonly user?: PublicUser;
    readonly created_at?: string;
    readonly updated_at?: string;
  }> | null;
  readonly history?: ReadonlyArray<GistHistory> | null;
  readonly fork_of?: Gist;
  readonly url?: string;
  readonly forks_url?: string;
  readonly commits_url?: string;
  readonly id?: string;
  readonly node_id?: string;
  readonly git_pull_url?: string;
  readonly git_push_url?: string;
  readonly html_url?: string;
  readonly files?: never;
  readonly public?: boolean;
  readonly created_at?: string;
  readonly updated_at?: string;
  readonly description?: string | null;
  readonly comments?: number;
  readonly user?: string | null;
  readonly comments_url?: string;
  readonly owner?: SimpleUser;
  readonly truncated?: boolean;
};

export type GistsCreateResponseBody =
  | GistSimple
  | never
  | BasicError
  | ValidationError;

export type GistsCreateResolver = msw.HttpResponseResolver<
  GistsCreateRequestParams,
  GistsCreateRequestBody,
  GistsCreateResponseBody
>;

export type GistsListPublicRequestQuery = {
  readonly since?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type GistsListPublicRequestHeaders = {};

export type GistsListPublicRequestParams = {};

export type GistsListPublicRequestBody = never;

export type GistsListPublicResponseStatus = 200 | 304 | 403 | 422;

export type GistsListPublicResponseBody =
  | ReadonlyArray<BaseGist>
  | never
  | BasicError
  | ValidationError;

export type GistsListPublicResolver = msw.HttpResponseResolver<
  GistsListPublicRequestParams,
  GistsListPublicRequestBody,
  GistsListPublicResponseBody
>;

export type GistsListStarredRequestQuery = {
  readonly since?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type GistsListStarredRequestHeaders = {};

export type GistsListStarredRequestParams = {};

export type GistsListStarredRequestBody = never;

export type GistsListStarredResponseStatus = 200 | 304 | 401 | 403;

export type GistsListStarredResponseBody =
  | ReadonlyArray<BaseGist>
  | never
  | BasicError;

export type GistsListStarredResolver = msw.HttpResponseResolver<
  GistsListStarredRequestParams,
  GistsListStarredRequestBody,
  GistsListStarredResponseBody
>;

export type GistsGetRequestQuery = {};

export type GistsGetRequestHeaders = {};

export type GistsGetRequestParams = { readonly gist_id: string };

export type GistsGetRequestBody = never;

export type GistsGetResponseStatus = 200 | 304 | 403 | 404;

export type GistsGetResponseBody =
  | GistSimple
  | never
  | {
      readonly block?: {
        readonly reason?: string;
        readonly created_at?: string;
        readonly html_url?: string | null;
      };
      readonly message?: string;
      readonly documentation_url?: string;
    }
  | BasicError;

export type GistsGetResolver = msw.HttpResponseResolver<
  GistsGetRequestParams,
  GistsGetRequestBody,
  GistsGetResponseBody
>;

export type GistsUpdateRequestQuery = {};

export type GistsUpdateRequestHeaders = {};

export type GistsUpdateRequestParams = { readonly gist_id: string };

export type GistsUpdateRequestBody =
  | ({ readonly description?: string; readonly files?: never } & never)
  | null;

export type GistsUpdateResponseStatus = 200 | 404 | 422;

export type GistsUpdateResponseBody = GistSimple | BasicError | ValidationError;

export type GistsUpdateResolver = msw.HttpResponseResolver<
  GistsUpdateRequestParams,
  GistsUpdateRequestBody,
  GistsUpdateResponseBody
>;

export type GistsDeleteRequestQuery = {};

export type GistsDeleteRequestHeaders = {};

export type GistsDeleteRequestParams = { readonly gist_id: string };

export type GistsDeleteRequestBody = never;

export type GistsDeleteResponseStatus = 204 | 304 | 403 | 404;

export type GistsDeleteResponseBody = never | BasicError;

export type GistsDeleteResolver = msw.HttpResponseResolver<
  GistsDeleteRequestParams,
  GistsDeleteRequestBody,
  GistsDeleteResponseBody
>;

export type GistsListCommentsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type GistsListCommentsRequestHeaders = {};

export type GistsListCommentsRequestParams = { readonly gist_id: string };

export type GistsListCommentsRequestBody = never;

export type GistsListCommentsResponseStatus = 200 | 304 | 403 | 404;

export type GistComment = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly body: string;
  readonly user: SimpleUser;
  readonly created_at: string;
  readonly updated_at: string;
  readonly author_association: AuthorAssociation;
};

export type GistsListCommentsResponseBody =
  | ReadonlyArray<GistComment>
  | never
  | BasicError;

export type GistsListCommentsResolver = msw.HttpResponseResolver<
  GistsListCommentsRequestParams,
  GistsListCommentsRequestBody,
  GistsListCommentsResponseBody
>;

export type GistsCreateCommentRequestQuery = {};

export type GistsCreateCommentRequestHeaders = {};

export type GistsCreateCommentRequestParams = { readonly gist_id: string };

export type GistsCreateCommentRequestBody = { readonly body: string };

export type GistsCreateCommentResponseStatus = 201 | 304 | 403 | 404;

export type GistsCreateCommentResponseBody = GistComment | never | BasicError;

export type GistsCreateCommentResolver = msw.HttpResponseResolver<
  GistsCreateCommentRequestParams,
  GistsCreateCommentRequestBody,
  GistsCreateCommentResponseBody
>;

export type GistsGetCommentRequestQuery = {};

export type GistsGetCommentRequestHeaders = {};

export type GistsGetCommentRequestParams = {
  readonly gist_id: string;
  readonly comment_id: string;
};

export type GistsGetCommentRequestBody = never;

export type GistsGetCommentResponseStatus = 200 | 304 | 403 | 404;

export type GistsGetCommentResponseBody =
  | GistComment
  | never
  | {
      readonly block?: {
        readonly reason?: string;
        readonly created_at?: string;
        readonly html_url?: string | null;
      };
      readonly message?: string;
      readonly documentation_url?: string;
    }
  | BasicError;

export type GistsGetCommentResolver = msw.HttpResponseResolver<
  GistsGetCommentRequestParams,
  GistsGetCommentRequestBody,
  GistsGetCommentResponseBody
>;

export type GistsUpdateCommentRequestQuery = {};

export type GistsUpdateCommentRequestHeaders = {};

export type GistsUpdateCommentRequestParams = {
  readonly gist_id: string;
  readonly comment_id: string;
};

export type GistsUpdateCommentRequestBody = { readonly body: string };

export type GistsUpdateCommentResponseStatus = 200 | 404;

export type GistsUpdateCommentResponseBody = GistComment | BasicError;

export type GistsUpdateCommentResolver = msw.HttpResponseResolver<
  GistsUpdateCommentRequestParams,
  GistsUpdateCommentRequestBody,
  GistsUpdateCommentResponseBody
>;

export type GistsDeleteCommentRequestQuery = {};

export type GistsDeleteCommentRequestHeaders = {};

export type GistsDeleteCommentRequestParams = {
  readonly gist_id: string;
  readonly comment_id: string;
};

export type GistsDeleteCommentRequestBody = never;

export type GistsDeleteCommentResponseStatus = 204 | 304 | 403 | 404;

export type GistsDeleteCommentResponseBody = never | BasicError;

export type GistsDeleteCommentResolver = msw.HttpResponseResolver<
  GistsDeleteCommentRequestParams,
  GistsDeleteCommentRequestBody,
  GistsDeleteCommentResponseBody
>;

export type GistsListCommitsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type GistsListCommitsRequestHeaders = {};

export type GistsListCommitsRequestParams = { readonly gist_id: string };

export type GistsListCommitsRequestBody = never;

export type GistsListCommitsResponseStatus = 200 | 304 | 403 | 404;

export type GistCommit = {
  readonly url: string;
  readonly version: string;
  readonly user: SimpleUser;
  readonly change_status: {
    readonly total?: number;
    readonly additions?: number;
    readonly deletions?: number;
  };
  readonly committed_at: string;
};

export type GistsListCommitsResponseBody =
  | ReadonlyArray<GistCommit>
  | never
  | BasicError;

export type GistsListCommitsResolver = msw.HttpResponseResolver<
  GistsListCommitsRequestParams,
  GistsListCommitsRequestBody,
  GistsListCommitsResponseBody
>;

export type GistsListForksRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type GistsListForksRequestHeaders = {};

export type GistsListForksRequestParams = { readonly gist_id: string };

export type GistsListForksRequestBody = never;

export type GistsListForksResponseStatus = 200 | 304 | 403 | 404;

export type GistsListForksResponseBody =
  | ReadonlyArray<GistSimple>
  | never
  | BasicError;

export type GistsListForksResolver = msw.HttpResponseResolver<
  GistsListForksRequestParams,
  GistsListForksRequestBody,
  GistsListForksResponseBody
>;

export type GistsForkRequestQuery = {};

export type GistsForkRequestHeaders = {};

export type GistsForkRequestParams = { readonly gist_id: string };

export type GistsForkRequestBody = never;

export type GistsForkResponseStatus = 201 | 304 | 403 | 404 | 422;

export type GistsForkResponseBody =
  | BaseGist
  | never
  | BasicError
  | ValidationError;

export type GistsForkResolver = msw.HttpResponseResolver<
  GistsForkRequestParams,
  GistsForkRequestBody,
  GistsForkResponseBody
>;

export type GistsCheckIsStarredRequestQuery = {};

export type GistsCheckIsStarredRequestHeaders = {};

export type GistsCheckIsStarredRequestParams = { readonly gist_id: string };

export type GistsCheckIsStarredRequestBody = never;

export type GistsCheckIsStarredResponseStatus = 204 | 304 | 403 | 404;

export type GistsCheckIsStarredResponseBody = never | BasicError | {};

export type GistsCheckIsStarredResolver = msw.HttpResponseResolver<
  GistsCheckIsStarredRequestParams,
  GistsCheckIsStarredRequestBody,
  GistsCheckIsStarredResponseBody
>;

export type GistsStarRequestQuery = {};

export type GistsStarRequestHeaders = {};

export type GistsStarRequestParams = { readonly gist_id: string };

export type GistsStarRequestBody = never;

export type GistsStarResponseStatus = 204 | 304 | 403 | 404;

export type GistsStarResponseBody = never | BasicError;

export type GistsStarResolver = msw.HttpResponseResolver<
  GistsStarRequestParams,
  GistsStarRequestBody,
  GistsStarResponseBody
>;

export type GistsUnstarRequestQuery = {};

export type GistsUnstarRequestHeaders = {};

export type GistsUnstarRequestParams = { readonly gist_id: string };

export type GistsUnstarRequestBody = never;

export type GistsUnstarResponseStatus = 204 | 304 | 403 | 404;

export type GistsUnstarResponseBody = never | BasicError;

export type GistsUnstarResolver = msw.HttpResponseResolver<
  GistsUnstarRequestParams,
  GistsUnstarRequestBody,
  GistsUnstarResponseBody
>;

export type GistsGetRevisionRequestQuery = {};

export type GistsGetRevisionRequestHeaders = {};

export type GistsGetRevisionRequestParams = {
  readonly gist_id: string;
  readonly sha: string;
};

export type GistsGetRevisionRequestBody = never;

export type GistsGetRevisionResponseStatus = 200 | 403 | 404 | 422;

export type GistsGetRevisionResponseBody =
  | GistSimple
  | BasicError
  | ValidationError;

export type GistsGetRevisionResolver = msw.HttpResponseResolver<
  GistsGetRevisionRequestParams,
  GistsGetRevisionRequestBody,
  GistsGetRevisionResponseBody
>;

export type GitignoreGetAllTemplatesRequestQuery = {};

export type GitignoreGetAllTemplatesRequestHeaders = {};

export type GitignoreGetAllTemplatesRequestParams = {};

export type GitignoreGetAllTemplatesRequestBody = never;

export type GitignoreGetAllTemplatesResponseStatus = 200 | 304;

export type GitignoreGetAllTemplatesResponseBody =
  | ReadonlyArray<string>
  | never;

export type GitignoreGetAllTemplatesResolver = msw.HttpResponseResolver<
  GitignoreGetAllTemplatesRequestParams,
  GitignoreGetAllTemplatesRequestBody,
  GitignoreGetAllTemplatesResponseBody
>;

export type GitignoreGetTemplateRequestQuery = {};

export type GitignoreGetTemplateRequestHeaders = {};

export type GitignoreGetTemplateRequestParams = { readonly name: string };

export type GitignoreGetTemplateRequestBody = never;

export type GitignoreGetTemplateResponseStatus = 200 | 304;

export type GitignoreTemplate = {
  readonly name: string;
  readonly source: string;
};

export type GitignoreGetTemplateResponseBody = GitignoreTemplate | never;

export type GitignoreGetTemplateResolver = msw.HttpResponseResolver<
  GitignoreGetTemplateRequestParams,
  GitignoreGetTemplateRequestBody,
  GitignoreGetTemplateResponseBody
>;

export type AppsListReposAccessibleToInstallationRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type AppsListReposAccessibleToInstallationRequestHeaders = {};

export type AppsListReposAccessibleToInstallationRequestParams = {};

export type AppsListReposAccessibleToInstallationRequestBody = never;

export type AppsListReposAccessibleToInstallationResponseStatus =
  | 200
  | 304
  | 401
  | 403;

export type AppsListReposAccessibleToInstallationResponseBody =
  | {
      readonly total_count: number;
      readonly repositories: ReadonlyArray<Repository>;
      readonly repository_selection?: string;
    }
  | never
  | BasicError;

export type AppsListReposAccessibleToInstallationResolver = msw.HttpResponseResolver<
  AppsListReposAccessibleToInstallationRequestParams,
  AppsListReposAccessibleToInstallationRequestBody,
  AppsListReposAccessibleToInstallationResponseBody
>;

export type AppsRevokeInstallationAccessTokenRequestQuery = {};

export type AppsRevokeInstallationAccessTokenRequestHeaders = {};

export type AppsRevokeInstallationAccessTokenRequestParams = {};

export type AppsRevokeInstallationAccessTokenRequestBody = never;

export type AppsRevokeInstallationAccessTokenResponseStatus = 204;

export type AppsRevokeInstallationAccessTokenResponseBody = never;

export type AppsRevokeInstallationAccessTokenResolver = msw.HttpResponseResolver<
  AppsRevokeInstallationAccessTokenRequestParams,
  AppsRevokeInstallationAccessTokenRequestBody,
  AppsRevokeInstallationAccessTokenResponseBody
>;

export type IssuesListRequestQuery = {
  readonly filter?: string;
  readonly state?: string;
  readonly labels?: string;
  readonly sort?: string;
  readonly direction?: string;
  readonly since?: string;
  readonly collab?: string;
  readonly orgs?: string;
  readonly owned?: string;
  readonly pulls?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type IssuesListRequestHeaders = {};

export type IssuesListRequestParams = {};

export type IssuesListRequestBody = never;

export type IssuesListResponseStatus = 200 | 304 | 404 | 422;

export type IssuesListResponseBody =
  | ReadonlyArray<Issue>
  | never
  | BasicError
  | ValidationError;

export type IssuesListResolver = msw.HttpResponseResolver<
  IssuesListRequestParams,
  IssuesListRequestBody,
  IssuesListResponseBody
>;

export type LicensesGetAllCommonlyUsedRequestQuery = {
  readonly featured?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type LicensesGetAllCommonlyUsedRequestHeaders = {};

export type LicensesGetAllCommonlyUsedRequestParams = {};

export type LicensesGetAllCommonlyUsedRequestBody = never;

export type LicensesGetAllCommonlyUsedResponseStatus = 200 | 304;

export type LicensesGetAllCommonlyUsedResponseBody =
  | ReadonlyArray<LicenseSimple>
  | never;

export type LicensesGetAllCommonlyUsedResolver = msw.HttpResponseResolver<
  LicensesGetAllCommonlyUsedRequestParams,
  LicensesGetAllCommonlyUsedRequestBody,
  LicensesGetAllCommonlyUsedResponseBody
>;

export type LicensesGetRequestQuery = {};

export type LicensesGetRequestHeaders = {};

export type LicensesGetRequestParams = { readonly license: string };

export type LicensesGetRequestBody = never;

export type LicensesGetResponseStatus = 200 | 304 | 403 | 404;

export type License = {
  readonly key: string;
  readonly name: string;
  readonly spdx_id: string | null;
  readonly url: string | null;
  readonly node_id: string;
  readonly html_url: string;
  readonly description: string;
  readonly implementation: string;
  readonly permissions: ReadonlyArray<string>;
  readonly conditions: ReadonlyArray<string>;
  readonly limitations: ReadonlyArray<string>;
  readonly body: string;
  readonly featured: boolean;
};

export type LicensesGetResponseBody = License | never | BasicError;

export type LicensesGetResolver = msw.HttpResponseResolver<
  LicensesGetRequestParams,
  LicensesGetRequestBody,
  LicensesGetResponseBody
>;

export type MarkdownRenderRequestQuery = {};

export type MarkdownRenderRequestHeaders = {};

export type MarkdownRenderRequestParams = {};

export type MarkdownRenderRequestBody = {
  readonly text: string;
  readonly mode?: 'markdown' | 'gfm';
  readonly context?: string;
};

export type MarkdownRenderResponseStatus = 200 | 304;

export type MarkdownRenderResponseBody = string | never;

export type MarkdownRenderResolver = msw.HttpResponseResolver<
  MarkdownRenderRequestParams,
  MarkdownRenderRequestBody,
  MarkdownRenderResponseBody
>;

export type MarkdownRenderRawRequestQuery = {};

export type MarkdownRenderRawRequestHeaders = {};

export type MarkdownRenderRawRequestParams = {};

export type MarkdownRenderRawRequestBody = never;

export type MarkdownRenderRawResponseStatus = 200 | 304;

export type MarkdownRenderRawResponseBody = string | never;

export type MarkdownRenderRawResolver = msw.HttpResponseResolver<
  MarkdownRenderRawRequestParams,
  MarkdownRenderRawRequestBody,
  MarkdownRenderRawResponseBody
>;

export type AppsGetSubscriptionPlanForAccountRequestQuery = {};

export type AppsGetSubscriptionPlanForAccountRequestHeaders = {};

export type AppsGetSubscriptionPlanForAccountRequestParams = {
  readonly account_id: string;
};

export type AppsGetSubscriptionPlanForAccountRequestBody = never;

export type AppsGetSubscriptionPlanForAccountResponseStatus = 200 | 401 | 404;

export type MarketplaceListingPlan = {
  readonly url: string;
  readonly accounts_url: string;
  readonly id: number;
  readonly number: number;
  readonly name: string;
  readonly description: string;
  readonly monthly_price_in_cents: number;
  readonly yearly_price_in_cents: number;
  readonly price_model: string;
  readonly has_free_trial: boolean;
  readonly unit_name: string | null;
  readonly state: string;
  readonly bullets: ReadonlyArray<string>;
};

export type MarketplacePurchase = {
  readonly url: string;
  readonly type: string;
  readonly id: number;
  readonly login: string;
  readonly organization_billing_email?: string;
  readonly email?: string | null;
  readonly marketplace_pending_change?: {
    readonly is_installed?: boolean;
    readonly effective_date?: string;
    readonly unit_count?: number | null;
    readonly id?: number;
    readonly plan?: MarketplaceListingPlan;
  } | null;
  readonly marketplace_purchase: {
    readonly billing_cycle?: string;
    readonly next_billing_date?: string | null;
    readonly is_installed?: boolean;
    readonly unit_count?: number | null;
    readonly on_free_trial?: boolean;
    readonly free_trial_ends_on?: string | null;
    readonly updated_at?: string;
    readonly plan?: MarketplaceListingPlan;
  };
};

export type AppsGetSubscriptionPlanForAccountResponseBody =
  | MarketplacePurchase
  | BasicError;

export type AppsGetSubscriptionPlanForAccountResolver = msw.HttpResponseResolver<
  AppsGetSubscriptionPlanForAccountRequestParams,
  AppsGetSubscriptionPlanForAccountRequestBody,
  AppsGetSubscriptionPlanForAccountResponseBody
>;

export type AppsListPlansRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type AppsListPlansRequestHeaders = {};

export type AppsListPlansRequestParams = {};

export type AppsListPlansRequestBody = never;

export type AppsListPlansResponseStatus = 200 | 401 | 404;

export type AppsListPlansResponseBody =
  | ReadonlyArray<MarketplaceListingPlan>
  | BasicError;

export type AppsListPlansResolver = msw.HttpResponseResolver<
  AppsListPlansRequestParams,
  AppsListPlansRequestBody,
  AppsListPlansResponseBody
>;

export type AppsListAccountsForPlanRequestQuery = {
  readonly sort?: string;
  readonly direction?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type AppsListAccountsForPlanRequestHeaders = {};

export type AppsListAccountsForPlanRequestParams = { readonly plan_id: string };

export type AppsListAccountsForPlanRequestBody = never;

export type AppsListAccountsForPlanResponseStatus = 200 | 401 | 404 | 422;

export type AppsListAccountsForPlanResponseBody =
  | ReadonlyArray<MarketplacePurchase>
  | BasicError
  | ValidationError;

export type AppsListAccountsForPlanResolver = msw.HttpResponseResolver<
  AppsListAccountsForPlanRequestParams,
  AppsListAccountsForPlanRequestBody,
  AppsListAccountsForPlanResponseBody
>;

export type AppsGetSubscriptionPlanForAccountStubbedRequestQuery = {};

export type AppsGetSubscriptionPlanForAccountStubbedRequestHeaders = {};

export type AppsGetSubscriptionPlanForAccountStubbedRequestParams = {
  readonly account_id: string;
};

export type AppsGetSubscriptionPlanForAccountStubbedRequestBody = never;

export type AppsGetSubscriptionPlanForAccountStubbedResponseStatus =
  | 200
  | 401
  | 404;

export type AppsGetSubscriptionPlanForAccountStubbedResponseBody =
  | MarketplacePurchase
  | BasicError
  | never;

export type AppsGetSubscriptionPlanForAccountStubbedResolver = msw.HttpResponseResolver<
  AppsGetSubscriptionPlanForAccountStubbedRequestParams,
  AppsGetSubscriptionPlanForAccountStubbedRequestBody,
  AppsGetSubscriptionPlanForAccountStubbedResponseBody
>;

export type AppsListPlansStubbedRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type AppsListPlansStubbedRequestHeaders = {};

export type AppsListPlansStubbedRequestParams = {};

export type AppsListPlansStubbedRequestBody = never;

export type AppsListPlansStubbedResponseStatus = 200 | 401;

export type AppsListPlansStubbedResponseBody =
  | ReadonlyArray<MarketplaceListingPlan>
  | BasicError;

export type AppsListPlansStubbedResolver = msw.HttpResponseResolver<
  AppsListPlansStubbedRequestParams,
  AppsListPlansStubbedRequestBody,
  AppsListPlansStubbedResponseBody
>;

export type AppsListAccountsForPlanStubbedRequestQuery = {
  readonly sort?: string;
  readonly direction?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type AppsListAccountsForPlanStubbedRequestHeaders = {};

export type AppsListAccountsForPlanStubbedRequestParams = {
  readonly plan_id: string;
};

export type AppsListAccountsForPlanStubbedRequestBody = never;

export type AppsListAccountsForPlanStubbedResponseStatus = 200 | 401;

export type AppsListAccountsForPlanStubbedResponseBody =
  | ReadonlyArray<MarketplacePurchase>
  | BasicError;

export type AppsListAccountsForPlanStubbedResolver = msw.HttpResponseResolver<
  AppsListAccountsForPlanStubbedRequestParams,
  AppsListAccountsForPlanStubbedRequestBody,
  AppsListAccountsForPlanStubbedResponseBody
>;

export type MetaGetRequestQuery = {};

export type MetaGetRequestHeaders = {};

export type MetaGetRequestParams = {};

export type MetaGetRequestBody = never;

export type MetaGetResponseStatus = 200 | 304;

export type ApiOverview = {
  readonly verifiable_password_authentication: boolean;
  readonly ssh_key_fingerprints?: {
    readonly SHA256_RSA?: string;
    readonly SHA256_DSA?: string;
    readonly SHA256_ECDSA?: string;
    readonly SHA256_ED25519?: string;
  };
  readonly ssh_keys?: ReadonlyArray<string>;
  readonly hooks?: ReadonlyArray<string>;
  readonly web?: ReadonlyArray<string>;
  readonly api?: ReadonlyArray<string>;
  readonly git?: ReadonlyArray<string>;
  readonly packages?: ReadonlyArray<string>;
  readonly pages?: ReadonlyArray<string>;
  readonly importer?: ReadonlyArray<string>;
  readonly actions?: ReadonlyArray<string>;
  readonly dependabot?: ReadonlyArray<string>;
};

export type MetaGetResponseBody = ApiOverview | never;

export type MetaGetResolver = msw.HttpResponseResolver<
  MetaGetRequestParams,
  MetaGetRequestBody,
  MetaGetResponseBody
>;

export type ActivityListPublicEventsForRepoNetworkRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActivityListPublicEventsForRepoNetworkRequestHeaders = {};

export type ActivityListPublicEventsForRepoNetworkRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActivityListPublicEventsForRepoNetworkRequestBody = never;

export type ActivityListPublicEventsForRepoNetworkResponseStatus =
  | 200
  | 301
  | 304
  | 403
  | 404;

export type ActivityListPublicEventsForRepoNetworkResponseBody =
  | ReadonlyArray<Event>
  | BasicError
  | never;

export type ActivityListPublicEventsForRepoNetworkResolver = msw.HttpResponseResolver<
  ActivityListPublicEventsForRepoNetworkRequestParams,
  ActivityListPublicEventsForRepoNetworkRequestBody,
  ActivityListPublicEventsForRepoNetworkResponseBody
>;

export type ActivityListNotificationsForAuthenticatedUserRequestQuery = {
  readonly all?: string;
  readonly participating?: string;
  readonly since?: string;
  readonly before?: string;
  readonly page?: string;
  readonly per_page?: string;
};

export type ActivityListNotificationsForAuthenticatedUserRequestHeaders = {};

export type ActivityListNotificationsForAuthenticatedUserRequestParams = {};

export type ActivityListNotificationsForAuthenticatedUserRequestBody = never;

export type ActivityListNotificationsForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 422;

export type MinimalRepository = {
  readonly id: number;
  readonly node_id: string;
  readonly name: string;
  readonly full_name: string;
  readonly owner: SimpleUser;
  readonly private: boolean;
  readonly html_url: string;
  readonly description: string | null;
  readonly fork: boolean;
  readonly url: string;
  readonly archive_url: string;
  readonly assignees_url: string;
  readonly blobs_url: string;
  readonly branches_url: string;
  readonly collaborators_url: string;
  readonly comments_url: string;
  readonly commits_url: string;
  readonly compare_url: string;
  readonly contents_url: string;
  readonly contributors_url: string;
  readonly deployments_url: string;
  readonly downloads_url: string;
  readonly events_url: string;
  readonly forks_url: string;
  readonly git_commits_url: string;
  readonly git_refs_url: string;
  readonly git_tags_url: string;
  readonly git_url?: string;
  readonly issue_comment_url: string;
  readonly issue_events_url: string;
  readonly issues_url: string;
  readonly keys_url: string;
  readonly labels_url: string;
  readonly languages_url: string;
  readonly merges_url: string;
  readonly milestones_url: string;
  readonly notifications_url: string;
  readonly pulls_url: string;
  readonly releases_url: string;
  readonly ssh_url?: string;
  readonly stargazers_url: string;
  readonly statuses_url: string;
  readonly subscribers_url: string;
  readonly subscription_url: string;
  readonly tags_url: string;
  readonly teams_url: string;
  readonly trees_url: string;
  readonly clone_url?: string;
  readonly mirror_url?: string | null;
  readonly hooks_url: string;
  readonly svn_url?: string;
  readonly homepage?: string | null;
  readonly language?: string | null;
  readonly forks_count?: number;
  readonly stargazers_count?: number;
  readonly watchers_count?: number;
  readonly size?: number;
  readonly default_branch?: string;
  readonly open_issues_count?: number;
  readonly is_template?: boolean;
  readonly topics?: ReadonlyArray<string>;
  readonly has_issues?: boolean;
  readonly has_projects?: boolean;
  readonly has_wiki?: boolean;
  readonly has_pages?: boolean;
  readonly has_downloads?: boolean;
  readonly archived?: boolean;
  readonly disabled?: boolean;
  readonly visibility?: string;
  readonly pushed_at?: string | null;
  readonly created_at?: string | null;
  readonly updated_at?: string | null;
  readonly permissions?: {
    readonly admin?: boolean;
    readonly maintain?: boolean;
    readonly push?: boolean;
    readonly triage?: boolean;
    readonly pull?: boolean;
  };
  readonly role_name?: string;
  readonly temp_clone_token?: string;
  readonly delete_branch_on_merge?: boolean;
  readonly subscribers_count?: number;
  readonly network_count?: number;
  readonly code_of_conduct?: CodeOfConduct;
  readonly license?: {
    readonly key?: string;
    readonly name?: string;
    readonly spdx_id?: string;
    readonly url?: string;
    readonly node_id?: string;
  } | null;
  readonly forks?: number;
  readonly open_issues?: number;
  readonly watchers?: number;
  readonly allow_forking?: boolean;
  readonly web_commit_signoff_required?: boolean;
};

export type Thread = {
  readonly id: string;
  readonly repository: MinimalRepository;
  readonly subject: {
    readonly title: string;
    readonly url: string;
    readonly latest_comment_url: string;
    readonly type: string;
  };
  readonly reason: string;
  readonly unread: boolean;
  readonly updated_at: string;
  readonly last_read_at: string | null;
  readonly url: string;
  readonly subscription_url: string;
};

export type ActivityListNotificationsForAuthenticatedUserResponseBody =
  | ReadonlyArray<Thread>
  | never
  | BasicError
  | ValidationError;

export type ActivityListNotificationsForAuthenticatedUserResolver = msw.HttpResponseResolver<
  ActivityListNotificationsForAuthenticatedUserRequestParams,
  ActivityListNotificationsForAuthenticatedUserRequestBody,
  ActivityListNotificationsForAuthenticatedUserResponseBody
>;

export type ActivityMarkNotificationsAsReadRequestQuery = {};

export type ActivityMarkNotificationsAsReadRequestHeaders = {};

export type ActivityMarkNotificationsAsReadRequestParams = {};

export type ActivityMarkNotificationsAsReadRequestBody =
  | { readonly last_read_at?: string; readonly read?: boolean }
  | undefined;

export type ActivityMarkNotificationsAsReadResponseStatus =
  | 202
  | 205
  | 304
  | 401
  | 403;

export type ActivityMarkNotificationsAsReadResponseBody =
  | { readonly message?: string }
  | never
  | BasicError;

export type ActivityMarkNotificationsAsReadResolver = msw.HttpResponseResolver<
  ActivityMarkNotificationsAsReadRequestParams,
  ActivityMarkNotificationsAsReadRequestBody,
  ActivityMarkNotificationsAsReadResponseBody
>;

export type ActivityGetThreadRequestQuery = {};

export type ActivityGetThreadRequestHeaders = {};

export type ActivityGetThreadRequestParams = { readonly thread_id: string };

export type ActivityGetThreadRequestBody = never;

export type ActivityGetThreadResponseStatus = 200 | 304 | 401 | 403;

export type ActivityGetThreadResponseBody = Thread | never | BasicError;

export type ActivityGetThreadResolver = msw.HttpResponseResolver<
  ActivityGetThreadRequestParams,
  ActivityGetThreadRequestBody,
  ActivityGetThreadResponseBody
>;

export type ActivityMarkThreadAsReadRequestQuery = {};

export type ActivityMarkThreadAsReadRequestHeaders = {};

export type ActivityMarkThreadAsReadRequestParams = {
  readonly thread_id: string;
};

export type ActivityMarkThreadAsReadRequestBody = never;

export type ActivityMarkThreadAsReadResponseStatus = 205 | 304 | 403;

export type ActivityMarkThreadAsReadResponseBody = never | BasicError;

export type ActivityMarkThreadAsReadResolver = msw.HttpResponseResolver<
  ActivityMarkThreadAsReadRequestParams,
  ActivityMarkThreadAsReadRequestBody,
  ActivityMarkThreadAsReadResponseBody
>;

export type ActivityGetThreadSubscriptionForAuthenticatedUserRequestQuery = {};

export type ActivityGetThreadSubscriptionForAuthenticatedUserRequestHeaders = {};

export type ActivityGetThreadSubscriptionForAuthenticatedUserRequestParams = {
  readonly thread_id: string;
};

export type ActivityGetThreadSubscriptionForAuthenticatedUserRequestBody = never;

export type ActivityGetThreadSubscriptionForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403;

export type ThreadSubscription = {
  readonly subscribed: boolean;
  readonly ignored: boolean;
  readonly reason: string | null;
  readonly created_at: string | null;
  readonly url: string;
  readonly thread_url?: string;
  readonly repository_url?: string;
};

export type ActivityGetThreadSubscriptionForAuthenticatedUserResponseBody =
  | ThreadSubscription
  | never
  | BasicError;

export type ActivityGetThreadSubscriptionForAuthenticatedUserResolver = msw.HttpResponseResolver<
  ActivityGetThreadSubscriptionForAuthenticatedUserRequestParams,
  ActivityGetThreadSubscriptionForAuthenticatedUserRequestBody,
  ActivityGetThreadSubscriptionForAuthenticatedUserResponseBody
>;

export type ActivitySetThreadSubscriptionRequestQuery = {};

export type ActivitySetThreadSubscriptionRequestHeaders = {};

export type ActivitySetThreadSubscriptionRequestParams = {
  readonly thread_id: string;
};

export type ActivitySetThreadSubscriptionRequestBody =
  | { readonly ignored?: boolean }
  | undefined;

export type ActivitySetThreadSubscriptionResponseStatus = 200 | 304 | 401 | 403;

export type ActivitySetThreadSubscriptionResponseBody =
  | ThreadSubscription
  | never
  | BasicError;

export type ActivitySetThreadSubscriptionResolver = msw.HttpResponseResolver<
  ActivitySetThreadSubscriptionRequestParams,
  ActivitySetThreadSubscriptionRequestBody,
  ActivitySetThreadSubscriptionResponseBody
>;

export type ActivityDeleteThreadSubscriptionRequestQuery = {};

export type ActivityDeleteThreadSubscriptionRequestHeaders = {};

export type ActivityDeleteThreadSubscriptionRequestParams = {
  readonly thread_id: string;
};

export type ActivityDeleteThreadSubscriptionRequestBody = never;

export type ActivityDeleteThreadSubscriptionResponseStatus =
  | 204
  | 304
  | 401
  | 403;

export type ActivityDeleteThreadSubscriptionResponseBody = never | BasicError;

export type ActivityDeleteThreadSubscriptionResolver = msw.HttpResponseResolver<
  ActivityDeleteThreadSubscriptionRequestParams,
  ActivityDeleteThreadSubscriptionRequestBody,
  ActivityDeleteThreadSubscriptionResponseBody
>;

export type MetaGetOctocatRequestQuery = { readonly s?: string };

export type MetaGetOctocatRequestHeaders = {};

export type MetaGetOctocatRequestParams = {};

export type MetaGetOctocatRequestBody = never;

export type MetaGetOctocatResponseStatus = 200;

export type MetaGetOctocatResponseBody = Buffer;

export type MetaGetOctocatResolver = msw.HttpResponseResolver<
  MetaGetOctocatRequestParams,
  MetaGetOctocatRequestBody,
  MetaGetOctocatResponseBody
>;

export type OrgsListRequestQuery = {
  readonly since?: string;
  readonly per_page?: string;
};

export type OrgsListRequestHeaders = {};

export type OrgsListRequestParams = {};

export type OrgsListRequestBody = never;

export type OrgsListResponseStatus = 200 | 304;

export type OrgsListResponseBody = ReadonlyArray<OrganizationSimple> | never;

export type OrgsListResolver = msw.HttpResponseResolver<
  OrgsListRequestParams,
  OrgsListRequestBody,
  OrgsListResponseBody
>;

export type OrgsListCustomRolesRequestQuery = {};

export type OrgsListCustomRolesRequestHeaders = {};

export type OrgsListCustomRolesRequestParams = {
  readonly organization_id: string;
};

export type OrgsListCustomRolesRequestBody = never;

export type OrgsListCustomRolesResponseStatus = 200;

export type OrganizationCustomRepositoryRole = {
  readonly id: number;
  readonly name: string;
  readonly description?: string | null;
  readonly base_role?: 'read' | 'triage' | 'write' | 'maintain';
  readonly permissions?: ReadonlyArray<string>;
  readonly organization?: SimpleUser;
  readonly created_at?: string;
  readonly updated_at?: string;
};

export type OrgsListCustomRolesResponseBody = {
  readonly total_count?: number;
  readonly custom_roles?: ReadonlyArray<OrganizationCustomRepositoryRole>;
};

export type OrgsListCustomRolesResolver = msw.HttpResponseResolver<
  OrgsListCustomRolesRequestParams,
  OrgsListCustomRolesRequestBody,
  OrgsListCustomRolesResponseBody
>;

export type OrgsGetRequestQuery = {};

export type OrgsGetRequestHeaders = {};

export type OrgsGetRequestParams = { readonly org: string };

export type OrgsGetRequestBody = never;

export type OrgsGetResponseStatus = 200 | 404;

export type OrganizationFull = {
  readonly login: string;
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly repos_url: string;
  readonly events_url: string;
  readonly hooks_url: string;
  readonly issues_url: string;
  readonly members_url: string;
  readonly public_members_url: string;
  readonly avatar_url: string;
  readonly description: string | null;
  readonly name?: string;
  readonly company?: string;
  readonly blog?: string;
  readonly location?: string;
  readonly email?: string;
  readonly twitter_username?: string | null;
  readonly is_verified?: boolean;
  readonly has_organization_projects: boolean;
  readonly has_repository_projects: boolean;
  readonly public_repos: number;
  readonly public_gists: number;
  readonly followers: number;
  readonly following: number;
  readonly html_url: string;
  readonly created_at: string;
  readonly type: string;
  readonly total_private_repos?: number;
  readonly owned_private_repos?: number;
  readonly private_gists?: number | null;
  readonly disk_usage?: number | null;
  readonly collaborators?: number | null;
  readonly billing_email?: string | null;
  readonly plan?: {
    readonly name: string;
    readonly space: number;
    readonly private_repos: number;
    readonly filled_seats?: number;
    readonly seats?: number;
  };
  readonly default_repository_permission?: string | null;
  readonly members_can_create_repositories?: boolean | null;
  readonly two_factor_requirement_enabled?: boolean | null;
  readonly members_allowed_repository_creation_type?: string;
  readonly members_can_create_public_repositories?: boolean;
  readonly members_can_create_private_repositories?: boolean;
  readonly members_can_create_internal_repositories?: boolean;
  readonly members_can_create_pages?: boolean;
  readonly members_can_create_public_pages?: boolean;
  readonly members_can_create_private_pages?: boolean;
  readonly members_can_fork_private_repositories?: boolean | null;
  readonly web_commit_signoff_required?: boolean;
  readonly updated_at: string;
  readonly advanced_security_enabled_for_new_repositories?: boolean;
  readonly dependabot_alerts_enabled_for_new_repositories?: boolean;
  readonly dependabot_security_updates_enabled_for_new_repositories?: boolean;
  readonly dependency_graph_enabled_for_new_repositories?: boolean;
  readonly secret_scanning_enabled_for_new_repositories?: boolean;
  readonly secret_scanning_push_protection_enabled_for_new_repositories?: boolean;
};

export type OrgsGetResponseBody = OrganizationFull | BasicError;

export type OrgsGetResolver = msw.HttpResponseResolver<
  OrgsGetRequestParams,
  OrgsGetRequestBody,
  OrgsGetResponseBody
>;

export type OrgsUpdateRequestQuery = {};

export type OrgsUpdateRequestHeaders = {};

export type OrgsUpdateRequestParams = { readonly org: string };

export type OrgsUpdateRequestBody =
  | {
      readonly billing_email?: string;
      readonly company?: string;
      readonly email?: string;
      readonly twitter_username?: string;
      readonly location?: string;
      readonly name?: string;
      readonly description?: string;
      readonly has_organization_projects?: boolean;
      readonly has_repository_projects?: boolean;
      readonly default_repository_permission?:
        | 'read'
        | 'write'
        | 'admin'
        | 'none';
      readonly members_can_create_repositories?: boolean;
      readonly members_can_create_internal_repositories?: boolean;
      readonly members_can_create_private_repositories?: boolean;
      readonly members_can_create_public_repositories?: boolean;
      readonly members_allowed_repository_creation_type?:
        | 'all'
        | 'private'
        | 'none';
      readonly members_can_create_pages?: boolean;
      readonly members_can_create_public_pages?: boolean;
      readonly members_can_create_private_pages?: boolean;
      readonly members_can_fork_private_repositories?: boolean;
      readonly web_commit_signoff_required?: boolean;
      readonly blog?: string;
      readonly advanced_security_enabled_for_new_repositories?: boolean;
      readonly dependabot_alerts_enabled_for_new_repositories?: boolean;
      readonly dependabot_security_updates_enabled_for_new_repositories?: boolean;
      readonly dependency_graph_enabled_for_new_repositories?: boolean;
      readonly secret_scanning_enabled_for_new_repositories?: boolean;
      readonly secret_scanning_push_protection_enabled_for_new_repositories?: boolean;
    }
  | undefined;

export type OrgsUpdateResponseStatus = 200 | 409 | 422;

export type OrgsUpdateResponseBody =
  | OrganizationFull
  | BasicError
  | ValidationError
  | ValidationErrorSimple;

export type OrgsUpdateResolver = msw.HttpResponseResolver<
  OrgsUpdateRequestParams,
  OrgsUpdateRequestBody,
  OrgsUpdateResponseBody
>;

export type ActionsGetActionsCacheUsageForOrgRequestQuery = {};

export type ActionsGetActionsCacheUsageForOrgRequestHeaders = {};

export type ActionsGetActionsCacheUsageForOrgRequestParams = {
  readonly org: string;
};

export type ActionsGetActionsCacheUsageForOrgRequestBody = never;

export type ActionsGetActionsCacheUsageForOrgResponseStatus = 200;

export type ActionsGetActionsCacheUsageForOrgResponseBody = ActionsCacheUsageOrgEnterprise;

export type ActionsGetActionsCacheUsageForOrgResolver = msw.HttpResponseResolver<
  ActionsGetActionsCacheUsageForOrgRequestParams,
  ActionsGetActionsCacheUsageForOrgRequestBody,
  ActionsGetActionsCacheUsageForOrgResponseBody
>;

export type ActionsGetActionsCacheUsageByRepoForOrgRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActionsGetActionsCacheUsageByRepoForOrgRequestHeaders = {};

export type ActionsGetActionsCacheUsageByRepoForOrgRequestParams = {
  readonly org: string;
};

export type ActionsGetActionsCacheUsageByRepoForOrgRequestBody = never;

export type ActionsGetActionsCacheUsageByRepoForOrgResponseStatus = 200;

export type ActionsCacheUsageByRepository = {
  readonly full_name: string;
  readonly active_caches_size_in_bytes: number;
  readonly active_caches_count: number;
};

export type ActionsGetActionsCacheUsageByRepoForOrgResponseBody = {
  readonly total_count: number;
  readonly repository_cache_usages: ReadonlyArray<ActionsCacheUsageByRepository>;
};

export type ActionsGetActionsCacheUsageByRepoForOrgResolver = msw.HttpResponseResolver<
  ActionsGetActionsCacheUsageByRepoForOrgRequestParams,
  ActionsGetActionsCacheUsageByRepoForOrgRequestBody,
  ActionsGetActionsCacheUsageByRepoForOrgResponseBody
>;

export type ActionsGetGithubActionsPermissionsOrganizationRequestQuery = {};

export type ActionsGetGithubActionsPermissionsOrganizationRequestHeaders = {};

export type ActionsGetGithubActionsPermissionsOrganizationRequestParams = {
  readonly org: string;
};

export type ActionsGetGithubActionsPermissionsOrganizationRequestBody = never;

export type ActionsGetGithubActionsPermissionsOrganizationResponseStatus = 200;

export type EnabledRepositories = 'all' | 'none' | 'selected';

export type ActionsOrganizationPermissions = {
  readonly enabled_repositories: EnabledRepositories;
  readonly selected_repositories_url?: string;
  readonly allowed_actions?: AllowedActions;
  readonly selected_actions_url?: SelectedActionsUrl;
};

export type ActionsGetGithubActionsPermissionsOrganizationResponseBody = ActionsOrganizationPermissions;

export type ActionsGetGithubActionsPermissionsOrganizationResolver = msw.HttpResponseResolver<
  ActionsGetGithubActionsPermissionsOrganizationRequestParams,
  ActionsGetGithubActionsPermissionsOrganizationRequestBody,
  ActionsGetGithubActionsPermissionsOrganizationResponseBody
>;

export type ActionsSetGithubActionsPermissionsOrganizationRequestQuery = {};

export type ActionsSetGithubActionsPermissionsOrganizationRequestHeaders = {};

export type ActionsSetGithubActionsPermissionsOrganizationRequestParams = {
  readonly org: string;
};

export type ActionsSetGithubActionsPermissionsOrganizationRequestBody = {
  readonly enabled_repositories: EnabledRepositories;
  readonly allowed_actions?: AllowedActions;
};

export type ActionsSetGithubActionsPermissionsOrganizationResponseStatus = 204;

export type ActionsSetGithubActionsPermissionsOrganizationResponseBody = never;

export type ActionsSetGithubActionsPermissionsOrganizationResolver = msw.HttpResponseResolver<
  ActionsSetGithubActionsPermissionsOrganizationRequestParams,
  ActionsSetGithubActionsPermissionsOrganizationRequestBody,
  ActionsSetGithubActionsPermissionsOrganizationResponseBody
>;

export type ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequestHeaders = {};

export type ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequestParams = {
  readonly org: string;
};

export type ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody = never;

export type ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponseStatus = 200;

export type ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponseBody = {
  readonly total_count: number;
  readonly repositories: ReadonlyArray<Repository>;
};

export type ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResolver = msw.HttpResponseResolver<
  ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequestParams,
  ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody,
  ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponseBody
>;

export type ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestQuery = {};

export type ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestHeaders = {};

export type ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestParams = {
  readonly org: string;
};

export type ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody = {
  readonly selected_repository_ids: ReadonlyArray<number>;
};

export type ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponseStatus = 204;

export type ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponseBody = never;

export type ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResolver = msw.HttpResponseResolver<
  ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestParams,
  ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody,
  ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponseBody
>;

export type ActionsEnableSelectedRepositoryGithubActionsOrganizationRequestQuery = {};

export type ActionsEnableSelectedRepositoryGithubActionsOrganizationRequestHeaders = {};

export type ActionsEnableSelectedRepositoryGithubActionsOrganizationRequestParams = {
  readonly org: string;
  readonly repository_id: string;
};

export type ActionsEnableSelectedRepositoryGithubActionsOrganizationRequestBody = never;

export type ActionsEnableSelectedRepositoryGithubActionsOrganizationResponseStatus = 204;

export type ActionsEnableSelectedRepositoryGithubActionsOrganizationResponseBody = never;

export type ActionsEnableSelectedRepositoryGithubActionsOrganizationResolver = msw.HttpResponseResolver<
  ActionsEnableSelectedRepositoryGithubActionsOrganizationRequestParams,
  ActionsEnableSelectedRepositoryGithubActionsOrganizationRequestBody,
  ActionsEnableSelectedRepositoryGithubActionsOrganizationResponseBody
>;

export type ActionsDisableSelectedRepositoryGithubActionsOrganizationRequestQuery = {};

export type ActionsDisableSelectedRepositoryGithubActionsOrganizationRequestHeaders = {};

export type ActionsDisableSelectedRepositoryGithubActionsOrganizationRequestParams = {
  readonly org: string;
  readonly repository_id: string;
};

export type ActionsDisableSelectedRepositoryGithubActionsOrganizationRequestBody = never;

export type ActionsDisableSelectedRepositoryGithubActionsOrganizationResponseStatus = 204;

export type ActionsDisableSelectedRepositoryGithubActionsOrganizationResponseBody = never;

export type ActionsDisableSelectedRepositoryGithubActionsOrganizationResolver = msw.HttpResponseResolver<
  ActionsDisableSelectedRepositoryGithubActionsOrganizationRequestParams,
  ActionsDisableSelectedRepositoryGithubActionsOrganizationRequestBody,
  ActionsDisableSelectedRepositoryGithubActionsOrganizationResponseBody
>;

export type ActionsGetAllowedActionsOrganizationRequestQuery = {};

export type ActionsGetAllowedActionsOrganizationRequestHeaders = {};

export type ActionsGetAllowedActionsOrganizationRequestParams = {
  readonly org: string;
};

export type ActionsGetAllowedActionsOrganizationRequestBody = never;

export type ActionsGetAllowedActionsOrganizationResponseStatus = 200;

export type ActionsGetAllowedActionsOrganizationResponseBody = SelectedActions;

export type ActionsGetAllowedActionsOrganizationResolver = msw.HttpResponseResolver<
  ActionsGetAllowedActionsOrganizationRequestParams,
  ActionsGetAllowedActionsOrganizationRequestBody,
  ActionsGetAllowedActionsOrganizationResponseBody
>;

export type ActionsSetAllowedActionsOrganizationRequestQuery = {};

export type ActionsSetAllowedActionsOrganizationRequestHeaders = {};

export type ActionsSetAllowedActionsOrganizationRequestParams = {
  readonly org: string;
};

export type ActionsSetAllowedActionsOrganizationRequestBody =
  | SelectedActions
  | undefined;

export type ActionsSetAllowedActionsOrganizationResponseStatus = 204;

export type ActionsSetAllowedActionsOrganizationResponseBody = never;

export type ActionsSetAllowedActionsOrganizationResolver = msw.HttpResponseResolver<
  ActionsSetAllowedActionsOrganizationRequestParams,
  ActionsSetAllowedActionsOrganizationRequestBody,
  ActionsSetAllowedActionsOrganizationResponseBody
>;

export type ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationRequestQuery = {};

export type ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationRequestHeaders = {};

export type ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationRequestParams = {
  readonly org: string;
};

export type ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationRequestBody = never;

export type ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationResponseStatus = 200;

export type ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationResponseBody = ActionsGetDefaultWorkflowPermissions;

export type ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationResolver = msw.HttpResponseResolver<
  ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationRequestParams,
  ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationRequestBody,
  ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationResponseBody
>;

export type ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationRequestQuery = {};

export type ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationRequestHeaders = {};

export type ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationRequestParams = {
  readonly org: string;
};

export type ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationRequestBody =
  | ActionsSetDefaultWorkflowPermissions
  | undefined;

export type ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationResponseStatus =
  | 204
  | 409;

export type ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationResponseBody = never;

export type ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationResolver = msw.HttpResponseResolver<
  ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationRequestParams,
  ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationRequestBody,
  ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationResponseBody
>;

export type ActionsListSelfHostedRunnerGroupsForOrgRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
  readonly visible_to_repository?: string;
};

export type ActionsListSelfHostedRunnerGroupsForOrgRequestHeaders = {};

export type ActionsListSelfHostedRunnerGroupsForOrgRequestParams = {
  readonly org: string;
};

export type ActionsListSelfHostedRunnerGroupsForOrgRequestBody = never;

export type ActionsListSelfHostedRunnerGroupsForOrgResponseStatus = 200;

export type RunnerGroupsOrg = {
  readonly id: number;
  readonly name: string;
  readonly visibility: string;
  readonly default: boolean;
  readonly selected_repositories_url?: string;
  readonly runners_url: string;
  readonly inherited: boolean;
  readonly inherited_allows_public_repositories?: boolean;
  readonly allows_public_repositories: boolean;
  readonly workflow_restrictions_read_only?: boolean;
  readonly restricted_to_workflows?: boolean;
  readonly selected_workflows?: ReadonlyArray<string>;
};

export type ActionsListSelfHostedRunnerGroupsForOrgResponseBody = {
  readonly total_count: number;
  readonly runner_groups: ReadonlyArray<RunnerGroupsOrg>;
};

export type ActionsListSelfHostedRunnerGroupsForOrgResolver = msw.HttpResponseResolver<
  ActionsListSelfHostedRunnerGroupsForOrgRequestParams,
  ActionsListSelfHostedRunnerGroupsForOrgRequestBody,
  ActionsListSelfHostedRunnerGroupsForOrgResponseBody
>;

export type ActionsCreateSelfHostedRunnerGroupForOrgRequestQuery = {};

export type ActionsCreateSelfHostedRunnerGroupForOrgRequestHeaders = {};

export type ActionsCreateSelfHostedRunnerGroupForOrgRequestParams = {
  readonly org: string;
};

export type ActionsCreateSelfHostedRunnerGroupForOrgRequestBody = {
  readonly name: string;
  readonly visibility?: 'selected' | 'all' | 'private';
  readonly selected_repository_ids?: ReadonlyArray<number>;
  readonly runners?: ReadonlyArray<number>;
  readonly allows_public_repositories?: boolean;
  readonly restricted_to_workflows?: boolean;
  readonly selected_workflows?: ReadonlyArray<string>;
};

export type ActionsCreateSelfHostedRunnerGroupForOrgResponseStatus = 201;

export type ActionsCreateSelfHostedRunnerGroupForOrgResponseBody = RunnerGroupsOrg;

export type ActionsCreateSelfHostedRunnerGroupForOrgResolver = msw.HttpResponseResolver<
  ActionsCreateSelfHostedRunnerGroupForOrgRequestParams,
  ActionsCreateSelfHostedRunnerGroupForOrgRequestBody,
  ActionsCreateSelfHostedRunnerGroupForOrgResponseBody
>;

export type ActionsGetSelfHostedRunnerGroupForOrgRequestQuery = {};

export type ActionsGetSelfHostedRunnerGroupForOrgRequestHeaders = {};

export type ActionsGetSelfHostedRunnerGroupForOrgRequestParams = {
  readonly org: string;
  readonly runner_group_id: string;
};

export type ActionsGetSelfHostedRunnerGroupForOrgRequestBody = never;

export type ActionsGetSelfHostedRunnerGroupForOrgResponseStatus = 200;

export type ActionsGetSelfHostedRunnerGroupForOrgResponseBody = RunnerGroupsOrg;

export type ActionsGetSelfHostedRunnerGroupForOrgResolver = msw.HttpResponseResolver<
  ActionsGetSelfHostedRunnerGroupForOrgRequestParams,
  ActionsGetSelfHostedRunnerGroupForOrgRequestBody,
  ActionsGetSelfHostedRunnerGroupForOrgResponseBody
>;

export type ActionsUpdateSelfHostedRunnerGroupForOrgRequestQuery = {};

export type ActionsUpdateSelfHostedRunnerGroupForOrgRequestHeaders = {};

export type ActionsUpdateSelfHostedRunnerGroupForOrgRequestParams = {
  readonly org: string;
  readonly runner_group_id: string;
};

export type ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody = {
  readonly name: string;
  readonly visibility?: 'selected' | 'all' | 'private';
  readonly allows_public_repositories?: boolean;
  readonly restricted_to_workflows?: boolean;
  readonly selected_workflows?: ReadonlyArray<string>;
};

export type ActionsUpdateSelfHostedRunnerGroupForOrgResponseStatus = 200;

export type ActionsUpdateSelfHostedRunnerGroupForOrgResponseBody = RunnerGroupsOrg;

export type ActionsUpdateSelfHostedRunnerGroupForOrgResolver = msw.HttpResponseResolver<
  ActionsUpdateSelfHostedRunnerGroupForOrgRequestParams,
  ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody,
  ActionsUpdateSelfHostedRunnerGroupForOrgResponseBody
>;

export type ActionsDeleteSelfHostedRunnerGroupFromOrgRequestQuery = {};

export type ActionsDeleteSelfHostedRunnerGroupFromOrgRequestHeaders = {};

export type ActionsDeleteSelfHostedRunnerGroupFromOrgRequestParams = {
  readonly org: string;
  readonly runner_group_id: string;
};

export type ActionsDeleteSelfHostedRunnerGroupFromOrgRequestBody = never;

export type ActionsDeleteSelfHostedRunnerGroupFromOrgResponseStatus = 204;

export type ActionsDeleteSelfHostedRunnerGroupFromOrgResponseBody = never;

export type ActionsDeleteSelfHostedRunnerGroupFromOrgResolver = msw.HttpResponseResolver<
  ActionsDeleteSelfHostedRunnerGroupFromOrgRequestParams,
  ActionsDeleteSelfHostedRunnerGroupFromOrgRequestBody,
  ActionsDeleteSelfHostedRunnerGroupFromOrgResponseBody
>;

export type ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequestQuery = {
  readonly page?: string;
  readonly per_page?: string;
};

export type ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequestHeaders = {};

export type ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequestParams = {
  readonly org: string;
  readonly runner_group_id: string;
};

export type ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequestBody = never;

export type ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponseStatus = 200;

export type ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponseBody = {
  readonly total_count: number;
  readonly repositories: ReadonlyArray<MinimalRepository>;
};

export type ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResolver = msw.HttpResponseResolver<
  ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequestParams,
  ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequestBody,
  ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponseBody
>;

export type ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestQuery = {};

export type ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestHeaders = {};

export type ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestParams = {
  readonly org: string;
  readonly runner_group_id: string;
};

export type ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody = {
  readonly selected_repository_ids: ReadonlyArray<number>;
};

export type ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponseStatus = 204;

export type ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponseBody = never;

export type ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResolver = msw.HttpResponseResolver<
  ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestParams,
  ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody,
  ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponseBody
>;

export type ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequestQuery = {};

export type ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequestHeaders = {};

export type ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequestParams = {
  readonly org: string;
  readonly runner_group_id: string;
  readonly repository_id: string;
};

export type ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequestBody = never;

export type ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponseStatus = 204;

export type ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponseBody = never;

export type ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResolver = msw.HttpResponseResolver<
  ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequestParams,
  ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequestBody,
  ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponseBody
>;

export type ActionsListSelfHostedRunnersInGroupForOrgRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActionsListSelfHostedRunnersInGroupForOrgRequestHeaders = {};

export type ActionsListSelfHostedRunnersInGroupForOrgRequestParams = {
  readonly org: string;
  readonly runner_group_id: string;
};

export type ActionsListSelfHostedRunnersInGroupForOrgRequestBody = never;

export type ActionsListSelfHostedRunnersInGroupForOrgResponseStatus = 200;

export type ActionsListSelfHostedRunnersInGroupForOrgResponseBody = {
  readonly total_count: number;
  readonly runners: ReadonlyArray<SelfHostedRunners>;
};

export type ActionsListSelfHostedRunnersInGroupForOrgResolver = msw.HttpResponseResolver<
  ActionsListSelfHostedRunnersInGroupForOrgRequestParams,
  ActionsListSelfHostedRunnersInGroupForOrgRequestBody,
  ActionsListSelfHostedRunnersInGroupForOrgResponseBody
>;

export type ActionsSetSelfHostedRunnersInGroupForOrgRequestQuery = {};

export type ActionsSetSelfHostedRunnersInGroupForOrgRequestHeaders = {};

export type ActionsSetSelfHostedRunnersInGroupForOrgRequestParams = {
  readonly org: string;
  readonly runner_group_id: string;
};

export type ActionsSetSelfHostedRunnersInGroupForOrgRequestBody = {
  readonly runners: ReadonlyArray<number>;
};

export type ActionsSetSelfHostedRunnersInGroupForOrgResponseStatus = 204;

export type ActionsSetSelfHostedRunnersInGroupForOrgResponseBody = never;

export type ActionsSetSelfHostedRunnersInGroupForOrgResolver = msw.HttpResponseResolver<
  ActionsSetSelfHostedRunnersInGroupForOrgRequestParams,
  ActionsSetSelfHostedRunnersInGroupForOrgRequestBody,
  ActionsSetSelfHostedRunnersInGroupForOrgResponseBody
>;

export type ActionsAddSelfHostedRunnerToGroupForOrgRequestQuery = {};

export type ActionsAddSelfHostedRunnerToGroupForOrgRequestHeaders = {};

export type ActionsAddSelfHostedRunnerToGroupForOrgRequestParams = {
  readonly org: string;
  readonly runner_group_id: string;
  readonly runner_id: string;
};

export type ActionsAddSelfHostedRunnerToGroupForOrgRequestBody = never;

export type ActionsAddSelfHostedRunnerToGroupForOrgResponseStatus = 204;

export type ActionsAddSelfHostedRunnerToGroupForOrgResponseBody = never;

export type ActionsAddSelfHostedRunnerToGroupForOrgResolver = msw.HttpResponseResolver<
  ActionsAddSelfHostedRunnerToGroupForOrgRequestParams,
  ActionsAddSelfHostedRunnerToGroupForOrgRequestBody,
  ActionsAddSelfHostedRunnerToGroupForOrgResponseBody
>;

export type ActionsRemoveSelfHostedRunnerFromGroupForOrgRequestQuery = {};

export type ActionsRemoveSelfHostedRunnerFromGroupForOrgRequestHeaders = {};

export type ActionsRemoveSelfHostedRunnerFromGroupForOrgRequestParams = {
  readonly org: string;
  readonly runner_group_id: string;
  readonly runner_id: string;
};

export type ActionsRemoveSelfHostedRunnerFromGroupForOrgRequestBody = never;

export type ActionsRemoveSelfHostedRunnerFromGroupForOrgResponseStatus = 204;

export type ActionsRemoveSelfHostedRunnerFromGroupForOrgResponseBody = never;

export type ActionsRemoveSelfHostedRunnerFromGroupForOrgResolver = msw.HttpResponseResolver<
  ActionsRemoveSelfHostedRunnerFromGroupForOrgRequestParams,
  ActionsRemoveSelfHostedRunnerFromGroupForOrgRequestBody,
  ActionsRemoveSelfHostedRunnerFromGroupForOrgResponseBody
>;

export type ActionsListSelfHostedRunnersForOrgRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActionsListSelfHostedRunnersForOrgRequestHeaders = {};

export type ActionsListSelfHostedRunnersForOrgRequestParams = {
  readonly org: string;
};

export type ActionsListSelfHostedRunnersForOrgRequestBody = never;

export type ActionsListSelfHostedRunnersForOrgResponseStatus = 200;

export type ActionsListSelfHostedRunnersForOrgResponseBody = {
  readonly total_count: number;
  readonly runners: ReadonlyArray<SelfHostedRunners>;
};

export type ActionsListSelfHostedRunnersForOrgResolver = msw.HttpResponseResolver<
  ActionsListSelfHostedRunnersForOrgRequestParams,
  ActionsListSelfHostedRunnersForOrgRequestBody,
  ActionsListSelfHostedRunnersForOrgResponseBody
>;

export type ActionsListRunnerApplicationsForOrgRequestQuery = {};

export type ActionsListRunnerApplicationsForOrgRequestHeaders = {};

export type ActionsListRunnerApplicationsForOrgRequestParams = {
  readonly org: string;
};

export type ActionsListRunnerApplicationsForOrgRequestBody = never;

export type ActionsListRunnerApplicationsForOrgResponseStatus = 200;

export type ActionsListRunnerApplicationsForOrgResponseBody = ReadonlyArray<RunnerApplication>;

export type ActionsListRunnerApplicationsForOrgResolver = msw.HttpResponseResolver<
  ActionsListRunnerApplicationsForOrgRequestParams,
  ActionsListRunnerApplicationsForOrgRequestBody,
  ActionsListRunnerApplicationsForOrgResponseBody
>;

export type ActionsCreateRegistrationTokenForOrgRequestQuery = {};

export type ActionsCreateRegistrationTokenForOrgRequestHeaders = {};

export type ActionsCreateRegistrationTokenForOrgRequestParams = {
  readonly org: string;
};

export type ActionsCreateRegistrationTokenForOrgRequestBody = never;

export type ActionsCreateRegistrationTokenForOrgResponseStatus = 201;

export type ActionsCreateRegistrationTokenForOrgResponseBody = AuthenticationToken;

export type ActionsCreateRegistrationTokenForOrgResolver = msw.HttpResponseResolver<
  ActionsCreateRegistrationTokenForOrgRequestParams,
  ActionsCreateRegistrationTokenForOrgRequestBody,
  ActionsCreateRegistrationTokenForOrgResponseBody
>;

export type ActionsCreateRemoveTokenForOrgRequestQuery = {};

export type ActionsCreateRemoveTokenForOrgRequestHeaders = {};

export type ActionsCreateRemoveTokenForOrgRequestParams = {
  readonly org: string;
};

export type ActionsCreateRemoveTokenForOrgRequestBody = never;

export type ActionsCreateRemoveTokenForOrgResponseStatus = 201;

export type ActionsCreateRemoveTokenForOrgResponseBody = AuthenticationToken;

export type ActionsCreateRemoveTokenForOrgResolver = msw.HttpResponseResolver<
  ActionsCreateRemoveTokenForOrgRequestParams,
  ActionsCreateRemoveTokenForOrgRequestBody,
  ActionsCreateRemoveTokenForOrgResponseBody
>;

export type ActionsGetSelfHostedRunnerForOrgRequestQuery = {};

export type ActionsGetSelfHostedRunnerForOrgRequestHeaders = {};

export type ActionsGetSelfHostedRunnerForOrgRequestParams = {
  readonly org: string;
  readonly runner_id: string;
};

export type ActionsGetSelfHostedRunnerForOrgRequestBody = never;

export type ActionsGetSelfHostedRunnerForOrgResponseStatus = 200;

export type ActionsGetSelfHostedRunnerForOrgResponseBody = SelfHostedRunners;

export type ActionsGetSelfHostedRunnerForOrgResolver = msw.HttpResponseResolver<
  ActionsGetSelfHostedRunnerForOrgRequestParams,
  ActionsGetSelfHostedRunnerForOrgRequestBody,
  ActionsGetSelfHostedRunnerForOrgResponseBody
>;

export type ActionsDeleteSelfHostedRunnerFromOrgRequestQuery = {};

export type ActionsDeleteSelfHostedRunnerFromOrgRequestHeaders = {};

export type ActionsDeleteSelfHostedRunnerFromOrgRequestParams = {
  readonly org: string;
  readonly runner_id: string;
};

export type ActionsDeleteSelfHostedRunnerFromOrgRequestBody = never;

export type ActionsDeleteSelfHostedRunnerFromOrgResponseStatus = 204;

export type ActionsDeleteSelfHostedRunnerFromOrgResponseBody = never;

export type ActionsDeleteSelfHostedRunnerFromOrgResolver = msw.HttpResponseResolver<
  ActionsDeleteSelfHostedRunnerFromOrgRequestParams,
  ActionsDeleteSelfHostedRunnerFromOrgRequestBody,
  ActionsDeleteSelfHostedRunnerFromOrgResponseBody
>;

export type ActionsListLabelsForSelfHostedRunnerForOrgRequestQuery = {};

export type ActionsListLabelsForSelfHostedRunnerForOrgRequestHeaders = {};

export type ActionsListLabelsForSelfHostedRunnerForOrgRequestParams = {
  readonly org: string;
  readonly runner_id: string;
};

export type ActionsListLabelsForSelfHostedRunnerForOrgRequestBody = never;

export type ActionsListLabelsForSelfHostedRunnerForOrgResponseStatus =
  | 200
  | 404;

export type ActionsListLabelsForSelfHostedRunnerForOrgResponseBody =
  | {
      readonly total_count: number;
      readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
    }
  | BasicError;

export type ActionsListLabelsForSelfHostedRunnerForOrgResolver = msw.HttpResponseResolver<
  ActionsListLabelsForSelfHostedRunnerForOrgRequestParams,
  ActionsListLabelsForSelfHostedRunnerForOrgRequestBody,
  ActionsListLabelsForSelfHostedRunnerForOrgResponseBody
>;

export type ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestQuery = {};

export type ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestHeaders = {};

export type ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestParams = {
  readonly org: string;
  readonly runner_id: string;
};

export type ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestBody = {
  readonly labels: ReadonlyArray<string>;
};

export type ActionsAddCustomLabelsToSelfHostedRunnerForOrgResponseStatus =
  | 200
  | 404
  | 422;

export type ActionsAddCustomLabelsToSelfHostedRunnerForOrgResponseBody =
  | {
      readonly total_count: number;
      readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
    }
  | BasicError
  | ValidationErrorSimple;

export type ActionsAddCustomLabelsToSelfHostedRunnerForOrgResolver = msw.HttpResponseResolver<
  ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestParams,
  ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestBody,
  ActionsAddCustomLabelsToSelfHostedRunnerForOrgResponseBody
>;

export type ActionsSetCustomLabelsForSelfHostedRunnerForOrgRequestQuery = {};

export type ActionsSetCustomLabelsForSelfHostedRunnerForOrgRequestHeaders = {};

export type ActionsSetCustomLabelsForSelfHostedRunnerForOrgRequestParams = {
  readonly org: string;
  readonly runner_id: string;
};

export type ActionsSetCustomLabelsForSelfHostedRunnerForOrgRequestBody = {
  readonly labels: ReadonlyArray<string>;
};

export type ActionsSetCustomLabelsForSelfHostedRunnerForOrgResponseStatus =
  | 200
  | 404
  | 422;

export type ActionsSetCustomLabelsForSelfHostedRunnerForOrgResponseBody =
  | {
      readonly total_count: number;
      readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
    }
  | BasicError
  | ValidationErrorSimple;

export type ActionsSetCustomLabelsForSelfHostedRunnerForOrgResolver = msw.HttpResponseResolver<
  ActionsSetCustomLabelsForSelfHostedRunnerForOrgRequestParams,
  ActionsSetCustomLabelsForSelfHostedRunnerForOrgRequestBody,
  ActionsSetCustomLabelsForSelfHostedRunnerForOrgResponseBody
>;

export type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgRequestQuery = {};

export type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgRequestHeaders = {};

export type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgRequestParams = {
  readonly org: string;
  readonly runner_id: string;
};

export type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgRequestBody = never;

export type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgResponseStatus =
  | 200
  | 404;

export type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgResponseBody =
  | {
      readonly total_count: number;
      readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
    }
  | BasicError;

export type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgResolver = msw.HttpResponseResolver<
  ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgRequestParams,
  ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgRequestBody,
  ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgResponseBody
>;

export type ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgRequestQuery = {};

export type ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgRequestHeaders = {};

export type ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgRequestParams = {
  readonly org: string;
  readonly runner_id: string;
  readonly name: string;
};

export type ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgRequestBody = never;

export type ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgResponseStatus =
  | 200
  | 404
  | 422;

export type ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgResponseBody =
  | {
      readonly total_count: number;
      readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
    }
  | BasicError
  | ValidationErrorSimple;

export type ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgResolver = msw.HttpResponseResolver<
  ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgRequestParams,
  ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgRequestBody,
  ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgResponseBody
>;

export type ActionsListOrgSecretsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActionsListOrgSecretsRequestHeaders = {};

export type ActionsListOrgSecretsRequestParams = { readonly org: string };

export type ActionsListOrgSecretsRequestBody = never;

export type ActionsListOrgSecretsResponseStatus = 200;

export type ActionsSecretForAnOrganization = {
  readonly name: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly visibility: 'all' | 'private' | 'selected';
  readonly selected_repositories_url?: string;
};

export type ActionsListOrgSecretsResponseBody = {
  readonly total_count: number;
  readonly secrets: ReadonlyArray<ActionsSecretForAnOrganization>;
};

export type ActionsListOrgSecretsResolver = msw.HttpResponseResolver<
  ActionsListOrgSecretsRequestParams,
  ActionsListOrgSecretsRequestBody,
  ActionsListOrgSecretsResponseBody
>;

export type ActionsGetOrgPublicKeyRequestQuery = {};

export type ActionsGetOrgPublicKeyRequestHeaders = {};

export type ActionsGetOrgPublicKeyRequestParams = { readonly org: string };

export type ActionsGetOrgPublicKeyRequestBody = never;

export type ActionsGetOrgPublicKeyResponseStatus = 200;

export type ActionsPublicKey = {
  readonly key_id: string;
  readonly key: string;
  readonly id?: number;
  readonly url?: string;
  readonly title?: string;
  readonly created_at?: string;
};

export type ActionsGetOrgPublicKeyResponseBody = ActionsPublicKey;

export type ActionsGetOrgPublicKeyResolver = msw.HttpResponseResolver<
  ActionsGetOrgPublicKeyRequestParams,
  ActionsGetOrgPublicKeyRequestBody,
  ActionsGetOrgPublicKeyResponseBody
>;

export type ActionsGetOrgSecretRequestQuery = {};

export type ActionsGetOrgSecretRequestHeaders = {};

export type ActionsGetOrgSecretRequestParams = {
  readonly org: string;
  readonly secret_name: string;
};

export type ActionsGetOrgSecretRequestBody = never;

export type ActionsGetOrgSecretResponseStatus = 200;

export type ActionsGetOrgSecretResponseBody = ActionsSecretForAnOrganization;

export type ActionsGetOrgSecretResolver = msw.HttpResponseResolver<
  ActionsGetOrgSecretRequestParams,
  ActionsGetOrgSecretRequestBody,
  ActionsGetOrgSecretResponseBody
>;

export type ActionsCreateOrUpdateOrgSecretRequestQuery = {};

export type ActionsCreateOrUpdateOrgSecretRequestHeaders = {};

export type ActionsCreateOrUpdateOrgSecretRequestParams = {
  readonly org: string;
  readonly secret_name: string;
};

export type ActionsCreateOrUpdateOrgSecretRequestBody = {
  readonly encrypted_value?: string;
  readonly key_id?: string;
  readonly visibility: 'all' | 'private' | 'selected';
  readonly selected_repository_ids?: ReadonlyArray<number>;
};

export type ActionsCreateOrUpdateOrgSecretResponseStatus = 201 | 204;

export type EmptyObject = {};

export type ActionsCreateOrUpdateOrgSecretResponseBody = EmptyObject | never;

export type ActionsCreateOrUpdateOrgSecretResolver = msw.HttpResponseResolver<
  ActionsCreateOrUpdateOrgSecretRequestParams,
  ActionsCreateOrUpdateOrgSecretRequestBody,
  ActionsCreateOrUpdateOrgSecretResponseBody
>;

export type ActionsDeleteOrgSecretRequestQuery = {};

export type ActionsDeleteOrgSecretRequestHeaders = {};

export type ActionsDeleteOrgSecretRequestParams = {
  readonly org: string;
  readonly secret_name: string;
};

export type ActionsDeleteOrgSecretRequestBody = never;

export type ActionsDeleteOrgSecretResponseStatus = 204;

export type ActionsDeleteOrgSecretResponseBody = never;

export type ActionsDeleteOrgSecretResolver = msw.HttpResponseResolver<
  ActionsDeleteOrgSecretRequestParams,
  ActionsDeleteOrgSecretRequestBody,
  ActionsDeleteOrgSecretResponseBody
>;

export type ActionsListSelectedReposForOrgSecretRequestQuery = {
  readonly page?: string;
  readonly per_page?: string;
};

export type ActionsListSelectedReposForOrgSecretRequestHeaders = {};

export type ActionsListSelectedReposForOrgSecretRequestParams = {
  readonly org: string;
  readonly secret_name: string;
};

export type ActionsListSelectedReposForOrgSecretRequestBody = never;

export type ActionsListSelectedReposForOrgSecretResponseStatus = 200;

export type ActionsListSelectedReposForOrgSecretResponseBody = {
  readonly total_count: number;
  readonly repositories: ReadonlyArray<MinimalRepository>;
};

export type ActionsListSelectedReposForOrgSecretResolver = msw.HttpResponseResolver<
  ActionsListSelectedReposForOrgSecretRequestParams,
  ActionsListSelectedReposForOrgSecretRequestBody,
  ActionsListSelectedReposForOrgSecretResponseBody
>;

export type ActionsSetSelectedReposForOrgSecretRequestQuery = {};

export type ActionsSetSelectedReposForOrgSecretRequestHeaders = {};

export type ActionsSetSelectedReposForOrgSecretRequestParams = {
  readonly org: string;
  readonly secret_name: string;
};

export type ActionsSetSelectedReposForOrgSecretRequestBody = {
  readonly selected_repository_ids: ReadonlyArray<number>;
};

export type ActionsSetSelectedReposForOrgSecretResponseStatus = 204;

export type ActionsSetSelectedReposForOrgSecretResponseBody = never;

export type ActionsSetSelectedReposForOrgSecretResolver = msw.HttpResponseResolver<
  ActionsSetSelectedReposForOrgSecretRequestParams,
  ActionsSetSelectedReposForOrgSecretRequestBody,
  ActionsSetSelectedReposForOrgSecretResponseBody
>;

export type ActionsAddSelectedRepoToOrgSecretRequestQuery = {};

export type ActionsAddSelectedRepoToOrgSecretRequestHeaders = {};

export type ActionsAddSelectedRepoToOrgSecretRequestParams = {
  readonly org: string;
  readonly secret_name: string;
  readonly repository_id: string;
};

export type ActionsAddSelectedRepoToOrgSecretRequestBody = never;

export type ActionsAddSelectedRepoToOrgSecretResponseStatus = 204 | 409;

export type ActionsAddSelectedRepoToOrgSecretResponseBody = never;

export type ActionsAddSelectedRepoToOrgSecretResolver = msw.HttpResponseResolver<
  ActionsAddSelectedRepoToOrgSecretRequestParams,
  ActionsAddSelectedRepoToOrgSecretRequestBody,
  ActionsAddSelectedRepoToOrgSecretResponseBody
>;

export type ActionsRemoveSelectedRepoFromOrgSecretRequestQuery = {};

export type ActionsRemoveSelectedRepoFromOrgSecretRequestHeaders = {};

export type ActionsRemoveSelectedRepoFromOrgSecretRequestParams = {
  readonly org: string;
  readonly secret_name: string;
  readonly repository_id: string;
};

export type ActionsRemoveSelectedRepoFromOrgSecretRequestBody = never;

export type ActionsRemoveSelectedRepoFromOrgSecretResponseStatus = 204 | 409;

export type ActionsRemoveSelectedRepoFromOrgSecretResponseBody = never;

export type ActionsRemoveSelectedRepoFromOrgSecretResolver = msw.HttpResponseResolver<
  ActionsRemoveSelectedRepoFromOrgSecretRequestParams,
  ActionsRemoveSelectedRepoFromOrgSecretRequestBody,
  ActionsRemoveSelectedRepoFromOrgSecretResponseBody
>;

export type OrgsListBlockedUsersRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type OrgsListBlockedUsersRequestHeaders = {};

export type OrgsListBlockedUsersRequestParams = { readonly org: string };

export type OrgsListBlockedUsersRequestBody = never;

export type OrgsListBlockedUsersResponseStatus = 200;

export type OrgsListBlockedUsersResponseBody = ReadonlyArray<SimpleUser>;

export type OrgsListBlockedUsersResolver = msw.HttpResponseResolver<
  OrgsListBlockedUsersRequestParams,
  OrgsListBlockedUsersRequestBody,
  OrgsListBlockedUsersResponseBody
>;

export type OrgsCheckBlockedUserRequestQuery = {};

export type OrgsCheckBlockedUserRequestHeaders = {};

export type OrgsCheckBlockedUserRequestParams = {
  readonly org: string;
  readonly username: string;
};

export type OrgsCheckBlockedUserRequestBody = never;

export type OrgsCheckBlockedUserResponseStatus = 204 | 404;

export type OrgsCheckBlockedUserResponseBody = never | BasicError;

export type OrgsCheckBlockedUserResolver = msw.HttpResponseResolver<
  OrgsCheckBlockedUserRequestParams,
  OrgsCheckBlockedUserRequestBody,
  OrgsCheckBlockedUserResponseBody
>;

export type OrgsBlockUserRequestQuery = {};

export type OrgsBlockUserRequestHeaders = {};

export type OrgsBlockUserRequestParams = {
  readonly org: string;
  readonly username: string;
};

export type OrgsBlockUserRequestBody = never;

export type OrgsBlockUserResponseStatus = 204 | 422;

export type OrgsBlockUserResponseBody = never | ValidationError;

export type OrgsBlockUserResolver = msw.HttpResponseResolver<
  OrgsBlockUserRequestParams,
  OrgsBlockUserRequestBody,
  OrgsBlockUserResponseBody
>;

export type OrgsUnblockUserRequestQuery = {};

export type OrgsUnblockUserRequestHeaders = {};

export type OrgsUnblockUserRequestParams = {
  readonly org: string;
  readonly username: string;
};

export type OrgsUnblockUserRequestBody = never;

export type OrgsUnblockUserResponseStatus = 204;

export type OrgsUnblockUserResponseBody = never;

export type OrgsUnblockUserResolver = msw.HttpResponseResolver<
  OrgsUnblockUserRequestParams,
  OrgsUnblockUserRequestBody,
  OrgsUnblockUserResponseBody
>;

export type CodeScanningListAlertsForOrgRequestQuery = {
  readonly tool_name?: string;
  readonly tool_guid?: string;
  readonly before?: string;
  readonly after?: string;
  readonly page?: string;
  readonly per_page?: string;
  readonly direction?: string;
  readonly state?: string;
  readonly sort?: string;
};

export type CodeScanningListAlertsForOrgRequestHeaders = {};

export type CodeScanningListAlertsForOrgRequestParams = {
  readonly org: string;
};

export type CodeScanningListAlertsForOrgRequestBody = never;

export type CodeScanningListAlertsForOrgResponseStatus = 200 | 404 | 503;

export type CodeScanningListAlertsForOrgResponseBody =
  | ReadonlyArray<CodeScanningOrganizationAlertItems>
  | BasicError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type CodeScanningListAlertsForOrgResolver = msw.HttpResponseResolver<
  CodeScanningListAlertsForOrgRequestParams,
  CodeScanningListAlertsForOrgRequestBody,
  CodeScanningListAlertsForOrgResponseBody
>;

export type CodespacesListInOrganizationRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type CodespacesListInOrganizationRequestHeaders = {};

export type CodespacesListInOrganizationRequestParams = {
  readonly org: string;
};

export type CodespacesListInOrganizationRequestBody = never;

export type CodespacesListInOrganizationResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404
  | 500;

export type CodespaceMachine = {
  readonly name: string;
  readonly display_name: string;
  readonly operating_system: string;
  readonly storage_in_bytes: number;
  readonly memory_in_bytes: number;
  readonly cpus: number;
  readonly prebuild_availability: 'none' | 'ready' | 'in_progress' | null;
} | null;

export type Codespace = {
  readonly id: number;
  readonly name: string;
  readonly display_name?: string | null;
  readonly environment_id: string | null;
  readonly owner: SimpleUser;
  readonly billable_owner: SimpleUser;
  readonly repository: MinimalRepository;
  readonly machine: CodespaceMachine;
  readonly devcontainer_path?: string | null;
  readonly prebuild: boolean | null;
  readonly created_at: string;
  readonly updated_at: string;
  readonly last_used_at: string;
  readonly state:
    | 'Unknown'
    | 'Created'
    | 'Queued'
    | 'Provisioning'
    | 'Available'
    | 'Awaiting'
    | 'Unavailable'
    | 'Deleted'
    | 'Moved'
    | 'Shutdown'
    | 'Archived'
    | 'Starting'
    | 'ShuttingDown'
    | 'Failed'
    | 'Exporting'
    | 'Updating'
    | 'Rebuilding';
  readonly url: string;
  readonly git_status: {
    readonly ahead?: number;
    readonly behind?: number;
    readonly has_unpushed_changes?: boolean;
    readonly has_uncommitted_changes?: boolean;
    readonly ref?: string;
  };
  readonly location: 'EastUs' | 'SouthEastAsia' | 'WestEurope' | 'WestUs2';
  readonly idle_timeout_minutes: number | null;
  readonly web_url: string;
  readonly machines_url: string;
  readonly start_url: string;
  readonly stop_url: string;
  readonly pulls_url: string | null;
  readonly recent_folders: ReadonlyArray<string>;
  readonly runtime_constraints?: {
    readonly allowed_port_privacy_settings?: ReadonlyArray<string> | null;
  };
  readonly pending_operation?: boolean | null;
  readonly pending_operation_disabled_reason?: string | null;
  readonly idle_timeout_notice?: string | null;
  readonly retention_period_minutes?: number | null;
  readonly retention_expires_at?: string | null;
  readonly last_known_stop_notice?: string | null;
};

export type CodespacesListInOrganizationResponseBody =
  | {
      readonly total_count: number;
      readonly codespaces: ReadonlyArray<Codespace>;
    }
  | never
  | BasicError;

export type CodespacesListInOrganizationResolver = msw.HttpResponseResolver<
  CodespacesListInOrganizationRequestParams,
  CodespacesListInOrganizationRequestBody,
  CodespacesListInOrganizationResponseBody
>;

export type CodespacesSetCodespacesBillingRequestQuery = {};

export type CodespacesSetCodespacesBillingRequestHeaders = {};

export type CodespacesSetCodespacesBillingRequestParams = {
  readonly org: string;
};

export type CodespacesSetCodespacesBillingRequestBody = {
  readonly visibility:
    | 'disabled'
    | 'selected_members'
    | 'all_members'
    | 'all_members_and_outside_collaborators';
  readonly selected_usernames?: ReadonlyArray<string>;
};

export type CodespacesSetCodespacesBillingResponseStatus =
  | 204
  | 304
  | 400
  | 404
  | 422
  | 500;

export type CodespacesSetCodespacesBillingResponseBody =
  | never
  | BasicError
  | ValidationError;

export type CodespacesSetCodespacesBillingResolver = msw.HttpResponseResolver<
  CodespacesSetCodespacesBillingRequestParams,
  CodespacesSetCodespacesBillingRequestBody,
  CodespacesSetCodespacesBillingResponseBody
>;

export type CodespacesListOrgSecretsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type CodespacesListOrgSecretsRequestHeaders = {};

export type CodespacesListOrgSecretsRequestParams = { readonly org: string };

export type CodespacesListOrgSecretsRequestBody = never;

export type CodespacesListOrgSecretsResponseStatus = 200;

export type CodespacesSecret = {
  readonly name: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly visibility: 'all' | 'private' | 'selected';
  readonly selected_repositories_url?: string;
};

export type CodespacesListOrgSecretsResponseBody = {
  readonly total_count: number;
  readonly secrets: ReadonlyArray<CodespacesSecret>;
};

export type CodespacesListOrgSecretsResolver = msw.HttpResponseResolver<
  CodespacesListOrgSecretsRequestParams,
  CodespacesListOrgSecretsRequestBody,
  CodespacesListOrgSecretsResponseBody
>;

export type CodespacesGetOrgPublicKeyRequestQuery = {};

export type CodespacesGetOrgPublicKeyRequestHeaders = {};

export type CodespacesGetOrgPublicKeyRequestParams = { readonly org: string };

export type CodespacesGetOrgPublicKeyRequestBody = never;

export type CodespacesGetOrgPublicKeyResponseStatus = 200;

export type CodespacesPublicKey = {
  readonly key_id: string;
  readonly key: string;
  readonly id?: number;
  readonly url?: string;
  readonly title?: string;
  readonly created_at?: string;
};

export type CodespacesGetOrgPublicKeyResponseBody = CodespacesPublicKey;

export type CodespacesGetOrgPublicKeyResolver = msw.HttpResponseResolver<
  CodespacesGetOrgPublicKeyRequestParams,
  CodespacesGetOrgPublicKeyRequestBody,
  CodespacesGetOrgPublicKeyResponseBody
>;

export type CodespacesGetOrgSecretRequestQuery = {};

export type CodespacesGetOrgSecretRequestHeaders = {};

export type CodespacesGetOrgSecretRequestParams = {
  readonly org: string;
  readonly secret_name: string;
};

export type CodespacesGetOrgSecretRequestBody = never;

export type CodespacesGetOrgSecretResponseStatus = 200;

export type CodespacesGetOrgSecretResponseBody = CodespacesSecret;

export type CodespacesGetOrgSecretResolver = msw.HttpResponseResolver<
  CodespacesGetOrgSecretRequestParams,
  CodespacesGetOrgSecretRequestBody,
  CodespacesGetOrgSecretResponseBody
>;

export type CodespacesCreateOrUpdateOrgSecretRequestQuery = {};

export type CodespacesCreateOrUpdateOrgSecretRequestHeaders = {};

export type CodespacesCreateOrUpdateOrgSecretRequestParams = {
  readonly org: string;
  readonly secret_name: string;
};

export type CodespacesCreateOrUpdateOrgSecretRequestBody = {
  readonly encrypted_value?: string;
  readonly key_id?: string;
  readonly visibility: 'all' | 'private' | 'selected';
  readonly selected_repository_ids?: ReadonlyArray<number>;
};

export type CodespacesCreateOrUpdateOrgSecretResponseStatus =
  | 201
  | 204
  | 404
  | 422;

export type CodespacesCreateOrUpdateOrgSecretResponseBody =
  | EmptyObject
  | never
  | BasicError
  | ValidationError;

export type CodespacesCreateOrUpdateOrgSecretResolver = msw.HttpResponseResolver<
  CodespacesCreateOrUpdateOrgSecretRequestParams,
  CodespacesCreateOrUpdateOrgSecretRequestBody,
  CodespacesCreateOrUpdateOrgSecretResponseBody
>;

export type CodespacesDeleteOrgSecretRequestQuery = {};

export type CodespacesDeleteOrgSecretRequestHeaders = {};

export type CodespacesDeleteOrgSecretRequestParams = {
  readonly org: string;
  readonly secret_name: string;
};

export type CodespacesDeleteOrgSecretRequestBody = never;

export type CodespacesDeleteOrgSecretResponseStatus = 204 | 404;

export type CodespacesDeleteOrgSecretResponseBody = never | BasicError;

export type CodespacesDeleteOrgSecretResolver = msw.HttpResponseResolver<
  CodespacesDeleteOrgSecretRequestParams,
  CodespacesDeleteOrgSecretRequestBody,
  CodespacesDeleteOrgSecretResponseBody
>;

export type CodespacesListSelectedReposForOrgSecretRequestQuery = {
  readonly page?: string;
  readonly per_page?: string;
};

export type CodespacesListSelectedReposForOrgSecretRequestHeaders = {};

export type CodespacesListSelectedReposForOrgSecretRequestParams = {
  readonly org: string;
  readonly secret_name: string;
};

export type CodespacesListSelectedReposForOrgSecretRequestBody = never;

export type CodespacesListSelectedReposForOrgSecretResponseStatus = 200 | 404;

export type CodespacesListSelectedReposForOrgSecretResponseBody =
  | {
      readonly total_count: number;
      readonly repositories: ReadonlyArray<MinimalRepository>;
    }
  | BasicError;

export type CodespacesListSelectedReposForOrgSecretResolver = msw.HttpResponseResolver<
  CodespacesListSelectedReposForOrgSecretRequestParams,
  CodespacesListSelectedReposForOrgSecretRequestBody,
  CodespacesListSelectedReposForOrgSecretResponseBody
>;

export type CodespacesSetSelectedReposForOrgSecretRequestQuery = {};

export type CodespacesSetSelectedReposForOrgSecretRequestHeaders = {};

export type CodespacesSetSelectedReposForOrgSecretRequestParams = {
  readonly org: string;
  readonly secret_name: string;
};

export type CodespacesSetSelectedReposForOrgSecretRequestBody = {
  readonly selected_repository_ids: ReadonlyArray<number>;
};

export type CodespacesSetSelectedReposForOrgSecretResponseStatus =
  | 204
  | 404
  | 409;

export type CodespacesSetSelectedReposForOrgSecretResponseBody =
  | never
  | BasicError;

export type CodespacesSetSelectedReposForOrgSecretResolver = msw.HttpResponseResolver<
  CodespacesSetSelectedReposForOrgSecretRequestParams,
  CodespacesSetSelectedReposForOrgSecretRequestBody,
  CodespacesSetSelectedReposForOrgSecretResponseBody
>;

export type CodespacesAddSelectedRepoToOrgSecretRequestQuery = {};

export type CodespacesAddSelectedRepoToOrgSecretRequestHeaders = {};

export type CodespacesAddSelectedRepoToOrgSecretRequestParams = {
  readonly org: string;
  readonly secret_name: string;
  readonly repository_id: string;
};

export type CodespacesAddSelectedRepoToOrgSecretRequestBody = never;

export type CodespacesAddSelectedRepoToOrgSecretResponseStatus =
  | 204
  | 404
  | 409
  | 422;

export type CodespacesAddSelectedRepoToOrgSecretResponseBody =
  | never
  | BasicError
  | ValidationError;

export type CodespacesAddSelectedRepoToOrgSecretResolver = msw.HttpResponseResolver<
  CodespacesAddSelectedRepoToOrgSecretRequestParams,
  CodespacesAddSelectedRepoToOrgSecretRequestBody,
  CodespacesAddSelectedRepoToOrgSecretResponseBody
>;

export type CodespacesRemoveSelectedRepoFromOrgSecretRequestQuery = {};

export type CodespacesRemoveSelectedRepoFromOrgSecretRequestHeaders = {};

export type CodespacesRemoveSelectedRepoFromOrgSecretRequestParams = {
  readonly org: string;
  readonly secret_name: string;
  readonly repository_id: string;
};

export type CodespacesRemoveSelectedRepoFromOrgSecretRequestBody = never;

export type CodespacesRemoveSelectedRepoFromOrgSecretResponseStatus =
  | 204
  | 404
  | 409
  | 422;

export type CodespacesRemoveSelectedRepoFromOrgSecretResponseBody =
  | never
  | BasicError
  | ValidationError;

export type CodespacesRemoveSelectedRepoFromOrgSecretResolver = msw.HttpResponseResolver<
  CodespacesRemoveSelectedRepoFromOrgSecretRequestParams,
  CodespacesRemoveSelectedRepoFromOrgSecretRequestBody,
  CodespacesRemoveSelectedRepoFromOrgSecretResponseBody
>;

export type OrgsCreateCustomRoleRequestQuery = {};

export type OrgsCreateCustomRoleRequestHeaders = {};

export type OrgsCreateCustomRoleRequestParams = { readonly org: string };

export type OrgsCreateCustomRoleRequestBody = {
  readonly name: string;
  readonly description?: string;
  readonly base_role: 'read' | 'triage' | 'write' | 'maintain';
  readonly permissions: ReadonlyArray<string>;
};

export type OrgsCreateCustomRoleResponseStatus = 201 | 404 | 422;

export type OrgsCreateCustomRoleResponseBody =
  | OrganizationCustomRepositoryRole
  | BasicError
  | ValidationError;

export type OrgsCreateCustomRoleResolver = msw.HttpResponseResolver<
  OrgsCreateCustomRoleRequestParams,
  OrgsCreateCustomRoleRequestBody,
  OrgsCreateCustomRoleResponseBody
>;

export type OrgsGetCustomRoleRequestQuery = {};

export type OrgsGetCustomRoleRequestHeaders = {};

export type OrgsGetCustomRoleRequestParams = {
  readonly org: string;
  readonly role_id: string;
};

export type OrgsGetCustomRoleRequestBody = never;

export type OrgsGetCustomRoleResponseStatus = 200 | 404;

export type OrgsGetCustomRoleResponseBody =
  | OrganizationCustomRepositoryRole
  | BasicError;

export type OrgsGetCustomRoleResolver = msw.HttpResponseResolver<
  OrgsGetCustomRoleRequestParams,
  OrgsGetCustomRoleRequestBody,
  OrgsGetCustomRoleResponseBody
>;

export type OrgsUpdateCustomRoleRequestQuery = {};

export type OrgsUpdateCustomRoleRequestHeaders = {};

export type OrgsUpdateCustomRoleRequestParams = {
  readonly org: string;
  readonly role_id: string;
};

export type OrgsUpdateCustomRoleRequestBody = {
  readonly name?: string;
  readonly description?: string;
  readonly base_role?: 'read' | 'triage' | 'write' | 'maintain';
  readonly permissions?: ReadonlyArray<string>;
};

export type OrgsUpdateCustomRoleResponseStatus = 200 | 404 | 422;

export type OrgsUpdateCustomRoleResponseBody =
  | OrganizationCustomRepositoryRole
  | BasicError
  | ValidationError;

export type OrgsUpdateCustomRoleResolver = msw.HttpResponseResolver<
  OrgsUpdateCustomRoleRequestParams,
  OrgsUpdateCustomRoleRequestBody,
  OrgsUpdateCustomRoleResponseBody
>;

export type OrgsDeleteCustomRoleRequestQuery = {};

export type OrgsDeleteCustomRoleRequestHeaders = {};

export type OrgsDeleteCustomRoleRequestParams = {
  readonly org: string;
  readonly role_id: string;
};

export type OrgsDeleteCustomRoleRequestBody = never;

export type OrgsDeleteCustomRoleResponseStatus = 204;

export type OrgsDeleteCustomRoleResponseBody = never;

export type OrgsDeleteCustomRoleResolver = msw.HttpResponseResolver<
  OrgsDeleteCustomRoleRequestParams,
  OrgsDeleteCustomRoleRequestBody,
  OrgsDeleteCustomRoleResponseBody
>;

export type DependabotListAlertsForOrgRequestQuery = {
  readonly state?: string;
  readonly severity?: string;
  readonly ecosystem?: string;
  readonly package?: string;
  readonly scope?: string;
  readonly sort?: string;
  readonly direction?: string;
  readonly before?: string;
  readonly after?: string;
  readonly first?: string;
  readonly last?: string;
};

export type DependabotListAlertsForOrgRequestHeaders = {};

export type DependabotListAlertsForOrgRequestParams = { readonly org: string };

export type DependabotListAlertsForOrgRequestBody = never;

export type DependabotListAlertsForOrgResponseStatus =
  | 200
  | 304
  | 400
  | 403
  | 404
  | 422;

export type DependabotAlertPackage = {
  readonly ecosystem: string;
  readonly name: string;
};

export type DependabotAlertSecurityVulnerability = {
  readonly package: DependabotAlertPackage;
  readonly severity: 'low' | 'medium' | 'high' | 'critical';
  readonly vulnerable_version_range: string;
  readonly first_patched_version: { readonly identifier: string } | null;
};

export type DependabotAlertSecurityAdvisory = {
  readonly ghsa_id: string;
  readonly cve_id: string | null;
  readonly summary: string;
  readonly description: string;
  readonly vulnerabilities: ReadonlyArray<DependabotAlertSecurityVulnerability>;
  readonly severity: 'low' | 'medium' | 'high' | 'critical';
  readonly cvss: {
    readonly score: number;
    readonly vector_string: string | null;
  };
  readonly cwes: ReadonlyArray<{
    readonly cwe_id: string;
    readonly name: string;
  }>;
  readonly identifiers: ReadonlyArray<{
    readonly type: 'CVE' | 'GHSA';
    readonly value: string;
  }>;
  readonly references: ReadonlyArray<{ readonly url: string }>;
  readonly published_at: string;
  readonly updated_at: string;
  readonly withdrawn_at: string | null;
};

export type DependabotAlertWithRepository = {
  readonly number: AlertNumber;
  readonly state: 'dismissed' | 'fixed' | 'open';
  readonly dependency: {
    readonly package?: DependabotAlertPackage;
    readonly manifest_path?: string;
    readonly scope?: 'development' | 'runtime' | null;
  };
  readonly security_advisory: DependabotAlertSecurityAdvisory;
  readonly security_vulnerability: DependabotAlertSecurityVulnerability;
  readonly url: AlertUrl;
  readonly html_url: AlertHtmlUrl;
  readonly created_at: AlertCreatedAt;
  readonly updated_at: AlertUpdatedAt;
  readonly dismissed_at: AlertDismissedAt;
  readonly dismissed_by: SimpleUser;
  readonly dismissed_reason:
    | 'fix_started'
    | 'inaccurate'
    | 'no_bandwidth'
    | 'not_used'
    | 'tolerable_risk'
    | null;
  readonly dismissed_comment: string | null;
  readonly fixed_at: AlertFixedAt;
  readonly repository: SimpleRepository;
};

export type DependabotListAlertsForOrgResponseBody =
  | ReadonlyArray<DependabotAlertWithRepository>
  | never
  | BasicError
  | ValidationErrorSimple;

export type DependabotListAlertsForOrgResolver = msw.HttpResponseResolver<
  DependabotListAlertsForOrgRequestParams,
  DependabotListAlertsForOrgRequestBody,
  DependabotListAlertsForOrgResponseBody
>;

export type DependabotListOrgSecretsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type DependabotListOrgSecretsRequestHeaders = {};

export type DependabotListOrgSecretsRequestParams = { readonly org: string };

export type DependabotListOrgSecretsRequestBody = never;

export type DependabotListOrgSecretsResponseStatus = 200;

export type DependabotSecretForAnOrganization = {
  readonly name: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly visibility: 'all' | 'private' | 'selected';
  readonly selected_repositories_url?: string;
};

export type DependabotListOrgSecretsResponseBody = {
  readonly total_count: number;
  readonly secrets: ReadonlyArray<DependabotSecretForAnOrganization>;
};

export type DependabotListOrgSecretsResolver = msw.HttpResponseResolver<
  DependabotListOrgSecretsRequestParams,
  DependabotListOrgSecretsRequestBody,
  DependabotListOrgSecretsResponseBody
>;

export type DependabotGetOrgPublicKeyRequestQuery = {};

export type DependabotGetOrgPublicKeyRequestHeaders = {};

export type DependabotGetOrgPublicKeyRequestParams = { readonly org: string };

export type DependabotGetOrgPublicKeyRequestBody = never;

export type DependabotGetOrgPublicKeyResponseStatus = 200;

export type DependabotPublicKey = {
  readonly key_id: string;
  readonly key: string;
};

export type DependabotGetOrgPublicKeyResponseBody = DependabotPublicKey;

export type DependabotGetOrgPublicKeyResolver = msw.HttpResponseResolver<
  DependabotGetOrgPublicKeyRequestParams,
  DependabotGetOrgPublicKeyRequestBody,
  DependabotGetOrgPublicKeyResponseBody
>;

export type DependabotGetOrgSecretRequestQuery = {};

export type DependabotGetOrgSecretRequestHeaders = {};

export type DependabotGetOrgSecretRequestParams = {
  readonly org: string;
  readonly secret_name: string;
};

export type DependabotGetOrgSecretRequestBody = never;

export type DependabotGetOrgSecretResponseStatus = 200;

export type DependabotGetOrgSecretResponseBody = DependabotSecretForAnOrganization;

export type DependabotGetOrgSecretResolver = msw.HttpResponseResolver<
  DependabotGetOrgSecretRequestParams,
  DependabotGetOrgSecretRequestBody,
  DependabotGetOrgSecretResponseBody
>;

export type DependabotCreateOrUpdateOrgSecretRequestQuery = {};

export type DependabotCreateOrUpdateOrgSecretRequestHeaders = {};

export type DependabotCreateOrUpdateOrgSecretRequestParams = {
  readonly org: string;
  readonly secret_name: string;
};

export type DependabotCreateOrUpdateOrgSecretRequestBody = {
  readonly encrypted_value?: string;
  readonly key_id?: string;
  readonly visibility: 'all' | 'private' | 'selected';
  readonly selected_repository_ids?: ReadonlyArray<string>;
};

export type DependabotCreateOrUpdateOrgSecretResponseStatus = 201 | 204;

export type DependabotCreateOrUpdateOrgSecretResponseBody = EmptyObject | never;

export type DependabotCreateOrUpdateOrgSecretResolver = msw.HttpResponseResolver<
  DependabotCreateOrUpdateOrgSecretRequestParams,
  DependabotCreateOrUpdateOrgSecretRequestBody,
  DependabotCreateOrUpdateOrgSecretResponseBody
>;

export type DependabotDeleteOrgSecretRequestQuery = {};

export type DependabotDeleteOrgSecretRequestHeaders = {};

export type DependabotDeleteOrgSecretRequestParams = {
  readonly org: string;
  readonly secret_name: string;
};

export type DependabotDeleteOrgSecretRequestBody = never;

export type DependabotDeleteOrgSecretResponseStatus = 204;

export type DependabotDeleteOrgSecretResponseBody = never;

export type DependabotDeleteOrgSecretResolver = msw.HttpResponseResolver<
  DependabotDeleteOrgSecretRequestParams,
  DependabotDeleteOrgSecretRequestBody,
  DependabotDeleteOrgSecretResponseBody
>;

export type DependabotListSelectedReposForOrgSecretRequestQuery = {
  readonly page?: string;
  readonly per_page?: string;
};

export type DependabotListSelectedReposForOrgSecretRequestHeaders = {};

export type DependabotListSelectedReposForOrgSecretRequestParams = {
  readonly org: string;
  readonly secret_name: string;
};

export type DependabotListSelectedReposForOrgSecretRequestBody = never;

export type DependabotListSelectedReposForOrgSecretResponseStatus = 200;

export type DependabotListSelectedReposForOrgSecretResponseBody = {
  readonly total_count: number;
  readonly repositories: ReadonlyArray<MinimalRepository>;
};

export type DependabotListSelectedReposForOrgSecretResolver = msw.HttpResponseResolver<
  DependabotListSelectedReposForOrgSecretRequestParams,
  DependabotListSelectedReposForOrgSecretRequestBody,
  DependabotListSelectedReposForOrgSecretResponseBody
>;

export type DependabotSetSelectedReposForOrgSecretRequestQuery = {};

export type DependabotSetSelectedReposForOrgSecretRequestHeaders = {};

export type DependabotSetSelectedReposForOrgSecretRequestParams = {
  readonly org: string;
  readonly secret_name: string;
};

export type DependabotSetSelectedReposForOrgSecretRequestBody = {
  readonly selected_repository_ids: ReadonlyArray<number>;
};

export type DependabotSetSelectedReposForOrgSecretResponseStatus = 204;

export type DependabotSetSelectedReposForOrgSecretResponseBody = never;

export type DependabotSetSelectedReposForOrgSecretResolver = msw.HttpResponseResolver<
  DependabotSetSelectedReposForOrgSecretRequestParams,
  DependabotSetSelectedReposForOrgSecretRequestBody,
  DependabotSetSelectedReposForOrgSecretResponseBody
>;

export type DependabotAddSelectedRepoToOrgSecretRequestQuery = {};

export type DependabotAddSelectedRepoToOrgSecretRequestHeaders = {};

export type DependabotAddSelectedRepoToOrgSecretRequestParams = {
  readonly org: string;
  readonly secret_name: string;
  readonly repository_id: string;
};

export type DependabotAddSelectedRepoToOrgSecretRequestBody = never;

export type DependabotAddSelectedRepoToOrgSecretResponseStatus = 204 | 409;

export type DependabotAddSelectedRepoToOrgSecretResponseBody = never;

export type DependabotAddSelectedRepoToOrgSecretResolver = msw.HttpResponseResolver<
  DependabotAddSelectedRepoToOrgSecretRequestParams,
  DependabotAddSelectedRepoToOrgSecretRequestBody,
  DependabotAddSelectedRepoToOrgSecretResponseBody
>;

export type DependabotRemoveSelectedRepoFromOrgSecretRequestQuery = {};

export type DependabotRemoveSelectedRepoFromOrgSecretRequestHeaders = {};

export type DependabotRemoveSelectedRepoFromOrgSecretRequestParams = {
  readonly org: string;
  readonly secret_name: string;
  readonly repository_id: string;
};

export type DependabotRemoveSelectedRepoFromOrgSecretRequestBody = never;

export type DependabotRemoveSelectedRepoFromOrgSecretResponseStatus = 204 | 409;

export type DependabotRemoveSelectedRepoFromOrgSecretResponseBody = never;

export type DependabotRemoveSelectedRepoFromOrgSecretResolver = msw.HttpResponseResolver<
  DependabotRemoveSelectedRepoFromOrgSecretRequestParams,
  DependabotRemoveSelectedRepoFromOrgSecretRequestBody,
  DependabotRemoveSelectedRepoFromOrgSecretResponseBody
>;

export type ActivityListPublicOrgEventsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActivityListPublicOrgEventsRequestHeaders = {};

export type ActivityListPublicOrgEventsRequestParams = { readonly org: string };

export type ActivityListPublicOrgEventsRequestBody = never;

export type ActivityListPublicOrgEventsResponseStatus = 200;

export type ActivityListPublicOrgEventsResponseBody = ReadonlyArray<Event>;

export type ActivityListPublicOrgEventsResolver = msw.HttpResponseResolver<
  ActivityListPublicOrgEventsRequestParams,
  ActivityListPublicOrgEventsRequestBody,
  ActivityListPublicOrgEventsResponseBody
>;

export type OrgsListFailedInvitationsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type OrgsListFailedInvitationsRequestHeaders = {};

export type OrgsListFailedInvitationsRequestParams = { readonly org: string };

export type OrgsListFailedInvitationsRequestBody = never;

export type OrgsListFailedInvitationsResponseStatus = 200 | 404;

export type OrganizationInvitation = {
  readonly id: number;
  readonly login: string | null;
  readonly email: string | null;
  readonly role: string;
  readonly created_at: string;
  readonly failed_at?: string | null;
  readonly failed_reason?: string | null;
  readonly inviter: SimpleUser;
  readonly team_count: number;
  readonly node_id: string;
  readonly invitation_teams_url: string;
};

export type OrgsListFailedInvitationsResponseBody =
  | ReadonlyArray<OrganizationInvitation>
  | BasicError;

export type OrgsListFailedInvitationsResolver = msw.HttpResponseResolver<
  OrgsListFailedInvitationsRequestParams,
  OrgsListFailedInvitationsRequestBody,
  OrgsListFailedInvitationsResponseBody
>;

export type OrgsListFineGrainedPermissionsRequestQuery = {};

export type OrgsListFineGrainedPermissionsRequestHeaders = {};

export type OrgsListFineGrainedPermissionsRequestParams = {
  readonly org: string;
};

export type OrgsListFineGrainedPermissionsRequestBody = never;

export type OrgsListFineGrainedPermissionsResponseStatus = 200;

export type OrganizationFineGrainedPermission = {
  readonly name: string;
  readonly description: string;
};

export type OrgsListFineGrainedPermissionsResponseBody = ReadonlyArray<OrganizationFineGrainedPermission>;

export type OrgsListFineGrainedPermissionsResolver = msw.HttpResponseResolver<
  OrgsListFineGrainedPermissionsRequestParams,
  OrgsListFineGrainedPermissionsRequestBody,
  OrgsListFineGrainedPermissionsResponseBody
>;

export type OrgsListWebhooksRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type OrgsListWebhooksRequestHeaders = {};

export type OrgsListWebhooksRequestParams = { readonly org: string };

export type OrgsListWebhooksRequestBody = never;

export type OrgsListWebhooksResponseStatus = 200 | 404;

export type OrgHook = {
  readonly id: number;
  readonly url: string;
  readonly ping_url: string;
  readonly deliveries_url?: string;
  readonly name: string;
  readonly events: ReadonlyArray<string>;
  readonly active: boolean;
  readonly config: {
    readonly url?: string;
    readonly insecure_ssl?: string;
    readonly content_type?: string;
    readonly secret?: string;
  };
  readonly updated_at: string;
  readonly created_at: string;
  readonly type: string;
};

export type OrgsListWebhooksResponseBody = ReadonlyArray<OrgHook> | BasicError;

export type OrgsListWebhooksResolver = msw.HttpResponseResolver<
  OrgsListWebhooksRequestParams,
  OrgsListWebhooksRequestBody,
  OrgsListWebhooksResponseBody
>;

export type OrgsCreateWebhookRequestQuery = {};

export type OrgsCreateWebhookRequestHeaders = {};

export type OrgsCreateWebhookRequestParams = { readonly org: string };

export type OrgsCreateWebhookRequestBody = {
  readonly name: string;
  readonly config: {
    readonly url: WebhookConfigUrl;
    readonly content_type?: WebhookConfigContentType;
    readonly secret?: WebhookConfigSecret;
    readonly insecure_ssl?: WebhookConfigInsecureSsl;
    readonly username?: string;
    readonly password?: string;
  };
  readonly events?: ReadonlyArray<string>;
  readonly active?: boolean;
};

export type OrgsCreateWebhookResponseStatus = 201 | 404 | 422;

export type OrgsCreateWebhookResponseBody =
  | OrgHook
  | BasicError
  | ValidationError;

export type OrgsCreateWebhookResolver = msw.HttpResponseResolver<
  OrgsCreateWebhookRequestParams,
  OrgsCreateWebhookRequestBody,
  OrgsCreateWebhookResponseBody
>;

export type OrgsGetWebhookRequestQuery = {};

export type OrgsGetWebhookRequestHeaders = {};

export type OrgsGetWebhookRequestParams = {
  readonly org: string;
  readonly hook_id: string;
};

export type OrgsGetWebhookRequestBody = never;

export type OrgsGetWebhookResponseStatus = 200 | 404;

export type OrgsGetWebhookResponseBody = OrgHook | BasicError;

export type OrgsGetWebhookResolver = msw.HttpResponseResolver<
  OrgsGetWebhookRequestParams,
  OrgsGetWebhookRequestBody,
  OrgsGetWebhookResponseBody
>;

export type OrgsUpdateWebhookRequestQuery = {};

export type OrgsUpdateWebhookRequestHeaders = {};

export type OrgsUpdateWebhookRequestParams = {
  readonly org: string;
  readonly hook_id: string;
};

export type OrgsUpdateWebhookRequestBody =
  | {
      readonly config?: {
        readonly url: WebhookConfigUrl;
        readonly content_type?: WebhookConfigContentType;
        readonly secret?: WebhookConfigSecret;
        readonly insecure_ssl?: WebhookConfigInsecureSsl;
      };
      readonly events?: ReadonlyArray<string>;
      readonly active?: boolean;
      readonly name?: string;
    }
  | undefined;

export type OrgsUpdateWebhookResponseStatus = 200 | 404 | 422;

export type OrgsUpdateWebhookResponseBody =
  | OrgHook
  | BasicError
  | ValidationError;

export type OrgsUpdateWebhookResolver = msw.HttpResponseResolver<
  OrgsUpdateWebhookRequestParams,
  OrgsUpdateWebhookRequestBody,
  OrgsUpdateWebhookResponseBody
>;

export type OrgsDeleteWebhookRequestQuery = {};

export type OrgsDeleteWebhookRequestHeaders = {};

export type OrgsDeleteWebhookRequestParams = {
  readonly org: string;
  readonly hook_id: string;
};

export type OrgsDeleteWebhookRequestBody = never;

export type OrgsDeleteWebhookResponseStatus = 204 | 404;

export type OrgsDeleteWebhookResponseBody = never | BasicError;

export type OrgsDeleteWebhookResolver = msw.HttpResponseResolver<
  OrgsDeleteWebhookRequestParams,
  OrgsDeleteWebhookRequestBody,
  OrgsDeleteWebhookResponseBody
>;

export type OrgsGetWebhookConfigForOrgRequestQuery = {};

export type OrgsGetWebhookConfigForOrgRequestHeaders = {};

export type OrgsGetWebhookConfigForOrgRequestParams = {
  readonly org: string;
  readonly hook_id: string;
};

export type OrgsGetWebhookConfigForOrgRequestBody = never;

export type OrgsGetWebhookConfigForOrgResponseStatus = 200;

export type OrgsGetWebhookConfigForOrgResponseBody = WebhookConfiguration;

export type OrgsGetWebhookConfigForOrgResolver = msw.HttpResponseResolver<
  OrgsGetWebhookConfigForOrgRequestParams,
  OrgsGetWebhookConfigForOrgRequestBody,
  OrgsGetWebhookConfigForOrgResponseBody
>;

export type OrgsUpdateWebhookConfigForOrgRequestQuery = {};

export type OrgsUpdateWebhookConfigForOrgRequestHeaders = {};

export type OrgsUpdateWebhookConfigForOrgRequestParams = {
  readonly org: string;
  readonly hook_id: string;
};

export type OrgsUpdateWebhookConfigForOrgRequestBody =
  | {
      readonly url?: WebhookConfigUrl;
      readonly content_type?: WebhookConfigContentType;
      readonly secret?: WebhookConfigSecret;
      readonly insecure_ssl?: WebhookConfigInsecureSsl;
    }
  | undefined;

export type OrgsUpdateWebhookConfigForOrgResponseStatus = 200;

export type OrgsUpdateWebhookConfigForOrgResponseBody = WebhookConfiguration;

export type OrgsUpdateWebhookConfigForOrgResolver = msw.HttpResponseResolver<
  OrgsUpdateWebhookConfigForOrgRequestParams,
  OrgsUpdateWebhookConfigForOrgRequestBody,
  OrgsUpdateWebhookConfigForOrgResponseBody
>;

export type OrgsListWebhookDeliveriesRequestQuery = {
  readonly per_page?: string;
  readonly cursor?: string;
};

export type OrgsListWebhookDeliveriesRequestHeaders = {};

export type OrgsListWebhookDeliveriesRequestParams = {
  readonly org: string;
  readonly hook_id: string;
};

export type OrgsListWebhookDeliveriesRequestBody = never;

export type OrgsListWebhookDeliveriesResponseStatus = 200 | 400 | 422;

export type OrgsListWebhookDeliveriesResponseBody =
  | ReadonlyArray<SimpleWebhookDelivery>
  | BasicError
  | ValidationError;

export type OrgsListWebhookDeliveriesResolver = msw.HttpResponseResolver<
  OrgsListWebhookDeliveriesRequestParams,
  OrgsListWebhookDeliveriesRequestBody,
  OrgsListWebhookDeliveriesResponseBody
>;

export type OrgsGetWebhookDeliveryRequestQuery = {};

export type OrgsGetWebhookDeliveryRequestHeaders = {};

export type OrgsGetWebhookDeliveryRequestParams = {
  readonly org: string;
  readonly hook_id: string;
  readonly delivery_id: string;
};

export type OrgsGetWebhookDeliveryRequestBody = never;

export type OrgsGetWebhookDeliveryResponseStatus = 200 | 400 | 422;

export type OrgsGetWebhookDeliveryResponseBody =
  | WebhookDelivery
  | BasicError
  | ValidationError;

export type OrgsGetWebhookDeliveryResolver = msw.HttpResponseResolver<
  OrgsGetWebhookDeliveryRequestParams,
  OrgsGetWebhookDeliveryRequestBody,
  OrgsGetWebhookDeliveryResponseBody
>;

export type OrgsRedeliverWebhookDeliveryRequestQuery = {};

export type OrgsRedeliverWebhookDeliveryRequestHeaders = {};

export type OrgsRedeliverWebhookDeliveryRequestParams = {
  readonly org: string;
  readonly hook_id: string;
  readonly delivery_id: string;
};

export type OrgsRedeliverWebhookDeliveryRequestBody = never;

export type OrgsRedeliverWebhookDeliveryResponseStatus = 202 | 400 | 422;

export type OrgsRedeliverWebhookDeliveryResponseBody =
  | never
  | BasicError
  | ValidationError;

export type OrgsRedeliverWebhookDeliveryResolver = msw.HttpResponseResolver<
  OrgsRedeliverWebhookDeliveryRequestParams,
  OrgsRedeliverWebhookDeliveryRequestBody,
  OrgsRedeliverWebhookDeliveryResponseBody
>;

export type OrgsPingWebhookRequestQuery = {};

export type OrgsPingWebhookRequestHeaders = {};

export type OrgsPingWebhookRequestParams = {
  readonly org: string;
  readonly hook_id: string;
};

export type OrgsPingWebhookRequestBody = never;

export type OrgsPingWebhookResponseStatus = 204 | 404;

export type OrgsPingWebhookResponseBody = never | BasicError;

export type OrgsPingWebhookResolver = msw.HttpResponseResolver<
  OrgsPingWebhookRequestParams,
  OrgsPingWebhookRequestBody,
  OrgsPingWebhookResponseBody
>;

export type AppsGetOrgInstallationRequestQuery = {};

export type AppsGetOrgInstallationRequestHeaders = {};

export type AppsGetOrgInstallationRequestParams = { readonly org: string };

export type AppsGetOrgInstallationRequestBody = never;

export type AppsGetOrgInstallationResponseStatus = 200;

export type AppsGetOrgInstallationResponseBody = Installation;

export type AppsGetOrgInstallationResolver = msw.HttpResponseResolver<
  AppsGetOrgInstallationRequestParams,
  AppsGetOrgInstallationRequestBody,
  AppsGetOrgInstallationResponseBody
>;

export type OrgsListAppInstallationsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type OrgsListAppInstallationsRequestHeaders = {};

export type OrgsListAppInstallationsRequestParams = { readonly org: string };

export type OrgsListAppInstallationsRequestBody = never;

export type OrgsListAppInstallationsResponseStatus = 200;

export type OrgsListAppInstallationsResponseBody = {
  readonly total_count: number;
  readonly installations: ReadonlyArray<Installation>;
};

export type OrgsListAppInstallationsResolver = msw.HttpResponseResolver<
  OrgsListAppInstallationsRequestParams,
  OrgsListAppInstallationsRequestBody,
  OrgsListAppInstallationsResponseBody
>;

export type InteractionsGetRestrictionsForOrgRequestQuery = {};

export type InteractionsGetRestrictionsForOrgRequestHeaders = {};

export type InteractionsGetRestrictionsForOrgRequestParams = {
  readonly org: string;
};

export type InteractionsGetRestrictionsForOrgRequestBody = never;

export type InteractionsGetRestrictionsForOrgResponseStatus = 200;

export type InteractionGroup =
  | 'existing_users'
  | 'contributors_only'
  | 'collaborators_only';

export type InteractionLimits = {
  readonly limit: InteractionGroup;
  readonly origin: string;
  readonly expires_at: string;
};

export type InteractionsGetRestrictionsForOrgResponseBody =
  | InteractionLimits
  | {};

export type InteractionsGetRestrictionsForOrgResolver = msw.HttpResponseResolver<
  InteractionsGetRestrictionsForOrgRequestParams,
  InteractionsGetRestrictionsForOrgRequestBody,
  InteractionsGetRestrictionsForOrgResponseBody
>;

export type InteractionExpiry =
  | 'one_day'
  | 'three_days'
  | 'one_week'
  | 'one_month'
  | 'six_months';

export type InteractionRestrictions = {
  readonly limit: InteractionGroup;
  readonly expiry?: InteractionExpiry;
};

export type InteractionsSetRestrictionsForOrgRequestQuery = {};

export type InteractionsSetRestrictionsForOrgRequestHeaders = {};

export type InteractionsSetRestrictionsForOrgRequestParams = {
  readonly org: string;
};

export type InteractionsSetRestrictionsForOrgRequestBody = InteractionRestrictions;

export type InteractionsSetRestrictionsForOrgResponseStatus = 200 | 422;

export type InteractionsSetRestrictionsForOrgResponseBody =
  | InteractionLimits
  | ValidationError;

export type InteractionsSetRestrictionsForOrgResolver = msw.HttpResponseResolver<
  InteractionsSetRestrictionsForOrgRequestParams,
  InteractionsSetRestrictionsForOrgRequestBody,
  InteractionsSetRestrictionsForOrgResponseBody
>;

export type InteractionsRemoveRestrictionsForOrgRequestQuery = {};

export type InteractionsRemoveRestrictionsForOrgRequestHeaders = {};

export type InteractionsRemoveRestrictionsForOrgRequestParams = {
  readonly org: string;
};

export type InteractionsRemoveRestrictionsForOrgRequestBody = never;

export type InteractionsRemoveRestrictionsForOrgResponseStatus = 204;

export type InteractionsRemoveRestrictionsForOrgResponseBody = never;

export type InteractionsRemoveRestrictionsForOrgResolver = msw.HttpResponseResolver<
  InteractionsRemoveRestrictionsForOrgRequestParams,
  InteractionsRemoveRestrictionsForOrgRequestBody,
  InteractionsRemoveRestrictionsForOrgResponseBody
>;

export type OrgsListPendingInvitationsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type OrgsListPendingInvitationsRequestHeaders = {};

export type OrgsListPendingInvitationsRequestParams = { readonly org: string };

export type OrgsListPendingInvitationsRequestBody = never;

export type OrgsListPendingInvitationsResponseStatus = 200 | 404;

export type OrgsListPendingInvitationsResponseBody =
  | ReadonlyArray<OrganizationInvitation>
  | BasicError;

export type OrgsListPendingInvitationsResolver = msw.HttpResponseResolver<
  OrgsListPendingInvitationsRequestParams,
  OrgsListPendingInvitationsRequestBody,
  OrgsListPendingInvitationsResponseBody
>;

export type OrgsCreateInvitationRequestQuery = {};

export type OrgsCreateInvitationRequestHeaders = {};

export type OrgsCreateInvitationRequestParams = { readonly org: string };

export type OrgsCreateInvitationRequestBody =
  | {
      readonly invitee_id?: number;
      readonly email?: string;
      readonly role?: 'admin' | 'direct_member' | 'billing_manager';
      readonly team_ids?: ReadonlyArray<number>;
    }
  | undefined;

export type OrgsCreateInvitationResponseStatus = 201 | 404 | 422;

export type OrgsCreateInvitationResponseBody =
  | OrganizationInvitation
  | BasicError
  | ValidationError;

export type OrgsCreateInvitationResolver = msw.HttpResponseResolver<
  OrgsCreateInvitationRequestParams,
  OrgsCreateInvitationRequestBody,
  OrgsCreateInvitationResponseBody
>;

export type OrgsCancelInvitationRequestQuery = {};

export type OrgsCancelInvitationRequestHeaders = {};

export type OrgsCancelInvitationRequestParams = {
  readonly org: string;
  readonly invitation_id: string;
};

export type OrgsCancelInvitationRequestBody = never;

export type OrgsCancelInvitationResponseStatus = 204 | 404 | 422;

export type OrgsCancelInvitationResponseBody =
  | never
  | BasicError
  | ValidationError;

export type OrgsCancelInvitationResolver = msw.HttpResponseResolver<
  OrgsCancelInvitationRequestParams,
  OrgsCancelInvitationRequestBody,
  OrgsCancelInvitationResponseBody
>;

export type OrgsListInvitationTeamsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type OrgsListInvitationTeamsRequestHeaders = {};

export type OrgsListInvitationTeamsRequestParams = {
  readonly org: string;
  readonly invitation_id: string;
};

export type OrgsListInvitationTeamsRequestBody = never;

export type OrgsListInvitationTeamsResponseStatus = 200 | 404;

export type TeamSimple = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly members_url: string;
  readonly name: string;
  readonly description: string | null;
  readonly permission: string;
  readonly privacy?: string;
  readonly html_url: string;
  readonly repositories_url: string;
  readonly slug: string;
  readonly ldap_dn?: string;
} | null;

export type Team = {
  readonly id: number;
  readonly node_id: string;
  readonly name: string;
  readonly slug: string;
  readonly description: string | null;
  readonly privacy?: string;
  readonly permission: string;
  readonly permissions?: {
    readonly pull: boolean;
    readonly triage: boolean;
    readonly push: boolean;
    readonly maintain: boolean;
    readonly admin: boolean;
  };
  readonly url: string;
  readonly html_url: string;
  readonly members_url: string;
  readonly repositories_url: string;
  readonly parent: TeamSimple;
};

export type OrgsListInvitationTeamsResponseBody =
  | ReadonlyArray<Team>
  | BasicError;

export type OrgsListInvitationTeamsResolver = msw.HttpResponseResolver<
  OrgsListInvitationTeamsRequestParams,
  OrgsListInvitationTeamsRequestBody,
  OrgsListInvitationTeamsResponseBody
>;

export type IssuesListForOrgRequestQuery = {
  readonly filter?: string;
  readonly state?: string;
  readonly labels?: string;
  readonly sort?: string;
  readonly direction?: string;
  readonly since?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type IssuesListForOrgRequestHeaders = {};

export type IssuesListForOrgRequestParams = { readonly org: string };

export type IssuesListForOrgRequestBody = never;

export type IssuesListForOrgResponseStatus = 200 | 404;

export type IssuesListForOrgResponseBody = ReadonlyArray<Issue> | BasicError;

export type IssuesListForOrgResolver = msw.HttpResponseResolver<
  IssuesListForOrgRequestParams,
  IssuesListForOrgRequestBody,
  IssuesListForOrgResponseBody
>;

export type OrgsListMembersRequestQuery = {
  readonly filter?: string;
  readonly role?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type OrgsListMembersRequestHeaders = {};

export type OrgsListMembersRequestParams = { readonly org: string };

export type OrgsListMembersRequestBody = never;

export type OrgsListMembersResponseStatus = 200 | 422;

export type OrgsListMembersResponseBody =
  | ReadonlyArray<SimpleUser>
  | ValidationError;

export type OrgsListMembersResolver = msw.HttpResponseResolver<
  OrgsListMembersRequestParams,
  OrgsListMembersRequestBody,
  OrgsListMembersResponseBody
>;

export type OrgsCheckMembershipForUserRequestQuery = {};

export type OrgsCheckMembershipForUserRequestHeaders = {};

export type OrgsCheckMembershipForUserRequestParams = {
  readonly org: string;
  readonly username: string;
};

export type OrgsCheckMembershipForUserRequestBody = never;

export type OrgsCheckMembershipForUserResponseStatus = 204 | 302 | 404;

export type OrgsCheckMembershipForUserResponseBody = never;

export type OrgsCheckMembershipForUserResolver = msw.HttpResponseResolver<
  OrgsCheckMembershipForUserRequestParams,
  OrgsCheckMembershipForUserRequestBody,
  OrgsCheckMembershipForUserResponseBody
>;

export type OrgsRemoveMemberRequestQuery = {};

export type OrgsRemoveMemberRequestHeaders = {};

export type OrgsRemoveMemberRequestParams = {
  readonly org: string;
  readonly username: string;
};

export type OrgsRemoveMemberRequestBody = never;

export type OrgsRemoveMemberResponseStatus = 204 | 403;

export type OrgsRemoveMemberResponseBody = never | BasicError;

export type OrgsRemoveMemberResolver = msw.HttpResponseResolver<
  OrgsRemoveMemberRequestParams,
  OrgsRemoveMemberRequestBody,
  OrgsRemoveMemberResponseBody
>;

export type CodespacesGetCodespacesForUserInOrgRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type CodespacesGetCodespacesForUserInOrgRequestHeaders = {};

export type CodespacesGetCodespacesForUserInOrgRequestParams = {
  readonly org: string;
  readonly username: string;
};

export type CodespacesGetCodespacesForUserInOrgRequestBody = never;

export type CodespacesGetCodespacesForUserInOrgResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404
  | 500;

export type CodespacesGetCodespacesForUserInOrgResponseBody =
  | {
      readonly total_count: number;
      readonly codespaces: ReadonlyArray<Codespace>;
    }
  | never
  | BasicError;

export type CodespacesGetCodespacesForUserInOrgResolver = msw.HttpResponseResolver<
  CodespacesGetCodespacesForUserInOrgRequestParams,
  CodespacesGetCodespacesForUserInOrgRequestBody,
  CodespacesGetCodespacesForUserInOrgResponseBody
>;

export type CodespacesDeleteFromOrganizationRequestQuery = {};

export type CodespacesDeleteFromOrganizationRequestHeaders = {};

export type CodespacesDeleteFromOrganizationRequestParams = {
  readonly org: string;
  readonly username: string;
  readonly codespace_name: string;
};

export type CodespacesDeleteFromOrganizationRequestBody = never;

export type CodespacesDeleteFromOrganizationResponseStatus =
  | 202
  | 304
  | 401
  | 403
  | 404
  | 500;

export type CodespacesDeleteFromOrganizationResponseBody = never | BasicError;

export type CodespacesDeleteFromOrganizationResolver = msw.HttpResponseResolver<
  CodespacesDeleteFromOrganizationRequestParams,
  CodespacesDeleteFromOrganizationRequestBody,
  CodespacesDeleteFromOrganizationResponseBody
>;

export type CodespacesStopInOrganizationRequestQuery = {};

export type CodespacesStopInOrganizationRequestHeaders = {};

export type CodespacesStopInOrganizationRequestParams = {
  readonly org: string;
  readonly username: string;
  readonly codespace_name: string;
};

export type CodespacesStopInOrganizationRequestBody = never;

export type CodespacesStopInOrganizationResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404
  | 500;

export type CodespacesStopInOrganizationResponseBody =
  | Codespace
  | never
  | BasicError;

export type CodespacesStopInOrganizationResolver = msw.HttpResponseResolver<
  CodespacesStopInOrganizationRequestParams,
  CodespacesStopInOrganizationRequestBody,
  CodespacesStopInOrganizationResponseBody
>;

export type OrgsGetMembershipForUserRequestQuery = {};

export type OrgsGetMembershipForUserRequestHeaders = {};

export type OrgsGetMembershipForUserRequestParams = {
  readonly org: string;
  readonly username: string;
};

export type OrgsGetMembershipForUserRequestBody = never;

export type OrgsGetMembershipForUserResponseStatus = 200 | 403 | 404;

export type OrgMembership = {
  readonly url: string;
  readonly state: 'active' | 'pending';
  readonly role: 'admin' | 'member' | 'billing_manager';
  readonly organization_url: string;
  readonly organization: OrganizationSimple;
  readonly user: SimpleUser;
  readonly permissions?: { readonly can_create_repository: boolean };
};

export type OrgsGetMembershipForUserResponseBody = OrgMembership | BasicError;

export type OrgsGetMembershipForUserResolver = msw.HttpResponseResolver<
  OrgsGetMembershipForUserRequestParams,
  OrgsGetMembershipForUserRequestBody,
  OrgsGetMembershipForUserResponseBody
>;

export type OrgsSetMembershipForUserRequestQuery = {};

export type OrgsSetMembershipForUserRequestHeaders = {};

export type OrgsSetMembershipForUserRequestParams = {
  readonly org: string;
  readonly username: string;
};

export type OrgsSetMembershipForUserRequestBody =
  | { readonly role?: 'admin' | 'member' }
  | undefined;

export type OrgsSetMembershipForUserResponseStatus = 200 | 403 | 422;

export type OrgsSetMembershipForUserResponseBody =
  | OrgMembership
  | BasicError
  | ValidationError;

export type OrgsSetMembershipForUserResolver = msw.HttpResponseResolver<
  OrgsSetMembershipForUserRequestParams,
  OrgsSetMembershipForUserRequestBody,
  OrgsSetMembershipForUserResponseBody
>;

export type OrgsRemoveMembershipForUserRequestQuery = {};

export type OrgsRemoveMembershipForUserRequestHeaders = {};

export type OrgsRemoveMembershipForUserRequestParams = {
  readonly org: string;
  readonly username: string;
};

export type OrgsRemoveMembershipForUserRequestBody = never;

export type OrgsRemoveMembershipForUserResponseStatus = 204 | 403 | 404;

export type OrgsRemoveMembershipForUserResponseBody = never | BasicError;

export type OrgsRemoveMembershipForUserResolver = msw.HttpResponseResolver<
  OrgsRemoveMembershipForUserRequestParams,
  OrgsRemoveMembershipForUserRequestBody,
  OrgsRemoveMembershipForUserResponseBody
>;

export type MigrationsListForOrgRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
  readonly exclude?: ReadonlyArray<string>;
};

export type MigrationsListForOrgRequestHeaders = {};

export type MigrationsListForOrgRequestParams = { readonly org: string };

export type MigrationsListForOrgRequestBody = never;

export type MigrationsListForOrgResponseStatus = 200;

export type Migration = {
  readonly id: number;
  readonly owner: SimpleUser;
  readonly guid: string;
  readonly state: string;
  readonly lock_repositories: boolean;
  readonly exclude_metadata: boolean;
  readonly exclude_git_data: boolean;
  readonly exclude_attachments: boolean;
  readonly exclude_releases: boolean;
  readonly exclude_owner_projects: boolean;
  readonly org_metadata_only: boolean;
  readonly repositories: ReadonlyArray<Repository>;
  readonly url: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly node_id: string;
  readonly archive_url?: string;
  readonly exclude?: ReadonlyArray<never>;
};

export type MigrationsListForOrgResponseBody = ReadonlyArray<Migration>;

export type MigrationsListForOrgResolver = msw.HttpResponseResolver<
  MigrationsListForOrgRequestParams,
  MigrationsListForOrgRequestBody,
  MigrationsListForOrgResponseBody
>;

export type MigrationsStartForOrgRequestQuery = {};

export type MigrationsStartForOrgRequestHeaders = {};

export type MigrationsStartForOrgRequestParams = { readonly org: string };

export type MigrationsStartForOrgRequestBody = {
  readonly repositories: ReadonlyArray<string>;
  readonly lock_repositories?: boolean;
  readonly exclude_metadata?: boolean;
  readonly exclude_git_data?: boolean;
  readonly exclude_attachments?: boolean;
  readonly exclude_releases?: boolean;
  readonly exclude_owner_projects?: boolean;
  readonly org_metadata_only?: boolean;
  readonly exclude?: ReadonlyArray<'repositories'>;
};

export type MigrationsStartForOrgResponseStatus = 201 | 404 | 422;

export type MigrationsStartForOrgResponseBody =
  | Migration
  | BasicError
  | ValidationError;

export type MigrationsStartForOrgResolver = msw.HttpResponseResolver<
  MigrationsStartForOrgRequestParams,
  MigrationsStartForOrgRequestBody,
  MigrationsStartForOrgResponseBody
>;

export type MigrationsGetStatusForOrgRequestQuery = {
  readonly exclude?: ReadonlyArray<string>;
};

export type MigrationsGetStatusForOrgRequestHeaders = {};

export type MigrationsGetStatusForOrgRequestParams = {
  readonly org: string;
  readonly migration_id: string;
};

export type MigrationsGetStatusForOrgRequestBody = never;

export type MigrationsGetStatusForOrgResponseStatus = 200 | 404;

export type MigrationsGetStatusForOrgResponseBody = Migration | BasicError;

export type MigrationsGetStatusForOrgResolver = msw.HttpResponseResolver<
  MigrationsGetStatusForOrgRequestParams,
  MigrationsGetStatusForOrgRequestBody,
  MigrationsGetStatusForOrgResponseBody
>;

export type MigrationsDownloadArchiveForOrgRequestQuery = {};

export type MigrationsDownloadArchiveForOrgRequestHeaders = {};

export type MigrationsDownloadArchiveForOrgRequestParams = {
  readonly org: string;
  readonly migration_id: string;
};

export type MigrationsDownloadArchiveForOrgRequestBody = never;

export type MigrationsDownloadArchiveForOrgResponseStatus = 302 | 404;

export type MigrationsDownloadArchiveForOrgResponseBody = never | BasicError;

export type MigrationsDownloadArchiveForOrgResolver = msw.HttpResponseResolver<
  MigrationsDownloadArchiveForOrgRequestParams,
  MigrationsDownloadArchiveForOrgRequestBody,
  MigrationsDownloadArchiveForOrgResponseBody
>;

export type MigrationsDeleteArchiveForOrgRequestQuery = {};

export type MigrationsDeleteArchiveForOrgRequestHeaders = {};

export type MigrationsDeleteArchiveForOrgRequestParams = {
  readonly org: string;
  readonly migration_id: string;
};

export type MigrationsDeleteArchiveForOrgRequestBody = never;

export type MigrationsDeleteArchiveForOrgResponseStatus = 204 | 404;

export type MigrationsDeleteArchiveForOrgResponseBody = never | BasicError;

export type MigrationsDeleteArchiveForOrgResolver = msw.HttpResponseResolver<
  MigrationsDeleteArchiveForOrgRequestParams,
  MigrationsDeleteArchiveForOrgRequestBody,
  MigrationsDeleteArchiveForOrgResponseBody
>;

export type MigrationsUnlockRepoForOrgRequestQuery = {};

export type MigrationsUnlockRepoForOrgRequestHeaders = {};

export type MigrationsUnlockRepoForOrgRequestParams = {
  readonly org: string;
  readonly migration_id: string;
  readonly repo_name: string;
};

export type MigrationsUnlockRepoForOrgRequestBody = never;

export type MigrationsUnlockRepoForOrgResponseStatus = 204 | 404;

export type MigrationsUnlockRepoForOrgResponseBody = never | BasicError;

export type MigrationsUnlockRepoForOrgResolver = msw.HttpResponseResolver<
  MigrationsUnlockRepoForOrgRequestParams,
  MigrationsUnlockRepoForOrgRequestBody,
  MigrationsUnlockRepoForOrgResponseBody
>;

export type MigrationsListReposForOrgRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type MigrationsListReposForOrgRequestHeaders = {};

export type MigrationsListReposForOrgRequestParams = {
  readonly org: string;
  readonly migration_id: string;
};

export type MigrationsListReposForOrgRequestBody = never;

export type MigrationsListReposForOrgResponseStatus = 200 | 404;

export type MigrationsListReposForOrgResponseBody =
  | ReadonlyArray<MinimalRepository>
  | BasicError;

export type MigrationsListReposForOrgResolver = msw.HttpResponseResolver<
  MigrationsListReposForOrgRequestParams,
  MigrationsListReposForOrgRequestBody,
  MigrationsListReposForOrgResponseBody
>;

export type OrgsListOutsideCollaboratorsRequestQuery = {
  readonly filter?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type OrgsListOutsideCollaboratorsRequestHeaders = {};

export type OrgsListOutsideCollaboratorsRequestParams = {
  readonly org: string;
};

export type OrgsListOutsideCollaboratorsRequestBody = never;

export type OrgsListOutsideCollaboratorsResponseStatus = 200;

export type OrgsListOutsideCollaboratorsResponseBody = ReadonlyArray<SimpleUser>;

export type OrgsListOutsideCollaboratorsResolver = msw.HttpResponseResolver<
  OrgsListOutsideCollaboratorsRequestParams,
  OrgsListOutsideCollaboratorsRequestBody,
  OrgsListOutsideCollaboratorsResponseBody
>;

export type OrgsConvertMemberToOutsideCollaboratorRequestQuery = {};

export type OrgsConvertMemberToOutsideCollaboratorRequestHeaders = {};

export type OrgsConvertMemberToOutsideCollaboratorRequestParams = {
  readonly org: string;
  readonly username: string;
};

export type OrgsConvertMemberToOutsideCollaboratorRequestBody =
  | { readonly async?: boolean }
  | undefined;

export type OrgsConvertMemberToOutsideCollaboratorResponseStatus =
  | 202
  | 204
  | 403
  | 404;

export type OrgsConvertMemberToOutsideCollaboratorResponseBody =
  | {}
  | never
  | BasicError;

export type OrgsConvertMemberToOutsideCollaboratorResolver = msw.HttpResponseResolver<
  OrgsConvertMemberToOutsideCollaboratorRequestParams,
  OrgsConvertMemberToOutsideCollaboratorRequestBody,
  OrgsConvertMemberToOutsideCollaboratorResponseBody
>;

export type OrgsRemoveOutsideCollaboratorRequestQuery = {};

export type OrgsRemoveOutsideCollaboratorRequestHeaders = {};

export type OrgsRemoveOutsideCollaboratorRequestParams = {
  readonly org: string;
  readonly username: string;
};

export type OrgsRemoveOutsideCollaboratorRequestBody = never;

export type OrgsRemoveOutsideCollaboratorResponseStatus = 204 | 422;

export type OrgsRemoveOutsideCollaboratorResponseBody =
  | never
  | { readonly message?: string; readonly documentation_url?: string };

export type OrgsRemoveOutsideCollaboratorResolver = msw.HttpResponseResolver<
  OrgsRemoveOutsideCollaboratorRequestParams,
  OrgsRemoveOutsideCollaboratorRequestBody,
  OrgsRemoveOutsideCollaboratorResponseBody
>;

export type PackagesListPackagesForOrganizationRequestQuery = {
  readonly package_type: string;
  readonly visibility?: string;
};

export type PackagesListPackagesForOrganizationRequestHeaders = {};

export type PackagesListPackagesForOrganizationRequestParams = {
  readonly org: string;
};

export type PackagesListPackagesForOrganizationRequestBody = never;

export type PackagesListPackagesForOrganizationResponseStatus = 200 | 401 | 403;

export type Package = {
  readonly id: number;
  readonly name: string;
  readonly package_type:
    | 'npm'
    | 'maven'
    | 'rubygems'
    | 'docker'
    | 'nuget'
    | 'container';
  readonly url: string;
  readonly html_url: string;
  readonly version_count: number;
  readonly visibility: 'private' | 'public';
  readonly owner?: SimpleUser;
  readonly repository?: MinimalRepository;
  readonly created_at: string;
  readonly updated_at: string;
};

export type PackagesListPackagesForOrganizationResponseBody =
  | ReadonlyArray<Package>
  | BasicError;

export type PackagesListPackagesForOrganizationResolver = msw.HttpResponseResolver<
  PackagesListPackagesForOrganizationRequestParams,
  PackagesListPackagesForOrganizationRequestBody,
  PackagesListPackagesForOrganizationResponseBody
>;

export type PackagesGetPackageForOrganizationRequestQuery = {};

export type PackagesGetPackageForOrganizationRequestHeaders = {};

export type PackagesGetPackageForOrganizationRequestParams = {
  readonly package_type: string;
  readonly package_name: string;
  readonly org: string;
};

export type PackagesGetPackageForOrganizationRequestBody = never;

export type PackagesGetPackageForOrganizationResponseStatus = 200;

export type PackagesGetPackageForOrganizationResponseBody = Package;

export type PackagesGetPackageForOrganizationResolver = msw.HttpResponseResolver<
  PackagesGetPackageForOrganizationRequestParams,
  PackagesGetPackageForOrganizationRequestBody,
  PackagesGetPackageForOrganizationResponseBody
>;

export type PackagesDeletePackageForOrgRequestQuery = {};

export type PackagesDeletePackageForOrgRequestHeaders = {};

export type PackagesDeletePackageForOrgRequestParams = {
  readonly package_type: string;
  readonly package_name: string;
  readonly org: string;
};

export type PackagesDeletePackageForOrgRequestBody = never;

export type PackagesDeletePackageForOrgResponseStatus = 204 | 401 | 403 | 404;

export type PackagesDeletePackageForOrgResponseBody = never | BasicError;

export type PackagesDeletePackageForOrgResolver = msw.HttpResponseResolver<
  PackagesDeletePackageForOrgRequestParams,
  PackagesDeletePackageForOrgRequestBody,
  PackagesDeletePackageForOrgResponseBody
>;

export type PackagesRestorePackageForOrgRequestQuery = {
  readonly token?: string;
};

export type PackagesRestorePackageForOrgRequestHeaders = {};

export type PackagesRestorePackageForOrgRequestParams = {
  readonly package_type: string;
  readonly package_name: string;
  readonly org: string;
};

export type PackagesRestorePackageForOrgRequestBody = never;

export type PackagesRestorePackageForOrgResponseStatus = 204 | 401 | 403 | 404;

export type PackagesRestorePackageForOrgResponseBody = never | BasicError;

export type PackagesRestorePackageForOrgResolver = msw.HttpResponseResolver<
  PackagesRestorePackageForOrgRequestParams,
  PackagesRestorePackageForOrgRequestBody,
  PackagesRestorePackageForOrgResponseBody
>;

export type PackagesGetAllPackageVersionsForPackageOwnedByOrgRequestQuery = {
  readonly page?: string;
  readonly per_page?: string;
  readonly state?: string;
};

export type PackagesGetAllPackageVersionsForPackageOwnedByOrgRequestHeaders = {};

export type PackagesGetAllPackageVersionsForPackageOwnedByOrgRequestParams = {
  readonly package_type: string;
  readonly package_name: string;
  readonly org: string;
};

export type PackagesGetAllPackageVersionsForPackageOwnedByOrgRequestBody = never;

export type PackagesGetAllPackageVersionsForPackageOwnedByOrgResponseStatus =
  | 200
  | 401
  | 403
  | 404;

export type ContainerMetadata = { readonly tags: ReadonlyArray<string> };

export type DockerMetadata = { readonly tag?: ReadonlyArray<string> };

export type PackageVersionMetadata = {
  readonly package_type:
    | 'npm'
    | 'maven'
    | 'rubygems'
    | 'docker'
    | 'nuget'
    | 'container';
  readonly container?: ContainerMetadata;
  readonly docker?: DockerMetadata;
};

export type PackageVersion = {
  readonly id: number;
  readonly name: string;
  readonly url: string;
  readonly package_html_url: string;
  readonly html_url?: string;
  readonly license?: string;
  readonly description?: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly deleted_at?: string;
  readonly metadata?: PackageVersionMetadata;
};

export type PackagesGetAllPackageVersionsForPackageOwnedByOrgResponseBody =
  | ReadonlyArray<PackageVersion>
  | BasicError;

export type PackagesGetAllPackageVersionsForPackageOwnedByOrgResolver = msw.HttpResponseResolver<
  PackagesGetAllPackageVersionsForPackageOwnedByOrgRequestParams,
  PackagesGetAllPackageVersionsForPackageOwnedByOrgRequestBody,
  PackagesGetAllPackageVersionsForPackageOwnedByOrgResponseBody
>;

export type PackagesGetPackageVersionForOrganizationRequestQuery = {};

export type PackagesGetPackageVersionForOrganizationRequestHeaders = {};

export type PackagesGetPackageVersionForOrganizationRequestParams = {
  readonly package_type: string;
  readonly package_name: string;
  readonly org: string;
  readonly package_version_id: string;
};

export type PackagesGetPackageVersionForOrganizationRequestBody = never;

export type PackagesGetPackageVersionForOrganizationResponseStatus = 200;

export type PackagesGetPackageVersionForOrganizationResponseBody = PackageVersion;

export type PackagesGetPackageVersionForOrganizationResolver = msw.HttpResponseResolver<
  PackagesGetPackageVersionForOrganizationRequestParams,
  PackagesGetPackageVersionForOrganizationRequestBody,
  PackagesGetPackageVersionForOrganizationResponseBody
>;

export type PackagesDeletePackageVersionForOrgRequestQuery = {};

export type PackagesDeletePackageVersionForOrgRequestHeaders = {};

export type PackagesDeletePackageVersionForOrgRequestParams = {
  readonly package_type: string;
  readonly package_name: string;
  readonly org: string;
  readonly package_version_id: string;
};

export type PackagesDeletePackageVersionForOrgRequestBody = never;

export type PackagesDeletePackageVersionForOrgResponseStatus =
  | 204
  | 401
  | 403
  | 404;

export type PackagesDeletePackageVersionForOrgResponseBody = never | BasicError;

export type PackagesDeletePackageVersionForOrgResolver = msw.HttpResponseResolver<
  PackagesDeletePackageVersionForOrgRequestParams,
  PackagesDeletePackageVersionForOrgRequestBody,
  PackagesDeletePackageVersionForOrgResponseBody
>;

export type PackagesRestorePackageVersionForOrgRequestQuery = {};

export type PackagesRestorePackageVersionForOrgRequestHeaders = {};

export type PackagesRestorePackageVersionForOrgRequestParams = {
  readonly package_type: string;
  readonly package_name: string;
  readonly org: string;
  readonly package_version_id: string;
};

export type PackagesRestorePackageVersionForOrgRequestBody = never;

export type PackagesRestorePackageVersionForOrgResponseStatus =
  | 204
  | 401
  | 403
  | 404;

export type PackagesRestorePackageVersionForOrgResponseBody =
  | never
  | BasicError;

export type PackagesRestorePackageVersionForOrgResolver = msw.HttpResponseResolver<
  PackagesRestorePackageVersionForOrgRequestParams,
  PackagesRestorePackageVersionForOrgRequestBody,
  PackagesRestorePackageVersionForOrgResponseBody
>;

export type ProjectsListForOrgRequestQuery = {
  readonly state?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ProjectsListForOrgRequestHeaders = {};

export type ProjectsListForOrgRequestParams = { readonly org: string };

export type ProjectsListForOrgRequestBody = never;

export type ProjectsListForOrgResponseStatus = 200 | 422;

export type Project = {
  readonly owner_url: string;
  readonly url: string;
  readonly html_url: string;
  readonly columns_url: string;
  readonly id: number;
  readonly node_id: string;
  readonly name: string;
  readonly body: string | null;
  readonly number: number;
  readonly state: string;
  readonly creator: SimpleUser;
  readonly created_at: string;
  readonly updated_at: string;
  readonly organization_permission?: 'read' | 'write' | 'admin' | 'none';
  readonly private?: boolean;
};

export type ProjectsListForOrgResponseBody =
  | ReadonlyArray<Project>
  | ValidationErrorSimple;

export type ProjectsListForOrgResolver = msw.HttpResponseResolver<
  ProjectsListForOrgRequestParams,
  ProjectsListForOrgRequestBody,
  ProjectsListForOrgResponseBody
>;

export type ProjectsCreateForOrgRequestQuery = {};

export type ProjectsCreateForOrgRequestHeaders = {};

export type ProjectsCreateForOrgRequestParams = { readonly org: string };

export type ProjectsCreateForOrgRequestBody = {
  readonly name: string;
  readonly body?: string;
};

export type ProjectsCreateForOrgResponseStatus =
  | 201
  | 401
  | 403
  | 404
  | 410
  | 422;

export type ProjectsCreateForOrgResponseBody =
  | Project
  | BasicError
  | ValidationErrorSimple;

export type ProjectsCreateForOrgResolver = msw.HttpResponseResolver<
  ProjectsCreateForOrgRequestParams,
  ProjectsCreateForOrgRequestBody,
  ProjectsCreateForOrgResponseBody
>;

export type OrgsListPublicMembersRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type OrgsListPublicMembersRequestHeaders = {};

export type OrgsListPublicMembersRequestParams = { readonly org: string };

export type OrgsListPublicMembersRequestBody = never;

export type OrgsListPublicMembersResponseStatus = 200;

export type OrgsListPublicMembersResponseBody = ReadonlyArray<SimpleUser>;

export type OrgsListPublicMembersResolver = msw.HttpResponseResolver<
  OrgsListPublicMembersRequestParams,
  OrgsListPublicMembersRequestBody,
  OrgsListPublicMembersResponseBody
>;

export type OrgsCheckPublicMembershipForUserRequestQuery = {};

export type OrgsCheckPublicMembershipForUserRequestHeaders = {};

export type OrgsCheckPublicMembershipForUserRequestParams = {
  readonly org: string;
  readonly username: string;
};

export type OrgsCheckPublicMembershipForUserRequestBody = never;

export type OrgsCheckPublicMembershipForUserResponseStatus = 204 | 404;

export type OrgsCheckPublicMembershipForUserResponseBody = never;

export type OrgsCheckPublicMembershipForUserResolver = msw.HttpResponseResolver<
  OrgsCheckPublicMembershipForUserRequestParams,
  OrgsCheckPublicMembershipForUserRequestBody,
  OrgsCheckPublicMembershipForUserResponseBody
>;

export type OrgsSetPublicMembershipForAuthenticatedUserRequestQuery = {};

export type OrgsSetPublicMembershipForAuthenticatedUserRequestHeaders = {};

export type OrgsSetPublicMembershipForAuthenticatedUserRequestParams = {
  readonly org: string;
  readonly username: string;
};

export type OrgsSetPublicMembershipForAuthenticatedUserRequestBody = never;

export type OrgsSetPublicMembershipForAuthenticatedUserResponseStatus =
  | 204
  | 403;

export type OrgsSetPublicMembershipForAuthenticatedUserResponseBody =
  | never
  | BasicError;

export type OrgsSetPublicMembershipForAuthenticatedUserResolver = msw.HttpResponseResolver<
  OrgsSetPublicMembershipForAuthenticatedUserRequestParams,
  OrgsSetPublicMembershipForAuthenticatedUserRequestBody,
  OrgsSetPublicMembershipForAuthenticatedUserResponseBody
>;

export type OrgsRemovePublicMembershipForAuthenticatedUserRequestQuery = {};

export type OrgsRemovePublicMembershipForAuthenticatedUserRequestHeaders = {};

export type OrgsRemovePublicMembershipForAuthenticatedUserRequestParams = {
  readonly org: string;
  readonly username: string;
};

export type OrgsRemovePublicMembershipForAuthenticatedUserRequestBody = never;

export type OrgsRemovePublicMembershipForAuthenticatedUserResponseStatus = 204;

export type OrgsRemovePublicMembershipForAuthenticatedUserResponseBody = never;

export type OrgsRemovePublicMembershipForAuthenticatedUserResolver = msw.HttpResponseResolver<
  OrgsRemovePublicMembershipForAuthenticatedUserRequestParams,
  OrgsRemovePublicMembershipForAuthenticatedUserRequestBody,
  OrgsRemovePublicMembershipForAuthenticatedUserResponseBody
>;

export type ReposListForOrgRequestQuery = {
  readonly type?: string;
  readonly sort?: string;
  readonly direction?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListForOrgRequestHeaders = {};

export type ReposListForOrgRequestParams = { readonly org: string };

export type ReposListForOrgRequestBody = never;

export type ReposListForOrgResponseStatus = 200;

export type ReposListForOrgResponseBody = ReadonlyArray<MinimalRepository>;

export type ReposListForOrgResolver = msw.HttpResponseResolver<
  ReposListForOrgRequestParams,
  ReposListForOrgRequestBody,
  ReposListForOrgResponseBody
>;

export type ReposCreateInOrgRequestQuery = {};

export type ReposCreateInOrgRequestHeaders = {};

export type ReposCreateInOrgRequestParams = { readonly org: string };

export type ReposCreateInOrgRequestBody = {
  readonly name: string;
  readonly description?: string;
  readonly homepage?: string;
  readonly private?: boolean;
  readonly visibility?: 'public' | 'private' | 'internal';
  readonly has_issues?: boolean;
  readonly has_projects?: boolean;
  readonly has_wiki?: boolean;
  readonly is_template?: boolean;
  readonly team_id?: number;
  readonly auto_init?: boolean;
  readonly gitignore_template?: string;
  readonly license_template?: string;
  readonly allow_squash_merge?: boolean;
  readonly allow_merge_commit?: boolean;
  readonly allow_rebase_merge?: boolean;
  readonly allow_auto_merge?: boolean;
  readonly delete_branch_on_merge?: boolean;
  readonly use_squash_pr_title_as_default?: boolean;
  readonly squash_merge_commit_title?: 'PR_TITLE' | 'COMMIT_OR_PR_TITLE';
  readonly squash_merge_commit_message?:
    | 'PR_BODY'
    | 'COMMIT_MESSAGES'
    | 'BLANK';
  readonly merge_commit_title?: 'PR_TITLE' | 'MERGE_MESSAGE';
  readonly merge_commit_message?: 'PR_BODY' | 'PR_TITLE' | 'BLANK';
};

export type ReposCreateInOrgResponseStatus = 201 | 403 | 422;

export type ReposCreateInOrgResponseBody =
  | Repository
  | BasicError
  | ValidationError;

export type ReposCreateInOrgResolver = msw.HttpResponseResolver<
  ReposCreateInOrgRequestParams,
  ReposCreateInOrgRequestBody,
  ReposCreateInOrgResponseBody
>;

export type SecretScanningListAlertsForOrgRequestQuery = {
  readonly state?: string;
  readonly secret_type?: string;
  readonly resolution?: string;
  readonly sort?: string;
  readonly direction?: string;
  readonly page?: string;
  readonly per_page?: string;
  readonly before?: string;
  readonly after?: string;
};

export type SecretScanningListAlertsForOrgRequestHeaders = {};

export type SecretScanningListAlertsForOrgRequestParams = {
  readonly org: string;
};

export type SecretScanningListAlertsForOrgRequestBody = never;

export type SecretScanningListAlertsForOrgResponseStatus = 200 | 404 | 503;

export type SecretScanningListAlertsForOrgResponseBody =
  | ReadonlyArray<OrganizationSecretScanningAlert>
  | BasicError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type SecretScanningListAlertsForOrgResolver = msw.HttpResponseResolver<
  SecretScanningListAlertsForOrgRequestParams,
  SecretScanningListAlertsForOrgRequestBody,
  SecretScanningListAlertsForOrgResponseBody
>;

export type OrgsListSecurityManagerTeamsRequestQuery = {};

export type OrgsListSecurityManagerTeamsRequestHeaders = {};

export type OrgsListSecurityManagerTeamsRequestParams = {
  readonly org: string;
};

export type OrgsListSecurityManagerTeamsRequestBody = never;

export type OrgsListSecurityManagerTeamsResponseStatus = 200;

export type OrgsListSecurityManagerTeamsResponseBody = ReadonlyArray<TeamSimple>;

export type OrgsListSecurityManagerTeamsResolver = msw.HttpResponseResolver<
  OrgsListSecurityManagerTeamsRequestParams,
  OrgsListSecurityManagerTeamsRequestBody,
  OrgsListSecurityManagerTeamsResponseBody
>;

export type OrgsAddSecurityManagerTeamRequestQuery = {};

export type OrgsAddSecurityManagerTeamRequestHeaders = {};

export type OrgsAddSecurityManagerTeamRequestParams = {
  readonly org: string;
  readonly team_slug: string;
};

export type OrgsAddSecurityManagerTeamRequestBody = never;

export type OrgsAddSecurityManagerTeamResponseStatus = 204 | 409;

export type OrgsAddSecurityManagerTeamResponseBody = never;

export type OrgsAddSecurityManagerTeamResolver = msw.HttpResponseResolver<
  OrgsAddSecurityManagerTeamRequestParams,
  OrgsAddSecurityManagerTeamRequestBody,
  OrgsAddSecurityManagerTeamResponseBody
>;

export type OrgsRemoveSecurityManagerTeamRequestQuery = {};

export type OrgsRemoveSecurityManagerTeamRequestHeaders = {};

export type OrgsRemoveSecurityManagerTeamRequestParams = {
  readonly org: string;
  readonly team_slug: string;
};

export type OrgsRemoveSecurityManagerTeamRequestBody = never;

export type OrgsRemoveSecurityManagerTeamResponseStatus = 204;

export type OrgsRemoveSecurityManagerTeamResponseBody = never;

export type OrgsRemoveSecurityManagerTeamResolver = msw.HttpResponseResolver<
  OrgsRemoveSecurityManagerTeamRequestParams,
  OrgsRemoveSecurityManagerTeamRequestBody,
  OrgsRemoveSecurityManagerTeamResponseBody
>;

export type BillingGetGithubActionsBillingOrgRequestQuery = {};

export type BillingGetGithubActionsBillingOrgRequestHeaders = {};

export type BillingGetGithubActionsBillingOrgRequestParams = {
  readonly org: string;
};

export type BillingGetGithubActionsBillingOrgRequestBody = never;

export type BillingGetGithubActionsBillingOrgResponseStatus = 200;

export type ActionsBillingUsage = {
  readonly total_minutes_used: number;
  readonly total_paid_minutes_used: number;
  readonly included_minutes: number;
  readonly minutes_used_breakdown: {
    readonly UBUNTU?: number;
    readonly MACOS?: number;
    readonly WINDOWS?: number;
    readonly ubuntu_4_core?: number;
    readonly ubuntu_8_core?: number;
    readonly ubuntu_16_core?: number;
    readonly ubuntu_32_core?: number;
    readonly ubuntu_64_core?: number;
    readonly windows_4_core?: number;
    readonly windows_8_core?: number;
    readonly windows_16_core?: number;
    readonly windows_32_core?: number;
    readonly windows_64_core?: number;
    readonly total?: number;
  };
};

export type BillingGetGithubActionsBillingOrgResponseBody = ActionsBillingUsage;

export type BillingGetGithubActionsBillingOrgResolver = msw.HttpResponseResolver<
  BillingGetGithubActionsBillingOrgRequestParams,
  BillingGetGithubActionsBillingOrgRequestBody,
  BillingGetGithubActionsBillingOrgResponseBody
>;

export type BillingGetGithubAdvancedSecurityBillingOrgRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type BillingGetGithubAdvancedSecurityBillingOrgRequestHeaders = {};

export type BillingGetGithubAdvancedSecurityBillingOrgRequestParams = {
  readonly org: string;
};

export type BillingGetGithubAdvancedSecurityBillingOrgRequestBody = never;

export type BillingGetGithubAdvancedSecurityBillingOrgResponseStatus =
  | 200
  | 403;

export type BillingGetGithubAdvancedSecurityBillingOrgResponseBody =
  | AdvancedSecurityActiveCommitters
  | BasicError;

export type BillingGetGithubAdvancedSecurityBillingOrgResolver = msw.HttpResponseResolver<
  BillingGetGithubAdvancedSecurityBillingOrgRequestParams,
  BillingGetGithubAdvancedSecurityBillingOrgRequestBody,
  BillingGetGithubAdvancedSecurityBillingOrgResponseBody
>;

export type BillingGetGithubPackagesBillingOrgRequestQuery = {};

export type BillingGetGithubPackagesBillingOrgRequestHeaders = {};

export type BillingGetGithubPackagesBillingOrgRequestParams = {
  readonly org: string;
};

export type BillingGetGithubPackagesBillingOrgRequestBody = never;

export type BillingGetGithubPackagesBillingOrgResponseStatus = 200;

export type PackagesBillingUsage = {
  readonly total_gigabytes_bandwidth_used: number;
  readonly total_paid_gigabytes_bandwidth_used: number;
  readonly included_gigabytes_bandwidth: number;
};

export type BillingGetGithubPackagesBillingOrgResponseBody = PackagesBillingUsage;

export type BillingGetGithubPackagesBillingOrgResolver = msw.HttpResponseResolver<
  BillingGetGithubPackagesBillingOrgRequestParams,
  BillingGetGithubPackagesBillingOrgRequestBody,
  BillingGetGithubPackagesBillingOrgResponseBody
>;

export type BillingGetSharedStorageBillingOrgRequestQuery = {};

export type BillingGetSharedStorageBillingOrgRequestHeaders = {};

export type BillingGetSharedStorageBillingOrgRequestParams = {
  readonly org: string;
};

export type BillingGetSharedStorageBillingOrgRequestBody = never;

export type BillingGetSharedStorageBillingOrgResponseStatus = 200;

export type CombinedBillingUsage = {
  readonly days_left_in_billing_cycle: number;
  readonly estimated_paid_storage_for_month: number;
  readonly estimated_storage_for_month: number;
};

export type BillingGetSharedStorageBillingOrgResponseBody = CombinedBillingUsage;

export type BillingGetSharedStorageBillingOrgResolver = msw.HttpResponseResolver<
  BillingGetSharedStorageBillingOrgRequestParams,
  BillingGetSharedStorageBillingOrgRequestBody,
  BillingGetSharedStorageBillingOrgResponseBody
>;

export type TeamsListRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type TeamsListRequestHeaders = {};

export type TeamsListRequestParams = { readonly org: string };

export type TeamsListRequestBody = never;

export type TeamsListResponseStatus = 200 | 403;

export type TeamsListResponseBody = ReadonlyArray<Team> | BasicError;

export type TeamsListResolver = msw.HttpResponseResolver<
  TeamsListRequestParams,
  TeamsListRequestBody,
  TeamsListResponseBody
>;

export type TeamsCreateRequestQuery = {};

export type TeamsCreateRequestHeaders = {};

export type TeamsCreateRequestParams = { readonly org: string };

export type TeamsCreateRequestBody = {
  readonly name: string;
  readonly description?: string;
  readonly maintainers?: ReadonlyArray<string>;
  readonly repo_names?: ReadonlyArray<string>;
  readonly privacy?: 'secret' | 'closed';
  readonly permission?: 'pull' | 'push';
  readonly parent_team_id?: number;
};

export type TeamsCreateResponseStatus = 201 | 403 | 422;

export type TeamOrganization = {
  readonly login: string;
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly repos_url: string;
  readonly events_url: string;
  readonly hooks_url: string;
  readonly issues_url: string;
  readonly members_url: string;
  readonly public_members_url: string;
  readonly avatar_url: string;
  readonly description: string | null;
  readonly name?: string;
  readonly company?: string;
  readonly blog?: string;
  readonly location?: string;
  readonly email?: string;
  readonly twitter_username?: string | null;
  readonly is_verified?: boolean;
  readonly has_organization_projects: boolean;
  readonly has_repository_projects: boolean;
  readonly public_repos: number;
  readonly public_gists: number;
  readonly followers: number;
  readonly following: number;
  readonly html_url: string;
  readonly created_at: string;
  readonly type: string;
  readonly total_private_repos?: number;
  readonly owned_private_repos?: number;
  readonly private_gists?: number | null;
  readonly disk_usage?: number | null;
  readonly collaborators?: number | null;
  readonly billing_email?: string | null;
  readonly plan?: {
    readonly name: string;
    readonly space: number;
    readonly private_repos: number;
    readonly filled_seats?: number;
    readonly seats?: number;
  };
  readonly default_repository_permission?: string | null;
  readonly members_can_create_repositories?: boolean | null;
  readonly two_factor_requirement_enabled?: boolean | null;
  readonly members_allowed_repository_creation_type?: string;
  readonly members_can_create_public_repositories?: boolean;
  readonly members_can_create_private_repositories?: boolean;
  readonly members_can_create_internal_repositories?: boolean;
  readonly members_can_create_pages?: boolean;
  readonly members_can_create_public_pages?: boolean;
  readonly members_can_create_private_pages?: boolean;
  readonly members_can_fork_private_repositories?: boolean | null;
  readonly web_commit_signoff_required?: boolean;
  readonly updated_at: string;
};

export type FullTeam = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly html_url: string;
  readonly name: string;
  readonly slug: string;
  readonly description: string | null;
  readonly privacy?: 'closed' | 'secret';
  readonly permission: string;
  readonly members_url: string;
  readonly repositories_url: string;
  readonly parent?: TeamSimple;
  readonly members_count: number;
  readonly repos_count: number;
  readonly created_at: string;
  readonly updated_at: string;
  readonly organization: TeamOrganization;
  readonly ldap_dn?: string;
};

export type TeamsCreateResponseBody = FullTeam | BasicError | ValidationError;

export type TeamsCreateResolver = msw.HttpResponseResolver<
  TeamsCreateRequestParams,
  TeamsCreateRequestBody,
  TeamsCreateResponseBody
>;

export type TeamsGetByNameRequestQuery = {};

export type TeamsGetByNameRequestHeaders = {};

export type TeamsGetByNameRequestParams = {
  readonly org: string;
  readonly team_slug: string;
};

export type TeamsGetByNameRequestBody = never;

export type TeamsGetByNameResponseStatus = 200 | 404;

export type TeamsGetByNameResponseBody = FullTeam | BasicError;

export type TeamsGetByNameResolver = msw.HttpResponseResolver<
  TeamsGetByNameRequestParams,
  TeamsGetByNameRequestBody,
  TeamsGetByNameResponseBody
>;

export type TeamsUpdateInOrgRequestQuery = {};

export type TeamsUpdateInOrgRequestHeaders = {};

export type TeamsUpdateInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
};

export type TeamsUpdateInOrgRequestBody =
  | {
      readonly name?: string;
      readonly description?: string;
      readonly privacy?: 'secret' | 'closed';
      readonly permission?: 'pull' | 'push' | 'admin';
      readonly parent_team_id?: number | null;
    }
  | undefined;

export type TeamsUpdateInOrgResponseStatus = 200 | 201 | 403 | 404 | 422;

export type TeamsUpdateInOrgResponseBody =
  | FullTeam
  | BasicError
  | ValidationError;

export type TeamsUpdateInOrgResolver = msw.HttpResponseResolver<
  TeamsUpdateInOrgRequestParams,
  TeamsUpdateInOrgRequestBody,
  TeamsUpdateInOrgResponseBody
>;

export type TeamsDeleteInOrgRequestQuery = {};

export type TeamsDeleteInOrgRequestHeaders = {};

export type TeamsDeleteInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
};

export type TeamsDeleteInOrgRequestBody = never;

export type TeamsDeleteInOrgResponseStatus = 204;

export type TeamsDeleteInOrgResponseBody = never;

export type TeamsDeleteInOrgResolver = msw.HttpResponseResolver<
  TeamsDeleteInOrgRequestParams,
  TeamsDeleteInOrgRequestBody,
  TeamsDeleteInOrgResponseBody
>;

export type TeamsListDiscussionsInOrgRequestQuery = {
  readonly direction?: string;
  readonly per_page?: string;
  readonly page?: string;
  readonly pinned?: string;
};

export type TeamsListDiscussionsInOrgRequestHeaders = {};

export type TeamsListDiscussionsInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
};

export type TeamsListDiscussionsInOrgRequestBody = never;

export type TeamsListDiscussionsInOrgResponseStatus = 200;

export type TeamDiscussion = {
  readonly author: SimpleUser;
  readonly body: string;
  readonly body_html: string;
  readonly body_version: string;
  readonly comments_count: number;
  readonly comments_url: string;
  readonly created_at: string;
  readonly last_edited_at: string | null;
  readonly html_url: string;
  readonly node_id: string;
  readonly number: number;
  readonly pinned: boolean;
  readonly private: boolean;
  readonly team_url: string;
  readonly title: string;
  readonly updated_at: string;
  readonly url: string;
  readonly reactions?: ReactionRollup;
};

export type TeamsListDiscussionsInOrgResponseBody = ReadonlyArray<TeamDiscussion>;

export type TeamsListDiscussionsInOrgResolver = msw.HttpResponseResolver<
  TeamsListDiscussionsInOrgRequestParams,
  TeamsListDiscussionsInOrgRequestBody,
  TeamsListDiscussionsInOrgResponseBody
>;

export type TeamsCreateDiscussionInOrgRequestQuery = {};

export type TeamsCreateDiscussionInOrgRequestHeaders = {};

export type TeamsCreateDiscussionInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
};

export type TeamsCreateDiscussionInOrgRequestBody = {
  readonly title: string;
  readonly body: string;
  readonly private?: boolean;
};

export type TeamsCreateDiscussionInOrgResponseStatus = 201;

export type TeamsCreateDiscussionInOrgResponseBody = TeamDiscussion;

export type TeamsCreateDiscussionInOrgResolver = msw.HttpResponseResolver<
  TeamsCreateDiscussionInOrgRequestParams,
  TeamsCreateDiscussionInOrgRequestBody,
  TeamsCreateDiscussionInOrgResponseBody
>;

export type TeamsGetDiscussionInOrgRequestQuery = {};

export type TeamsGetDiscussionInOrgRequestHeaders = {};

export type TeamsGetDiscussionInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly discussion_number: string;
};

export type TeamsGetDiscussionInOrgRequestBody = never;

export type TeamsGetDiscussionInOrgResponseStatus = 200;

export type TeamsGetDiscussionInOrgResponseBody = TeamDiscussion;

export type TeamsGetDiscussionInOrgResolver = msw.HttpResponseResolver<
  TeamsGetDiscussionInOrgRequestParams,
  TeamsGetDiscussionInOrgRequestBody,
  TeamsGetDiscussionInOrgResponseBody
>;

export type TeamsUpdateDiscussionInOrgRequestQuery = {};

export type TeamsUpdateDiscussionInOrgRequestHeaders = {};

export type TeamsUpdateDiscussionInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly discussion_number: string;
};

export type TeamsUpdateDiscussionInOrgRequestBody =
  | { readonly title?: string; readonly body?: string }
  | undefined;

export type TeamsUpdateDiscussionInOrgResponseStatus = 200;

export type TeamsUpdateDiscussionInOrgResponseBody = TeamDiscussion;

export type TeamsUpdateDiscussionInOrgResolver = msw.HttpResponseResolver<
  TeamsUpdateDiscussionInOrgRequestParams,
  TeamsUpdateDiscussionInOrgRequestBody,
  TeamsUpdateDiscussionInOrgResponseBody
>;

export type TeamsDeleteDiscussionInOrgRequestQuery = {};

export type TeamsDeleteDiscussionInOrgRequestHeaders = {};

export type TeamsDeleteDiscussionInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly discussion_number: string;
};

export type TeamsDeleteDiscussionInOrgRequestBody = never;

export type TeamsDeleteDiscussionInOrgResponseStatus = 204;

export type TeamsDeleteDiscussionInOrgResponseBody = never;

export type TeamsDeleteDiscussionInOrgResolver = msw.HttpResponseResolver<
  TeamsDeleteDiscussionInOrgRequestParams,
  TeamsDeleteDiscussionInOrgRequestBody,
  TeamsDeleteDiscussionInOrgResponseBody
>;

export type TeamsListDiscussionCommentsInOrgRequestQuery = {
  readonly direction?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type TeamsListDiscussionCommentsInOrgRequestHeaders = {};

export type TeamsListDiscussionCommentsInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly discussion_number: string;
};

export type TeamsListDiscussionCommentsInOrgRequestBody = never;

export type TeamsListDiscussionCommentsInOrgResponseStatus = 200;

export type TeamDiscussionComment = {
  readonly author: SimpleUser;
  readonly body: string;
  readonly body_html: string;
  readonly body_version: string;
  readonly created_at: string;
  readonly last_edited_at: string | null;
  readonly discussion_url: string;
  readonly html_url: string;
  readonly node_id: string;
  readonly number: number;
  readonly updated_at: string;
  readonly url: string;
  readonly reactions?: ReactionRollup;
};

export type TeamsListDiscussionCommentsInOrgResponseBody = ReadonlyArray<TeamDiscussionComment>;

export type TeamsListDiscussionCommentsInOrgResolver = msw.HttpResponseResolver<
  TeamsListDiscussionCommentsInOrgRequestParams,
  TeamsListDiscussionCommentsInOrgRequestBody,
  TeamsListDiscussionCommentsInOrgResponseBody
>;

export type TeamsCreateDiscussionCommentInOrgRequestQuery = {};

export type TeamsCreateDiscussionCommentInOrgRequestHeaders = {};

export type TeamsCreateDiscussionCommentInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly discussion_number: string;
};

export type TeamsCreateDiscussionCommentInOrgRequestBody = {
  readonly body: string;
};

export type TeamsCreateDiscussionCommentInOrgResponseStatus = 201;

export type TeamsCreateDiscussionCommentInOrgResponseBody = TeamDiscussionComment;

export type TeamsCreateDiscussionCommentInOrgResolver = msw.HttpResponseResolver<
  TeamsCreateDiscussionCommentInOrgRequestParams,
  TeamsCreateDiscussionCommentInOrgRequestBody,
  TeamsCreateDiscussionCommentInOrgResponseBody
>;

export type TeamsGetDiscussionCommentInOrgRequestQuery = {};

export type TeamsGetDiscussionCommentInOrgRequestHeaders = {};

export type TeamsGetDiscussionCommentInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly discussion_number: string;
  readonly comment_number: string;
};

export type TeamsGetDiscussionCommentInOrgRequestBody = never;

export type TeamsGetDiscussionCommentInOrgResponseStatus = 200;

export type TeamsGetDiscussionCommentInOrgResponseBody = TeamDiscussionComment;

export type TeamsGetDiscussionCommentInOrgResolver = msw.HttpResponseResolver<
  TeamsGetDiscussionCommentInOrgRequestParams,
  TeamsGetDiscussionCommentInOrgRequestBody,
  TeamsGetDiscussionCommentInOrgResponseBody
>;

export type TeamsUpdateDiscussionCommentInOrgRequestQuery = {};

export type TeamsUpdateDiscussionCommentInOrgRequestHeaders = {};

export type TeamsUpdateDiscussionCommentInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly discussion_number: string;
  readonly comment_number: string;
};

export type TeamsUpdateDiscussionCommentInOrgRequestBody = {
  readonly body: string;
};

export type TeamsUpdateDiscussionCommentInOrgResponseStatus = 200;

export type TeamsUpdateDiscussionCommentInOrgResponseBody = TeamDiscussionComment;

export type TeamsUpdateDiscussionCommentInOrgResolver = msw.HttpResponseResolver<
  TeamsUpdateDiscussionCommentInOrgRequestParams,
  TeamsUpdateDiscussionCommentInOrgRequestBody,
  TeamsUpdateDiscussionCommentInOrgResponseBody
>;

export type TeamsDeleteDiscussionCommentInOrgRequestQuery = {};

export type TeamsDeleteDiscussionCommentInOrgRequestHeaders = {};

export type TeamsDeleteDiscussionCommentInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly discussion_number: string;
  readonly comment_number: string;
};

export type TeamsDeleteDiscussionCommentInOrgRequestBody = never;

export type TeamsDeleteDiscussionCommentInOrgResponseStatus = 204;

export type TeamsDeleteDiscussionCommentInOrgResponseBody = never;

export type TeamsDeleteDiscussionCommentInOrgResolver = msw.HttpResponseResolver<
  TeamsDeleteDiscussionCommentInOrgRequestParams,
  TeamsDeleteDiscussionCommentInOrgRequestBody,
  TeamsDeleteDiscussionCommentInOrgResponseBody
>;

export type ReactionsListForTeamDiscussionCommentInOrgRequestQuery = {
  readonly content?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ReactionsListForTeamDiscussionCommentInOrgRequestHeaders = {};

export type ReactionsListForTeamDiscussionCommentInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly discussion_number: string;
  readonly comment_number: string;
};

export type ReactionsListForTeamDiscussionCommentInOrgRequestBody = never;

export type ReactionsListForTeamDiscussionCommentInOrgResponseStatus = 200;

export type Reaction = {
  readonly id: number;
  readonly node_id: string;
  readonly user: SimpleUser;
  readonly content:
    | '+1'
    | '-1'
    | 'laugh'
    | 'confused'
    | 'heart'
    | 'hooray'
    | 'rocket'
    | 'eyes';
  readonly created_at: string;
};

export type ReactionsListForTeamDiscussionCommentInOrgResponseBody = ReadonlyArray<Reaction>;

export type ReactionsListForTeamDiscussionCommentInOrgResolver = msw.HttpResponseResolver<
  ReactionsListForTeamDiscussionCommentInOrgRequestParams,
  ReactionsListForTeamDiscussionCommentInOrgRequestBody,
  ReactionsListForTeamDiscussionCommentInOrgResponseBody
>;

export type ReactionsCreateForTeamDiscussionCommentInOrgRequestQuery = {};

export type ReactionsCreateForTeamDiscussionCommentInOrgRequestHeaders = {};

export type ReactionsCreateForTeamDiscussionCommentInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly discussion_number: string;
  readonly comment_number: string;
};

export type ReactionsCreateForTeamDiscussionCommentInOrgRequestBody = {
  readonly content:
    | '+1'
    | '-1'
    | 'laugh'
    | 'confused'
    | 'heart'
    | 'hooray'
    | 'rocket'
    | 'eyes';
};

export type ReactionsCreateForTeamDiscussionCommentInOrgResponseStatus =
  | 200
  | 201;

export type ReactionsCreateForTeamDiscussionCommentInOrgResponseBody = Reaction;

export type ReactionsCreateForTeamDiscussionCommentInOrgResolver = msw.HttpResponseResolver<
  ReactionsCreateForTeamDiscussionCommentInOrgRequestParams,
  ReactionsCreateForTeamDiscussionCommentInOrgRequestBody,
  ReactionsCreateForTeamDiscussionCommentInOrgResponseBody
>;

export type ReactionsDeleteForTeamDiscussionCommentRequestQuery = {};

export type ReactionsDeleteForTeamDiscussionCommentRequestHeaders = {};

export type ReactionsDeleteForTeamDiscussionCommentRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly discussion_number: string;
  readonly comment_number: string;
  readonly reaction_id: string;
};

export type ReactionsDeleteForTeamDiscussionCommentRequestBody = never;

export type ReactionsDeleteForTeamDiscussionCommentResponseStatus = 204;

export type ReactionsDeleteForTeamDiscussionCommentResponseBody = never;

export type ReactionsDeleteForTeamDiscussionCommentResolver = msw.HttpResponseResolver<
  ReactionsDeleteForTeamDiscussionCommentRequestParams,
  ReactionsDeleteForTeamDiscussionCommentRequestBody,
  ReactionsDeleteForTeamDiscussionCommentResponseBody
>;

export type ReactionsListForTeamDiscussionInOrgRequestQuery = {
  readonly content?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ReactionsListForTeamDiscussionInOrgRequestHeaders = {};

export type ReactionsListForTeamDiscussionInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly discussion_number: string;
};

export type ReactionsListForTeamDiscussionInOrgRequestBody = never;

export type ReactionsListForTeamDiscussionInOrgResponseStatus = 200;

export type ReactionsListForTeamDiscussionInOrgResponseBody = ReadonlyArray<Reaction>;

export type ReactionsListForTeamDiscussionInOrgResolver = msw.HttpResponseResolver<
  ReactionsListForTeamDiscussionInOrgRequestParams,
  ReactionsListForTeamDiscussionInOrgRequestBody,
  ReactionsListForTeamDiscussionInOrgResponseBody
>;

export type ReactionsCreateForTeamDiscussionInOrgRequestQuery = {};

export type ReactionsCreateForTeamDiscussionInOrgRequestHeaders = {};

export type ReactionsCreateForTeamDiscussionInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly discussion_number: string;
};

export type ReactionsCreateForTeamDiscussionInOrgRequestBody = {
  readonly content:
    | '+1'
    | '-1'
    | 'laugh'
    | 'confused'
    | 'heart'
    | 'hooray'
    | 'rocket'
    | 'eyes';
};

export type ReactionsCreateForTeamDiscussionInOrgResponseStatus = 200 | 201;

export type ReactionsCreateForTeamDiscussionInOrgResponseBody = Reaction;

export type ReactionsCreateForTeamDiscussionInOrgResolver = msw.HttpResponseResolver<
  ReactionsCreateForTeamDiscussionInOrgRequestParams,
  ReactionsCreateForTeamDiscussionInOrgRequestBody,
  ReactionsCreateForTeamDiscussionInOrgResponseBody
>;

export type ReactionsDeleteForTeamDiscussionRequestQuery = {};

export type ReactionsDeleteForTeamDiscussionRequestHeaders = {};

export type ReactionsDeleteForTeamDiscussionRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly discussion_number: string;
  readonly reaction_id: string;
};

export type ReactionsDeleteForTeamDiscussionRequestBody = never;

export type ReactionsDeleteForTeamDiscussionResponseStatus = 204;

export type ReactionsDeleteForTeamDiscussionResponseBody = never;

export type ReactionsDeleteForTeamDiscussionResolver = msw.HttpResponseResolver<
  ReactionsDeleteForTeamDiscussionRequestParams,
  ReactionsDeleteForTeamDiscussionRequestBody,
  ReactionsDeleteForTeamDiscussionResponseBody
>;

export type TeamsListPendingInvitationsInOrgRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type TeamsListPendingInvitationsInOrgRequestHeaders = {};

export type TeamsListPendingInvitationsInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
};

export type TeamsListPendingInvitationsInOrgRequestBody = never;

export type TeamsListPendingInvitationsInOrgResponseStatus = 200;

export type TeamsListPendingInvitationsInOrgResponseBody = ReadonlyArray<OrganizationInvitation>;

export type TeamsListPendingInvitationsInOrgResolver = msw.HttpResponseResolver<
  TeamsListPendingInvitationsInOrgRequestParams,
  TeamsListPendingInvitationsInOrgRequestBody,
  TeamsListPendingInvitationsInOrgResponseBody
>;

export type TeamsListMembersInOrgRequestQuery = {
  readonly role?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type TeamsListMembersInOrgRequestHeaders = {};

export type TeamsListMembersInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
};

export type TeamsListMembersInOrgRequestBody = never;

export type TeamsListMembersInOrgResponseStatus = 200;

export type TeamsListMembersInOrgResponseBody = ReadonlyArray<SimpleUser>;

export type TeamsListMembersInOrgResolver = msw.HttpResponseResolver<
  TeamsListMembersInOrgRequestParams,
  TeamsListMembersInOrgRequestBody,
  TeamsListMembersInOrgResponseBody
>;

export type TeamsGetMembershipForUserInOrgRequestQuery = {};

export type TeamsGetMembershipForUserInOrgRequestHeaders = {};

export type TeamsGetMembershipForUserInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly username: string;
};

export type TeamsGetMembershipForUserInOrgRequestBody = never;

export type TeamsGetMembershipForUserInOrgResponseStatus = 200 | 404;

export type TeamMembership = {
  readonly url: string;
  readonly role: 'member' | 'maintainer';
  readonly state: 'active' | 'pending';
};

export type TeamsGetMembershipForUserInOrgResponseBody = TeamMembership | never;

export type TeamsGetMembershipForUserInOrgResolver = msw.HttpResponseResolver<
  TeamsGetMembershipForUserInOrgRequestParams,
  TeamsGetMembershipForUserInOrgRequestBody,
  TeamsGetMembershipForUserInOrgResponseBody
>;

export type TeamsAddOrUpdateMembershipForUserInOrgRequestQuery = {};

export type TeamsAddOrUpdateMembershipForUserInOrgRequestHeaders = {};

export type TeamsAddOrUpdateMembershipForUserInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly username: string;
};

export type TeamsAddOrUpdateMembershipForUserInOrgRequestBody =
  | { readonly role?: 'member' | 'maintainer' }
  | undefined;

export type TeamsAddOrUpdateMembershipForUserInOrgResponseStatus =
  | 200
  | 403
  | 422;

export type TeamsAddOrUpdateMembershipForUserInOrgResponseBody =
  | TeamMembership
  | never;

export type TeamsAddOrUpdateMembershipForUserInOrgResolver = msw.HttpResponseResolver<
  TeamsAddOrUpdateMembershipForUserInOrgRequestParams,
  TeamsAddOrUpdateMembershipForUserInOrgRequestBody,
  TeamsAddOrUpdateMembershipForUserInOrgResponseBody
>;

export type TeamsRemoveMembershipForUserInOrgRequestQuery = {};

export type TeamsRemoveMembershipForUserInOrgRequestHeaders = {};

export type TeamsRemoveMembershipForUserInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly username: string;
};

export type TeamsRemoveMembershipForUserInOrgRequestBody = never;

export type TeamsRemoveMembershipForUserInOrgResponseStatus = 204 | 403;

export type TeamsRemoveMembershipForUserInOrgResponseBody = never;

export type TeamsRemoveMembershipForUserInOrgResolver = msw.HttpResponseResolver<
  TeamsRemoveMembershipForUserInOrgRequestParams,
  TeamsRemoveMembershipForUserInOrgRequestBody,
  TeamsRemoveMembershipForUserInOrgResponseBody
>;

export type TeamsListProjectsInOrgRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type TeamsListProjectsInOrgRequestHeaders = {};

export type TeamsListProjectsInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
};

export type TeamsListProjectsInOrgRequestBody = never;

export type TeamsListProjectsInOrgResponseStatus = 200;

export type TeamProject = {
  readonly owner_url: string;
  readonly url: string;
  readonly html_url: string;
  readonly columns_url: string;
  readonly id: number;
  readonly node_id: string;
  readonly name: string;
  readonly body: string | null;
  readonly number: number;
  readonly state: string;
  readonly creator: SimpleUser;
  readonly created_at: string;
  readonly updated_at: string;
  readonly organization_permission?: string;
  readonly private?: boolean;
  readonly permissions: {
    readonly read: boolean;
    readonly write: boolean;
    readonly admin: boolean;
  };
};

export type TeamsListProjectsInOrgResponseBody = ReadonlyArray<TeamProject>;

export type TeamsListProjectsInOrgResolver = msw.HttpResponseResolver<
  TeamsListProjectsInOrgRequestParams,
  TeamsListProjectsInOrgRequestBody,
  TeamsListProjectsInOrgResponseBody
>;

export type TeamsCheckPermissionsForProjectInOrgRequestQuery = {};

export type TeamsCheckPermissionsForProjectInOrgRequestHeaders = {};

export type TeamsCheckPermissionsForProjectInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly project_id: string;
};

export type TeamsCheckPermissionsForProjectInOrgRequestBody = never;

export type TeamsCheckPermissionsForProjectInOrgResponseStatus = 200 | 404;

export type TeamsCheckPermissionsForProjectInOrgResponseBody =
  | TeamProject
  | never;

export type TeamsCheckPermissionsForProjectInOrgResolver = msw.HttpResponseResolver<
  TeamsCheckPermissionsForProjectInOrgRequestParams,
  TeamsCheckPermissionsForProjectInOrgRequestBody,
  TeamsCheckPermissionsForProjectInOrgResponseBody
>;

export type TeamsAddOrUpdateProjectPermissionsInOrgRequestQuery = {};

export type TeamsAddOrUpdateProjectPermissionsInOrgRequestHeaders = {};

export type TeamsAddOrUpdateProjectPermissionsInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly project_id: string;
};

export type TeamsAddOrUpdateProjectPermissionsInOrgRequestBody =
  | { readonly permission?: 'read' | 'write' | 'admin' }
  | null
  | undefined;

export type TeamsAddOrUpdateProjectPermissionsInOrgResponseStatus = 204 | 403;

export type TeamsAddOrUpdateProjectPermissionsInOrgResponseBody =
  | never
  | { readonly message?: string; readonly documentation_url?: string };

export type TeamsAddOrUpdateProjectPermissionsInOrgResolver = msw.HttpResponseResolver<
  TeamsAddOrUpdateProjectPermissionsInOrgRequestParams,
  TeamsAddOrUpdateProjectPermissionsInOrgRequestBody,
  TeamsAddOrUpdateProjectPermissionsInOrgResponseBody
>;

export type TeamsRemoveProjectInOrgRequestQuery = {};

export type TeamsRemoveProjectInOrgRequestHeaders = {};

export type TeamsRemoveProjectInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly project_id: string;
};

export type TeamsRemoveProjectInOrgRequestBody = never;

export type TeamsRemoveProjectInOrgResponseStatus = 204;

export type TeamsRemoveProjectInOrgResponseBody = never;

export type TeamsRemoveProjectInOrgResolver = msw.HttpResponseResolver<
  TeamsRemoveProjectInOrgRequestParams,
  TeamsRemoveProjectInOrgRequestBody,
  TeamsRemoveProjectInOrgResponseBody
>;

export type TeamsListReposInOrgRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type TeamsListReposInOrgRequestHeaders = {};

export type TeamsListReposInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
};

export type TeamsListReposInOrgRequestBody = never;

export type TeamsListReposInOrgResponseStatus = 200;

export type TeamsListReposInOrgResponseBody = ReadonlyArray<MinimalRepository>;

export type TeamsListReposInOrgResolver = msw.HttpResponseResolver<
  TeamsListReposInOrgRequestParams,
  TeamsListReposInOrgRequestBody,
  TeamsListReposInOrgResponseBody
>;

export type TeamsCheckPermissionsForRepoInOrgRequestQuery = {};

export type TeamsCheckPermissionsForRepoInOrgRequestHeaders = {};

export type TeamsCheckPermissionsForRepoInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly owner: string;
  readonly repo: string;
};

export type TeamsCheckPermissionsForRepoInOrgRequestBody = never;

export type TeamsCheckPermissionsForRepoInOrgResponseStatus = 200 | 204 | 404;

export type TeamRepository = {
  readonly id: number;
  readonly node_id: string;
  readonly name: string;
  readonly full_name: string;
  readonly license: LicenseSimple;
  readonly forks: number;
  readonly permissions?: {
    readonly admin: boolean;
    readonly pull: boolean;
    readonly triage?: boolean;
    readonly push: boolean;
    readonly maintain?: boolean;
  };
  readonly role_name?: string;
  readonly owner: SimpleUser;
  readonly private: boolean;
  readonly html_url: string;
  readonly description: string | null;
  readonly fork: boolean;
  readonly url: string;
  readonly archive_url: string;
  readonly assignees_url: string;
  readonly blobs_url: string;
  readonly branches_url: string;
  readonly collaborators_url: string;
  readonly comments_url: string;
  readonly commits_url: string;
  readonly compare_url: string;
  readonly contents_url: string;
  readonly contributors_url: string;
  readonly deployments_url: string;
  readonly downloads_url: string;
  readonly events_url: string;
  readonly forks_url: string;
  readonly git_commits_url: string;
  readonly git_refs_url: string;
  readonly git_tags_url: string;
  readonly git_url: string;
  readonly issue_comment_url: string;
  readonly issue_events_url: string;
  readonly issues_url: string;
  readonly keys_url: string;
  readonly labels_url: string;
  readonly languages_url: string;
  readonly merges_url: string;
  readonly milestones_url: string;
  readonly notifications_url: string;
  readonly pulls_url: string;
  readonly releases_url: string;
  readonly ssh_url: string;
  readonly stargazers_url: string;
  readonly statuses_url: string;
  readonly subscribers_url: string;
  readonly subscription_url: string;
  readonly tags_url: string;
  readonly teams_url: string;
  readonly trees_url: string;
  readonly clone_url: string;
  readonly mirror_url: string | null;
  readonly hooks_url: string;
  readonly svn_url: string;
  readonly homepage: string | null;
  readonly language: string | null;
  readonly forks_count: number;
  readonly stargazers_count: number;
  readonly watchers_count: number;
  readonly size: number;
  readonly default_branch: string;
  readonly open_issues_count: number;
  readonly is_template?: boolean;
  readonly topics?: ReadonlyArray<string>;
  readonly has_issues: boolean;
  readonly has_projects: boolean;
  readonly has_wiki: boolean;
  readonly has_pages: boolean;
  readonly has_downloads: boolean;
  readonly archived: boolean;
  readonly disabled: boolean;
  readonly visibility?: string;
  readonly pushed_at: string | null;
  readonly created_at: string | null;
  readonly updated_at: string | null;
  readonly allow_rebase_merge?: boolean;
  readonly template_repository?: Repository;
  readonly temp_clone_token?: string;
  readonly allow_squash_merge?: boolean;
  readonly allow_auto_merge?: boolean;
  readonly delete_branch_on_merge?: boolean;
  readonly allow_merge_commit?: boolean;
  readonly allow_forking?: boolean;
  readonly web_commit_signoff_required?: boolean;
  readonly subscribers_count?: number;
  readonly network_count?: number;
  readonly open_issues: number;
  readonly watchers: number;
  readonly master_branch?: string;
};

export type TeamsCheckPermissionsForRepoInOrgResponseBody =
  | TeamRepository
  | never;

export type TeamsCheckPermissionsForRepoInOrgResolver = msw.HttpResponseResolver<
  TeamsCheckPermissionsForRepoInOrgRequestParams,
  TeamsCheckPermissionsForRepoInOrgRequestBody,
  TeamsCheckPermissionsForRepoInOrgResponseBody
>;

export type TeamsAddOrUpdateRepoPermissionsInOrgRequestQuery = {};

export type TeamsAddOrUpdateRepoPermissionsInOrgRequestHeaders = {};

export type TeamsAddOrUpdateRepoPermissionsInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly owner: string;
  readonly repo: string;
};

export type TeamsAddOrUpdateRepoPermissionsInOrgRequestBody =
  | { readonly permission?: string }
  | undefined;

export type TeamsAddOrUpdateRepoPermissionsInOrgResponseStatus = 204;

export type TeamsAddOrUpdateRepoPermissionsInOrgResponseBody = never;

export type TeamsAddOrUpdateRepoPermissionsInOrgResolver = msw.HttpResponseResolver<
  TeamsAddOrUpdateRepoPermissionsInOrgRequestParams,
  TeamsAddOrUpdateRepoPermissionsInOrgRequestBody,
  TeamsAddOrUpdateRepoPermissionsInOrgResponseBody
>;

export type TeamsRemoveRepoInOrgRequestQuery = {};

export type TeamsRemoveRepoInOrgRequestHeaders = {};

export type TeamsRemoveRepoInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
  readonly owner: string;
  readonly repo: string;
};

export type TeamsRemoveRepoInOrgRequestBody = never;

export type TeamsRemoveRepoInOrgResponseStatus = 204;

export type TeamsRemoveRepoInOrgResponseBody = never;

export type TeamsRemoveRepoInOrgResolver = msw.HttpResponseResolver<
  TeamsRemoveRepoInOrgRequestParams,
  TeamsRemoveRepoInOrgRequestBody,
  TeamsRemoveRepoInOrgResponseBody
>;

export type TeamsListChildInOrgRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type TeamsListChildInOrgRequestHeaders = {};

export type TeamsListChildInOrgRequestParams = {
  readonly org: string;
  readonly team_slug: string;
};

export type TeamsListChildInOrgRequestBody = never;

export type TeamsListChildInOrgResponseStatus = 200;

export type TeamsListChildInOrgResponseBody = ReadonlyArray<Team>;

export type TeamsListChildInOrgResolver = msw.HttpResponseResolver<
  TeamsListChildInOrgRequestParams,
  TeamsListChildInOrgRequestBody,
  TeamsListChildInOrgResponseBody
>;

export type OrgsEnableOrDisableSecurityProductOnAllOrgReposRequestQuery = {};

export type OrgsEnableOrDisableSecurityProductOnAllOrgReposRequestHeaders = {};

export type OrgsEnableOrDisableSecurityProductOnAllOrgReposRequestParams = {
  readonly org: string;
  readonly security_product: string;
  readonly enablement: string;
};

export type OrgsEnableOrDisableSecurityProductOnAllOrgReposRequestBody = never;

export type OrgsEnableOrDisableSecurityProductOnAllOrgReposResponseStatus =
  | 204
  | 422;

export type OrgsEnableOrDisableSecurityProductOnAllOrgReposResponseBody = never;

export type OrgsEnableOrDisableSecurityProductOnAllOrgReposResolver = msw.HttpResponseResolver<
  OrgsEnableOrDisableSecurityProductOnAllOrgReposRequestParams,
  OrgsEnableOrDisableSecurityProductOnAllOrgReposRequestBody,
  OrgsEnableOrDisableSecurityProductOnAllOrgReposResponseBody
>;

export type ProjectsGetCardRequestQuery = {};

export type ProjectsGetCardRequestHeaders = {};

export type ProjectsGetCardRequestParams = { readonly card_id: string };

export type ProjectsGetCardRequestBody = never;

export type ProjectsGetCardResponseStatus = 200 | 304 | 401 | 403 | 404;

export type ProjectCard = {
  readonly url: string;
  readonly id: number;
  readonly node_id: string;
  readonly note: string | null;
  readonly creator: SimpleUser;
  readonly created_at: string;
  readonly updated_at: string;
  readonly archived?: boolean;
  readonly column_name?: string;
  readonly project_id?: string;
  readonly column_url: string;
  readonly content_url?: string;
  readonly project_url: string;
};

export type ProjectsGetCardResponseBody = ProjectCard | never | BasicError;

export type ProjectsGetCardResolver = msw.HttpResponseResolver<
  ProjectsGetCardRequestParams,
  ProjectsGetCardRequestBody,
  ProjectsGetCardResponseBody
>;

export type ProjectsUpdateCardRequestQuery = {};

export type ProjectsUpdateCardRequestHeaders = {};

export type ProjectsUpdateCardRequestParams = { readonly card_id: string };

export type ProjectsUpdateCardRequestBody =
  | { readonly note?: string | null; readonly archived?: boolean }
  | undefined;

export type ProjectsUpdateCardResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404
  | 422;

export type ProjectsUpdateCardResponseBody =
  | ProjectCard
  | never
  | BasicError
  | ValidationErrorSimple;

export type ProjectsUpdateCardResolver = msw.HttpResponseResolver<
  ProjectsUpdateCardRequestParams,
  ProjectsUpdateCardRequestBody,
  ProjectsUpdateCardResponseBody
>;

export type ProjectsDeleteCardRequestQuery = {};

export type ProjectsDeleteCardRequestHeaders = {};

export type ProjectsDeleteCardRequestParams = { readonly card_id: string };

export type ProjectsDeleteCardRequestBody = never;

export type ProjectsDeleteCardResponseStatus = 204 | 304 | 401 | 403 | 404;

export type ProjectsDeleteCardResponseBody =
  | never
  | BasicError
  | {
      readonly message?: string;
      readonly documentation_url?: string;
      readonly errors?: ReadonlyArray<string>;
    };

export type ProjectsDeleteCardResolver = msw.HttpResponseResolver<
  ProjectsDeleteCardRequestParams,
  ProjectsDeleteCardRequestBody,
  ProjectsDeleteCardResponseBody
>;

export type ProjectsMoveCardRequestQuery = {};

export type ProjectsMoveCardRequestHeaders = {};

export type ProjectsMoveCardRequestParams = { readonly card_id: string };

export type ProjectsMoveCardRequestBody = {
  readonly position: string;
  readonly column_id?: number;
};

export type ProjectsMoveCardResponseStatus = 201 | 304 | 401 | 403 | 422 | 503;

export type ProjectsMoveCardResponseBody =
  | {}
  | never
  | BasicError
  | {
      readonly message?: string;
      readonly documentation_url?: string;
      readonly errors?: ReadonlyArray<{
        readonly code?: string;
        readonly message?: string;
        readonly resource?: string;
        readonly field?: string;
      }>;
    }
  | ValidationError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
      readonly errors?: ReadonlyArray<{
        readonly code?: string;
        readonly message?: string;
      }>;
    };

export type ProjectsMoveCardResolver = msw.HttpResponseResolver<
  ProjectsMoveCardRequestParams,
  ProjectsMoveCardRequestBody,
  ProjectsMoveCardResponseBody
>;

export type ProjectsGetColumnRequestQuery = {};

export type ProjectsGetColumnRequestHeaders = {};

export type ProjectsGetColumnRequestParams = { readonly column_id: string };

export type ProjectsGetColumnRequestBody = never;

export type ProjectsGetColumnResponseStatus = 200 | 304 | 401 | 403 | 404;

export type ProjectColumn = {
  readonly url: string;
  readonly project_url: string;
  readonly cards_url: string;
  readonly id: number;
  readonly node_id: string;
  readonly name: string;
  readonly created_at: string;
  readonly updated_at: string;
};

export type ProjectsGetColumnResponseBody = ProjectColumn | never | BasicError;

export type ProjectsGetColumnResolver = msw.HttpResponseResolver<
  ProjectsGetColumnRequestParams,
  ProjectsGetColumnRequestBody,
  ProjectsGetColumnResponseBody
>;

export type ProjectsUpdateColumnRequestQuery = {};

export type ProjectsUpdateColumnRequestHeaders = {};

export type ProjectsUpdateColumnRequestParams = { readonly column_id: string };

export type ProjectsUpdateColumnRequestBody = { readonly name: string };

export type ProjectsUpdateColumnResponseStatus = 200 | 304 | 401 | 403;

export type ProjectsUpdateColumnResponseBody =
  | ProjectColumn
  | never
  | BasicError;

export type ProjectsUpdateColumnResolver = msw.HttpResponseResolver<
  ProjectsUpdateColumnRequestParams,
  ProjectsUpdateColumnRequestBody,
  ProjectsUpdateColumnResponseBody
>;

export type ProjectsDeleteColumnRequestQuery = {};

export type ProjectsDeleteColumnRequestHeaders = {};

export type ProjectsDeleteColumnRequestParams = { readonly column_id: string };

export type ProjectsDeleteColumnRequestBody = never;

export type ProjectsDeleteColumnResponseStatus = 204 | 304 | 401 | 403;

export type ProjectsDeleteColumnResponseBody = never | BasicError;

export type ProjectsDeleteColumnResolver = msw.HttpResponseResolver<
  ProjectsDeleteColumnRequestParams,
  ProjectsDeleteColumnRequestBody,
  ProjectsDeleteColumnResponseBody
>;

export type ProjectsListCardsRequestQuery = {
  readonly archived_state?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ProjectsListCardsRequestHeaders = {};

export type ProjectsListCardsRequestParams = { readonly column_id: string };

export type ProjectsListCardsRequestBody = never;

export type ProjectsListCardsResponseStatus = 200 | 304 | 401 | 403;

export type ProjectsListCardsResponseBody =
  | ReadonlyArray<ProjectCard>
  | never
  | BasicError;

export type ProjectsListCardsResolver = msw.HttpResponseResolver<
  ProjectsListCardsRequestParams,
  ProjectsListCardsRequestBody,
  ProjectsListCardsResponseBody
>;

export type ProjectsCreateCardRequestQuery = {};

export type ProjectsCreateCardRequestHeaders = {};

export type ProjectsCreateCardRequestParams = { readonly column_id: string };

export type ProjectsCreateCardRequestBody =
  | { readonly note: string | null }
  | { readonly content_id: number; readonly content_type: string };

export type ProjectsCreateCardResponseStatus =
  | 201
  | 304
  | 401
  | 403
  | 422
  | 503;

export type ProjectsCreateCardResponseBody =
  | ProjectCard
  | never
  | BasicError
  | ValidationError
  | ValidationErrorSimple
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
      readonly errors?: ReadonlyArray<{
        readonly code?: string;
        readonly message?: string;
      }>;
    };

export type ProjectsCreateCardResolver = msw.HttpResponseResolver<
  ProjectsCreateCardRequestParams,
  ProjectsCreateCardRequestBody,
  ProjectsCreateCardResponseBody
>;

export type ProjectsMoveColumnRequestQuery = {};

export type ProjectsMoveColumnRequestHeaders = {};

export type ProjectsMoveColumnRequestParams = { readonly column_id: string };

export type ProjectsMoveColumnRequestBody = { readonly position: string };

export type ProjectsMoveColumnResponseStatus = 201 | 304 | 401 | 403 | 422;

export type ProjectsMoveColumnResponseBody =
  | {}
  | never
  | BasicError
  | ValidationErrorSimple;

export type ProjectsMoveColumnResolver = msw.HttpResponseResolver<
  ProjectsMoveColumnRequestParams,
  ProjectsMoveColumnRequestBody,
  ProjectsMoveColumnResponseBody
>;

export type ProjectsGetRequestQuery = {};

export type ProjectsGetRequestHeaders = {};

export type ProjectsGetRequestParams = { readonly project_id: string };

export type ProjectsGetRequestBody = never;

export type ProjectsGetResponseStatus = 200 | 304 | 401 | 403;

export type ProjectsGetResponseBody = Project | never | BasicError;

export type ProjectsGetResolver = msw.HttpResponseResolver<
  ProjectsGetRequestParams,
  ProjectsGetRequestBody,
  ProjectsGetResponseBody
>;

export type ProjectsUpdateRequestQuery = {};

export type ProjectsUpdateRequestHeaders = {};

export type ProjectsUpdateRequestParams = { readonly project_id: string };

export type ProjectsUpdateRequestBody =
  | {
      readonly name?: string;
      readonly body?: string | null;
      readonly state?: string;
      readonly organization_permission?: 'read' | 'write' | 'admin' | 'none';
      readonly private?: boolean;
    }
  | undefined;

export type ProjectsUpdateResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404
  | 410
  | 422;

export type ProjectsUpdateResponseBody =
  | Project
  | never
  | BasicError
  | {
      readonly message?: string;
      readonly documentation_url?: string;
      readonly errors?: ReadonlyArray<string>;
    }
  | ValidationErrorSimple;

export type ProjectsUpdateResolver = msw.HttpResponseResolver<
  ProjectsUpdateRequestParams,
  ProjectsUpdateRequestBody,
  ProjectsUpdateResponseBody
>;

export type ProjectsDeleteRequestQuery = {};

export type ProjectsDeleteRequestHeaders = {};

export type ProjectsDeleteRequestParams = { readonly project_id: string };

export type ProjectsDeleteRequestBody = never;

export type ProjectsDeleteResponseStatus = 204 | 304 | 401 | 403 | 404 | 410;

export type ProjectsDeleteResponseBody =
  | never
  | BasicError
  | {
      readonly message?: string;
      readonly documentation_url?: string;
      readonly errors?: ReadonlyArray<string>;
    };

export type ProjectsDeleteResolver = msw.HttpResponseResolver<
  ProjectsDeleteRequestParams,
  ProjectsDeleteRequestBody,
  ProjectsDeleteResponseBody
>;

export type ProjectsListCollaboratorsRequestQuery = {
  readonly affiliation?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ProjectsListCollaboratorsRequestHeaders = {};

export type ProjectsListCollaboratorsRequestParams = {
  readonly project_id: string;
};

export type ProjectsListCollaboratorsRequestBody = never;

export type ProjectsListCollaboratorsResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404
  | 422;

export type ProjectsListCollaboratorsResponseBody =
  | ReadonlyArray<SimpleUser>
  | never
  | BasicError
  | ValidationError;

export type ProjectsListCollaboratorsResolver = msw.HttpResponseResolver<
  ProjectsListCollaboratorsRequestParams,
  ProjectsListCollaboratorsRequestBody,
  ProjectsListCollaboratorsResponseBody
>;

export type ProjectsAddCollaboratorRequestQuery = {};

export type ProjectsAddCollaboratorRequestHeaders = {};

export type ProjectsAddCollaboratorRequestParams = {
  readonly project_id: string;
  readonly username: string;
};

export type ProjectsAddCollaboratorRequestBody =
  | { readonly permission?: 'read' | 'write' | 'admin' }
  | null
  | undefined;

export type ProjectsAddCollaboratorResponseStatus =
  | 204
  | 304
  | 401
  | 403
  | 404
  | 422;

export type ProjectsAddCollaboratorResponseBody =
  | never
  | BasicError
  | ValidationError;

export type ProjectsAddCollaboratorResolver = msw.HttpResponseResolver<
  ProjectsAddCollaboratorRequestParams,
  ProjectsAddCollaboratorRequestBody,
  ProjectsAddCollaboratorResponseBody
>;

export type ProjectsRemoveCollaboratorRequestQuery = {};

export type ProjectsRemoveCollaboratorRequestHeaders = {};

export type ProjectsRemoveCollaboratorRequestParams = {
  readonly project_id: string;
  readonly username: string;
};

export type ProjectsRemoveCollaboratorRequestBody = never;

export type ProjectsRemoveCollaboratorResponseStatus =
  | 204
  | 304
  | 401
  | 403
  | 404
  | 422;

export type ProjectsRemoveCollaboratorResponseBody =
  | never
  | BasicError
  | ValidationError;

export type ProjectsRemoveCollaboratorResolver = msw.HttpResponseResolver<
  ProjectsRemoveCollaboratorRequestParams,
  ProjectsRemoveCollaboratorRequestBody,
  ProjectsRemoveCollaboratorResponseBody
>;

export type ProjectsGetPermissionForUserRequestQuery = {};

export type ProjectsGetPermissionForUserRequestHeaders = {};

export type ProjectsGetPermissionForUserRequestParams = {
  readonly project_id: string;
  readonly username: string;
};

export type ProjectsGetPermissionForUserRequestBody = never;

export type ProjectsGetPermissionForUserResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404
  | 422;

export type ProjectCollaboratorPermission = {
  readonly permission: string;
  readonly user: SimpleUser;
};

export type ProjectsGetPermissionForUserResponseBody =
  | ProjectCollaboratorPermission
  | never
  | BasicError
  | ValidationError;

export type ProjectsGetPermissionForUserResolver = msw.HttpResponseResolver<
  ProjectsGetPermissionForUserRequestParams,
  ProjectsGetPermissionForUserRequestBody,
  ProjectsGetPermissionForUserResponseBody
>;

export type ProjectsListColumnsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ProjectsListColumnsRequestHeaders = {};

export type ProjectsListColumnsRequestParams = { readonly project_id: string };

export type ProjectsListColumnsRequestBody = never;

export type ProjectsListColumnsResponseStatus = 200 | 304 | 401 | 403;

export type ProjectsListColumnsResponseBody =
  | ReadonlyArray<ProjectColumn>
  | never
  | BasicError;

export type ProjectsListColumnsResolver = msw.HttpResponseResolver<
  ProjectsListColumnsRequestParams,
  ProjectsListColumnsRequestBody,
  ProjectsListColumnsResponseBody
>;

export type ProjectsCreateColumnRequestQuery = {};

export type ProjectsCreateColumnRequestHeaders = {};

export type ProjectsCreateColumnRequestParams = { readonly project_id: string };

export type ProjectsCreateColumnRequestBody = { readonly name: string };

export type ProjectsCreateColumnResponseStatus = 201 | 304 | 401 | 403 | 422;

export type ProjectsCreateColumnResponseBody =
  | ProjectColumn
  | never
  | BasicError
  | ValidationErrorSimple;

export type ProjectsCreateColumnResolver = msw.HttpResponseResolver<
  ProjectsCreateColumnRequestParams,
  ProjectsCreateColumnRequestBody,
  ProjectsCreateColumnResponseBody
>;

export type RateLimitGetRequestQuery = {};

export type RateLimitGetRequestHeaders = {};

export type RateLimitGetRequestParams = {};

export type RateLimitGetRequestBody = never;

export type RateLimitGetResponseStatus = 200 | 304 | 404;

export type RateLimit = {
  readonly limit: number;
  readonly remaining: number;
  readonly reset: number;
  readonly used: number;
};

export type RateLimitOverview = {
  readonly resources: {
    readonly core: RateLimit;
    readonly graphql?: RateLimit;
    readonly search: RateLimit;
    readonly source_import?: RateLimit;
    readonly integration_manifest?: RateLimit;
    readonly code_scanning_upload?: RateLimit;
    readonly actions_runner_registration?: RateLimit;
    readonly scim?: RateLimit;
    readonly dependency_snapshots?: RateLimit;
  };
  readonly rate: RateLimit;
};

export type RateLimitGetResponseBody = RateLimitOverview | never | BasicError;

export type RateLimitGetResolver = msw.HttpResponseResolver<
  RateLimitGetRequestParams,
  RateLimitGetRequestBody,
  RateLimitGetResponseBody
>;

export type ReposGetRequestQuery = {};

export type ReposGetRequestHeaders = {};

export type ReposGetRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposGetRequestBody = never;

export type ReposGetResponseStatus = 200 | 301 | 403 | 404;

export type CodeOfConductSimple = {
  readonly url: string;
  readonly key: string;
  readonly name: string;
  readonly html_url: string | null;
};

export type SecurityAndAnalysis = {
  readonly advanced_security?: { readonly status?: 'enabled' | 'disabled' };
  readonly secret_scanning?: { readonly status?: 'enabled' | 'disabled' };
  readonly secret_scanning_push_protection?: {
    readonly status?: 'enabled' | 'disabled';
  };
} | null;

export type FullRepository = {
  readonly id: number;
  readonly node_id: string;
  readonly name: string;
  readonly full_name: string;
  readonly owner: SimpleUser;
  readonly private: boolean;
  readonly html_url: string;
  readonly description: string | null;
  readonly fork: boolean;
  readonly url: string;
  readonly archive_url: string;
  readonly assignees_url: string;
  readonly blobs_url: string;
  readonly branches_url: string;
  readonly collaborators_url: string;
  readonly comments_url: string;
  readonly commits_url: string;
  readonly compare_url: string;
  readonly contents_url: string;
  readonly contributors_url: string;
  readonly deployments_url: string;
  readonly downloads_url: string;
  readonly events_url: string;
  readonly forks_url: string;
  readonly git_commits_url: string;
  readonly git_refs_url: string;
  readonly git_tags_url: string;
  readonly git_url: string;
  readonly issue_comment_url: string;
  readonly issue_events_url: string;
  readonly issues_url: string;
  readonly keys_url: string;
  readonly labels_url: string;
  readonly languages_url: string;
  readonly merges_url: string;
  readonly milestones_url: string;
  readonly notifications_url: string;
  readonly pulls_url: string;
  readonly releases_url: string;
  readonly ssh_url: string;
  readonly stargazers_url: string;
  readonly statuses_url: string;
  readonly subscribers_url: string;
  readonly subscription_url: string;
  readonly tags_url: string;
  readonly teams_url: string;
  readonly trees_url: string;
  readonly clone_url: string;
  readonly mirror_url: string | null;
  readonly hooks_url: string;
  readonly svn_url: string;
  readonly homepage: string | null;
  readonly language: string | null;
  readonly forks_count: number;
  readonly stargazers_count: number;
  readonly watchers_count: number;
  readonly size: number;
  readonly default_branch: string;
  readonly open_issues_count: number;
  readonly is_template?: boolean;
  readonly topics?: ReadonlyArray<string>;
  readonly has_issues: boolean;
  readonly has_projects: boolean;
  readonly has_wiki: boolean;
  readonly has_pages: boolean;
  readonly has_downloads: boolean;
  readonly archived: boolean;
  readonly disabled: boolean;
  readonly visibility?: string;
  readonly pushed_at: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly permissions?: {
    readonly admin: boolean;
    readonly maintain?: boolean;
    readonly push: boolean;
    readonly triage?: boolean;
    readonly pull: boolean;
  };
  readonly allow_rebase_merge?: boolean;
  readonly template_repository?: Repository;
  readonly temp_clone_token?: string | null;
  readonly allow_squash_merge?: boolean;
  readonly allow_auto_merge?: boolean;
  readonly delete_branch_on_merge?: boolean;
  readonly allow_merge_commit?: boolean;
  readonly allow_update_branch?: boolean;
  readonly use_squash_pr_title_as_default?: boolean;
  readonly squash_merge_commit_title?: 'PR_TITLE' | 'COMMIT_OR_PR_TITLE';
  readonly squash_merge_commit_message?:
    | 'PR_BODY'
    | 'COMMIT_MESSAGES'
    | 'BLANK';
  readonly merge_commit_title?: 'PR_TITLE' | 'MERGE_MESSAGE';
  readonly merge_commit_message?: 'PR_BODY' | 'PR_TITLE' | 'BLANK';
  readonly allow_forking?: boolean;
  readonly web_commit_signoff_required?: boolean;
  readonly subscribers_count: number;
  readonly network_count: number;
  readonly license: LicenseSimple;
  readonly organization?: SimpleUser;
  readonly parent?: Repository;
  readonly source?: Repository;
  readonly forks: number;
  readonly master_branch?: string;
  readonly open_issues: number;
  readonly watchers: number;
  readonly anonymous_access_enabled?: boolean;
  readonly code_of_conduct?: CodeOfConductSimple;
  readonly security_and_analysis?: SecurityAndAnalysis;
};

export type ReposGetResponseBody = FullRepository | BasicError;

export type ReposGetResolver = msw.HttpResponseResolver<
  ReposGetRequestParams,
  ReposGetRequestBody,
  ReposGetResponseBody
>;

export type ReposUpdateRequestQuery = {};

export type ReposUpdateRequestHeaders = {};

export type ReposUpdateRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposUpdateRequestBody =
  | {
      readonly name?: string;
      readonly description?: string;
      readonly homepage?: string;
      readonly private?: boolean;
      readonly visibility?: 'public' | 'private' | 'internal';
      readonly security_and_analysis?: {
        readonly advanced_security?: { readonly status?: string };
        readonly secret_scanning?: { readonly status?: string };
        readonly secret_scanning_push_protection?: { readonly status?: string };
      } | null;
      readonly has_issues?: boolean;
      readonly has_projects?: boolean;
      readonly has_wiki?: boolean;
      readonly is_template?: boolean;
      readonly default_branch?: string;
      readonly allow_squash_merge?: boolean;
      readonly allow_merge_commit?: boolean;
      readonly allow_rebase_merge?: boolean;
      readonly allow_auto_merge?: boolean;
      readonly delete_branch_on_merge?: boolean;
      readonly allow_update_branch?: boolean;
      readonly use_squash_pr_title_as_default?: boolean;
      readonly squash_merge_commit_title?: 'PR_TITLE' | 'COMMIT_OR_PR_TITLE';
      readonly squash_merge_commit_message?:
        | 'PR_BODY'
        | 'COMMIT_MESSAGES'
        | 'BLANK';
      readonly merge_commit_title?: 'PR_TITLE' | 'MERGE_MESSAGE';
      readonly merge_commit_message?: 'PR_BODY' | 'PR_TITLE' | 'BLANK';
      readonly archived?: boolean;
      readonly allow_forking?: boolean;
      readonly web_commit_signoff_required?: boolean;
    }
  | undefined;

export type ReposUpdateResponseStatus = 200 | 307 | 403 | 404 | 422;

export type ReposUpdateResponseBody =
  | FullRepository
  | BasicError
  | ValidationError;

export type ReposUpdateResolver = msw.HttpResponseResolver<
  ReposUpdateRequestParams,
  ReposUpdateRequestBody,
  ReposUpdateResponseBody
>;

export type ReposDeleteRequestQuery = {};

export type ReposDeleteRequestHeaders = {};

export type ReposDeleteRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposDeleteRequestBody = never;

export type ReposDeleteResponseStatus = 204 | 307 | 403 | 404;

export type ReposDeleteResponseBody =
  | never
  | BasicError
  | { readonly message?: string; readonly documentation_url?: string };

export type ReposDeleteResolver = msw.HttpResponseResolver<
  ReposDeleteRequestParams,
  ReposDeleteRequestBody,
  ReposDeleteResponseBody
>;

export type ActionsListArtifactsForRepoRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
  readonly name?: string;
};

export type ActionsListArtifactsForRepoRequestHeaders = {};

export type ActionsListArtifactsForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActionsListArtifactsForRepoRequestBody = never;

export type ActionsListArtifactsForRepoResponseStatus = 200;

export type Artifact = {
  readonly id: number;
  readonly node_id: string;
  readonly name: string;
  readonly size_in_bytes: number;
  readonly url: string;
  readonly archive_download_url: string;
  readonly expired: boolean;
  readonly created_at: string | null;
  readonly expires_at: string | null;
  readonly updated_at: string | null;
  readonly workflow_run?: {
    readonly id?: number;
    readonly repository_id?: number;
    readonly head_repository_id?: number;
    readonly head_branch?: string;
    readonly head_sha?: string;
  } | null;
};

export type ActionsListArtifactsForRepoResponseBody = {
  readonly total_count: number;
  readonly artifacts: ReadonlyArray<Artifact>;
};

export type ActionsListArtifactsForRepoResolver = msw.HttpResponseResolver<
  ActionsListArtifactsForRepoRequestParams,
  ActionsListArtifactsForRepoRequestBody,
  ActionsListArtifactsForRepoResponseBody
>;

export type ActionsGetArtifactRequestQuery = {};

export type ActionsGetArtifactRequestHeaders = {};

export type ActionsGetArtifactRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly artifact_id: string;
};

export type ActionsGetArtifactRequestBody = never;

export type ActionsGetArtifactResponseStatus = 200;

export type ActionsGetArtifactResponseBody = Artifact;

export type ActionsGetArtifactResolver = msw.HttpResponseResolver<
  ActionsGetArtifactRequestParams,
  ActionsGetArtifactRequestBody,
  ActionsGetArtifactResponseBody
>;

export type ActionsDeleteArtifactRequestQuery = {};

export type ActionsDeleteArtifactRequestHeaders = {};

export type ActionsDeleteArtifactRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly artifact_id: string;
};

export type ActionsDeleteArtifactRequestBody = never;

export type ActionsDeleteArtifactResponseStatus = 204;

export type ActionsDeleteArtifactResponseBody = never;

export type ActionsDeleteArtifactResolver = msw.HttpResponseResolver<
  ActionsDeleteArtifactRequestParams,
  ActionsDeleteArtifactRequestBody,
  ActionsDeleteArtifactResponseBody
>;

export type ActionsDownloadArtifactRequestQuery = {};

export type ActionsDownloadArtifactRequestHeaders = {};

export type ActionsDownloadArtifactRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly artifact_id: string;
  readonly archive_format: string;
};

export type ActionsDownloadArtifactRequestBody = never;

export type ActionsDownloadArtifactResponseStatus = 302 | 410;

export type ActionsDownloadArtifactResponseBody = never | BasicError;

export type ActionsDownloadArtifactResolver = msw.HttpResponseResolver<
  ActionsDownloadArtifactRequestParams,
  ActionsDownloadArtifactRequestBody,
  ActionsDownloadArtifactResponseBody
>;

export type ActionsGetActionsCacheUsageRequestQuery = {};

export type ActionsGetActionsCacheUsageRequestHeaders = {};

export type ActionsGetActionsCacheUsageRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActionsGetActionsCacheUsageRequestBody = never;

export type ActionsGetActionsCacheUsageResponseStatus = 200;

export type ActionsGetActionsCacheUsageResponseBody = ActionsCacheUsageByRepository;

export type ActionsGetActionsCacheUsageResolver = msw.HttpResponseResolver<
  ActionsGetActionsCacheUsageRequestParams,
  ActionsGetActionsCacheUsageRequestBody,
  ActionsGetActionsCacheUsageResponseBody
>;

export type ActionsGetActionsCacheListRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
  readonly ref?: string;
  readonly key?: string;
  readonly sort?: string;
  readonly direction?: string;
};

export type ActionsGetActionsCacheListRequestHeaders = {};

export type ActionsGetActionsCacheListRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActionsGetActionsCacheListRequestBody = never;

export type ActionsGetActionsCacheListResponseStatus = 200;

export type RepositoryActionsCaches = {
  readonly total_count: number;
  readonly actions_caches: ReadonlyArray<{
    readonly id?: number;
    readonly ref?: string;
    readonly key?: string;
    readonly version?: string;
    readonly last_accessed_at?: string;
    readonly created_at?: string;
    readonly size_in_bytes?: number;
  }>;
};

export type ActionsGetActionsCacheListResponseBody = RepositoryActionsCaches;

export type ActionsGetActionsCacheListResolver = msw.HttpResponseResolver<
  ActionsGetActionsCacheListRequestParams,
  ActionsGetActionsCacheListRequestBody,
  ActionsGetActionsCacheListResponseBody
>;

export type ActionsDeleteActionsCacheByKeyRequestQuery = {
  readonly key: string;
  readonly ref?: string;
};

export type ActionsDeleteActionsCacheByKeyRequestHeaders = {};

export type ActionsDeleteActionsCacheByKeyRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActionsDeleteActionsCacheByKeyRequestBody = never;

export type ActionsDeleteActionsCacheByKeyResponseStatus = 200;

export type ActionsDeleteActionsCacheByKeyResponseBody = RepositoryActionsCaches;

export type ActionsDeleteActionsCacheByKeyResolver = msw.HttpResponseResolver<
  ActionsDeleteActionsCacheByKeyRequestParams,
  ActionsDeleteActionsCacheByKeyRequestBody,
  ActionsDeleteActionsCacheByKeyResponseBody
>;

export type ActionsDeleteActionsCacheByIdRequestQuery = {};

export type ActionsDeleteActionsCacheByIdRequestHeaders = {};

export type ActionsDeleteActionsCacheByIdRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly cache_id: string;
};

export type ActionsDeleteActionsCacheByIdRequestBody = never;

export type ActionsDeleteActionsCacheByIdResponseStatus = 204;

export type ActionsDeleteActionsCacheByIdResponseBody = never;

export type ActionsDeleteActionsCacheByIdResolver = msw.HttpResponseResolver<
  ActionsDeleteActionsCacheByIdRequestParams,
  ActionsDeleteActionsCacheByIdRequestBody,
  ActionsDeleteActionsCacheByIdResponseBody
>;

export type ActionsGetJobForWorkflowRunRequestQuery = {};

export type ActionsGetJobForWorkflowRunRequestHeaders = {};

export type ActionsGetJobForWorkflowRunRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly job_id: string;
};

export type ActionsGetJobForWorkflowRunRequestBody = never;

export type ActionsGetJobForWorkflowRunResponseStatus = 200;

export type Job = {
  readonly id: number;
  readonly run_id: number;
  readonly run_url: string;
  readonly run_attempt?: number;
  readonly node_id: string;
  readonly head_sha: string;
  readonly url: string;
  readonly html_url: string | null;
  readonly status: 'queued' | 'in_progress' | 'completed';
  readonly conclusion:
    | 'success'
    | 'failure'
    | 'neutral'
    | 'cancelled'
    | 'skipped'
    | 'timed_out'
    | 'action_required'
    | null;
  readonly started_at: string;
  readonly completed_at: string | null;
  readonly name: string;
  readonly steps?: ReadonlyArray<{
    readonly status: 'queued' | 'in_progress' | 'completed';
    readonly conclusion: string | null;
    readonly name: string;
    readonly number: number;
    readonly started_at?: string | null;
    readonly completed_at?: string | null;
  }>;
  readonly check_run_url: string;
  readonly labels: ReadonlyArray<string>;
  readonly runner_id: number | null;
  readonly runner_name: string | null;
  readonly runner_group_id: number | null;
  readonly runner_group_name: string | null;
};

export type ActionsGetJobForWorkflowRunResponseBody = Job;

export type ActionsGetJobForWorkflowRunResolver = msw.HttpResponseResolver<
  ActionsGetJobForWorkflowRunRequestParams,
  ActionsGetJobForWorkflowRunRequestBody,
  ActionsGetJobForWorkflowRunResponseBody
>;

export type ActionsDownloadJobLogsForWorkflowRunRequestQuery = {};

export type ActionsDownloadJobLogsForWorkflowRunRequestHeaders = {};

export type ActionsDownloadJobLogsForWorkflowRunRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly job_id: string;
};

export type ActionsDownloadJobLogsForWorkflowRunRequestBody = never;

export type ActionsDownloadJobLogsForWorkflowRunResponseStatus = 302;

export type ActionsDownloadJobLogsForWorkflowRunResponseBody = never;

export type ActionsDownloadJobLogsForWorkflowRunResolver = msw.HttpResponseResolver<
  ActionsDownloadJobLogsForWorkflowRunRequestParams,
  ActionsDownloadJobLogsForWorkflowRunRequestBody,
  ActionsDownloadJobLogsForWorkflowRunResponseBody
>;

export type ActionsReRunJobForWorkflowRunRequestQuery = {};

export type ActionsReRunJobForWorkflowRunRequestHeaders = {};

export type ActionsReRunJobForWorkflowRunRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly job_id: string;
};

export type ActionsReRunJobForWorkflowRunRequestBody =
  | { readonly enable_debug_logging?: boolean }
  | null
  | undefined;

export type ActionsReRunJobForWorkflowRunResponseStatus = 201 | 403;

export type ActionsReRunJobForWorkflowRunResponseBody =
  | EmptyObject
  | BasicError;

export type ActionsReRunJobForWorkflowRunResolver = msw.HttpResponseResolver<
  ActionsReRunJobForWorkflowRunRequestParams,
  ActionsReRunJobForWorkflowRunRequestBody,
  ActionsReRunJobForWorkflowRunResponseBody
>;

export type ActionsGetGithubActionsPermissionsRepositoryRequestQuery = {};

export type ActionsGetGithubActionsPermissionsRepositoryRequestHeaders = {};

export type ActionsGetGithubActionsPermissionsRepositoryRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActionsGetGithubActionsPermissionsRepositoryRequestBody = never;

export type ActionsGetGithubActionsPermissionsRepositoryResponseStatus = 200;

export type ActionsEnabled = boolean;

export type ActionsRepositoryPermissions = {
  readonly enabled: ActionsEnabled;
  readonly allowed_actions?: AllowedActions;
  readonly selected_actions_url?: SelectedActionsUrl;
};

export type ActionsGetGithubActionsPermissionsRepositoryResponseBody = ActionsRepositoryPermissions;

export type ActionsGetGithubActionsPermissionsRepositoryResolver = msw.HttpResponseResolver<
  ActionsGetGithubActionsPermissionsRepositoryRequestParams,
  ActionsGetGithubActionsPermissionsRepositoryRequestBody,
  ActionsGetGithubActionsPermissionsRepositoryResponseBody
>;

export type ActionsSetGithubActionsPermissionsRepositoryRequestQuery = {};

export type ActionsSetGithubActionsPermissionsRepositoryRequestHeaders = {};

export type ActionsSetGithubActionsPermissionsRepositoryRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActionsSetGithubActionsPermissionsRepositoryRequestBody = {
  readonly enabled: ActionsEnabled;
  readonly allowed_actions?: AllowedActions;
};

export type ActionsSetGithubActionsPermissionsRepositoryResponseStatus = 204;

export type ActionsSetGithubActionsPermissionsRepositoryResponseBody = never;

export type ActionsSetGithubActionsPermissionsRepositoryResolver = msw.HttpResponseResolver<
  ActionsSetGithubActionsPermissionsRepositoryRequestParams,
  ActionsSetGithubActionsPermissionsRepositoryRequestBody,
  ActionsSetGithubActionsPermissionsRepositoryResponseBody
>;

export type ActionsGetWorkflowAccessToRepositoryRequestQuery = {};

export type ActionsGetWorkflowAccessToRepositoryRequestHeaders = {};

export type ActionsGetWorkflowAccessToRepositoryRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActionsGetWorkflowAccessToRepositoryRequestBody = never;

export type ActionsGetWorkflowAccessToRepositoryResponseStatus = 200;

export type ActionsWorkflowAccessToRepository = {
  readonly access_level: 'none' | 'organization' | 'enterprise';
};

export type ActionsGetWorkflowAccessToRepositoryResponseBody = ActionsWorkflowAccessToRepository;

export type ActionsGetWorkflowAccessToRepositoryResolver = msw.HttpResponseResolver<
  ActionsGetWorkflowAccessToRepositoryRequestParams,
  ActionsGetWorkflowAccessToRepositoryRequestBody,
  ActionsGetWorkflowAccessToRepositoryResponseBody
>;

export type ActionsSetWorkflowAccessToRepositoryRequestQuery = {};

export type ActionsSetWorkflowAccessToRepositoryRequestHeaders = {};

export type ActionsSetWorkflowAccessToRepositoryRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActionsSetWorkflowAccessToRepositoryRequestBody = ActionsWorkflowAccessToRepository;

export type ActionsSetWorkflowAccessToRepositoryResponseStatus = 204;

export type ActionsSetWorkflowAccessToRepositoryResponseBody = never;

export type ActionsSetWorkflowAccessToRepositoryResolver = msw.HttpResponseResolver<
  ActionsSetWorkflowAccessToRepositoryRequestParams,
  ActionsSetWorkflowAccessToRepositoryRequestBody,
  ActionsSetWorkflowAccessToRepositoryResponseBody
>;

export type ActionsGetAllowedActionsRepositoryRequestQuery = {};

export type ActionsGetAllowedActionsRepositoryRequestHeaders = {};

export type ActionsGetAllowedActionsRepositoryRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActionsGetAllowedActionsRepositoryRequestBody = never;

export type ActionsGetAllowedActionsRepositoryResponseStatus = 200;

export type ActionsGetAllowedActionsRepositoryResponseBody = SelectedActions;

export type ActionsGetAllowedActionsRepositoryResolver = msw.HttpResponseResolver<
  ActionsGetAllowedActionsRepositoryRequestParams,
  ActionsGetAllowedActionsRepositoryRequestBody,
  ActionsGetAllowedActionsRepositoryResponseBody
>;

export type ActionsSetAllowedActionsRepositoryRequestQuery = {};

export type ActionsSetAllowedActionsRepositoryRequestHeaders = {};

export type ActionsSetAllowedActionsRepositoryRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActionsSetAllowedActionsRepositoryRequestBody =
  | SelectedActions
  | undefined;

export type ActionsSetAllowedActionsRepositoryResponseStatus = 204;

export type ActionsSetAllowedActionsRepositoryResponseBody = never;

export type ActionsSetAllowedActionsRepositoryResolver = msw.HttpResponseResolver<
  ActionsSetAllowedActionsRepositoryRequestParams,
  ActionsSetAllowedActionsRepositoryRequestBody,
  ActionsSetAllowedActionsRepositoryResponseBody
>;

export type ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryRequestQuery = {};

export type ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryRequestHeaders = {};

export type ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryRequestBody = never;

export type ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryResponseStatus = 200;

export type ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryResponseBody = ActionsGetDefaultWorkflowPermissions;

export type ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryResolver = msw.HttpResponseResolver<
  ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryRequestParams,
  ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryRequestBody,
  ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryResponseBody
>;

export type ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryRequestQuery = {};

export type ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryRequestHeaders = {};

export type ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryRequestBody = ActionsSetDefaultWorkflowPermissions;

export type ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryResponseStatus =
  | 204
  | 409;

export type ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryResponseBody = never;

export type ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryResolver = msw.HttpResponseResolver<
  ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryRequestParams,
  ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryRequestBody,
  ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryResponseBody
>;

export type ActionsListSelfHostedRunnersForRepoRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActionsListSelfHostedRunnersForRepoRequestHeaders = {};

export type ActionsListSelfHostedRunnersForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActionsListSelfHostedRunnersForRepoRequestBody = never;

export type ActionsListSelfHostedRunnersForRepoResponseStatus = 200;

export type ActionsListSelfHostedRunnersForRepoResponseBody = {
  readonly total_count: number;
  readonly runners: ReadonlyArray<SelfHostedRunners>;
};

export type ActionsListSelfHostedRunnersForRepoResolver = msw.HttpResponseResolver<
  ActionsListSelfHostedRunnersForRepoRequestParams,
  ActionsListSelfHostedRunnersForRepoRequestBody,
  ActionsListSelfHostedRunnersForRepoResponseBody
>;

export type ActionsListRunnerApplicationsForRepoRequestQuery = {};

export type ActionsListRunnerApplicationsForRepoRequestHeaders = {};

export type ActionsListRunnerApplicationsForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActionsListRunnerApplicationsForRepoRequestBody = never;

export type ActionsListRunnerApplicationsForRepoResponseStatus = 200;

export type ActionsListRunnerApplicationsForRepoResponseBody = ReadonlyArray<RunnerApplication>;

export type ActionsListRunnerApplicationsForRepoResolver = msw.HttpResponseResolver<
  ActionsListRunnerApplicationsForRepoRequestParams,
  ActionsListRunnerApplicationsForRepoRequestBody,
  ActionsListRunnerApplicationsForRepoResponseBody
>;

export type ActionsCreateRegistrationTokenForRepoRequestQuery = {};

export type ActionsCreateRegistrationTokenForRepoRequestHeaders = {};

export type ActionsCreateRegistrationTokenForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActionsCreateRegistrationTokenForRepoRequestBody = never;

export type ActionsCreateRegistrationTokenForRepoResponseStatus = 201;

export type ActionsCreateRegistrationTokenForRepoResponseBody = AuthenticationToken;

export type ActionsCreateRegistrationTokenForRepoResolver = msw.HttpResponseResolver<
  ActionsCreateRegistrationTokenForRepoRequestParams,
  ActionsCreateRegistrationTokenForRepoRequestBody,
  ActionsCreateRegistrationTokenForRepoResponseBody
>;

export type ActionsCreateRemoveTokenForRepoRequestQuery = {};

export type ActionsCreateRemoveTokenForRepoRequestHeaders = {};

export type ActionsCreateRemoveTokenForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActionsCreateRemoveTokenForRepoRequestBody = never;

export type ActionsCreateRemoveTokenForRepoResponseStatus = 201;

export type ActionsCreateRemoveTokenForRepoResponseBody = AuthenticationToken;

export type ActionsCreateRemoveTokenForRepoResolver = msw.HttpResponseResolver<
  ActionsCreateRemoveTokenForRepoRequestParams,
  ActionsCreateRemoveTokenForRepoRequestBody,
  ActionsCreateRemoveTokenForRepoResponseBody
>;

export type ActionsGetSelfHostedRunnerForRepoRequestQuery = {};

export type ActionsGetSelfHostedRunnerForRepoRequestHeaders = {};

export type ActionsGetSelfHostedRunnerForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly runner_id: string;
};

export type ActionsGetSelfHostedRunnerForRepoRequestBody = never;

export type ActionsGetSelfHostedRunnerForRepoResponseStatus = 200;

export type ActionsGetSelfHostedRunnerForRepoResponseBody = SelfHostedRunners;

export type ActionsGetSelfHostedRunnerForRepoResolver = msw.HttpResponseResolver<
  ActionsGetSelfHostedRunnerForRepoRequestParams,
  ActionsGetSelfHostedRunnerForRepoRequestBody,
  ActionsGetSelfHostedRunnerForRepoResponseBody
>;

export type ActionsDeleteSelfHostedRunnerFromRepoRequestQuery = {};

export type ActionsDeleteSelfHostedRunnerFromRepoRequestHeaders = {};

export type ActionsDeleteSelfHostedRunnerFromRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly runner_id: string;
};

export type ActionsDeleteSelfHostedRunnerFromRepoRequestBody = never;

export type ActionsDeleteSelfHostedRunnerFromRepoResponseStatus = 204;

export type ActionsDeleteSelfHostedRunnerFromRepoResponseBody = never;

export type ActionsDeleteSelfHostedRunnerFromRepoResolver = msw.HttpResponseResolver<
  ActionsDeleteSelfHostedRunnerFromRepoRequestParams,
  ActionsDeleteSelfHostedRunnerFromRepoRequestBody,
  ActionsDeleteSelfHostedRunnerFromRepoResponseBody
>;

export type ActionsListLabelsForSelfHostedRunnerForRepoRequestQuery = {};

export type ActionsListLabelsForSelfHostedRunnerForRepoRequestHeaders = {};

export type ActionsListLabelsForSelfHostedRunnerForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly runner_id: string;
};

export type ActionsListLabelsForSelfHostedRunnerForRepoRequestBody = never;

export type ActionsListLabelsForSelfHostedRunnerForRepoResponseStatus =
  | 200
  | 404;

export type ActionsListLabelsForSelfHostedRunnerForRepoResponseBody =
  | {
      readonly total_count: number;
      readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
    }
  | BasicError;

export type ActionsListLabelsForSelfHostedRunnerForRepoResolver = msw.HttpResponseResolver<
  ActionsListLabelsForSelfHostedRunnerForRepoRequestParams,
  ActionsListLabelsForSelfHostedRunnerForRepoRequestBody,
  ActionsListLabelsForSelfHostedRunnerForRepoResponseBody
>;

export type ActionsAddCustomLabelsToSelfHostedRunnerForRepoRequestQuery = {};

export type ActionsAddCustomLabelsToSelfHostedRunnerForRepoRequestHeaders = {};

export type ActionsAddCustomLabelsToSelfHostedRunnerForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly runner_id: string;
};

export type ActionsAddCustomLabelsToSelfHostedRunnerForRepoRequestBody = {
  readonly labels: ReadonlyArray<string>;
};

export type ActionsAddCustomLabelsToSelfHostedRunnerForRepoResponseStatus =
  | 200
  | 404
  | 422;

export type ActionsAddCustomLabelsToSelfHostedRunnerForRepoResponseBody =
  | {
      readonly total_count: number;
      readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
    }
  | BasicError
  | ValidationErrorSimple;

export type ActionsAddCustomLabelsToSelfHostedRunnerForRepoResolver = msw.HttpResponseResolver<
  ActionsAddCustomLabelsToSelfHostedRunnerForRepoRequestParams,
  ActionsAddCustomLabelsToSelfHostedRunnerForRepoRequestBody,
  ActionsAddCustomLabelsToSelfHostedRunnerForRepoResponseBody
>;

export type ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequestQuery = {};

export type ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequestHeaders = {};

export type ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly runner_id: string;
};

export type ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequestBody = {
  readonly labels: ReadonlyArray<string>;
};

export type ActionsSetCustomLabelsForSelfHostedRunnerForRepoResponseStatus =
  | 200
  | 404
  | 422;

export type ActionsSetCustomLabelsForSelfHostedRunnerForRepoResponseBody =
  | {
      readonly total_count: number;
      readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
    }
  | BasicError
  | ValidationErrorSimple;

export type ActionsSetCustomLabelsForSelfHostedRunnerForRepoResolver = msw.HttpResponseResolver<
  ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequestParams,
  ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequestBody,
  ActionsSetCustomLabelsForSelfHostedRunnerForRepoResponseBody
>;

export type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoRequestQuery = {};

export type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoRequestHeaders = {};

export type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly runner_id: string;
};

export type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoRequestBody = never;

export type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoResponseStatus =
  | 200
  | 404;

export type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoResponseBody =
  | {
      readonly total_count: number;
      readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
    }
  | BasicError;

export type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoResolver = msw.HttpResponseResolver<
  ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoRequestParams,
  ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoRequestBody,
  ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoResponseBody
>;

export type ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoRequestQuery = {};

export type ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoRequestHeaders = {};

export type ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly runner_id: string;
  readonly name: string;
};

export type ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoRequestBody = never;

export type ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoResponseStatus =
  | 200
  | 404
  | 422;

export type ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoResponseBody =
  | {
      readonly total_count: number;
      readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
    }
  | BasicError
  | ValidationErrorSimple;

export type ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoResolver = msw.HttpResponseResolver<
  ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoRequestParams,
  ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoRequestBody,
  ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoResponseBody
>;

export type ActionsListWorkflowRunsForRepoRequestQuery = {
  readonly actor?: string;
  readonly branch?: string;
  readonly event?: string;
  readonly status?: string;
  readonly per_page?: string;
  readonly page?: string;
  readonly created?: string;
  readonly exclude_pull_requests?: string;
  readonly check_suite_id?: string;
  readonly head_sha?: string;
};

export type ActionsListWorkflowRunsForRepoRequestHeaders = {};

export type ActionsListWorkflowRunsForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActionsListWorkflowRunsForRepoRequestBody = never;

export type ActionsListWorkflowRunsForRepoResponseStatus = 200;

export type ReferencedWorkflow = {
  readonly path: string;
  readonly sha: string;
  readonly ref?: string;
};

export type PullRequestMinimal = {
  readonly id: number;
  readonly number: number;
  readonly url: string;
  readonly head: {
    readonly ref: string;
    readonly sha: string;
    readonly repo: {
      readonly id: number;
      readonly url: string;
      readonly name: string;
    };
  };
  readonly base: {
    readonly ref: string;
    readonly sha: string;
    readonly repo: {
      readonly id: number;
      readonly url: string;
      readonly name: string;
    };
  };
};

export type SimpleCommit = {
  readonly id: string;
  readonly tree_id: string;
  readonly message: string;
  readonly timestamp: string;
  readonly author: { readonly name: string; readonly email: string } | null;
  readonly committer: { readonly name: string; readonly email: string } | null;
} | null;

export type WorkflowRun = {
  readonly id: number;
  readonly name?: string | null;
  readonly node_id: string;
  readonly check_suite_id?: number;
  readonly check_suite_node_id?: string;
  readonly head_branch: string | null;
  readonly head_sha: string;
  readonly path: string;
  readonly run_number: number;
  readonly run_attempt?: number;
  readonly referenced_workflows?: ReadonlyArray<ReferencedWorkflow> | null;
  readonly event: string;
  readonly status: string | null;
  readonly conclusion: string | null;
  readonly workflow_id: number;
  readonly url: string;
  readonly html_url: string;
  readonly pull_requests: ReadonlyArray<PullRequestMinimal> | null;
  readonly created_at: string;
  readonly updated_at: string;
  readonly actor?: SimpleUser;
  readonly triggering_actor?: SimpleUser;
  readonly run_started_at?: string;
  readonly jobs_url: string;
  readonly logs_url: string;
  readonly check_suite_url: string;
  readonly artifacts_url: string;
  readonly cancel_url: string;
  readonly rerun_url: string;
  readonly previous_attempt_url?: string | null;
  readonly workflow_url: string;
  readonly head_commit: SimpleCommit;
  readonly repository: MinimalRepository;
  readonly head_repository: MinimalRepository;
  readonly head_repository_id?: number;
  readonly display_title: string;
};

export type ActionsListWorkflowRunsForRepoResponseBody = {
  readonly total_count: number;
  readonly workflow_runs: ReadonlyArray<WorkflowRun>;
};

export type ActionsListWorkflowRunsForRepoResolver = msw.HttpResponseResolver<
  ActionsListWorkflowRunsForRepoRequestParams,
  ActionsListWorkflowRunsForRepoRequestBody,
  ActionsListWorkflowRunsForRepoResponseBody
>;

export type ActionsGetWorkflowRunRequestQuery = {
  readonly exclude_pull_requests?: string;
};

export type ActionsGetWorkflowRunRequestHeaders = {};

export type ActionsGetWorkflowRunRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly run_id: string;
};

export type ActionsGetWorkflowRunRequestBody = never;

export type ActionsGetWorkflowRunResponseStatus = 200;

export type ActionsGetWorkflowRunResponseBody = WorkflowRun;

export type ActionsGetWorkflowRunResolver = msw.HttpResponseResolver<
  ActionsGetWorkflowRunRequestParams,
  ActionsGetWorkflowRunRequestBody,
  ActionsGetWorkflowRunResponseBody
>;

export type ActionsDeleteWorkflowRunRequestQuery = {};

export type ActionsDeleteWorkflowRunRequestHeaders = {};

export type ActionsDeleteWorkflowRunRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly run_id: string;
};

export type ActionsDeleteWorkflowRunRequestBody = never;

export type ActionsDeleteWorkflowRunResponseStatus = 204;

export type ActionsDeleteWorkflowRunResponseBody = never;

export type ActionsDeleteWorkflowRunResolver = msw.HttpResponseResolver<
  ActionsDeleteWorkflowRunRequestParams,
  ActionsDeleteWorkflowRunRequestBody,
  ActionsDeleteWorkflowRunResponseBody
>;

export type ActionsGetReviewsForRunRequestQuery = {};

export type ActionsGetReviewsForRunRequestHeaders = {};

export type ActionsGetReviewsForRunRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly run_id: string;
};

export type ActionsGetReviewsForRunRequestBody = never;

export type ActionsGetReviewsForRunResponseStatus = 200;

export type EnvironmentApproval = {
  readonly environments: ReadonlyArray<{
    readonly id?: number;
    readonly node_id?: string;
    readonly name?: string;
    readonly url?: string;
    readonly html_url?: string;
    readonly created_at?: string;
    readonly updated_at?: string;
  }>;
  readonly state: 'approved' | 'rejected';
  readonly user: SimpleUser;
  readonly comment: string;
};

export type ActionsGetReviewsForRunResponseBody = ReadonlyArray<EnvironmentApproval>;

export type ActionsGetReviewsForRunResolver = msw.HttpResponseResolver<
  ActionsGetReviewsForRunRequestParams,
  ActionsGetReviewsForRunRequestBody,
  ActionsGetReviewsForRunResponseBody
>;

export type ActionsApproveWorkflowRunRequestQuery = {};

export type ActionsApproveWorkflowRunRequestHeaders = {};

export type ActionsApproveWorkflowRunRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly run_id: string;
};

export type ActionsApproveWorkflowRunRequestBody = never;

export type ActionsApproveWorkflowRunResponseStatus = 201 | 403 | 404;

export type ActionsApproveWorkflowRunResponseBody = EmptyObject | BasicError;

export type ActionsApproveWorkflowRunResolver = msw.HttpResponseResolver<
  ActionsApproveWorkflowRunRequestParams,
  ActionsApproveWorkflowRunRequestBody,
  ActionsApproveWorkflowRunResponseBody
>;

export type ActionsListWorkflowRunArtifactsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActionsListWorkflowRunArtifactsRequestHeaders = {};

export type ActionsListWorkflowRunArtifactsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly run_id: string;
};

export type ActionsListWorkflowRunArtifactsRequestBody = never;

export type ActionsListWorkflowRunArtifactsResponseStatus = 200;

export type ActionsListWorkflowRunArtifactsResponseBody = {
  readonly total_count: number;
  readonly artifacts: ReadonlyArray<Artifact>;
};

export type ActionsListWorkflowRunArtifactsResolver = msw.HttpResponseResolver<
  ActionsListWorkflowRunArtifactsRequestParams,
  ActionsListWorkflowRunArtifactsRequestBody,
  ActionsListWorkflowRunArtifactsResponseBody
>;

export type ActionsGetWorkflowRunAttemptRequestQuery = {
  readonly exclude_pull_requests?: string;
};

export type ActionsGetWorkflowRunAttemptRequestHeaders = {};

export type ActionsGetWorkflowRunAttemptRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly run_id: string;
  readonly attempt_number: string;
};

export type ActionsGetWorkflowRunAttemptRequestBody = never;

export type ActionsGetWorkflowRunAttemptResponseStatus = 200;

export type ActionsGetWorkflowRunAttemptResponseBody = WorkflowRun;

export type ActionsGetWorkflowRunAttemptResolver = msw.HttpResponseResolver<
  ActionsGetWorkflowRunAttemptRequestParams,
  ActionsGetWorkflowRunAttemptRequestBody,
  ActionsGetWorkflowRunAttemptResponseBody
>;

export type ActionsListJobsForWorkflowRunAttemptRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActionsListJobsForWorkflowRunAttemptRequestHeaders = {};

export type ActionsListJobsForWorkflowRunAttemptRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly run_id: string;
  readonly attempt_number: string;
};

export type ActionsListJobsForWorkflowRunAttemptRequestBody = never;

export type ActionsListJobsForWorkflowRunAttemptResponseStatus = 200 | 404;

export type ActionsListJobsForWorkflowRunAttemptResponseBody =
  | { readonly total_count: number; readonly jobs: ReadonlyArray<Job> }
  | BasicError;

export type ActionsListJobsForWorkflowRunAttemptResolver = msw.HttpResponseResolver<
  ActionsListJobsForWorkflowRunAttemptRequestParams,
  ActionsListJobsForWorkflowRunAttemptRequestBody,
  ActionsListJobsForWorkflowRunAttemptResponseBody
>;

export type ActionsDownloadWorkflowRunAttemptLogsRequestQuery = {};

export type ActionsDownloadWorkflowRunAttemptLogsRequestHeaders = {};

export type ActionsDownloadWorkflowRunAttemptLogsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly run_id: string;
  readonly attempt_number: string;
};

export type ActionsDownloadWorkflowRunAttemptLogsRequestBody = never;

export type ActionsDownloadWorkflowRunAttemptLogsResponseStatus = 302;

export type ActionsDownloadWorkflowRunAttemptLogsResponseBody = never;

export type ActionsDownloadWorkflowRunAttemptLogsResolver = msw.HttpResponseResolver<
  ActionsDownloadWorkflowRunAttemptLogsRequestParams,
  ActionsDownloadWorkflowRunAttemptLogsRequestBody,
  ActionsDownloadWorkflowRunAttemptLogsResponseBody
>;

export type ActionsCancelWorkflowRunRequestQuery = {};

export type ActionsCancelWorkflowRunRequestHeaders = {};

export type ActionsCancelWorkflowRunRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly run_id: string;
};

export type ActionsCancelWorkflowRunRequestBody = never;

export type ActionsCancelWorkflowRunResponseStatus = 202 | 409;

export type ActionsCancelWorkflowRunResponseBody = EmptyObject | BasicError;

export type ActionsCancelWorkflowRunResolver = msw.HttpResponseResolver<
  ActionsCancelWorkflowRunRequestParams,
  ActionsCancelWorkflowRunRequestBody,
  ActionsCancelWorkflowRunResponseBody
>;

export type ActionsListJobsForWorkflowRunRequestQuery = {
  readonly filter?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ActionsListJobsForWorkflowRunRequestHeaders = {};

export type ActionsListJobsForWorkflowRunRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly run_id: string;
};

export type ActionsListJobsForWorkflowRunRequestBody = never;

export type ActionsListJobsForWorkflowRunResponseStatus = 200;

export type ActionsListJobsForWorkflowRunResponseBody = {
  readonly total_count: number;
  readonly jobs: ReadonlyArray<Job>;
};

export type ActionsListJobsForWorkflowRunResolver = msw.HttpResponseResolver<
  ActionsListJobsForWorkflowRunRequestParams,
  ActionsListJobsForWorkflowRunRequestBody,
  ActionsListJobsForWorkflowRunResponseBody
>;

export type ActionsDownloadWorkflowRunLogsRequestQuery = {};

export type ActionsDownloadWorkflowRunLogsRequestHeaders = {};

export type ActionsDownloadWorkflowRunLogsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly run_id: string;
};

export type ActionsDownloadWorkflowRunLogsRequestBody = never;

export type ActionsDownloadWorkflowRunLogsResponseStatus = 302;

export type ActionsDownloadWorkflowRunLogsResponseBody = never;

export type ActionsDownloadWorkflowRunLogsResolver = msw.HttpResponseResolver<
  ActionsDownloadWorkflowRunLogsRequestParams,
  ActionsDownloadWorkflowRunLogsRequestBody,
  ActionsDownloadWorkflowRunLogsResponseBody
>;

export type ActionsDeleteWorkflowRunLogsRequestQuery = {};

export type ActionsDeleteWorkflowRunLogsRequestHeaders = {};

export type ActionsDeleteWorkflowRunLogsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly run_id: string;
};

export type ActionsDeleteWorkflowRunLogsRequestBody = never;

export type ActionsDeleteWorkflowRunLogsResponseStatus = 204 | 403 | 500;

export type ActionsDeleteWorkflowRunLogsResponseBody = never | BasicError;

export type ActionsDeleteWorkflowRunLogsResolver = msw.HttpResponseResolver<
  ActionsDeleteWorkflowRunLogsRequestParams,
  ActionsDeleteWorkflowRunLogsRequestBody,
  ActionsDeleteWorkflowRunLogsResponseBody
>;

export type ActionsGetPendingDeploymentsForRunRequestQuery = {};

export type ActionsGetPendingDeploymentsForRunRequestHeaders = {};

export type ActionsGetPendingDeploymentsForRunRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly run_id: string;
};

export type ActionsGetPendingDeploymentsForRunRequestBody = never;

export type ActionsGetPendingDeploymentsForRunResponseStatus = 200;

export type DeploymentReviewerType = 'User' | 'Team';

export type PendingDeployment = {
  readonly environment: {
    readonly id?: number;
    readonly node_id?: string;
    readonly name?: string;
    readonly url?: string;
    readonly html_url?: string;
  };
  readonly wait_timer: number;
  readonly wait_timer_started_at: string | null;
  readonly current_user_can_approve: boolean;
  readonly reviewers: ReadonlyArray<{
    readonly type?: DeploymentReviewerType;
    readonly reviewer?: SimpleUser | Team;
  }>;
};

export type ActionsGetPendingDeploymentsForRunResponseBody = ReadonlyArray<PendingDeployment>;

export type ActionsGetPendingDeploymentsForRunResolver = msw.HttpResponseResolver<
  ActionsGetPendingDeploymentsForRunRequestParams,
  ActionsGetPendingDeploymentsForRunRequestBody,
  ActionsGetPendingDeploymentsForRunResponseBody
>;

export type ActionsReviewPendingDeploymentsForRunRequestQuery = {};

export type ActionsReviewPendingDeploymentsForRunRequestHeaders = {};

export type ActionsReviewPendingDeploymentsForRunRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly run_id: string;
};

export type ActionsReviewPendingDeploymentsForRunRequestBody = {
  readonly environment_ids: ReadonlyArray<number>;
  readonly state: 'approved' | 'rejected';
  readonly comment: string;
};

export type ActionsReviewPendingDeploymentsForRunResponseStatus = 200;

export type Deployment = {
  readonly url: string;
  readonly id: number;
  readonly node_id: string;
  readonly sha: string;
  readonly ref: string;
  readonly task: string;
  readonly payload: never | string;
  readonly original_environment?: string;
  readonly environment: string;
  readonly description: string | null;
  readonly creator: SimpleUser;
  readonly created_at: string;
  readonly updated_at: string;
  readonly statuses_url: string;
  readonly repository_url: string;
  readonly transient_environment?: boolean;
  readonly production_environment?: boolean;
  readonly performed_via_github_app?: GitHubApp;
};

export type ActionsReviewPendingDeploymentsForRunResponseBody = ReadonlyArray<Deployment>;

export type ActionsReviewPendingDeploymentsForRunResolver = msw.HttpResponseResolver<
  ActionsReviewPendingDeploymentsForRunRequestParams,
  ActionsReviewPendingDeploymentsForRunRequestBody,
  ActionsReviewPendingDeploymentsForRunResponseBody
>;

export type ActionsReRunWorkflowRequestQuery = {};

export type ActionsReRunWorkflowRequestHeaders = {};

export type ActionsReRunWorkflowRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly run_id: string;
};

export type ActionsReRunWorkflowRequestBody =
  | { readonly enable_debug_logging?: boolean }
  | null
  | undefined;

export type ActionsReRunWorkflowResponseStatus = 201;

export type ActionsReRunWorkflowResponseBody = EmptyObject;

export type ActionsReRunWorkflowResolver = msw.HttpResponseResolver<
  ActionsReRunWorkflowRequestParams,
  ActionsReRunWorkflowRequestBody,
  ActionsReRunWorkflowResponseBody
>;

export type ActionsReRunWorkflowFailedJobsRequestQuery = {};

export type ActionsReRunWorkflowFailedJobsRequestHeaders = {};

export type ActionsReRunWorkflowFailedJobsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly run_id: string;
};

export type ActionsReRunWorkflowFailedJobsRequestBody =
  | { readonly enable_debug_logging?: boolean }
  | null
  | undefined;

export type ActionsReRunWorkflowFailedJobsResponseStatus = 201;

export type ActionsReRunWorkflowFailedJobsResponseBody = EmptyObject;

export type ActionsReRunWorkflowFailedJobsResolver = msw.HttpResponseResolver<
  ActionsReRunWorkflowFailedJobsRequestParams,
  ActionsReRunWorkflowFailedJobsRequestBody,
  ActionsReRunWorkflowFailedJobsResponseBody
>;

export type ActionsGetWorkflowRunUsageRequestQuery = {};

export type ActionsGetWorkflowRunUsageRequestHeaders = {};

export type ActionsGetWorkflowRunUsageRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly run_id: string;
};

export type ActionsGetWorkflowRunUsageRequestBody = never;

export type ActionsGetWorkflowRunUsageResponseStatus = 200;

export type WorkflowRunUsage = {
  readonly billable: {
    readonly UBUNTU?: {
      readonly total_ms: number;
      readonly jobs: number;
      readonly job_runs?: ReadonlyArray<{
        readonly job_id: number;
        readonly duration_ms: number;
      }>;
    };
    readonly MACOS?: {
      readonly total_ms: number;
      readonly jobs: number;
      readonly job_runs?: ReadonlyArray<{
        readonly job_id: number;
        readonly duration_ms: number;
      }>;
    };
    readonly WINDOWS?: {
      readonly total_ms: number;
      readonly jobs: number;
      readonly job_runs?: ReadonlyArray<{
        readonly job_id: number;
        readonly duration_ms: number;
      }>;
    };
  };
  readonly run_duration_ms?: number;
};

export type ActionsGetWorkflowRunUsageResponseBody = WorkflowRunUsage;

export type ActionsGetWorkflowRunUsageResolver = msw.HttpResponseResolver<
  ActionsGetWorkflowRunUsageRequestParams,
  ActionsGetWorkflowRunUsageRequestBody,
  ActionsGetWorkflowRunUsageResponseBody
>;

export type ActionsListRepoSecretsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActionsListRepoSecretsRequestHeaders = {};

export type ActionsListRepoSecretsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActionsListRepoSecretsRequestBody = never;

export type ActionsListRepoSecretsResponseStatus = 200;

export type ActionsSecret = {
  readonly name: string;
  readonly created_at: string;
  readonly updated_at: string;
};

export type ActionsListRepoSecretsResponseBody = {
  readonly total_count: number;
  readonly secrets: ReadonlyArray<ActionsSecret>;
};

export type ActionsListRepoSecretsResolver = msw.HttpResponseResolver<
  ActionsListRepoSecretsRequestParams,
  ActionsListRepoSecretsRequestBody,
  ActionsListRepoSecretsResponseBody
>;

export type ActionsGetRepoPublicKeyRequestQuery = {};

export type ActionsGetRepoPublicKeyRequestHeaders = {};

export type ActionsGetRepoPublicKeyRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActionsGetRepoPublicKeyRequestBody = never;

export type ActionsGetRepoPublicKeyResponseStatus = 200;

export type ActionsGetRepoPublicKeyResponseBody = ActionsPublicKey;

export type ActionsGetRepoPublicKeyResolver = msw.HttpResponseResolver<
  ActionsGetRepoPublicKeyRequestParams,
  ActionsGetRepoPublicKeyRequestBody,
  ActionsGetRepoPublicKeyResponseBody
>;

export type ActionsGetRepoSecretRequestQuery = {};

export type ActionsGetRepoSecretRequestHeaders = {};

export type ActionsGetRepoSecretRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly secret_name: string;
};

export type ActionsGetRepoSecretRequestBody = never;

export type ActionsGetRepoSecretResponseStatus = 200;

export type ActionsGetRepoSecretResponseBody = ActionsSecret;

export type ActionsGetRepoSecretResolver = msw.HttpResponseResolver<
  ActionsGetRepoSecretRequestParams,
  ActionsGetRepoSecretRequestBody,
  ActionsGetRepoSecretResponseBody
>;

export type ActionsCreateOrUpdateRepoSecretRequestQuery = {};

export type ActionsCreateOrUpdateRepoSecretRequestHeaders = {};

export type ActionsCreateOrUpdateRepoSecretRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly secret_name: string;
};

export type ActionsCreateOrUpdateRepoSecretRequestBody = {
  readonly encrypted_value?: string;
  readonly key_id?: string;
};

export type ActionsCreateOrUpdateRepoSecretResponseStatus = 201 | 204;

export type ActionsCreateOrUpdateRepoSecretResponseBody = EmptyObject | never;

export type ActionsCreateOrUpdateRepoSecretResolver = msw.HttpResponseResolver<
  ActionsCreateOrUpdateRepoSecretRequestParams,
  ActionsCreateOrUpdateRepoSecretRequestBody,
  ActionsCreateOrUpdateRepoSecretResponseBody
>;

export type ActionsDeleteRepoSecretRequestQuery = {};

export type ActionsDeleteRepoSecretRequestHeaders = {};

export type ActionsDeleteRepoSecretRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly secret_name: string;
};

export type ActionsDeleteRepoSecretRequestBody = never;

export type ActionsDeleteRepoSecretResponseStatus = 204;

export type ActionsDeleteRepoSecretResponseBody = never;

export type ActionsDeleteRepoSecretResolver = msw.HttpResponseResolver<
  ActionsDeleteRepoSecretRequestParams,
  ActionsDeleteRepoSecretRequestBody,
  ActionsDeleteRepoSecretResponseBody
>;

export type ActionsListRepoWorkflowsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActionsListRepoWorkflowsRequestHeaders = {};

export type ActionsListRepoWorkflowsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActionsListRepoWorkflowsRequestBody = never;

export type ActionsListRepoWorkflowsResponseStatus = 200;

export type Workflow = {
  readonly id: number;
  readonly node_id: string;
  readonly name: string;
  readonly path: string;
  readonly state:
    | 'active'
    | 'deleted'
    | 'disabled_fork'
    | 'disabled_inactivity'
    | 'disabled_manually';
  readonly created_at: string;
  readonly updated_at: string;
  readonly url: string;
  readonly html_url: string;
  readonly badge_url: string;
  readonly deleted_at?: string;
};

export type ActionsListRepoWorkflowsResponseBody = {
  readonly total_count: number;
  readonly workflows: ReadonlyArray<Workflow>;
};

export type ActionsListRepoWorkflowsResolver = msw.HttpResponseResolver<
  ActionsListRepoWorkflowsRequestParams,
  ActionsListRepoWorkflowsRequestBody,
  ActionsListRepoWorkflowsResponseBody
>;

export type ActionsGetWorkflowRequestQuery = {};

export type ActionsGetWorkflowRequestHeaders = {};

export type ActionsGetWorkflowRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly workflow_id: string;
};

export type ActionsGetWorkflowRequestBody = never;

export type ActionsGetWorkflowResponseStatus = 200;

export type ActionsGetWorkflowResponseBody = Workflow;

export type ActionsGetWorkflowResolver = msw.HttpResponseResolver<
  ActionsGetWorkflowRequestParams,
  ActionsGetWorkflowRequestBody,
  ActionsGetWorkflowResponseBody
>;

export type ActionsDisableWorkflowRequestQuery = {};

export type ActionsDisableWorkflowRequestHeaders = {};

export type ActionsDisableWorkflowRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly workflow_id: string;
};

export type ActionsDisableWorkflowRequestBody = never;

export type ActionsDisableWorkflowResponseStatus = 204;

export type ActionsDisableWorkflowResponseBody = never;

export type ActionsDisableWorkflowResolver = msw.HttpResponseResolver<
  ActionsDisableWorkflowRequestParams,
  ActionsDisableWorkflowRequestBody,
  ActionsDisableWorkflowResponseBody
>;

export type ActionsCreateWorkflowDispatchRequestQuery = {};

export type ActionsCreateWorkflowDispatchRequestHeaders = {};

export type ActionsCreateWorkflowDispatchRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly workflow_id: string;
};

export type ActionsCreateWorkflowDispatchRequestBody = {
  readonly ref: string;
  readonly inputs?: never;
};

export type ActionsCreateWorkflowDispatchResponseStatus = 204;

export type ActionsCreateWorkflowDispatchResponseBody = never;

export type ActionsCreateWorkflowDispatchResolver = msw.HttpResponseResolver<
  ActionsCreateWorkflowDispatchRequestParams,
  ActionsCreateWorkflowDispatchRequestBody,
  ActionsCreateWorkflowDispatchResponseBody
>;

export type ActionsEnableWorkflowRequestQuery = {};

export type ActionsEnableWorkflowRequestHeaders = {};

export type ActionsEnableWorkflowRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly workflow_id: string;
};

export type ActionsEnableWorkflowRequestBody = never;

export type ActionsEnableWorkflowResponseStatus = 204;

export type ActionsEnableWorkflowResponseBody = never;

export type ActionsEnableWorkflowResolver = msw.HttpResponseResolver<
  ActionsEnableWorkflowRequestParams,
  ActionsEnableWorkflowRequestBody,
  ActionsEnableWorkflowResponseBody
>;

export type ActionsListWorkflowRunsRequestQuery = {
  readonly actor?: string;
  readonly branch?: string;
  readonly event?: string;
  readonly status?: string;
  readonly per_page?: string;
  readonly page?: string;
  readonly created?: string;
  readonly exclude_pull_requests?: string;
  readonly check_suite_id?: string;
  readonly head_sha?: string;
};

export type ActionsListWorkflowRunsRequestHeaders = {};

export type ActionsListWorkflowRunsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly workflow_id: string;
};

export type ActionsListWorkflowRunsRequestBody = never;

export type ActionsListWorkflowRunsResponseStatus = 200;

export type ActionsListWorkflowRunsResponseBody = {
  readonly total_count: number;
  readonly workflow_runs: ReadonlyArray<WorkflowRun>;
};

export type ActionsListWorkflowRunsResolver = msw.HttpResponseResolver<
  ActionsListWorkflowRunsRequestParams,
  ActionsListWorkflowRunsRequestBody,
  ActionsListWorkflowRunsResponseBody
>;

export type ActionsGetWorkflowUsageRequestQuery = {};

export type ActionsGetWorkflowUsageRequestHeaders = {};

export type ActionsGetWorkflowUsageRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly workflow_id: string;
};

export type ActionsGetWorkflowUsageRequestBody = never;

export type ActionsGetWorkflowUsageResponseStatus = 200;

export type WorkflowUsage = {
  readonly billable: {
    readonly UBUNTU?: { readonly total_ms?: number };
    readonly MACOS?: { readonly total_ms?: number };
    readonly WINDOWS?: { readonly total_ms?: number };
  };
};

export type ActionsGetWorkflowUsageResponseBody = WorkflowUsage;

export type ActionsGetWorkflowUsageResolver = msw.HttpResponseResolver<
  ActionsGetWorkflowUsageRequestParams,
  ActionsGetWorkflowUsageRequestBody,
  ActionsGetWorkflowUsageResponseBody
>;

export type IssuesListAssigneesRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type IssuesListAssigneesRequestHeaders = {};

export type IssuesListAssigneesRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type IssuesListAssigneesRequestBody = never;

export type IssuesListAssigneesResponseStatus = 200 | 404;

export type IssuesListAssigneesResponseBody =
  | ReadonlyArray<SimpleUser>
  | BasicError;

export type IssuesListAssigneesResolver = msw.HttpResponseResolver<
  IssuesListAssigneesRequestParams,
  IssuesListAssigneesRequestBody,
  IssuesListAssigneesResponseBody
>;

export type IssuesCheckUserCanBeAssignedRequestQuery = {};

export type IssuesCheckUserCanBeAssignedRequestHeaders = {};

export type IssuesCheckUserCanBeAssignedRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly assignee: string;
};

export type IssuesCheckUserCanBeAssignedRequestBody = never;

export type IssuesCheckUserCanBeAssignedResponseStatus = 204 | 404;

export type IssuesCheckUserCanBeAssignedResponseBody = never | BasicError;

export type IssuesCheckUserCanBeAssignedResolver = msw.HttpResponseResolver<
  IssuesCheckUserCanBeAssignedRequestParams,
  IssuesCheckUserCanBeAssignedRequestBody,
  IssuesCheckUserCanBeAssignedResponseBody
>;

export type ReposListAutolinksRequestQuery = { readonly page?: string };

export type ReposListAutolinksRequestHeaders = {};

export type ReposListAutolinksRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposListAutolinksRequestBody = never;

export type ReposListAutolinksResponseStatus = 200;

export type AutolinkReference = {
  readonly id: number;
  readonly key_prefix: string;
  readonly url_template: string;
  readonly is_alphanumeric: boolean;
};

export type ReposListAutolinksResponseBody = ReadonlyArray<AutolinkReference>;

export type ReposListAutolinksResolver = msw.HttpResponseResolver<
  ReposListAutolinksRequestParams,
  ReposListAutolinksRequestBody,
  ReposListAutolinksResponseBody
>;

export type ReposCreateAutolinkRequestQuery = {};

export type ReposCreateAutolinkRequestHeaders = {};

export type ReposCreateAutolinkRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposCreateAutolinkRequestBody = {
  readonly key_prefix: string;
  readonly url_template: string;
  readonly is_alphanumeric?: boolean;
};

export type ReposCreateAutolinkResponseStatus = 201 | 422;

export type ReposCreateAutolinkResponseBody =
  | AutolinkReference
  | ValidationError;

export type ReposCreateAutolinkResolver = msw.HttpResponseResolver<
  ReposCreateAutolinkRequestParams,
  ReposCreateAutolinkRequestBody,
  ReposCreateAutolinkResponseBody
>;

export type ReposGetAutolinkRequestQuery = {};

export type ReposGetAutolinkRequestHeaders = {};

export type ReposGetAutolinkRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly autolink_id: string;
};

export type ReposGetAutolinkRequestBody = never;

export type ReposGetAutolinkResponseStatus = 200 | 404;

export type ReposGetAutolinkResponseBody = AutolinkReference | BasicError;

export type ReposGetAutolinkResolver = msw.HttpResponseResolver<
  ReposGetAutolinkRequestParams,
  ReposGetAutolinkRequestBody,
  ReposGetAutolinkResponseBody
>;

export type ReposDeleteAutolinkRequestQuery = {};

export type ReposDeleteAutolinkRequestHeaders = {};

export type ReposDeleteAutolinkRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly autolink_id: string;
};

export type ReposDeleteAutolinkRequestBody = never;

export type ReposDeleteAutolinkResponseStatus = 204 | 404;

export type ReposDeleteAutolinkResponseBody = never | BasicError;

export type ReposDeleteAutolinkResolver = msw.HttpResponseResolver<
  ReposDeleteAutolinkRequestParams,
  ReposDeleteAutolinkRequestBody,
  ReposDeleteAutolinkResponseBody
>;

export type ReposEnableAutomatedSecurityFixesRequestQuery = {};

export type ReposEnableAutomatedSecurityFixesRequestHeaders = {};

export type ReposEnableAutomatedSecurityFixesRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposEnableAutomatedSecurityFixesRequestBody = never;

export type ReposEnableAutomatedSecurityFixesResponseStatus = 204;

export type ReposEnableAutomatedSecurityFixesResponseBody = never;

export type ReposEnableAutomatedSecurityFixesResolver = msw.HttpResponseResolver<
  ReposEnableAutomatedSecurityFixesRequestParams,
  ReposEnableAutomatedSecurityFixesRequestBody,
  ReposEnableAutomatedSecurityFixesResponseBody
>;

export type ReposDisableAutomatedSecurityFixesRequestQuery = {};

export type ReposDisableAutomatedSecurityFixesRequestHeaders = {};

export type ReposDisableAutomatedSecurityFixesRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposDisableAutomatedSecurityFixesRequestBody = never;

export type ReposDisableAutomatedSecurityFixesResponseStatus = 204;

export type ReposDisableAutomatedSecurityFixesResponseBody = never;

export type ReposDisableAutomatedSecurityFixesResolver = msw.HttpResponseResolver<
  ReposDisableAutomatedSecurityFixesRequestParams,
  ReposDisableAutomatedSecurityFixesRequestBody,
  ReposDisableAutomatedSecurityFixesResponseBody
>;

export type ReposListBranchesRequestQuery = {
  readonly protected?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListBranchesRequestHeaders = {};

export type ReposListBranchesRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposListBranchesRequestBody = never;

export type ReposListBranchesResponseStatus = 200 | 404;

export type ProtectedBranchRequiredStatusCheck = {
  readonly url?: string;
  readonly enforcement_level?: string;
  readonly contexts: ReadonlyArray<string>;
  readonly checks: ReadonlyArray<{
    readonly context: string;
    readonly app_id: number | null;
  }>;
  readonly contexts_url?: string;
  readonly strict?: boolean;
};

export type ProtectedBranchAdminEnforced = {
  readonly url: string;
  readonly enabled: boolean;
};

export type ProtectedBranchPullRequestReview = {
  readonly url?: string;
  readonly dismissal_restrictions?: {
    readonly users?: ReadonlyArray<SimpleUser>;
    readonly teams?: ReadonlyArray<Team>;
    readonly apps?: ReadonlyArray<GitHubApp>;
    readonly url?: string;
    readonly users_url?: string;
    readonly teams_url?: string;
  };
  readonly bypass_pull_request_allowances?: {
    readonly users?: ReadonlyArray<SimpleUser>;
    readonly teams?: ReadonlyArray<Team>;
    readonly apps?: ReadonlyArray<GitHubApp>;
  };
  readonly dismiss_stale_reviews: boolean;
  readonly require_code_owner_reviews: boolean;
  readonly required_approving_review_count?: number;
  readonly require_last_push_approval?: boolean;
};

export type BranchRestrictionPolicy = {
  readonly url: string;
  readonly users_url: string;
  readonly teams_url: string;
  readonly apps_url: string;
  readonly users: ReadonlyArray<{
    readonly login?: string;
    readonly id?: number;
    readonly node_id?: string;
    readonly avatar_url?: string;
    readonly gravatar_id?: string;
    readonly url?: string;
    readonly html_url?: string;
    readonly followers_url?: string;
    readonly following_url?: string;
    readonly gists_url?: string;
    readonly starred_url?: string;
    readonly subscriptions_url?: string;
    readonly organizations_url?: string;
    readonly repos_url?: string;
    readonly events_url?: string;
    readonly received_events_url?: string;
    readonly type?: string;
    readonly site_admin?: boolean;
  }>;
  readonly teams: ReadonlyArray<{
    readonly id?: number;
    readonly node_id?: string;
    readonly url?: string;
    readonly html_url?: string;
    readonly name?: string;
    readonly slug?: string;
    readonly description?: string | null;
    readonly privacy?: string;
    readonly permission?: string;
    readonly members_url?: string;
    readonly repositories_url?: string;
    readonly parent?: string | null;
  }>;
  readonly apps: ReadonlyArray<{
    readonly id?: number;
    readonly slug?: string;
    readonly node_id?: string;
    readonly owner?: {
      readonly login?: string;
      readonly id?: number;
      readonly node_id?: string;
      readonly url?: string;
      readonly repos_url?: string;
      readonly events_url?: string;
      readonly hooks_url?: string;
      readonly issues_url?: string;
      readonly members_url?: string;
      readonly public_members_url?: string;
      readonly avatar_url?: string;
      readonly description?: string;
      readonly gravatar_id?: string;
      readonly html_url?: string;
      readonly followers_url?: string;
      readonly following_url?: string;
      readonly gists_url?: string;
      readonly starred_url?: string;
      readonly subscriptions_url?: string;
      readonly organizations_url?: string;
      readonly received_events_url?: string;
      readonly type?: string;
      readonly site_admin?: boolean;
    };
    readonly name?: string;
    readonly description?: string;
    readonly external_url?: string;
    readonly html_url?: string;
    readonly created_at?: string;
    readonly updated_at?: string;
    readonly permissions?: {
      readonly metadata?: string;
      readonly contents?: string;
      readonly issues?: string;
      readonly single_file?: string;
    };
    readonly events?: ReadonlyArray<string>;
  }>;
};

export type BranchProtection = {
  readonly url?: string;
  readonly enabled?: boolean;
  readonly required_status_checks?: ProtectedBranchRequiredStatusCheck;
  readonly enforce_admins?: ProtectedBranchAdminEnforced;
  readonly required_pull_request_reviews?: ProtectedBranchPullRequestReview;
  readonly restrictions?: BranchRestrictionPolicy;
  readonly required_linear_history?: { readonly enabled?: boolean };
  readonly allow_force_pushes?: { readonly enabled?: boolean };
  readonly allow_deletions?: { readonly enabled?: boolean };
  readonly block_creations?: { readonly enabled?: boolean };
  readonly required_conversation_resolution?: { readonly enabled?: boolean };
  readonly name?: string;
  readonly protection_url?: string;
  readonly required_signatures?: {
    readonly url: string;
    readonly enabled: boolean;
  };
  readonly lock_branch?: { readonly enabled?: boolean };
  readonly allow_fork_syncing?: { readonly enabled?: boolean };
};

export type ShortBranch = {
  readonly name: string;
  readonly commit: { readonly sha: string; readonly url: string };
  readonly protected: boolean;
  readonly protection?: BranchProtection;
  readonly protection_url?: string;
};

export type ReposListBranchesResponseBody =
  | ReadonlyArray<ShortBranch>
  | BasicError;

export type ReposListBranchesResolver = msw.HttpResponseResolver<
  ReposListBranchesRequestParams,
  ReposListBranchesRequestBody,
  ReposListBranchesResponseBody
>;

export type ReposGetBranchRequestQuery = {};

export type ReposGetBranchRequestHeaders = {};

export type ReposGetBranchRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposGetBranchRequestBody = never;

export type ReposGetBranchResponseStatus = 200 | 301 | 404;

export type GitUser = {
  readonly name?: string;
  readonly email?: string;
  readonly date?: string;
} | null;

export type Verification = {
  readonly verified: boolean;
  readonly reason: string;
  readonly payload: string | null;
  readonly signature: string | null;
};

export type DiffEntry = {
  readonly sha: string;
  readonly filename: string;
  readonly status:
    | 'added'
    | 'removed'
    | 'modified'
    | 'renamed'
    | 'copied'
    | 'changed'
    | 'unchanged';
  readonly additions: number;
  readonly deletions: number;
  readonly changes: number;
  readonly blob_url: string;
  readonly raw_url: string;
  readonly contents_url: string;
  readonly patch?: string;
  readonly previous_filename?: string;
};

export type Commit = {
  readonly url: string;
  readonly sha: string;
  readonly node_id: string;
  readonly html_url: string;
  readonly comments_url: string;
  readonly commit: {
    readonly url: string;
    readonly author: GitUser;
    readonly committer: GitUser;
    readonly message: string;
    readonly comment_count: number;
    readonly tree: { readonly sha: string; readonly url: string };
    readonly verification?: Verification;
  };
  readonly author: SimpleUser;
  readonly committer: SimpleUser;
  readonly parents: ReadonlyArray<{
    readonly sha: string;
    readonly url: string;
    readonly html_url?: string;
  }>;
  readonly stats?: {
    readonly additions?: number;
    readonly deletions?: number;
    readonly total?: number;
  };
  readonly files?: ReadonlyArray<DiffEntry>;
};

export type BranchWithProtection = {
  readonly name: string;
  readonly commit: Commit;
  readonly _links: { readonly html: string; readonly self: string };
  readonly protected: boolean;
  readonly protection: BranchProtection;
  readonly protection_url: string;
  readonly pattern?: string;
  readonly required_approving_review_count?: number;
};

export type ReposGetBranchResponseBody = BranchWithProtection | BasicError;

export type ReposGetBranchResolver = msw.HttpResponseResolver<
  ReposGetBranchRequestParams,
  ReposGetBranchRequestBody,
  ReposGetBranchResponseBody
>;

export type ReposGetBranchProtectionRequestQuery = {};

export type ReposGetBranchProtectionRequestHeaders = {};

export type ReposGetBranchProtectionRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposGetBranchProtectionRequestBody = never;

export type ReposGetBranchProtectionResponseStatus = 200 | 404;

export type ReposGetBranchProtectionResponseBody =
  | BranchProtection
  | BasicError;

export type ReposGetBranchProtectionResolver = msw.HttpResponseResolver<
  ReposGetBranchProtectionRequestParams,
  ReposGetBranchProtectionRequestBody,
  ReposGetBranchProtectionResponseBody
>;

export type ReposUpdateBranchProtectionRequestQuery = {};

export type ReposUpdateBranchProtectionRequestHeaders = {};

export type ReposUpdateBranchProtectionRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposUpdateBranchProtectionRequestBody = {
  readonly required_status_checks: {
    readonly strict: boolean;
    readonly contexts: ReadonlyArray<string>;
    readonly checks?: ReadonlyArray<{
      readonly context: string;
      readonly app_id?: number;
    }>;
  } | null;
  readonly enforce_admins: boolean | null;
  readonly required_pull_request_reviews: {
    readonly dismissal_restrictions?: {
      readonly users?: ReadonlyArray<string>;
      readonly teams?: ReadonlyArray<string>;
      readonly apps?: ReadonlyArray<string>;
    };
    readonly dismiss_stale_reviews?: boolean;
    readonly require_code_owner_reviews?: boolean;
    readonly required_approving_review_count?: number;
    readonly require_last_push_approval?: boolean;
    readonly bypass_pull_request_allowances?: {
      readonly users?: ReadonlyArray<string>;
      readonly teams?: ReadonlyArray<string>;
      readonly apps?: ReadonlyArray<string>;
    };
  } | null;
  readonly restrictions: {
    readonly users: ReadonlyArray<string>;
    readonly teams: ReadonlyArray<string>;
    readonly apps?: ReadonlyArray<string>;
  } | null;
  readonly required_linear_history?: boolean;
  readonly allow_force_pushes?: boolean | null;
  readonly allow_deletions?: boolean;
  readonly block_creations?: boolean;
  readonly required_conversation_resolution?: boolean;
  readonly lock_branch?: boolean;
  readonly allow_fork_syncing?: boolean;
};

export type ReposUpdateBranchProtectionResponseStatus = 200 | 403 | 404 | 422;

export type StatusCheckPolicy = {
  readonly url: string;
  readonly strict: boolean;
  readonly contexts: ReadonlyArray<string>;
  readonly checks: ReadonlyArray<{
    readonly context: string;
    readonly app_id: number | null;
  }>;
  readonly contexts_url: string;
};

export type ProtectedBranch = {
  readonly url: string;
  readonly required_status_checks?: StatusCheckPolicy;
  readonly required_pull_request_reviews?: {
    readonly url: string;
    readonly dismiss_stale_reviews?: boolean;
    readonly require_code_owner_reviews?: boolean;
    readonly required_approving_review_count?: number;
    readonly require_last_push_approval?: boolean;
    readonly dismissal_restrictions?: {
      readonly url: string;
      readonly users_url: string;
      readonly teams_url: string;
      readonly users: ReadonlyArray<SimpleUser>;
      readonly teams: ReadonlyArray<Team>;
      readonly apps?: ReadonlyArray<GitHubApp>;
    };
    readonly bypass_pull_request_allowances?: {
      readonly users: ReadonlyArray<SimpleUser>;
      readonly teams: ReadonlyArray<Team>;
      readonly apps?: ReadonlyArray<GitHubApp>;
    };
  };
  readonly required_signatures?: {
    readonly url: string;
    readonly enabled: boolean;
  };
  readonly enforce_admins?: { readonly url: string; readonly enabled: boolean };
  readonly required_linear_history?: { readonly enabled: boolean };
  readonly allow_force_pushes?: { readonly enabled: boolean };
  readonly allow_deletions?: { readonly enabled: boolean };
  readonly restrictions?: BranchRestrictionPolicy;
  readonly required_conversation_resolution?: { readonly enabled?: boolean };
  readonly block_creations?: { readonly enabled: boolean };
  readonly lock_branch?: { readonly enabled?: boolean };
  readonly allow_fork_syncing?: { readonly enabled?: boolean };
};

export type ReposUpdateBranchProtectionResponseBody =
  | ProtectedBranch
  | BasicError
  | ValidationErrorSimple;

export type ReposUpdateBranchProtectionResolver = msw.HttpResponseResolver<
  ReposUpdateBranchProtectionRequestParams,
  ReposUpdateBranchProtectionRequestBody,
  ReposUpdateBranchProtectionResponseBody
>;

export type ReposDeleteBranchProtectionRequestQuery = {};

export type ReposDeleteBranchProtectionRequestHeaders = {};

export type ReposDeleteBranchProtectionRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposDeleteBranchProtectionRequestBody = never;

export type ReposDeleteBranchProtectionResponseStatus = 204 | 403;

export type ReposDeleteBranchProtectionResponseBody = never | BasicError;

export type ReposDeleteBranchProtectionResolver = msw.HttpResponseResolver<
  ReposDeleteBranchProtectionRequestParams,
  ReposDeleteBranchProtectionRequestBody,
  ReposDeleteBranchProtectionResponseBody
>;

export type ReposGetAdminBranchProtectionRequestQuery = {};

export type ReposGetAdminBranchProtectionRequestHeaders = {};

export type ReposGetAdminBranchProtectionRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposGetAdminBranchProtectionRequestBody = never;

export type ReposGetAdminBranchProtectionResponseStatus = 200;

export type ReposGetAdminBranchProtectionResponseBody = ProtectedBranchAdminEnforced;

export type ReposGetAdminBranchProtectionResolver = msw.HttpResponseResolver<
  ReposGetAdminBranchProtectionRequestParams,
  ReposGetAdminBranchProtectionRequestBody,
  ReposGetAdminBranchProtectionResponseBody
>;

export type ReposSetAdminBranchProtectionRequestQuery = {};

export type ReposSetAdminBranchProtectionRequestHeaders = {};

export type ReposSetAdminBranchProtectionRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposSetAdminBranchProtectionRequestBody = never;

export type ReposSetAdminBranchProtectionResponseStatus = 200;

export type ReposSetAdminBranchProtectionResponseBody = ProtectedBranchAdminEnforced;

export type ReposSetAdminBranchProtectionResolver = msw.HttpResponseResolver<
  ReposSetAdminBranchProtectionRequestParams,
  ReposSetAdminBranchProtectionRequestBody,
  ReposSetAdminBranchProtectionResponseBody
>;

export type ReposDeleteAdminBranchProtectionRequestQuery = {};

export type ReposDeleteAdminBranchProtectionRequestHeaders = {};

export type ReposDeleteAdminBranchProtectionRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposDeleteAdminBranchProtectionRequestBody = never;

export type ReposDeleteAdminBranchProtectionResponseStatus = 204 | 404;

export type ReposDeleteAdminBranchProtectionResponseBody = never | BasicError;

export type ReposDeleteAdminBranchProtectionResolver = msw.HttpResponseResolver<
  ReposDeleteAdminBranchProtectionRequestParams,
  ReposDeleteAdminBranchProtectionRequestBody,
  ReposDeleteAdminBranchProtectionResponseBody
>;

export type ReposGetPullRequestReviewProtectionRequestQuery = {};

export type ReposGetPullRequestReviewProtectionRequestHeaders = {};

export type ReposGetPullRequestReviewProtectionRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposGetPullRequestReviewProtectionRequestBody = never;

export type ReposGetPullRequestReviewProtectionResponseStatus = 200;

export type ReposGetPullRequestReviewProtectionResponseBody = ProtectedBranchPullRequestReview;

export type ReposGetPullRequestReviewProtectionResolver = msw.HttpResponseResolver<
  ReposGetPullRequestReviewProtectionRequestParams,
  ReposGetPullRequestReviewProtectionRequestBody,
  ReposGetPullRequestReviewProtectionResponseBody
>;

export type ReposUpdatePullRequestReviewProtectionRequestQuery = {};

export type ReposUpdatePullRequestReviewProtectionRequestHeaders = {};

export type ReposUpdatePullRequestReviewProtectionRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposUpdatePullRequestReviewProtectionRequestBody =
  | {
      readonly dismissal_restrictions?: {
        readonly users?: ReadonlyArray<string>;
        readonly teams?: ReadonlyArray<string>;
        readonly apps?: ReadonlyArray<string>;
      };
      readonly dismiss_stale_reviews?: boolean;
      readonly require_code_owner_reviews?: boolean;
      readonly required_approving_review_count?: number;
      readonly require_last_push_approval?: boolean;
      readonly bypass_pull_request_allowances?: {
        readonly users?: ReadonlyArray<string>;
        readonly teams?: ReadonlyArray<string>;
        readonly apps?: ReadonlyArray<string>;
      };
    }
  | undefined;

export type ReposUpdatePullRequestReviewProtectionResponseStatus = 200 | 422;

export type ReposUpdatePullRequestReviewProtectionResponseBody =
  | ProtectedBranchPullRequestReview
  | ValidationError;

export type ReposUpdatePullRequestReviewProtectionResolver = msw.HttpResponseResolver<
  ReposUpdatePullRequestReviewProtectionRequestParams,
  ReposUpdatePullRequestReviewProtectionRequestBody,
  ReposUpdatePullRequestReviewProtectionResponseBody
>;

export type ReposDeletePullRequestReviewProtectionRequestQuery = {};

export type ReposDeletePullRequestReviewProtectionRequestHeaders = {};

export type ReposDeletePullRequestReviewProtectionRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposDeletePullRequestReviewProtectionRequestBody = never;

export type ReposDeletePullRequestReviewProtectionResponseStatus = 204 | 404;

export type ReposDeletePullRequestReviewProtectionResponseBody =
  | never
  | BasicError;

export type ReposDeletePullRequestReviewProtectionResolver = msw.HttpResponseResolver<
  ReposDeletePullRequestReviewProtectionRequestParams,
  ReposDeletePullRequestReviewProtectionRequestBody,
  ReposDeletePullRequestReviewProtectionResponseBody
>;

export type ReposGetCommitSignatureProtectionRequestQuery = {};

export type ReposGetCommitSignatureProtectionRequestHeaders = {};

export type ReposGetCommitSignatureProtectionRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposGetCommitSignatureProtectionRequestBody = never;

export type ReposGetCommitSignatureProtectionResponseStatus = 200 | 404;

export type ReposGetCommitSignatureProtectionResponseBody =
  | ProtectedBranchAdminEnforced
  | BasicError;

export type ReposGetCommitSignatureProtectionResolver = msw.HttpResponseResolver<
  ReposGetCommitSignatureProtectionRequestParams,
  ReposGetCommitSignatureProtectionRequestBody,
  ReposGetCommitSignatureProtectionResponseBody
>;

export type ReposCreateCommitSignatureProtectionRequestQuery = {};

export type ReposCreateCommitSignatureProtectionRequestHeaders = {};

export type ReposCreateCommitSignatureProtectionRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposCreateCommitSignatureProtectionRequestBody = never;

export type ReposCreateCommitSignatureProtectionResponseStatus = 200 | 404;

export type ReposCreateCommitSignatureProtectionResponseBody =
  | ProtectedBranchAdminEnforced
  | BasicError;

export type ReposCreateCommitSignatureProtectionResolver = msw.HttpResponseResolver<
  ReposCreateCommitSignatureProtectionRequestParams,
  ReposCreateCommitSignatureProtectionRequestBody,
  ReposCreateCommitSignatureProtectionResponseBody
>;

export type ReposDeleteCommitSignatureProtectionRequestQuery = {};

export type ReposDeleteCommitSignatureProtectionRequestHeaders = {};

export type ReposDeleteCommitSignatureProtectionRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposDeleteCommitSignatureProtectionRequestBody = never;

export type ReposDeleteCommitSignatureProtectionResponseStatus = 204 | 404;

export type ReposDeleteCommitSignatureProtectionResponseBody =
  | never
  | BasicError;

export type ReposDeleteCommitSignatureProtectionResolver = msw.HttpResponseResolver<
  ReposDeleteCommitSignatureProtectionRequestParams,
  ReposDeleteCommitSignatureProtectionRequestBody,
  ReposDeleteCommitSignatureProtectionResponseBody
>;

export type ReposGetStatusChecksProtectionRequestQuery = {};

export type ReposGetStatusChecksProtectionRequestHeaders = {};

export type ReposGetStatusChecksProtectionRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposGetStatusChecksProtectionRequestBody = never;

export type ReposGetStatusChecksProtectionResponseStatus = 200 | 404;

export type ReposGetStatusChecksProtectionResponseBody =
  | StatusCheckPolicy
  | BasicError;

export type ReposGetStatusChecksProtectionResolver = msw.HttpResponseResolver<
  ReposGetStatusChecksProtectionRequestParams,
  ReposGetStatusChecksProtectionRequestBody,
  ReposGetStatusChecksProtectionResponseBody
>;

export type ReposUpdateStatusCheckProtectionRequestQuery = {};

export type ReposUpdateStatusCheckProtectionRequestHeaders = {};

export type ReposUpdateStatusCheckProtectionRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposUpdateStatusCheckProtectionRequestBody =
  | {
      readonly strict?: boolean;
      readonly contexts?: ReadonlyArray<string>;
      readonly checks?: ReadonlyArray<{
        readonly context: string;
        readonly app_id?: number;
      }>;
    }
  | undefined;

export type ReposUpdateStatusCheckProtectionResponseStatus = 200 | 404 | 422;

export type ReposUpdateStatusCheckProtectionResponseBody =
  | StatusCheckPolicy
  | BasicError
  | ValidationError;

export type ReposUpdateStatusCheckProtectionResolver = msw.HttpResponseResolver<
  ReposUpdateStatusCheckProtectionRequestParams,
  ReposUpdateStatusCheckProtectionRequestBody,
  ReposUpdateStatusCheckProtectionResponseBody
>;

export type ReposRemoveStatusCheckProtectionRequestQuery = {};

export type ReposRemoveStatusCheckProtectionRequestHeaders = {};

export type ReposRemoveStatusCheckProtectionRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposRemoveStatusCheckProtectionRequestBody = never;

export type ReposRemoveStatusCheckProtectionResponseStatus = 204;

export type ReposRemoveStatusCheckProtectionResponseBody = never;

export type ReposRemoveStatusCheckProtectionResolver = msw.HttpResponseResolver<
  ReposRemoveStatusCheckProtectionRequestParams,
  ReposRemoveStatusCheckProtectionRequestBody,
  ReposRemoveStatusCheckProtectionResponseBody
>;

export type ReposGetAllStatusCheckContextsRequestQuery = {};

export type ReposGetAllStatusCheckContextsRequestHeaders = {};

export type ReposGetAllStatusCheckContextsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposGetAllStatusCheckContextsRequestBody = never;

export type ReposGetAllStatusCheckContextsResponseStatus = 200 | 404;

export type ReposGetAllStatusCheckContextsResponseBody =
  | ReadonlyArray<string>
  | BasicError;

export type ReposGetAllStatusCheckContextsResolver = msw.HttpResponseResolver<
  ReposGetAllStatusCheckContextsRequestParams,
  ReposGetAllStatusCheckContextsRequestBody,
  ReposGetAllStatusCheckContextsResponseBody
>;

export type ReposAddStatusCheckContextsRequestQuery = {};

export type ReposAddStatusCheckContextsRequestHeaders = {};

export type ReposAddStatusCheckContextsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposAddStatusCheckContextsRequestBody =
  | { readonly contexts: ReadonlyArray<string> }
  | ReadonlyArray<string>
  | undefined;

export type ReposAddStatusCheckContextsResponseStatus = 200 | 403 | 404 | 422;

export type ReposAddStatusCheckContextsResponseBody =
  | ReadonlyArray<string>
  | BasicError
  | ValidationError;

export type ReposAddStatusCheckContextsResolver = msw.HttpResponseResolver<
  ReposAddStatusCheckContextsRequestParams,
  ReposAddStatusCheckContextsRequestBody,
  ReposAddStatusCheckContextsResponseBody
>;

export type ReposSetStatusCheckContextsRequestQuery = {};

export type ReposSetStatusCheckContextsRequestHeaders = {};

export type ReposSetStatusCheckContextsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposSetStatusCheckContextsRequestBody =
  | { readonly contexts: ReadonlyArray<string> }
  | ReadonlyArray<string>
  | undefined;

export type ReposSetStatusCheckContextsResponseStatus = 200 | 404 | 422;

export type ReposSetStatusCheckContextsResponseBody =
  | ReadonlyArray<string>
  | BasicError
  | ValidationError;

export type ReposSetStatusCheckContextsResolver = msw.HttpResponseResolver<
  ReposSetStatusCheckContextsRequestParams,
  ReposSetStatusCheckContextsRequestBody,
  ReposSetStatusCheckContextsResponseBody
>;

export type ReposRemoveStatusCheckContextsRequestQuery = {};

export type ReposRemoveStatusCheckContextsRequestHeaders = {};

export type ReposRemoveStatusCheckContextsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposRemoveStatusCheckContextsRequestBody =
  | { readonly contexts: ReadonlyArray<string> }
  | ReadonlyArray<string>
  | undefined;

export type ReposRemoveStatusCheckContextsResponseStatus = 200 | 404 | 422;

export type ReposRemoveStatusCheckContextsResponseBody =
  | ReadonlyArray<string>
  | BasicError
  | ValidationError;

export type ReposRemoveStatusCheckContextsResolver = msw.HttpResponseResolver<
  ReposRemoveStatusCheckContextsRequestParams,
  ReposRemoveStatusCheckContextsRequestBody,
  ReposRemoveStatusCheckContextsResponseBody
>;

export type ReposGetAccessRestrictionsRequestQuery = {};

export type ReposGetAccessRestrictionsRequestHeaders = {};

export type ReposGetAccessRestrictionsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposGetAccessRestrictionsRequestBody = never;

export type ReposGetAccessRestrictionsResponseStatus = 200 | 404;

export type ReposGetAccessRestrictionsResponseBody =
  | BranchRestrictionPolicy
  | BasicError;

export type ReposGetAccessRestrictionsResolver = msw.HttpResponseResolver<
  ReposGetAccessRestrictionsRequestParams,
  ReposGetAccessRestrictionsRequestBody,
  ReposGetAccessRestrictionsResponseBody
>;

export type ReposDeleteAccessRestrictionsRequestQuery = {};

export type ReposDeleteAccessRestrictionsRequestHeaders = {};

export type ReposDeleteAccessRestrictionsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposDeleteAccessRestrictionsRequestBody = never;

export type ReposDeleteAccessRestrictionsResponseStatus = 204;

export type ReposDeleteAccessRestrictionsResponseBody = never;

export type ReposDeleteAccessRestrictionsResolver = msw.HttpResponseResolver<
  ReposDeleteAccessRestrictionsRequestParams,
  ReposDeleteAccessRestrictionsRequestBody,
  ReposDeleteAccessRestrictionsResponseBody
>;

export type ReposGetAppsWithAccessToProtectedBranchRequestQuery = {};

export type ReposGetAppsWithAccessToProtectedBranchRequestHeaders = {};

export type ReposGetAppsWithAccessToProtectedBranchRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposGetAppsWithAccessToProtectedBranchRequestBody = never;

export type ReposGetAppsWithAccessToProtectedBranchResponseStatus = 200 | 404;

export type ReposGetAppsWithAccessToProtectedBranchResponseBody =
  | ReadonlyArray<GitHubApp>
  | BasicError;

export type ReposGetAppsWithAccessToProtectedBranchResolver = msw.HttpResponseResolver<
  ReposGetAppsWithAccessToProtectedBranchRequestParams,
  ReposGetAppsWithAccessToProtectedBranchRequestBody,
  ReposGetAppsWithAccessToProtectedBranchResponseBody
>;

export type ReposAddAppAccessRestrictionsRequestQuery = {};

export type ReposAddAppAccessRestrictionsRequestHeaders = {};

export type ReposAddAppAccessRestrictionsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposAddAppAccessRestrictionsRequestBody =
  | { readonly apps: ReadonlyArray<string> }
  | ReadonlyArray<string>
  | undefined;

export type ReposAddAppAccessRestrictionsResponseStatus = 200 | 422;

export type ReposAddAppAccessRestrictionsResponseBody =
  | ReadonlyArray<GitHubApp>
  | ValidationError;

export type ReposAddAppAccessRestrictionsResolver = msw.HttpResponseResolver<
  ReposAddAppAccessRestrictionsRequestParams,
  ReposAddAppAccessRestrictionsRequestBody,
  ReposAddAppAccessRestrictionsResponseBody
>;

export type ReposSetAppAccessRestrictionsRequestQuery = {};

export type ReposSetAppAccessRestrictionsRequestHeaders = {};

export type ReposSetAppAccessRestrictionsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposSetAppAccessRestrictionsRequestBody =
  | { readonly apps: ReadonlyArray<string> }
  | ReadonlyArray<string>
  | undefined;

export type ReposSetAppAccessRestrictionsResponseStatus = 200 | 422;

export type ReposSetAppAccessRestrictionsResponseBody =
  | ReadonlyArray<GitHubApp>
  | ValidationError;

export type ReposSetAppAccessRestrictionsResolver = msw.HttpResponseResolver<
  ReposSetAppAccessRestrictionsRequestParams,
  ReposSetAppAccessRestrictionsRequestBody,
  ReposSetAppAccessRestrictionsResponseBody
>;

export type ReposRemoveAppAccessRestrictionsRequestQuery = {};

export type ReposRemoveAppAccessRestrictionsRequestHeaders = {};

export type ReposRemoveAppAccessRestrictionsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposRemoveAppAccessRestrictionsRequestBody =
  | { readonly apps: ReadonlyArray<string> }
  | ReadonlyArray<string>
  | undefined;

export type ReposRemoveAppAccessRestrictionsResponseStatus = 200 | 422;

export type ReposRemoveAppAccessRestrictionsResponseBody =
  | ReadonlyArray<GitHubApp>
  | ValidationError;

export type ReposRemoveAppAccessRestrictionsResolver = msw.HttpResponseResolver<
  ReposRemoveAppAccessRestrictionsRequestParams,
  ReposRemoveAppAccessRestrictionsRequestBody,
  ReposRemoveAppAccessRestrictionsResponseBody
>;

export type ReposGetTeamsWithAccessToProtectedBranchRequestQuery = {};

export type ReposGetTeamsWithAccessToProtectedBranchRequestHeaders = {};

export type ReposGetTeamsWithAccessToProtectedBranchRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposGetTeamsWithAccessToProtectedBranchRequestBody = never;

export type ReposGetTeamsWithAccessToProtectedBranchResponseStatus = 200 | 404;

export type ReposGetTeamsWithAccessToProtectedBranchResponseBody =
  | ReadonlyArray<Team>
  | BasicError;

export type ReposGetTeamsWithAccessToProtectedBranchResolver = msw.HttpResponseResolver<
  ReposGetTeamsWithAccessToProtectedBranchRequestParams,
  ReposGetTeamsWithAccessToProtectedBranchRequestBody,
  ReposGetTeamsWithAccessToProtectedBranchResponseBody
>;

export type ReposAddTeamAccessRestrictionsRequestQuery = {};

export type ReposAddTeamAccessRestrictionsRequestHeaders = {};

export type ReposAddTeamAccessRestrictionsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposAddTeamAccessRestrictionsRequestBody =
  | { readonly teams: ReadonlyArray<string> }
  | ReadonlyArray<string>
  | undefined;

export type ReposAddTeamAccessRestrictionsResponseStatus = 200 | 422;

export type ReposAddTeamAccessRestrictionsResponseBody =
  | ReadonlyArray<Team>
  | ValidationError;

export type ReposAddTeamAccessRestrictionsResolver = msw.HttpResponseResolver<
  ReposAddTeamAccessRestrictionsRequestParams,
  ReposAddTeamAccessRestrictionsRequestBody,
  ReposAddTeamAccessRestrictionsResponseBody
>;

export type ReposSetTeamAccessRestrictionsRequestQuery = {};

export type ReposSetTeamAccessRestrictionsRequestHeaders = {};

export type ReposSetTeamAccessRestrictionsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposSetTeamAccessRestrictionsRequestBody =
  | { readonly teams: ReadonlyArray<string> }
  | ReadonlyArray<string>
  | undefined;

export type ReposSetTeamAccessRestrictionsResponseStatus = 200 | 422;

export type ReposSetTeamAccessRestrictionsResponseBody =
  | ReadonlyArray<Team>
  | ValidationError;

export type ReposSetTeamAccessRestrictionsResolver = msw.HttpResponseResolver<
  ReposSetTeamAccessRestrictionsRequestParams,
  ReposSetTeamAccessRestrictionsRequestBody,
  ReposSetTeamAccessRestrictionsResponseBody
>;

export type ReposRemoveTeamAccessRestrictionsRequestQuery = {};

export type ReposRemoveTeamAccessRestrictionsRequestHeaders = {};

export type ReposRemoveTeamAccessRestrictionsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposRemoveTeamAccessRestrictionsRequestBody =
  | { readonly teams: ReadonlyArray<string> }
  | ReadonlyArray<string>
  | undefined;

export type ReposRemoveTeamAccessRestrictionsResponseStatus = 200 | 422;

export type ReposRemoveTeamAccessRestrictionsResponseBody =
  | ReadonlyArray<Team>
  | ValidationError;

export type ReposRemoveTeamAccessRestrictionsResolver = msw.HttpResponseResolver<
  ReposRemoveTeamAccessRestrictionsRequestParams,
  ReposRemoveTeamAccessRestrictionsRequestBody,
  ReposRemoveTeamAccessRestrictionsResponseBody
>;

export type ReposGetUsersWithAccessToProtectedBranchRequestQuery = {};

export type ReposGetUsersWithAccessToProtectedBranchRequestHeaders = {};

export type ReposGetUsersWithAccessToProtectedBranchRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposGetUsersWithAccessToProtectedBranchRequestBody = never;

export type ReposGetUsersWithAccessToProtectedBranchResponseStatus = 200 | 404;

export type ReposGetUsersWithAccessToProtectedBranchResponseBody =
  | ReadonlyArray<SimpleUser>
  | BasicError;

export type ReposGetUsersWithAccessToProtectedBranchResolver = msw.HttpResponseResolver<
  ReposGetUsersWithAccessToProtectedBranchRequestParams,
  ReposGetUsersWithAccessToProtectedBranchRequestBody,
  ReposGetUsersWithAccessToProtectedBranchResponseBody
>;

export type ReposAddUserAccessRestrictionsRequestQuery = {};

export type ReposAddUserAccessRestrictionsRequestHeaders = {};

export type ReposAddUserAccessRestrictionsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposAddUserAccessRestrictionsRequestBody =
  | { readonly users: ReadonlyArray<string> }
  | ReadonlyArray<string>
  | undefined;

export type ReposAddUserAccessRestrictionsResponseStatus = 200 | 422;

export type ReposAddUserAccessRestrictionsResponseBody =
  | ReadonlyArray<SimpleUser>
  | ValidationError;

export type ReposAddUserAccessRestrictionsResolver = msw.HttpResponseResolver<
  ReposAddUserAccessRestrictionsRequestParams,
  ReposAddUserAccessRestrictionsRequestBody,
  ReposAddUserAccessRestrictionsResponseBody
>;

export type ReposSetUserAccessRestrictionsRequestQuery = {};

export type ReposSetUserAccessRestrictionsRequestHeaders = {};

export type ReposSetUserAccessRestrictionsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposSetUserAccessRestrictionsRequestBody =
  | { readonly users: ReadonlyArray<string> }
  | ReadonlyArray<string>
  | undefined;

export type ReposSetUserAccessRestrictionsResponseStatus = 200 | 422;

export type ReposSetUserAccessRestrictionsResponseBody =
  | ReadonlyArray<SimpleUser>
  | ValidationError;

export type ReposSetUserAccessRestrictionsResolver = msw.HttpResponseResolver<
  ReposSetUserAccessRestrictionsRequestParams,
  ReposSetUserAccessRestrictionsRequestBody,
  ReposSetUserAccessRestrictionsResponseBody
>;

export type ReposRemoveUserAccessRestrictionsRequestQuery = {};

export type ReposRemoveUserAccessRestrictionsRequestHeaders = {};

export type ReposRemoveUserAccessRestrictionsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposRemoveUserAccessRestrictionsRequestBody =
  | { readonly users: ReadonlyArray<string> }
  | ReadonlyArray<string>
  | undefined;

export type ReposRemoveUserAccessRestrictionsResponseStatus = 200 | 422;

export type ReposRemoveUserAccessRestrictionsResponseBody =
  | ReadonlyArray<SimpleUser>
  | ValidationError;

export type ReposRemoveUserAccessRestrictionsResolver = msw.HttpResponseResolver<
  ReposRemoveUserAccessRestrictionsRequestParams,
  ReposRemoveUserAccessRestrictionsRequestBody,
  ReposRemoveUserAccessRestrictionsResponseBody
>;

export type ReposRenameBranchRequestQuery = {};

export type ReposRenameBranchRequestHeaders = {};

export type ReposRenameBranchRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
};

export type ReposRenameBranchRequestBody = { readonly new_name: string };

export type ReposRenameBranchResponseStatus = 201 | 403 | 404 | 422;

export type ReposRenameBranchResponseBody =
  | BranchWithProtection
  | BasicError
  | ValidationError;

export type ReposRenameBranchResolver = msw.HttpResponseResolver<
  ReposRenameBranchRequestParams,
  ReposRenameBranchRequestBody,
  ReposRenameBranchResponseBody
>;

export type ChecksCreateRequestQuery = {};

export type ChecksCreateRequestHeaders = {};

export type ChecksCreateRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ChecksCreateRequestBody = {
  readonly name: string;
  readonly head_sha: string;
  readonly details_url?: string;
  readonly external_id?: string;
  readonly status?: 'queued' | 'in_progress' | 'completed';
  readonly started_at?: string;
  readonly conclusion?:
    | 'action_required'
    | 'cancelled'
    | 'failure'
    | 'neutral'
    | 'success'
    | 'skipped'
    | 'stale'
    | 'timed_out';
  readonly completed_at?: string;
  readonly output?: {
    readonly title: string;
    readonly summary: string;
    readonly text?: string;
    readonly annotations?: ReadonlyArray<{
      readonly path: string;
      readonly start_line: number;
      readonly end_line: number;
      readonly start_column?: number;
      readonly end_column?: number;
      readonly annotation_level: 'notice' | 'warning' | 'failure';
      readonly message: string;
      readonly title?: string;
      readonly raw_details?: string;
    }>;
    readonly images?: ReadonlyArray<{
      readonly alt: string;
      readonly image_url: string;
      readonly caption?: string;
    }>;
  };
  readonly actions?: ReadonlyArray<{
    readonly label: string;
    readonly description: string;
    readonly identifier: string;
  }>;
} & (
  | { readonly status: 'completed' }
  | { readonly status?: 'queued' | 'in_progress' }
);

export type ChecksCreateResponseStatus = 201;

export type CheckRun = {
  readonly id: number;
  readonly head_sha: string;
  readonly node_id: string;
  readonly external_id: string | null;
  readonly url: string;
  readonly html_url: string | null;
  readonly details_url: string | null;
  readonly status: 'queued' | 'in_progress' | 'completed';
  readonly conclusion:
    | 'success'
    | 'failure'
    | 'neutral'
    | 'cancelled'
    | 'skipped'
    | 'timed_out'
    | 'action_required'
    | null;
  readonly started_at: string | null;
  readonly completed_at: string | null;
  readonly output: {
    readonly title: string | null;
    readonly summary: string | null;
    readonly text: string | null;
    readonly annotations_count: number;
    readonly annotations_url: string;
  };
  readonly name: string;
  readonly check_suite: { readonly id: number } | null;
  readonly app: GitHubApp;
  readonly pull_requests: ReadonlyArray<PullRequestMinimal>;
  readonly deployment?: Deployment;
};

export type ChecksCreateResponseBody = CheckRun;

export type ChecksCreateResolver = msw.HttpResponseResolver<
  ChecksCreateRequestParams,
  ChecksCreateRequestBody,
  ChecksCreateResponseBody
>;

export type ChecksGetRequestQuery = {};

export type ChecksGetRequestHeaders = {};

export type ChecksGetRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly check_run_id: string;
};

export type ChecksGetRequestBody = never;

export type ChecksGetResponseStatus = 200;

export type ChecksGetResponseBody = CheckRun;

export type ChecksGetResolver = msw.HttpResponseResolver<
  ChecksGetRequestParams,
  ChecksGetRequestBody,
  ChecksGetResponseBody
>;

export type ChecksUpdateRequestQuery = {};

export type ChecksUpdateRequestHeaders = {};

export type ChecksUpdateRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly check_run_id: string;
};

export type ChecksUpdateRequestBody = {
  readonly name?: string;
  readonly details_url?: string;
  readonly external_id?: string;
  readonly started_at?: string;
  readonly status?: 'queued' | 'in_progress' | 'completed';
  readonly conclusion?:
    | 'action_required'
    | 'cancelled'
    | 'failure'
    | 'neutral'
    | 'success'
    | 'skipped'
    | 'stale'
    | 'timed_out';
  readonly completed_at?: string;
  readonly output?: {
    readonly title?: string;
    readonly summary: string;
    readonly text?: string;
    readonly annotations?: ReadonlyArray<{
      readonly path: string;
      readonly start_line: number;
      readonly end_line: number;
      readonly start_column?: number;
      readonly end_column?: number;
      readonly annotation_level: 'notice' | 'warning' | 'failure';
      readonly message: string;
      readonly title?: string;
      readonly raw_details?: string;
    }>;
    readonly images?: ReadonlyArray<{
      readonly alt: string;
      readonly image_url: string;
      readonly caption?: string;
    }>;
  };
  readonly actions?: ReadonlyArray<{
    readonly label: string;
    readonly description: string;
    readonly identifier: string;
  }>;
} & (
  | { readonly status?: 'completed' }
  | { readonly status?: 'queued' | 'in_progress' }
);

export type ChecksUpdateResponseStatus = 200;

export type ChecksUpdateResponseBody = CheckRun;

export type ChecksUpdateResolver = msw.HttpResponseResolver<
  ChecksUpdateRequestParams,
  ChecksUpdateRequestBody,
  ChecksUpdateResponseBody
>;

export type ChecksListAnnotationsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ChecksListAnnotationsRequestHeaders = {};

export type ChecksListAnnotationsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly check_run_id: string;
};

export type ChecksListAnnotationsRequestBody = never;

export type ChecksListAnnotationsResponseStatus = 200;

export type CheckAnnotation = {
  readonly path: string;
  readonly start_line: number;
  readonly end_line: number;
  readonly start_column: number | null;
  readonly end_column: number | null;
  readonly annotation_level: string | null;
  readonly title: string | null;
  readonly message: string | null;
  readonly raw_details: string | null;
  readonly blob_href: string;
};

export type ChecksListAnnotationsResponseBody = ReadonlyArray<CheckAnnotation>;

export type ChecksListAnnotationsResolver = msw.HttpResponseResolver<
  ChecksListAnnotationsRequestParams,
  ChecksListAnnotationsRequestBody,
  ChecksListAnnotationsResponseBody
>;

export type ChecksRerequestRunRequestQuery = {};

export type ChecksRerequestRunRequestHeaders = {};

export type ChecksRerequestRunRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly check_run_id: string;
};

export type ChecksRerequestRunRequestBody = never;

export type ChecksRerequestRunResponseStatus = 201 | 403 | 404 | 422;

export type ChecksRerequestRunResponseBody = EmptyObject | BasicError;

export type ChecksRerequestRunResolver = msw.HttpResponseResolver<
  ChecksRerequestRunRequestParams,
  ChecksRerequestRunRequestBody,
  ChecksRerequestRunResponseBody
>;

export type ChecksCreateSuiteRequestQuery = {};

export type ChecksCreateSuiteRequestHeaders = {};

export type ChecksCreateSuiteRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ChecksCreateSuiteRequestBody = { readonly head_sha: string };

export type ChecksCreateSuiteResponseStatus = 200 | 201;

export type CheckSuite = {
  readonly id: number;
  readonly node_id: string;
  readonly head_branch: string | null;
  readonly head_sha: string;
  readonly status: 'queued' | 'in_progress' | 'completed' | null;
  readonly conclusion:
    | 'success'
    | 'failure'
    | 'neutral'
    | 'cancelled'
    | 'skipped'
    | 'timed_out'
    | 'action_required'
    | null;
  readonly url: string | null;
  readonly before: string | null;
  readonly after: string | null;
  readonly pull_requests: ReadonlyArray<PullRequestMinimal> | null;
  readonly app: GitHubApp;
  readonly repository: MinimalRepository;
  readonly created_at: string | null;
  readonly updated_at: string | null;
  readonly head_commit: SimpleCommit;
  readonly latest_check_runs_count: number;
  readonly check_runs_url: string;
  readonly rerequestable?: boolean;
  readonly runs_rerequestable?: boolean;
};

export type ChecksCreateSuiteResponseBody = CheckSuite;

export type ChecksCreateSuiteResolver = msw.HttpResponseResolver<
  ChecksCreateSuiteRequestParams,
  ChecksCreateSuiteRequestBody,
  ChecksCreateSuiteResponseBody
>;

export type ChecksSetSuitesPreferencesRequestQuery = {};

export type ChecksSetSuitesPreferencesRequestHeaders = {};

export type ChecksSetSuitesPreferencesRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ChecksSetSuitesPreferencesRequestBody = {
  readonly auto_trigger_checks?: ReadonlyArray<{
    readonly app_id: number;
    readonly setting: boolean;
  }>;
};

export type ChecksSetSuitesPreferencesResponseStatus = 200;

export type CheckSuitePreference = {
  readonly preferences: {
    readonly auto_trigger_checks?: ReadonlyArray<{
      readonly app_id: number;
      readonly setting: boolean;
    }>;
  };
  readonly repository: MinimalRepository;
};

export type ChecksSetSuitesPreferencesResponseBody = CheckSuitePreference;

export type ChecksSetSuitesPreferencesResolver = msw.HttpResponseResolver<
  ChecksSetSuitesPreferencesRequestParams,
  ChecksSetSuitesPreferencesRequestBody,
  ChecksSetSuitesPreferencesResponseBody
>;

export type ChecksGetSuiteRequestQuery = {};

export type ChecksGetSuiteRequestHeaders = {};

export type ChecksGetSuiteRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly check_suite_id: string;
};

export type ChecksGetSuiteRequestBody = never;

export type ChecksGetSuiteResponseStatus = 200;

export type ChecksGetSuiteResponseBody = CheckSuite;

export type ChecksGetSuiteResolver = msw.HttpResponseResolver<
  ChecksGetSuiteRequestParams,
  ChecksGetSuiteRequestBody,
  ChecksGetSuiteResponseBody
>;

export type ChecksListForSuiteRequestQuery = {
  readonly check_name?: string;
  readonly status?: string;
  readonly filter?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ChecksListForSuiteRequestHeaders = {};

export type ChecksListForSuiteRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly check_suite_id: string;
};

export type ChecksListForSuiteRequestBody = never;

export type ChecksListForSuiteResponseStatus = 200;

export type ChecksListForSuiteResponseBody = {
  readonly total_count: number;
  readonly check_runs: ReadonlyArray<CheckRun>;
};

export type ChecksListForSuiteResolver = msw.HttpResponseResolver<
  ChecksListForSuiteRequestParams,
  ChecksListForSuiteRequestBody,
  ChecksListForSuiteResponseBody
>;

export type ChecksRerequestSuiteRequestQuery = {};

export type ChecksRerequestSuiteRequestHeaders = {};

export type ChecksRerequestSuiteRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly check_suite_id: string;
};

export type ChecksRerequestSuiteRequestBody = never;

export type ChecksRerequestSuiteResponseStatus = 201;

export type ChecksRerequestSuiteResponseBody = EmptyObject;

export type ChecksRerequestSuiteResolver = msw.HttpResponseResolver<
  ChecksRerequestSuiteRequestParams,
  ChecksRerequestSuiteRequestBody,
  ChecksRerequestSuiteResponseBody
>;

export type CodeScanningListAlertsForRepoRequestQuery = {
  readonly tool_name?: string;
  readonly tool_guid?: string;
  readonly page?: string;
  readonly per_page?: string;
  readonly ref?: string;
  readonly direction?: string;
  readonly sort?: string;
  readonly state?: string;
};

export type CodeScanningListAlertsForRepoRequestHeaders = {};

export type CodeScanningListAlertsForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type CodeScanningListAlertsForRepoRequestBody = never;

export type CodeScanningListAlertsForRepoResponseStatus =
  | 200
  | 304
  | 403
  | 404
  | 503;

export type CodeScanningAlertRuleSummary = {
  readonly id?: string | null;
  readonly name?: string;
  readonly tags?: ReadonlyArray<string> | null;
  readonly severity?: 'none' | 'note' | 'warning' | 'error' | null;
  readonly description?: string;
};

export type CodeScanningAlertItems = {
  readonly number: AlertNumber;
  readonly created_at: AlertCreatedAt;
  readonly updated_at?: AlertUpdatedAt;
  readonly url: AlertUrl;
  readonly html_url: AlertHtmlUrl;
  readonly instances_url: AlertInstancesUrl;
  readonly state: CodeScanningAlertState;
  readonly fixed_at?: AlertFixedAt;
  readonly dismissed_by: SimpleUser;
  readonly dismissed_at: AlertDismissedAt;
  readonly dismissed_reason: CodeScanningAlertDismissedReason;
  readonly dismissed_comment?: CodeScanningAlertDismissedComment;
  readonly rule: CodeScanningAlertRuleSummary;
  readonly tool: CodeScanningAnalysisTool;
  readonly most_recent_instance: CodeScanningAlertInstance;
};

export type CodeScanningListAlertsForRepoResponseBody =
  | ReadonlyArray<CodeScanningAlertItems>
  | never
  | BasicError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type CodeScanningListAlertsForRepoResolver = msw.HttpResponseResolver<
  CodeScanningListAlertsForRepoRequestParams,
  CodeScanningListAlertsForRepoRequestBody,
  CodeScanningListAlertsForRepoResponseBody
>;

export type CodeScanningGetAlertRequestQuery = {};

export type CodeScanningGetAlertRequestHeaders = {};

export type CodeScanningGetAlertRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly alert_number: string;
};

export type CodeScanningGetAlertRequestBody = never;

export type CodeScanningGetAlertResponseStatus = 200 | 304 | 403 | 404 | 503;

export type CodeScanningAlert = {
  readonly number: AlertNumber;
  readonly created_at: AlertCreatedAt;
  readonly updated_at?: AlertUpdatedAt;
  readonly url: AlertUrl;
  readonly html_url: AlertHtmlUrl;
  readonly instances_url: AlertInstancesUrl;
  readonly state: CodeScanningAlertState;
  readonly fixed_at?: AlertFixedAt;
  readonly dismissed_by: SimpleUser;
  readonly dismissed_at: AlertDismissedAt;
  readonly dismissed_reason: CodeScanningAlertDismissedReason;
  readonly dismissed_comment?: CodeScanningAlertDismissedComment;
  readonly rule: CodeScanningAlertRule;
  readonly tool: CodeScanningAnalysisTool;
  readonly most_recent_instance: CodeScanningAlertInstance;
};

export type CodeScanningGetAlertResponseBody =
  | CodeScanningAlert
  | never
  | BasicError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type CodeScanningGetAlertResolver = msw.HttpResponseResolver<
  CodeScanningGetAlertRequestParams,
  CodeScanningGetAlertRequestBody,
  CodeScanningGetAlertResponseBody
>;

export type CodeScanningAlertSetState = 'open' | 'dismissed';

export type CodeScanningUpdateAlertRequestQuery = {};

export type CodeScanningUpdateAlertRequestHeaders = {};

export type CodeScanningUpdateAlertRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly alert_number: string;
};

export type CodeScanningUpdateAlertRequestBody = {
  readonly state: CodeScanningAlertSetState;
  readonly dismissed_reason?: CodeScanningAlertDismissedReason;
  readonly dismissed_comment?: CodeScanningAlertDismissedComment;
};

export type CodeScanningUpdateAlertResponseStatus = 200 | 403 | 404 | 503;

export type CodeScanningUpdateAlertResponseBody =
  | CodeScanningAlert
  | BasicError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type CodeScanningUpdateAlertResolver = msw.HttpResponseResolver<
  CodeScanningUpdateAlertRequestParams,
  CodeScanningUpdateAlertRequestBody,
  CodeScanningUpdateAlertResponseBody
>;

export type CodeScanningListAlertInstancesRequestQuery = {
  readonly page?: string;
  readonly per_page?: string;
  readonly ref?: string;
};

export type CodeScanningListAlertInstancesRequestHeaders = {};

export type CodeScanningListAlertInstancesRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly alert_number: string;
};

export type CodeScanningListAlertInstancesRequestBody = never;

export type CodeScanningListAlertInstancesResponseStatus =
  | 200
  | 403
  | 404
  | 503;

export type CodeScanningListAlertInstancesResponseBody =
  | ReadonlyArray<CodeScanningAlertInstance>
  | BasicError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type CodeScanningListAlertInstancesResolver = msw.HttpResponseResolver<
  CodeScanningListAlertInstancesRequestParams,
  CodeScanningListAlertInstancesRequestBody,
  CodeScanningListAlertInstancesResponseBody
>;

export type CodeScanningListRecentAnalysesRequestQuery = {
  readonly tool_name?: string;
  readonly tool_guid?: string;
  readonly page?: string;
  readonly per_page?: string;
  readonly ref?: string;
  readonly sarif_id?: string;
  readonly direction?: string;
  readonly sort?: string;
};

export type CodeScanningListRecentAnalysesRequestHeaders = {};

export type CodeScanningListRecentAnalysesRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type CodeScanningListRecentAnalysesRequestBody = never;

export type CodeScanningListRecentAnalysesResponseStatus =
  | 200
  | 403
  | 404
  | 503;

export type CodeScanningAnalysisCommitSha = string;

export type CodeScanningAnalysisEnvironment = string;

export type CodeScanningAnalysisCreatedAt = string;

export type CodeScanningAnalysisUrl = string;

export type CodeScanningAnalysisSarifId = string;

export type CodeScanningAnalysis = {
  readonly ref: CodeScanningRef;
  readonly commit_sha: CodeScanningAnalysisCommitSha;
  readonly analysis_key: CodeScanningAnalysisAnalysisKey;
  readonly environment: CodeScanningAnalysisEnvironment;
  readonly category?: CodeScanningAnalysisCategory;
  readonly error: string;
  readonly created_at: CodeScanningAnalysisCreatedAt;
  readonly results_count: number;
  readonly rules_count: number;
  readonly id: number;
  readonly url: CodeScanningAnalysisUrl;
  readonly sarif_id: CodeScanningAnalysisSarifId;
  readonly tool: CodeScanningAnalysisTool;
  readonly deletable: boolean;
  readonly warning: string;
};

export type CodeScanningListRecentAnalysesResponseBody =
  | ReadonlyArray<CodeScanningAnalysis>
  | BasicError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type CodeScanningListRecentAnalysesResolver = msw.HttpResponseResolver<
  CodeScanningListRecentAnalysesRequestParams,
  CodeScanningListRecentAnalysesRequestBody,
  CodeScanningListRecentAnalysesResponseBody
>;

export type CodeScanningGetAnalysisRequestQuery = {};

export type CodeScanningGetAnalysisRequestHeaders = {};

export type CodeScanningGetAnalysisRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly analysis_id: string;
};

export type CodeScanningGetAnalysisRequestBody = never;

export type CodeScanningGetAnalysisResponseStatus = 200 | 403 | 404 | 503;

export type CodeScanningGetAnalysisResponseBody =
  | CodeScanningAnalysis
  | BasicError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type CodeScanningGetAnalysisResolver = msw.HttpResponseResolver<
  CodeScanningGetAnalysisRequestParams,
  CodeScanningGetAnalysisRequestBody,
  CodeScanningGetAnalysisResponseBody
>;

export type CodeScanningDeleteAnalysisRequestQuery = {
  readonly confirm_delete?: string;
};

export type CodeScanningDeleteAnalysisRequestHeaders = {};

export type CodeScanningDeleteAnalysisRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly analysis_id: string;
};

export type CodeScanningDeleteAnalysisRequestBody = never;

export type CodeScanningDeleteAnalysisResponseStatus =
  | 200
  | 400
  | 403
  | 404
  | 503;

export type AnalysisDeletion = {
  readonly next_analysis_url: string | null;
  readonly confirm_delete_url: string | null;
};

export type CodeScanningDeleteAnalysisResponseBody =
  | AnalysisDeletion
  | BasicError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type CodeScanningDeleteAnalysisResolver = msw.HttpResponseResolver<
  CodeScanningDeleteAnalysisRequestParams,
  CodeScanningDeleteAnalysisRequestBody,
  CodeScanningDeleteAnalysisResponseBody
>;

export type CodeScanningListCodeqlDatabasesRequestQuery = {};

export type CodeScanningListCodeqlDatabasesRequestHeaders = {};

export type CodeScanningListCodeqlDatabasesRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type CodeScanningListCodeqlDatabasesRequestBody = never;

export type CodeScanningListCodeqlDatabasesResponseStatus =
  | 200
  | 403
  | 404
  | 503;

export type CodeQlDatabase = {
  readonly id: number;
  readonly name: string;
  readonly language: string;
  readonly uploader: SimpleUser;
  readonly content_type: string;
  readonly size: number;
  readonly created_at: string;
  readonly updated_at: string;
  readonly url: string;
};

export type CodeScanningListCodeqlDatabasesResponseBody =
  | ReadonlyArray<CodeQlDatabase>
  | BasicError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type CodeScanningListCodeqlDatabasesResolver = msw.HttpResponseResolver<
  CodeScanningListCodeqlDatabasesRequestParams,
  CodeScanningListCodeqlDatabasesRequestBody,
  CodeScanningListCodeqlDatabasesResponseBody
>;

export type CodeScanningGetCodeqlDatabaseRequestQuery = {};

export type CodeScanningGetCodeqlDatabaseRequestHeaders = {};

export type CodeScanningGetCodeqlDatabaseRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly language: string;
};

export type CodeScanningGetCodeqlDatabaseRequestBody = never;

export type CodeScanningGetCodeqlDatabaseResponseStatus =
  | 200
  | 302
  | 403
  | 404
  | 503;

export type CodeScanningGetCodeqlDatabaseResponseBody =
  | CodeQlDatabase
  | never
  | BasicError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type CodeScanningGetCodeqlDatabaseResolver = msw.HttpResponseResolver<
  CodeScanningGetCodeqlDatabaseRequestParams,
  CodeScanningGetCodeqlDatabaseRequestBody,
  CodeScanningGetCodeqlDatabaseResponseBody
>;

export type CodeScanningAnalysisSarifFile = string;

export type CodeScanningUploadSarifRequestQuery = {};

export type CodeScanningUploadSarifRequestHeaders = {};

export type CodeScanningUploadSarifRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type CodeScanningUploadSarifRequestBody = {
  readonly commit_sha: CodeScanningAnalysisCommitSha;
  readonly ref: CodeScanningRef;
  readonly sarif: CodeScanningAnalysisSarifFile;
  readonly checkout_uri?: string;
  readonly started_at?: string;
  readonly tool_name?: string;
  readonly validate?: boolean;
};

export type CodeScanningUploadSarifResponseStatus =
  | 202
  | 400
  | 403
  | 404
  | 413
  | 503;

export type CodeScanningSarifsReceipt = {
  readonly id?: CodeScanningAnalysisSarifId;
  readonly url?: string;
};

export type CodeScanningUploadSarifResponseBody =
  | CodeScanningSarifsReceipt
  | never
  | BasicError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type CodeScanningUploadSarifResolver = msw.HttpResponseResolver<
  CodeScanningUploadSarifRequestParams,
  CodeScanningUploadSarifRequestBody,
  CodeScanningUploadSarifResponseBody
>;

export type CodeScanningGetSarifRequestQuery = {};

export type CodeScanningGetSarifRequestHeaders = {};

export type CodeScanningGetSarifRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly sarif_id: string;
};

export type CodeScanningGetSarifRequestBody = never;

export type CodeScanningGetSarifResponseStatus = 200 | 403 | 404 | 503;

export type CodeScanningSarifsStatus = {
  readonly processing_status?: 'pending' | 'complete' | 'failed';
  readonly analyses_url?: string | null;
  readonly errors?: ReadonlyArray<string> | null;
};

export type CodeScanningGetSarifResponseBody =
  | CodeScanningSarifsStatus
  | BasicError
  | never
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type CodeScanningGetSarifResolver = msw.HttpResponseResolver<
  CodeScanningGetSarifRequestParams,
  CodeScanningGetSarifRequestBody,
  CodeScanningGetSarifResponseBody
>;

export type ReposCodeownersErrorsRequestQuery = { readonly ref?: string };

export type ReposCodeownersErrorsRequestHeaders = {};

export type ReposCodeownersErrorsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposCodeownersErrorsRequestBody = never;

export type ReposCodeownersErrorsResponseStatus = 200 | 404;

export type CodeownersErrors = {
  readonly errors: ReadonlyArray<{
    readonly line: number;
    readonly column: number;
    readonly source?: string;
    readonly kind: string;
    readonly suggestion?: string | null;
    readonly message: string;
    readonly path: string;
  }>;
};

export type ReposCodeownersErrorsResponseBody = CodeownersErrors | never;

export type ReposCodeownersErrorsResolver = msw.HttpResponseResolver<
  ReposCodeownersErrorsRequestParams,
  ReposCodeownersErrorsRequestBody,
  ReposCodeownersErrorsResponseBody
>;

export type CodespacesListInRepositoryForAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type CodespacesListInRepositoryForAuthenticatedUserRequestHeaders = {};

export type CodespacesListInRepositoryForAuthenticatedUserRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type CodespacesListInRepositoryForAuthenticatedUserRequestBody = never;

export type CodespacesListInRepositoryForAuthenticatedUserResponseStatus =
  | 200
  | 401
  | 403
  | 404
  | 500;

export type CodespacesListInRepositoryForAuthenticatedUserResponseBody =
  | {
      readonly total_count: number;
      readonly codespaces: ReadonlyArray<Codespace>;
    }
  | BasicError;

export type CodespacesListInRepositoryForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesListInRepositoryForAuthenticatedUserRequestParams,
  CodespacesListInRepositoryForAuthenticatedUserRequestBody,
  CodespacesListInRepositoryForAuthenticatedUserResponseBody
>;

export type CodespacesCreateWithRepoForAuthenticatedUserRequestQuery = {};

export type CodespacesCreateWithRepoForAuthenticatedUserRequestHeaders = {};

export type CodespacesCreateWithRepoForAuthenticatedUserRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type CodespacesCreateWithRepoForAuthenticatedUserRequestBody = {
  readonly ref?: string;
  readonly location?: string;
  readonly client_ip?: string;
  readonly machine?: string;
  readonly devcontainer_path?: string;
  readonly multi_repo_permissions_opt_out?: boolean;
  readonly working_directory?: string;
  readonly idle_timeout_minutes?: number;
  readonly display_name?: string;
  readonly retention_period_minutes?: number;
} | null;

export type CodespacesCreateWithRepoForAuthenticatedUserResponseStatus =
  | 201
  | 202
  | 400
  | 401
  | 403
  | 404
  | 503;

export type CodespacesCreateWithRepoForAuthenticatedUserResponseBody =
  | Codespace
  | BasicError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type CodespacesCreateWithRepoForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesCreateWithRepoForAuthenticatedUserRequestParams,
  CodespacesCreateWithRepoForAuthenticatedUserRequestBody,
  CodespacesCreateWithRepoForAuthenticatedUserResponseBody
>;

export type CodespacesListDevcontainersInRepositoryForAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type CodespacesListDevcontainersInRepositoryForAuthenticatedUserRequestHeaders = {};

export type CodespacesListDevcontainersInRepositoryForAuthenticatedUserRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type CodespacesListDevcontainersInRepositoryForAuthenticatedUserRequestBody = never;

export type CodespacesListDevcontainersInRepositoryForAuthenticatedUserResponseStatus =
  | 200
  | 400
  | 401
  | 403
  | 404
  | 500;

export type CodespacesListDevcontainersInRepositoryForAuthenticatedUserResponseBody =
  | {
      readonly total_count: number;
      readonly devcontainers: ReadonlyArray<{
        readonly path: string;
        readonly name?: string;
      }>;
    }
  | BasicError;

export type CodespacesListDevcontainersInRepositoryForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesListDevcontainersInRepositoryForAuthenticatedUserRequestParams,
  CodespacesListDevcontainersInRepositoryForAuthenticatedUserRequestBody,
  CodespacesListDevcontainersInRepositoryForAuthenticatedUserResponseBody
>;

export type CodespacesRepoMachinesForAuthenticatedUserRequestQuery = {
  readonly location?: string;
  readonly client_ip?: string;
};

export type CodespacesRepoMachinesForAuthenticatedUserRequestHeaders = {};

export type CodespacesRepoMachinesForAuthenticatedUserRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type CodespacesRepoMachinesForAuthenticatedUserRequestBody = never;

export type CodespacesRepoMachinesForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404
  | 500;

export type CodespacesRepoMachinesForAuthenticatedUserResponseBody =
  | {
      readonly total_count: number;
      readonly machines: ReadonlyArray<CodespaceMachine>;
    }
  | never
  | BasicError;

export type CodespacesRepoMachinesForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesRepoMachinesForAuthenticatedUserRequestParams,
  CodespacesRepoMachinesForAuthenticatedUserRequestBody,
  CodespacesRepoMachinesForAuthenticatedUserResponseBody
>;

export type CodespacesPreFlightWithRepoForAuthenticatedUserRequestQuery = {
  readonly ref?: string;
  readonly client_ip?: string;
};

export type CodespacesPreFlightWithRepoForAuthenticatedUserRequestHeaders = {};

export type CodespacesPreFlightWithRepoForAuthenticatedUserRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type CodespacesPreFlightWithRepoForAuthenticatedUserRequestBody = never;

export type CodespacesPreFlightWithRepoForAuthenticatedUserResponseStatus =
  | 200
  | 401
  | 403
  | 404;

export type CodespacesPreFlightWithRepoForAuthenticatedUserResponseBody =
  | {
      readonly billable_owner?: SimpleUser;
      readonly defaults?: {
        readonly location: string;
        readonly devcontainer_path: string | null;
      };
    }
  | BasicError;

export type CodespacesPreFlightWithRepoForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesPreFlightWithRepoForAuthenticatedUserRequestParams,
  CodespacesPreFlightWithRepoForAuthenticatedUserRequestBody,
  CodespacesPreFlightWithRepoForAuthenticatedUserResponseBody
>;

export type CodespacesListRepoSecretsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type CodespacesListRepoSecretsRequestHeaders = {};

export type CodespacesListRepoSecretsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type CodespacesListRepoSecretsRequestBody = never;

export type CodespacesListRepoSecretsResponseStatus = 200;

export type CodespacesListRepoSecretsResponseBody = {
  readonly total_count: number;
  readonly secrets: ReadonlyArray<CodespacesSecret>;
};

export type CodespacesListRepoSecretsResolver = msw.HttpResponseResolver<
  CodespacesListRepoSecretsRequestParams,
  CodespacesListRepoSecretsRequestBody,
  CodespacesListRepoSecretsResponseBody
>;

export type CodespacesGetRepoPublicKeyRequestQuery = {};

export type CodespacesGetRepoPublicKeyRequestHeaders = {};

export type CodespacesGetRepoPublicKeyRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type CodespacesGetRepoPublicKeyRequestBody = never;

export type CodespacesGetRepoPublicKeyResponseStatus = 200;

export type CodespacesGetRepoPublicKeyResponseBody = CodespacesPublicKey;

export type CodespacesGetRepoPublicKeyResolver = msw.HttpResponseResolver<
  CodespacesGetRepoPublicKeyRequestParams,
  CodespacesGetRepoPublicKeyRequestBody,
  CodespacesGetRepoPublicKeyResponseBody
>;

export type CodespacesGetRepoSecretRequestQuery = {};

export type CodespacesGetRepoSecretRequestHeaders = {};

export type CodespacesGetRepoSecretRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly secret_name: string;
};

export type CodespacesGetRepoSecretRequestBody = never;

export type CodespacesGetRepoSecretResponseStatus = 200;

export type CodespacesGetRepoSecretResponseBody = CodespacesSecret;

export type CodespacesGetRepoSecretResolver = msw.HttpResponseResolver<
  CodespacesGetRepoSecretRequestParams,
  CodespacesGetRepoSecretRequestBody,
  CodespacesGetRepoSecretResponseBody
>;

export type CodespacesCreateOrUpdateRepoSecretRequestQuery = {};

export type CodespacesCreateOrUpdateRepoSecretRequestHeaders = {};

export type CodespacesCreateOrUpdateRepoSecretRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly secret_name: string;
};

export type CodespacesCreateOrUpdateRepoSecretRequestBody = {
  readonly encrypted_value?: string;
  readonly key_id?: string;
};

export type CodespacesCreateOrUpdateRepoSecretResponseStatus = 201 | 204;

export type CodespacesCreateOrUpdateRepoSecretResponseBody =
  | EmptyObject
  | never;

export type CodespacesCreateOrUpdateRepoSecretResolver = msw.HttpResponseResolver<
  CodespacesCreateOrUpdateRepoSecretRequestParams,
  CodespacesCreateOrUpdateRepoSecretRequestBody,
  CodespacesCreateOrUpdateRepoSecretResponseBody
>;

export type CodespacesDeleteRepoSecretRequestQuery = {};

export type CodespacesDeleteRepoSecretRequestHeaders = {};

export type CodespacesDeleteRepoSecretRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly secret_name: string;
};

export type CodespacesDeleteRepoSecretRequestBody = never;

export type CodespacesDeleteRepoSecretResponseStatus = 204;

export type CodespacesDeleteRepoSecretResponseBody = never;

export type CodespacesDeleteRepoSecretResolver = msw.HttpResponseResolver<
  CodespacesDeleteRepoSecretRequestParams,
  CodespacesDeleteRepoSecretRequestBody,
  CodespacesDeleteRepoSecretResponseBody
>;

export type ReposListCollaboratorsRequestQuery = {
  readonly affiliation?: string;
  readonly permission?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListCollaboratorsRequestHeaders = {};

export type ReposListCollaboratorsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposListCollaboratorsRequestBody = never;

export type ReposListCollaboratorsResponseStatus = 200 | 404;

export type Collaborator = {
  readonly login: string;
  readonly id: number;
  readonly email?: string | null;
  readonly name?: string | null;
  readonly node_id: string;
  readonly avatar_url: string;
  readonly gravatar_id: string | null;
  readonly url: string;
  readonly html_url: string;
  readonly followers_url: string;
  readonly following_url: string;
  readonly gists_url: string;
  readonly starred_url: string;
  readonly subscriptions_url: string;
  readonly organizations_url: string;
  readonly repos_url: string;
  readonly events_url: string;
  readonly received_events_url: string;
  readonly type: string;
  readonly site_admin: boolean;
  readonly permissions?: {
    readonly pull: boolean;
    readonly triage?: boolean;
    readonly push: boolean;
    readonly maintain?: boolean;
    readonly admin: boolean;
  };
  readonly role_name: string;
};

export type ReposListCollaboratorsResponseBody =
  | ReadonlyArray<Collaborator>
  | BasicError;

export type ReposListCollaboratorsResolver = msw.HttpResponseResolver<
  ReposListCollaboratorsRequestParams,
  ReposListCollaboratorsRequestBody,
  ReposListCollaboratorsResponseBody
>;

export type ReposCheckCollaboratorRequestQuery = {};

export type ReposCheckCollaboratorRequestHeaders = {};

export type ReposCheckCollaboratorRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly username: string;
};

export type ReposCheckCollaboratorRequestBody = never;

export type ReposCheckCollaboratorResponseStatus = 204 | 404;

export type ReposCheckCollaboratorResponseBody = never;

export type ReposCheckCollaboratorResolver = msw.HttpResponseResolver<
  ReposCheckCollaboratorRequestParams,
  ReposCheckCollaboratorRequestBody,
  ReposCheckCollaboratorResponseBody
>;

export type ReposAddCollaboratorRequestQuery = {};

export type ReposAddCollaboratorRequestHeaders = {};

export type ReposAddCollaboratorRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly username: string;
};

export type ReposAddCollaboratorRequestBody =
  | { readonly permission?: string }
  | undefined;

export type ReposAddCollaboratorResponseStatus = 201 | 204 | 403 | 422;

export type RepositoryInvitation = {
  readonly id: number;
  readonly repository: MinimalRepository;
  readonly invitee: SimpleUser;
  readonly inviter: SimpleUser;
  readonly permissions: 'read' | 'write' | 'admin' | 'triage' | 'maintain';
  readonly created_at: string;
  readonly expired?: boolean;
  readonly url: string;
  readonly html_url: string;
  readonly node_id: string;
};

export type ReposAddCollaboratorResponseBody =
  | RepositoryInvitation
  | never
  | BasicError
  | ValidationError;

export type ReposAddCollaboratorResolver = msw.HttpResponseResolver<
  ReposAddCollaboratorRequestParams,
  ReposAddCollaboratorRequestBody,
  ReposAddCollaboratorResponseBody
>;

export type ReposRemoveCollaboratorRequestQuery = {};

export type ReposRemoveCollaboratorRequestHeaders = {};

export type ReposRemoveCollaboratorRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly username: string;
};

export type ReposRemoveCollaboratorRequestBody = never;

export type ReposRemoveCollaboratorResponseStatus = 204;

export type ReposRemoveCollaboratorResponseBody = never;

export type ReposRemoveCollaboratorResolver = msw.HttpResponseResolver<
  ReposRemoveCollaboratorRequestParams,
  ReposRemoveCollaboratorRequestBody,
  ReposRemoveCollaboratorResponseBody
>;

export type ReposGetCollaboratorPermissionLevelRequestQuery = {};

export type ReposGetCollaboratorPermissionLevelRequestHeaders = {};

export type ReposGetCollaboratorPermissionLevelRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly username: string;
};

export type ReposGetCollaboratorPermissionLevelRequestBody = never;

export type ReposGetCollaboratorPermissionLevelResponseStatus = 200 | 404;

export type RepositoryCollaboratorPermission = {
  readonly permission: string;
  readonly role_name: string;
  readonly user: Collaborator;
};

export type ReposGetCollaboratorPermissionLevelResponseBody =
  | RepositoryCollaboratorPermission
  | BasicError;

export type ReposGetCollaboratorPermissionLevelResolver = msw.HttpResponseResolver<
  ReposGetCollaboratorPermissionLevelRequestParams,
  ReposGetCollaboratorPermissionLevelRequestBody,
  ReposGetCollaboratorPermissionLevelResponseBody
>;

export type ReposListCommitCommentsForRepoRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListCommitCommentsForRepoRequestHeaders = {};

export type ReposListCommitCommentsForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposListCommitCommentsForRepoRequestBody = never;

export type ReposListCommitCommentsForRepoResponseStatus = 200;

export type CommitComment = {
  readonly html_url: string;
  readonly url: string;
  readonly id: number;
  readonly node_id: string;
  readonly body: string;
  readonly path: string | null;
  readonly position: number | null;
  readonly line: number | null;
  readonly commit_id: string;
  readonly user: SimpleUser;
  readonly created_at: string;
  readonly updated_at: string;
  readonly author_association: AuthorAssociation;
  readonly reactions?: ReactionRollup;
};

export type ReposListCommitCommentsForRepoResponseBody = ReadonlyArray<CommitComment>;

export type ReposListCommitCommentsForRepoResolver = msw.HttpResponseResolver<
  ReposListCommitCommentsForRepoRequestParams,
  ReposListCommitCommentsForRepoRequestBody,
  ReposListCommitCommentsForRepoResponseBody
>;

export type ReposGetCommitCommentRequestQuery = {};

export type ReposGetCommitCommentRequestHeaders = {};

export type ReposGetCommitCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly comment_id: string;
};

export type ReposGetCommitCommentRequestBody = never;

export type ReposGetCommitCommentResponseStatus = 200 | 404;

export type ReposGetCommitCommentResponseBody = CommitComment | BasicError;

export type ReposGetCommitCommentResolver = msw.HttpResponseResolver<
  ReposGetCommitCommentRequestParams,
  ReposGetCommitCommentRequestBody,
  ReposGetCommitCommentResponseBody
>;

export type ReposUpdateCommitCommentRequestQuery = {};

export type ReposUpdateCommitCommentRequestHeaders = {};

export type ReposUpdateCommitCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly comment_id: string;
};

export type ReposUpdateCommitCommentRequestBody = { readonly body: string };

export type ReposUpdateCommitCommentResponseStatus = 200 | 404;

export type ReposUpdateCommitCommentResponseBody = CommitComment | BasicError;

export type ReposUpdateCommitCommentResolver = msw.HttpResponseResolver<
  ReposUpdateCommitCommentRequestParams,
  ReposUpdateCommitCommentRequestBody,
  ReposUpdateCommitCommentResponseBody
>;

export type ReposDeleteCommitCommentRequestQuery = {};

export type ReposDeleteCommitCommentRequestHeaders = {};

export type ReposDeleteCommitCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly comment_id: string;
};

export type ReposDeleteCommitCommentRequestBody = never;

export type ReposDeleteCommitCommentResponseStatus = 204 | 404;

export type ReposDeleteCommitCommentResponseBody = never | BasicError;

export type ReposDeleteCommitCommentResolver = msw.HttpResponseResolver<
  ReposDeleteCommitCommentRequestParams,
  ReposDeleteCommitCommentRequestBody,
  ReposDeleteCommitCommentResponseBody
>;

export type ReactionsListForCommitCommentRequestQuery = {
  readonly content?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ReactionsListForCommitCommentRequestHeaders = {};

export type ReactionsListForCommitCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly comment_id: string;
};

export type ReactionsListForCommitCommentRequestBody = never;

export type ReactionsListForCommitCommentResponseStatus = 200 | 404;

export type ReactionsListForCommitCommentResponseBody =
  | ReadonlyArray<Reaction>
  | BasicError;

export type ReactionsListForCommitCommentResolver = msw.HttpResponseResolver<
  ReactionsListForCommitCommentRequestParams,
  ReactionsListForCommitCommentRequestBody,
  ReactionsListForCommitCommentResponseBody
>;

export type ReactionsCreateForCommitCommentRequestQuery = {};

export type ReactionsCreateForCommitCommentRequestHeaders = {};

export type ReactionsCreateForCommitCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly comment_id: string;
};

export type ReactionsCreateForCommitCommentRequestBody = {
  readonly content:
    | '+1'
    | '-1'
    | 'laugh'
    | 'confused'
    | 'heart'
    | 'hooray'
    | 'rocket'
    | 'eyes';
};

export type ReactionsCreateForCommitCommentResponseStatus = 200 | 201 | 422;

export type ReactionsCreateForCommitCommentResponseBody =
  | Reaction
  | ValidationError;

export type ReactionsCreateForCommitCommentResolver = msw.HttpResponseResolver<
  ReactionsCreateForCommitCommentRequestParams,
  ReactionsCreateForCommitCommentRequestBody,
  ReactionsCreateForCommitCommentResponseBody
>;

export type ReactionsDeleteForCommitCommentRequestQuery = {};

export type ReactionsDeleteForCommitCommentRequestHeaders = {};

export type ReactionsDeleteForCommitCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly comment_id: string;
  readonly reaction_id: string;
};

export type ReactionsDeleteForCommitCommentRequestBody = never;

export type ReactionsDeleteForCommitCommentResponseStatus = 204;

export type ReactionsDeleteForCommitCommentResponseBody = never;

export type ReactionsDeleteForCommitCommentResolver = msw.HttpResponseResolver<
  ReactionsDeleteForCommitCommentRequestParams,
  ReactionsDeleteForCommitCommentRequestBody,
  ReactionsDeleteForCommitCommentResponseBody
>;

export type ReposListCommitsRequestQuery = {
  readonly sha?: string;
  readonly path?: string;
  readonly author?: string;
  readonly since?: string;
  readonly until?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListCommitsRequestHeaders = {};

export type ReposListCommitsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposListCommitsRequestBody = never;

export type ReposListCommitsResponseStatus = 200 | 400 | 404 | 409 | 500;

export type ReposListCommitsResponseBody = ReadonlyArray<Commit> | BasicError;

export type ReposListCommitsResolver = msw.HttpResponseResolver<
  ReposListCommitsRequestParams,
  ReposListCommitsRequestBody,
  ReposListCommitsResponseBody
>;

export type ReposListBranchesForHeadCommitRequestQuery = {};

export type ReposListBranchesForHeadCommitRequestHeaders = {};

export type ReposListBranchesForHeadCommitRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly commit_sha: string;
};

export type ReposListBranchesForHeadCommitRequestBody = never;

export type ReposListBranchesForHeadCommitResponseStatus = 200 | 422;

export type BranchShort = {
  readonly name: string;
  readonly commit: { readonly sha: string; readonly url: string };
  readonly protected: boolean;
};

export type ReposListBranchesForHeadCommitResponseBody =
  | ReadonlyArray<BranchShort>
  | ValidationError;

export type ReposListBranchesForHeadCommitResolver = msw.HttpResponseResolver<
  ReposListBranchesForHeadCommitRequestParams,
  ReposListBranchesForHeadCommitRequestBody,
  ReposListBranchesForHeadCommitResponseBody
>;

export type ReposListCommentsForCommitRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListCommentsForCommitRequestHeaders = {};

export type ReposListCommentsForCommitRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly commit_sha: string;
};

export type ReposListCommentsForCommitRequestBody = never;

export type ReposListCommentsForCommitResponseStatus = 200;

export type ReposListCommentsForCommitResponseBody = ReadonlyArray<CommitComment>;

export type ReposListCommentsForCommitResolver = msw.HttpResponseResolver<
  ReposListCommentsForCommitRequestParams,
  ReposListCommentsForCommitRequestBody,
  ReposListCommentsForCommitResponseBody
>;

export type ReposCreateCommitCommentRequestQuery = {};

export type ReposCreateCommitCommentRequestHeaders = {};

export type ReposCreateCommitCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly commit_sha: string;
};

export type ReposCreateCommitCommentRequestBody = {
  readonly body: string;
  readonly path?: string;
  readonly position?: number;
  readonly line?: number;
};

export type ReposCreateCommitCommentResponseStatus = 201 | 403 | 422;

export type ReposCreateCommitCommentResponseBody =
  | CommitComment
  | BasicError
  | ValidationError;

export type ReposCreateCommitCommentResolver = msw.HttpResponseResolver<
  ReposCreateCommitCommentRequestParams,
  ReposCreateCommitCommentRequestBody,
  ReposCreateCommitCommentResponseBody
>;

export type ReposListPullRequestsAssociatedWithCommitRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListPullRequestsAssociatedWithCommitRequestHeaders = {};

export type ReposListPullRequestsAssociatedWithCommitRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly commit_sha: string;
};

export type ReposListPullRequestsAssociatedWithCommitRequestBody = never;

export type ReposListPullRequestsAssociatedWithCommitResponseStatus = 200;

export type Link = { readonly href: string };

export type AutoMerge = {
  readonly enabled_by: SimpleUser;
  readonly merge_method: 'merge' | 'squash' | 'rebase';
  readonly commit_title: string;
  readonly commit_message: string;
} | null;

export type PullRequestSimple = {
  readonly url: string;
  readonly id: number;
  readonly node_id: string;
  readonly html_url: string;
  readonly diff_url: string;
  readonly patch_url: string;
  readonly issue_url: string;
  readonly commits_url: string;
  readonly review_comments_url: string;
  readonly review_comment_url: string;
  readonly comments_url: string;
  readonly statuses_url: string;
  readonly number: number;
  readonly state: string;
  readonly locked: boolean;
  readonly title: string;
  readonly user: SimpleUser;
  readonly body: string | null;
  readonly labels: ReadonlyArray<{
    readonly id: number;
    readonly node_id: string;
    readonly url: string;
    readonly name: string;
    readonly description: string;
    readonly color: string;
    readonly default: boolean;
  }>;
  readonly milestone: Milestone;
  readonly active_lock_reason?: string | null;
  readonly created_at: string;
  readonly updated_at: string;
  readonly closed_at: string | null;
  readonly merged_at: string | null;
  readonly merge_commit_sha: string | null;
  readonly assignee: SimpleUser;
  readonly assignees?: ReadonlyArray<SimpleUser> | null;
  readonly requested_reviewers?: ReadonlyArray<SimpleUser> | null;
  readonly requested_teams?: ReadonlyArray<Team> | null;
  readonly head: {
    readonly label: string;
    readonly ref: string;
    readonly repo: Repository;
    readonly sha: string;
    readonly user: SimpleUser;
  };
  readonly base: {
    readonly label: string;
    readonly ref: string;
    readonly repo: Repository;
    readonly sha: string;
    readonly user: SimpleUser;
  };
  readonly _links: {
    readonly comments: Link;
    readonly commits: Link;
    readonly statuses: Link;
    readonly html: Link;
    readonly issue: Link;
    readonly review_comments: Link;
    readonly review_comment: Link;
    readonly self: Link;
  };
  readonly author_association: AuthorAssociation;
  readonly auto_merge: AutoMerge;
  readonly draft?: boolean;
};

export type ReposListPullRequestsAssociatedWithCommitResponseBody = ReadonlyArray<PullRequestSimple>;

export type ReposListPullRequestsAssociatedWithCommitResolver = msw.HttpResponseResolver<
  ReposListPullRequestsAssociatedWithCommitRequestParams,
  ReposListPullRequestsAssociatedWithCommitRequestBody,
  ReposListPullRequestsAssociatedWithCommitResponseBody
>;

export type ReposGetCommitRequestQuery = {
  readonly page?: string;
  readonly per_page?: string;
};

export type ReposGetCommitRequestHeaders = {};

export type ReposGetCommitRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly ref: string;
};

export type ReposGetCommitRequestBody = never;

export type ReposGetCommitResponseStatus = 200 | 404 | 422 | 500 | 503;

export type ReposGetCommitResponseBody =
  | Commit
  | BasicError
  | ValidationError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type ReposGetCommitResolver = msw.HttpResponseResolver<
  ReposGetCommitRequestParams,
  ReposGetCommitRequestBody,
  ReposGetCommitResponseBody
>;

export type ChecksListForRefRequestQuery = {
  readonly check_name?: string;
  readonly status?: string;
  readonly filter?: string;
  readonly per_page?: string;
  readonly page?: string;
  readonly app_id?: string;
};

export type ChecksListForRefRequestHeaders = {};

export type ChecksListForRefRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly ref: string;
};

export type ChecksListForRefRequestBody = never;

export type ChecksListForRefResponseStatus = 200;

export type ChecksListForRefResponseBody = {
  readonly total_count: number;
  readonly check_runs: ReadonlyArray<CheckRun>;
};

export type ChecksListForRefResolver = msw.HttpResponseResolver<
  ChecksListForRefRequestParams,
  ChecksListForRefRequestBody,
  ChecksListForRefResponseBody
>;

export type ChecksListSuitesForRefRequestQuery = {
  readonly app_id?: string;
  readonly check_name?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ChecksListSuitesForRefRequestHeaders = {};

export type ChecksListSuitesForRefRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly ref: string;
};

export type ChecksListSuitesForRefRequestBody = never;

export type ChecksListSuitesForRefResponseStatus = 200;

export type ChecksListSuitesForRefResponseBody = {
  readonly total_count: number;
  readonly check_suites: ReadonlyArray<CheckSuite>;
};

export type ChecksListSuitesForRefResolver = msw.HttpResponseResolver<
  ChecksListSuitesForRefRequestParams,
  ChecksListSuitesForRefRequestBody,
  ChecksListSuitesForRefResponseBody
>;

export type ReposGetCombinedStatusForRefRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposGetCombinedStatusForRefRequestHeaders = {};

export type ReposGetCombinedStatusForRefRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly ref: string;
};

export type ReposGetCombinedStatusForRefRequestBody = never;

export type ReposGetCombinedStatusForRefResponseStatus = 200 | 404;

export type SimpleCommitStatus = {
  readonly description: string | null;
  readonly id: number;
  readonly node_id: string;
  readonly state: string;
  readonly context: string;
  readonly target_url: string | null;
  readonly required?: boolean | null;
  readonly avatar_url: string | null;
  readonly url: string;
  readonly created_at: string;
  readonly updated_at: string;
};

export type CombinedCommitStatus = {
  readonly state: string;
  readonly statuses: ReadonlyArray<SimpleCommitStatus>;
  readonly sha: string;
  readonly total_count: number;
  readonly repository: MinimalRepository;
  readonly commit_url: string;
  readonly url: string;
};

export type ReposGetCombinedStatusForRefResponseBody =
  | CombinedCommitStatus
  | BasicError;

export type ReposGetCombinedStatusForRefResolver = msw.HttpResponseResolver<
  ReposGetCombinedStatusForRefRequestParams,
  ReposGetCombinedStatusForRefRequestBody,
  ReposGetCombinedStatusForRefResponseBody
>;

export type ReposListCommitStatusesForRefRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListCommitStatusesForRefRequestHeaders = {};

export type ReposListCommitStatusesForRefRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly ref: string;
};

export type ReposListCommitStatusesForRefRequestBody = never;

export type ReposListCommitStatusesForRefResponseStatus = 200 | 301;

export type Status = {
  readonly url: string;
  readonly avatar_url: string | null;
  readonly id: number;
  readonly node_id: string;
  readonly state: string;
  readonly description: string | null;
  readonly target_url: string | null;
  readonly context: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly creator: SimpleUser;
};

export type ReposListCommitStatusesForRefResponseBody =
  | ReadonlyArray<Status>
  | BasicError;

export type ReposListCommitStatusesForRefResolver = msw.HttpResponseResolver<
  ReposListCommitStatusesForRefRequestParams,
  ReposListCommitStatusesForRefRequestBody,
  ReposListCommitStatusesForRefResponseBody
>;

export type ReposGetCommunityProfileMetricsRequestQuery = {};

export type ReposGetCommunityProfileMetricsRequestHeaders = {};

export type ReposGetCommunityProfileMetricsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposGetCommunityProfileMetricsRequestBody = never;

export type ReposGetCommunityProfileMetricsResponseStatus = 200;

export type CommunityHealthFile = {
  readonly url: string;
  readonly html_url: string;
} | null;

export type CommunityProfile = {
  readonly health_percentage: number;
  readonly description: string | null;
  readonly documentation: string | null;
  readonly files: {
    readonly code_of_conduct: CodeOfConductSimple;
    readonly code_of_conduct_file: CommunityHealthFile;
    readonly license: LicenseSimple;
    readonly contributing: CommunityHealthFile;
    readonly readme: CommunityHealthFile;
    readonly issue_template: CommunityHealthFile;
    readonly pull_request_template: CommunityHealthFile;
  };
  readonly updated_at: string | null;
  readonly content_reports_enabled?: boolean;
};

export type ReposGetCommunityProfileMetricsResponseBody = CommunityProfile;

export type ReposGetCommunityProfileMetricsResolver = msw.HttpResponseResolver<
  ReposGetCommunityProfileMetricsRequestParams,
  ReposGetCommunityProfileMetricsRequestBody,
  ReposGetCommunityProfileMetricsResponseBody
>;

export type ReposCompareCommitsRequestQuery = {
  readonly page?: string;
  readonly per_page?: string;
};

export type ReposCompareCommitsRequestHeaders = {};

export type ReposCompareCommitsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly basehead: string;
};

export type ReposCompareCommitsRequestBody = never;

export type ReposCompareCommitsResponseStatus = 200 | 404 | 500 | 503;

export type CommitComparison = {
  readonly url: string;
  readonly html_url: string;
  readonly permalink_url: string;
  readonly diff_url: string;
  readonly patch_url: string;
  readonly base_commit: Commit;
  readonly merge_base_commit: Commit;
  readonly status: 'diverged' | 'ahead' | 'behind' | 'identical';
  readonly ahead_by: number;
  readonly behind_by: number;
  readonly total_commits: number;
  readonly commits: ReadonlyArray<Commit>;
  readonly files?: ReadonlyArray<DiffEntry>;
};

export type ReposCompareCommitsResponseBody =
  | CommitComparison
  | BasicError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type ReposCompareCommitsResolver = msw.HttpResponseResolver<
  ReposCompareCommitsRequestParams,
  ReposCompareCommitsRequestBody,
  ReposCompareCommitsResponseBody
>;

export type ReposGetContentRequestQuery = { readonly ref?: string };

export type ReposGetContentRequestHeaders = {};

export type ReposGetContentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly path: string;
};

export type ReposGetContentRequestBody = never;

export type ReposGetContentResponseStatus = 200 | 302 | 403 | 404;

export type ContentDirectory = ReadonlyArray<{
  readonly type: 'dir' | 'file' | 'submodule' | 'symlink';
  readonly size: number;
  readonly name: string;
  readonly path: string;
  readonly content?: string;
  readonly sha: string;
  readonly url: string;
  readonly git_url: string | null;
  readonly html_url: string | null;
  readonly download_url: string | null;
  readonly _links: {
    readonly git: string | null;
    readonly html: string | null;
    readonly self: string;
  };
}>;

export type ContentFile = {
  readonly type: 'file';
  readonly encoding: string;
  readonly size: number;
  readonly name: string;
  readonly path: string;
  readonly content: string;
  readonly sha: string;
  readonly url: string;
  readonly git_url: string | null;
  readonly html_url: string | null;
  readonly download_url: string | null;
  readonly _links: {
    readonly git: string | null;
    readonly html: string | null;
    readonly self: string;
  };
  readonly target?: string;
  readonly submodule_git_url?: string;
};

export type SymlinkContent = {
  readonly type: 'symlink';
  readonly target: string;
  readonly size: number;
  readonly name: string;
  readonly path: string;
  readonly sha: string;
  readonly url: string;
  readonly git_url: string | null;
  readonly html_url: string | null;
  readonly download_url: string | null;
  readonly _links: {
    readonly git: string | null;
    readonly html: string | null;
    readonly self: string;
  };
};

export type SubmoduleContent = {
  readonly type: 'submodule';
  readonly submodule_git_url: string;
  readonly size: number;
  readonly name: string;
  readonly path: string;
  readonly sha: string;
  readonly url: string;
  readonly git_url: string | null;
  readonly html_url: string | null;
  readonly download_url: string | null;
  readonly _links: {
    readonly git: string | null;
    readonly html: string | null;
    readonly self: string;
  };
};

export type ReposGetContentResponseBody =
  | ContentDirectory
  | ContentFile
  | SymlinkContent
  | SubmoduleContent
  | never
  | BasicError;

export type ReposGetContentResolver = msw.HttpResponseResolver<
  ReposGetContentRequestParams,
  ReposGetContentRequestBody,
  ReposGetContentResponseBody
>;

export type ReposCreateOrUpdateFileContentsRequestQuery = {};

export type ReposCreateOrUpdateFileContentsRequestHeaders = {};

export type ReposCreateOrUpdateFileContentsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly path: string;
};

export type ReposCreateOrUpdateFileContentsRequestBody = {
  readonly message: string;
  readonly content: string;
  readonly sha?: string;
  readonly branch?: string;
  readonly committer?: {
    readonly name: string;
    readonly email: string;
    readonly date?: string;
  };
  readonly author?: {
    readonly name: string;
    readonly email: string;
    readonly date?: string;
  };
};

export type ReposCreateOrUpdateFileContentsResponseStatus =
  | 200
  | 201
  | 404
  | 409
  | 422;

export type FileCommit = {
  readonly content: {
    readonly name?: string;
    readonly path?: string;
    readonly sha?: string;
    readonly size?: number;
    readonly url?: string;
    readonly html_url?: string;
    readonly git_url?: string;
    readonly download_url?: string;
    readonly type?: string;
    readonly _links?: {
      readonly self?: string;
      readonly git?: string;
      readonly html?: string;
    };
  } | null;
  readonly commit: {
    readonly sha?: string;
    readonly node_id?: string;
    readonly url?: string;
    readonly html_url?: string;
    readonly author?: {
      readonly date?: string;
      readonly name?: string;
      readonly email?: string;
    };
    readonly committer?: {
      readonly date?: string;
      readonly name?: string;
      readonly email?: string;
    };
    readonly message?: string;
    readonly tree?: { readonly url?: string; readonly sha?: string };
    readonly parents?: ReadonlyArray<{
      readonly url?: string;
      readonly html_url?: string;
      readonly sha?: string;
    }>;
    readonly verification?: {
      readonly verified?: boolean;
      readonly reason?: string;
      readonly signature?: string | null;
      readonly payload?: string | null;
    };
  };
};

export type ReposCreateOrUpdateFileContentsResponseBody =
  | FileCommit
  | BasicError
  | ValidationError;

export type ReposCreateOrUpdateFileContentsResolver = msw.HttpResponseResolver<
  ReposCreateOrUpdateFileContentsRequestParams,
  ReposCreateOrUpdateFileContentsRequestBody,
  ReposCreateOrUpdateFileContentsResponseBody
>;

export type ReposDeleteFileRequestQuery = {};

export type ReposDeleteFileRequestHeaders = {};

export type ReposDeleteFileRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly path: string;
};

export type ReposDeleteFileRequestBody = {
  readonly message: string;
  readonly sha: string;
  readonly branch?: string;
  readonly committer?: { readonly name?: string; readonly email?: string };
  readonly author?: { readonly name?: string; readonly email?: string };
};

export type ReposDeleteFileResponseStatus = 200 | 404 | 409 | 422 | 503;

export type ReposDeleteFileResponseBody =
  | FileCommit
  | BasicError
  | ValidationError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type ReposDeleteFileResolver = msw.HttpResponseResolver<
  ReposDeleteFileRequestParams,
  ReposDeleteFileRequestBody,
  ReposDeleteFileResponseBody
>;

export type ReposListContributorsRequestQuery = {
  readonly anon?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListContributorsRequestHeaders = {};

export type ReposListContributorsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposListContributorsRequestBody = never;

export type ReposListContributorsResponseStatus = 200 | 204 | 403 | 404;

export type Contributor = {
  readonly login?: string;
  readonly id?: number;
  readonly node_id?: string;
  readonly avatar_url?: string;
  readonly gravatar_id?: string | null;
  readonly url?: string;
  readonly html_url?: string;
  readonly followers_url?: string;
  readonly following_url?: string;
  readonly gists_url?: string;
  readonly starred_url?: string;
  readonly subscriptions_url?: string;
  readonly organizations_url?: string;
  readonly repos_url?: string;
  readonly events_url?: string;
  readonly received_events_url?: string;
  readonly type: string;
  readonly site_admin?: boolean;
  readonly contributions: number;
  readonly email?: string;
  readonly name?: string;
};

export type ReposListContributorsResponseBody =
  | ReadonlyArray<Contributor>
  | never
  | BasicError;

export type ReposListContributorsResolver = msw.HttpResponseResolver<
  ReposListContributorsRequestParams,
  ReposListContributorsRequestBody,
  ReposListContributorsResponseBody
>;

export type DependabotListAlertsForRepoRequestQuery = {
  readonly state?: string;
  readonly severity?: string;
  readonly ecosystem?: string;
  readonly package?: string;
  readonly manifest?: string;
  readonly scope?: string;
  readonly sort?: string;
  readonly direction?: string;
  readonly page?: string;
  readonly per_page?: string;
  readonly before?: string;
  readonly after?: string;
  readonly first?: string;
  readonly last?: string;
};

export type DependabotListAlertsForRepoRequestHeaders = {};

export type DependabotListAlertsForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type DependabotListAlertsForRepoRequestBody = never;

export type DependabotListAlertsForRepoResponseStatus =
  | 200
  | 304
  | 400
  | 403
  | 404
  | 422;

export type DependabotAlert = {
  readonly number: AlertNumber;
  readonly state: 'dismissed' | 'fixed' | 'open';
  readonly dependency: {
    readonly package?: DependabotAlertPackage;
    readonly manifest_path?: string;
    readonly scope?: 'development' | 'runtime' | null;
  };
  readonly security_advisory: DependabotAlertSecurityAdvisory;
  readonly security_vulnerability: DependabotAlertSecurityVulnerability;
  readonly url: AlertUrl;
  readonly html_url: AlertHtmlUrl;
  readonly created_at: AlertCreatedAt;
  readonly updated_at: AlertUpdatedAt;
  readonly dismissed_at: AlertDismissedAt;
  readonly dismissed_by: SimpleUser;
  readonly dismissed_reason:
    | 'fix_started'
    | 'inaccurate'
    | 'no_bandwidth'
    | 'not_used'
    | 'tolerable_risk'
    | null;
  readonly dismissed_comment: string | null;
  readonly fixed_at: AlertFixedAt;
};

export type DependabotListAlertsForRepoResponseBody =
  | ReadonlyArray<DependabotAlert>
  | never
  | BasicError
  | ValidationErrorSimple;

export type DependabotListAlertsForRepoResolver = msw.HttpResponseResolver<
  DependabotListAlertsForRepoRequestParams,
  DependabotListAlertsForRepoRequestBody,
  DependabotListAlertsForRepoResponseBody
>;

export type DependabotGetAlertRequestQuery = {};

export type DependabotGetAlertRequestHeaders = {};

export type DependabotGetAlertRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly alert_number: string;
};

export type DependabotGetAlertRequestBody = never;

export type DependabotGetAlertResponseStatus = 200 | 304 | 403 | 404;

export type DependabotGetAlertResponseBody =
  | DependabotAlert
  | never
  | BasicError;

export type DependabotGetAlertResolver = msw.HttpResponseResolver<
  DependabotGetAlertRequestParams,
  DependabotGetAlertRequestBody,
  DependabotGetAlertResponseBody
>;

export type DependabotUpdateAlertRequestQuery = {};

export type DependabotUpdateAlertRequestHeaders = {};

export type DependabotUpdateAlertRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly alert_number: string;
};

export type DependabotUpdateAlertRequestBody = {
  readonly state: 'dismissed' | 'open';
  readonly dismissed_reason?:
    | 'fix_started'
    | 'inaccurate'
    | 'no_bandwidth'
    | 'not_used'
    | 'tolerable_risk';
  readonly dismissed_comment?: string;
};

export type DependabotUpdateAlertResponseStatus =
  | 200
  | 400
  | 403
  | 404
  | 409
  | 422;

export type DependabotUpdateAlertResponseBody =
  | DependabotAlert
  | BasicError
  | ValidationErrorSimple;

export type DependabotUpdateAlertResolver = msw.HttpResponseResolver<
  DependabotUpdateAlertRequestParams,
  DependabotUpdateAlertRequestBody,
  DependabotUpdateAlertResponseBody
>;

export type DependabotListRepoSecretsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type DependabotListRepoSecretsRequestHeaders = {};

export type DependabotListRepoSecretsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type DependabotListRepoSecretsRequestBody = never;

export type DependabotListRepoSecretsResponseStatus = 200;

export type DependabotSecret = {
  readonly name: string;
  readonly created_at: string;
  readonly updated_at: string;
};

export type DependabotListRepoSecretsResponseBody = {
  readonly total_count: number;
  readonly secrets: ReadonlyArray<DependabotSecret>;
};

export type DependabotListRepoSecretsResolver = msw.HttpResponseResolver<
  DependabotListRepoSecretsRequestParams,
  DependabotListRepoSecretsRequestBody,
  DependabotListRepoSecretsResponseBody
>;

export type DependabotGetRepoPublicKeyRequestQuery = {};

export type DependabotGetRepoPublicKeyRequestHeaders = {};

export type DependabotGetRepoPublicKeyRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type DependabotGetRepoPublicKeyRequestBody = never;

export type DependabotGetRepoPublicKeyResponseStatus = 200;

export type DependabotGetRepoPublicKeyResponseBody = DependabotPublicKey;

export type DependabotGetRepoPublicKeyResolver = msw.HttpResponseResolver<
  DependabotGetRepoPublicKeyRequestParams,
  DependabotGetRepoPublicKeyRequestBody,
  DependabotGetRepoPublicKeyResponseBody
>;

export type DependabotGetRepoSecretRequestQuery = {};

export type DependabotGetRepoSecretRequestHeaders = {};

export type DependabotGetRepoSecretRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly secret_name: string;
};

export type DependabotGetRepoSecretRequestBody = never;

export type DependabotGetRepoSecretResponseStatus = 200;

export type DependabotGetRepoSecretResponseBody = DependabotSecret;

export type DependabotGetRepoSecretResolver = msw.HttpResponseResolver<
  DependabotGetRepoSecretRequestParams,
  DependabotGetRepoSecretRequestBody,
  DependabotGetRepoSecretResponseBody
>;

export type DependabotCreateOrUpdateRepoSecretRequestQuery = {};

export type DependabotCreateOrUpdateRepoSecretRequestHeaders = {};

export type DependabotCreateOrUpdateRepoSecretRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly secret_name: string;
};

export type DependabotCreateOrUpdateRepoSecretRequestBody = {
  readonly encrypted_value?: string;
  readonly key_id?: string;
};

export type DependabotCreateOrUpdateRepoSecretResponseStatus = 201 | 204;

export type DependabotCreateOrUpdateRepoSecretResponseBody =
  | EmptyObject
  | never;

export type DependabotCreateOrUpdateRepoSecretResolver = msw.HttpResponseResolver<
  DependabotCreateOrUpdateRepoSecretRequestParams,
  DependabotCreateOrUpdateRepoSecretRequestBody,
  DependabotCreateOrUpdateRepoSecretResponseBody
>;

export type DependabotDeleteRepoSecretRequestQuery = {};

export type DependabotDeleteRepoSecretRequestHeaders = {};

export type DependabotDeleteRepoSecretRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly secret_name: string;
};

export type DependabotDeleteRepoSecretRequestBody = never;

export type DependabotDeleteRepoSecretResponseStatus = 204;

export type DependabotDeleteRepoSecretResponseBody = never;

export type DependabotDeleteRepoSecretResolver = msw.HttpResponseResolver<
  DependabotDeleteRepoSecretRequestParams,
  DependabotDeleteRepoSecretRequestBody,
  DependabotDeleteRepoSecretResponseBody
>;

export type DependencyGraphDiffRangeRequestQuery = { readonly name?: string };

export type DependencyGraphDiffRangeRequestHeaders = {};

export type DependencyGraphDiffRangeRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly basehead: string;
};

export type DependencyGraphDiffRangeRequestBody = never;

export type DependencyGraphDiffRangeResponseStatus = 200 | 403 | 404;

export type DependencyGraphDiff = ReadonlyArray<{
  readonly change_type: 'added' | 'removed';
  readonly manifest: string;
  readonly ecosystem: string;
  readonly name: string;
  readonly version: string;
  readonly package_url: string | null;
  readonly license: string | null;
  readonly source_repository_url: string | null;
  readonly vulnerabilities: ReadonlyArray<{
    readonly severity: string;
    readonly advisory_ghsa_id: string;
    readonly advisory_summary: string;
    readonly advisory_url: string;
  }>;
  readonly scope: 'unknown' | 'runtime' | 'development';
}>;

export type DependencyGraphDiffRangeResponseBody =
  | DependencyGraphDiff
  | BasicError;

export type DependencyGraphDiffRangeResolver = msw.HttpResponseResolver<
  DependencyGraphDiffRangeRequestParams,
  DependencyGraphDiffRangeRequestBody,
  DependencyGraphDiffRangeResponseBody
>;

export type Metadata = never;

export type Snapshot = {
  readonly version: number;
  readonly job: {
    readonly id: string;
    readonly correlator: string;
    readonly html_url?: string;
  };
  readonly sha: string;
  readonly ref: string;
  readonly detector: {
    readonly name: string;
    readonly version: string;
    readonly url: string;
  };
  readonly metadata?: Metadata;
  readonly manifests?: never;
  readonly scanned: string;
};

export type DependencyGraphCreateRepositorySnapshotRequestQuery = {};

export type DependencyGraphCreateRepositorySnapshotRequestHeaders = {};

export type DependencyGraphCreateRepositorySnapshotRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type DependencyGraphCreateRepositorySnapshotRequestBody = Snapshot;

export type DependencyGraphCreateRepositorySnapshotResponseStatus = 201;

export type DependencyGraphCreateRepositorySnapshotResponseBody = {
  readonly id: number;
  readonly created_at: string;
  readonly result: string;
  readonly message: string;
};

export type DependencyGraphCreateRepositorySnapshotResolver = msw.HttpResponseResolver<
  DependencyGraphCreateRepositorySnapshotRequestParams,
  DependencyGraphCreateRepositorySnapshotRequestBody,
  DependencyGraphCreateRepositorySnapshotResponseBody
>;

export type ReposListDeploymentsRequestQuery = {
  readonly sha?: string;
  readonly ref?: string;
  readonly task?: string;
  readonly environment?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListDeploymentsRequestHeaders = {};

export type ReposListDeploymentsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposListDeploymentsRequestBody = never;

export type ReposListDeploymentsResponseStatus = 200;

export type ReposListDeploymentsResponseBody = ReadonlyArray<Deployment>;

export type ReposListDeploymentsResolver = msw.HttpResponseResolver<
  ReposListDeploymentsRequestParams,
  ReposListDeploymentsRequestBody,
  ReposListDeploymentsResponseBody
>;

export type ReposCreateDeploymentRequestQuery = {};

export type ReposCreateDeploymentRequestHeaders = {};

export type ReposCreateDeploymentRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposCreateDeploymentRequestBody = {
  readonly ref: string;
  readonly task?: string;
  readonly auto_merge?: boolean;
  readonly required_contexts?: ReadonlyArray<string>;
  readonly payload?: never | string;
  readonly environment?: string;
  readonly description?: string | null;
  readonly transient_environment?: boolean;
  readonly production_environment?: boolean;
};

export type ReposCreateDeploymentResponseStatus = 201 | 202 | 409 | 422;

export type ReposCreateDeploymentResponseBody =
  | Deployment
  | { readonly message?: string }
  | never
  | ValidationError;

export type ReposCreateDeploymentResolver = msw.HttpResponseResolver<
  ReposCreateDeploymentRequestParams,
  ReposCreateDeploymentRequestBody,
  ReposCreateDeploymentResponseBody
>;

export type ReposGetDeploymentRequestQuery = {};

export type ReposGetDeploymentRequestHeaders = {};

export type ReposGetDeploymentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly deployment_id: string;
};

export type ReposGetDeploymentRequestBody = never;

export type ReposGetDeploymentResponseStatus = 200 | 404;

export type ReposGetDeploymentResponseBody = Deployment | BasicError;

export type ReposGetDeploymentResolver = msw.HttpResponseResolver<
  ReposGetDeploymentRequestParams,
  ReposGetDeploymentRequestBody,
  ReposGetDeploymentResponseBody
>;

export type ReposDeleteDeploymentRequestQuery = {};

export type ReposDeleteDeploymentRequestHeaders = {};

export type ReposDeleteDeploymentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly deployment_id: string;
};

export type ReposDeleteDeploymentRequestBody = never;

export type ReposDeleteDeploymentResponseStatus = 204 | 404 | 422;

export type ReposDeleteDeploymentResponseBody =
  | never
  | BasicError
  | ValidationErrorSimple;

export type ReposDeleteDeploymentResolver = msw.HttpResponseResolver<
  ReposDeleteDeploymentRequestParams,
  ReposDeleteDeploymentRequestBody,
  ReposDeleteDeploymentResponseBody
>;

export type ReposListDeploymentStatusesRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListDeploymentStatusesRequestHeaders = {};

export type ReposListDeploymentStatusesRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly deployment_id: string;
};

export type ReposListDeploymentStatusesRequestBody = never;

export type ReposListDeploymentStatusesResponseStatus = 200 | 404;

export type DeploymentStatus = {
  readonly url: string;
  readonly id: number;
  readonly node_id: string;
  readonly state:
    | 'error'
    | 'failure'
    | 'inactive'
    | 'pending'
    | 'success'
    | 'queued'
    | 'in_progress';
  readonly creator: SimpleUser;
  readonly description: string;
  readonly environment?: string;
  readonly target_url: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly deployment_url: string;
  readonly repository_url: string;
  readonly environment_url?: string;
  readonly log_url?: string;
  readonly performed_via_github_app?: GitHubApp;
};

export type ReposListDeploymentStatusesResponseBody =
  | ReadonlyArray<DeploymentStatus>
  | BasicError;

export type ReposListDeploymentStatusesResolver = msw.HttpResponseResolver<
  ReposListDeploymentStatusesRequestParams,
  ReposListDeploymentStatusesRequestBody,
  ReposListDeploymentStatusesResponseBody
>;

export type ReposCreateDeploymentStatusRequestQuery = {};

export type ReposCreateDeploymentStatusRequestHeaders = {};

export type ReposCreateDeploymentStatusRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly deployment_id: string;
};

export type ReposCreateDeploymentStatusRequestBody = {
  readonly state:
    | 'error'
    | 'failure'
    | 'inactive'
    | 'in_progress'
    | 'queued'
    | 'pending'
    | 'success';
  readonly target_url?: string;
  readonly log_url?: string;
  readonly description?: string;
  readonly environment?: 'production' | 'staging' | 'qa';
  readonly environment_url?: string;
  readonly auto_inactive?: boolean;
};

export type ReposCreateDeploymentStatusResponseStatus = 201 | 422;

export type ReposCreateDeploymentStatusResponseBody =
  | DeploymentStatus
  | ValidationError;

export type ReposCreateDeploymentStatusResolver = msw.HttpResponseResolver<
  ReposCreateDeploymentStatusRequestParams,
  ReposCreateDeploymentStatusRequestBody,
  ReposCreateDeploymentStatusResponseBody
>;

export type ReposGetDeploymentStatusRequestQuery = {};

export type ReposGetDeploymentStatusRequestHeaders = {};

export type ReposGetDeploymentStatusRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly deployment_id: string;
  readonly status_id: string;
};

export type ReposGetDeploymentStatusRequestBody = never;

export type ReposGetDeploymentStatusResponseStatus = 200 | 404;

export type ReposGetDeploymentStatusResponseBody =
  | DeploymentStatus
  | BasicError;

export type ReposGetDeploymentStatusResolver = msw.HttpResponseResolver<
  ReposGetDeploymentStatusRequestParams,
  ReposGetDeploymentStatusRequestBody,
  ReposGetDeploymentStatusResponseBody
>;

export type ReposCreateDispatchEventRequestQuery = {};

export type ReposCreateDispatchEventRequestHeaders = {};

export type ReposCreateDispatchEventRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposCreateDispatchEventRequestBody = {
  readonly event_type: string;
  readonly client_payload?: never;
};

export type ReposCreateDispatchEventResponseStatus = 204 | 422;

export type ReposCreateDispatchEventResponseBody = never | ValidationError;

export type ReposCreateDispatchEventResolver = msw.HttpResponseResolver<
  ReposCreateDispatchEventRequestParams,
  ReposCreateDispatchEventRequestBody,
  ReposCreateDispatchEventResponseBody
>;

export type ReposGetAllEnvironmentsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposGetAllEnvironmentsRequestHeaders = {};

export type ReposGetAllEnvironmentsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposGetAllEnvironmentsRequestBody = never;

export type ReposGetAllEnvironmentsResponseStatus = 200;

export type WaitTimer = number;

export type DeploymentBranchPolicySettings = {
  readonly protected_branches: boolean;
  readonly custom_branch_policies: boolean;
} | null;

export type Environment = {
  readonly id: number;
  readonly node_id: string;
  readonly name: string;
  readonly url: string;
  readonly html_url: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly protection_rules?: ReadonlyArray<
    | {
        readonly id: number;
        readonly node_id: string;
        readonly type: string;
        readonly wait_timer?: WaitTimer;
      }
    | {
        readonly id: number;
        readonly node_id: string;
        readonly type: string;
        readonly reviewers?: ReadonlyArray<{
          readonly type?: DeploymentReviewerType;
          readonly reviewer?: SimpleUser | Team;
        }>;
      }
    | { readonly id: number; readonly node_id: string; readonly type: string }
  >;
  readonly deployment_branch_policy?: DeploymentBranchPolicySettings;
};

export type ReposGetAllEnvironmentsResponseBody = {
  readonly total_count?: number;
  readonly environments?: ReadonlyArray<Environment>;
};

export type ReposGetAllEnvironmentsResolver = msw.HttpResponseResolver<
  ReposGetAllEnvironmentsRequestParams,
  ReposGetAllEnvironmentsRequestBody,
  ReposGetAllEnvironmentsResponseBody
>;

export type ReposGetEnvironmentRequestQuery = {};

export type ReposGetEnvironmentRequestHeaders = {};

export type ReposGetEnvironmentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly environment_name: string;
};

export type ReposGetEnvironmentRequestBody = never;

export type ReposGetEnvironmentResponseStatus = 200;

export type ReposGetEnvironmentResponseBody = Environment;

export type ReposGetEnvironmentResolver = msw.HttpResponseResolver<
  ReposGetEnvironmentRequestParams,
  ReposGetEnvironmentRequestBody,
  ReposGetEnvironmentResponseBody
>;

export type ReposCreateOrUpdateEnvironmentRequestQuery = {};

export type ReposCreateOrUpdateEnvironmentRequestHeaders = {};

export type ReposCreateOrUpdateEnvironmentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly environment_name: string;
};

export type ReposCreateOrUpdateEnvironmentRequestBody =
  | {
      readonly wait_timer?: WaitTimer;
      readonly reviewers?: ReadonlyArray<{
        readonly type?: DeploymentReviewerType;
        readonly id?: number;
      }> | null;
      readonly deployment_branch_policy?: DeploymentBranchPolicySettings;
    }
  | null
  | undefined;

export type ReposCreateOrUpdateEnvironmentResponseStatus = 200 | 422;

export type ReposCreateOrUpdateEnvironmentResponseBody =
  | Environment
  | BasicError;

export type ReposCreateOrUpdateEnvironmentResolver = msw.HttpResponseResolver<
  ReposCreateOrUpdateEnvironmentRequestParams,
  ReposCreateOrUpdateEnvironmentRequestBody,
  ReposCreateOrUpdateEnvironmentResponseBody
>;

export type ReposDeleteAnEnvironmentRequestQuery = {};

export type ReposDeleteAnEnvironmentRequestHeaders = {};

export type ReposDeleteAnEnvironmentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly environment_name: string;
};

export type ReposDeleteAnEnvironmentRequestBody = never;

export type ReposDeleteAnEnvironmentResponseStatus = 204;

export type ReposDeleteAnEnvironmentResponseBody = never;

export type ReposDeleteAnEnvironmentResolver = msw.HttpResponseResolver<
  ReposDeleteAnEnvironmentRequestParams,
  ReposDeleteAnEnvironmentRequestBody,
  ReposDeleteAnEnvironmentResponseBody
>;

export type ReposListDeploymentBranchPoliciesRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListDeploymentBranchPoliciesRequestHeaders = {};

export type ReposListDeploymentBranchPoliciesRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly environment_name: string;
};

export type ReposListDeploymentBranchPoliciesRequestBody = never;

export type ReposListDeploymentBranchPoliciesResponseStatus = 200;

export type DeploymentBranchPolicy = {
  readonly id?: number;
  readonly node_id?: string;
  readonly name?: string;
};

export type ReposListDeploymentBranchPoliciesResponseBody = {
  readonly total_count: number;
  readonly branch_policies: ReadonlyArray<DeploymentBranchPolicy>;
};

export type ReposListDeploymentBranchPoliciesResolver = msw.HttpResponseResolver<
  ReposListDeploymentBranchPoliciesRequestParams,
  ReposListDeploymentBranchPoliciesRequestBody,
  ReposListDeploymentBranchPoliciesResponseBody
>;

export type DeploymentBranchPolicyNamePattern = { readonly name: string };

export type ReposCreateDeploymentBranchPolicyRequestQuery = {};

export type ReposCreateDeploymentBranchPolicyRequestHeaders = {};

export type ReposCreateDeploymentBranchPolicyRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly environment_name: string;
};

export type ReposCreateDeploymentBranchPolicyRequestBody = DeploymentBranchPolicyNamePattern;

export type ReposCreateDeploymentBranchPolicyResponseStatus = 200 | 303 | 404;

export type ReposCreateDeploymentBranchPolicyResponseBody =
  | DeploymentBranchPolicy
  | never;

export type ReposCreateDeploymentBranchPolicyResolver = msw.HttpResponseResolver<
  ReposCreateDeploymentBranchPolicyRequestParams,
  ReposCreateDeploymentBranchPolicyRequestBody,
  ReposCreateDeploymentBranchPolicyResponseBody
>;

export type ReposGetDeploymentBranchPolicyRequestQuery = {};

export type ReposGetDeploymentBranchPolicyRequestHeaders = {};

export type ReposGetDeploymentBranchPolicyRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly environment_name: string;
  readonly branch_policy_id: string;
};

export type ReposGetDeploymentBranchPolicyRequestBody = never;

export type ReposGetDeploymentBranchPolicyResponseStatus = 200;

export type ReposGetDeploymentBranchPolicyResponseBody = DeploymentBranchPolicy;

export type ReposGetDeploymentBranchPolicyResolver = msw.HttpResponseResolver<
  ReposGetDeploymentBranchPolicyRequestParams,
  ReposGetDeploymentBranchPolicyRequestBody,
  ReposGetDeploymentBranchPolicyResponseBody
>;

export type ReposUpdateDeploymentBranchPolicyRequestQuery = {};

export type ReposUpdateDeploymentBranchPolicyRequestHeaders = {};

export type ReposUpdateDeploymentBranchPolicyRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly environment_name: string;
  readonly branch_policy_id: string;
};

export type ReposUpdateDeploymentBranchPolicyRequestBody = DeploymentBranchPolicyNamePattern;

export type ReposUpdateDeploymentBranchPolicyResponseStatus = 200;

export type ReposUpdateDeploymentBranchPolicyResponseBody = DeploymentBranchPolicy;

export type ReposUpdateDeploymentBranchPolicyResolver = msw.HttpResponseResolver<
  ReposUpdateDeploymentBranchPolicyRequestParams,
  ReposUpdateDeploymentBranchPolicyRequestBody,
  ReposUpdateDeploymentBranchPolicyResponseBody
>;

export type ReposDeleteDeploymentBranchPolicyRequestQuery = {};

export type ReposDeleteDeploymentBranchPolicyRequestHeaders = {};

export type ReposDeleteDeploymentBranchPolicyRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly environment_name: string;
  readonly branch_policy_id: string;
};

export type ReposDeleteDeploymentBranchPolicyRequestBody = never;

export type ReposDeleteDeploymentBranchPolicyResponseStatus = 204;

export type ReposDeleteDeploymentBranchPolicyResponseBody = never;

export type ReposDeleteDeploymentBranchPolicyResolver = msw.HttpResponseResolver<
  ReposDeleteDeploymentBranchPolicyRequestParams,
  ReposDeleteDeploymentBranchPolicyRequestBody,
  ReposDeleteDeploymentBranchPolicyResponseBody
>;

export type ActivityListRepoEventsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActivityListRepoEventsRequestHeaders = {};

export type ActivityListRepoEventsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActivityListRepoEventsRequestBody = never;

export type ActivityListRepoEventsResponseStatus = 200;

export type ActivityListRepoEventsResponseBody = ReadonlyArray<Event>;

export type ActivityListRepoEventsResolver = msw.HttpResponseResolver<
  ActivityListRepoEventsRequestParams,
  ActivityListRepoEventsRequestBody,
  ActivityListRepoEventsResponseBody
>;

export type ReposListForksRequestQuery = {
  readonly sort?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListForksRequestHeaders = {};

export type ReposListForksRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposListForksRequestBody = never;

export type ReposListForksResponseStatus = 200 | 400;

export type ReposListForksResponseBody =
  | ReadonlyArray<MinimalRepository>
  | BasicError;

export type ReposListForksResolver = msw.HttpResponseResolver<
  ReposListForksRequestParams,
  ReposListForksRequestBody,
  ReposListForksResponseBody
>;

export type ReposCreateForkRequestQuery = {};

export type ReposCreateForkRequestHeaders = {};

export type ReposCreateForkRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposCreateForkRequestBody =
  | {
      readonly organization?: string;
      readonly name?: string;
      readonly default_branch_only?: boolean;
    }
  | null
  | undefined;

export type ReposCreateForkResponseStatus = 202 | 400 | 403 | 404 | 422;

export type ReposCreateForkResponseBody =
  | FullRepository
  | BasicError
  | ValidationError;

export type ReposCreateForkResolver = msw.HttpResponseResolver<
  ReposCreateForkRequestParams,
  ReposCreateForkRequestBody,
  ReposCreateForkResponseBody
>;

export type GitCreateBlobRequestQuery = {};

export type GitCreateBlobRequestHeaders = {};

export type GitCreateBlobRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type GitCreateBlobRequestBody = {
  readonly content: string;
  readonly encoding?: string;
};

export type GitCreateBlobResponseStatus = 201 | 403 | 404 | 409 | 422;

export type ShortBlob = { readonly url: string; readonly sha: string };

export type GitCreateBlobResponseBody =
  | ShortBlob
  | BasicError
  | ValidationError;

export type GitCreateBlobResolver = msw.HttpResponseResolver<
  GitCreateBlobRequestParams,
  GitCreateBlobRequestBody,
  GitCreateBlobResponseBody
>;

export type GitGetBlobRequestQuery = {};

export type GitGetBlobRequestHeaders = {};

export type GitGetBlobRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly file_sha: string;
};

export type GitGetBlobRequestBody = never;

export type GitGetBlobResponseStatus = 200 | 403 | 404 | 422;

export type Blob = {
  readonly content: string;
  readonly encoding: string;
  readonly url: string;
  readonly sha: string;
  readonly size: number | null;
  readonly node_id: string;
  readonly highlighted_content?: string;
};

export type GitGetBlobResponseBody = Blob | BasicError | ValidationError;

export type GitGetBlobResolver = msw.HttpResponseResolver<
  GitGetBlobRequestParams,
  GitGetBlobRequestBody,
  GitGetBlobResponseBody
>;

export type GitCreateCommitRequestQuery = {};

export type GitCreateCommitRequestHeaders = {};

export type GitCreateCommitRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type GitCreateCommitRequestBody = {
  readonly message: string;
  readonly tree: string;
  readonly parents?: ReadonlyArray<string>;
  readonly author?: {
    readonly name: string;
    readonly email: string;
    readonly date?: string;
  };
  readonly committer?: {
    readonly name?: string;
    readonly email?: string;
    readonly date?: string;
  };
  readonly signature?: string;
};

export type GitCreateCommitResponseStatus = 201 | 404 | 422;

export type GitCommit = {
  readonly sha: string;
  readonly node_id: string;
  readonly url: string;
  readonly author: {
    readonly date: string;
    readonly email: string;
    readonly name: string;
  };
  readonly committer: {
    readonly date: string;
    readonly email: string;
    readonly name: string;
  };
  readonly message: string;
  readonly tree: { readonly sha: string; readonly url: string };
  readonly parents: ReadonlyArray<{
    readonly sha: string;
    readonly url: string;
    readonly html_url: string;
  }>;
  readonly verification: {
    readonly verified: boolean;
    readonly reason: string;
    readonly signature: string | null;
    readonly payload: string | null;
  };
  readonly html_url: string;
};

export type GitCreateCommitResponseBody =
  | GitCommit
  | BasicError
  | ValidationError;

export type GitCreateCommitResolver = msw.HttpResponseResolver<
  GitCreateCommitRequestParams,
  GitCreateCommitRequestBody,
  GitCreateCommitResponseBody
>;

export type GitGetCommitRequestQuery = {};

export type GitGetCommitRequestHeaders = {};

export type GitGetCommitRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly commit_sha: string;
};

export type GitGetCommitRequestBody = never;

export type GitGetCommitResponseStatus = 200 | 404;

export type GitGetCommitResponseBody = GitCommit | BasicError;

export type GitGetCommitResolver = msw.HttpResponseResolver<
  GitGetCommitRequestParams,
  GitGetCommitRequestBody,
  GitGetCommitResponseBody
>;

export type GitListMatchingRefsRequestQuery = {};

export type GitListMatchingRefsRequestHeaders = {};

export type GitListMatchingRefsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly ref: string;
};

export type GitListMatchingRefsRequestBody = never;

export type GitListMatchingRefsResponseStatus = 200;

export type GitReference = {
  readonly ref: string;
  readonly node_id: string;
  readonly url: string;
  readonly object: {
    readonly type: string;
    readonly sha: string;
    readonly url: string;
  };
};

export type GitListMatchingRefsResponseBody = ReadonlyArray<GitReference>;

export type GitListMatchingRefsResolver = msw.HttpResponseResolver<
  GitListMatchingRefsRequestParams,
  GitListMatchingRefsRequestBody,
  GitListMatchingRefsResponseBody
>;

export type GitGetRefRequestQuery = {};

export type GitGetRefRequestHeaders = {};

export type GitGetRefRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly ref: string;
};

export type GitGetRefRequestBody = never;

export type GitGetRefResponseStatus = 200 | 404;

export type GitGetRefResponseBody = GitReference | BasicError;

export type GitGetRefResolver = msw.HttpResponseResolver<
  GitGetRefRequestParams,
  GitGetRefRequestBody,
  GitGetRefResponseBody
>;

export type GitCreateRefRequestQuery = {};

export type GitCreateRefRequestHeaders = {};

export type GitCreateRefRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type GitCreateRefRequestBody = {
  readonly ref: string;
  readonly sha: string;
  readonly key?: string;
};

export type GitCreateRefResponseStatus = 201 | 422;

export type GitCreateRefResponseBody = GitReference | ValidationError;

export type GitCreateRefResolver = msw.HttpResponseResolver<
  GitCreateRefRequestParams,
  GitCreateRefRequestBody,
  GitCreateRefResponseBody
>;

export type GitUpdateRefRequestQuery = {};

export type GitUpdateRefRequestHeaders = {};

export type GitUpdateRefRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly ref: string;
};

export type GitUpdateRefRequestBody = {
  readonly sha: string;
  readonly force?: boolean;
};

export type GitUpdateRefResponseStatus = 200 | 422;

export type GitUpdateRefResponseBody = GitReference | ValidationError;

export type GitUpdateRefResolver = msw.HttpResponseResolver<
  GitUpdateRefRequestParams,
  GitUpdateRefRequestBody,
  GitUpdateRefResponseBody
>;

export type GitDeleteRefRequestQuery = {};

export type GitDeleteRefRequestHeaders = {};

export type GitDeleteRefRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly ref: string;
};

export type GitDeleteRefRequestBody = never;

export type GitDeleteRefResponseStatus = 204 | 422;

export type GitDeleteRefResponseBody = never | ValidationError;

export type GitDeleteRefResolver = msw.HttpResponseResolver<
  GitDeleteRefRequestParams,
  GitDeleteRefRequestBody,
  GitDeleteRefResponseBody
>;

export type GitCreateTagRequestQuery = {};

export type GitCreateTagRequestHeaders = {};

export type GitCreateTagRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type GitCreateTagRequestBody = {
  readonly tag: string;
  readonly message: string;
  readonly object: string;
  readonly type: 'commit' | 'tree' | 'blob';
  readonly tagger?: {
    readonly name: string;
    readonly email: string;
    readonly date?: string;
  };
};

export type GitCreateTagResponseStatus = 201 | 422;

export type GitTag = {
  readonly node_id: string;
  readonly tag: string;
  readonly sha: string;
  readonly url: string;
  readonly message: string;
  readonly tagger: {
    readonly date: string;
    readonly email: string;
    readonly name: string;
  };
  readonly object: {
    readonly sha: string;
    readonly type: string;
    readonly url: string;
  };
  readonly verification?: Verification;
};

export type GitCreateTagResponseBody = GitTag | ValidationError;

export type GitCreateTagResolver = msw.HttpResponseResolver<
  GitCreateTagRequestParams,
  GitCreateTagRequestBody,
  GitCreateTagResponseBody
>;

export type GitGetTagRequestQuery = {};

export type GitGetTagRequestHeaders = {};

export type GitGetTagRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly tag_sha: string;
};

export type GitGetTagRequestBody = never;

export type GitGetTagResponseStatus = 200 | 404;

export type GitGetTagResponseBody = GitTag | BasicError;

export type GitGetTagResolver = msw.HttpResponseResolver<
  GitGetTagRequestParams,
  GitGetTagRequestBody,
  GitGetTagResponseBody
>;

export type GitCreateTreeRequestQuery = {};

export type GitCreateTreeRequestHeaders = {};

export type GitCreateTreeRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type GitCreateTreeRequestBody = {
  readonly tree: ReadonlyArray<{
    readonly path?: string;
    readonly mode?: '100644' | '100755' | '040000' | '160000' | '120000';
    readonly type?: 'blob' | 'tree' | 'commit';
    readonly sha?: string | null;
    readonly content?: string;
  }>;
  readonly base_tree?: string;
};

export type GitCreateTreeResponseStatus = 201 | 403 | 404 | 422;

export type GitTree = {
  readonly sha: string;
  readonly url: string;
  readonly truncated: boolean;
  readonly tree: ReadonlyArray<{
    readonly path?: string;
    readonly mode?: string;
    readonly type?: string;
    readonly sha?: string;
    readonly size?: number;
    readonly url?: string;
  }>;
};

export type GitCreateTreeResponseBody = GitTree | BasicError | ValidationError;

export type GitCreateTreeResolver = msw.HttpResponseResolver<
  GitCreateTreeRequestParams,
  GitCreateTreeRequestBody,
  GitCreateTreeResponseBody
>;

export type GitGetTreeRequestQuery = { readonly recursive?: string };

export type GitGetTreeRequestHeaders = {};

export type GitGetTreeRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly tree_sha: string;
};

export type GitGetTreeRequestBody = never;

export type GitGetTreeResponseStatus = 200 | 404 | 422;

export type GitGetTreeResponseBody = GitTree | BasicError | ValidationError;

export type GitGetTreeResolver = msw.HttpResponseResolver<
  GitGetTreeRequestParams,
  GitGetTreeRequestBody,
  GitGetTreeResponseBody
>;

export type ReposListWebhooksRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListWebhooksRequestHeaders = {};

export type ReposListWebhooksRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposListWebhooksRequestBody = never;

export type ReposListWebhooksResponseStatus = 200 | 404;

export type HookResponse = {
  readonly code: number | null;
  readonly status: string | null;
  readonly message: string | null;
};

export type Webhook = {
  readonly type: string;
  readonly id: number;
  readonly name: string;
  readonly active: boolean;
  readonly events: ReadonlyArray<string>;
  readonly config: {
    readonly email?: string;
    readonly password?: string;
    readonly room?: string;
    readonly subdomain?: string;
    readonly url?: WebhookConfigUrl;
    readonly insecure_ssl?: WebhookConfigInsecureSsl;
    readonly content_type?: WebhookConfigContentType;
    readonly digest?: string;
    readonly secret?: WebhookConfigSecret;
    readonly token?: string;
  };
  readonly updated_at: string;
  readonly created_at: string;
  readonly url: string;
  readonly test_url: string;
  readonly ping_url: string;
  readonly deliveries_url?: string;
  readonly last_response: HookResponse;
};

export type ReposListWebhooksResponseBody = ReadonlyArray<Webhook> | BasicError;

export type ReposListWebhooksResolver = msw.HttpResponseResolver<
  ReposListWebhooksRequestParams,
  ReposListWebhooksRequestBody,
  ReposListWebhooksResponseBody
>;

export type ReposCreateWebhookRequestQuery = {};

export type ReposCreateWebhookRequestHeaders = {};

export type ReposCreateWebhookRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposCreateWebhookRequestBody =
  | {
      readonly name?: string;
      readonly config?: {
        readonly url?: WebhookConfigUrl;
        readonly content_type?: WebhookConfigContentType;
        readonly secret?: WebhookConfigSecret;
        readonly insecure_ssl?: WebhookConfigInsecureSsl;
        readonly token?: string;
        readonly digest?: string;
      };
      readonly events?: ReadonlyArray<string>;
      readonly active?: boolean;
    }
  | null
  | undefined;

export type ReposCreateWebhookResponseStatus = 201 | 403 | 404 | 422;

export type ReposCreateWebhookResponseBody =
  | Webhook
  | BasicError
  | ValidationError;

export type ReposCreateWebhookResolver = msw.HttpResponseResolver<
  ReposCreateWebhookRequestParams,
  ReposCreateWebhookRequestBody,
  ReposCreateWebhookResponseBody
>;

export type ReposGetWebhookRequestQuery = {};

export type ReposGetWebhookRequestHeaders = {};

export type ReposGetWebhookRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly hook_id: string;
};

export type ReposGetWebhookRequestBody = never;

export type ReposGetWebhookResponseStatus = 200 | 404;

export type ReposGetWebhookResponseBody = Webhook | BasicError;

export type ReposGetWebhookResolver = msw.HttpResponseResolver<
  ReposGetWebhookRequestParams,
  ReposGetWebhookRequestBody,
  ReposGetWebhookResponseBody
>;

export type ReposUpdateWebhookRequestQuery = {};

export type ReposUpdateWebhookRequestHeaders = {};

export type ReposUpdateWebhookRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly hook_id: string;
};

export type ReposUpdateWebhookRequestBody = {
  readonly config?: {
    readonly url: WebhookConfigUrl;
    readonly content_type?: WebhookConfigContentType;
    readonly secret?: WebhookConfigSecret;
    readonly insecure_ssl?: WebhookConfigInsecureSsl;
    readonly address?: string;
    readonly room?: string;
  };
  readonly events?: ReadonlyArray<string>;
  readonly add_events?: ReadonlyArray<string>;
  readonly remove_events?: ReadonlyArray<string>;
  readonly active?: boolean;
};

export type ReposUpdateWebhookResponseStatus = 200 | 404 | 422;

export type ReposUpdateWebhookResponseBody =
  | Webhook
  | BasicError
  | ValidationError;

export type ReposUpdateWebhookResolver = msw.HttpResponseResolver<
  ReposUpdateWebhookRequestParams,
  ReposUpdateWebhookRequestBody,
  ReposUpdateWebhookResponseBody
>;

export type ReposDeleteWebhookRequestQuery = {};

export type ReposDeleteWebhookRequestHeaders = {};

export type ReposDeleteWebhookRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly hook_id: string;
};

export type ReposDeleteWebhookRequestBody = never;

export type ReposDeleteWebhookResponseStatus = 204 | 404;

export type ReposDeleteWebhookResponseBody = never | BasicError;

export type ReposDeleteWebhookResolver = msw.HttpResponseResolver<
  ReposDeleteWebhookRequestParams,
  ReposDeleteWebhookRequestBody,
  ReposDeleteWebhookResponseBody
>;

export type ReposGetWebhookConfigForRepoRequestQuery = {};

export type ReposGetWebhookConfigForRepoRequestHeaders = {};

export type ReposGetWebhookConfigForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly hook_id: string;
};

export type ReposGetWebhookConfigForRepoRequestBody = never;

export type ReposGetWebhookConfigForRepoResponseStatus = 200;

export type ReposGetWebhookConfigForRepoResponseBody = WebhookConfiguration;

export type ReposGetWebhookConfigForRepoResolver = msw.HttpResponseResolver<
  ReposGetWebhookConfigForRepoRequestParams,
  ReposGetWebhookConfigForRepoRequestBody,
  ReposGetWebhookConfigForRepoResponseBody
>;

export type ReposUpdateWebhookConfigForRepoRequestQuery = {};

export type ReposUpdateWebhookConfigForRepoRequestHeaders = {};

export type ReposUpdateWebhookConfigForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly hook_id: string;
};

export type ReposUpdateWebhookConfigForRepoRequestBody =
  | {
      readonly url?: WebhookConfigUrl;
      readonly content_type?: WebhookConfigContentType;
      readonly secret?: WebhookConfigSecret;
      readonly insecure_ssl?: WebhookConfigInsecureSsl;
    }
  | undefined;

export type ReposUpdateWebhookConfigForRepoResponseStatus = 200;

export type ReposUpdateWebhookConfigForRepoResponseBody = WebhookConfiguration;

export type ReposUpdateWebhookConfigForRepoResolver = msw.HttpResponseResolver<
  ReposUpdateWebhookConfigForRepoRequestParams,
  ReposUpdateWebhookConfigForRepoRequestBody,
  ReposUpdateWebhookConfigForRepoResponseBody
>;

export type ReposListWebhookDeliveriesRequestQuery = {
  readonly per_page?: string;
  readonly cursor?: string;
};

export type ReposListWebhookDeliveriesRequestHeaders = {};

export type ReposListWebhookDeliveriesRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly hook_id: string;
};

export type ReposListWebhookDeliveriesRequestBody = never;

export type ReposListWebhookDeliveriesResponseStatus = 200 | 400 | 422;

export type ReposListWebhookDeliveriesResponseBody =
  | ReadonlyArray<SimpleWebhookDelivery>
  | BasicError
  | ValidationError;

export type ReposListWebhookDeliveriesResolver = msw.HttpResponseResolver<
  ReposListWebhookDeliveriesRequestParams,
  ReposListWebhookDeliveriesRequestBody,
  ReposListWebhookDeliveriesResponseBody
>;

export type ReposGetWebhookDeliveryRequestQuery = {};

export type ReposGetWebhookDeliveryRequestHeaders = {};

export type ReposGetWebhookDeliveryRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly hook_id: string;
  readonly delivery_id: string;
};

export type ReposGetWebhookDeliveryRequestBody = never;

export type ReposGetWebhookDeliveryResponseStatus = 200 | 400 | 422;

export type ReposGetWebhookDeliveryResponseBody =
  | WebhookDelivery
  | BasicError
  | ValidationError;

export type ReposGetWebhookDeliveryResolver = msw.HttpResponseResolver<
  ReposGetWebhookDeliveryRequestParams,
  ReposGetWebhookDeliveryRequestBody,
  ReposGetWebhookDeliveryResponseBody
>;

export type ReposRedeliverWebhookDeliveryRequestQuery = {};

export type ReposRedeliverWebhookDeliveryRequestHeaders = {};

export type ReposRedeliverWebhookDeliveryRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly hook_id: string;
  readonly delivery_id: string;
};

export type ReposRedeliverWebhookDeliveryRequestBody = never;

export type ReposRedeliverWebhookDeliveryResponseStatus = 202 | 400 | 422;

export type ReposRedeliverWebhookDeliveryResponseBody =
  | never
  | BasicError
  | ValidationError;

export type ReposRedeliverWebhookDeliveryResolver = msw.HttpResponseResolver<
  ReposRedeliverWebhookDeliveryRequestParams,
  ReposRedeliverWebhookDeliveryRequestBody,
  ReposRedeliverWebhookDeliveryResponseBody
>;

export type ReposPingWebhookRequestQuery = {};

export type ReposPingWebhookRequestHeaders = {};

export type ReposPingWebhookRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly hook_id: string;
};

export type ReposPingWebhookRequestBody = never;

export type ReposPingWebhookResponseStatus = 204 | 404;

export type ReposPingWebhookResponseBody = never | BasicError;

export type ReposPingWebhookResolver = msw.HttpResponseResolver<
  ReposPingWebhookRequestParams,
  ReposPingWebhookRequestBody,
  ReposPingWebhookResponseBody
>;

export type ReposTestPushWebhookRequestQuery = {};

export type ReposTestPushWebhookRequestHeaders = {};

export type ReposTestPushWebhookRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly hook_id: string;
};

export type ReposTestPushWebhookRequestBody = never;

export type ReposTestPushWebhookResponseStatus = 204 | 404;

export type ReposTestPushWebhookResponseBody = never | BasicError;

export type ReposTestPushWebhookResolver = msw.HttpResponseResolver<
  ReposTestPushWebhookRequestParams,
  ReposTestPushWebhookRequestBody,
  ReposTestPushWebhookResponseBody
>;

export type MigrationsGetImportStatusRequestQuery = {};

export type MigrationsGetImportStatusRequestHeaders = {};

export type MigrationsGetImportStatusRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type MigrationsGetImportStatusRequestBody = never;

export type MigrationsGetImportStatusResponseStatus = 200 | 404;

export type Import = {
  readonly vcs: string | null;
  readonly use_lfs?: boolean;
  readonly vcs_url: string;
  readonly svc_root?: string;
  readonly tfvc_project?: string;
  readonly status:
    | 'auth'
    | 'error'
    | 'none'
    | 'detecting'
    | 'choose'
    | 'auth_failed'
    | 'importing'
    | 'mapping'
    | 'waiting_to_push'
    | 'pushing'
    | 'complete'
    | 'setup'
    | 'unknown'
    | 'detection_found_multiple'
    | 'detection_found_nothing'
    | 'detection_needs_auth';
  readonly status_text?: string | null;
  readonly failed_step?: string | null;
  readonly error_message?: string | null;
  readonly import_percent?: number | null;
  readonly commit_count?: number | null;
  readonly push_percent?: number | null;
  readonly has_large_files?: boolean;
  readonly large_files_size?: number;
  readonly large_files_count?: number;
  readonly project_choices?: ReadonlyArray<{
    readonly vcs?: string;
    readonly tfvc_project?: string;
    readonly human_name?: string;
  }>;
  readonly message?: string;
  readonly authors_count?: number | null;
  readonly url: string;
  readonly html_url: string;
  readonly authors_url: string;
  readonly repository_url: string;
  readonly svn_root?: string;
};

export type MigrationsGetImportStatusResponseBody = Import | BasicError;

export type MigrationsGetImportStatusResolver = msw.HttpResponseResolver<
  MigrationsGetImportStatusRequestParams,
  MigrationsGetImportStatusRequestBody,
  MigrationsGetImportStatusResponseBody
>;

export type MigrationsStartImportRequestQuery = {};

export type MigrationsStartImportRequestHeaders = {};

export type MigrationsStartImportRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type MigrationsStartImportRequestBody = {
  readonly vcs_url: string;
  readonly vcs?: 'subversion' | 'git' | 'mercurial' | 'tfvc';
  readonly vcs_username?: string;
  readonly vcs_password?: string;
  readonly tfvc_project?: string;
};

export type MigrationsStartImportResponseStatus = 201 | 404 | 422;

export type MigrationsStartImportResponseBody =
  | Import
  | BasicError
  | ValidationError;

export type MigrationsStartImportResolver = msw.HttpResponseResolver<
  MigrationsStartImportRequestParams,
  MigrationsStartImportRequestBody,
  MigrationsStartImportResponseBody
>;

export type MigrationsUpdateImportRequestQuery = {};

export type MigrationsUpdateImportRequestHeaders = {};

export type MigrationsUpdateImportRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type MigrationsUpdateImportRequestBody =
  | {
      readonly vcs_username?: string;
      readonly vcs_password?: string;
      readonly vcs?: 'subversion' | 'tfvc' | 'git' | 'mercurial';
      readonly tfvc_project?: string;
    }
  | null
  | undefined;

export type MigrationsUpdateImportResponseStatus = 200;

export type MigrationsUpdateImportResponseBody = Import;

export type MigrationsUpdateImportResolver = msw.HttpResponseResolver<
  MigrationsUpdateImportRequestParams,
  MigrationsUpdateImportRequestBody,
  MigrationsUpdateImportResponseBody
>;

export type MigrationsCancelImportRequestQuery = {};

export type MigrationsCancelImportRequestHeaders = {};

export type MigrationsCancelImportRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type MigrationsCancelImportRequestBody = never;

export type MigrationsCancelImportResponseStatus = 204;

export type MigrationsCancelImportResponseBody = never;

export type MigrationsCancelImportResolver = msw.HttpResponseResolver<
  MigrationsCancelImportRequestParams,
  MigrationsCancelImportRequestBody,
  MigrationsCancelImportResponseBody
>;

export type MigrationsGetCommitAuthorsRequestQuery = {
  readonly since?: string;
};

export type MigrationsGetCommitAuthorsRequestHeaders = {};

export type MigrationsGetCommitAuthorsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type MigrationsGetCommitAuthorsRequestBody = never;

export type MigrationsGetCommitAuthorsResponseStatus = 200 | 404;

export type PorterAuthor = {
  readonly id: number;
  readonly remote_id: string;
  readonly remote_name: string;
  readonly email: string;
  readonly name: string;
  readonly url: string;
  readonly import_url: string;
};

export type MigrationsGetCommitAuthorsResponseBody =
  | ReadonlyArray<PorterAuthor>
  | BasicError;

export type MigrationsGetCommitAuthorsResolver = msw.HttpResponseResolver<
  MigrationsGetCommitAuthorsRequestParams,
  MigrationsGetCommitAuthorsRequestBody,
  MigrationsGetCommitAuthorsResponseBody
>;

export type MigrationsMapCommitAuthorRequestQuery = {};

export type MigrationsMapCommitAuthorRequestHeaders = {};

export type MigrationsMapCommitAuthorRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly author_id: string;
};

export type MigrationsMapCommitAuthorRequestBody =
  | { readonly email?: string; readonly name?: string }
  | undefined;

export type MigrationsMapCommitAuthorResponseStatus = 200 | 404 | 422;

export type MigrationsMapCommitAuthorResponseBody =
  | PorterAuthor
  | BasicError
  | ValidationError;

export type MigrationsMapCommitAuthorResolver = msw.HttpResponseResolver<
  MigrationsMapCommitAuthorRequestParams,
  MigrationsMapCommitAuthorRequestBody,
  MigrationsMapCommitAuthorResponseBody
>;

export type MigrationsGetLargeFilesRequestQuery = {};

export type MigrationsGetLargeFilesRequestHeaders = {};

export type MigrationsGetLargeFilesRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type MigrationsGetLargeFilesRequestBody = never;

export type MigrationsGetLargeFilesResponseStatus = 200;

export type PorterLargeFile = {
  readonly ref_name: string;
  readonly path: string;
  readonly oid: string;
  readonly size: number;
};

export type MigrationsGetLargeFilesResponseBody = ReadonlyArray<PorterLargeFile>;

export type MigrationsGetLargeFilesResolver = msw.HttpResponseResolver<
  MigrationsGetLargeFilesRequestParams,
  MigrationsGetLargeFilesRequestBody,
  MigrationsGetLargeFilesResponseBody
>;

export type MigrationsSetLfsPreferenceRequestQuery = {};

export type MigrationsSetLfsPreferenceRequestHeaders = {};

export type MigrationsSetLfsPreferenceRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type MigrationsSetLfsPreferenceRequestBody = {
  readonly use_lfs: 'opt_in' | 'opt_out';
};

export type MigrationsSetLfsPreferenceResponseStatus = 200 | 422;

export type MigrationsSetLfsPreferenceResponseBody = Import | ValidationError;

export type MigrationsSetLfsPreferenceResolver = msw.HttpResponseResolver<
  MigrationsSetLfsPreferenceRequestParams,
  MigrationsSetLfsPreferenceRequestBody,
  MigrationsSetLfsPreferenceResponseBody
>;

export type AppsGetRepoInstallationRequestQuery = {};

export type AppsGetRepoInstallationRequestHeaders = {};

export type AppsGetRepoInstallationRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type AppsGetRepoInstallationRequestBody = never;

export type AppsGetRepoInstallationResponseStatus = 200 | 301 | 404;

export type AppsGetRepoInstallationResponseBody = Installation | BasicError;

export type AppsGetRepoInstallationResolver = msw.HttpResponseResolver<
  AppsGetRepoInstallationRequestParams,
  AppsGetRepoInstallationRequestBody,
  AppsGetRepoInstallationResponseBody
>;

export type InteractionsGetRestrictionsForRepoRequestQuery = {};

export type InteractionsGetRestrictionsForRepoRequestHeaders = {};

export type InteractionsGetRestrictionsForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type InteractionsGetRestrictionsForRepoRequestBody = never;

export type InteractionsGetRestrictionsForRepoResponseStatus = 200;

export type InteractionsGetRestrictionsForRepoResponseBody =
  | InteractionLimits
  | {};

export type InteractionsGetRestrictionsForRepoResolver = msw.HttpResponseResolver<
  InteractionsGetRestrictionsForRepoRequestParams,
  InteractionsGetRestrictionsForRepoRequestBody,
  InteractionsGetRestrictionsForRepoResponseBody
>;

export type InteractionsSetRestrictionsForRepoRequestQuery = {};

export type InteractionsSetRestrictionsForRepoRequestHeaders = {};

export type InteractionsSetRestrictionsForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type InteractionsSetRestrictionsForRepoRequestBody = InteractionRestrictions;

export type InteractionsSetRestrictionsForRepoResponseStatus = 200 | 409;

export type InteractionsSetRestrictionsForRepoResponseBody =
  | InteractionLimits
  | never;

export type InteractionsSetRestrictionsForRepoResolver = msw.HttpResponseResolver<
  InteractionsSetRestrictionsForRepoRequestParams,
  InteractionsSetRestrictionsForRepoRequestBody,
  InteractionsSetRestrictionsForRepoResponseBody
>;

export type InteractionsRemoveRestrictionsForRepoRequestQuery = {};

export type InteractionsRemoveRestrictionsForRepoRequestHeaders = {};

export type InteractionsRemoveRestrictionsForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type InteractionsRemoveRestrictionsForRepoRequestBody = never;

export type InteractionsRemoveRestrictionsForRepoResponseStatus = 204 | 409;

export type InteractionsRemoveRestrictionsForRepoResponseBody = never;

export type InteractionsRemoveRestrictionsForRepoResolver = msw.HttpResponseResolver<
  InteractionsRemoveRestrictionsForRepoRequestParams,
  InteractionsRemoveRestrictionsForRepoRequestBody,
  InteractionsRemoveRestrictionsForRepoResponseBody
>;

export type ReposListInvitationsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListInvitationsRequestHeaders = {};

export type ReposListInvitationsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposListInvitationsRequestBody = never;

export type ReposListInvitationsResponseStatus = 200;

export type ReposListInvitationsResponseBody = ReadonlyArray<RepositoryInvitation>;

export type ReposListInvitationsResolver = msw.HttpResponseResolver<
  ReposListInvitationsRequestParams,
  ReposListInvitationsRequestBody,
  ReposListInvitationsResponseBody
>;

export type ReposUpdateInvitationRequestQuery = {};

export type ReposUpdateInvitationRequestHeaders = {};

export type ReposUpdateInvitationRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly invitation_id: string;
};

export type ReposUpdateInvitationRequestBody =
  | {
      readonly permissions?: 'read' | 'write' | 'maintain' | 'triage' | 'admin';
    }
  | undefined;

export type ReposUpdateInvitationResponseStatus = 200;

export type ReposUpdateInvitationResponseBody = RepositoryInvitation;

export type ReposUpdateInvitationResolver = msw.HttpResponseResolver<
  ReposUpdateInvitationRequestParams,
  ReposUpdateInvitationRequestBody,
  ReposUpdateInvitationResponseBody
>;

export type ReposDeleteInvitationRequestQuery = {};

export type ReposDeleteInvitationRequestHeaders = {};

export type ReposDeleteInvitationRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly invitation_id: string;
};

export type ReposDeleteInvitationRequestBody = never;

export type ReposDeleteInvitationResponseStatus = 204;

export type ReposDeleteInvitationResponseBody = never;

export type ReposDeleteInvitationResolver = msw.HttpResponseResolver<
  ReposDeleteInvitationRequestParams,
  ReposDeleteInvitationRequestBody,
  ReposDeleteInvitationResponseBody
>;

export type IssuesListForRepoRequestQuery = {
  readonly milestone?: string;
  readonly state?: string;
  readonly assignee?: string;
  readonly creator?: string;
  readonly mentioned?: string;
  readonly labels?: string;
  readonly sort?: string;
  readonly direction?: string;
  readonly since?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type IssuesListForRepoRequestHeaders = {};

export type IssuesListForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type IssuesListForRepoRequestBody = never;

export type IssuesListForRepoResponseStatus = 200 | 301 | 404 | 422;

export type IssuesListForRepoResponseBody =
  | ReadonlyArray<Issue>
  | BasicError
  | ValidationError;

export type IssuesListForRepoResolver = msw.HttpResponseResolver<
  IssuesListForRepoRequestParams,
  IssuesListForRepoRequestBody,
  IssuesListForRepoResponseBody
>;

export type IssuesCreateRequestQuery = {};

export type IssuesCreateRequestHeaders = {};

export type IssuesCreateRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type IssuesCreateRequestBody = {
  readonly title: string | number;
  readonly body?: string;
  readonly assignee?: string | null;
  readonly milestone?: string | number | null;
  readonly labels?: ReadonlyArray<
    | string
    | {
        readonly id?: number;
        readonly name?: string;
        readonly description?: string | null;
        readonly color?: string | null;
      }
  >;
  readonly assignees?: ReadonlyArray<string>;
};

export type IssuesCreateResponseStatus = 201 | 403 | 404 | 410 | 422 | 503;

export type IssuesCreateResponseBody =
  | Issue
  | BasicError
  | ValidationError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type IssuesCreateResolver = msw.HttpResponseResolver<
  IssuesCreateRequestParams,
  IssuesCreateRequestBody,
  IssuesCreateResponseBody
>;

export type IssuesListCommentsForRepoRequestQuery = {
  readonly sort?: string;
  readonly direction?: string;
  readonly since?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type IssuesListCommentsForRepoRequestHeaders = {};

export type IssuesListCommentsForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type IssuesListCommentsForRepoRequestBody = never;

export type IssuesListCommentsForRepoResponseStatus = 200 | 404 | 422;

export type IssuesListCommentsForRepoResponseBody =
  | ReadonlyArray<IssueComment>
  | BasicError
  | ValidationError;

export type IssuesListCommentsForRepoResolver = msw.HttpResponseResolver<
  IssuesListCommentsForRepoRequestParams,
  IssuesListCommentsForRepoRequestBody,
  IssuesListCommentsForRepoResponseBody
>;

export type IssuesGetCommentRequestQuery = {};

export type IssuesGetCommentRequestHeaders = {};

export type IssuesGetCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly comment_id: string;
};

export type IssuesGetCommentRequestBody = never;

export type IssuesGetCommentResponseStatus = 200 | 404;

export type IssuesGetCommentResponseBody = IssueComment | BasicError;

export type IssuesGetCommentResolver = msw.HttpResponseResolver<
  IssuesGetCommentRequestParams,
  IssuesGetCommentRequestBody,
  IssuesGetCommentResponseBody
>;

export type IssuesUpdateCommentRequestQuery = {};

export type IssuesUpdateCommentRequestHeaders = {};

export type IssuesUpdateCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly comment_id: string;
};

export type IssuesUpdateCommentRequestBody = { readonly body: string };

export type IssuesUpdateCommentResponseStatus = 200 | 422;

export type IssuesUpdateCommentResponseBody = IssueComment | ValidationError;

export type IssuesUpdateCommentResolver = msw.HttpResponseResolver<
  IssuesUpdateCommentRequestParams,
  IssuesUpdateCommentRequestBody,
  IssuesUpdateCommentResponseBody
>;

export type IssuesDeleteCommentRequestQuery = {};

export type IssuesDeleteCommentRequestHeaders = {};

export type IssuesDeleteCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly comment_id: string;
};

export type IssuesDeleteCommentRequestBody = never;

export type IssuesDeleteCommentResponseStatus = 204;

export type IssuesDeleteCommentResponseBody = never;

export type IssuesDeleteCommentResolver = msw.HttpResponseResolver<
  IssuesDeleteCommentRequestParams,
  IssuesDeleteCommentRequestBody,
  IssuesDeleteCommentResponseBody
>;

export type ReactionsListForIssueCommentRequestQuery = {
  readonly content?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ReactionsListForIssueCommentRequestHeaders = {};

export type ReactionsListForIssueCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly comment_id: string;
};

export type ReactionsListForIssueCommentRequestBody = never;

export type ReactionsListForIssueCommentResponseStatus = 200 | 404;

export type ReactionsListForIssueCommentResponseBody =
  | ReadonlyArray<Reaction>
  | BasicError;

export type ReactionsListForIssueCommentResolver = msw.HttpResponseResolver<
  ReactionsListForIssueCommentRequestParams,
  ReactionsListForIssueCommentRequestBody,
  ReactionsListForIssueCommentResponseBody
>;

export type ReactionsCreateForIssueCommentRequestQuery = {};

export type ReactionsCreateForIssueCommentRequestHeaders = {};

export type ReactionsCreateForIssueCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly comment_id: string;
};

export type ReactionsCreateForIssueCommentRequestBody = {
  readonly content:
    | '+1'
    | '-1'
    | 'laugh'
    | 'confused'
    | 'heart'
    | 'hooray'
    | 'rocket'
    | 'eyes';
};

export type ReactionsCreateForIssueCommentResponseStatus = 200 | 201 | 422;

export type ReactionsCreateForIssueCommentResponseBody =
  | Reaction
  | ValidationError;

export type ReactionsCreateForIssueCommentResolver = msw.HttpResponseResolver<
  ReactionsCreateForIssueCommentRequestParams,
  ReactionsCreateForIssueCommentRequestBody,
  ReactionsCreateForIssueCommentResponseBody
>;

export type ReactionsDeleteForIssueCommentRequestQuery = {};

export type ReactionsDeleteForIssueCommentRequestHeaders = {};

export type ReactionsDeleteForIssueCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly comment_id: string;
  readonly reaction_id: string;
};

export type ReactionsDeleteForIssueCommentRequestBody = never;

export type ReactionsDeleteForIssueCommentResponseStatus = 204;

export type ReactionsDeleteForIssueCommentResponseBody = never;

export type ReactionsDeleteForIssueCommentResolver = msw.HttpResponseResolver<
  ReactionsDeleteForIssueCommentRequestParams,
  ReactionsDeleteForIssueCommentRequestBody,
  ReactionsDeleteForIssueCommentResponseBody
>;

export type IssuesListEventsForRepoRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type IssuesListEventsForRepoRequestHeaders = {};

export type IssuesListEventsForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type IssuesListEventsForRepoRequestBody = never;

export type IssuesListEventsForRepoResponseStatus = 200 | 422;

export type IssueEventLabel = {
  readonly name: string | null;
  readonly color: string | null;
};

export type IssueEventDismissedReview = {
  readonly state: string;
  readonly review_id: number;
  readonly dismissal_message: string | null;
  readonly dismissal_commit_id?: string | null;
};

export type IssueEventMilestone = { readonly title: string };

export type IssueEventProjectCard = {
  readonly url: string;
  readonly id: number;
  readonly project_url: string;
  readonly project_id: number;
  readonly column_name: string;
  readonly previous_column_name?: string;
};

export type IssueEventRename = { readonly from: string; readonly to: string };

export type IssueEvent = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly actor: SimpleUser;
  readonly event: string;
  readonly commit_id: string | null;
  readonly commit_url: string | null;
  readonly created_at: string;
  readonly issue?: Issue;
  readonly label?: IssueEventLabel;
  readonly assignee?: SimpleUser;
  readonly assigner?: SimpleUser;
  readonly review_requester?: SimpleUser;
  readonly requested_reviewer?: SimpleUser;
  readonly requested_team?: Team;
  readonly dismissed_review?: IssueEventDismissedReview;
  readonly milestone?: IssueEventMilestone;
  readonly project_card?: IssueEventProjectCard;
  readonly rename?: IssueEventRename;
  readonly author_association?: AuthorAssociation;
  readonly lock_reason?: string | null;
  readonly performed_via_github_app?: GitHubApp;
};

export type IssuesListEventsForRepoResponseBody =
  | ReadonlyArray<IssueEvent>
  | ValidationError;

export type IssuesListEventsForRepoResolver = msw.HttpResponseResolver<
  IssuesListEventsForRepoRequestParams,
  IssuesListEventsForRepoRequestBody,
  IssuesListEventsForRepoResponseBody
>;

export type IssuesGetEventRequestQuery = {};

export type IssuesGetEventRequestHeaders = {};

export type IssuesGetEventRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly event_id: string;
};

export type IssuesGetEventRequestBody = never;

export type IssuesGetEventResponseStatus = 200 | 403 | 404 | 410;

export type IssuesGetEventResponseBody = IssueEvent | BasicError;

export type IssuesGetEventResolver = msw.HttpResponseResolver<
  IssuesGetEventRequestParams,
  IssuesGetEventRequestBody,
  IssuesGetEventResponseBody
>;

export type IssuesGetRequestQuery = {};

export type IssuesGetRequestHeaders = {};

export type IssuesGetRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly issue_number: string;
};

export type IssuesGetRequestBody = never;

export type IssuesGetResponseStatus = 200 | 301 | 304 | 404 | 410;

export type IssuesGetResponseBody = Issue | BasicError | never;

export type IssuesGetResolver = msw.HttpResponseResolver<
  IssuesGetRequestParams,
  IssuesGetRequestBody,
  IssuesGetResponseBody
>;

export type IssuesUpdateRequestQuery = {};

export type IssuesUpdateRequestHeaders = {};

export type IssuesUpdateRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly issue_number: string;
};

export type IssuesUpdateRequestBody =
  | {
      readonly title?: string | number | null;
      readonly body?: string | null;
      readonly assignee?: string | null;
      readonly state?: 'open' | 'closed';
      readonly state_reason?: 'completed' | 'not_planned' | 'reopened' | null;
      readonly milestone?: string | number | null;
      readonly labels?: ReadonlyArray<
        | string
        | {
            readonly id?: number;
            readonly name?: string;
            readonly description?: string | null;
            readonly color?: string | null;
          }
      >;
      readonly assignees?: ReadonlyArray<string>;
    }
  | undefined;

export type IssuesUpdateResponseStatus =
  | 200
  | 301
  | 403
  | 404
  | 410
  | 422
  | 503;

export type IssuesUpdateResponseBody =
  | Issue
  | BasicError
  | ValidationError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type IssuesUpdateResolver = msw.HttpResponseResolver<
  IssuesUpdateRequestParams,
  IssuesUpdateRequestBody,
  IssuesUpdateResponseBody
>;

export type IssuesAddAssigneesRequestQuery = {};

export type IssuesAddAssigneesRequestHeaders = {};

export type IssuesAddAssigneesRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly issue_number: string;
};

export type IssuesAddAssigneesRequestBody =
  | { readonly assignees?: ReadonlyArray<string> }
  | undefined;

export type IssuesAddAssigneesResponseStatus = 201;

export type IssuesAddAssigneesResponseBody = Issue;

export type IssuesAddAssigneesResolver = msw.HttpResponseResolver<
  IssuesAddAssigneesRequestParams,
  IssuesAddAssigneesRequestBody,
  IssuesAddAssigneesResponseBody
>;

export type IssuesRemoveAssigneesRequestQuery = {};

export type IssuesRemoveAssigneesRequestHeaders = {};

export type IssuesRemoveAssigneesRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly issue_number: string;
};

export type IssuesRemoveAssigneesRequestBody =
  | { readonly assignees?: ReadonlyArray<string> }
  | undefined;

export type IssuesRemoveAssigneesResponseStatus = 200;

export type IssuesRemoveAssigneesResponseBody = Issue;

export type IssuesRemoveAssigneesResolver = msw.HttpResponseResolver<
  IssuesRemoveAssigneesRequestParams,
  IssuesRemoveAssigneesRequestBody,
  IssuesRemoveAssigneesResponseBody
>;

export type IssuesListCommentsRequestQuery = {
  readonly since?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type IssuesListCommentsRequestHeaders = {};

export type IssuesListCommentsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly issue_number: string;
};

export type IssuesListCommentsRequestBody = never;

export type IssuesListCommentsResponseStatus = 200 | 404 | 410;

export type IssuesListCommentsResponseBody =
  | ReadonlyArray<IssueComment>
  | BasicError;

export type IssuesListCommentsResolver = msw.HttpResponseResolver<
  IssuesListCommentsRequestParams,
  IssuesListCommentsRequestBody,
  IssuesListCommentsResponseBody
>;

export type IssuesCreateCommentRequestQuery = {};

export type IssuesCreateCommentRequestHeaders = {};

export type IssuesCreateCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly issue_number: string;
};

export type IssuesCreateCommentRequestBody = { readonly body: string };

export type IssuesCreateCommentResponseStatus = 201 | 403 | 404 | 410 | 422;

export type IssuesCreateCommentResponseBody =
  | IssueComment
  | BasicError
  | ValidationError;

export type IssuesCreateCommentResolver = msw.HttpResponseResolver<
  IssuesCreateCommentRequestParams,
  IssuesCreateCommentRequestBody,
  IssuesCreateCommentResponseBody
>;

export type IssuesListEventsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type IssuesListEventsRequestHeaders = {};

export type IssuesListEventsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly issue_number: string;
};

export type IssuesListEventsRequestBody = never;

export type IssuesListEventsResponseStatus = 200 | 410;

export type LabeledIssueEvent = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly actor: SimpleUser;
  readonly event: string;
  readonly commit_id: string | null;
  readonly commit_url: string | null;
  readonly created_at: string;
  readonly performed_via_github_app: GitHubApp;
  readonly label: { readonly name: string; readonly color: string };
};

export type UnlabeledIssueEvent = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly actor: SimpleUser;
  readonly event: string;
  readonly commit_id: string | null;
  readonly commit_url: string | null;
  readonly created_at: string;
  readonly performed_via_github_app: GitHubApp;
  readonly label: { readonly name: string; readonly color: string };
};

export type AssignedIssueEvent = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly actor: SimpleUser;
  readonly event: string;
  readonly commit_id: string | null;
  readonly commit_url: string | null;
  readonly created_at: string;
  readonly performed_via_github_app: GitHubApp;
  readonly assignee: SimpleUser;
  readonly assigner: SimpleUser;
};

export type UnassignedIssueEvent = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly actor: SimpleUser;
  readonly event: string;
  readonly commit_id: string | null;
  readonly commit_url: string | null;
  readonly created_at: string;
  readonly performed_via_github_app: GitHubApp;
  readonly assignee: SimpleUser;
  readonly assigner: SimpleUser;
};

export type MilestonedIssueEvent = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly actor: SimpleUser;
  readonly event: string;
  readonly commit_id: string | null;
  readonly commit_url: string | null;
  readonly created_at: string;
  readonly performed_via_github_app: GitHubApp;
  readonly milestone: { readonly title: string };
};

export type DemilestonedIssueEvent = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly actor: SimpleUser;
  readonly event: string;
  readonly commit_id: string | null;
  readonly commit_url: string | null;
  readonly created_at: string;
  readonly performed_via_github_app: GitHubApp;
  readonly milestone: { readonly title: string };
};

export type RenamedIssueEvent = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly actor: SimpleUser;
  readonly event: string;
  readonly commit_id: string | null;
  readonly commit_url: string | null;
  readonly created_at: string;
  readonly performed_via_github_app: GitHubApp;
  readonly rename: { readonly from: string; readonly to: string };
};

export type ReviewRequestedIssueEvent = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly actor: SimpleUser;
  readonly event: string;
  readonly commit_id: string | null;
  readonly commit_url: string | null;
  readonly created_at: string;
  readonly performed_via_github_app: GitHubApp;
  readonly review_requester: SimpleUser;
  readonly requested_team?: Team;
  readonly requested_reviewer?: SimpleUser;
};

export type ReviewRequestRemovedIssueEvent = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly actor: SimpleUser;
  readonly event: string;
  readonly commit_id: string | null;
  readonly commit_url: string | null;
  readonly created_at: string;
  readonly performed_via_github_app: GitHubApp;
  readonly review_requester: SimpleUser;
  readonly requested_team?: Team;
  readonly requested_reviewer?: SimpleUser;
};

export type ReviewDismissedIssueEvent = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly actor: SimpleUser;
  readonly event: string;
  readonly commit_id: string | null;
  readonly commit_url: string | null;
  readonly created_at: string;
  readonly performed_via_github_app: GitHubApp;
  readonly dismissed_review: {
    readonly state: string;
    readonly review_id: number;
    readonly dismissal_message: string | null;
    readonly dismissal_commit_id?: string;
  };
};

export type LockedIssueEvent = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly actor: SimpleUser;
  readonly event: string;
  readonly commit_id: string | null;
  readonly commit_url: string | null;
  readonly created_at: string;
  readonly performed_via_github_app: GitHubApp;
  readonly lock_reason: string | null;
};

export type AddedToProjectIssueEvent = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly actor: SimpleUser;
  readonly event: string;
  readonly commit_id: string | null;
  readonly commit_url: string | null;
  readonly created_at: string;
  readonly performed_via_github_app: GitHubApp;
  readonly project_card?: {
    readonly id: number;
    readonly url: string;
    readonly project_id: number;
    readonly project_url: string;
    readonly column_name: string;
    readonly previous_column_name?: string;
  };
};

export type MovedColumnInProjectIssueEvent = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly actor: SimpleUser;
  readonly event: string;
  readonly commit_id: string | null;
  readonly commit_url: string | null;
  readonly created_at: string;
  readonly performed_via_github_app: GitHubApp;
  readonly project_card?: {
    readonly id: number;
    readonly url: string;
    readonly project_id: number;
    readonly project_url: string;
    readonly column_name: string;
    readonly previous_column_name?: string;
  };
};

export type RemovedFromProjectIssueEvent = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly actor: SimpleUser;
  readonly event: string;
  readonly commit_id: string | null;
  readonly commit_url: string | null;
  readonly created_at: string;
  readonly performed_via_github_app: GitHubApp;
  readonly project_card?: {
    readonly id: number;
    readonly url: string;
    readonly project_id: number;
    readonly project_url: string;
    readonly column_name: string;
    readonly previous_column_name?: string;
  };
};

export type ConvertedNoteToIssueIssueEvent = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly actor: SimpleUser;
  readonly event: string;
  readonly commit_id: string | null;
  readonly commit_url: string | null;
  readonly created_at: string;
  readonly performed_via_github_app: GitHubApp;
  readonly project_card?: {
    readonly id: number;
    readonly url: string;
    readonly project_id: number;
    readonly project_url: string;
    readonly column_name: string;
    readonly previous_column_name?: string;
  };
};

export type IssueEventForIssue =
  | LabeledIssueEvent
  | UnlabeledIssueEvent
  | AssignedIssueEvent
  | UnassignedIssueEvent
  | MilestonedIssueEvent
  | DemilestonedIssueEvent
  | RenamedIssueEvent
  | ReviewRequestedIssueEvent
  | ReviewRequestRemovedIssueEvent
  | ReviewDismissedIssueEvent
  | LockedIssueEvent
  | AddedToProjectIssueEvent
  | MovedColumnInProjectIssueEvent
  | RemovedFromProjectIssueEvent
  | ConvertedNoteToIssueIssueEvent;

export type IssuesListEventsResponseBody =
  | ReadonlyArray<IssueEventForIssue>
  | BasicError;

export type IssuesListEventsResolver = msw.HttpResponseResolver<
  IssuesListEventsRequestParams,
  IssuesListEventsRequestBody,
  IssuesListEventsResponseBody
>;

export type IssuesListLabelsOnIssueRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type IssuesListLabelsOnIssueRequestHeaders = {};

export type IssuesListLabelsOnIssueRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly issue_number: string;
};

export type IssuesListLabelsOnIssueRequestBody = never;

export type IssuesListLabelsOnIssueResponseStatus = 200 | 301 | 404 | 410;

export type Label = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly name: string;
  readonly description: string | null;
  readonly color: string;
  readonly default: boolean;
};

export type IssuesListLabelsOnIssueResponseBody =
  | ReadonlyArray<Label>
  | BasicError;

export type IssuesListLabelsOnIssueResolver = msw.HttpResponseResolver<
  IssuesListLabelsOnIssueRequestParams,
  IssuesListLabelsOnIssueRequestBody,
  IssuesListLabelsOnIssueResponseBody
>;

export type IssuesAddLabelsRequestQuery = {};

export type IssuesAddLabelsRequestHeaders = {};

export type IssuesAddLabelsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly issue_number: string;
};

export type IssuesAddLabelsRequestBody =
  | { readonly labels?: ReadonlyArray<string> }
  | ReadonlyArray<string>
  | { readonly labels?: ReadonlyArray<{ readonly name: string }> }
  | ReadonlyArray<{ readonly name: string }>
  | string
  | undefined;

export type IssuesAddLabelsResponseStatus = 200 | 301 | 404 | 410 | 422;

export type IssuesAddLabelsResponseBody =
  | ReadonlyArray<Label>
  | BasicError
  | ValidationError;

export type IssuesAddLabelsResolver = msw.HttpResponseResolver<
  IssuesAddLabelsRequestParams,
  IssuesAddLabelsRequestBody,
  IssuesAddLabelsResponseBody
>;

export type IssuesSetLabelsRequestQuery = {};

export type IssuesSetLabelsRequestHeaders = {};

export type IssuesSetLabelsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly issue_number: string;
};

export type IssuesSetLabelsRequestBody =
  | { readonly labels?: ReadonlyArray<string> }
  | ReadonlyArray<string>
  | { readonly labels?: ReadonlyArray<{ readonly name: string }> }
  | ReadonlyArray<{ readonly name: string }>
  | string
  | undefined;

export type IssuesSetLabelsResponseStatus = 200 | 301 | 404 | 410 | 422;

export type IssuesSetLabelsResponseBody =
  | ReadonlyArray<Label>
  | BasicError
  | ValidationError;

export type IssuesSetLabelsResolver = msw.HttpResponseResolver<
  IssuesSetLabelsRequestParams,
  IssuesSetLabelsRequestBody,
  IssuesSetLabelsResponseBody
>;

export type IssuesRemoveAllLabelsRequestQuery = {};

export type IssuesRemoveAllLabelsRequestHeaders = {};

export type IssuesRemoveAllLabelsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly issue_number: string;
};

export type IssuesRemoveAllLabelsRequestBody = never;

export type IssuesRemoveAllLabelsResponseStatus = 204 | 301 | 404 | 410;

export type IssuesRemoveAllLabelsResponseBody = never | BasicError;

export type IssuesRemoveAllLabelsResolver = msw.HttpResponseResolver<
  IssuesRemoveAllLabelsRequestParams,
  IssuesRemoveAllLabelsRequestBody,
  IssuesRemoveAllLabelsResponseBody
>;

export type IssuesRemoveLabelRequestQuery = {};

export type IssuesRemoveLabelRequestHeaders = {};

export type IssuesRemoveLabelRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly issue_number: string;
  readonly name: string;
};

export type IssuesRemoveLabelRequestBody = never;

export type IssuesRemoveLabelResponseStatus = 200 | 301 | 404 | 410;

export type IssuesRemoveLabelResponseBody = ReadonlyArray<Label> | BasicError;

export type IssuesRemoveLabelResolver = msw.HttpResponseResolver<
  IssuesRemoveLabelRequestParams,
  IssuesRemoveLabelRequestBody,
  IssuesRemoveLabelResponseBody
>;

export type IssuesLockRequestQuery = {};

export type IssuesLockRequestHeaders = {};

export type IssuesLockRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly issue_number: string;
};

export type IssuesLockRequestBody =
  | { readonly lock_reason?: 'off-topic' | 'too heated' | 'resolved' | 'spam' }
  | null
  | undefined;

export type IssuesLockResponseStatus = 204 | 403 | 404 | 410 | 422;

export type IssuesLockResponseBody = never | BasicError | ValidationError;

export type IssuesLockResolver = msw.HttpResponseResolver<
  IssuesLockRequestParams,
  IssuesLockRequestBody,
  IssuesLockResponseBody
>;

export type IssuesUnlockRequestQuery = {};

export type IssuesUnlockRequestHeaders = {};

export type IssuesUnlockRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly issue_number: string;
};

export type IssuesUnlockRequestBody = never;

export type IssuesUnlockResponseStatus = 204 | 403 | 404;

export type IssuesUnlockResponseBody = never | BasicError;

export type IssuesUnlockResolver = msw.HttpResponseResolver<
  IssuesUnlockRequestParams,
  IssuesUnlockRequestBody,
  IssuesUnlockResponseBody
>;

export type ReactionsListForIssueRequestQuery = {
  readonly content?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ReactionsListForIssueRequestHeaders = {};

export type ReactionsListForIssueRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly issue_number: string;
};

export type ReactionsListForIssueRequestBody = never;

export type ReactionsListForIssueResponseStatus = 200 | 404 | 410;

export type ReactionsListForIssueResponseBody =
  | ReadonlyArray<Reaction>
  | BasicError;

export type ReactionsListForIssueResolver = msw.HttpResponseResolver<
  ReactionsListForIssueRequestParams,
  ReactionsListForIssueRequestBody,
  ReactionsListForIssueResponseBody
>;

export type ReactionsCreateForIssueRequestQuery = {};

export type ReactionsCreateForIssueRequestHeaders = {};

export type ReactionsCreateForIssueRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly issue_number: string;
};

export type ReactionsCreateForIssueRequestBody = {
  readonly content:
    | '+1'
    | '-1'
    | 'laugh'
    | 'confused'
    | 'heart'
    | 'hooray'
    | 'rocket'
    | 'eyes';
};

export type ReactionsCreateForIssueResponseStatus = 200 | 201 | 422;

export type ReactionsCreateForIssueResponseBody = Reaction | ValidationError;

export type ReactionsCreateForIssueResolver = msw.HttpResponseResolver<
  ReactionsCreateForIssueRequestParams,
  ReactionsCreateForIssueRequestBody,
  ReactionsCreateForIssueResponseBody
>;

export type ReactionsDeleteForIssueRequestQuery = {};

export type ReactionsDeleteForIssueRequestHeaders = {};

export type ReactionsDeleteForIssueRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly issue_number: string;
  readonly reaction_id: string;
};

export type ReactionsDeleteForIssueRequestBody = never;

export type ReactionsDeleteForIssueResponseStatus = 204;

export type ReactionsDeleteForIssueResponseBody = never;

export type ReactionsDeleteForIssueResolver = msw.HttpResponseResolver<
  ReactionsDeleteForIssueRequestParams,
  ReactionsDeleteForIssueRequestBody,
  ReactionsDeleteForIssueResponseBody
>;

export type IssuesListEventsForTimelineRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type IssuesListEventsForTimelineRequestHeaders = {};

export type IssuesListEventsForTimelineRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly issue_number: string;
};

export type IssuesListEventsForTimelineRequestBody = never;

export type IssuesListEventsForTimelineResponseStatus = 200 | 404 | 410;

export type TimelineCommentEvent = {
  readonly event: string;
  readonly actor: SimpleUser;
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly body?: string;
  readonly body_text?: string;
  readonly body_html?: string;
  readonly html_url: string;
  readonly user: SimpleUser;
  readonly created_at: string;
  readonly updated_at: string;
  readonly issue_url: string;
  readonly author_association: AuthorAssociation;
  readonly performed_via_github_app?: GitHubApp;
  readonly reactions?: ReactionRollup;
};

export type TimelineCrossReferencedEvent = {
  readonly event: string;
  readonly actor?: SimpleUser;
  readonly created_at: string;
  readonly updated_at: string;
  readonly source: { readonly type?: string; readonly issue?: Issue };
};

export type TimelineCommittedEvent = {
  readonly event?: string;
  readonly sha: string;
  readonly node_id: string;
  readonly url: string;
  readonly author: {
    readonly date: string;
    readonly email: string;
    readonly name: string;
  };
  readonly committer: {
    readonly date: string;
    readonly email: string;
    readonly name: string;
  };
  readonly message: string;
  readonly tree: { readonly sha: string; readonly url: string };
  readonly parents: ReadonlyArray<{
    readonly sha: string;
    readonly url: string;
    readonly html_url: string;
  }>;
  readonly verification: {
    readonly verified: boolean;
    readonly reason: string;
    readonly signature: string | null;
    readonly payload: string | null;
  };
  readonly html_url: string;
};

export type TimelineReviewedEvent = {
  readonly event: string;
  readonly id: number;
  readonly node_id: string;
  readonly user: SimpleUser;
  readonly body: string | null;
  readonly state: string;
  readonly html_url: string;
  readonly pull_request_url: string;
  readonly _links: {
    readonly html: { readonly href: string };
    readonly pull_request: { readonly href: string };
  };
  readonly submitted_at?: string;
  readonly commit_id: string;
  readonly body_html?: string;
  readonly body_text?: string;
  readonly author_association: AuthorAssociation;
};

export type PullRequestReviewComment = {
  readonly url: string;
  readonly pull_request_review_id: number | null;
  readonly id: number;
  readonly node_id: string;
  readonly diff_hunk: string;
  readonly path: string;
  readonly position: number;
  readonly original_position: number;
  readonly commit_id: string;
  readonly original_commit_id: string;
  readonly in_reply_to_id?: number;
  readonly user: SimpleUser;
  readonly body: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly html_url: string;
  readonly pull_request_url: string;
  readonly author_association: AuthorAssociation;
  readonly _links: {
    readonly self: { readonly href: string };
    readonly html: { readonly href: string };
    readonly pull_request: { readonly href: string };
  };
  readonly start_line?: number | null;
  readonly original_start_line?: number | null;
  readonly start_side?: 'LEFT' | 'RIGHT' | null;
  readonly line?: number;
  readonly original_line?: number;
  readonly side?: 'LEFT' | 'RIGHT';
  readonly reactions?: ReactionRollup;
  readonly body_html?: string;
  readonly body_text?: string;
};

export type TimelineLineCommentedEvent = {
  readonly event?: string;
  readonly node_id?: string;
  readonly comments?: ReadonlyArray<PullRequestReviewComment>;
};

export type TimelineCommitCommentedEvent = {
  readonly event?: string;
  readonly node_id?: string;
  readonly commit_id?: string;
  readonly comments?: ReadonlyArray<CommitComment>;
};

export type TimelineAssignedIssueEvent = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly actor: SimpleUser;
  readonly event: string;
  readonly commit_id: string | null;
  readonly commit_url: string | null;
  readonly created_at: string;
  readonly performed_via_github_app: GitHubApp;
  readonly assignee: SimpleUser;
};

export type TimelineUnassignedIssueEvent = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly actor: SimpleUser;
  readonly event: string;
  readonly commit_id: string | null;
  readonly commit_url: string | null;
  readonly created_at: string;
  readonly performed_via_github_app: GitHubApp;
  readonly assignee: SimpleUser;
};

export type StateChangeIssueEvent = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly actor: SimpleUser;
  readonly event: string;
  readonly commit_id: string | null;
  readonly commit_url: string | null;
  readonly created_at: string;
  readonly performed_via_github_app: GitHubApp;
  readonly state_reason?: string | null;
};

export type TimelineEvent = never &
  (
    | LabeledIssueEvent
    | UnlabeledIssueEvent
    | MilestonedIssueEvent
    | DemilestonedIssueEvent
    | RenamedIssueEvent
    | ReviewRequestedIssueEvent
    | ReviewRequestRemovedIssueEvent
    | ReviewDismissedIssueEvent
    | LockedIssueEvent
    | AddedToProjectIssueEvent
    | MovedColumnInProjectIssueEvent
    | RemovedFromProjectIssueEvent
    | ConvertedNoteToIssueIssueEvent
    | TimelineCommentEvent
    | TimelineCrossReferencedEvent
    | TimelineCommittedEvent
    | TimelineReviewedEvent
    | TimelineLineCommentedEvent
    | TimelineCommitCommentedEvent
    | TimelineAssignedIssueEvent
    | TimelineUnassignedIssueEvent
    | StateChangeIssueEvent
  );

export type IssuesListEventsForTimelineResponseBody =
  | ReadonlyArray<TimelineEvent>
  | BasicError;

export type IssuesListEventsForTimelineResolver = msw.HttpResponseResolver<
  IssuesListEventsForTimelineRequestParams,
  IssuesListEventsForTimelineRequestBody,
  IssuesListEventsForTimelineResponseBody
>;

export type ReposListDeployKeysRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListDeployKeysRequestHeaders = {};

export type ReposListDeployKeysRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposListDeployKeysRequestBody = never;

export type ReposListDeployKeysResponseStatus = 200;

export type DeployKey = {
  readonly id: number;
  readonly key: string;
  readonly url: string;
  readonly title: string;
  readonly verified: boolean;
  readonly created_at: string;
  readonly read_only: boolean;
  readonly added_by?: string | null;
  readonly last_used?: string | null;
};

export type ReposListDeployKeysResponseBody = ReadonlyArray<DeployKey>;

export type ReposListDeployKeysResolver = msw.HttpResponseResolver<
  ReposListDeployKeysRequestParams,
  ReposListDeployKeysRequestBody,
  ReposListDeployKeysResponseBody
>;

export type ReposCreateDeployKeyRequestQuery = {};

export type ReposCreateDeployKeyRequestHeaders = {};

export type ReposCreateDeployKeyRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposCreateDeployKeyRequestBody = {
  readonly title?: string;
  readonly key: string;
  readonly read_only?: boolean;
};

export type ReposCreateDeployKeyResponseStatus = 201 | 422;

export type ReposCreateDeployKeyResponseBody = DeployKey | ValidationError;

export type ReposCreateDeployKeyResolver = msw.HttpResponseResolver<
  ReposCreateDeployKeyRequestParams,
  ReposCreateDeployKeyRequestBody,
  ReposCreateDeployKeyResponseBody
>;

export type ReposGetDeployKeyRequestQuery = {};

export type ReposGetDeployKeyRequestHeaders = {};

export type ReposGetDeployKeyRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly key_id: string;
};

export type ReposGetDeployKeyRequestBody = never;

export type ReposGetDeployKeyResponseStatus = 200 | 404;

export type ReposGetDeployKeyResponseBody = DeployKey | BasicError;

export type ReposGetDeployKeyResolver = msw.HttpResponseResolver<
  ReposGetDeployKeyRequestParams,
  ReposGetDeployKeyRequestBody,
  ReposGetDeployKeyResponseBody
>;

export type ReposDeleteDeployKeyRequestQuery = {};

export type ReposDeleteDeployKeyRequestHeaders = {};

export type ReposDeleteDeployKeyRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly key_id: string;
};

export type ReposDeleteDeployKeyRequestBody = never;

export type ReposDeleteDeployKeyResponseStatus = 204;

export type ReposDeleteDeployKeyResponseBody = never;

export type ReposDeleteDeployKeyResolver = msw.HttpResponseResolver<
  ReposDeleteDeployKeyRequestParams,
  ReposDeleteDeployKeyRequestBody,
  ReposDeleteDeployKeyResponseBody
>;

export type IssuesListLabelsForRepoRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type IssuesListLabelsForRepoRequestHeaders = {};

export type IssuesListLabelsForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type IssuesListLabelsForRepoRequestBody = never;

export type IssuesListLabelsForRepoResponseStatus = 200 | 404;

export type IssuesListLabelsForRepoResponseBody =
  | ReadonlyArray<Label>
  | BasicError;

export type IssuesListLabelsForRepoResolver = msw.HttpResponseResolver<
  IssuesListLabelsForRepoRequestParams,
  IssuesListLabelsForRepoRequestBody,
  IssuesListLabelsForRepoResponseBody
>;

export type IssuesCreateLabelRequestQuery = {};

export type IssuesCreateLabelRequestHeaders = {};

export type IssuesCreateLabelRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type IssuesCreateLabelRequestBody = {
  readonly name: string;
  readonly color?: string;
  readonly description?: string;
};

export type IssuesCreateLabelResponseStatus = 201 | 404 | 422;

export type IssuesCreateLabelResponseBody =
  | Label
  | BasicError
  | ValidationError;

export type IssuesCreateLabelResolver = msw.HttpResponseResolver<
  IssuesCreateLabelRequestParams,
  IssuesCreateLabelRequestBody,
  IssuesCreateLabelResponseBody
>;

export type IssuesGetLabelRequestQuery = {};

export type IssuesGetLabelRequestHeaders = {};

export type IssuesGetLabelRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly name: string;
};

export type IssuesGetLabelRequestBody = never;

export type IssuesGetLabelResponseStatus = 200 | 404;

export type IssuesGetLabelResponseBody = Label | BasicError;

export type IssuesGetLabelResolver = msw.HttpResponseResolver<
  IssuesGetLabelRequestParams,
  IssuesGetLabelRequestBody,
  IssuesGetLabelResponseBody
>;

export type IssuesUpdateLabelRequestQuery = {};

export type IssuesUpdateLabelRequestHeaders = {};

export type IssuesUpdateLabelRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly name: string;
};

export type IssuesUpdateLabelRequestBody =
  | {
      readonly new_name?: string;
      readonly color?: string;
      readonly description?: string;
    }
  | undefined;

export type IssuesUpdateLabelResponseStatus = 200;

export type IssuesUpdateLabelResponseBody = Label;

export type IssuesUpdateLabelResolver = msw.HttpResponseResolver<
  IssuesUpdateLabelRequestParams,
  IssuesUpdateLabelRequestBody,
  IssuesUpdateLabelResponseBody
>;

export type IssuesDeleteLabelRequestQuery = {};

export type IssuesDeleteLabelRequestHeaders = {};

export type IssuesDeleteLabelRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly name: string;
};

export type IssuesDeleteLabelRequestBody = never;

export type IssuesDeleteLabelResponseStatus = 204;

export type IssuesDeleteLabelResponseBody = never;

export type IssuesDeleteLabelResolver = msw.HttpResponseResolver<
  IssuesDeleteLabelRequestParams,
  IssuesDeleteLabelRequestBody,
  IssuesDeleteLabelResponseBody
>;

export type ReposListLanguagesRequestQuery = {};

export type ReposListLanguagesRequestHeaders = {};

export type ReposListLanguagesRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposListLanguagesRequestBody = never;

export type ReposListLanguagesResponseStatus = 200;

export type Language = never;

export type ReposListLanguagesResponseBody = Language;

export type ReposListLanguagesResolver = msw.HttpResponseResolver<
  ReposListLanguagesRequestParams,
  ReposListLanguagesRequestBody,
  ReposListLanguagesResponseBody
>;

export type ReposEnableLfsForRepoRequestQuery = {};

export type ReposEnableLfsForRepoRequestHeaders = {};

export type ReposEnableLfsForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposEnableLfsForRepoRequestBody = never;

export type ReposEnableLfsForRepoResponseStatus = 202 | 403;

export type ReposEnableLfsForRepoResponseBody = never;

export type ReposEnableLfsForRepoResolver = msw.HttpResponseResolver<
  ReposEnableLfsForRepoRequestParams,
  ReposEnableLfsForRepoRequestBody,
  ReposEnableLfsForRepoResponseBody
>;

export type ReposDisableLfsForRepoRequestQuery = {};

export type ReposDisableLfsForRepoRequestHeaders = {};

export type ReposDisableLfsForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposDisableLfsForRepoRequestBody = never;

export type ReposDisableLfsForRepoResponseStatus = 204;

export type ReposDisableLfsForRepoResponseBody = never;

export type ReposDisableLfsForRepoResolver = msw.HttpResponseResolver<
  ReposDisableLfsForRepoRequestParams,
  ReposDisableLfsForRepoRequestBody,
  ReposDisableLfsForRepoResponseBody
>;

export type LicensesGetForRepoRequestQuery = {};

export type LicensesGetForRepoRequestHeaders = {};

export type LicensesGetForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type LicensesGetForRepoRequestBody = never;

export type LicensesGetForRepoResponseStatus = 200;

export type LicenseContent = {
  readonly name: string;
  readonly path: string;
  readonly sha: string;
  readonly size: number;
  readonly url: string;
  readonly html_url: string | null;
  readonly git_url: string | null;
  readonly download_url: string | null;
  readonly type: string;
  readonly content: string;
  readonly encoding: string;
  readonly _links: {
    readonly git: string | null;
    readonly html: string | null;
    readonly self: string;
  };
  readonly license: LicenseSimple;
};

export type LicensesGetForRepoResponseBody = LicenseContent;

export type LicensesGetForRepoResolver = msw.HttpResponseResolver<
  LicensesGetForRepoRequestParams,
  LicensesGetForRepoRequestBody,
  LicensesGetForRepoResponseBody
>;

export type ReposMergeUpstreamRequestQuery = {};

export type ReposMergeUpstreamRequestHeaders = {};

export type ReposMergeUpstreamRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposMergeUpstreamRequestBody = { readonly branch: string };

export type ReposMergeUpstreamResponseStatus = 200 | 409 | 422;

export type MergedUpstream = {
  readonly message?: string;
  readonly merge_type?: 'merge' | 'fast-forward' | 'none';
  readonly base_branch?: string;
};

export type ReposMergeUpstreamResponseBody = MergedUpstream | never;

export type ReposMergeUpstreamResolver = msw.HttpResponseResolver<
  ReposMergeUpstreamRequestParams,
  ReposMergeUpstreamRequestBody,
  ReposMergeUpstreamResponseBody
>;

export type ReposMergeRequestQuery = {};

export type ReposMergeRequestHeaders = {};

export type ReposMergeRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposMergeRequestBody = {
  readonly base: string;
  readonly head: string;
  readonly commit_message?: string;
};

export type ReposMergeResponseStatus = 201 | 204 | 403 | 404 | 409 | 422;

export type ReposMergeResponseBody =
  | Commit
  | never
  | BasicError
  | ValidationError;

export type ReposMergeResolver = msw.HttpResponseResolver<
  ReposMergeRequestParams,
  ReposMergeRequestBody,
  ReposMergeResponseBody
>;

export type IssuesListMilestonesRequestQuery = {
  readonly state?: string;
  readonly sort?: string;
  readonly direction?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type IssuesListMilestonesRequestHeaders = {};

export type IssuesListMilestonesRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type IssuesListMilestonesRequestBody = never;

export type IssuesListMilestonesResponseStatus = 200 | 404;

export type IssuesListMilestonesResponseBody =
  | ReadonlyArray<Milestone>
  | BasicError;

export type IssuesListMilestonesResolver = msw.HttpResponseResolver<
  IssuesListMilestonesRequestParams,
  IssuesListMilestonesRequestBody,
  IssuesListMilestonesResponseBody
>;

export type IssuesCreateMilestoneRequestQuery = {};

export type IssuesCreateMilestoneRequestHeaders = {};

export type IssuesCreateMilestoneRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type IssuesCreateMilestoneRequestBody = {
  readonly title: string;
  readonly state?: 'open' | 'closed';
  readonly description?: string;
  readonly due_on?: string;
};

export type IssuesCreateMilestoneResponseStatus = 201 | 404 | 422;

export type IssuesCreateMilestoneResponseBody =
  | Milestone
  | BasicError
  | ValidationError;

export type IssuesCreateMilestoneResolver = msw.HttpResponseResolver<
  IssuesCreateMilestoneRequestParams,
  IssuesCreateMilestoneRequestBody,
  IssuesCreateMilestoneResponseBody
>;

export type IssuesGetMilestoneRequestQuery = {};

export type IssuesGetMilestoneRequestHeaders = {};

export type IssuesGetMilestoneRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly milestone_number: string;
};

export type IssuesGetMilestoneRequestBody = never;

export type IssuesGetMilestoneResponseStatus = 200 | 404;

export type IssuesGetMilestoneResponseBody = Milestone | BasicError;

export type IssuesGetMilestoneResolver = msw.HttpResponseResolver<
  IssuesGetMilestoneRequestParams,
  IssuesGetMilestoneRequestBody,
  IssuesGetMilestoneResponseBody
>;

export type IssuesUpdateMilestoneRequestQuery = {};

export type IssuesUpdateMilestoneRequestHeaders = {};

export type IssuesUpdateMilestoneRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly milestone_number: string;
};

export type IssuesUpdateMilestoneRequestBody =
  | {
      readonly title?: string;
      readonly state?: 'open' | 'closed';
      readonly description?: string;
      readonly due_on?: string;
    }
  | undefined;

export type IssuesUpdateMilestoneResponseStatus = 200;

export type IssuesUpdateMilestoneResponseBody = Milestone;

export type IssuesUpdateMilestoneResolver = msw.HttpResponseResolver<
  IssuesUpdateMilestoneRequestParams,
  IssuesUpdateMilestoneRequestBody,
  IssuesUpdateMilestoneResponseBody
>;

export type IssuesDeleteMilestoneRequestQuery = {};

export type IssuesDeleteMilestoneRequestHeaders = {};

export type IssuesDeleteMilestoneRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly milestone_number: string;
};

export type IssuesDeleteMilestoneRequestBody = never;

export type IssuesDeleteMilestoneResponseStatus = 204 | 404;

export type IssuesDeleteMilestoneResponseBody = never | BasicError;

export type IssuesDeleteMilestoneResolver = msw.HttpResponseResolver<
  IssuesDeleteMilestoneRequestParams,
  IssuesDeleteMilestoneRequestBody,
  IssuesDeleteMilestoneResponseBody
>;

export type IssuesListLabelsForMilestoneRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type IssuesListLabelsForMilestoneRequestHeaders = {};

export type IssuesListLabelsForMilestoneRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly milestone_number: string;
};

export type IssuesListLabelsForMilestoneRequestBody = never;

export type IssuesListLabelsForMilestoneResponseStatus = 200;

export type IssuesListLabelsForMilestoneResponseBody = ReadonlyArray<Label>;

export type IssuesListLabelsForMilestoneResolver = msw.HttpResponseResolver<
  IssuesListLabelsForMilestoneRequestParams,
  IssuesListLabelsForMilestoneRequestBody,
  IssuesListLabelsForMilestoneResponseBody
>;

export type ActivityListRepoNotificationsForAuthenticatedUserRequestQuery = {
  readonly all?: string;
  readonly participating?: string;
  readonly since?: string;
  readonly before?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ActivityListRepoNotificationsForAuthenticatedUserRequestHeaders = {};

export type ActivityListRepoNotificationsForAuthenticatedUserRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActivityListRepoNotificationsForAuthenticatedUserRequestBody = never;

export type ActivityListRepoNotificationsForAuthenticatedUserResponseStatus = 200;

export type ActivityListRepoNotificationsForAuthenticatedUserResponseBody = ReadonlyArray<Thread>;

export type ActivityListRepoNotificationsForAuthenticatedUserResolver = msw.HttpResponseResolver<
  ActivityListRepoNotificationsForAuthenticatedUserRequestParams,
  ActivityListRepoNotificationsForAuthenticatedUserRequestBody,
  ActivityListRepoNotificationsForAuthenticatedUserResponseBody
>;

export type ActivityMarkRepoNotificationsAsReadRequestQuery = {};

export type ActivityMarkRepoNotificationsAsReadRequestHeaders = {};

export type ActivityMarkRepoNotificationsAsReadRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActivityMarkRepoNotificationsAsReadRequestBody =
  | { readonly last_read_at?: string }
  | undefined;

export type ActivityMarkRepoNotificationsAsReadResponseStatus = 202 | 205;

export type ActivityMarkRepoNotificationsAsReadResponseBody =
  | { readonly message?: string; readonly url?: string }
  | never;

export type ActivityMarkRepoNotificationsAsReadResolver = msw.HttpResponseResolver<
  ActivityMarkRepoNotificationsAsReadRequestParams,
  ActivityMarkRepoNotificationsAsReadRequestBody,
  ActivityMarkRepoNotificationsAsReadResponseBody
>;

export type ReposGetPagesRequestQuery = {};

export type ReposGetPagesRequestHeaders = {};

export type ReposGetPagesRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposGetPagesRequestBody = never;

export type ReposGetPagesResponseStatus = 200 | 404;

export type PagesSourceHash = {
  readonly branch: string;
  readonly path: string;
};

export type PagesHttpsCertificate = {
  readonly state:
    | 'new'
    | 'authorization_created'
    | 'authorization_pending'
    | 'authorized'
    | 'authorization_revoked'
    | 'issued'
    | 'uploaded'
    | 'approved'
    | 'errored'
    | 'bad_authz'
    | 'destroy_pending'
    | 'dns_changed';
  readonly description: string;
  readonly domains: ReadonlyArray<string>;
  readonly expires_at?: string;
};

export type GitHubPages = {
  readonly url: string;
  readonly status: 'built' | 'building' | 'errored' | null;
  readonly cname: string | null;
  readonly protected_domain_state?:
    | 'pending'
    | 'verified'
    | 'unverified'
    | null;
  readonly pending_domain_unverified_at?: string | null;
  readonly custom_404: boolean;
  readonly html_url?: string;
  readonly build_type?: 'legacy' | 'workflow' | null;
  readonly source?: PagesSourceHash;
  readonly public: boolean;
  readonly https_certificate?: PagesHttpsCertificate;
  readonly https_enforced?: boolean;
};

export type ReposGetPagesResponseBody = GitHubPages | BasicError;

export type ReposGetPagesResolver = msw.HttpResponseResolver<
  ReposGetPagesRequestParams,
  ReposGetPagesRequestBody,
  ReposGetPagesResponseBody
>;

export type ReposCreatePagesSiteRequestQuery = {};

export type ReposCreatePagesSiteRequestHeaders = {};

export type ReposCreatePagesSiteRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposCreatePagesSiteRequestBody =
  | ({
      readonly build_type?: 'legacy' | 'workflow';
      readonly source?: {
        readonly branch: string;
        readonly path?: '/' | '/docs';
      };
    } & never)
  | null;

export type ReposCreatePagesSiteResponseStatus = 201 | 409 | 422;

export type ReposCreatePagesSiteResponseBody =
  | GitHubPages
  | BasicError
  | ValidationError;

export type ReposCreatePagesSiteResolver = msw.HttpResponseResolver<
  ReposCreatePagesSiteRequestParams,
  ReposCreatePagesSiteRequestBody,
  ReposCreatePagesSiteResponseBody
>;

export type ReposUpdateInformationAboutPagesSiteRequestQuery = {};

export type ReposUpdateInformationAboutPagesSiteRequestHeaders = {};

export type ReposUpdateInformationAboutPagesSiteRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposUpdateInformationAboutPagesSiteRequestBody = {
  readonly cname?: string | null;
  readonly https_enforced?: boolean;
  readonly public?: boolean;
  readonly build_type?: 'legacy' | 'workflow';
  readonly source?:
    | 'gh-pages'
    | 'master'
    | 'master /docs'
    | { readonly branch: string; readonly path: '/' | '/docs' };
} & never;

export type ReposUpdateInformationAboutPagesSiteResponseStatus =
  | 204
  | 400
  | 409
  | 422;

export type ReposUpdateInformationAboutPagesSiteResponseBody =
  | never
  | BasicError
  | ValidationError;

export type ReposUpdateInformationAboutPagesSiteResolver = msw.HttpResponseResolver<
  ReposUpdateInformationAboutPagesSiteRequestParams,
  ReposUpdateInformationAboutPagesSiteRequestBody,
  ReposUpdateInformationAboutPagesSiteResponseBody
>;

export type ReposDeletePagesSiteRequestQuery = {};

export type ReposDeletePagesSiteRequestHeaders = {};

export type ReposDeletePagesSiteRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposDeletePagesSiteRequestBody = never;

export type ReposDeletePagesSiteResponseStatus = 204 | 404 | 409 | 422;

export type ReposDeletePagesSiteResponseBody =
  | never
  | BasicError
  | ValidationError;

export type ReposDeletePagesSiteResolver = msw.HttpResponseResolver<
  ReposDeletePagesSiteRequestParams,
  ReposDeletePagesSiteRequestBody,
  ReposDeletePagesSiteResponseBody
>;

export type ReposListPagesBuildsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListPagesBuildsRequestHeaders = {};

export type ReposListPagesBuildsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposListPagesBuildsRequestBody = never;

export type ReposListPagesBuildsResponseStatus = 200;

export type PageBuild = {
  readonly url: string;
  readonly status: string;
  readonly error: { readonly message: string | null };
  readonly pusher: SimpleUser;
  readonly commit: string;
  readonly duration: number;
  readonly created_at: string;
  readonly updated_at: string;
};

export type ReposListPagesBuildsResponseBody = ReadonlyArray<PageBuild>;

export type ReposListPagesBuildsResolver = msw.HttpResponseResolver<
  ReposListPagesBuildsRequestParams,
  ReposListPagesBuildsRequestBody,
  ReposListPagesBuildsResponseBody
>;

export type ReposRequestPagesBuildRequestQuery = {};

export type ReposRequestPagesBuildRequestHeaders = {};

export type ReposRequestPagesBuildRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposRequestPagesBuildRequestBody = never;

export type ReposRequestPagesBuildResponseStatus = 201;

export type PageBuildStatus = { readonly url: string; readonly status: string };

export type ReposRequestPagesBuildResponseBody = PageBuildStatus;

export type ReposRequestPagesBuildResolver = msw.HttpResponseResolver<
  ReposRequestPagesBuildRequestParams,
  ReposRequestPagesBuildRequestBody,
  ReposRequestPagesBuildResponseBody
>;

export type ReposGetLatestPagesBuildRequestQuery = {};

export type ReposGetLatestPagesBuildRequestHeaders = {};

export type ReposGetLatestPagesBuildRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposGetLatestPagesBuildRequestBody = never;

export type ReposGetLatestPagesBuildResponseStatus = 200;

export type ReposGetLatestPagesBuildResponseBody = PageBuild;

export type ReposGetLatestPagesBuildResolver = msw.HttpResponseResolver<
  ReposGetLatestPagesBuildRequestParams,
  ReposGetLatestPagesBuildRequestBody,
  ReposGetLatestPagesBuildResponseBody
>;

export type ReposGetPagesBuildRequestQuery = {};

export type ReposGetPagesBuildRequestHeaders = {};

export type ReposGetPagesBuildRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly build_id: string;
};

export type ReposGetPagesBuildRequestBody = never;

export type ReposGetPagesBuildResponseStatus = 200;

export type ReposGetPagesBuildResponseBody = PageBuild;

export type ReposGetPagesBuildResolver = msw.HttpResponseResolver<
  ReposGetPagesBuildRequestParams,
  ReposGetPagesBuildRequestBody,
  ReposGetPagesBuildResponseBody
>;

export type ReposCreatePagesDeploymentRequestQuery = {};

export type ReposCreatePagesDeploymentRequestHeaders = {};

export type ReposCreatePagesDeploymentRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposCreatePagesDeploymentRequestBody = {
  readonly artifact_url: string;
  readonly environment?: string;
  readonly pages_build_version: string;
  readonly oidc_token: string;
};

export type ReposCreatePagesDeploymentResponseStatus = 200 | 400 | 404 | 422;

export type ReposCreatePagesDeploymentResponseBody =
  | GitHubPages
  | BasicError
  | ValidationError;

export type ReposCreatePagesDeploymentResolver = msw.HttpResponseResolver<
  ReposCreatePagesDeploymentRequestParams,
  ReposCreatePagesDeploymentRequestBody,
  ReposCreatePagesDeploymentResponseBody
>;

export type ReposGetPagesHealthCheckRequestQuery = {};

export type ReposGetPagesHealthCheckRequestHeaders = {};

export type ReposGetPagesHealthCheckRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposGetPagesHealthCheckRequestBody = never;

export type ReposGetPagesHealthCheckResponseStatus =
  | 200
  | 202
  | 400
  | 404
  | 422;

export type PagesHealthCheckStatus = {
  readonly domain?: {
    readonly host?: string;
    readonly uri?: string;
    readonly nameservers?: string;
    readonly dns_resolves?: boolean;
    readonly is_proxied?: boolean | null;
    readonly is_cloudflare_ip?: boolean | null;
    readonly is_fastly_ip?: boolean | null;
    readonly is_old_ip_address?: boolean | null;
    readonly is_a_record?: boolean | null;
    readonly has_cname_record?: boolean | null;
    readonly has_mx_records_present?: boolean | null;
    readonly is_valid_domain?: boolean;
    readonly is_apex_domain?: boolean;
    readonly should_be_a_record?: boolean | null;
    readonly is_cname_to_github_user_domain?: boolean | null;
    readonly is_cname_to_pages_dot_github_dot_com?: boolean | null;
    readonly is_cname_to_fastly?: boolean | null;
    readonly is_pointed_to_github_pages_ip?: boolean | null;
    readonly is_non_github_pages_ip_present?: boolean | null;
    readonly is_pages_domain?: boolean;
    readonly is_served_by_pages?: boolean | null;
    readonly is_valid?: boolean;
    readonly reason?: string | null;
    readonly responds_to_https?: boolean;
    readonly enforces_https?: boolean;
    readonly https_error?: string | null;
    readonly is_https_eligible?: boolean | null;
    readonly caa_error?: string | null;
  };
  readonly alt_domain?: {
    readonly host?: string;
    readonly uri?: string;
    readonly nameservers?: string;
    readonly dns_resolves?: boolean;
    readonly is_proxied?: boolean | null;
    readonly is_cloudflare_ip?: boolean | null;
    readonly is_fastly_ip?: boolean | null;
    readonly is_old_ip_address?: boolean | null;
    readonly is_a_record?: boolean | null;
    readonly has_cname_record?: boolean | null;
    readonly has_mx_records_present?: boolean | null;
    readonly is_valid_domain?: boolean;
    readonly is_apex_domain?: boolean;
    readonly should_be_a_record?: boolean | null;
    readonly is_cname_to_github_user_domain?: boolean | null;
    readonly is_cname_to_pages_dot_github_dot_com?: boolean | null;
    readonly is_cname_to_fastly?: boolean | null;
    readonly is_pointed_to_github_pages_ip?: boolean | null;
    readonly is_non_github_pages_ip_present?: boolean | null;
    readonly is_pages_domain?: boolean;
    readonly is_served_by_pages?: boolean | null;
    readonly is_valid?: boolean;
    readonly reason?: string | null;
    readonly responds_to_https?: boolean;
    readonly enforces_https?: boolean;
    readonly https_error?: string | null;
    readonly is_https_eligible?: boolean | null;
    readonly caa_error?: string | null;
  } | null;
};

export type ReposGetPagesHealthCheckResponseBody =
  | PagesHealthCheckStatus
  | EmptyObject
  | never
  | BasicError;

export type ReposGetPagesHealthCheckResolver = msw.HttpResponseResolver<
  ReposGetPagesHealthCheckRequestParams,
  ReposGetPagesHealthCheckRequestBody,
  ReposGetPagesHealthCheckResponseBody
>;

export type ProjectsListForRepoRequestQuery = {
  readonly state?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ProjectsListForRepoRequestHeaders = {};

export type ProjectsListForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ProjectsListForRepoRequestBody = never;

export type ProjectsListForRepoResponseStatus =
  | 200
  | 401
  | 403
  | 404
  | 410
  | 422;

export type ProjectsListForRepoResponseBody =
  | ReadonlyArray<Project>
  | BasicError
  | ValidationErrorSimple;

export type ProjectsListForRepoResolver = msw.HttpResponseResolver<
  ProjectsListForRepoRequestParams,
  ProjectsListForRepoRequestBody,
  ProjectsListForRepoResponseBody
>;

export type ProjectsCreateForRepoRequestQuery = {};

export type ProjectsCreateForRepoRequestHeaders = {};

export type ProjectsCreateForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ProjectsCreateForRepoRequestBody = {
  readonly name: string;
  readonly body?: string;
};

export type ProjectsCreateForRepoResponseStatus =
  | 201
  | 401
  | 403
  | 404
  | 410
  | 422;

export type ProjectsCreateForRepoResponseBody =
  | Project
  | BasicError
  | ValidationErrorSimple;

export type ProjectsCreateForRepoResolver = msw.HttpResponseResolver<
  ProjectsCreateForRepoRequestParams,
  ProjectsCreateForRepoRequestBody,
  ProjectsCreateForRepoResponseBody
>;

export type PullsListRequestQuery = {
  readonly state?: string;
  readonly head?: string;
  readonly base?: string;
  readonly sort?: string;
  readonly direction?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type PullsListRequestHeaders = {};

export type PullsListRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type PullsListRequestBody = never;

export type PullsListResponseStatus = 200 | 304 | 422;

export type PullsListResponseBody =
  | ReadonlyArray<PullRequestSimple>
  | never
  | ValidationError;

export type PullsListResolver = msw.HttpResponseResolver<
  PullsListRequestParams,
  PullsListRequestBody,
  PullsListResponseBody
>;

export type PullsCreateRequestQuery = {};

export type PullsCreateRequestHeaders = {};

export type PullsCreateRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type PullsCreateRequestBody = {
  readonly title?: string;
  readonly head: string;
  readonly base: string;
  readonly body?: string;
  readonly maintainer_can_modify?: boolean;
  readonly draft?: boolean;
  readonly issue?: number;
};

export type PullsCreateResponseStatus = 201 | 403 | 422;

export type PullRequest = {
  readonly url: string;
  readonly id: number;
  readonly node_id: string;
  readonly html_url: string;
  readonly diff_url: string;
  readonly patch_url: string;
  readonly issue_url: string;
  readonly commits_url: string;
  readonly review_comments_url: string;
  readonly review_comment_url: string;
  readonly comments_url: string;
  readonly statuses_url: string;
  readonly number: number;
  readonly state: 'open' | 'closed';
  readonly locked: boolean;
  readonly title: string;
  readonly user: SimpleUser;
  readonly body: string | null;
  readonly labels: ReadonlyArray<{
    readonly id: number;
    readonly node_id: string;
    readonly url: string;
    readonly name: string;
    readonly description: string | null;
    readonly color: string;
    readonly default: boolean;
  }>;
  readonly milestone: Milestone;
  readonly active_lock_reason?: string | null;
  readonly created_at: string;
  readonly updated_at: string;
  readonly closed_at: string | null;
  readonly merged_at: string | null;
  readonly merge_commit_sha: string | null;
  readonly assignee: SimpleUser;
  readonly assignees?: ReadonlyArray<SimpleUser> | null;
  readonly requested_reviewers?: ReadonlyArray<SimpleUser> | null;
  readonly requested_teams?: ReadonlyArray<TeamSimple> | null;
  readonly head: {
    readonly label: string;
    readonly ref: string;
    readonly repo: {
      readonly archive_url: string;
      readonly assignees_url: string;
      readonly blobs_url: string;
      readonly branches_url: string;
      readonly collaborators_url: string;
      readonly comments_url: string;
      readonly commits_url: string;
      readonly compare_url: string;
      readonly contents_url: string;
      readonly contributors_url: string;
      readonly deployments_url: string;
      readonly description: string | null;
      readonly downloads_url: string;
      readonly events_url: string;
      readonly fork: boolean;
      readonly forks_url: string;
      readonly full_name: string;
      readonly git_commits_url: string;
      readonly git_refs_url: string;
      readonly git_tags_url: string;
      readonly hooks_url: string;
      readonly html_url: string;
      readonly id: number;
      readonly node_id: string;
      readonly issue_comment_url: string;
      readonly issue_events_url: string;
      readonly issues_url: string;
      readonly keys_url: string;
      readonly labels_url: string;
      readonly languages_url: string;
      readonly merges_url: string;
      readonly milestones_url: string;
      readonly name: string;
      readonly notifications_url: string;
      readonly owner: {
        readonly avatar_url: string;
        readonly events_url: string;
        readonly followers_url: string;
        readonly following_url: string;
        readonly gists_url: string;
        readonly gravatar_id: string | null;
        readonly html_url: string;
        readonly id: number;
        readonly node_id: string;
        readonly login: string;
        readonly organizations_url: string;
        readonly received_events_url: string;
        readonly repos_url: string;
        readonly site_admin: boolean;
        readonly starred_url: string;
        readonly subscriptions_url: string;
        readonly type: string;
        readonly url: string;
      };
      readonly private: boolean;
      readonly pulls_url: string;
      readonly releases_url: string;
      readonly stargazers_url: string;
      readonly statuses_url: string;
      readonly subscribers_url: string;
      readonly subscription_url: string;
      readonly tags_url: string;
      readonly teams_url: string;
      readonly trees_url: string;
      readonly url: string;
      readonly clone_url: string;
      readonly default_branch: string;
      readonly forks: number;
      readonly forks_count: number;
      readonly git_url: string;
      readonly has_downloads: boolean;
      readonly has_issues: boolean;
      readonly has_projects: boolean;
      readonly has_wiki: boolean;
      readonly has_pages: boolean;
      readonly homepage: string | null;
      readonly language: string | null;
      readonly master_branch?: string;
      readonly archived: boolean;
      readonly disabled: boolean;
      readonly visibility?: string;
      readonly mirror_url: string | null;
      readonly open_issues: number;
      readonly open_issues_count: number;
      readonly permissions?: {
        readonly admin: boolean;
        readonly maintain?: boolean;
        readonly push: boolean;
        readonly triage?: boolean;
        readonly pull: boolean;
      };
      readonly temp_clone_token?: string;
      readonly allow_merge_commit?: boolean;
      readonly allow_squash_merge?: boolean;
      readonly allow_rebase_merge?: boolean;
      readonly license: {
        readonly key: string;
        readonly name: string;
        readonly url: string | null;
        readonly spdx_id: string | null;
        readonly node_id: string;
      } | null;
      readonly pushed_at: string;
      readonly size: number;
      readonly ssh_url: string;
      readonly stargazers_count: number;
      readonly svn_url: string;
      readonly topics?: ReadonlyArray<string>;
      readonly watchers: number;
      readonly watchers_count: number;
      readonly created_at: string;
      readonly updated_at: string;
      readonly allow_forking?: boolean;
      readonly is_template?: boolean;
      readonly web_commit_signoff_required?: boolean;
    } | null;
    readonly sha: string;
    readonly user: {
      readonly avatar_url: string;
      readonly events_url: string;
      readonly followers_url: string;
      readonly following_url: string;
      readonly gists_url: string;
      readonly gravatar_id: string | null;
      readonly html_url: string;
      readonly id: number;
      readonly node_id: string;
      readonly login: string;
      readonly organizations_url: string;
      readonly received_events_url: string;
      readonly repos_url: string;
      readonly site_admin: boolean;
      readonly starred_url: string;
      readonly subscriptions_url: string;
      readonly type: string;
      readonly url: string;
    };
  };
  readonly base: {
    readonly label: string;
    readonly ref: string;
    readonly repo: {
      readonly archive_url: string;
      readonly assignees_url: string;
      readonly blobs_url: string;
      readonly branches_url: string;
      readonly collaborators_url: string;
      readonly comments_url: string;
      readonly commits_url: string;
      readonly compare_url: string;
      readonly contents_url: string;
      readonly contributors_url: string;
      readonly deployments_url: string;
      readonly description: string | null;
      readonly downloads_url: string;
      readonly events_url: string;
      readonly fork: boolean;
      readonly forks_url: string;
      readonly full_name: string;
      readonly git_commits_url: string;
      readonly git_refs_url: string;
      readonly git_tags_url: string;
      readonly hooks_url: string;
      readonly html_url: string;
      readonly id: number;
      readonly is_template?: boolean;
      readonly node_id: string;
      readonly issue_comment_url: string;
      readonly issue_events_url: string;
      readonly issues_url: string;
      readonly keys_url: string;
      readonly labels_url: string;
      readonly languages_url: string;
      readonly merges_url: string;
      readonly milestones_url: string;
      readonly name: string;
      readonly notifications_url: string;
      readonly owner: {
        readonly avatar_url: string;
        readonly events_url: string;
        readonly followers_url: string;
        readonly following_url: string;
        readonly gists_url: string;
        readonly gravatar_id: string | null;
        readonly html_url: string;
        readonly id: number;
        readonly node_id: string;
        readonly login: string;
        readonly organizations_url: string;
        readonly received_events_url: string;
        readonly repos_url: string;
        readonly site_admin: boolean;
        readonly starred_url: string;
        readonly subscriptions_url: string;
        readonly type: string;
        readonly url: string;
      };
      readonly private: boolean;
      readonly pulls_url: string;
      readonly releases_url: string;
      readonly stargazers_url: string;
      readonly statuses_url: string;
      readonly subscribers_url: string;
      readonly subscription_url: string;
      readonly tags_url: string;
      readonly teams_url: string;
      readonly trees_url: string;
      readonly url: string;
      readonly clone_url: string;
      readonly default_branch: string;
      readonly forks: number;
      readonly forks_count: number;
      readonly git_url: string;
      readonly has_downloads: boolean;
      readonly has_issues: boolean;
      readonly has_projects: boolean;
      readonly has_wiki: boolean;
      readonly has_pages: boolean;
      readonly homepage: string | null;
      readonly language: string | null;
      readonly master_branch?: string;
      readonly archived: boolean;
      readonly disabled: boolean;
      readonly visibility?: string;
      readonly mirror_url: string | null;
      readonly open_issues: number;
      readonly open_issues_count: number;
      readonly permissions?: {
        readonly admin: boolean;
        readonly maintain?: boolean;
        readonly push: boolean;
        readonly triage?: boolean;
        readonly pull: boolean;
      };
      readonly temp_clone_token?: string;
      readonly allow_merge_commit?: boolean;
      readonly allow_squash_merge?: boolean;
      readonly allow_rebase_merge?: boolean;
      readonly license: LicenseSimple;
      readonly pushed_at: string;
      readonly size: number;
      readonly ssh_url: string;
      readonly stargazers_count: number;
      readonly svn_url: string;
      readonly topics?: ReadonlyArray<string>;
      readonly watchers: number;
      readonly watchers_count: number;
      readonly created_at: string;
      readonly updated_at: string;
      readonly allow_forking?: boolean;
      readonly web_commit_signoff_required?: boolean;
    };
    readonly sha: string;
    readonly user: {
      readonly avatar_url: string;
      readonly events_url: string;
      readonly followers_url: string;
      readonly following_url: string;
      readonly gists_url: string;
      readonly gravatar_id: string | null;
      readonly html_url: string;
      readonly id: number;
      readonly node_id: string;
      readonly login: string;
      readonly organizations_url: string;
      readonly received_events_url: string;
      readonly repos_url: string;
      readonly site_admin: boolean;
      readonly starred_url: string;
      readonly subscriptions_url: string;
      readonly type: string;
      readonly url: string;
    };
  };
  readonly _links: {
    readonly comments: Link;
    readonly commits: Link;
    readonly statuses: Link;
    readonly html: Link;
    readonly issue: Link;
    readonly review_comments: Link;
    readonly review_comment: Link;
    readonly self: Link;
  };
  readonly author_association: AuthorAssociation;
  readonly auto_merge: AutoMerge;
  readonly draft?: boolean;
  readonly merged: boolean;
  readonly mergeable: boolean | null;
  readonly rebaseable?: boolean | null;
  readonly mergeable_state: string;
  readonly merged_by: SimpleUser;
  readonly comments: number;
  readonly review_comments: number;
  readonly maintainer_can_modify: boolean;
  readonly commits: number;
  readonly additions: number;
  readonly deletions: number;
  readonly changed_files: number;
};

export type PullsCreateResponseBody =
  | PullRequest
  | BasicError
  | ValidationError;

export type PullsCreateResolver = msw.HttpResponseResolver<
  PullsCreateRequestParams,
  PullsCreateRequestBody,
  PullsCreateResponseBody
>;

export type PullsListReviewCommentsForRepoRequestQuery = {
  readonly sort?: string;
  readonly direction?: string;
  readonly since?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type PullsListReviewCommentsForRepoRequestHeaders = {};

export type PullsListReviewCommentsForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type PullsListReviewCommentsForRepoRequestBody = never;

export type PullsListReviewCommentsForRepoResponseStatus = 200;

export type PullsListReviewCommentsForRepoResponseBody = ReadonlyArray<PullRequestReviewComment>;

export type PullsListReviewCommentsForRepoResolver = msw.HttpResponseResolver<
  PullsListReviewCommentsForRepoRequestParams,
  PullsListReviewCommentsForRepoRequestBody,
  PullsListReviewCommentsForRepoResponseBody
>;

export type PullsGetReviewCommentRequestQuery = {};

export type PullsGetReviewCommentRequestHeaders = {};

export type PullsGetReviewCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly comment_id: string;
};

export type PullsGetReviewCommentRequestBody = never;

export type PullsGetReviewCommentResponseStatus = 200 | 404;

export type PullsGetReviewCommentResponseBody =
  | PullRequestReviewComment
  | BasicError;

export type PullsGetReviewCommentResolver = msw.HttpResponseResolver<
  PullsGetReviewCommentRequestParams,
  PullsGetReviewCommentRequestBody,
  PullsGetReviewCommentResponseBody
>;

export type PullsUpdateReviewCommentRequestQuery = {};

export type PullsUpdateReviewCommentRequestHeaders = {};

export type PullsUpdateReviewCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly comment_id: string;
};

export type PullsUpdateReviewCommentRequestBody = { readonly body: string };

export type PullsUpdateReviewCommentResponseStatus = 200;

export type PullsUpdateReviewCommentResponseBody = PullRequestReviewComment;

export type PullsUpdateReviewCommentResolver = msw.HttpResponseResolver<
  PullsUpdateReviewCommentRequestParams,
  PullsUpdateReviewCommentRequestBody,
  PullsUpdateReviewCommentResponseBody
>;

export type PullsDeleteReviewCommentRequestQuery = {};

export type PullsDeleteReviewCommentRequestHeaders = {};

export type PullsDeleteReviewCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly comment_id: string;
};

export type PullsDeleteReviewCommentRequestBody = never;

export type PullsDeleteReviewCommentResponseStatus = 204 | 404;

export type PullsDeleteReviewCommentResponseBody = never | BasicError;

export type PullsDeleteReviewCommentResolver = msw.HttpResponseResolver<
  PullsDeleteReviewCommentRequestParams,
  PullsDeleteReviewCommentRequestBody,
  PullsDeleteReviewCommentResponseBody
>;

export type ReactionsListForPullRequestReviewCommentRequestQuery = {
  readonly content?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ReactionsListForPullRequestReviewCommentRequestHeaders = {};

export type ReactionsListForPullRequestReviewCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly comment_id: string;
};

export type ReactionsListForPullRequestReviewCommentRequestBody = never;

export type ReactionsListForPullRequestReviewCommentResponseStatus = 200 | 404;

export type ReactionsListForPullRequestReviewCommentResponseBody =
  | ReadonlyArray<Reaction>
  | BasicError;

export type ReactionsListForPullRequestReviewCommentResolver = msw.HttpResponseResolver<
  ReactionsListForPullRequestReviewCommentRequestParams,
  ReactionsListForPullRequestReviewCommentRequestBody,
  ReactionsListForPullRequestReviewCommentResponseBody
>;

export type ReactionsCreateForPullRequestReviewCommentRequestQuery = {};

export type ReactionsCreateForPullRequestReviewCommentRequestHeaders = {};

export type ReactionsCreateForPullRequestReviewCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly comment_id: string;
};

export type ReactionsCreateForPullRequestReviewCommentRequestBody = {
  readonly content:
    | '+1'
    | '-1'
    | 'laugh'
    | 'confused'
    | 'heart'
    | 'hooray'
    | 'rocket'
    | 'eyes';
};

export type ReactionsCreateForPullRequestReviewCommentResponseStatus =
  | 200
  | 201
  | 422;

export type ReactionsCreateForPullRequestReviewCommentResponseBody =
  | Reaction
  | ValidationError;

export type ReactionsCreateForPullRequestReviewCommentResolver = msw.HttpResponseResolver<
  ReactionsCreateForPullRequestReviewCommentRequestParams,
  ReactionsCreateForPullRequestReviewCommentRequestBody,
  ReactionsCreateForPullRequestReviewCommentResponseBody
>;

export type ReactionsDeleteForPullRequestCommentRequestQuery = {};

export type ReactionsDeleteForPullRequestCommentRequestHeaders = {};

export type ReactionsDeleteForPullRequestCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly comment_id: string;
  readonly reaction_id: string;
};

export type ReactionsDeleteForPullRequestCommentRequestBody = never;

export type ReactionsDeleteForPullRequestCommentResponseStatus = 204;

export type ReactionsDeleteForPullRequestCommentResponseBody = never;

export type ReactionsDeleteForPullRequestCommentResolver = msw.HttpResponseResolver<
  ReactionsDeleteForPullRequestCommentRequestParams,
  ReactionsDeleteForPullRequestCommentRequestBody,
  ReactionsDeleteForPullRequestCommentResponseBody
>;

export type PullsGetRequestQuery = {};

export type PullsGetRequestHeaders = {};

export type PullsGetRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
};

export type PullsGetRequestBody = never;

export type PullsGetResponseStatus = 200 | 304 | 404 | 500 | 503;

export type PullsGetResponseBody =
  | PullRequest
  | never
  | BasicError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type PullsGetResolver = msw.HttpResponseResolver<
  PullsGetRequestParams,
  PullsGetRequestBody,
  PullsGetResponseBody
>;

export type PullsUpdateRequestQuery = {};

export type PullsUpdateRequestHeaders = {};

export type PullsUpdateRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
};

export type PullsUpdateRequestBody =
  | {
      readonly title?: string;
      readonly body?: string;
      readonly state?: 'open' | 'closed';
      readonly base?: string;
      readonly maintainer_can_modify?: boolean;
    }
  | undefined;

export type PullsUpdateResponseStatus = 200 | 403 | 422;

export type PullsUpdateResponseBody =
  | PullRequest
  | BasicError
  | ValidationError;

export type PullsUpdateResolver = msw.HttpResponseResolver<
  PullsUpdateRequestParams,
  PullsUpdateRequestBody,
  PullsUpdateResponseBody
>;

export type CodespacesCreateWithPrForAuthenticatedUserRequestQuery = {};

export type CodespacesCreateWithPrForAuthenticatedUserRequestHeaders = {};

export type CodespacesCreateWithPrForAuthenticatedUserRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
};

export type CodespacesCreateWithPrForAuthenticatedUserRequestBody = {
  readonly location?: string;
  readonly client_ip?: string;
  readonly machine?: string;
  readonly devcontainer_path?: string;
  readonly multi_repo_permissions_opt_out?: boolean;
  readonly working_directory?: string;
  readonly idle_timeout_minutes?: number;
  readonly display_name?: string;
  readonly retention_period_minutes?: number;
} | null;

export type CodespacesCreateWithPrForAuthenticatedUserResponseStatus =
  | 201
  | 202
  | 401
  | 403
  | 404
  | 503;

export type CodespacesCreateWithPrForAuthenticatedUserResponseBody =
  | Codespace
  | BasicError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type CodespacesCreateWithPrForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesCreateWithPrForAuthenticatedUserRequestParams,
  CodespacesCreateWithPrForAuthenticatedUserRequestBody,
  CodespacesCreateWithPrForAuthenticatedUserResponseBody
>;

export type PullsListReviewCommentsRequestQuery = {
  readonly sort?: string;
  readonly direction?: string;
  readonly since?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type PullsListReviewCommentsRequestHeaders = {};

export type PullsListReviewCommentsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
};

export type PullsListReviewCommentsRequestBody = never;

export type PullsListReviewCommentsResponseStatus = 200;

export type PullsListReviewCommentsResponseBody = ReadonlyArray<PullRequestReviewComment>;

export type PullsListReviewCommentsResolver = msw.HttpResponseResolver<
  PullsListReviewCommentsRequestParams,
  PullsListReviewCommentsRequestBody,
  PullsListReviewCommentsResponseBody
>;

export type PullsCreateReviewCommentRequestQuery = {};

export type PullsCreateReviewCommentRequestHeaders = {};

export type PullsCreateReviewCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
};

export type PullsCreateReviewCommentRequestBody = {
  readonly body: string;
  readonly commit_id: string;
  readonly path: string;
  readonly position?: number;
  readonly side?: 'LEFT' | 'RIGHT';
  readonly line: number;
  readonly start_line?: number;
  readonly start_side?: 'LEFT' | 'RIGHT' | 'side';
  readonly in_reply_to?: number;
};

export type PullsCreateReviewCommentResponseStatus = 201 | 403 | 422;

export type PullsCreateReviewCommentResponseBody =
  | PullRequestReviewComment
  | BasicError
  | ValidationError;

export type PullsCreateReviewCommentResolver = msw.HttpResponseResolver<
  PullsCreateReviewCommentRequestParams,
  PullsCreateReviewCommentRequestBody,
  PullsCreateReviewCommentResponseBody
>;

export type PullsCreateReplyForReviewCommentRequestQuery = {};

export type PullsCreateReplyForReviewCommentRequestHeaders = {};

export type PullsCreateReplyForReviewCommentRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
  readonly comment_id: string;
};

export type PullsCreateReplyForReviewCommentRequestBody = {
  readonly body: string;
};

export type PullsCreateReplyForReviewCommentResponseStatus = 201 | 404;

export type PullsCreateReplyForReviewCommentResponseBody =
  | PullRequestReviewComment
  | BasicError;

export type PullsCreateReplyForReviewCommentResolver = msw.HttpResponseResolver<
  PullsCreateReplyForReviewCommentRequestParams,
  PullsCreateReplyForReviewCommentRequestBody,
  PullsCreateReplyForReviewCommentResponseBody
>;

export type PullsListCommitsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type PullsListCommitsRequestHeaders = {};

export type PullsListCommitsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
};

export type PullsListCommitsRequestBody = never;

export type PullsListCommitsResponseStatus = 200;

export type PullsListCommitsResponseBody = ReadonlyArray<Commit>;

export type PullsListCommitsResolver = msw.HttpResponseResolver<
  PullsListCommitsRequestParams,
  PullsListCommitsRequestBody,
  PullsListCommitsResponseBody
>;

export type PullsListFilesRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type PullsListFilesRequestHeaders = {};

export type PullsListFilesRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
};

export type PullsListFilesRequestBody = never;

export type PullsListFilesResponseStatus = 200 | 422 | 500 | 503;

export type PullsListFilesResponseBody =
  | ReadonlyArray<DiffEntry>
  | ValidationError
  | BasicError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type PullsListFilesResolver = msw.HttpResponseResolver<
  PullsListFilesRequestParams,
  PullsListFilesRequestBody,
  PullsListFilesResponseBody
>;

export type PullsCheckIfMergedRequestQuery = {};

export type PullsCheckIfMergedRequestHeaders = {};

export type PullsCheckIfMergedRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
};

export type PullsCheckIfMergedRequestBody = never;

export type PullsCheckIfMergedResponseStatus = 204 | 404;

export type PullsCheckIfMergedResponseBody = never;

export type PullsCheckIfMergedResolver = msw.HttpResponseResolver<
  PullsCheckIfMergedRequestParams,
  PullsCheckIfMergedRequestBody,
  PullsCheckIfMergedResponseBody
>;

export type PullsMergeRequestQuery = {};

export type PullsMergeRequestHeaders = {};

export type PullsMergeRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
};

export type PullsMergeRequestBody =
  | {
      readonly commit_title?: string;
      readonly commit_message?: string;
      readonly sha?: string;
      readonly merge_method?: 'merge' | 'squash' | 'rebase';
    }
  | null
  | undefined;

export type PullsMergeResponseStatus = 200 | 403 | 404 | 405 | 409 | 422;

export type PullRequestMergeResult = {
  readonly sha: string;
  readonly merged: boolean;
  readonly message: string;
};

export type PullsMergeResponseBody =
  | PullRequestMergeResult
  | BasicError
  | { readonly message?: string; readonly documentation_url?: string }
  | ValidationError;

export type PullsMergeResolver = msw.HttpResponseResolver<
  PullsMergeRequestParams,
  PullsMergeRequestBody,
  PullsMergeResponseBody
>;

export type PullsListRequestedReviewersRequestQuery = {};

export type PullsListRequestedReviewersRequestHeaders = {};

export type PullsListRequestedReviewersRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
};

export type PullsListRequestedReviewersRequestBody = never;

export type PullsListRequestedReviewersResponseStatus = 200;

export type PullRequestReviewRequest = {
  readonly users: ReadonlyArray<SimpleUser>;
  readonly teams: ReadonlyArray<Team>;
};

export type PullsListRequestedReviewersResponseBody = PullRequestReviewRequest;

export type PullsListRequestedReviewersResolver = msw.HttpResponseResolver<
  PullsListRequestedReviewersRequestParams,
  PullsListRequestedReviewersRequestBody,
  PullsListRequestedReviewersResponseBody
>;

export type PullsRequestReviewersRequestQuery = {};

export type PullsRequestReviewersRequestHeaders = {};

export type PullsRequestReviewersRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
};

export type PullsRequestReviewersRequestBody =
  | ({
      readonly reviewers?: ReadonlyArray<string>;
      readonly team_reviewers?: ReadonlyArray<string>;
    } & never)
  | undefined;

export type PullsRequestReviewersResponseStatus = 201 | 403 | 422;

export type PullsRequestReviewersResponseBody =
  | PullRequestSimple
  | BasicError
  | never;

export type PullsRequestReviewersResolver = msw.HttpResponseResolver<
  PullsRequestReviewersRequestParams,
  PullsRequestReviewersRequestBody,
  PullsRequestReviewersResponseBody
>;

export type PullsRemoveRequestedReviewersRequestQuery = {};

export type PullsRemoveRequestedReviewersRequestHeaders = {};

export type PullsRemoveRequestedReviewersRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
};

export type PullsRemoveRequestedReviewersRequestBody = {
  readonly reviewers: ReadonlyArray<string>;
  readonly team_reviewers?: ReadonlyArray<string>;
};

export type PullsRemoveRequestedReviewersResponseStatus = 200 | 422;

export type PullsRemoveRequestedReviewersResponseBody =
  | PullRequestSimple
  | ValidationError;

export type PullsRemoveRequestedReviewersResolver = msw.HttpResponseResolver<
  PullsRemoveRequestedReviewersRequestParams,
  PullsRemoveRequestedReviewersRequestBody,
  PullsRemoveRequestedReviewersResponseBody
>;

export type PullsListReviewsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type PullsListReviewsRequestHeaders = {};

export type PullsListReviewsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
};

export type PullsListReviewsRequestBody = never;

export type PullsListReviewsResponseStatus = 200;

export type PullRequestReview = {
  readonly id: number;
  readonly node_id: string;
  readonly user: SimpleUser;
  readonly body: string;
  readonly state: string;
  readonly html_url: string;
  readonly pull_request_url: string;
  readonly _links: {
    readonly html: { readonly href: string };
    readonly pull_request: { readonly href: string };
  };
  readonly submitted_at?: string;
  readonly commit_id: string;
  readonly body_html?: string;
  readonly body_text?: string;
  readonly author_association: AuthorAssociation;
};

export type PullsListReviewsResponseBody = ReadonlyArray<PullRequestReview>;

export type PullsListReviewsResolver = msw.HttpResponseResolver<
  PullsListReviewsRequestParams,
  PullsListReviewsRequestBody,
  PullsListReviewsResponseBody
>;

export type PullsCreateReviewRequestQuery = {};

export type PullsCreateReviewRequestHeaders = {};

export type PullsCreateReviewRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
};

export type PullsCreateReviewRequestBody =
  | {
      readonly commit_id?: string;
      readonly body?: string;
      readonly event?: 'APPROVE' | 'REQUEST_CHANGES' | 'COMMENT';
      readonly comments?: ReadonlyArray<{
        readonly path: string;
        readonly position?: number;
        readonly body: string;
        readonly line?: number;
        readonly side?: string;
        readonly start_line?: number;
        readonly start_side?: string;
      }>;
    }
  | undefined;

export type PullsCreateReviewResponseStatus = 200 | 403 | 422;

export type PullsCreateReviewResponseBody =
  | PullRequestReview
  | BasicError
  | ValidationErrorSimple;

export type PullsCreateReviewResolver = msw.HttpResponseResolver<
  PullsCreateReviewRequestParams,
  PullsCreateReviewRequestBody,
  PullsCreateReviewResponseBody
>;

export type PullsGetReviewRequestQuery = {};

export type PullsGetReviewRequestHeaders = {};

export type PullsGetReviewRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
  readonly review_id: string;
};

export type PullsGetReviewRequestBody = never;

export type PullsGetReviewResponseStatus = 200 | 404;

export type PullsGetReviewResponseBody = PullRequestReview | BasicError;

export type PullsGetReviewResolver = msw.HttpResponseResolver<
  PullsGetReviewRequestParams,
  PullsGetReviewRequestBody,
  PullsGetReviewResponseBody
>;

export type PullsUpdateReviewRequestQuery = {};

export type PullsUpdateReviewRequestHeaders = {};

export type PullsUpdateReviewRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
  readonly review_id: string;
};

export type PullsUpdateReviewRequestBody = { readonly body: string };

export type PullsUpdateReviewResponseStatus = 200 | 422;

export type PullsUpdateReviewResponseBody =
  | PullRequestReview
  | ValidationErrorSimple;

export type PullsUpdateReviewResolver = msw.HttpResponseResolver<
  PullsUpdateReviewRequestParams,
  PullsUpdateReviewRequestBody,
  PullsUpdateReviewResponseBody
>;

export type PullsDeletePendingReviewRequestQuery = {};

export type PullsDeletePendingReviewRequestHeaders = {};

export type PullsDeletePendingReviewRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
  readonly review_id: string;
};

export type PullsDeletePendingReviewRequestBody = never;

export type PullsDeletePendingReviewResponseStatus = 200 | 404 | 422;

export type PullsDeletePendingReviewResponseBody =
  | PullRequestReview
  | BasicError
  | ValidationErrorSimple;

export type PullsDeletePendingReviewResolver = msw.HttpResponseResolver<
  PullsDeletePendingReviewRequestParams,
  PullsDeletePendingReviewRequestBody,
  PullsDeletePendingReviewResponseBody
>;

export type PullsListCommentsForReviewRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type PullsListCommentsForReviewRequestHeaders = {};

export type PullsListCommentsForReviewRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
  readonly review_id: string;
};

export type PullsListCommentsForReviewRequestBody = never;

export type PullsListCommentsForReviewResponseStatus = 200 | 404;

export type LegacyReviewComment = {
  readonly url: string;
  readonly pull_request_review_id: number | null;
  readonly id: number;
  readonly node_id: string;
  readonly diff_hunk: string;
  readonly path: string;
  readonly position: number | null;
  readonly original_position: number;
  readonly commit_id: string;
  readonly original_commit_id: string;
  readonly in_reply_to_id?: number;
  readonly user: SimpleUser;
  readonly body: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly html_url: string;
  readonly pull_request_url: string;
  readonly author_association: AuthorAssociation;
  readonly _links: {
    readonly self: Link;
    readonly html: Link;
    readonly pull_request: Link;
  };
  readonly body_text?: string;
  readonly body_html?: string;
  readonly reactions?: ReactionRollup;
  readonly side?: 'LEFT' | 'RIGHT';
  readonly start_side?: 'LEFT' | 'RIGHT' | null;
  readonly line?: number;
  readonly original_line?: number;
  readonly start_line?: number | null;
  readonly original_start_line?: number | null;
};

export type PullsListCommentsForReviewResponseBody =
  | ReadonlyArray<LegacyReviewComment>
  | BasicError;

export type PullsListCommentsForReviewResolver = msw.HttpResponseResolver<
  PullsListCommentsForReviewRequestParams,
  PullsListCommentsForReviewRequestBody,
  PullsListCommentsForReviewResponseBody
>;

export type PullsDismissReviewRequestQuery = {};

export type PullsDismissReviewRequestHeaders = {};

export type PullsDismissReviewRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
  readonly review_id: string;
};

export type PullsDismissReviewRequestBody = {
  readonly message: string;
  readonly event?: 'DISMISS';
};

export type PullsDismissReviewResponseStatus = 200 | 404 | 422;

export type PullsDismissReviewResponseBody =
  | PullRequestReview
  | BasicError
  | ValidationErrorSimple;

export type PullsDismissReviewResolver = msw.HttpResponseResolver<
  PullsDismissReviewRequestParams,
  PullsDismissReviewRequestBody,
  PullsDismissReviewResponseBody
>;

export type PullsSubmitReviewRequestQuery = {};

export type PullsSubmitReviewRequestHeaders = {};

export type PullsSubmitReviewRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
  readonly review_id: string;
};

export type PullsSubmitReviewRequestBody = {
  readonly body?: string;
  readonly event: 'APPROVE' | 'REQUEST_CHANGES' | 'COMMENT';
};

export type PullsSubmitReviewResponseStatus = 200 | 403 | 404 | 422;

export type PullsSubmitReviewResponseBody =
  | PullRequestReview
  | BasicError
  | ValidationErrorSimple;

export type PullsSubmitReviewResolver = msw.HttpResponseResolver<
  PullsSubmitReviewRequestParams,
  PullsSubmitReviewRequestBody,
  PullsSubmitReviewResponseBody
>;

export type PullsUpdateBranchRequestQuery = {};

export type PullsUpdateBranchRequestHeaders = {};

export type PullsUpdateBranchRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly pull_number: string;
};

export type PullsUpdateBranchRequestBody =
  | { readonly expected_head_sha?: string }
  | null
  | undefined;

export type PullsUpdateBranchResponseStatus = 202 | 403 | 422;

export type PullsUpdateBranchResponseBody =
  | { readonly message?: string; readonly url?: string }
  | BasicError
  | ValidationError;

export type PullsUpdateBranchResolver = msw.HttpResponseResolver<
  PullsUpdateBranchRequestParams,
  PullsUpdateBranchRequestBody,
  PullsUpdateBranchResponseBody
>;

export type ReposGetReadmeRequestQuery = { readonly ref?: string };

export type ReposGetReadmeRequestHeaders = {};

export type ReposGetReadmeRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposGetReadmeRequestBody = never;

export type ReposGetReadmeResponseStatus = 200 | 404 | 422;

export type ReposGetReadmeResponseBody =
  | ContentFile
  | BasicError
  | ValidationError;

export type ReposGetReadmeResolver = msw.HttpResponseResolver<
  ReposGetReadmeRequestParams,
  ReposGetReadmeRequestBody,
  ReposGetReadmeResponseBody
>;

export type ReposGetReadmeInDirectoryRequestQuery = { readonly ref?: string };

export type ReposGetReadmeInDirectoryRequestHeaders = {};

export type ReposGetReadmeInDirectoryRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly dir: string;
};

export type ReposGetReadmeInDirectoryRequestBody = never;

export type ReposGetReadmeInDirectoryResponseStatus = 200 | 404 | 422;

export type ReposGetReadmeInDirectoryResponseBody =
  | ContentFile
  | BasicError
  | ValidationError;

export type ReposGetReadmeInDirectoryResolver = msw.HttpResponseResolver<
  ReposGetReadmeInDirectoryRequestParams,
  ReposGetReadmeInDirectoryRequestBody,
  ReposGetReadmeInDirectoryResponseBody
>;

export type ReposListReleasesRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListReleasesRequestHeaders = {};

export type ReposListReleasesRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposListReleasesRequestBody = never;

export type ReposListReleasesResponseStatus = 200 | 404;

export type ReleaseAsset = {
  readonly url: string;
  readonly browser_download_url: string;
  readonly id: number;
  readonly node_id: string;
  readonly name: string;
  readonly label: string | null;
  readonly state: 'uploaded' | 'open';
  readonly content_type: string;
  readonly size: number;
  readonly download_count: number;
  readonly created_at: string;
  readonly updated_at: string;
  readonly uploader: SimpleUser;
};

export type Release = {
  readonly url: string;
  readonly html_url: string;
  readonly assets_url: string;
  readonly upload_url: string;
  readonly tarball_url: string | null;
  readonly zipball_url: string | null;
  readonly id: number;
  readonly node_id: string;
  readonly tag_name: string;
  readonly target_commitish: string;
  readonly name: string | null;
  readonly body?: string | null;
  readonly draft: boolean;
  readonly prerelease: boolean;
  readonly created_at: string;
  readonly published_at: string | null;
  readonly author: SimpleUser;
  readonly assets: ReadonlyArray<ReleaseAsset>;
  readonly body_html?: string;
  readonly body_text?: string;
  readonly mentions_count?: number;
  readonly discussion_url?: string;
  readonly reactions?: ReactionRollup;
};

export type ReposListReleasesResponseBody = ReadonlyArray<Release> | BasicError;

export type ReposListReleasesResolver = msw.HttpResponseResolver<
  ReposListReleasesRequestParams,
  ReposListReleasesRequestBody,
  ReposListReleasesResponseBody
>;

export type ReposCreateReleaseRequestQuery = {};

export type ReposCreateReleaseRequestHeaders = {};

export type ReposCreateReleaseRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposCreateReleaseRequestBody = {
  readonly tag_name: string;
  readonly target_commitish?: string;
  readonly name?: string;
  readonly body?: string;
  readonly draft?: boolean;
  readonly prerelease?: boolean;
  readonly discussion_category_name?: string;
  readonly generate_release_notes?: boolean;
};

export type ReposCreateReleaseResponseStatus = 201 | 404 | 422;

export type ReposCreateReleaseResponseBody =
  | Release
  | BasicError
  | ValidationError;

export type ReposCreateReleaseResolver = msw.HttpResponseResolver<
  ReposCreateReleaseRequestParams,
  ReposCreateReleaseRequestBody,
  ReposCreateReleaseResponseBody
>;

export type ReposGetReleaseAssetRequestQuery = {};

export type ReposGetReleaseAssetRequestHeaders = {};

export type ReposGetReleaseAssetRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly asset_id: string;
};

export type ReposGetReleaseAssetRequestBody = never;

export type ReposGetReleaseAssetResponseStatus = 200 | 302 | 404;

export type ReposGetReleaseAssetResponseBody =
  | ReleaseAsset
  | never
  | BasicError;

export type ReposGetReleaseAssetResolver = msw.HttpResponseResolver<
  ReposGetReleaseAssetRequestParams,
  ReposGetReleaseAssetRequestBody,
  ReposGetReleaseAssetResponseBody
>;

export type ReposUpdateReleaseAssetRequestQuery = {};

export type ReposUpdateReleaseAssetRequestHeaders = {};

export type ReposUpdateReleaseAssetRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly asset_id: string;
};

export type ReposUpdateReleaseAssetRequestBody =
  | { readonly name?: string; readonly label?: string; readonly state?: string }
  | undefined;

export type ReposUpdateReleaseAssetResponseStatus = 200;

export type ReposUpdateReleaseAssetResponseBody = ReleaseAsset;

export type ReposUpdateReleaseAssetResolver = msw.HttpResponseResolver<
  ReposUpdateReleaseAssetRequestParams,
  ReposUpdateReleaseAssetRequestBody,
  ReposUpdateReleaseAssetResponseBody
>;

export type ReposDeleteReleaseAssetRequestQuery = {};

export type ReposDeleteReleaseAssetRequestHeaders = {};

export type ReposDeleteReleaseAssetRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly asset_id: string;
};

export type ReposDeleteReleaseAssetRequestBody = never;

export type ReposDeleteReleaseAssetResponseStatus = 204;

export type ReposDeleteReleaseAssetResponseBody = never;

export type ReposDeleteReleaseAssetResolver = msw.HttpResponseResolver<
  ReposDeleteReleaseAssetRequestParams,
  ReposDeleteReleaseAssetRequestBody,
  ReposDeleteReleaseAssetResponseBody
>;

export type ReposGenerateReleaseNotesRequestQuery = {};

export type ReposGenerateReleaseNotesRequestHeaders = {};

export type ReposGenerateReleaseNotesRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposGenerateReleaseNotesRequestBody = {
  readonly tag_name: string;
  readonly target_commitish?: string;
  readonly previous_tag_name?: string;
  readonly configuration_file_path?: string;
};

export type ReposGenerateReleaseNotesResponseStatus = 200 | 404;

export type GeneratedReleaseNotesContent = {
  readonly name: string;
  readonly body: string;
};

export type ReposGenerateReleaseNotesResponseBody =
  | GeneratedReleaseNotesContent
  | BasicError;

export type ReposGenerateReleaseNotesResolver = msw.HttpResponseResolver<
  ReposGenerateReleaseNotesRequestParams,
  ReposGenerateReleaseNotesRequestBody,
  ReposGenerateReleaseNotesResponseBody
>;

export type ReposGetLatestReleaseRequestQuery = {};

export type ReposGetLatestReleaseRequestHeaders = {};

export type ReposGetLatestReleaseRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposGetLatestReleaseRequestBody = never;

export type ReposGetLatestReleaseResponseStatus = 200;

export type ReposGetLatestReleaseResponseBody = Release;

export type ReposGetLatestReleaseResolver = msw.HttpResponseResolver<
  ReposGetLatestReleaseRequestParams,
  ReposGetLatestReleaseRequestBody,
  ReposGetLatestReleaseResponseBody
>;

export type ReposGetReleaseByTagRequestQuery = {};

export type ReposGetReleaseByTagRequestHeaders = {};

export type ReposGetReleaseByTagRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly tag: string;
};

export type ReposGetReleaseByTagRequestBody = never;

export type ReposGetReleaseByTagResponseStatus = 200 | 404;

export type ReposGetReleaseByTagResponseBody = Release | BasicError;

export type ReposGetReleaseByTagResolver = msw.HttpResponseResolver<
  ReposGetReleaseByTagRequestParams,
  ReposGetReleaseByTagRequestBody,
  ReposGetReleaseByTagResponseBody
>;

export type ReposGetReleaseRequestQuery = {};

export type ReposGetReleaseRequestHeaders = {};

export type ReposGetReleaseRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly release_id: string;
};

export type ReposGetReleaseRequestBody = never;

export type ReposGetReleaseResponseStatus = 200 | 404;

export type ReposGetReleaseResponseBody = Release | BasicError;

export type ReposGetReleaseResolver = msw.HttpResponseResolver<
  ReposGetReleaseRequestParams,
  ReposGetReleaseRequestBody,
  ReposGetReleaseResponseBody
>;

export type ReposUpdateReleaseRequestQuery = {};

export type ReposUpdateReleaseRequestHeaders = {};

export type ReposUpdateReleaseRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly release_id: string;
};

export type ReposUpdateReleaseRequestBody =
  | {
      readonly tag_name?: string;
      readonly target_commitish?: string;
      readonly name?: string;
      readonly body?: string;
      readonly draft?: boolean;
      readonly prerelease?: boolean;
      readonly discussion_category_name?: string;
    }
  | undefined;

export type ReposUpdateReleaseResponseStatus = 200 | 404;

export type ReposUpdateReleaseResponseBody = Release | BasicError;

export type ReposUpdateReleaseResolver = msw.HttpResponseResolver<
  ReposUpdateReleaseRequestParams,
  ReposUpdateReleaseRequestBody,
  ReposUpdateReleaseResponseBody
>;

export type ReposDeleteReleaseRequestQuery = {};

export type ReposDeleteReleaseRequestHeaders = {};

export type ReposDeleteReleaseRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly release_id: string;
};

export type ReposDeleteReleaseRequestBody = never;

export type ReposDeleteReleaseResponseStatus = 204;

export type ReposDeleteReleaseResponseBody = never;

export type ReposDeleteReleaseResolver = msw.HttpResponseResolver<
  ReposDeleteReleaseRequestParams,
  ReposDeleteReleaseRequestBody,
  ReposDeleteReleaseResponseBody
>;

export type ReposListReleaseAssetsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListReleaseAssetsRequestHeaders = {};

export type ReposListReleaseAssetsRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly release_id: string;
};

export type ReposListReleaseAssetsRequestBody = never;

export type ReposListReleaseAssetsResponseStatus = 200;

export type ReposListReleaseAssetsResponseBody = ReadonlyArray<ReleaseAsset>;

export type ReposListReleaseAssetsResolver = msw.HttpResponseResolver<
  ReposListReleaseAssetsRequestParams,
  ReposListReleaseAssetsRequestBody,
  ReposListReleaseAssetsResponseBody
>;

export type ReposUploadReleaseAssetRequestQuery = {
  readonly name: string;
  readonly label?: string;
};

export type ReposUploadReleaseAssetRequestHeaders = {};

export type ReposUploadReleaseAssetRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly release_id: string;
};

export type ReposUploadReleaseAssetRequestBody = never;

export type ReposUploadReleaseAssetResponseStatus = 201 | 422;

export type ReposUploadReleaseAssetResponseBody = ReleaseAsset | never;

export type ReposUploadReleaseAssetResolver = msw.HttpResponseResolver<
  ReposUploadReleaseAssetRequestParams,
  ReposUploadReleaseAssetRequestBody,
  ReposUploadReleaseAssetResponseBody
>;

export type ReactionsListForReleaseRequestQuery = {
  readonly content?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ReactionsListForReleaseRequestHeaders = {};

export type ReactionsListForReleaseRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly release_id: string;
};

export type ReactionsListForReleaseRequestBody = never;

export type ReactionsListForReleaseResponseStatus = 200 | 404;

export type ReactionsListForReleaseResponseBody =
  | ReadonlyArray<Reaction>
  | BasicError;

export type ReactionsListForReleaseResolver = msw.HttpResponseResolver<
  ReactionsListForReleaseRequestParams,
  ReactionsListForReleaseRequestBody,
  ReactionsListForReleaseResponseBody
>;

export type ReactionsCreateForReleaseRequestQuery = {};

export type ReactionsCreateForReleaseRequestHeaders = {};

export type ReactionsCreateForReleaseRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly release_id: string;
};

export type ReactionsCreateForReleaseRequestBody = {
  readonly content: '+1' | 'laugh' | 'heart' | 'hooray' | 'rocket' | 'eyes';
};

export type ReactionsCreateForReleaseResponseStatus = 200 | 201 | 422;

export type ReactionsCreateForReleaseResponseBody = Reaction | ValidationError;

export type ReactionsCreateForReleaseResolver = msw.HttpResponseResolver<
  ReactionsCreateForReleaseRequestParams,
  ReactionsCreateForReleaseRequestBody,
  ReactionsCreateForReleaseResponseBody
>;

export type ReactionsDeleteForReleaseRequestQuery = {};

export type ReactionsDeleteForReleaseRequestHeaders = {};

export type ReactionsDeleteForReleaseRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly release_id: string;
  readonly reaction_id: string;
};

export type ReactionsDeleteForReleaseRequestBody = never;

export type ReactionsDeleteForReleaseResponseStatus = 204;

export type ReactionsDeleteForReleaseResponseBody = never;

export type ReactionsDeleteForReleaseResolver = msw.HttpResponseResolver<
  ReactionsDeleteForReleaseRequestParams,
  ReactionsDeleteForReleaseRequestBody,
  ReactionsDeleteForReleaseResponseBody
>;

export type SecretScanningListAlertsForRepoRequestQuery = {
  readonly state?: string;
  readonly secret_type?: string;
  readonly resolution?: string;
  readonly sort?: string;
  readonly direction?: string;
  readonly page?: string;
  readonly per_page?: string;
  readonly before?: string;
  readonly after?: string;
};

export type SecretScanningListAlertsForRepoRequestHeaders = {};

export type SecretScanningListAlertsForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type SecretScanningListAlertsForRepoRequestBody = never;

export type SecretScanningListAlertsForRepoResponseStatus = 200 | 404 | 503;

export type SecretScanningAlert = {
  readonly number?: AlertNumber;
  readonly created_at?: AlertCreatedAt;
  readonly updated_at?: AlertUpdatedAt;
  readonly url?: AlertUrl;
  readonly html_url?: AlertHtmlUrl;
  readonly locations_url?: string;
  readonly state?: SecretScanningAlertState;
  readonly resolution?: SecretScanningAlertResolution;
  readonly resolved_at?: string | null;
  readonly resolved_by?: SimpleUser;
  readonly resolution_comment?: string | null;
  readonly secret_type?: string;
  readonly secret_type_display_name?: string;
  readonly secret?: string;
  readonly push_protection_bypassed?: boolean | null;
  readonly push_protection_bypassed_by?: SimpleUser;
  readonly push_protection_bypassed_at?: string | null;
};

export type SecretScanningListAlertsForRepoResponseBody =
  | ReadonlyArray<SecretScanningAlert>
  | never
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type SecretScanningListAlertsForRepoResolver = msw.HttpResponseResolver<
  SecretScanningListAlertsForRepoRequestParams,
  SecretScanningListAlertsForRepoRequestBody,
  SecretScanningListAlertsForRepoResponseBody
>;

export type SecretScanningGetAlertRequestQuery = {};

export type SecretScanningGetAlertRequestHeaders = {};

export type SecretScanningGetAlertRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly alert_number: string;
};

export type SecretScanningGetAlertRequestBody = never;

export type SecretScanningGetAlertResponseStatus = 200 | 304 | 404 | 503;

export type SecretScanningGetAlertResponseBody =
  | SecretScanningAlert
  | never
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type SecretScanningGetAlertResolver = msw.HttpResponseResolver<
  SecretScanningGetAlertRequestParams,
  SecretScanningGetAlertRequestBody,
  SecretScanningGetAlertResponseBody
>;

export type SecretScanningAlertResolutionComment = string | null;

export type SecretScanningUpdateAlertRequestQuery = {};

export type SecretScanningUpdateAlertRequestHeaders = {};

export type SecretScanningUpdateAlertRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly alert_number: string;
};

export type SecretScanningUpdateAlertRequestBody = {
  readonly state: SecretScanningAlertState;
  readonly resolution?: SecretScanningAlertResolution;
  readonly resolution_comment?: SecretScanningAlertResolutionComment;
};

export type SecretScanningUpdateAlertResponseStatus =
  | 200
  | 400
  | 404
  | 422
  | 503;

export type SecretScanningUpdateAlertResponseBody =
  | SecretScanningAlert
  | never
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type SecretScanningUpdateAlertResolver = msw.HttpResponseResolver<
  SecretScanningUpdateAlertRequestParams,
  SecretScanningUpdateAlertRequestBody,
  SecretScanningUpdateAlertResponseBody
>;

export type SecretScanningListLocationsForAlertRequestQuery = {
  readonly page?: string;
  readonly per_page?: string;
};

export type SecretScanningListLocationsForAlertRequestHeaders = {};

export type SecretScanningListLocationsForAlertRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly alert_number: string;
};

export type SecretScanningListLocationsForAlertRequestBody = never;

export type SecretScanningListLocationsForAlertResponseStatus = 200 | 404 | 503;

export type SecretScanningLocationCommit = {
  readonly path: string;
  readonly start_line: number;
  readonly end_line: number;
  readonly start_column: number;
  readonly end_column: number;
  readonly blob_sha: string;
  readonly blob_url: string;
  readonly commit_sha: string;
  readonly commit_url: string;
};

export type SecretScanningLocation = {
  readonly type: 'commit';
  readonly details: SecretScanningLocationCommit;
};

export type SecretScanningListLocationsForAlertResponseBody =
  | ReadonlyArray<SecretScanningLocation>
  | never
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type SecretScanningListLocationsForAlertResolver = msw.HttpResponseResolver<
  SecretScanningListLocationsForAlertRequestParams,
  SecretScanningListLocationsForAlertRequestBody,
  SecretScanningListLocationsForAlertResponseBody
>;

export type ActivityListStargazersForRepoRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActivityListStargazersForRepoRequestHeaders = {};

export type ActivityListStargazersForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActivityListStargazersForRepoRequestBody = never;

export type ActivityListStargazersForRepoResponseStatus = 200 | 422;

export type Stargazer = {
  readonly starred_at: string;
  readonly user: SimpleUser;
};

export type ActivityListStargazersForRepoResponseBody =
  | ReadonlyArray<SimpleUser>
  | ReadonlyArray<Stargazer>
  | ValidationError;

export type ActivityListStargazersForRepoResolver = msw.HttpResponseResolver<
  ActivityListStargazersForRepoRequestParams,
  ActivityListStargazersForRepoRequestBody,
  ActivityListStargazersForRepoResponseBody
>;

export type ReposGetCodeFrequencyStatsRequestQuery = {};

export type ReposGetCodeFrequencyStatsRequestHeaders = {};

export type ReposGetCodeFrequencyStatsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposGetCodeFrequencyStatsRequestBody = never;

export type ReposGetCodeFrequencyStatsResponseStatus = 200 | 202 | 204;

export type CodeFrequencyStat = ReadonlyArray<number>;

export type ReposGetCodeFrequencyStatsResponseBody =
  | ReadonlyArray<CodeFrequencyStat>
  | never;

export type ReposGetCodeFrequencyStatsResolver = msw.HttpResponseResolver<
  ReposGetCodeFrequencyStatsRequestParams,
  ReposGetCodeFrequencyStatsRequestBody,
  ReposGetCodeFrequencyStatsResponseBody
>;

export type ReposGetCommitActivityStatsRequestQuery = {};

export type ReposGetCommitActivityStatsRequestHeaders = {};

export type ReposGetCommitActivityStatsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposGetCommitActivityStatsRequestBody = never;

export type ReposGetCommitActivityStatsResponseStatus = 200 | 202 | 204;

export type CommitActivity = {
  readonly days: ReadonlyArray<number>;
  readonly total: number;
  readonly week: number;
};

export type ReposGetCommitActivityStatsResponseBody =
  | ReadonlyArray<CommitActivity>
  | never;

export type ReposGetCommitActivityStatsResolver = msw.HttpResponseResolver<
  ReposGetCommitActivityStatsRequestParams,
  ReposGetCommitActivityStatsRequestBody,
  ReposGetCommitActivityStatsResponseBody
>;

export type ReposGetContributorsStatsRequestQuery = {};

export type ReposGetContributorsStatsRequestHeaders = {};

export type ReposGetContributorsStatsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposGetContributorsStatsRequestBody = never;

export type ReposGetContributorsStatsResponseStatus = 200 | 202 | 204;

export type ContributorActivity = {
  readonly author: SimpleUser;
  readonly total: number;
  readonly weeks: ReadonlyArray<{
    readonly w?: number;
    readonly a?: number;
    readonly d?: number;
    readonly c?: number;
  }>;
};

export type ReposGetContributorsStatsResponseBody =
  | ReadonlyArray<ContributorActivity>
  | never;

export type ReposGetContributorsStatsResolver = msw.HttpResponseResolver<
  ReposGetContributorsStatsRequestParams,
  ReposGetContributorsStatsRequestBody,
  ReposGetContributorsStatsResponseBody
>;

export type ReposGetParticipationStatsRequestQuery = {};

export type ReposGetParticipationStatsRequestHeaders = {};

export type ReposGetParticipationStatsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposGetParticipationStatsRequestBody = never;

export type ReposGetParticipationStatsResponseStatus = 200 | 404;

export type ParticipationStats = {
  readonly all: ReadonlyArray<number>;
  readonly owner: ReadonlyArray<number>;
};

export type ReposGetParticipationStatsResponseBody =
  | ParticipationStats
  | BasicError;

export type ReposGetParticipationStatsResolver = msw.HttpResponseResolver<
  ReposGetParticipationStatsRequestParams,
  ReposGetParticipationStatsRequestBody,
  ReposGetParticipationStatsResponseBody
>;

export type ReposGetPunchCardStatsRequestQuery = {};

export type ReposGetPunchCardStatsRequestHeaders = {};

export type ReposGetPunchCardStatsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposGetPunchCardStatsRequestBody = never;

export type ReposGetPunchCardStatsResponseStatus = 200 | 204;

export type ReposGetPunchCardStatsResponseBody =
  | ReadonlyArray<CodeFrequencyStat>
  | never;

export type ReposGetPunchCardStatsResolver = msw.HttpResponseResolver<
  ReposGetPunchCardStatsRequestParams,
  ReposGetPunchCardStatsRequestBody,
  ReposGetPunchCardStatsResponseBody
>;

export type ReposCreateCommitStatusRequestQuery = {};

export type ReposCreateCommitStatusRequestHeaders = {};

export type ReposCreateCommitStatusRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly sha: string;
};

export type ReposCreateCommitStatusRequestBody = {
  readonly state: 'error' | 'failure' | 'pending' | 'success';
  readonly target_url?: string | null;
  readonly description?: string | null;
  readonly context?: string;
};

export type ReposCreateCommitStatusResponseStatus = 201;

export type ReposCreateCommitStatusResponseBody = Status;

export type ReposCreateCommitStatusResolver = msw.HttpResponseResolver<
  ReposCreateCommitStatusRequestParams,
  ReposCreateCommitStatusRequestBody,
  ReposCreateCommitStatusResponseBody
>;

export type ActivityListWatchersForRepoRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActivityListWatchersForRepoRequestHeaders = {};

export type ActivityListWatchersForRepoRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActivityListWatchersForRepoRequestBody = never;

export type ActivityListWatchersForRepoResponseStatus = 200;

export type ActivityListWatchersForRepoResponseBody = ReadonlyArray<SimpleUser>;

export type ActivityListWatchersForRepoResolver = msw.HttpResponseResolver<
  ActivityListWatchersForRepoRequestParams,
  ActivityListWatchersForRepoRequestBody,
  ActivityListWatchersForRepoResponseBody
>;

export type ActivityGetRepoSubscriptionRequestQuery = {};

export type ActivityGetRepoSubscriptionRequestHeaders = {};

export type ActivityGetRepoSubscriptionRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActivityGetRepoSubscriptionRequestBody = never;

export type ActivityGetRepoSubscriptionResponseStatus = 200 | 403 | 404;

export type ActivityGetRepoSubscriptionResponseBody =
  | RepositoryInvitation
  | BasicError
  | never;

export type ActivityGetRepoSubscriptionResolver = msw.HttpResponseResolver<
  ActivityGetRepoSubscriptionRequestParams,
  ActivityGetRepoSubscriptionRequestBody,
  ActivityGetRepoSubscriptionResponseBody
>;

export type ActivitySetRepoSubscriptionRequestQuery = {};

export type ActivitySetRepoSubscriptionRequestHeaders = {};

export type ActivitySetRepoSubscriptionRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActivitySetRepoSubscriptionRequestBody =
  | { readonly subscribed?: boolean; readonly ignored?: boolean }
  | undefined;

export type ActivitySetRepoSubscriptionResponseStatus = 200;

export type ActivitySetRepoSubscriptionResponseBody = RepositoryInvitation;

export type ActivitySetRepoSubscriptionResolver = msw.HttpResponseResolver<
  ActivitySetRepoSubscriptionRequestParams,
  ActivitySetRepoSubscriptionRequestBody,
  ActivitySetRepoSubscriptionResponseBody
>;

export type ActivityDeleteRepoSubscriptionRequestQuery = {};

export type ActivityDeleteRepoSubscriptionRequestHeaders = {};

export type ActivityDeleteRepoSubscriptionRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActivityDeleteRepoSubscriptionRequestBody = never;

export type ActivityDeleteRepoSubscriptionResponseStatus = 204;

export type ActivityDeleteRepoSubscriptionResponseBody = never;

export type ActivityDeleteRepoSubscriptionResolver = msw.HttpResponseResolver<
  ActivityDeleteRepoSubscriptionRequestParams,
  ActivityDeleteRepoSubscriptionRequestBody,
  ActivityDeleteRepoSubscriptionResponseBody
>;

export type ReposListTagsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListTagsRequestHeaders = {};

export type ReposListTagsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposListTagsRequestBody = never;

export type ReposListTagsResponseStatus = 200;

export type Tag = {
  readonly name: string;
  readonly commit: { readonly sha: string; readonly url: string };
  readonly zipball_url: string;
  readonly tarball_url: string;
  readonly node_id: string;
};

export type ReposListTagsResponseBody = ReadonlyArray<Tag>;

export type ReposListTagsResolver = msw.HttpResponseResolver<
  ReposListTagsRequestParams,
  ReposListTagsRequestBody,
  ReposListTagsResponseBody
>;

export type ReposListTagProtectionRequestQuery = {};

export type ReposListTagProtectionRequestHeaders = {};

export type ReposListTagProtectionRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposListTagProtectionRequestBody = never;

export type ReposListTagProtectionResponseStatus = 200 | 403 | 404;

export type TagProtection = {
  readonly id?: number;
  readonly created_at?: string;
  readonly updated_at?: string;
  readonly enabled?: boolean;
  readonly pattern: string;
};

export type ReposListTagProtectionResponseBody =
  | ReadonlyArray<TagProtection>
  | BasicError;

export type ReposListTagProtectionResolver = msw.HttpResponseResolver<
  ReposListTagProtectionRequestParams,
  ReposListTagProtectionRequestBody,
  ReposListTagProtectionResponseBody
>;

export type ReposCreateTagProtectionRequestQuery = {};

export type ReposCreateTagProtectionRequestHeaders = {};

export type ReposCreateTagProtectionRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposCreateTagProtectionRequestBody = { readonly pattern: string };

export type ReposCreateTagProtectionResponseStatus = 201 | 403 | 404;

export type ReposCreateTagProtectionResponseBody = TagProtection | BasicError;

export type ReposCreateTagProtectionResolver = msw.HttpResponseResolver<
  ReposCreateTagProtectionRequestParams,
  ReposCreateTagProtectionRequestBody,
  ReposCreateTagProtectionResponseBody
>;

export type ReposDeleteTagProtectionRequestQuery = {};

export type ReposDeleteTagProtectionRequestHeaders = {};

export type ReposDeleteTagProtectionRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly tag_protection_id: string;
};

export type ReposDeleteTagProtectionRequestBody = never;

export type ReposDeleteTagProtectionResponseStatus = 204 | 403 | 404;

export type ReposDeleteTagProtectionResponseBody = never | BasicError;

export type ReposDeleteTagProtectionResolver = msw.HttpResponseResolver<
  ReposDeleteTagProtectionRequestParams,
  ReposDeleteTagProtectionRequestBody,
  ReposDeleteTagProtectionResponseBody
>;

export type ReposDownloadTarballArchiveRequestQuery = {};

export type ReposDownloadTarballArchiveRequestHeaders = {};

export type ReposDownloadTarballArchiveRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly ref: string;
};

export type ReposDownloadTarballArchiveRequestBody = never;

export type ReposDownloadTarballArchiveResponseStatus = 302;

export type ReposDownloadTarballArchiveResponseBody = never;

export type ReposDownloadTarballArchiveResolver = msw.HttpResponseResolver<
  ReposDownloadTarballArchiveRequestParams,
  ReposDownloadTarballArchiveRequestBody,
  ReposDownloadTarballArchiveResponseBody
>;

export type ReposListTeamsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListTeamsRequestHeaders = {};

export type ReposListTeamsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposListTeamsRequestBody = never;

export type ReposListTeamsResponseStatus = 200;

export type ReposListTeamsResponseBody = ReadonlyArray<Team>;

export type ReposListTeamsResolver = msw.HttpResponseResolver<
  ReposListTeamsRequestParams,
  ReposListTeamsRequestBody,
  ReposListTeamsResponseBody
>;

export type ReposGetAllTopicsRequestQuery = {
  readonly page?: string;
  readonly per_page?: string;
};

export type ReposGetAllTopicsRequestHeaders = {};

export type ReposGetAllTopicsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposGetAllTopicsRequestBody = never;

export type ReposGetAllTopicsResponseStatus = 200 | 404;

export type Topic = { readonly names: ReadonlyArray<string> };

export type ReposGetAllTopicsResponseBody = Topic | BasicError;

export type ReposGetAllTopicsResolver = msw.HttpResponseResolver<
  ReposGetAllTopicsRequestParams,
  ReposGetAllTopicsRequestBody,
  ReposGetAllTopicsResponseBody
>;

export type ReposReplaceAllTopicsRequestQuery = {};

export type ReposReplaceAllTopicsRequestHeaders = {};

export type ReposReplaceAllTopicsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposReplaceAllTopicsRequestBody = {
  readonly names: ReadonlyArray<string>;
};

export type ReposReplaceAllTopicsResponseStatus = 200 | 404 | 422;

export type ReposReplaceAllTopicsResponseBody =
  | Topic
  | BasicError
  | ValidationErrorSimple;

export type ReposReplaceAllTopicsResolver = msw.HttpResponseResolver<
  ReposReplaceAllTopicsRequestParams,
  ReposReplaceAllTopicsRequestBody,
  ReposReplaceAllTopicsResponseBody
>;

export type ReposGetClonesRequestQuery = { readonly per?: string };

export type ReposGetClonesRequestHeaders = {};

export type ReposGetClonesRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposGetClonesRequestBody = never;

export type ReposGetClonesResponseStatus = 200 | 403;

export type Traffic = {
  readonly timestamp: string;
  readonly uniques: number;
  readonly count: number;
};

export type CloneTraffic = {
  readonly count: number;
  readonly uniques: number;
  readonly clones: ReadonlyArray<Traffic>;
};

export type ReposGetClonesResponseBody = CloneTraffic | BasicError;

export type ReposGetClonesResolver = msw.HttpResponseResolver<
  ReposGetClonesRequestParams,
  ReposGetClonesRequestBody,
  ReposGetClonesResponseBody
>;

export type ReposGetTopPathsRequestQuery = {};

export type ReposGetTopPathsRequestHeaders = {};

export type ReposGetTopPathsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposGetTopPathsRequestBody = never;

export type ReposGetTopPathsResponseStatus = 200 | 403;

export type ContentTraffic = {
  readonly path: string;
  readonly title: string;
  readonly count: number;
  readonly uniques: number;
};

export type ReposGetTopPathsResponseBody =
  | ReadonlyArray<ContentTraffic>
  | BasicError;

export type ReposGetTopPathsResolver = msw.HttpResponseResolver<
  ReposGetTopPathsRequestParams,
  ReposGetTopPathsRequestBody,
  ReposGetTopPathsResponseBody
>;

export type ReposGetTopReferrersRequestQuery = {};

export type ReposGetTopReferrersRequestHeaders = {};

export type ReposGetTopReferrersRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposGetTopReferrersRequestBody = never;

export type ReposGetTopReferrersResponseStatus = 200 | 403;

export type ReferrerTraffic = {
  readonly referrer: string;
  readonly count: number;
  readonly uniques: number;
};

export type ReposGetTopReferrersResponseBody =
  | ReadonlyArray<ReferrerTraffic>
  | BasicError;

export type ReposGetTopReferrersResolver = msw.HttpResponseResolver<
  ReposGetTopReferrersRequestParams,
  ReposGetTopReferrersRequestBody,
  ReposGetTopReferrersResponseBody
>;

export type ReposGetViewsRequestQuery = { readonly per?: string };

export type ReposGetViewsRequestHeaders = {};

export type ReposGetViewsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposGetViewsRequestBody = never;

export type ReposGetViewsResponseStatus = 200 | 403;

export type ViewTraffic = {
  readonly count: number;
  readonly uniques: number;
  readonly views: ReadonlyArray<Traffic>;
};

export type ReposGetViewsResponseBody = ViewTraffic | BasicError;

export type ReposGetViewsResolver = msw.HttpResponseResolver<
  ReposGetViewsRequestParams,
  ReposGetViewsRequestBody,
  ReposGetViewsResponseBody
>;

export type ReposTransferRequestQuery = {};

export type ReposTransferRequestHeaders = {};

export type ReposTransferRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposTransferRequestBody = {
  readonly new_owner: string;
  readonly team_ids?: ReadonlyArray<number>;
};

export type ReposTransferResponseStatus = 202;

export type ReposTransferResponseBody = MinimalRepository;

export type ReposTransferResolver = msw.HttpResponseResolver<
  ReposTransferRequestParams,
  ReposTransferRequestBody,
  ReposTransferResponseBody
>;

export type ReposCheckVulnerabilityAlertsRequestQuery = {};

export type ReposCheckVulnerabilityAlertsRequestHeaders = {};

export type ReposCheckVulnerabilityAlertsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposCheckVulnerabilityAlertsRequestBody = never;

export type ReposCheckVulnerabilityAlertsResponseStatus = 204 | 404;

export type ReposCheckVulnerabilityAlertsResponseBody = never;

export type ReposCheckVulnerabilityAlertsResolver = msw.HttpResponseResolver<
  ReposCheckVulnerabilityAlertsRequestParams,
  ReposCheckVulnerabilityAlertsRequestBody,
  ReposCheckVulnerabilityAlertsResponseBody
>;

export type ReposEnableVulnerabilityAlertsRequestQuery = {};

export type ReposEnableVulnerabilityAlertsRequestHeaders = {};

export type ReposEnableVulnerabilityAlertsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposEnableVulnerabilityAlertsRequestBody = never;

export type ReposEnableVulnerabilityAlertsResponseStatus = 204;

export type ReposEnableVulnerabilityAlertsResponseBody = never;

export type ReposEnableVulnerabilityAlertsResolver = msw.HttpResponseResolver<
  ReposEnableVulnerabilityAlertsRequestParams,
  ReposEnableVulnerabilityAlertsRequestBody,
  ReposEnableVulnerabilityAlertsResponseBody
>;

export type ReposDisableVulnerabilityAlertsRequestQuery = {};

export type ReposDisableVulnerabilityAlertsRequestHeaders = {};

export type ReposDisableVulnerabilityAlertsRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ReposDisableVulnerabilityAlertsRequestBody = never;

export type ReposDisableVulnerabilityAlertsResponseStatus = 204;

export type ReposDisableVulnerabilityAlertsResponseBody = never;

export type ReposDisableVulnerabilityAlertsResolver = msw.HttpResponseResolver<
  ReposDisableVulnerabilityAlertsRequestParams,
  ReposDisableVulnerabilityAlertsRequestBody,
  ReposDisableVulnerabilityAlertsResponseBody
>;

export type ReposDownloadZipballArchiveRequestQuery = {};

export type ReposDownloadZipballArchiveRequestHeaders = {};

export type ReposDownloadZipballArchiveRequestParams = {
  readonly owner: string;
  readonly repo: string;
  readonly ref: string;
};

export type ReposDownloadZipballArchiveRequestBody = never;

export type ReposDownloadZipballArchiveResponseStatus = 302;

export type ReposDownloadZipballArchiveResponseBody = never;

export type ReposDownloadZipballArchiveResolver = msw.HttpResponseResolver<
  ReposDownloadZipballArchiveRequestParams,
  ReposDownloadZipballArchiveRequestBody,
  ReposDownloadZipballArchiveResponseBody
>;

export type ReposCreateUsingTemplateRequestQuery = {};

export type ReposCreateUsingTemplateRequestHeaders = {};

export type ReposCreateUsingTemplateRequestParams = {
  readonly template_owner: string;
  readonly template_repo: string;
};

export type ReposCreateUsingTemplateRequestBody = {
  readonly owner?: string;
  readonly name: string;
  readonly description?: string;
  readonly include_all_branches?: boolean;
  readonly private?: boolean;
};

export type ReposCreateUsingTemplateResponseStatus = 201;

export type ReposCreateUsingTemplateResponseBody = Repository;

export type ReposCreateUsingTemplateResolver = msw.HttpResponseResolver<
  ReposCreateUsingTemplateRequestParams,
  ReposCreateUsingTemplateRequestBody,
  ReposCreateUsingTemplateResponseBody
>;

export type ReposListPublicRequestQuery = { readonly since?: string };

export type ReposListPublicRequestHeaders = {};

export type ReposListPublicRequestParams = {};

export type ReposListPublicRequestBody = never;

export type ReposListPublicResponseStatus = 200 | 304 | 422;

export type ReposListPublicResponseBody =
  | ReadonlyArray<MinimalRepository>
  | never
  | ValidationError;

export type ReposListPublicResolver = msw.HttpResponseResolver<
  ReposListPublicRequestParams,
  ReposListPublicRequestBody,
  ReposListPublicResponseBody
>;

export type ActionsListEnvironmentSecretsRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActionsListEnvironmentSecretsRequestHeaders = {};

export type ActionsListEnvironmentSecretsRequestParams = {
  readonly repository_id: string;
  readonly environment_name: string;
};

export type ActionsListEnvironmentSecretsRequestBody = never;

export type ActionsListEnvironmentSecretsResponseStatus = 200;

export type ActionsListEnvironmentSecretsResponseBody = {
  readonly total_count: number;
  readonly secrets: ReadonlyArray<ActionsSecret>;
};

export type ActionsListEnvironmentSecretsResolver = msw.HttpResponseResolver<
  ActionsListEnvironmentSecretsRequestParams,
  ActionsListEnvironmentSecretsRequestBody,
  ActionsListEnvironmentSecretsResponseBody
>;

export type ActionsGetEnvironmentPublicKeyRequestQuery = {};

export type ActionsGetEnvironmentPublicKeyRequestHeaders = {};

export type ActionsGetEnvironmentPublicKeyRequestParams = {
  readonly repository_id: string;
  readonly environment_name: string;
};

export type ActionsGetEnvironmentPublicKeyRequestBody = never;

export type ActionsGetEnvironmentPublicKeyResponseStatus = 200;

export type ActionsGetEnvironmentPublicKeyResponseBody = ActionsPublicKey;

export type ActionsGetEnvironmentPublicKeyResolver = msw.HttpResponseResolver<
  ActionsGetEnvironmentPublicKeyRequestParams,
  ActionsGetEnvironmentPublicKeyRequestBody,
  ActionsGetEnvironmentPublicKeyResponseBody
>;

export type ActionsGetEnvironmentSecretRequestQuery = {};

export type ActionsGetEnvironmentSecretRequestHeaders = {};

export type ActionsGetEnvironmentSecretRequestParams = {
  readonly repository_id: string;
  readonly environment_name: string;
  readonly secret_name: string;
};

export type ActionsGetEnvironmentSecretRequestBody = never;

export type ActionsGetEnvironmentSecretResponseStatus = 200;

export type ActionsGetEnvironmentSecretResponseBody = ActionsSecret;

export type ActionsGetEnvironmentSecretResolver = msw.HttpResponseResolver<
  ActionsGetEnvironmentSecretRequestParams,
  ActionsGetEnvironmentSecretRequestBody,
  ActionsGetEnvironmentSecretResponseBody
>;

export type ActionsCreateOrUpdateEnvironmentSecretRequestQuery = {};

export type ActionsCreateOrUpdateEnvironmentSecretRequestHeaders = {};

export type ActionsCreateOrUpdateEnvironmentSecretRequestParams = {
  readonly repository_id: string;
  readonly environment_name: string;
  readonly secret_name: string;
};

export type ActionsCreateOrUpdateEnvironmentSecretRequestBody = {
  readonly encrypted_value: string;
  readonly key_id: string;
};

export type ActionsCreateOrUpdateEnvironmentSecretResponseStatus = 201 | 204;

export type ActionsCreateOrUpdateEnvironmentSecretResponseBody =
  | EmptyObject
  | never;

export type ActionsCreateOrUpdateEnvironmentSecretResolver = msw.HttpResponseResolver<
  ActionsCreateOrUpdateEnvironmentSecretRequestParams,
  ActionsCreateOrUpdateEnvironmentSecretRequestBody,
  ActionsCreateOrUpdateEnvironmentSecretResponseBody
>;

export type ActionsDeleteEnvironmentSecretRequestQuery = {};

export type ActionsDeleteEnvironmentSecretRequestHeaders = {};

export type ActionsDeleteEnvironmentSecretRequestParams = {
  readonly repository_id: string;
  readonly environment_name: string;
  readonly secret_name: string;
};

export type ActionsDeleteEnvironmentSecretRequestBody = never;

export type ActionsDeleteEnvironmentSecretResponseStatus = 204;

export type ActionsDeleteEnvironmentSecretResponseBody = never;

export type ActionsDeleteEnvironmentSecretResolver = msw.HttpResponseResolver<
  ActionsDeleteEnvironmentSecretRequestParams,
  ActionsDeleteEnvironmentSecretRequestBody,
  ActionsDeleteEnvironmentSecretResponseBody
>;

export type SearchCodeRequestQuery = {
  readonly q: string;
  readonly sort?: string;
  readonly order?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type SearchCodeRequestHeaders = {};

export type SearchCodeRequestParams = {};

export type SearchCodeRequestBody = never;

export type SearchCodeResponseStatus = 200 | 304 | 403 | 422 | 503;

export type SearchResultTextMatches = ReadonlyArray<{
  readonly object_url?: string;
  readonly object_type?: string | null;
  readonly property?: string;
  readonly fragment?: string;
  readonly matches?: ReadonlyArray<{
    readonly text?: string;
    readonly indices?: ReadonlyArray<number>;
  }>;
}>;

export type CodeSearchResultItem = {
  readonly name: string;
  readonly path: string;
  readonly sha: string;
  readonly url: string;
  readonly git_url: string;
  readonly html_url: string;
  readonly repository: MinimalRepository;
  readonly score: number;
  readonly file_size?: number;
  readonly language?: string | null;
  readonly last_modified_at?: string;
  readonly line_numbers?: ReadonlyArray<string>;
  readonly text_matches?: SearchResultTextMatches;
};

export type SearchCodeResponseBody =
  | {
      readonly total_count: number;
      readonly incomplete_results: boolean;
      readonly items: ReadonlyArray<CodeSearchResultItem>;
    }
  | never
  | BasicError
  | ValidationError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type SearchCodeResolver = msw.HttpResponseResolver<
  SearchCodeRequestParams,
  SearchCodeRequestBody,
  SearchCodeResponseBody
>;

export type SearchCommitsRequestQuery = {
  readonly q: string;
  readonly sort?: string;
  readonly order?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type SearchCommitsRequestHeaders = {};

export type SearchCommitsRequestParams = {};

export type SearchCommitsRequestBody = never;

export type SearchCommitsResponseStatus = 200 | 304;

export type CommitSearchResultItem = {
  readonly url: string;
  readonly sha: string;
  readonly html_url: string;
  readonly comments_url: string;
  readonly commit: {
    readonly author: {
      readonly name: string;
      readonly email: string;
      readonly date: string;
    };
    readonly committer: GitUser;
    readonly comment_count: number;
    readonly message: string;
    readonly tree: { readonly sha: string; readonly url: string };
    readonly url: string;
    readonly verification?: Verification;
  };
  readonly author: SimpleUser;
  readonly committer: GitUser;
  readonly parents: ReadonlyArray<{
    readonly url?: string;
    readonly html_url?: string;
    readonly sha?: string;
  }>;
  readonly repository: MinimalRepository;
  readonly score: number;
  readonly node_id: string;
  readonly text_matches?: SearchResultTextMatches;
};

export type SearchCommitsResponseBody =
  | {
      readonly total_count: number;
      readonly incomplete_results: boolean;
      readonly items: ReadonlyArray<CommitSearchResultItem>;
    }
  | never;

export type SearchCommitsResolver = msw.HttpResponseResolver<
  SearchCommitsRequestParams,
  SearchCommitsRequestBody,
  SearchCommitsResponseBody
>;

export type SearchIssuesAndPullRequestsRequestQuery = {
  readonly q: string;
  readonly sort?: string;
  readonly order?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type SearchIssuesAndPullRequestsRequestHeaders = {};

export type SearchIssuesAndPullRequestsRequestParams = {};

export type SearchIssuesAndPullRequestsRequestBody = never;

export type SearchIssuesAndPullRequestsResponseStatus =
  | 200
  | 304
  | 403
  | 422
  | 503;

export type IssueSearchResultItem = {
  readonly url: string;
  readonly repository_url: string;
  readonly labels_url: string;
  readonly comments_url: string;
  readonly events_url: string;
  readonly html_url: string;
  readonly id: number;
  readonly node_id: string;
  readonly number: number;
  readonly title: string;
  readonly locked: boolean;
  readonly active_lock_reason?: string | null;
  readonly assignees?: ReadonlyArray<SimpleUser> | null;
  readonly user: SimpleUser;
  readonly labels: ReadonlyArray<{
    readonly id?: number;
    readonly node_id?: string;
    readonly url?: string;
    readonly name?: string;
    readonly color?: string;
    readonly default?: boolean;
    readonly description?: string | null;
  }>;
  readonly state: string;
  readonly state_reason?: string | null;
  readonly assignee: SimpleUser;
  readonly milestone: Milestone;
  readonly comments: number;
  readonly created_at: string;
  readonly updated_at: string;
  readonly closed_at: string | null;
  readonly text_matches?: SearchResultTextMatches;
  readonly pull_request?: {
    readonly merged_at?: string | null;
    readonly diff_url: string | null;
    readonly html_url: string | null;
    readonly patch_url: string | null;
    readonly url: string | null;
  };
  readonly body?: string;
  readonly score: number;
  readonly author_association: AuthorAssociation;
  readonly draft?: boolean;
  readonly repository?: Repository;
  readonly body_html?: string;
  readonly body_text?: string;
  readonly timeline_url?: string;
  readonly performed_via_github_app?: GitHubApp;
  readonly reactions?: ReactionRollup;
};

export type SearchIssuesAndPullRequestsResponseBody =
  | {
      readonly total_count: number;
      readonly incomplete_results: boolean;
      readonly items: ReadonlyArray<IssueSearchResultItem>;
    }
  | never
  | BasicError
  | ValidationError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type SearchIssuesAndPullRequestsResolver = msw.HttpResponseResolver<
  SearchIssuesAndPullRequestsRequestParams,
  SearchIssuesAndPullRequestsRequestBody,
  SearchIssuesAndPullRequestsResponseBody
>;

export type SearchLabelsRequestQuery = {
  readonly repository_id: string;
  readonly q: string;
  readonly sort?: string;
  readonly order?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type SearchLabelsRequestHeaders = {};

export type SearchLabelsRequestParams = {};

export type SearchLabelsRequestBody = never;

export type SearchLabelsResponseStatus = 200 | 304 | 403 | 404 | 422;

export type LabelSearchResultItem = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly name: string;
  readonly color: string;
  readonly default: boolean;
  readonly description: string | null;
  readonly score: number;
  readonly text_matches?: SearchResultTextMatches;
};

export type SearchLabelsResponseBody =
  | {
      readonly total_count: number;
      readonly incomplete_results: boolean;
      readonly items: ReadonlyArray<LabelSearchResultItem>;
    }
  | never
  | BasicError
  | ValidationError;

export type SearchLabelsResolver = msw.HttpResponseResolver<
  SearchLabelsRequestParams,
  SearchLabelsRequestBody,
  SearchLabelsResponseBody
>;

export type SearchReposRequestQuery = {
  readonly q: string;
  readonly sort?: string;
  readonly order?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type SearchReposRequestHeaders = {};

export type SearchReposRequestParams = {};

export type SearchReposRequestBody = never;

export type SearchReposResponseStatus = 200 | 304 | 422 | 503;

export type RepoSearchResultItem = {
  readonly id: number;
  readonly node_id: string;
  readonly name: string;
  readonly full_name: string;
  readonly owner: SimpleUser;
  readonly private: boolean;
  readonly html_url: string;
  readonly description: string | null;
  readonly fork: boolean;
  readonly url: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly pushed_at: string;
  readonly homepage: string | null;
  readonly size: number;
  readonly stargazers_count: number;
  readonly watchers_count: number;
  readonly language: string | null;
  readonly forks_count: number;
  readonly open_issues_count: number;
  readonly master_branch?: string;
  readonly default_branch: string;
  readonly score: number;
  readonly forks_url: string;
  readonly keys_url: string;
  readonly collaborators_url: string;
  readonly teams_url: string;
  readonly hooks_url: string;
  readonly issue_events_url: string;
  readonly events_url: string;
  readonly assignees_url: string;
  readonly branches_url: string;
  readonly tags_url: string;
  readonly blobs_url: string;
  readonly git_tags_url: string;
  readonly git_refs_url: string;
  readonly trees_url: string;
  readonly statuses_url: string;
  readonly languages_url: string;
  readonly stargazers_url: string;
  readonly contributors_url: string;
  readonly subscribers_url: string;
  readonly subscription_url: string;
  readonly commits_url: string;
  readonly git_commits_url: string;
  readonly comments_url: string;
  readonly issue_comment_url: string;
  readonly contents_url: string;
  readonly compare_url: string;
  readonly merges_url: string;
  readonly archive_url: string;
  readonly downloads_url: string;
  readonly issues_url: string;
  readonly pulls_url: string;
  readonly milestones_url: string;
  readonly notifications_url: string;
  readonly labels_url: string;
  readonly releases_url: string;
  readonly deployments_url: string;
  readonly git_url: string;
  readonly ssh_url: string;
  readonly clone_url: string;
  readonly svn_url: string;
  readonly forks: number;
  readonly open_issues: number;
  readonly watchers: number;
  readonly topics?: ReadonlyArray<string>;
  readonly mirror_url: string | null;
  readonly has_issues: boolean;
  readonly has_projects: boolean;
  readonly has_pages: boolean;
  readonly has_wiki: boolean;
  readonly has_downloads: boolean;
  readonly archived: boolean;
  readonly disabled: boolean;
  readonly visibility?: string;
  readonly license: LicenseSimple;
  readonly permissions?: {
    readonly admin: boolean;
    readonly maintain?: boolean;
    readonly push: boolean;
    readonly triage?: boolean;
    readonly pull: boolean;
  };
  readonly text_matches?: SearchResultTextMatches;
  readonly temp_clone_token?: string;
  readonly allow_merge_commit?: boolean;
  readonly allow_squash_merge?: boolean;
  readonly allow_rebase_merge?: boolean;
  readonly allow_auto_merge?: boolean;
  readonly delete_branch_on_merge?: boolean;
  readonly allow_forking?: boolean;
  readonly is_template?: boolean;
  readonly web_commit_signoff_required?: boolean;
};

export type SearchReposResponseBody =
  | {
      readonly total_count: number;
      readonly incomplete_results: boolean;
      readonly items: ReadonlyArray<RepoSearchResultItem>;
    }
  | never
  | ValidationError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type SearchReposResolver = msw.HttpResponseResolver<
  SearchReposRequestParams,
  SearchReposRequestBody,
  SearchReposResponseBody
>;

export type SearchTopicsRequestQuery = {
  readonly q: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type SearchTopicsRequestHeaders = {};

export type SearchTopicsRequestParams = {};

export type SearchTopicsRequestBody = never;

export type SearchTopicsResponseStatus = 200 | 304;

export type TopicSearchResultItem = {
  readonly name: string;
  readonly display_name: string | null;
  readonly short_description: string | null;
  readonly description: string | null;
  readonly created_by: string | null;
  readonly released: string | null;
  readonly created_at: string;
  readonly updated_at: string;
  readonly featured: boolean;
  readonly curated: boolean;
  readonly score: number;
  readonly repository_count?: number | null;
  readonly logo_url?: string | null;
  readonly text_matches?: SearchResultTextMatches;
  readonly related?: ReadonlyArray<{
    readonly topic_relation?: {
      readonly id?: number;
      readonly name?: string;
      readonly topic_id?: number;
      readonly relation_type?: string;
    };
  }> | null;
  readonly aliases?: ReadonlyArray<{
    readonly topic_relation?: {
      readonly id?: number;
      readonly name?: string;
      readonly topic_id?: number;
      readonly relation_type?: string;
    };
  }> | null;
};

export type SearchTopicsResponseBody =
  | {
      readonly total_count: number;
      readonly incomplete_results: boolean;
      readonly items: ReadonlyArray<TopicSearchResultItem>;
    }
  | never;

export type SearchTopicsResolver = msw.HttpResponseResolver<
  SearchTopicsRequestParams,
  SearchTopicsRequestBody,
  SearchTopicsResponseBody
>;

export type SearchUsersRequestQuery = {
  readonly q: string;
  readonly sort?: string;
  readonly order?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type SearchUsersRequestHeaders = {};

export type SearchUsersRequestParams = {};

export type SearchUsersRequestBody = never;

export type SearchUsersResponseStatus = 200 | 304 | 422 | 503;

export type UserSearchResultItem = {
  readonly login: string;
  readonly id: number;
  readonly node_id: string;
  readonly avatar_url: string;
  readonly gravatar_id: string | null;
  readonly url: string;
  readonly html_url: string;
  readonly followers_url: string;
  readonly subscriptions_url: string;
  readonly organizations_url: string;
  readonly repos_url: string;
  readonly received_events_url: string;
  readonly type: string;
  readonly score: number;
  readonly following_url: string;
  readonly gists_url: string;
  readonly starred_url: string;
  readonly events_url: string;
  readonly public_repos?: number;
  readonly public_gists?: number;
  readonly followers?: number;
  readonly following?: number;
  readonly created_at?: string;
  readonly updated_at?: string;
  readonly name?: string | null;
  readonly bio?: string | null;
  readonly email?: string | null;
  readonly location?: string | null;
  readonly site_admin: boolean;
  readonly hireable?: boolean | null;
  readonly text_matches?: SearchResultTextMatches;
  readonly blog?: string | null;
  readonly company?: string | null;
  readonly suspended_at?: string | null;
};

export type SearchUsersResponseBody =
  | {
      readonly total_count: number;
      readonly incomplete_results: boolean;
      readonly items: ReadonlyArray<UserSearchResultItem>;
    }
  | never
  | ValidationError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type SearchUsersResolver = msw.HttpResponseResolver<
  SearchUsersRequestParams,
  SearchUsersRequestBody,
  SearchUsersResponseBody
>;

export type TeamsGetLegacyRequestQuery = {};

export type TeamsGetLegacyRequestHeaders = {};

export type TeamsGetLegacyRequestParams = { readonly team_id: string };

export type TeamsGetLegacyRequestBody = never;

export type TeamsGetLegacyResponseStatus = 200 | 404;

export type TeamsGetLegacyResponseBody = FullTeam | BasicError;

export type TeamsGetLegacyResolver = msw.HttpResponseResolver<
  TeamsGetLegacyRequestParams,
  TeamsGetLegacyRequestBody,
  TeamsGetLegacyResponseBody
>;

export type TeamsUpdateLegacyRequestQuery = {};

export type TeamsUpdateLegacyRequestHeaders = {};

export type TeamsUpdateLegacyRequestParams = { readonly team_id: string };

export type TeamsUpdateLegacyRequestBody = {
  readonly name: string;
  readonly description?: string;
  readonly privacy?: 'secret' | 'closed';
  readonly permission?: 'pull' | 'push' | 'admin';
  readonly parent_team_id?: number | null;
};

export type TeamsUpdateLegacyResponseStatus = 200 | 201 | 403 | 404 | 422;

export type TeamsUpdateLegacyResponseBody =
  | FullTeam
  | BasicError
  | ValidationError;

export type TeamsUpdateLegacyResolver = msw.HttpResponseResolver<
  TeamsUpdateLegacyRequestParams,
  TeamsUpdateLegacyRequestBody,
  TeamsUpdateLegacyResponseBody
>;

export type TeamsDeleteLegacyRequestQuery = {};

export type TeamsDeleteLegacyRequestHeaders = {};

export type TeamsDeleteLegacyRequestParams = { readonly team_id: string };

export type TeamsDeleteLegacyRequestBody = never;

export type TeamsDeleteLegacyResponseStatus = 204 | 404 | 422;

export type TeamsDeleteLegacyResponseBody =
  | never
  | BasicError
  | ValidationError;

export type TeamsDeleteLegacyResolver = msw.HttpResponseResolver<
  TeamsDeleteLegacyRequestParams,
  TeamsDeleteLegacyRequestBody,
  TeamsDeleteLegacyResponseBody
>;

export type TeamsListDiscussionsLegacyRequestQuery = {
  readonly direction?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type TeamsListDiscussionsLegacyRequestHeaders = {};

export type TeamsListDiscussionsLegacyRequestParams = {
  readonly team_id: string;
};

export type TeamsListDiscussionsLegacyRequestBody = never;

export type TeamsListDiscussionsLegacyResponseStatus = 200;

export type TeamsListDiscussionsLegacyResponseBody = ReadonlyArray<TeamDiscussion>;

export type TeamsListDiscussionsLegacyResolver = msw.HttpResponseResolver<
  TeamsListDiscussionsLegacyRequestParams,
  TeamsListDiscussionsLegacyRequestBody,
  TeamsListDiscussionsLegacyResponseBody
>;

export type TeamsCreateDiscussionLegacyRequestQuery = {};

export type TeamsCreateDiscussionLegacyRequestHeaders = {};

export type TeamsCreateDiscussionLegacyRequestParams = {
  readonly team_id: string;
};

export type TeamsCreateDiscussionLegacyRequestBody = {
  readonly title: string;
  readonly body: string;
  readonly private?: boolean;
};

export type TeamsCreateDiscussionLegacyResponseStatus = 201;

export type TeamsCreateDiscussionLegacyResponseBody = TeamDiscussion;

export type TeamsCreateDiscussionLegacyResolver = msw.HttpResponseResolver<
  TeamsCreateDiscussionLegacyRequestParams,
  TeamsCreateDiscussionLegacyRequestBody,
  TeamsCreateDiscussionLegacyResponseBody
>;

export type TeamsGetDiscussionLegacyRequestQuery = {};

export type TeamsGetDiscussionLegacyRequestHeaders = {};

export type TeamsGetDiscussionLegacyRequestParams = {
  readonly team_id: string;
  readonly discussion_number: string;
};

export type TeamsGetDiscussionLegacyRequestBody = never;

export type TeamsGetDiscussionLegacyResponseStatus = 200;

export type TeamsGetDiscussionLegacyResponseBody = TeamDiscussion;

export type TeamsGetDiscussionLegacyResolver = msw.HttpResponseResolver<
  TeamsGetDiscussionLegacyRequestParams,
  TeamsGetDiscussionLegacyRequestBody,
  TeamsGetDiscussionLegacyResponseBody
>;

export type TeamsUpdateDiscussionLegacyRequestQuery = {};

export type TeamsUpdateDiscussionLegacyRequestHeaders = {};

export type TeamsUpdateDiscussionLegacyRequestParams = {
  readonly team_id: string;
  readonly discussion_number: string;
};

export type TeamsUpdateDiscussionLegacyRequestBody =
  | { readonly title?: string; readonly body?: string }
  | undefined;

export type TeamsUpdateDiscussionLegacyResponseStatus = 200;

export type TeamsUpdateDiscussionLegacyResponseBody = TeamDiscussion;

export type TeamsUpdateDiscussionLegacyResolver = msw.HttpResponseResolver<
  TeamsUpdateDiscussionLegacyRequestParams,
  TeamsUpdateDiscussionLegacyRequestBody,
  TeamsUpdateDiscussionLegacyResponseBody
>;

export type TeamsDeleteDiscussionLegacyRequestQuery = {};

export type TeamsDeleteDiscussionLegacyRequestHeaders = {};

export type TeamsDeleteDiscussionLegacyRequestParams = {
  readonly team_id: string;
  readonly discussion_number: string;
};

export type TeamsDeleteDiscussionLegacyRequestBody = never;

export type TeamsDeleteDiscussionLegacyResponseStatus = 204;

export type TeamsDeleteDiscussionLegacyResponseBody = never;

export type TeamsDeleteDiscussionLegacyResolver = msw.HttpResponseResolver<
  TeamsDeleteDiscussionLegacyRequestParams,
  TeamsDeleteDiscussionLegacyRequestBody,
  TeamsDeleteDiscussionLegacyResponseBody
>;

export type TeamsListDiscussionCommentsLegacyRequestQuery = {
  readonly direction?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type TeamsListDiscussionCommentsLegacyRequestHeaders = {};

export type TeamsListDiscussionCommentsLegacyRequestParams = {
  readonly team_id: string;
  readonly discussion_number: string;
};

export type TeamsListDiscussionCommentsLegacyRequestBody = never;

export type TeamsListDiscussionCommentsLegacyResponseStatus = 200;

export type TeamsListDiscussionCommentsLegacyResponseBody = ReadonlyArray<TeamDiscussionComment>;

export type TeamsListDiscussionCommentsLegacyResolver = msw.HttpResponseResolver<
  TeamsListDiscussionCommentsLegacyRequestParams,
  TeamsListDiscussionCommentsLegacyRequestBody,
  TeamsListDiscussionCommentsLegacyResponseBody
>;

export type TeamsCreateDiscussionCommentLegacyRequestQuery = {};

export type TeamsCreateDiscussionCommentLegacyRequestHeaders = {};

export type TeamsCreateDiscussionCommentLegacyRequestParams = {
  readonly team_id: string;
  readonly discussion_number: string;
};

export type TeamsCreateDiscussionCommentLegacyRequestBody = {
  readonly body: string;
};

export type TeamsCreateDiscussionCommentLegacyResponseStatus = 201;

export type TeamsCreateDiscussionCommentLegacyResponseBody = TeamDiscussionComment;

export type TeamsCreateDiscussionCommentLegacyResolver = msw.HttpResponseResolver<
  TeamsCreateDiscussionCommentLegacyRequestParams,
  TeamsCreateDiscussionCommentLegacyRequestBody,
  TeamsCreateDiscussionCommentLegacyResponseBody
>;

export type TeamsGetDiscussionCommentLegacyRequestQuery = {};

export type TeamsGetDiscussionCommentLegacyRequestHeaders = {};

export type TeamsGetDiscussionCommentLegacyRequestParams = {
  readonly team_id: string;
  readonly discussion_number: string;
  readonly comment_number: string;
};

export type TeamsGetDiscussionCommentLegacyRequestBody = never;

export type TeamsGetDiscussionCommentLegacyResponseStatus = 200;

export type TeamsGetDiscussionCommentLegacyResponseBody = TeamDiscussionComment;

export type TeamsGetDiscussionCommentLegacyResolver = msw.HttpResponseResolver<
  TeamsGetDiscussionCommentLegacyRequestParams,
  TeamsGetDiscussionCommentLegacyRequestBody,
  TeamsGetDiscussionCommentLegacyResponseBody
>;

export type TeamsUpdateDiscussionCommentLegacyRequestQuery = {};

export type TeamsUpdateDiscussionCommentLegacyRequestHeaders = {};

export type TeamsUpdateDiscussionCommentLegacyRequestParams = {
  readonly team_id: string;
  readonly discussion_number: string;
  readonly comment_number: string;
};

export type TeamsUpdateDiscussionCommentLegacyRequestBody = {
  readonly body: string;
};

export type TeamsUpdateDiscussionCommentLegacyResponseStatus = 200;

export type TeamsUpdateDiscussionCommentLegacyResponseBody = TeamDiscussionComment;

export type TeamsUpdateDiscussionCommentLegacyResolver = msw.HttpResponseResolver<
  TeamsUpdateDiscussionCommentLegacyRequestParams,
  TeamsUpdateDiscussionCommentLegacyRequestBody,
  TeamsUpdateDiscussionCommentLegacyResponseBody
>;

export type TeamsDeleteDiscussionCommentLegacyRequestQuery = {};

export type TeamsDeleteDiscussionCommentLegacyRequestHeaders = {};

export type TeamsDeleteDiscussionCommentLegacyRequestParams = {
  readonly team_id: string;
  readonly discussion_number: string;
  readonly comment_number: string;
};

export type TeamsDeleteDiscussionCommentLegacyRequestBody = never;

export type TeamsDeleteDiscussionCommentLegacyResponseStatus = 204;

export type TeamsDeleteDiscussionCommentLegacyResponseBody = never;

export type TeamsDeleteDiscussionCommentLegacyResolver = msw.HttpResponseResolver<
  TeamsDeleteDiscussionCommentLegacyRequestParams,
  TeamsDeleteDiscussionCommentLegacyRequestBody,
  TeamsDeleteDiscussionCommentLegacyResponseBody
>;

export type ReactionsListForTeamDiscussionCommentLegacyRequestQuery = {
  readonly content?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ReactionsListForTeamDiscussionCommentLegacyRequestHeaders = {};

export type ReactionsListForTeamDiscussionCommentLegacyRequestParams = {
  readonly team_id: string;
  readonly discussion_number: string;
  readonly comment_number: string;
};

export type ReactionsListForTeamDiscussionCommentLegacyRequestBody = never;

export type ReactionsListForTeamDiscussionCommentLegacyResponseStatus = 200;

export type ReactionsListForTeamDiscussionCommentLegacyResponseBody = ReadonlyArray<Reaction>;

export type ReactionsListForTeamDiscussionCommentLegacyResolver = msw.HttpResponseResolver<
  ReactionsListForTeamDiscussionCommentLegacyRequestParams,
  ReactionsListForTeamDiscussionCommentLegacyRequestBody,
  ReactionsListForTeamDiscussionCommentLegacyResponseBody
>;

export type ReactionsCreateForTeamDiscussionCommentLegacyRequestQuery = {};

export type ReactionsCreateForTeamDiscussionCommentLegacyRequestHeaders = {};

export type ReactionsCreateForTeamDiscussionCommentLegacyRequestParams = {
  readonly team_id: string;
  readonly discussion_number: string;
  readonly comment_number: string;
};

export type ReactionsCreateForTeamDiscussionCommentLegacyRequestBody = {
  readonly content:
    | '+1'
    | '-1'
    | 'laugh'
    | 'confused'
    | 'heart'
    | 'hooray'
    | 'rocket'
    | 'eyes';
};

export type ReactionsCreateForTeamDiscussionCommentLegacyResponseStatus = 201;

export type ReactionsCreateForTeamDiscussionCommentLegacyResponseBody = Reaction;

export type ReactionsCreateForTeamDiscussionCommentLegacyResolver = msw.HttpResponseResolver<
  ReactionsCreateForTeamDiscussionCommentLegacyRequestParams,
  ReactionsCreateForTeamDiscussionCommentLegacyRequestBody,
  ReactionsCreateForTeamDiscussionCommentLegacyResponseBody
>;

export type ReactionsListForTeamDiscussionLegacyRequestQuery = {
  readonly content?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ReactionsListForTeamDiscussionLegacyRequestHeaders = {};

export type ReactionsListForTeamDiscussionLegacyRequestParams = {
  readonly team_id: string;
  readonly discussion_number: string;
};

export type ReactionsListForTeamDiscussionLegacyRequestBody = never;

export type ReactionsListForTeamDiscussionLegacyResponseStatus = 200;

export type ReactionsListForTeamDiscussionLegacyResponseBody = ReadonlyArray<Reaction>;

export type ReactionsListForTeamDiscussionLegacyResolver = msw.HttpResponseResolver<
  ReactionsListForTeamDiscussionLegacyRequestParams,
  ReactionsListForTeamDiscussionLegacyRequestBody,
  ReactionsListForTeamDiscussionLegacyResponseBody
>;

export type ReactionsCreateForTeamDiscussionLegacyRequestQuery = {};

export type ReactionsCreateForTeamDiscussionLegacyRequestHeaders = {};

export type ReactionsCreateForTeamDiscussionLegacyRequestParams = {
  readonly team_id: string;
  readonly discussion_number: string;
};

export type ReactionsCreateForTeamDiscussionLegacyRequestBody = {
  readonly content:
    | '+1'
    | '-1'
    | 'laugh'
    | 'confused'
    | 'heart'
    | 'hooray'
    | 'rocket'
    | 'eyes';
};

export type ReactionsCreateForTeamDiscussionLegacyResponseStatus = 201;

export type ReactionsCreateForTeamDiscussionLegacyResponseBody = Reaction;

export type ReactionsCreateForTeamDiscussionLegacyResolver = msw.HttpResponseResolver<
  ReactionsCreateForTeamDiscussionLegacyRequestParams,
  ReactionsCreateForTeamDiscussionLegacyRequestBody,
  ReactionsCreateForTeamDiscussionLegacyResponseBody
>;

export type TeamsListPendingInvitationsLegacyRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type TeamsListPendingInvitationsLegacyRequestHeaders = {};

export type TeamsListPendingInvitationsLegacyRequestParams = {
  readonly team_id: string;
};

export type TeamsListPendingInvitationsLegacyRequestBody = never;

export type TeamsListPendingInvitationsLegacyResponseStatus = 200;

export type TeamsListPendingInvitationsLegacyResponseBody = ReadonlyArray<OrganizationInvitation>;

export type TeamsListPendingInvitationsLegacyResolver = msw.HttpResponseResolver<
  TeamsListPendingInvitationsLegacyRequestParams,
  TeamsListPendingInvitationsLegacyRequestBody,
  TeamsListPendingInvitationsLegacyResponseBody
>;

export type TeamsListMembersLegacyRequestQuery = {
  readonly role?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type TeamsListMembersLegacyRequestHeaders = {};

export type TeamsListMembersLegacyRequestParams = { readonly team_id: string };

export type TeamsListMembersLegacyRequestBody = never;

export type TeamsListMembersLegacyResponseStatus = 200 | 404;

export type TeamsListMembersLegacyResponseBody =
  | ReadonlyArray<SimpleUser>
  | BasicError;

export type TeamsListMembersLegacyResolver = msw.HttpResponseResolver<
  TeamsListMembersLegacyRequestParams,
  TeamsListMembersLegacyRequestBody,
  TeamsListMembersLegacyResponseBody
>;

export type TeamsGetMemberLegacyRequestQuery = {};

export type TeamsGetMemberLegacyRequestHeaders = {};

export type TeamsGetMemberLegacyRequestParams = {
  readonly team_id: string;
  readonly username: string;
};

export type TeamsGetMemberLegacyRequestBody = never;

export type TeamsGetMemberLegacyResponseStatus = 204 | 404;

export type TeamsGetMemberLegacyResponseBody = never;

export type TeamsGetMemberLegacyResolver = msw.HttpResponseResolver<
  TeamsGetMemberLegacyRequestParams,
  TeamsGetMemberLegacyRequestBody,
  TeamsGetMemberLegacyResponseBody
>;

export type TeamsAddMemberLegacyRequestQuery = {};

export type TeamsAddMemberLegacyRequestHeaders = {};

export type TeamsAddMemberLegacyRequestParams = {
  readonly team_id: string;
  readonly username: string;
};

export type TeamsAddMemberLegacyRequestBody = never;

export type TeamsAddMemberLegacyResponseStatus = 204 | 403 | 404 | 422;

export type TeamsAddMemberLegacyResponseBody = never | BasicError;

export type TeamsAddMemberLegacyResolver = msw.HttpResponseResolver<
  TeamsAddMemberLegacyRequestParams,
  TeamsAddMemberLegacyRequestBody,
  TeamsAddMemberLegacyResponseBody
>;

export type TeamsRemoveMemberLegacyRequestQuery = {};

export type TeamsRemoveMemberLegacyRequestHeaders = {};

export type TeamsRemoveMemberLegacyRequestParams = {
  readonly team_id: string;
  readonly username: string;
};

export type TeamsRemoveMemberLegacyRequestBody = never;

export type TeamsRemoveMemberLegacyResponseStatus = 204 | 404;

export type TeamsRemoveMemberLegacyResponseBody = never;

export type TeamsRemoveMemberLegacyResolver = msw.HttpResponseResolver<
  TeamsRemoveMemberLegacyRequestParams,
  TeamsRemoveMemberLegacyRequestBody,
  TeamsRemoveMemberLegacyResponseBody
>;

export type TeamsGetMembershipForUserLegacyRequestQuery = {};

export type TeamsGetMembershipForUserLegacyRequestHeaders = {};

export type TeamsGetMembershipForUserLegacyRequestParams = {
  readonly team_id: string;
  readonly username: string;
};

export type TeamsGetMembershipForUserLegacyRequestBody = never;

export type TeamsGetMembershipForUserLegacyResponseStatus = 200 | 404;

export type TeamsGetMembershipForUserLegacyResponseBody =
  | TeamMembership
  | BasicError;

export type TeamsGetMembershipForUserLegacyResolver = msw.HttpResponseResolver<
  TeamsGetMembershipForUserLegacyRequestParams,
  TeamsGetMembershipForUserLegacyRequestBody,
  TeamsGetMembershipForUserLegacyResponseBody
>;

export type TeamsAddOrUpdateMembershipForUserLegacyRequestQuery = {};

export type TeamsAddOrUpdateMembershipForUserLegacyRequestHeaders = {};

export type TeamsAddOrUpdateMembershipForUserLegacyRequestParams = {
  readonly team_id: string;
  readonly username: string;
};

export type TeamsAddOrUpdateMembershipForUserLegacyRequestBody =
  | { readonly role?: 'member' | 'maintainer' }
  | undefined;

export type TeamsAddOrUpdateMembershipForUserLegacyResponseStatus =
  | 200
  | 403
  | 404
  | 422;

export type TeamsAddOrUpdateMembershipForUserLegacyResponseBody =
  | TeamMembership
  | never
  | BasicError;

export type TeamsAddOrUpdateMembershipForUserLegacyResolver = msw.HttpResponseResolver<
  TeamsAddOrUpdateMembershipForUserLegacyRequestParams,
  TeamsAddOrUpdateMembershipForUserLegacyRequestBody,
  TeamsAddOrUpdateMembershipForUserLegacyResponseBody
>;

export type TeamsRemoveMembershipForUserLegacyRequestQuery = {};

export type TeamsRemoveMembershipForUserLegacyRequestHeaders = {};

export type TeamsRemoveMembershipForUserLegacyRequestParams = {
  readonly team_id: string;
  readonly username: string;
};

export type TeamsRemoveMembershipForUserLegacyRequestBody = never;

export type TeamsRemoveMembershipForUserLegacyResponseStatus = 204 | 403;

export type TeamsRemoveMembershipForUserLegacyResponseBody = never;

export type TeamsRemoveMembershipForUserLegacyResolver = msw.HttpResponseResolver<
  TeamsRemoveMembershipForUserLegacyRequestParams,
  TeamsRemoveMembershipForUserLegacyRequestBody,
  TeamsRemoveMembershipForUserLegacyResponseBody
>;

export type TeamsListProjectsLegacyRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type TeamsListProjectsLegacyRequestHeaders = {};

export type TeamsListProjectsLegacyRequestParams = { readonly team_id: string };

export type TeamsListProjectsLegacyRequestBody = never;

export type TeamsListProjectsLegacyResponseStatus = 200 | 404;

export type TeamsListProjectsLegacyResponseBody =
  | ReadonlyArray<TeamProject>
  | BasicError;

export type TeamsListProjectsLegacyResolver = msw.HttpResponseResolver<
  TeamsListProjectsLegacyRequestParams,
  TeamsListProjectsLegacyRequestBody,
  TeamsListProjectsLegacyResponseBody
>;

export type TeamsCheckPermissionsForProjectLegacyRequestQuery = {};

export type TeamsCheckPermissionsForProjectLegacyRequestHeaders = {};

export type TeamsCheckPermissionsForProjectLegacyRequestParams = {
  readonly team_id: string;
  readonly project_id: string;
};

export type TeamsCheckPermissionsForProjectLegacyRequestBody = never;

export type TeamsCheckPermissionsForProjectLegacyResponseStatus = 200 | 404;

export type TeamsCheckPermissionsForProjectLegacyResponseBody =
  | TeamProject
  | never;

export type TeamsCheckPermissionsForProjectLegacyResolver = msw.HttpResponseResolver<
  TeamsCheckPermissionsForProjectLegacyRequestParams,
  TeamsCheckPermissionsForProjectLegacyRequestBody,
  TeamsCheckPermissionsForProjectLegacyResponseBody
>;

export type TeamsAddOrUpdateProjectPermissionsLegacyRequestQuery = {};

export type TeamsAddOrUpdateProjectPermissionsLegacyRequestHeaders = {};

export type TeamsAddOrUpdateProjectPermissionsLegacyRequestParams = {
  readonly team_id: string;
  readonly project_id: string;
};

export type TeamsAddOrUpdateProjectPermissionsLegacyRequestBody =
  | { readonly permission?: 'read' | 'write' | 'admin' }
  | undefined;

export type TeamsAddOrUpdateProjectPermissionsLegacyResponseStatus =
  | 204
  | 403
  | 404
  | 422;

export type TeamsAddOrUpdateProjectPermissionsLegacyResponseBody =
  | never
  | { readonly message?: string; readonly documentation_url?: string }
  | BasicError
  | ValidationError;

export type TeamsAddOrUpdateProjectPermissionsLegacyResolver = msw.HttpResponseResolver<
  TeamsAddOrUpdateProjectPermissionsLegacyRequestParams,
  TeamsAddOrUpdateProjectPermissionsLegacyRequestBody,
  TeamsAddOrUpdateProjectPermissionsLegacyResponseBody
>;

export type TeamsRemoveProjectLegacyRequestQuery = {};

export type TeamsRemoveProjectLegacyRequestHeaders = {};

export type TeamsRemoveProjectLegacyRequestParams = {
  readonly team_id: string;
  readonly project_id: string;
};

export type TeamsRemoveProjectLegacyRequestBody = never;

export type TeamsRemoveProjectLegacyResponseStatus = 204 | 404 | 422;

export type TeamsRemoveProjectLegacyResponseBody =
  | never
  | BasicError
  | ValidationError;

export type TeamsRemoveProjectLegacyResolver = msw.HttpResponseResolver<
  TeamsRemoveProjectLegacyRequestParams,
  TeamsRemoveProjectLegacyRequestBody,
  TeamsRemoveProjectLegacyResponseBody
>;

export type TeamsListReposLegacyRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type TeamsListReposLegacyRequestHeaders = {};

export type TeamsListReposLegacyRequestParams = { readonly team_id: string };

export type TeamsListReposLegacyRequestBody = never;

export type TeamsListReposLegacyResponseStatus = 200 | 404;

export type TeamsListReposLegacyResponseBody =
  | ReadonlyArray<MinimalRepository>
  | BasicError;

export type TeamsListReposLegacyResolver = msw.HttpResponseResolver<
  TeamsListReposLegacyRequestParams,
  TeamsListReposLegacyRequestBody,
  TeamsListReposLegacyResponseBody
>;

export type TeamsCheckPermissionsForRepoLegacyRequestQuery = {};

export type TeamsCheckPermissionsForRepoLegacyRequestHeaders = {};

export type TeamsCheckPermissionsForRepoLegacyRequestParams = {
  readonly team_id: string;
  readonly owner: string;
  readonly repo: string;
};

export type TeamsCheckPermissionsForRepoLegacyRequestBody = never;

export type TeamsCheckPermissionsForRepoLegacyResponseStatus = 200 | 204 | 404;

export type TeamsCheckPermissionsForRepoLegacyResponseBody =
  | TeamRepository
  | never;

export type TeamsCheckPermissionsForRepoLegacyResolver = msw.HttpResponseResolver<
  TeamsCheckPermissionsForRepoLegacyRequestParams,
  TeamsCheckPermissionsForRepoLegacyRequestBody,
  TeamsCheckPermissionsForRepoLegacyResponseBody
>;

export type TeamsAddOrUpdateRepoPermissionsLegacyRequestQuery = {};

export type TeamsAddOrUpdateRepoPermissionsLegacyRequestHeaders = {};

export type TeamsAddOrUpdateRepoPermissionsLegacyRequestParams = {
  readonly team_id: string;
  readonly owner: string;
  readonly repo: string;
};

export type TeamsAddOrUpdateRepoPermissionsLegacyRequestBody =
  | { readonly permission?: 'pull' | 'push' | 'admin' }
  | undefined;

export type TeamsAddOrUpdateRepoPermissionsLegacyResponseStatus =
  | 204
  | 403
  | 422;

export type TeamsAddOrUpdateRepoPermissionsLegacyResponseBody =
  | never
  | BasicError
  | ValidationError;

export type TeamsAddOrUpdateRepoPermissionsLegacyResolver = msw.HttpResponseResolver<
  TeamsAddOrUpdateRepoPermissionsLegacyRequestParams,
  TeamsAddOrUpdateRepoPermissionsLegacyRequestBody,
  TeamsAddOrUpdateRepoPermissionsLegacyResponseBody
>;

export type TeamsRemoveRepoLegacyRequestQuery = {};

export type TeamsRemoveRepoLegacyRequestHeaders = {};

export type TeamsRemoveRepoLegacyRequestParams = {
  readonly team_id: string;
  readonly owner: string;
  readonly repo: string;
};

export type TeamsRemoveRepoLegacyRequestBody = never;

export type TeamsRemoveRepoLegacyResponseStatus = 204;

export type TeamsRemoveRepoLegacyResponseBody = never;

export type TeamsRemoveRepoLegacyResolver = msw.HttpResponseResolver<
  TeamsRemoveRepoLegacyRequestParams,
  TeamsRemoveRepoLegacyRequestBody,
  TeamsRemoveRepoLegacyResponseBody
>;

export type TeamsListChildLegacyRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type TeamsListChildLegacyRequestHeaders = {};

export type TeamsListChildLegacyRequestParams = { readonly team_id: string };

export type TeamsListChildLegacyRequestBody = never;

export type TeamsListChildLegacyResponseStatus = 200 | 403 | 404 | 422;

export type TeamsListChildLegacyResponseBody =
  | ReadonlyArray<Team>
  | BasicError
  | ValidationError;

export type TeamsListChildLegacyResolver = msw.HttpResponseResolver<
  TeamsListChildLegacyRequestParams,
  TeamsListChildLegacyRequestBody,
  TeamsListChildLegacyResponseBody
>;

export type UsersGetAuthenticatedRequestQuery = {};

export type UsersGetAuthenticatedRequestHeaders = {};

export type UsersGetAuthenticatedRequestParams = {};

export type UsersGetAuthenticatedRequestBody = never;

export type UsersGetAuthenticatedResponseStatus = 200 | 304 | 401 | 403;

export type PrivateUser = {
  readonly login: string;
  readonly id: number;
  readonly node_id: string;
  readonly avatar_url: string;
  readonly gravatar_id: string | null;
  readonly url: string;
  readonly html_url: string;
  readonly followers_url: string;
  readonly following_url: string;
  readonly gists_url: string;
  readonly starred_url: string;
  readonly subscriptions_url: string;
  readonly organizations_url: string;
  readonly repos_url: string;
  readonly events_url: string;
  readonly received_events_url: string;
  readonly type: string;
  readonly site_admin: boolean;
  readonly name: string | null;
  readonly company: string | null;
  readonly blog: string | null;
  readonly location: string | null;
  readonly email: string | null;
  readonly hireable: boolean | null;
  readonly bio: string | null;
  readonly twitter_username?: string | null;
  readonly public_repos: number;
  readonly public_gists: number;
  readonly followers: number;
  readonly following: number;
  readonly created_at: string;
  readonly updated_at: string;
  readonly private_gists: number;
  readonly total_private_repos: number;
  readonly owned_private_repos: number;
  readonly disk_usage: number;
  readonly collaborators: number;
  readonly two_factor_authentication: boolean;
  readonly plan?: {
    readonly collaborators: number;
    readonly name: string;
    readonly space: number;
    readonly private_repos: number;
  };
  readonly suspended_at?: string | null;
  readonly business_plus?: boolean;
  readonly ldap_dn?: string;
};

export type UsersGetAuthenticatedResponseBody =
  | PrivateUser
  | PublicUser
  | never
  | BasicError;

export type UsersGetAuthenticatedResolver = msw.HttpResponseResolver<
  UsersGetAuthenticatedRequestParams,
  UsersGetAuthenticatedRequestBody,
  UsersGetAuthenticatedResponseBody
>;

export type UsersUpdateAuthenticatedRequestQuery = {};

export type UsersUpdateAuthenticatedRequestHeaders = {};

export type UsersUpdateAuthenticatedRequestParams = {};

export type UsersUpdateAuthenticatedRequestBody =
  | {
      readonly name?: string;
      readonly email?: string;
      readonly blog?: string;
      readonly twitter_username?: string | null;
      readonly company?: string;
      readonly location?: string;
      readonly hireable?: boolean;
      readonly bio?: string;
    }
  | undefined;

export type UsersUpdateAuthenticatedResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404
  | 422;

export type UsersUpdateAuthenticatedResponseBody =
  | PrivateUser
  | never
  | BasicError
  | ValidationError;

export type UsersUpdateAuthenticatedResolver = msw.HttpResponseResolver<
  UsersUpdateAuthenticatedRequestParams,
  UsersUpdateAuthenticatedRequestBody,
  UsersUpdateAuthenticatedResponseBody
>;

export type UsersListBlockedByAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type UsersListBlockedByAuthenticatedUserRequestHeaders = {};

export type UsersListBlockedByAuthenticatedUserRequestParams = {};

export type UsersListBlockedByAuthenticatedUserRequestBody = never;

export type UsersListBlockedByAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404;

export type UsersListBlockedByAuthenticatedUserResponseBody =
  | ReadonlyArray<SimpleUser>
  | never
  | BasicError;

export type UsersListBlockedByAuthenticatedUserResolver = msw.HttpResponseResolver<
  UsersListBlockedByAuthenticatedUserRequestParams,
  UsersListBlockedByAuthenticatedUserRequestBody,
  UsersListBlockedByAuthenticatedUserResponseBody
>;

export type UsersCheckBlockedRequestQuery = {};

export type UsersCheckBlockedRequestHeaders = {};

export type UsersCheckBlockedRequestParams = { readonly username: string };

export type UsersCheckBlockedRequestBody = never;

export type UsersCheckBlockedResponseStatus = 204 | 304 | 401 | 403 | 404;

export type UsersCheckBlockedResponseBody = never | BasicError;

export type UsersCheckBlockedResolver = msw.HttpResponseResolver<
  UsersCheckBlockedRequestParams,
  UsersCheckBlockedRequestBody,
  UsersCheckBlockedResponseBody
>;

export type UsersBlockRequestQuery = {};

export type UsersBlockRequestHeaders = {};

export type UsersBlockRequestParams = { readonly username: string };

export type UsersBlockRequestBody = never;

export type UsersBlockResponseStatus = 204 | 304 | 401 | 403 | 404 | 422;

export type UsersBlockResponseBody = never | BasicError | ValidationError;

export type UsersBlockResolver = msw.HttpResponseResolver<
  UsersBlockRequestParams,
  UsersBlockRequestBody,
  UsersBlockResponseBody
>;

export type UsersUnblockRequestQuery = {};

export type UsersUnblockRequestHeaders = {};

export type UsersUnblockRequestParams = { readonly username: string };

export type UsersUnblockRequestBody = never;

export type UsersUnblockResponseStatus = 204 | 304 | 401 | 403 | 404;

export type UsersUnblockResponseBody = never | BasicError;

export type UsersUnblockResolver = msw.HttpResponseResolver<
  UsersUnblockRequestParams,
  UsersUnblockRequestBody,
  UsersUnblockResponseBody
>;

export type CodespacesListForAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
  readonly repository_id?: string;
};

export type CodespacesListForAuthenticatedUserRequestHeaders = {};

export type CodespacesListForAuthenticatedUserRequestParams = {};

export type CodespacesListForAuthenticatedUserRequestBody = never;

export type CodespacesListForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404
  | 500;

export type CodespacesListForAuthenticatedUserResponseBody =
  | {
      readonly total_count: number;
      readonly codespaces: ReadonlyArray<Codespace>;
    }
  | never
  | BasicError;

export type CodespacesListForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesListForAuthenticatedUserRequestParams,
  CodespacesListForAuthenticatedUserRequestBody,
  CodespacesListForAuthenticatedUserResponseBody
>;

export type CodespacesCreateForAuthenticatedUserRequestQuery = {};

export type CodespacesCreateForAuthenticatedUserRequestHeaders = {};

export type CodespacesCreateForAuthenticatedUserRequestParams = {};

export type CodespacesCreateForAuthenticatedUserRequestBody =
  | {
      readonly repository_id: number;
      readonly ref?: string;
      readonly location?: string;
      readonly client_ip?: string;
      readonly machine?: string;
      readonly devcontainer_path?: string;
      readonly multi_repo_permissions_opt_out?: boolean;
      readonly working_directory?: string;
      readonly idle_timeout_minutes?: number;
      readonly display_name?: string;
      readonly retention_period_minutes?: number;
    }
  | {
      readonly pull_request: {
        readonly pull_request_number: number;
        readonly repository_id: number;
      };
      readonly location?: string;
      readonly machine?: string;
      readonly devcontainer_path?: string;
      readonly working_directory?: string;
      readonly idle_timeout_minutes?: number;
    };

export type CodespacesCreateForAuthenticatedUserResponseStatus =
  | 201
  | 202
  | 401
  | 403
  | 404
  | 503;

export type CodespacesCreateForAuthenticatedUserResponseBody =
  | Codespace
  | BasicError
  | {
      readonly code?: string;
      readonly message?: string;
      readonly documentation_url?: string;
    };

export type CodespacesCreateForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesCreateForAuthenticatedUserRequestParams,
  CodespacesCreateForAuthenticatedUserRequestBody,
  CodespacesCreateForAuthenticatedUserResponseBody
>;

export type CodespacesListSecretsForAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type CodespacesListSecretsForAuthenticatedUserRequestHeaders = {};

export type CodespacesListSecretsForAuthenticatedUserRequestParams = {};

export type CodespacesListSecretsForAuthenticatedUserRequestBody = never;

export type CodespacesListSecretsForAuthenticatedUserResponseStatus = 200;

export type CodespacesListSecretsForAuthenticatedUserResponseBody = {
  readonly total_count: number;
  readonly secrets: ReadonlyArray<CodespacesSecret>;
};

export type CodespacesListSecretsForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesListSecretsForAuthenticatedUserRequestParams,
  CodespacesListSecretsForAuthenticatedUserRequestBody,
  CodespacesListSecretsForAuthenticatedUserResponseBody
>;

export type CodespacesGetPublicKeyForAuthenticatedUserRequestQuery = {};

export type CodespacesGetPublicKeyForAuthenticatedUserRequestHeaders = {};

export type CodespacesGetPublicKeyForAuthenticatedUserRequestParams = {};

export type CodespacesGetPublicKeyForAuthenticatedUserRequestBody = never;

export type CodespacesGetPublicKeyForAuthenticatedUserResponseStatus = 200;

export type CodespacesUserPublicKey = {
  readonly key_id: string;
  readonly key: string;
};

export type CodespacesGetPublicKeyForAuthenticatedUserResponseBody = CodespacesUserPublicKey;

export type CodespacesGetPublicKeyForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesGetPublicKeyForAuthenticatedUserRequestParams,
  CodespacesGetPublicKeyForAuthenticatedUserRequestBody,
  CodespacesGetPublicKeyForAuthenticatedUserResponseBody
>;

export type CodespacesGetSecretForAuthenticatedUserRequestQuery = {};

export type CodespacesGetSecretForAuthenticatedUserRequestHeaders = {};

export type CodespacesGetSecretForAuthenticatedUserRequestParams = {
  readonly secret_name: string;
};

export type CodespacesGetSecretForAuthenticatedUserRequestBody = never;

export type CodespacesGetSecretForAuthenticatedUserResponseStatus = 200;

export type CodespacesGetSecretForAuthenticatedUserResponseBody = CodespacesSecret;

export type CodespacesGetSecretForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesGetSecretForAuthenticatedUserRequestParams,
  CodespacesGetSecretForAuthenticatedUserRequestBody,
  CodespacesGetSecretForAuthenticatedUserResponseBody
>;

export type CodespacesCreateOrUpdateSecretForAuthenticatedUserRequestQuery = {};

export type CodespacesCreateOrUpdateSecretForAuthenticatedUserRequestHeaders = {};

export type CodespacesCreateOrUpdateSecretForAuthenticatedUserRequestParams = {
  readonly secret_name: string;
};

export type CodespacesCreateOrUpdateSecretForAuthenticatedUserRequestBody = {
  readonly encrypted_value?: string;
  readonly key_id: string;
  readonly selected_repository_ids?: ReadonlyArray<string>;
};

export type CodespacesCreateOrUpdateSecretForAuthenticatedUserResponseStatus =
  | 201
  | 204
  | 404
  | 422;

export type CodespacesCreateOrUpdateSecretForAuthenticatedUserResponseBody =
  | EmptyObject
  | never
  | BasicError
  | ValidationError;

export type CodespacesCreateOrUpdateSecretForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesCreateOrUpdateSecretForAuthenticatedUserRequestParams,
  CodespacesCreateOrUpdateSecretForAuthenticatedUserRequestBody,
  CodespacesCreateOrUpdateSecretForAuthenticatedUserResponseBody
>;

export type CodespacesDeleteSecretForAuthenticatedUserRequestQuery = {};

export type CodespacesDeleteSecretForAuthenticatedUserRequestHeaders = {};

export type CodespacesDeleteSecretForAuthenticatedUserRequestParams = {
  readonly secret_name: string;
};

export type CodespacesDeleteSecretForAuthenticatedUserRequestBody = never;

export type CodespacesDeleteSecretForAuthenticatedUserResponseStatus = 204;

export type CodespacesDeleteSecretForAuthenticatedUserResponseBody = never;

export type CodespacesDeleteSecretForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesDeleteSecretForAuthenticatedUserRequestParams,
  CodespacesDeleteSecretForAuthenticatedUserRequestBody,
  CodespacesDeleteSecretForAuthenticatedUserResponseBody
>;

export type CodespacesListRepositoriesForSecretForAuthenticatedUserRequestQuery = {};

export type CodespacesListRepositoriesForSecretForAuthenticatedUserRequestHeaders = {};

export type CodespacesListRepositoriesForSecretForAuthenticatedUserRequestParams = {
  readonly secret_name: string;
};

export type CodespacesListRepositoriesForSecretForAuthenticatedUserRequestBody = never;

export type CodespacesListRepositoriesForSecretForAuthenticatedUserResponseStatus =
  | 200
  | 401
  | 403
  | 404
  | 500;

export type CodespacesListRepositoriesForSecretForAuthenticatedUserResponseBody =
  | {
      readonly total_count: number;
      readonly repositories: ReadonlyArray<MinimalRepository>;
    }
  | BasicError;

export type CodespacesListRepositoriesForSecretForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesListRepositoriesForSecretForAuthenticatedUserRequestParams,
  CodespacesListRepositoriesForSecretForAuthenticatedUserRequestBody,
  CodespacesListRepositoriesForSecretForAuthenticatedUserResponseBody
>;

export type CodespacesSetRepositoriesForSecretForAuthenticatedUserRequestQuery = {};

export type CodespacesSetRepositoriesForSecretForAuthenticatedUserRequestHeaders = {};

export type CodespacesSetRepositoriesForSecretForAuthenticatedUserRequestParams = {
  readonly secret_name: string;
};

export type CodespacesSetRepositoriesForSecretForAuthenticatedUserRequestBody = {
  readonly selected_repository_ids: ReadonlyArray<number>;
};

export type CodespacesSetRepositoriesForSecretForAuthenticatedUserResponseStatus =
  | 204
  | 401
  | 403
  | 404
  | 500;

export type CodespacesSetRepositoriesForSecretForAuthenticatedUserResponseBody =
  | never
  | BasicError;

export type CodespacesSetRepositoriesForSecretForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesSetRepositoriesForSecretForAuthenticatedUserRequestParams,
  CodespacesSetRepositoriesForSecretForAuthenticatedUserRequestBody,
  CodespacesSetRepositoriesForSecretForAuthenticatedUserResponseBody
>;

export type CodespacesAddRepositoryForSecretForAuthenticatedUserRequestQuery = {};

export type CodespacesAddRepositoryForSecretForAuthenticatedUserRequestHeaders = {};

export type CodespacesAddRepositoryForSecretForAuthenticatedUserRequestParams = {
  readonly secret_name: string;
  readonly repository_id: string;
};

export type CodespacesAddRepositoryForSecretForAuthenticatedUserRequestBody = never;

export type CodespacesAddRepositoryForSecretForAuthenticatedUserResponseStatus =
  | 204
  | 401
  | 403
  | 404
  | 500;

export type CodespacesAddRepositoryForSecretForAuthenticatedUserResponseBody =
  | never
  | BasicError;

export type CodespacesAddRepositoryForSecretForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesAddRepositoryForSecretForAuthenticatedUserRequestParams,
  CodespacesAddRepositoryForSecretForAuthenticatedUserRequestBody,
  CodespacesAddRepositoryForSecretForAuthenticatedUserResponseBody
>;

export type CodespacesRemoveRepositoryForSecretForAuthenticatedUserRequestQuery = {};

export type CodespacesRemoveRepositoryForSecretForAuthenticatedUserRequestHeaders = {};

export type CodespacesRemoveRepositoryForSecretForAuthenticatedUserRequestParams = {
  readonly secret_name: string;
  readonly repository_id: string;
};

export type CodespacesRemoveRepositoryForSecretForAuthenticatedUserRequestBody = never;

export type CodespacesRemoveRepositoryForSecretForAuthenticatedUserResponseStatus =
  | 204
  | 401
  | 403
  | 404
  | 500;

export type CodespacesRemoveRepositoryForSecretForAuthenticatedUserResponseBody =
  | never
  | BasicError;

export type CodespacesRemoveRepositoryForSecretForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesRemoveRepositoryForSecretForAuthenticatedUserRequestParams,
  CodespacesRemoveRepositoryForSecretForAuthenticatedUserRequestBody,
  CodespacesRemoveRepositoryForSecretForAuthenticatedUserResponseBody
>;

export type CodespacesGetForAuthenticatedUserRequestQuery = {};

export type CodespacesGetForAuthenticatedUserRequestHeaders = {};

export type CodespacesGetForAuthenticatedUserRequestParams = {
  readonly codespace_name: string;
};

export type CodespacesGetForAuthenticatedUserRequestBody = never;

export type CodespacesGetForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404
  | 500;

export type CodespacesGetForAuthenticatedUserResponseBody =
  | Codespace
  | never
  | BasicError;

export type CodespacesGetForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesGetForAuthenticatedUserRequestParams,
  CodespacesGetForAuthenticatedUserRequestBody,
  CodespacesGetForAuthenticatedUserResponseBody
>;

export type CodespacesUpdateForAuthenticatedUserRequestQuery = {};

export type CodespacesUpdateForAuthenticatedUserRequestHeaders = {};

export type CodespacesUpdateForAuthenticatedUserRequestParams = {
  readonly codespace_name: string;
};

export type CodespacesUpdateForAuthenticatedUserRequestBody =
  | {
      readonly machine?: string;
      readonly display_name?: string;
      readonly recent_folders?: ReadonlyArray<string>;
    }
  | undefined;

export type CodespacesUpdateForAuthenticatedUserResponseStatus =
  | 200
  | 401
  | 403
  | 404;

export type CodespacesUpdateForAuthenticatedUserResponseBody =
  | Codespace
  | BasicError;

export type CodespacesUpdateForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesUpdateForAuthenticatedUserRequestParams,
  CodespacesUpdateForAuthenticatedUserRequestBody,
  CodespacesUpdateForAuthenticatedUserResponseBody
>;

export type CodespacesDeleteForAuthenticatedUserRequestQuery = {};

export type CodespacesDeleteForAuthenticatedUserRequestHeaders = {};

export type CodespacesDeleteForAuthenticatedUserRequestParams = {
  readonly codespace_name: string;
};

export type CodespacesDeleteForAuthenticatedUserRequestBody = never;

export type CodespacesDeleteForAuthenticatedUserResponseStatus =
  | 202
  | 304
  | 401
  | 403
  | 404
  | 500;

export type CodespacesDeleteForAuthenticatedUserResponseBody =
  | never
  | BasicError;

export type CodespacesDeleteForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesDeleteForAuthenticatedUserRequestParams,
  CodespacesDeleteForAuthenticatedUserRequestBody,
  CodespacesDeleteForAuthenticatedUserResponseBody
>;

export type CodespacesExportForAuthenticatedUserRequestQuery = {};

export type CodespacesExportForAuthenticatedUserRequestHeaders = {};

export type CodespacesExportForAuthenticatedUserRequestParams = {
  readonly codespace_name: string;
};

export type CodespacesExportForAuthenticatedUserRequestBody = never;

export type CodespacesExportForAuthenticatedUserResponseStatus =
  | 202
  | 401
  | 403
  | 404
  | 422
  | 500;

export type FetchesInformationAboutAnExportOfACodespace = {
  readonly state?: string | null;
  readonly completed_at?: string | null;
  readonly branch?: string | null;
  readonly sha?: string | null;
  readonly id?: string;
  readonly export_url?: string;
  readonly html_url?: string | null;
};

export type CodespacesExportForAuthenticatedUserResponseBody =
  | FetchesInformationAboutAnExportOfACodespace
  | BasicError
  | ValidationError;

export type CodespacesExportForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesExportForAuthenticatedUserRequestParams,
  CodespacesExportForAuthenticatedUserRequestBody,
  CodespacesExportForAuthenticatedUserResponseBody
>;

export type CodespacesGetExportDetailsForAuthenticatedUserRequestQuery = {};

export type CodespacesGetExportDetailsForAuthenticatedUserRequestHeaders = {};

export type CodespacesGetExportDetailsForAuthenticatedUserRequestParams = {
  readonly codespace_name: string;
  readonly export_id: string;
};

export type CodespacesGetExportDetailsForAuthenticatedUserRequestBody = never;

export type CodespacesGetExportDetailsForAuthenticatedUserResponseStatus =
  | 200
  | 404;

export type CodespacesGetExportDetailsForAuthenticatedUserResponseBody =
  | FetchesInformationAboutAnExportOfACodespace
  | BasicError;

export type CodespacesGetExportDetailsForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesGetExportDetailsForAuthenticatedUserRequestParams,
  CodespacesGetExportDetailsForAuthenticatedUserRequestBody,
  CodespacesGetExportDetailsForAuthenticatedUserResponseBody
>;

export type CodespacesCodespaceMachinesForAuthenticatedUserRequestQuery = {};

export type CodespacesCodespaceMachinesForAuthenticatedUserRequestHeaders = {};

export type CodespacesCodespaceMachinesForAuthenticatedUserRequestParams = {
  readonly codespace_name: string;
};

export type CodespacesCodespaceMachinesForAuthenticatedUserRequestBody = never;

export type CodespacesCodespaceMachinesForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404
  | 500;

export type CodespacesCodespaceMachinesForAuthenticatedUserResponseBody =
  | {
      readonly total_count: number;
      readonly machines: ReadonlyArray<CodespaceMachine>;
    }
  | never
  | BasicError;

export type CodespacesCodespaceMachinesForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesCodespaceMachinesForAuthenticatedUserRequestParams,
  CodespacesCodespaceMachinesForAuthenticatedUserRequestBody,
  CodespacesCodespaceMachinesForAuthenticatedUserResponseBody
>;

export type CodespacesStartForAuthenticatedUserRequestQuery = {};

export type CodespacesStartForAuthenticatedUserRequestHeaders = {};

export type CodespacesStartForAuthenticatedUserRequestParams = {
  readonly codespace_name: string;
};

export type CodespacesStartForAuthenticatedUserRequestBody = never;

export type CodespacesStartForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 400
  | 401
  | 402
  | 403
  | 404
  | 409
  | 500;

export type CodespacesStartForAuthenticatedUserResponseBody =
  | Codespace
  | never
  | BasicError;

export type CodespacesStartForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesStartForAuthenticatedUserRequestParams,
  CodespacesStartForAuthenticatedUserRequestBody,
  CodespacesStartForAuthenticatedUserResponseBody
>;

export type CodespacesStopForAuthenticatedUserRequestQuery = {};

export type CodespacesStopForAuthenticatedUserRequestHeaders = {};

export type CodespacesStopForAuthenticatedUserRequestParams = {
  readonly codespace_name: string;
};

export type CodespacesStopForAuthenticatedUserRequestBody = never;

export type CodespacesStopForAuthenticatedUserResponseStatus =
  | 200
  | 401
  | 403
  | 404
  | 500;

export type CodespacesStopForAuthenticatedUserResponseBody =
  | Codespace
  | BasicError;

export type CodespacesStopForAuthenticatedUserResolver = msw.HttpResponseResolver<
  CodespacesStopForAuthenticatedUserRequestParams,
  CodespacesStopForAuthenticatedUserRequestBody,
  CodespacesStopForAuthenticatedUserResponseBody
>;

export type UsersSetPrimaryEmailVisibilityForAuthenticatedUserRequestQuery = {};

export type UsersSetPrimaryEmailVisibilityForAuthenticatedUserRequestHeaders = {};

export type UsersSetPrimaryEmailVisibilityForAuthenticatedUserRequestParams = {};

export type UsersSetPrimaryEmailVisibilityForAuthenticatedUserRequestBody = {
  readonly visibility: 'public' | 'private';
};

export type UsersSetPrimaryEmailVisibilityForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404
  | 422;

export type Email = {
  readonly email: string;
  readonly primary: boolean;
  readonly verified: boolean;
  readonly visibility: string | null;
};

export type UsersSetPrimaryEmailVisibilityForAuthenticatedUserResponseBody =
  | ReadonlyArray<Email>
  | never
  | BasicError
  | ValidationError;

export type UsersSetPrimaryEmailVisibilityForAuthenticatedUserResolver = msw.HttpResponseResolver<
  UsersSetPrimaryEmailVisibilityForAuthenticatedUserRequestParams,
  UsersSetPrimaryEmailVisibilityForAuthenticatedUserRequestBody,
  UsersSetPrimaryEmailVisibilityForAuthenticatedUserResponseBody
>;

export type UsersListEmailsForAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type UsersListEmailsForAuthenticatedUserRequestHeaders = {};

export type UsersListEmailsForAuthenticatedUserRequestParams = {};

export type UsersListEmailsForAuthenticatedUserRequestBody = never;

export type UsersListEmailsForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404;

export type UsersListEmailsForAuthenticatedUserResponseBody =
  | ReadonlyArray<Email>
  | never
  | BasicError;

export type UsersListEmailsForAuthenticatedUserResolver = msw.HttpResponseResolver<
  UsersListEmailsForAuthenticatedUserRequestParams,
  UsersListEmailsForAuthenticatedUserRequestBody,
  UsersListEmailsForAuthenticatedUserResponseBody
>;

export type UsersAddEmailForAuthenticatedUserRequestQuery = {};

export type UsersAddEmailForAuthenticatedUserRequestHeaders = {};

export type UsersAddEmailForAuthenticatedUserRequestParams = {};

export type UsersAddEmailForAuthenticatedUserRequestBody =
  | { readonly emails: ReadonlyArray<string> }
  | ReadonlyArray<string>
  | string
  | undefined;

export type UsersAddEmailForAuthenticatedUserResponseStatus =
  | 201
  | 304
  | 401
  | 403
  | 404
  | 422;

export type UsersAddEmailForAuthenticatedUserResponseBody =
  | ReadonlyArray<Email>
  | never
  | BasicError
  | ValidationError;

export type UsersAddEmailForAuthenticatedUserResolver = msw.HttpResponseResolver<
  UsersAddEmailForAuthenticatedUserRequestParams,
  UsersAddEmailForAuthenticatedUserRequestBody,
  UsersAddEmailForAuthenticatedUserResponseBody
>;

export type UsersDeleteEmailForAuthenticatedUserRequestQuery = {};

export type UsersDeleteEmailForAuthenticatedUserRequestHeaders = {};

export type UsersDeleteEmailForAuthenticatedUserRequestParams = {};

export type UsersDeleteEmailForAuthenticatedUserRequestBody =
  | { readonly emails: ReadonlyArray<string> }
  | ReadonlyArray<string>
  | string
  | undefined;

export type UsersDeleteEmailForAuthenticatedUserResponseStatus =
  | 204
  | 304
  | 401
  | 403
  | 404
  | 422;

export type UsersDeleteEmailForAuthenticatedUserResponseBody =
  | never
  | BasicError
  | ValidationError;

export type UsersDeleteEmailForAuthenticatedUserResolver = msw.HttpResponseResolver<
  UsersDeleteEmailForAuthenticatedUserRequestParams,
  UsersDeleteEmailForAuthenticatedUserRequestBody,
  UsersDeleteEmailForAuthenticatedUserResponseBody
>;

export type UsersListFollowersForAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type UsersListFollowersForAuthenticatedUserRequestHeaders = {};

export type UsersListFollowersForAuthenticatedUserRequestParams = {};

export type UsersListFollowersForAuthenticatedUserRequestBody = never;

export type UsersListFollowersForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403;

export type UsersListFollowersForAuthenticatedUserResponseBody =
  | ReadonlyArray<SimpleUser>
  | never
  | BasicError;

export type UsersListFollowersForAuthenticatedUserResolver = msw.HttpResponseResolver<
  UsersListFollowersForAuthenticatedUserRequestParams,
  UsersListFollowersForAuthenticatedUserRequestBody,
  UsersListFollowersForAuthenticatedUserResponseBody
>;

export type UsersListFollowedByAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type UsersListFollowedByAuthenticatedUserRequestHeaders = {};

export type UsersListFollowedByAuthenticatedUserRequestParams = {};

export type UsersListFollowedByAuthenticatedUserRequestBody = never;

export type UsersListFollowedByAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403;

export type UsersListFollowedByAuthenticatedUserResponseBody =
  | ReadonlyArray<SimpleUser>
  | never
  | BasicError;

export type UsersListFollowedByAuthenticatedUserResolver = msw.HttpResponseResolver<
  UsersListFollowedByAuthenticatedUserRequestParams,
  UsersListFollowedByAuthenticatedUserRequestBody,
  UsersListFollowedByAuthenticatedUserResponseBody
>;

export type UsersCheckPersonIsFollowedByAuthenticatedRequestQuery = {};

export type UsersCheckPersonIsFollowedByAuthenticatedRequestHeaders = {};

export type UsersCheckPersonIsFollowedByAuthenticatedRequestParams = {
  readonly username: string;
};

export type UsersCheckPersonIsFollowedByAuthenticatedRequestBody = never;

export type UsersCheckPersonIsFollowedByAuthenticatedResponseStatus =
  | 204
  | 304
  | 401
  | 403
  | 404;

export type UsersCheckPersonIsFollowedByAuthenticatedResponseBody =
  | never
  | BasicError;

export type UsersCheckPersonIsFollowedByAuthenticatedResolver = msw.HttpResponseResolver<
  UsersCheckPersonIsFollowedByAuthenticatedRequestParams,
  UsersCheckPersonIsFollowedByAuthenticatedRequestBody,
  UsersCheckPersonIsFollowedByAuthenticatedResponseBody
>;

export type UsersFollowRequestQuery = {};

export type UsersFollowRequestHeaders = {};

export type UsersFollowRequestParams = { readonly username: string };

export type UsersFollowRequestBody = never;

export type UsersFollowResponseStatus = 204 | 304 | 401 | 403 | 404;

export type UsersFollowResponseBody = never | BasicError;

export type UsersFollowResolver = msw.HttpResponseResolver<
  UsersFollowRequestParams,
  UsersFollowRequestBody,
  UsersFollowResponseBody
>;

export type UsersUnfollowRequestQuery = {};

export type UsersUnfollowRequestHeaders = {};

export type UsersUnfollowRequestParams = { readonly username: string };

export type UsersUnfollowRequestBody = never;

export type UsersUnfollowResponseStatus = 204 | 304 | 401 | 403 | 404;

export type UsersUnfollowResponseBody = never | BasicError;

export type UsersUnfollowResolver = msw.HttpResponseResolver<
  UsersUnfollowRequestParams,
  UsersUnfollowRequestBody,
  UsersUnfollowResponseBody
>;

export type UsersListGpgKeysForAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type UsersListGpgKeysForAuthenticatedUserRequestHeaders = {};

export type UsersListGpgKeysForAuthenticatedUserRequestParams = {};

export type UsersListGpgKeysForAuthenticatedUserRequestBody = never;

export type UsersListGpgKeysForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404;

export type GpgKey = {
  readonly id: number;
  readonly name?: string | null;
  readonly primary_key_id: number | null;
  readonly key_id: string;
  readonly public_key: string;
  readonly emails: ReadonlyArray<{
    readonly email?: string;
    readonly verified?: boolean;
  }>;
  readonly subkeys: ReadonlyArray<{
    readonly id?: number;
    readonly primary_key_id?: number;
    readonly key_id?: string;
    readonly public_key?: string;
    readonly emails?: ReadonlyArray<never>;
    readonly subkeys?: ReadonlyArray<never>;
    readonly can_sign?: boolean;
    readonly can_encrypt_comms?: boolean;
    readonly can_encrypt_storage?: boolean;
    readonly can_certify?: boolean;
    readonly created_at?: string;
    readonly expires_at?: string | null;
    readonly raw_key?: string | null;
    readonly revoked?: boolean;
  }>;
  readonly can_sign: boolean;
  readonly can_encrypt_comms: boolean;
  readonly can_encrypt_storage: boolean;
  readonly can_certify: boolean;
  readonly created_at: string;
  readonly expires_at: string | null;
  readonly revoked: boolean;
  readonly raw_key: string | null;
};

export type UsersListGpgKeysForAuthenticatedUserResponseBody =
  | ReadonlyArray<GpgKey>
  | never
  | BasicError;

export type UsersListGpgKeysForAuthenticatedUserResolver = msw.HttpResponseResolver<
  UsersListGpgKeysForAuthenticatedUserRequestParams,
  UsersListGpgKeysForAuthenticatedUserRequestBody,
  UsersListGpgKeysForAuthenticatedUserResponseBody
>;

export type UsersCreateGpgKeyForAuthenticatedUserRequestQuery = {};

export type UsersCreateGpgKeyForAuthenticatedUserRequestHeaders = {};

export type UsersCreateGpgKeyForAuthenticatedUserRequestParams = {};

export type UsersCreateGpgKeyForAuthenticatedUserRequestBody = {
  readonly name?: string;
  readonly armored_public_key: string;
};

export type UsersCreateGpgKeyForAuthenticatedUserResponseStatus =
  | 201
  | 304
  | 401
  | 403
  | 404
  | 422;

export type UsersCreateGpgKeyForAuthenticatedUserResponseBody =
  | GpgKey
  | never
  | BasicError
  | ValidationError;

export type UsersCreateGpgKeyForAuthenticatedUserResolver = msw.HttpResponseResolver<
  UsersCreateGpgKeyForAuthenticatedUserRequestParams,
  UsersCreateGpgKeyForAuthenticatedUserRequestBody,
  UsersCreateGpgKeyForAuthenticatedUserResponseBody
>;

export type UsersGetGpgKeyForAuthenticatedUserRequestQuery = {};

export type UsersGetGpgKeyForAuthenticatedUserRequestHeaders = {};

export type UsersGetGpgKeyForAuthenticatedUserRequestParams = {
  readonly gpg_key_id: string;
};

export type UsersGetGpgKeyForAuthenticatedUserRequestBody = never;

export type UsersGetGpgKeyForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404;

export type UsersGetGpgKeyForAuthenticatedUserResponseBody =
  | GpgKey
  | never
  | BasicError;

export type UsersGetGpgKeyForAuthenticatedUserResolver = msw.HttpResponseResolver<
  UsersGetGpgKeyForAuthenticatedUserRequestParams,
  UsersGetGpgKeyForAuthenticatedUserRequestBody,
  UsersGetGpgKeyForAuthenticatedUserResponseBody
>;

export type UsersDeleteGpgKeyForAuthenticatedUserRequestQuery = {};

export type UsersDeleteGpgKeyForAuthenticatedUserRequestHeaders = {};

export type UsersDeleteGpgKeyForAuthenticatedUserRequestParams = {
  readonly gpg_key_id: string;
};

export type UsersDeleteGpgKeyForAuthenticatedUserRequestBody = never;

export type UsersDeleteGpgKeyForAuthenticatedUserResponseStatus =
  | 204
  | 304
  | 401
  | 403
  | 404
  | 422;

export type UsersDeleteGpgKeyForAuthenticatedUserResponseBody =
  | never
  | BasicError
  | ValidationError;

export type UsersDeleteGpgKeyForAuthenticatedUserResolver = msw.HttpResponseResolver<
  UsersDeleteGpgKeyForAuthenticatedUserRequestParams,
  UsersDeleteGpgKeyForAuthenticatedUserRequestBody,
  UsersDeleteGpgKeyForAuthenticatedUserResponseBody
>;

export type AppsListInstallationsForAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type AppsListInstallationsForAuthenticatedUserRequestHeaders = {};

export type AppsListInstallationsForAuthenticatedUserRequestParams = {};

export type AppsListInstallationsForAuthenticatedUserRequestBody = never;

export type AppsListInstallationsForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403;

export type AppsListInstallationsForAuthenticatedUserResponseBody =
  | {
      readonly total_count: number;
      readonly installations: ReadonlyArray<Installation>;
    }
  | never
  | BasicError;

export type AppsListInstallationsForAuthenticatedUserResolver = msw.HttpResponseResolver<
  AppsListInstallationsForAuthenticatedUserRequestParams,
  AppsListInstallationsForAuthenticatedUserRequestBody,
  AppsListInstallationsForAuthenticatedUserResponseBody
>;

export type AppsListInstallationReposForAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type AppsListInstallationReposForAuthenticatedUserRequestHeaders = {};

export type AppsListInstallationReposForAuthenticatedUserRequestParams = {
  readonly installation_id: string;
};

export type AppsListInstallationReposForAuthenticatedUserRequestBody = never;

export type AppsListInstallationReposForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 403
  | 404;

export type AppsListInstallationReposForAuthenticatedUserResponseBody =
  | {
      readonly total_count: number;
      readonly repository_selection?: string;
      readonly repositories: ReadonlyArray<Repository>;
    }
  | never
  | BasicError;

export type AppsListInstallationReposForAuthenticatedUserResolver = msw.HttpResponseResolver<
  AppsListInstallationReposForAuthenticatedUserRequestParams,
  AppsListInstallationReposForAuthenticatedUserRequestBody,
  AppsListInstallationReposForAuthenticatedUserResponseBody
>;

export type AppsAddRepoToInstallationForAuthenticatedUserRequestQuery = {};

export type AppsAddRepoToInstallationForAuthenticatedUserRequestHeaders = {};

export type AppsAddRepoToInstallationForAuthenticatedUserRequestParams = {
  readonly installation_id: string;
  readonly repository_id: string;
};

export type AppsAddRepoToInstallationForAuthenticatedUserRequestBody = never;

export type AppsAddRepoToInstallationForAuthenticatedUserResponseStatus =
  | 204
  | 304
  | 403
  | 404;

export type AppsAddRepoToInstallationForAuthenticatedUserResponseBody =
  | never
  | BasicError;

export type AppsAddRepoToInstallationForAuthenticatedUserResolver = msw.HttpResponseResolver<
  AppsAddRepoToInstallationForAuthenticatedUserRequestParams,
  AppsAddRepoToInstallationForAuthenticatedUserRequestBody,
  AppsAddRepoToInstallationForAuthenticatedUserResponseBody
>;

export type AppsRemoveRepoFromInstallationForAuthenticatedUserRequestQuery = {};

export type AppsRemoveRepoFromInstallationForAuthenticatedUserRequestHeaders = {};

export type AppsRemoveRepoFromInstallationForAuthenticatedUserRequestParams = {
  readonly installation_id: string;
  readonly repository_id: string;
};

export type AppsRemoveRepoFromInstallationForAuthenticatedUserRequestBody = never;

export type AppsRemoveRepoFromInstallationForAuthenticatedUserResponseStatus =
  | 204
  | 304
  | 403
  | 404;

export type AppsRemoveRepoFromInstallationForAuthenticatedUserResponseBody =
  | never
  | BasicError;

export type AppsRemoveRepoFromInstallationForAuthenticatedUserResolver = msw.HttpResponseResolver<
  AppsRemoveRepoFromInstallationForAuthenticatedUserRequestParams,
  AppsRemoveRepoFromInstallationForAuthenticatedUserRequestBody,
  AppsRemoveRepoFromInstallationForAuthenticatedUserResponseBody
>;

export type InteractionsGetRestrictionsForAuthenticatedUserRequestQuery = {};

export type InteractionsGetRestrictionsForAuthenticatedUserRequestHeaders = {};

export type InteractionsGetRestrictionsForAuthenticatedUserRequestParams = {};

export type InteractionsGetRestrictionsForAuthenticatedUserRequestBody = never;

export type InteractionsGetRestrictionsForAuthenticatedUserResponseStatus =
  | 200
  | 204;

export type InteractionsGetRestrictionsForAuthenticatedUserResponseBody =
  | InteractionLimits
  | {}
  | never;

export type InteractionsGetRestrictionsForAuthenticatedUserResolver = msw.HttpResponseResolver<
  InteractionsGetRestrictionsForAuthenticatedUserRequestParams,
  InteractionsGetRestrictionsForAuthenticatedUserRequestBody,
  InteractionsGetRestrictionsForAuthenticatedUserResponseBody
>;

export type InteractionsSetRestrictionsForAuthenticatedUserRequestQuery = {};

export type InteractionsSetRestrictionsForAuthenticatedUserRequestHeaders = {};

export type InteractionsSetRestrictionsForAuthenticatedUserRequestParams = {};

export type InteractionsSetRestrictionsForAuthenticatedUserRequestBody = InteractionRestrictions;

export type InteractionsSetRestrictionsForAuthenticatedUserResponseStatus =
  | 200
  | 422;

export type InteractionsSetRestrictionsForAuthenticatedUserResponseBody =
  | InteractionLimits
  | ValidationError;

export type InteractionsSetRestrictionsForAuthenticatedUserResolver = msw.HttpResponseResolver<
  InteractionsSetRestrictionsForAuthenticatedUserRequestParams,
  InteractionsSetRestrictionsForAuthenticatedUserRequestBody,
  InteractionsSetRestrictionsForAuthenticatedUserResponseBody
>;

export type InteractionsRemoveRestrictionsForAuthenticatedUserRequestQuery = {};

export type InteractionsRemoveRestrictionsForAuthenticatedUserRequestHeaders = {};

export type InteractionsRemoveRestrictionsForAuthenticatedUserRequestParams = {};

export type InteractionsRemoveRestrictionsForAuthenticatedUserRequestBody = never;

export type InteractionsRemoveRestrictionsForAuthenticatedUserResponseStatus = 204;

export type InteractionsRemoveRestrictionsForAuthenticatedUserResponseBody = never;

export type InteractionsRemoveRestrictionsForAuthenticatedUserResolver = msw.HttpResponseResolver<
  InteractionsRemoveRestrictionsForAuthenticatedUserRequestParams,
  InteractionsRemoveRestrictionsForAuthenticatedUserRequestBody,
  InteractionsRemoveRestrictionsForAuthenticatedUserResponseBody
>;

export type IssuesListForAuthenticatedUserRequestQuery = {
  readonly filter?: string;
  readonly state?: string;
  readonly labels?: string;
  readonly sort?: string;
  readonly direction?: string;
  readonly since?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type IssuesListForAuthenticatedUserRequestHeaders = {};

export type IssuesListForAuthenticatedUserRequestParams = {};

export type IssuesListForAuthenticatedUserRequestBody = never;

export type IssuesListForAuthenticatedUserResponseStatus = 200 | 304 | 404;

export type IssuesListForAuthenticatedUserResponseBody =
  | ReadonlyArray<Issue>
  | never
  | BasicError;

export type IssuesListForAuthenticatedUserResolver = msw.HttpResponseResolver<
  IssuesListForAuthenticatedUserRequestParams,
  IssuesListForAuthenticatedUserRequestBody,
  IssuesListForAuthenticatedUserResponseBody
>;

export type UsersListPublicSshKeysForAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type UsersListPublicSshKeysForAuthenticatedUserRequestHeaders = {};

export type UsersListPublicSshKeysForAuthenticatedUserRequestParams = {};

export type UsersListPublicSshKeysForAuthenticatedUserRequestBody = never;

export type UsersListPublicSshKeysForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404;

export type Key = {
  readonly key: string;
  readonly id: number;
  readonly url: string;
  readonly title: string;
  readonly created_at: string;
  readonly verified: boolean;
  readonly read_only: boolean;
};

export type UsersListPublicSshKeysForAuthenticatedUserResponseBody =
  | ReadonlyArray<Key>
  | never
  | BasicError;

export type UsersListPublicSshKeysForAuthenticatedUserResolver = msw.HttpResponseResolver<
  UsersListPublicSshKeysForAuthenticatedUserRequestParams,
  UsersListPublicSshKeysForAuthenticatedUserRequestBody,
  UsersListPublicSshKeysForAuthenticatedUserResponseBody
>;

export type UsersCreatePublicSshKeyForAuthenticatedUserRequestQuery = {};

export type UsersCreatePublicSshKeyForAuthenticatedUserRequestHeaders = {};

export type UsersCreatePublicSshKeyForAuthenticatedUserRequestParams = {};

export type UsersCreatePublicSshKeyForAuthenticatedUserRequestBody = {
  readonly title?: string;
  readonly key: string;
};

export type UsersCreatePublicSshKeyForAuthenticatedUserResponseStatus =
  | 201
  | 304
  | 401
  | 403
  | 404
  | 422;

export type UsersCreatePublicSshKeyForAuthenticatedUserResponseBody =
  | Key
  | never
  | BasicError
  | ValidationError;

export type UsersCreatePublicSshKeyForAuthenticatedUserResolver = msw.HttpResponseResolver<
  UsersCreatePublicSshKeyForAuthenticatedUserRequestParams,
  UsersCreatePublicSshKeyForAuthenticatedUserRequestBody,
  UsersCreatePublicSshKeyForAuthenticatedUserResponseBody
>;

export type UsersGetPublicSshKeyForAuthenticatedUserRequestQuery = {};

export type UsersGetPublicSshKeyForAuthenticatedUserRequestHeaders = {};

export type UsersGetPublicSshKeyForAuthenticatedUserRequestParams = {
  readonly key_id: string;
};

export type UsersGetPublicSshKeyForAuthenticatedUserRequestBody = never;

export type UsersGetPublicSshKeyForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404;

export type UsersGetPublicSshKeyForAuthenticatedUserResponseBody =
  | Key
  | never
  | BasicError;

export type UsersGetPublicSshKeyForAuthenticatedUserResolver = msw.HttpResponseResolver<
  UsersGetPublicSshKeyForAuthenticatedUserRequestParams,
  UsersGetPublicSshKeyForAuthenticatedUserRequestBody,
  UsersGetPublicSshKeyForAuthenticatedUserResponseBody
>;

export type UsersDeletePublicSshKeyForAuthenticatedUserRequestQuery = {};

export type UsersDeletePublicSshKeyForAuthenticatedUserRequestHeaders = {};

export type UsersDeletePublicSshKeyForAuthenticatedUserRequestParams = {
  readonly key_id: string;
};

export type UsersDeletePublicSshKeyForAuthenticatedUserRequestBody = never;

export type UsersDeletePublicSshKeyForAuthenticatedUserResponseStatus =
  | 204
  | 304
  | 401
  | 403
  | 404;

export type UsersDeletePublicSshKeyForAuthenticatedUserResponseBody =
  | never
  | BasicError;

export type UsersDeletePublicSshKeyForAuthenticatedUserResolver = msw.HttpResponseResolver<
  UsersDeletePublicSshKeyForAuthenticatedUserRequestParams,
  UsersDeletePublicSshKeyForAuthenticatedUserRequestBody,
  UsersDeletePublicSshKeyForAuthenticatedUserResponseBody
>;

export type AppsListSubscriptionsForAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type AppsListSubscriptionsForAuthenticatedUserRequestHeaders = {};

export type AppsListSubscriptionsForAuthenticatedUserRequestParams = {};

export type AppsListSubscriptionsForAuthenticatedUserRequestBody = never;

export type AppsListSubscriptionsForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 404;

export type MarketplaceAccount = {
  readonly url: string;
  readonly id: number;
  readonly type: string;
  readonly node_id?: string;
  readonly login: string;
  readonly email?: string | null;
  readonly organization_billing_email?: string | null;
};

export type UserMarketplacePurchase = {
  readonly billing_cycle: string;
  readonly next_billing_date: string | null;
  readonly unit_count: number | null;
  readonly on_free_trial: boolean;
  readonly free_trial_ends_on: string | null;
  readonly updated_at: string | null;
  readonly account: MarketplaceAccount;
  readonly plan: MarketplaceListingPlan;
};

export type AppsListSubscriptionsForAuthenticatedUserResponseBody =
  | ReadonlyArray<UserMarketplacePurchase>
  | never
  | BasicError;

export type AppsListSubscriptionsForAuthenticatedUserResolver = msw.HttpResponseResolver<
  AppsListSubscriptionsForAuthenticatedUserRequestParams,
  AppsListSubscriptionsForAuthenticatedUserRequestBody,
  AppsListSubscriptionsForAuthenticatedUserResponseBody
>;

export type AppsListSubscriptionsForAuthenticatedUserStubbedRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type AppsListSubscriptionsForAuthenticatedUserStubbedRequestHeaders = {};

export type AppsListSubscriptionsForAuthenticatedUserStubbedRequestParams = {};

export type AppsListSubscriptionsForAuthenticatedUserStubbedRequestBody = never;

export type AppsListSubscriptionsForAuthenticatedUserStubbedResponseStatus =
  | 200
  | 304
  | 401;

export type AppsListSubscriptionsForAuthenticatedUserStubbedResponseBody =
  | ReadonlyArray<UserMarketplacePurchase>
  | never
  | BasicError;

export type AppsListSubscriptionsForAuthenticatedUserStubbedResolver = msw.HttpResponseResolver<
  AppsListSubscriptionsForAuthenticatedUserStubbedRequestParams,
  AppsListSubscriptionsForAuthenticatedUserStubbedRequestBody,
  AppsListSubscriptionsForAuthenticatedUserStubbedResponseBody
>;

export type OrgsListMembershipsForAuthenticatedUserRequestQuery = {
  readonly state?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type OrgsListMembershipsForAuthenticatedUserRequestHeaders = {};

export type OrgsListMembershipsForAuthenticatedUserRequestParams = {};

export type OrgsListMembershipsForAuthenticatedUserRequestBody = never;

export type OrgsListMembershipsForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 422;

export type OrgsListMembershipsForAuthenticatedUserResponseBody =
  | ReadonlyArray<OrgMembership>
  | never
  | BasicError
  | ValidationError;

export type OrgsListMembershipsForAuthenticatedUserResolver = msw.HttpResponseResolver<
  OrgsListMembershipsForAuthenticatedUserRequestParams,
  OrgsListMembershipsForAuthenticatedUserRequestBody,
  OrgsListMembershipsForAuthenticatedUserResponseBody
>;

export type OrgsGetMembershipForAuthenticatedUserRequestQuery = {};

export type OrgsGetMembershipForAuthenticatedUserRequestHeaders = {};

export type OrgsGetMembershipForAuthenticatedUserRequestParams = {
  readonly org: string;
};

export type OrgsGetMembershipForAuthenticatedUserRequestBody = never;

export type OrgsGetMembershipForAuthenticatedUserResponseStatus =
  | 200
  | 403
  | 404;

export type OrgsGetMembershipForAuthenticatedUserResponseBody =
  | OrgMembership
  | BasicError;

export type OrgsGetMembershipForAuthenticatedUserResolver = msw.HttpResponseResolver<
  OrgsGetMembershipForAuthenticatedUserRequestParams,
  OrgsGetMembershipForAuthenticatedUserRequestBody,
  OrgsGetMembershipForAuthenticatedUserResponseBody
>;

export type OrgsUpdateMembershipForAuthenticatedUserRequestQuery = {};

export type OrgsUpdateMembershipForAuthenticatedUserRequestHeaders = {};

export type OrgsUpdateMembershipForAuthenticatedUserRequestParams = {
  readonly org: string;
};

export type OrgsUpdateMembershipForAuthenticatedUserRequestBody = {
  readonly state: 'active';
};

export type OrgsUpdateMembershipForAuthenticatedUserResponseStatus =
  | 200
  | 403
  | 404
  | 422;

export type OrgsUpdateMembershipForAuthenticatedUserResponseBody =
  | OrgMembership
  | BasicError
  | ValidationError;

export type OrgsUpdateMembershipForAuthenticatedUserResolver = msw.HttpResponseResolver<
  OrgsUpdateMembershipForAuthenticatedUserRequestParams,
  OrgsUpdateMembershipForAuthenticatedUserRequestBody,
  OrgsUpdateMembershipForAuthenticatedUserResponseBody
>;

export type MigrationsListForAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type MigrationsListForAuthenticatedUserRequestHeaders = {};

export type MigrationsListForAuthenticatedUserRequestParams = {};

export type MigrationsListForAuthenticatedUserRequestBody = never;

export type MigrationsListForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403;

export type MigrationsListForAuthenticatedUserResponseBody =
  | ReadonlyArray<Migration>
  | never
  | BasicError;

export type MigrationsListForAuthenticatedUserResolver = msw.HttpResponseResolver<
  MigrationsListForAuthenticatedUserRequestParams,
  MigrationsListForAuthenticatedUserRequestBody,
  MigrationsListForAuthenticatedUserResponseBody
>;

export type MigrationsStartForAuthenticatedUserRequestQuery = {};

export type MigrationsStartForAuthenticatedUserRequestHeaders = {};

export type MigrationsStartForAuthenticatedUserRequestParams = {};

export type MigrationsStartForAuthenticatedUserRequestBody = {
  readonly lock_repositories?: boolean;
  readonly exclude_metadata?: boolean;
  readonly exclude_git_data?: boolean;
  readonly exclude_attachments?: boolean;
  readonly exclude_releases?: boolean;
  readonly exclude_owner_projects?: boolean;
  readonly org_metadata_only?: boolean;
  readonly exclude?: ReadonlyArray<'repositories'>;
  readonly repositories: ReadonlyArray<string>;
};

export type MigrationsStartForAuthenticatedUserResponseStatus =
  | 201
  | 304
  | 401
  | 403
  | 422;

export type MigrationsStartForAuthenticatedUserResponseBody =
  | Migration
  | never
  | BasicError
  | ValidationError;

export type MigrationsStartForAuthenticatedUserResolver = msw.HttpResponseResolver<
  MigrationsStartForAuthenticatedUserRequestParams,
  MigrationsStartForAuthenticatedUserRequestBody,
  MigrationsStartForAuthenticatedUserResponseBody
>;

export type MigrationsGetStatusForAuthenticatedUserRequestQuery = {
  readonly exclude?: ReadonlyArray<string>;
};

export type MigrationsGetStatusForAuthenticatedUserRequestHeaders = {};

export type MigrationsGetStatusForAuthenticatedUserRequestParams = {
  readonly migration_id: string;
};

export type MigrationsGetStatusForAuthenticatedUserRequestBody = never;

export type MigrationsGetStatusForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404;

export type MigrationsGetStatusForAuthenticatedUserResponseBody =
  | Migration
  | never
  | BasicError;

export type MigrationsGetStatusForAuthenticatedUserResolver = msw.HttpResponseResolver<
  MigrationsGetStatusForAuthenticatedUserRequestParams,
  MigrationsGetStatusForAuthenticatedUserRequestBody,
  MigrationsGetStatusForAuthenticatedUserResponseBody
>;

export type MigrationsGetArchiveForAuthenticatedUserRequestQuery = {};

export type MigrationsGetArchiveForAuthenticatedUserRequestHeaders = {};

export type MigrationsGetArchiveForAuthenticatedUserRequestParams = {
  readonly migration_id: string;
};

export type MigrationsGetArchiveForAuthenticatedUserRequestBody = never;

export type MigrationsGetArchiveForAuthenticatedUserResponseStatus =
  | 302
  | 304
  | 401
  | 403;

export type MigrationsGetArchiveForAuthenticatedUserResponseBody =
  | never
  | BasicError;

export type MigrationsGetArchiveForAuthenticatedUserResolver = msw.HttpResponseResolver<
  MigrationsGetArchiveForAuthenticatedUserRequestParams,
  MigrationsGetArchiveForAuthenticatedUserRequestBody,
  MigrationsGetArchiveForAuthenticatedUserResponseBody
>;

export type MigrationsDeleteArchiveForAuthenticatedUserRequestQuery = {};

export type MigrationsDeleteArchiveForAuthenticatedUserRequestHeaders = {};

export type MigrationsDeleteArchiveForAuthenticatedUserRequestParams = {
  readonly migration_id: string;
};

export type MigrationsDeleteArchiveForAuthenticatedUserRequestBody = never;

export type MigrationsDeleteArchiveForAuthenticatedUserResponseStatus =
  | 204
  | 304
  | 401
  | 403
  | 404;

export type MigrationsDeleteArchiveForAuthenticatedUserResponseBody =
  | never
  | BasicError;

export type MigrationsDeleteArchiveForAuthenticatedUserResolver = msw.HttpResponseResolver<
  MigrationsDeleteArchiveForAuthenticatedUserRequestParams,
  MigrationsDeleteArchiveForAuthenticatedUserRequestBody,
  MigrationsDeleteArchiveForAuthenticatedUserResponseBody
>;

export type MigrationsUnlockRepoForAuthenticatedUserRequestQuery = {};

export type MigrationsUnlockRepoForAuthenticatedUserRequestHeaders = {};

export type MigrationsUnlockRepoForAuthenticatedUserRequestParams = {
  readonly migration_id: string;
  readonly repo_name: string;
};

export type MigrationsUnlockRepoForAuthenticatedUserRequestBody = never;

export type MigrationsUnlockRepoForAuthenticatedUserResponseStatus =
  | 204
  | 304
  | 401
  | 403
  | 404;

export type MigrationsUnlockRepoForAuthenticatedUserResponseBody =
  | never
  | BasicError;

export type MigrationsUnlockRepoForAuthenticatedUserResolver = msw.HttpResponseResolver<
  MigrationsUnlockRepoForAuthenticatedUserRequestParams,
  MigrationsUnlockRepoForAuthenticatedUserRequestBody,
  MigrationsUnlockRepoForAuthenticatedUserResponseBody
>;

export type MigrationsListReposForAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type MigrationsListReposForAuthenticatedUserRequestHeaders = {};

export type MigrationsListReposForAuthenticatedUserRequestParams = {
  readonly migration_id: string;
};

export type MigrationsListReposForAuthenticatedUserRequestBody = never;

export type MigrationsListReposForAuthenticatedUserResponseStatus = 200 | 404;

export type MigrationsListReposForAuthenticatedUserResponseBody =
  | ReadonlyArray<MinimalRepository>
  | BasicError;

export type MigrationsListReposForAuthenticatedUserResolver = msw.HttpResponseResolver<
  MigrationsListReposForAuthenticatedUserRequestParams,
  MigrationsListReposForAuthenticatedUserRequestBody,
  MigrationsListReposForAuthenticatedUserResponseBody
>;

export type OrgsListForAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type OrgsListForAuthenticatedUserRequestHeaders = {};

export type OrgsListForAuthenticatedUserRequestParams = {};

export type OrgsListForAuthenticatedUserRequestBody = never;

export type OrgsListForAuthenticatedUserResponseStatus = 200 | 304 | 401 | 403;

export type OrgsListForAuthenticatedUserResponseBody =
  | ReadonlyArray<OrganizationSimple>
  | never
  | BasicError;

export type OrgsListForAuthenticatedUserResolver = msw.HttpResponseResolver<
  OrgsListForAuthenticatedUserRequestParams,
  OrgsListForAuthenticatedUserRequestBody,
  OrgsListForAuthenticatedUserResponseBody
>;

export type PackagesListPackagesForAuthenticatedUserRequestQuery = {
  readonly package_type: string;
  readonly visibility?: string;
};

export type PackagesListPackagesForAuthenticatedUserRequestHeaders = {};

export type PackagesListPackagesForAuthenticatedUserRequestParams = {};

export type PackagesListPackagesForAuthenticatedUserRequestBody = never;

export type PackagesListPackagesForAuthenticatedUserResponseStatus = 200;

export type PackagesListPackagesForAuthenticatedUserResponseBody = ReadonlyArray<Package>;

export type PackagesListPackagesForAuthenticatedUserResolver = msw.HttpResponseResolver<
  PackagesListPackagesForAuthenticatedUserRequestParams,
  PackagesListPackagesForAuthenticatedUserRequestBody,
  PackagesListPackagesForAuthenticatedUserResponseBody
>;

export type PackagesGetPackageForAuthenticatedUserRequestQuery = {};

export type PackagesGetPackageForAuthenticatedUserRequestHeaders = {};

export type PackagesGetPackageForAuthenticatedUserRequestParams = {
  readonly package_type: string;
  readonly package_name: string;
};

export type PackagesGetPackageForAuthenticatedUserRequestBody = never;

export type PackagesGetPackageForAuthenticatedUserResponseStatus = 200;

export type PackagesGetPackageForAuthenticatedUserResponseBody = Package;

export type PackagesGetPackageForAuthenticatedUserResolver = msw.HttpResponseResolver<
  PackagesGetPackageForAuthenticatedUserRequestParams,
  PackagesGetPackageForAuthenticatedUserRequestBody,
  PackagesGetPackageForAuthenticatedUserResponseBody
>;

export type PackagesDeletePackageForAuthenticatedUserRequestQuery = {};

export type PackagesDeletePackageForAuthenticatedUserRequestHeaders = {};

export type PackagesDeletePackageForAuthenticatedUserRequestParams = {
  readonly package_type: string;
  readonly package_name: string;
};

export type PackagesDeletePackageForAuthenticatedUserRequestBody = never;

export type PackagesDeletePackageForAuthenticatedUserResponseStatus =
  | 204
  | 401
  | 403
  | 404;

export type PackagesDeletePackageForAuthenticatedUserResponseBody =
  | never
  | BasicError;

export type PackagesDeletePackageForAuthenticatedUserResolver = msw.HttpResponseResolver<
  PackagesDeletePackageForAuthenticatedUserRequestParams,
  PackagesDeletePackageForAuthenticatedUserRequestBody,
  PackagesDeletePackageForAuthenticatedUserResponseBody
>;

export type PackagesRestorePackageForAuthenticatedUserRequestQuery = {
  readonly token?: string;
};

export type PackagesRestorePackageForAuthenticatedUserRequestHeaders = {};

export type PackagesRestorePackageForAuthenticatedUserRequestParams = {
  readonly package_type: string;
  readonly package_name: string;
};

export type PackagesRestorePackageForAuthenticatedUserRequestBody = never;

export type PackagesRestorePackageForAuthenticatedUserResponseStatus =
  | 204
  | 401
  | 403
  | 404;

export type PackagesRestorePackageForAuthenticatedUserResponseBody =
  | never
  | BasicError;

export type PackagesRestorePackageForAuthenticatedUserResolver = msw.HttpResponseResolver<
  PackagesRestorePackageForAuthenticatedUserRequestParams,
  PackagesRestorePackageForAuthenticatedUserRequestBody,
  PackagesRestorePackageForAuthenticatedUserResponseBody
>;

export type PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserRequestQuery = {
  readonly page?: string;
  readonly per_page?: string;
  readonly state?: string;
};

export type PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserRequestHeaders = {};

export type PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserRequestParams = {
  readonly package_type: string;
  readonly package_name: string;
};

export type PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserRequestBody = never;

export type PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponseStatus =
  | 200
  | 401
  | 403
  | 404;

export type PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponseBody =
  | ReadonlyArray<PackageVersion>
  | BasicError;

export type PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResolver = msw.HttpResponseResolver<
  PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserRequestParams,
  PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserRequestBody,
  PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponseBody
>;

export type PackagesGetPackageVersionForAuthenticatedUserRequestQuery = {};

export type PackagesGetPackageVersionForAuthenticatedUserRequestHeaders = {};

export type PackagesGetPackageVersionForAuthenticatedUserRequestParams = {
  readonly package_type: string;
  readonly package_name: string;
  readonly package_version_id: string;
};

export type PackagesGetPackageVersionForAuthenticatedUserRequestBody = never;

export type PackagesGetPackageVersionForAuthenticatedUserResponseStatus = 200;

export type PackagesGetPackageVersionForAuthenticatedUserResponseBody = PackageVersion;

export type PackagesGetPackageVersionForAuthenticatedUserResolver = msw.HttpResponseResolver<
  PackagesGetPackageVersionForAuthenticatedUserRequestParams,
  PackagesGetPackageVersionForAuthenticatedUserRequestBody,
  PackagesGetPackageVersionForAuthenticatedUserResponseBody
>;

export type PackagesDeletePackageVersionForAuthenticatedUserRequestQuery = {};

export type PackagesDeletePackageVersionForAuthenticatedUserRequestHeaders = {};

export type PackagesDeletePackageVersionForAuthenticatedUserRequestParams = {
  readonly package_type: string;
  readonly package_name: string;
  readonly package_version_id: string;
};

export type PackagesDeletePackageVersionForAuthenticatedUserRequestBody = never;

export type PackagesDeletePackageVersionForAuthenticatedUserResponseStatus =
  | 204
  | 401
  | 403
  | 404;

export type PackagesDeletePackageVersionForAuthenticatedUserResponseBody =
  | never
  | BasicError;

export type PackagesDeletePackageVersionForAuthenticatedUserResolver = msw.HttpResponseResolver<
  PackagesDeletePackageVersionForAuthenticatedUserRequestParams,
  PackagesDeletePackageVersionForAuthenticatedUserRequestBody,
  PackagesDeletePackageVersionForAuthenticatedUserResponseBody
>;

export type PackagesRestorePackageVersionForAuthenticatedUserRequestQuery = {};

export type PackagesRestorePackageVersionForAuthenticatedUserRequestHeaders = {};

export type PackagesRestorePackageVersionForAuthenticatedUserRequestParams = {
  readonly package_type: string;
  readonly package_name: string;
  readonly package_version_id: string;
};

export type PackagesRestorePackageVersionForAuthenticatedUserRequestBody = never;

export type PackagesRestorePackageVersionForAuthenticatedUserResponseStatus =
  | 204
  | 401
  | 403
  | 404;

export type PackagesRestorePackageVersionForAuthenticatedUserResponseBody =
  | never
  | BasicError;

export type PackagesRestorePackageVersionForAuthenticatedUserResolver = msw.HttpResponseResolver<
  PackagesRestorePackageVersionForAuthenticatedUserRequestParams,
  PackagesRestorePackageVersionForAuthenticatedUserRequestBody,
  PackagesRestorePackageVersionForAuthenticatedUserResponseBody
>;

export type ProjectsCreateForAuthenticatedUserRequestQuery = {};

export type ProjectsCreateForAuthenticatedUserRequestHeaders = {};

export type ProjectsCreateForAuthenticatedUserRequestParams = {};

export type ProjectsCreateForAuthenticatedUserRequestBody = {
  readonly name: string;
  readonly body?: string | null;
};

export type ProjectsCreateForAuthenticatedUserResponseStatus =
  | 201
  | 304
  | 401
  | 403
  | 422;

export type ProjectsCreateForAuthenticatedUserResponseBody =
  | Project
  | never
  | BasicError
  | ValidationErrorSimple;

export type ProjectsCreateForAuthenticatedUserResolver = msw.HttpResponseResolver<
  ProjectsCreateForAuthenticatedUserRequestParams,
  ProjectsCreateForAuthenticatedUserRequestBody,
  ProjectsCreateForAuthenticatedUserResponseBody
>;

export type UsersListPublicEmailsForAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type UsersListPublicEmailsForAuthenticatedUserRequestHeaders = {};

export type UsersListPublicEmailsForAuthenticatedUserRequestParams = {};

export type UsersListPublicEmailsForAuthenticatedUserRequestBody = never;

export type UsersListPublicEmailsForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404;

export type UsersListPublicEmailsForAuthenticatedUserResponseBody =
  | ReadonlyArray<Email>
  | never
  | BasicError;

export type UsersListPublicEmailsForAuthenticatedUserResolver = msw.HttpResponseResolver<
  UsersListPublicEmailsForAuthenticatedUserRequestParams,
  UsersListPublicEmailsForAuthenticatedUserRequestBody,
  UsersListPublicEmailsForAuthenticatedUserResponseBody
>;

export type ReposListForAuthenticatedUserRequestQuery = {
  readonly visibility?: string;
  readonly affiliation?: string;
  readonly type?: string;
  readonly sort?: string;
  readonly direction?: string;
  readonly per_page?: string;
  readonly page?: string;
  readonly since?: string;
  readonly before?: string;
};

export type ReposListForAuthenticatedUserRequestHeaders = {};

export type ReposListForAuthenticatedUserRequestParams = {};

export type ReposListForAuthenticatedUserRequestBody = never;

export type ReposListForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 422;

export type ReposListForAuthenticatedUserResponseBody =
  | ReadonlyArray<Repository>
  | never
  | BasicError
  | ValidationError;

export type ReposListForAuthenticatedUserResolver = msw.HttpResponseResolver<
  ReposListForAuthenticatedUserRequestParams,
  ReposListForAuthenticatedUserRequestBody,
  ReposListForAuthenticatedUserResponseBody
>;

export type ReposCreateForAuthenticatedUserRequestQuery = {};

export type ReposCreateForAuthenticatedUserRequestHeaders = {};

export type ReposCreateForAuthenticatedUserRequestParams = {};

export type ReposCreateForAuthenticatedUserRequestBody = {
  readonly name: string;
  readonly description?: string;
  readonly homepage?: string;
  readonly private?: boolean;
  readonly has_issues?: boolean;
  readonly has_projects?: boolean;
  readonly has_wiki?: boolean;
  readonly team_id?: number;
  readonly auto_init?: boolean;
  readonly gitignore_template?: string;
  readonly license_template?: string;
  readonly allow_squash_merge?: boolean;
  readonly allow_merge_commit?: boolean;
  readonly allow_rebase_merge?: boolean;
  readonly allow_auto_merge?: boolean;
  readonly delete_branch_on_merge?: boolean;
  readonly squash_merge_commit_title?: 'PR_TITLE' | 'COMMIT_OR_PR_TITLE';
  readonly squash_merge_commit_message?:
    | 'PR_BODY'
    | 'COMMIT_MESSAGES'
    | 'BLANK';
  readonly merge_commit_title?: 'PR_TITLE' | 'MERGE_MESSAGE';
  readonly merge_commit_message?: 'PR_BODY' | 'PR_TITLE' | 'BLANK';
  readonly has_downloads?: boolean;
  readonly is_template?: boolean;
};

export type ReposCreateForAuthenticatedUserResponseStatus =
  | 201
  | 304
  | 400
  | 401
  | 403
  | 404
  | 422;

export type ReposCreateForAuthenticatedUserResponseBody =
  | Repository
  | never
  | BasicError
  | ValidationError;

export type ReposCreateForAuthenticatedUserResolver = msw.HttpResponseResolver<
  ReposCreateForAuthenticatedUserRequestParams,
  ReposCreateForAuthenticatedUserRequestBody,
  ReposCreateForAuthenticatedUserResponseBody
>;

export type ReposListInvitationsForAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListInvitationsForAuthenticatedUserRequestHeaders = {};

export type ReposListInvitationsForAuthenticatedUserRequestParams = {};

export type ReposListInvitationsForAuthenticatedUserRequestBody = never;

export type ReposListInvitationsForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404;

export type ReposListInvitationsForAuthenticatedUserResponseBody =
  | ReadonlyArray<RepositoryInvitation>
  | never
  | BasicError;

export type ReposListInvitationsForAuthenticatedUserResolver = msw.HttpResponseResolver<
  ReposListInvitationsForAuthenticatedUserRequestParams,
  ReposListInvitationsForAuthenticatedUserRequestBody,
  ReposListInvitationsForAuthenticatedUserResponseBody
>;

export type ReposAcceptInvitationForAuthenticatedUserRequestQuery = {};

export type ReposAcceptInvitationForAuthenticatedUserRequestHeaders = {};

export type ReposAcceptInvitationForAuthenticatedUserRequestParams = {
  readonly invitation_id: string;
};

export type ReposAcceptInvitationForAuthenticatedUserRequestBody = never;

export type ReposAcceptInvitationForAuthenticatedUserResponseStatus =
  | 204
  | 304
  | 403
  | 404
  | 409;

export type ReposAcceptInvitationForAuthenticatedUserResponseBody =
  | never
  | BasicError;

export type ReposAcceptInvitationForAuthenticatedUserResolver = msw.HttpResponseResolver<
  ReposAcceptInvitationForAuthenticatedUserRequestParams,
  ReposAcceptInvitationForAuthenticatedUserRequestBody,
  ReposAcceptInvitationForAuthenticatedUserResponseBody
>;

export type ReposDeclineInvitationForAuthenticatedUserRequestQuery = {};

export type ReposDeclineInvitationForAuthenticatedUserRequestHeaders = {};

export type ReposDeclineInvitationForAuthenticatedUserRequestParams = {
  readonly invitation_id: string;
};

export type ReposDeclineInvitationForAuthenticatedUserRequestBody = never;

export type ReposDeclineInvitationForAuthenticatedUserResponseStatus =
  | 204
  | 304
  | 403
  | 404
  | 409;

export type ReposDeclineInvitationForAuthenticatedUserResponseBody =
  | never
  | BasicError;

export type ReposDeclineInvitationForAuthenticatedUserResolver = msw.HttpResponseResolver<
  ReposDeclineInvitationForAuthenticatedUserRequestParams,
  ReposDeclineInvitationForAuthenticatedUserRequestBody,
  ReposDeclineInvitationForAuthenticatedUserResponseBody
>;

export type UsersListSshSigningKeysForAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type UsersListSshSigningKeysForAuthenticatedUserRequestHeaders = {};

export type UsersListSshSigningKeysForAuthenticatedUserRequestParams = {};

export type UsersListSshSigningKeysForAuthenticatedUserRequestBody = never;

export type UsersListSshSigningKeysForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404;

export type SshSigningKey = {
  readonly key: string;
  readonly id: number;
  readonly title: string;
  readonly created_at: string;
};

export type UsersListSshSigningKeysForAuthenticatedUserResponseBody =
  | ReadonlyArray<SshSigningKey>
  | never
  | BasicError;

export type UsersListSshSigningKeysForAuthenticatedUserResolver = msw.HttpResponseResolver<
  UsersListSshSigningKeysForAuthenticatedUserRequestParams,
  UsersListSshSigningKeysForAuthenticatedUserRequestBody,
  UsersListSshSigningKeysForAuthenticatedUserResponseBody
>;

export type UsersCreateSshSigningKeyForAuthenticatedUserRequestQuery = {};

export type UsersCreateSshSigningKeyForAuthenticatedUserRequestHeaders = {};

export type UsersCreateSshSigningKeyForAuthenticatedUserRequestParams = {};

export type UsersCreateSshSigningKeyForAuthenticatedUserRequestBody = {
  readonly title?: string;
  readonly key: string;
};

export type UsersCreateSshSigningKeyForAuthenticatedUserResponseStatus =
  | 201
  | 304
  | 401
  | 403
  | 404
  | 422;

export type UsersCreateSshSigningKeyForAuthenticatedUserResponseBody =
  | SshSigningKey
  | never
  | BasicError
  | ValidationError;

export type UsersCreateSshSigningKeyForAuthenticatedUserResolver = msw.HttpResponseResolver<
  UsersCreateSshSigningKeyForAuthenticatedUserRequestParams,
  UsersCreateSshSigningKeyForAuthenticatedUserRequestBody,
  UsersCreateSshSigningKeyForAuthenticatedUserResponseBody
>;

export type UsersGetSshSigningKeyForAuthenticatedUserRequestQuery = {};

export type UsersGetSshSigningKeyForAuthenticatedUserRequestHeaders = {};

export type UsersGetSshSigningKeyForAuthenticatedUserRequestParams = {
  readonly ssh_signing_key_id: string;
};

export type UsersGetSshSigningKeyForAuthenticatedUserRequestBody = never;

export type UsersGetSshSigningKeyForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403
  | 404;

export type UsersGetSshSigningKeyForAuthenticatedUserResponseBody =
  | SshSigningKey
  | never
  | BasicError;

export type UsersGetSshSigningKeyForAuthenticatedUserResolver = msw.HttpResponseResolver<
  UsersGetSshSigningKeyForAuthenticatedUserRequestParams,
  UsersGetSshSigningKeyForAuthenticatedUserRequestBody,
  UsersGetSshSigningKeyForAuthenticatedUserResponseBody
>;

export type UsersDeleteSshSigningKeyForAuthenticatedUserRequestQuery = {};

export type UsersDeleteSshSigningKeyForAuthenticatedUserRequestHeaders = {};

export type UsersDeleteSshSigningKeyForAuthenticatedUserRequestParams = {
  readonly ssh_signing_key_id: string;
};

export type UsersDeleteSshSigningKeyForAuthenticatedUserRequestBody = never;

export type UsersDeleteSshSigningKeyForAuthenticatedUserResponseStatus =
  | 204
  | 304
  | 401
  | 403
  | 404;

export type UsersDeleteSshSigningKeyForAuthenticatedUserResponseBody =
  | never
  | BasicError;

export type UsersDeleteSshSigningKeyForAuthenticatedUserResolver = msw.HttpResponseResolver<
  UsersDeleteSshSigningKeyForAuthenticatedUserRequestParams,
  UsersDeleteSshSigningKeyForAuthenticatedUserRequestBody,
  UsersDeleteSshSigningKeyForAuthenticatedUserResponseBody
>;

export type ActivityListReposStarredByAuthenticatedUserRequestQuery = {
  readonly sort?: string;
  readonly direction?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ActivityListReposStarredByAuthenticatedUserRequestHeaders = {};

export type ActivityListReposStarredByAuthenticatedUserRequestParams = {};

export type ActivityListReposStarredByAuthenticatedUserRequestBody = never;

export type ActivityListReposStarredByAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403;

export type ActivityListReposStarredByAuthenticatedUserResponseBody =
  | ReadonlyArray<Repository>
  | never
  | BasicError;

export type ActivityListReposStarredByAuthenticatedUserResolver = msw.HttpResponseResolver<
  ActivityListReposStarredByAuthenticatedUserRequestParams,
  ActivityListReposStarredByAuthenticatedUserRequestBody,
  ActivityListReposStarredByAuthenticatedUserResponseBody
>;

export type ActivityCheckRepoIsStarredByAuthenticatedUserRequestQuery = {};

export type ActivityCheckRepoIsStarredByAuthenticatedUserRequestHeaders = {};

export type ActivityCheckRepoIsStarredByAuthenticatedUserRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActivityCheckRepoIsStarredByAuthenticatedUserRequestBody = never;

export type ActivityCheckRepoIsStarredByAuthenticatedUserResponseStatus =
  | 204
  | 304
  | 401
  | 403
  | 404;

export type ActivityCheckRepoIsStarredByAuthenticatedUserResponseBody =
  | never
  | BasicError;

export type ActivityCheckRepoIsStarredByAuthenticatedUserResolver = msw.HttpResponseResolver<
  ActivityCheckRepoIsStarredByAuthenticatedUserRequestParams,
  ActivityCheckRepoIsStarredByAuthenticatedUserRequestBody,
  ActivityCheckRepoIsStarredByAuthenticatedUserResponseBody
>;

export type ActivityStarRepoForAuthenticatedUserRequestQuery = {};

export type ActivityStarRepoForAuthenticatedUserRequestHeaders = {};

export type ActivityStarRepoForAuthenticatedUserRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActivityStarRepoForAuthenticatedUserRequestBody = never;

export type ActivityStarRepoForAuthenticatedUserResponseStatus =
  | 204
  | 304
  | 401
  | 403
  | 404;

export type ActivityStarRepoForAuthenticatedUserResponseBody =
  | never
  | BasicError;

export type ActivityStarRepoForAuthenticatedUserResolver = msw.HttpResponseResolver<
  ActivityStarRepoForAuthenticatedUserRequestParams,
  ActivityStarRepoForAuthenticatedUserRequestBody,
  ActivityStarRepoForAuthenticatedUserResponseBody
>;

export type ActivityUnstarRepoForAuthenticatedUserRequestQuery = {};

export type ActivityUnstarRepoForAuthenticatedUserRequestHeaders = {};

export type ActivityUnstarRepoForAuthenticatedUserRequestParams = {
  readonly owner: string;
  readonly repo: string;
};

export type ActivityUnstarRepoForAuthenticatedUserRequestBody = never;

export type ActivityUnstarRepoForAuthenticatedUserResponseStatus =
  | 204
  | 304
  | 401
  | 403
  | 404;

export type ActivityUnstarRepoForAuthenticatedUserResponseBody =
  | never
  | BasicError;

export type ActivityUnstarRepoForAuthenticatedUserResolver = msw.HttpResponseResolver<
  ActivityUnstarRepoForAuthenticatedUserRequestParams,
  ActivityUnstarRepoForAuthenticatedUserRequestBody,
  ActivityUnstarRepoForAuthenticatedUserResponseBody
>;

export type ActivityListWatchedReposForAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActivityListWatchedReposForAuthenticatedUserRequestHeaders = {};

export type ActivityListWatchedReposForAuthenticatedUserRequestParams = {};

export type ActivityListWatchedReposForAuthenticatedUserRequestBody = never;

export type ActivityListWatchedReposForAuthenticatedUserResponseStatus =
  | 200
  | 304
  | 401
  | 403;

export type ActivityListWatchedReposForAuthenticatedUserResponseBody =
  | ReadonlyArray<MinimalRepository>
  | never
  | BasicError;

export type ActivityListWatchedReposForAuthenticatedUserResolver = msw.HttpResponseResolver<
  ActivityListWatchedReposForAuthenticatedUserRequestParams,
  ActivityListWatchedReposForAuthenticatedUserRequestBody,
  ActivityListWatchedReposForAuthenticatedUserResponseBody
>;

export type TeamsListForAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type TeamsListForAuthenticatedUserRequestHeaders = {};

export type TeamsListForAuthenticatedUserRequestParams = {};

export type TeamsListForAuthenticatedUserRequestBody = never;

export type TeamsListForAuthenticatedUserResponseStatus = 200 | 304 | 403 | 404;

export type TeamsListForAuthenticatedUserResponseBody =
  | ReadonlyArray<FullTeam>
  | never
  | BasicError;

export type TeamsListForAuthenticatedUserResolver = msw.HttpResponseResolver<
  TeamsListForAuthenticatedUserRequestParams,
  TeamsListForAuthenticatedUserRequestBody,
  TeamsListForAuthenticatedUserResponseBody
>;

export type UsersListRequestQuery = {
  readonly since?: string;
  readonly per_page?: string;
};

export type UsersListRequestHeaders = {};

export type UsersListRequestParams = {};

export type UsersListRequestBody = never;

export type UsersListResponseStatus = 200 | 304;

export type UsersListResponseBody = ReadonlyArray<SimpleUser> | never;

export type UsersListResolver = msw.HttpResponseResolver<
  UsersListRequestParams,
  UsersListRequestBody,
  UsersListResponseBody
>;

export type UsersGetByUsernameRequestQuery = {};

export type UsersGetByUsernameRequestHeaders = {};

export type UsersGetByUsernameRequestParams = { readonly username: string };

export type UsersGetByUsernameRequestBody = never;

export type UsersGetByUsernameResponseStatus = 200 | 404;

export type UsersGetByUsernameResponseBody =
  | PrivateUser
  | PublicUser
  | BasicError;

export type UsersGetByUsernameResolver = msw.HttpResponseResolver<
  UsersGetByUsernameRequestParams,
  UsersGetByUsernameRequestBody,
  UsersGetByUsernameResponseBody
>;

export type ActivityListEventsForAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActivityListEventsForAuthenticatedUserRequestHeaders = {};

export type ActivityListEventsForAuthenticatedUserRequestParams = {
  readonly username: string;
};

export type ActivityListEventsForAuthenticatedUserRequestBody = never;

export type ActivityListEventsForAuthenticatedUserResponseStatus = 200;

export type ActivityListEventsForAuthenticatedUserResponseBody = ReadonlyArray<Event>;

export type ActivityListEventsForAuthenticatedUserResolver = msw.HttpResponseResolver<
  ActivityListEventsForAuthenticatedUserRequestParams,
  ActivityListEventsForAuthenticatedUserRequestBody,
  ActivityListEventsForAuthenticatedUserResponseBody
>;

export type ActivityListOrgEventsForAuthenticatedUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActivityListOrgEventsForAuthenticatedUserRequestHeaders = {};

export type ActivityListOrgEventsForAuthenticatedUserRequestParams = {
  readonly username: string;
  readonly org: string;
};

export type ActivityListOrgEventsForAuthenticatedUserRequestBody = never;

export type ActivityListOrgEventsForAuthenticatedUserResponseStatus = 200;

export type ActivityListOrgEventsForAuthenticatedUserResponseBody = ReadonlyArray<Event>;

export type ActivityListOrgEventsForAuthenticatedUserResolver = msw.HttpResponseResolver<
  ActivityListOrgEventsForAuthenticatedUserRequestParams,
  ActivityListOrgEventsForAuthenticatedUserRequestBody,
  ActivityListOrgEventsForAuthenticatedUserResponseBody
>;

export type ActivityListPublicEventsForUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActivityListPublicEventsForUserRequestHeaders = {};

export type ActivityListPublicEventsForUserRequestParams = {
  readonly username: string;
};

export type ActivityListPublicEventsForUserRequestBody = never;

export type ActivityListPublicEventsForUserResponseStatus = 200;

export type ActivityListPublicEventsForUserResponseBody = ReadonlyArray<Event>;

export type ActivityListPublicEventsForUserResolver = msw.HttpResponseResolver<
  ActivityListPublicEventsForUserRequestParams,
  ActivityListPublicEventsForUserRequestBody,
  ActivityListPublicEventsForUserResponseBody
>;

export type UsersListFollowersForUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type UsersListFollowersForUserRequestHeaders = {};

export type UsersListFollowersForUserRequestParams = {
  readonly username: string;
};

export type UsersListFollowersForUserRequestBody = never;

export type UsersListFollowersForUserResponseStatus = 200;

export type UsersListFollowersForUserResponseBody = ReadonlyArray<SimpleUser>;

export type UsersListFollowersForUserResolver = msw.HttpResponseResolver<
  UsersListFollowersForUserRequestParams,
  UsersListFollowersForUserRequestBody,
  UsersListFollowersForUserResponseBody
>;

export type UsersListFollowingForUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type UsersListFollowingForUserRequestHeaders = {};

export type UsersListFollowingForUserRequestParams = {
  readonly username: string;
};

export type UsersListFollowingForUserRequestBody = never;

export type UsersListFollowingForUserResponseStatus = 200;

export type UsersListFollowingForUserResponseBody = ReadonlyArray<SimpleUser>;

export type UsersListFollowingForUserResolver = msw.HttpResponseResolver<
  UsersListFollowingForUserRequestParams,
  UsersListFollowingForUserRequestBody,
  UsersListFollowingForUserResponseBody
>;

export type UsersCheckFollowingForUserRequestQuery = {};

export type UsersCheckFollowingForUserRequestHeaders = {};

export type UsersCheckFollowingForUserRequestParams = {
  readonly username: string;
  readonly target_user: string;
};

export type UsersCheckFollowingForUserRequestBody = never;

export type UsersCheckFollowingForUserResponseStatus = 204 | 404;

export type UsersCheckFollowingForUserResponseBody = never;

export type UsersCheckFollowingForUserResolver = msw.HttpResponseResolver<
  UsersCheckFollowingForUserRequestParams,
  UsersCheckFollowingForUserRequestBody,
  UsersCheckFollowingForUserResponseBody
>;

export type GistsListForUserRequestQuery = {
  readonly since?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type GistsListForUserRequestHeaders = {};

export type GistsListForUserRequestParams = { readonly username: string };

export type GistsListForUserRequestBody = never;

export type GistsListForUserResponseStatus = 200 | 422;

export type GistsListForUserResponseBody =
  | ReadonlyArray<BaseGist>
  | ValidationError;

export type GistsListForUserResolver = msw.HttpResponseResolver<
  GistsListForUserRequestParams,
  GistsListForUserRequestBody,
  GistsListForUserResponseBody
>;

export type UsersListGpgKeysForUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type UsersListGpgKeysForUserRequestHeaders = {};

export type UsersListGpgKeysForUserRequestParams = {
  readonly username: string;
};

export type UsersListGpgKeysForUserRequestBody = never;

export type UsersListGpgKeysForUserResponseStatus = 200;

export type UsersListGpgKeysForUserResponseBody = ReadonlyArray<GpgKey>;

export type UsersListGpgKeysForUserResolver = msw.HttpResponseResolver<
  UsersListGpgKeysForUserRequestParams,
  UsersListGpgKeysForUserRequestBody,
  UsersListGpgKeysForUserResponseBody
>;

export type UsersGetContextForUserRequestQuery = {
  readonly subject_type?: string;
  readonly subject_id?: string;
};

export type UsersGetContextForUserRequestHeaders = {};

export type UsersGetContextForUserRequestParams = { readonly username: string };

export type UsersGetContextForUserRequestBody = never;

export type UsersGetContextForUserResponseStatus = 200 | 404 | 422;

export type Hovercard = {
  readonly contexts: ReadonlyArray<{
    readonly message: string;
    readonly octicon: string;
  }>;
};

export type UsersGetContextForUserResponseBody =
  | Hovercard
  | BasicError
  | ValidationError;

export type UsersGetContextForUserResolver = msw.HttpResponseResolver<
  UsersGetContextForUserRequestParams,
  UsersGetContextForUserRequestBody,
  UsersGetContextForUserResponseBody
>;

export type AppsGetUserInstallationRequestQuery = {};

export type AppsGetUserInstallationRequestHeaders = {};

export type AppsGetUserInstallationRequestParams = {
  readonly username: string;
};

export type AppsGetUserInstallationRequestBody = never;

export type AppsGetUserInstallationResponseStatus = 200;

export type AppsGetUserInstallationResponseBody = Installation;

export type AppsGetUserInstallationResolver = msw.HttpResponseResolver<
  AppsGetUserInstallationRequestParams,
  AppsGetUserInstallationRequestBody,
  AppsGetUserInstallationResponseBody
>;

export type UsersListPublicKeysForUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type UsersListPublicKeysForUserRequestHeaders = {};

export type UsersListPublicKeysForUserRequestParams = {
  readonly username: string;
};

export type UsersListPublicKeysForUserRequestBody = never;

export type UsersListPublicKeysForUserResponseStatus = 200;

export type KeySimple = { readonly id: number; readonly key: string };

export type UsersListPublicKeysForUserResponseBody = ReadonlyArray<KeySimple>;

export type UsersListPublicKeysForUserResolver = msw.HttpResponseResolver<
  UsersListPublicKeysForUserRequestParams,
  UsersListPublicKeysForUserRequestBody,
  UsersListPublicKeysForUserResponseBody
>;

export type OrgsListForUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type OrgsListForUserRequestHeaders = {};

export type OrgsListForUserRequestParams = { readonly username: string };

export type OrgsListForUserRequestBody = never;

export type OrgsListForUserResponseStatus = 200;

export type OrgsListForUserResponseBody = ReadonlyArray<OrganizationSimple>;

export type OrgsListForUserResolver = msw.HttpResponseResolver<
  OrgsListForUserRequestParams,
  OrgsListForUserRequestBody,
  OrgsListForUserResponseBody
>;

export type PackagesListPackagesForUserRequestQuery = {
  readonly package_type: string;
  readonly visibility?: string;
};

export type PackagesListPackagesForUserRequestHeaders = {};

export type PackagesListPackagesForUserRequestParams = {
  readonly username: string;
};

export type PackagesListPackagesForUserRequestBody = never;

export type PackagesListPackagesForUserResponseStatus = 200 | 401 | 403;

export type PackagesListPackagesForUserResponseBody =
  | ReadonlyArray<Package>
  | BasicError;

export type PackagesListPackagesForUserResolver = msw.HttpResponseResolver<
  PackagesListPackagesForUserRequestParams,
  PackagesListPackagesForUserRequestBody,
  PackagesListPackagesForUserResponseBody
>;

export type PackagesGetPackageForUserRequestQuery = {};

export type PackagesGetPackageForUserRequestHeaders = {};

export type PackagesGetPackageForUserRequestParams = {
  readonly package_type: string;
  readonly package_name: string;
  readonly username: string;
};

export type PackagesGetPackageForUserRequestBody = never;

export type PackagesGetPackageForUserResponseStatus = 200;

export type PackagesGetPackageForUserResponseBody = Package;

export type PackagesGetPackageForUserResolver = msw.HttpResponseResolver<
  PackagesGetPackageForUserRequestParams,
  PackagesGetPackageForUserRequestBody,
  PackagesGetPackageForUserResponseBody
>;

export type PackagesDeletePackageForUserRequestQuery = {};

export type PackagesDeletePackageForUserRequestHeaders = {};

export type PackagesDeletePackageForUserRequestParams = {
  readonly package_type: string;
  readonly package_name: string;
  readonly username: string;
};

export type PackagesDeletePackageForUserRequestBody = never;

export type PackagesDeletePackageForUserResponseStatus = 204 | 401 | 403 | 404;

export type PackagesDeletePackageForUserResponseBody = never | BasicError;

export type PackagesDeletePackageForUserResolver = msw.HttpResponseResolver<
  PackagesDeletePackageForUserRequestParams,
  PackagesDeletePackageForUserRequestBody,
  PackagesDeletePackageForUserResponseBody
>;

export type PackagesRestorePackageForUserRequestQuery = {
  readonly token?: string;
};

export type PackagesRestorePackageForUserRequestHeaders = {};

export type PackagesRestorePackageForUserRequestParams = {
  readonly package_type: string;
  readonly package_name: string;
  readonly username: string;
};

export type PackagesRestorePackageForUserRequestBody = never;

export type PackagesRestorePackageForUserResponseStatus = 204 | 401 | 403 | 404;

export type PackagesRestorePackageForUserResponseBody = never | BasicError;

export type PackagesRestorePackageForUserResolver = msw.HttpResponseResolver<
  PackagesRestorePackageForUserRequestParams,
  PackagesRestorePackageForUserRequestBody,
  PackagesRestorePackageForUserResponseBody
>;

export type PackagesGetAllPackageVersionsForPackageOwnedByUserRequestQuery = {};

export type PackagesGetAllPackageVersionsForPackageOwnedByUserRequestHeaders = {};

export type PackagesGetAllPackageVersionsForPackageOwnedByUserRequestParams = {
  readonly package_type: string;
  readonly package_name: string;
  readonly username: string;
};

export type PackagesGetAllPackageVersionsForPackageOwnedByUserRequestBody = never;

export type PackagesGetAllPackageVersionsForPackageOwnedByUserResponseStatus =
  | 200
  | 401
  | 403
  | 404;

export type PackagesGetAllPackageVersionsForPackageOwnedByUserResponseBody =
  | ReadonlyArray<PackageVersion>
  | BasicError;

export type PackagesGetAllPackageVersionsForPackageOwnedByUserResolver = msw.HttpResponseResolver<
  PackagesGetAllPackageVersionsForPackageOwnedByUserRequestParams,
  PackagesGetAllPackageVersionsForPackageOwnedByUserRequestBody,
  PackagesGetAllPackageVersionsForPackageOwnedByUserResponseBody
>;

export type PackagesGetPackageVersionForUserRequestQuery = {};

export type PackagesGetPackageVersionForUserRequestHeaders = {};

export type PackagesGetPackageVersionForUserRequestParams = {
  readonly package_type: string;
  readonly package_name: string;
  readonly package_version_id: string;
  readonly username: string;
};

export type PackagesGetPackageVersionForUserRequestBody = never;

export type PackagesGetPackageVersionForUserResponseStatus = 200;

export type PackagesGetPackageVersionForUserResponseBody = PackageVersion;

export type PackagesGetPackageVersionForUserResolver = msw.HttpResponseResolver<
  PackagesGetPackageVersionForUserRequestParams,
  PackagesGetPackageVersionForUserRequestBody,
  PackagesGetPackageVersionForUserResponseBody
>;

export type PackagesDeletePackageVersionForUserRequestQuery = {};

export type PackagesDeletePackageVersionForUserRequestHeaders = {};

export type PackagesDeletePackageVersionForUserRequestParams = {
  readonly package_type: string;
  readonly package_name: string;
  readonly username: string;
  readonly package_version_id: string;
};

export type PackagesDeletePackageVersionForUserRequestBody = never;

export type PackagesDeletePackageVersionForUserResponseStatus =
  | 204
  | 401
  | 403
  | 404;

export type PackagesDeletePackageVersionForUserResponseBody =
  | never
  | BasicError;

export type PackagesDeletePackageVersionForUserResolver = msw.HttpResponseResolver<
  PackagesDeletePackageVersionForUserRequestParams,
  PackagesDeletePackageVersionForUserRequestBody,
  PackagesDeletePackageVersionForUserResponseBody
>;

export type PackagesRestorePackageVersionForUserRequestQuery = {};

export type PackagesRestorePackageVersionForUserRequestHeaders = {};

export type PackagesRestorePackageVersionForUserRequestParams = {
  readonly package_type: string;
  readonly package_name: string;
  readonly username: string;
  readonly package_version_id: string;
};

export type PackagesRestorePackageVersionForUserRequestBody = never;

export type PackagesRestorePackageVersionForUserResponseStatus =
  | 204
  | 401
  | 403
  | 404;

export type PackagesRestorePackageVersionForUserResponseBody =
  | never
  | BasicError;

export type PackagesRestorePackageVersionForUserResolver = msw.HttpResponseResolver<
  PackagesRestorePackageVersionForUserRequestParams,
  PackagesRestorePackageVersionForUserRequestBody,
  PackagesRestorePackageVersionForUserResponseBody
>;

export type ProjectsListForUserRequestQuery = {
  readonly state?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ProjectsListForUserRequestHeaders = {};

export type ProjectsListForUserRequestParams = { readonly username: string };

export type ProjectsListForUserRequestBody = never;

export type ProjectsListForUserResponseStatus = 200 | 422;

export type ProjectsListForUserResponseBody =
  | ReadonlyArray<Project>
  | ValidationError;

export type ProjectsListForUserResolver = msw.HttpResponseResolver<
  ProjectsListForUserRequestParams,
  ProjectsListForUserRequestBody,
  ProjectsListForUserResponseBody
>;

export type ActivityListReceivedEventsForUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActivityListReceivedEventsForUserRequestHeaders = {};

export type ActivityListReceivedEventsForUserRequestParams = {
  readonly username: string;
};

export type ActivityListReceivedEventsForUserRequestBody = never;

export type ActivityListReceivedEventsForUserResponseStatus = 200;

export type ActivityListReceivedEventsForUserResponseBody = ReadonlyArray<Event>;

export type ActivityListReceivedEventsForUserResolver = msw.HttpResponseResolver<
  ActivityListReceivedEventsForUserRequestParams,
  ActivityListReceivedEventsForUserRequestBody,
  ActivityListReceivedEventsForUserResponseBody
>;

export type ActivityListReceivedPublicEventsForUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActivityListReceivedPublicEventsForUserRequestHeaders = {};

export type ActivityListReceivedPublicEventsForUserRequestParams = {
  readonly username: string;
};

export type ActivityListReceivedPublicEventsForUserRequestBody = never;

export type ActivityListReceivedPublicEventsForUserResponseStatus = 200;

export type ActivityListReceivedPublicEventsForUserResponseBody = ReadonlyArray<Event>;

export type ActivityListReceivedPublicEventsForUserResolver = msw.HttpResponseResolver<
  ActivityListReceivedPublicEventsForUserRequestParams,
  ActivityListReceivedPublicEventsForUserRequestBody,
  ActivityListReceivedPublicEventsForUserResponseBody
>;

export type ReposListForUserRequestQuery = {
  readonly type?: string;
  readonly sort?: string;
  readonly direction?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ReposListForUserRequestHeaders = {};

export type ReposListForUserRequestParams = { readonly username: string };

export type ReposListForUserRequestBody = never;

export type ReposListForUserResponseStatus = 200;

export type ReposListForUserResponseBody = ReadonlyArray<MinimalRepository>;

export type ReposListForUserResolver = msw.HttpResponseResolver<
  ReposListForUserRequestParams,
  ReposListForUserRequestBody,
  ReposListForUserResponseBody
>;

export type BillingGetGithubActionsBillingUserRequestQuery = {};

export type BillingGetGithubActionsBillingUserRequestHeaders = {};

export type BillingGetGithubActionsBillingUserRequestParams = {
  readonly username: string;
};

export type BillingGetGithubActionsBillingUserRequestBody = never;

export type BillingGetGithubActionsBillingUserResponseStatus = 200;

export type BillingGetGithubActionsBillingUserResponseBody = ActionsBillingUsage;

export type BillingGetGithubActionsBillingUserResolver = msw.HttpResponseResolver<
  BillingGetGithubActionsBillingUserRequestParams,
  BillingGetGithubActionsBillingUserRequestBody,
  BillingGetGithubActionsBillingUserResponseBody
>;

export type BillingGetGithubPackagesBillingUserRequestQuery = {};

export type BillingGetGithubPackagesBillingUserRequestHeaders = {};

export type BillingGetGithubPackagesBillingUserRequestParams = {
  readonly username: string;
};

export type BillingGetGithubPackagesBillingUserRequestBody = never;

export type BillingGetGithubPackagesBillingUserResponseStatus = 200;

export type BillingGetGithubPackagesBillingUserResponseBody = PackagesBillingUsage;

export type BillingGetGithubPackagesBillingUserResolver = msw.HttpResponseResolver<
  BillingGetGithubPackagesBillingUserRequestParams,
  BillingGetGithubPackagesBillingUserRequestBody,
  BillingGetGithubPackagesBillingUserResponseBody
>;

export type BillingGetSharedStorageBillingUserRequestQuery = {};

export type BillingGetSharedStorageBillingUserRequestHeaders = {};

export type BillingGetSharedStorageBillingUserRequestParams = {
  readonly username: string;
};

export type BillingGetSharedStorageBillingUserRequestBody = never;

export type BillingGetSharedStorageBillingUserResponseStatus = 200;

export type BillingGetSharedStorageBillingUserResponseBody = CombinedBillingUsage;

export type BillingGetSharedStorageBillingUserResolver = msw.HttpResponseResolver<
  BillingGetSharedStorageBillingUserRequestParams,
  BillingGetSharedStorageBillingUserRequestBody,
  BillingGetSharedStorageBillingUserResponseBody
>;

export type UsersListSshSigningKeysForUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type UsersListSshSigningKeysForUserRequestHeaders = {};

export type UsersListSshSigningKeysForUserRequestParams = {
  readonly username: string;
};

export type UsersListSshSigningKeysForUserRequestBody = never;

export type UsersListSshSigningKeysForUserResponseStatus = 200;

export type UsersListSshSigningKeysForUserResponseBody = ReadonlyArray<SshSigningKey>;

export type UsersListSshSigningKeysForUserResolver = msw.HttpResponseResolver<
  UsersListSshSigningKeysForUserRequestParams,
  UsersListSshSigningKeysForUserRequestBody,
  UsersListSshSigningKeysForUserResponseBody
>;

export type ActivityListReposStarredByUserRequestQuery = {
  readonly sort?: string;
  readonly direction?: string;
  readonly per_page?: string;
  readonly page?: string;
};

export type ActivityListReposStarredByUserRequestHeaders = {};

export type ActivityListReposStarredByUserRequestParams = {
  readonly username: string;
};

export type ActivityListReposStarredByUserRequestBody = never;

export type ActivityListReposStarredByUserResponseStatus = 200;

export type StarredRepository = {
  readonly starred_at: string;
  readonly repo: Repository;
};

export type ActivityListReposStarredByUserResponseBody =
  | ReadonlyArray<StarredRepository>
  | ReadonlyArray<Repository>;

export type ActivityListReposStarredByUserResolver = msw.HttpResponseResolver<
  ActivityListReposStarredByUserRequestParams,
  ActivityListReposStarredByUserRequestBody,
  ActivityListReposStarredByUserResponseBody
>;

export type ActivityListReposWatchedByUserRequestQuery = {
  readonly per_page?: string;
  readonly page?: string;
};

export type ActivityListReposWatchedByUserRequestHeaders = {};

export type ActivityListReposWatchedByUserRequestParams = {
  readonly username: string;
};

export type ActivityListReposWatchedByUserRequestBody = never;

export type ActivityListReposWatchedByUserResponseStatus = 200;

export type ActivityListReposWatchedByUserResponseBody = ReadonlyArray<MinimalRepository>;

export type ActivityListReposWatchedByUserResolver = msw.HttpResponseResolver<
  ActivityListReposWatchedByUserRequestParams,
  ActivityListReposWatchedByUserRequestBody,
  ActivityListReposWatchedByUserResponseBody
>;

export type MetaGetZenRequestQuery = {};

export type MetaGetZenRequestHeaders = {};

export type MetaGetZenRequestParams = {};

export type MetaGetZenRequestBody = never;

export type MetaGetZenResponseStatus = 200;

export type MetaGetZenResponseBody = Buffer;

export type MetaGetZenResolver = msw.HttpResponseResolver<
  MetaGetZenRequestParams,
  MetaGetZenRequestBody,
  MetaGetZenResponseBody
>;

export function handleMetaRoot(resolver: MetaRootResolver) {
  return msw.http.get('/', resolver);
}

export function handleAppsGetAuthenticated(
  resolver: AppsGetAuthenticatedResolver
) {
  return msw.http.get('/app', resolver);
}

export function handleAppsCreateFromManifest(
  resolver: AppsCreateFromManifestResolver
) {
  return msw.http.post('/app-manifests/:code/conversions', resolver);
}

export function handleAppsGetWebhookConfigForApp(
  resolver: AppsGetWebhookConfigForAppResolver
) {
  return msw.http.get('/app/hook/config', resolver);
}

export function handleAppsUpdateWebhookConfigForApp(
  resolver: AppsUpdateWebhookConfigForAppResolver
) {
  return msw.http.patch('/app/hook/config', resolver);
}

export function handleAppsListWebhookDeliveries(
  resolver: AppsListWebhookDeliveriesResolver
) {
  return msw.http.get('/app/hook/deliveries', resolver);
}

export function handleAppsGetWebhookDelivery(
  resolver: AppsGetWebhookDeliveryResolver
) {
  return msw.http.get('/app/hook/deliveries/:delivery_id', resolver);
}

export function handleAppsRedeliverWebhookDelivery(
  resolver: AppsRedeliverWebhookDeliveryResolver
) {
  return msw.http.post('/app/hook/deliveries/:delivery_id/attempts', resolver);
}

export function handleAppsListInstallations(
  resolver: AppsListInstallationsResolver
) {
  return msw.http.get('/app/installations', resolver);
}

export function handleAppsGetInstallation(
  resolver: AppsGetInstallationResolver
) {
  return msw.http.get('/app/installations/:installation_id', resolver);
}

export function handleAppsDeleteInstallation(
  resolver: AppsDeleteInstallationResolver
) {
  return msw.http.delete('/app/installations/:installation_id', resolver);
}

export function handleAppsCreateInstallationAccessToken(
  resolver: AppsCreateInstallationAccessTokenResolver
) {
  return msw.http.post(
    '/app/installations/:installation_id/access_tokens',
    resolver
  );
}

export function handleAppsSuspendInstallation(
  resolver: AppsSuspendInstallationResolver
) {
  return msw.http.put(
    '/app/installations/:installation_id/suspended',
    resolver
  );
}

export function handleAppsUnsuspendInstallation(
  resolver: AppsUnsuspendInstallationResolver
) {
  return msw.http.delete(
    '/app/installations/:installation_id/suspended',
    resolver
  );
}

export function handleAppsDeleteAuthorization(
  resolver: AppsDeleteAuthorizationResolver
) {
  return msw.http.delete('/applications/:client_id/grant', resolver);
}

export function handleAppsCheckToken(resolver: AppsCheckTokenResolver) {
  return msw.http.post('/applications/:client_id/token', resolver);
}

export function handleAppsResetToken(resolver: AppsResetTokenResolver) {
  return msw.http.patch('/applications/:client_id/token', resolver);
}

export function handleAppsDeleteToken(resolver: AppsDeleteTokenResolver) {
  return msw.http.delete('/applications/:client_id/token', resolver);
}

export function handleAppsScopeToken(resolver: AppsScopeTokenResolver) {
  return msw.http.post('/applications/:client_id/token/scoped', resolver);
}

export function handleAppsGetBySlug(resolver: AppsGetBySlugResolver) {
  return msw.http.get('/apps/:app_slug', resolver);
}

export function handleCodesOfConductGetAllCodesOfConduct(
  resolver: CodesOfConductGetAllCodesOfConductResolver
) {
  return msw.http.get('/codes_of_conduct', resolver);
}

export function handleCodesOfConductGetConductCode(
  resolver: CodesOfConductGetConductCodeResolver
) {
  return msw.http.get('/codes_of_conduct/:key', resolver);
}

export function handleEmojisGet(resolver: EmojisGetResolver) {
  return msw.http.get('/emojis', resolver);
}

export function handleEnterpriseAdminGetServerStatistics(
  resolver: EnterpriseAdminGetServerStatisticsResolver
) {
  return msw.http.get(
    '/enterprise-installation/:enterprise_or_org/server-statistics',
    resolver
  );
}

export function handleActionsGetActionsCacheUsageForEnterprise(
  resolver: ActionsGetActionsCacheUsageForEnterpriseResolver
) {
  return msw.http.get('/enterprises/:enterprise/actions/cache/usage', resolver);
}

export function handleEnterpriseAdminGetGithubActionsPermissionsEnterprise(
  resolver: EnterpriseAdminGetGithubActionsPermissionsEnterpriseResolver
) {
  return msw.http.get('/enterprises/:enterprise/actions/permissions', resolver);
}

export function handleEnterpriseAdminSetGithubActionsPermissionsEnterprise(
  resolver: EnterpriseAdminSetGithubActionsPermissionsEnterpriseResolver
) {
  return msw.http.put('/enterprises/:enterprise/actions/permissions', resolver);
}

export function handleEnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise(
  resolver: EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResolver
) {
  return msw.http.get(
    '/enterprises/:enterprise/actions/permissions/organizations',
    resolver
  );
}

export function handleEnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise(
  resolver: EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResolver
) {
  return msw.http.put(
    '/enterprises/:enterprise/actions/permissions/organizations',
    resolver
  );
}

export function handleEnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise(
  resolver: EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResolver
) {
  return msw.http.put(
    '/enterprises/:enterprise/actions/permissions/organizations/:org_id',
    resolver
  );
}

export function handleEnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise(
  resolver: EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResolver
) {
  return msw.http.delete(
    '/enterprises/:enterprise/actions/permissions/organizations/:org_id',
    resolver
  );
}

export function handleEnterpriseAdminGetAllowedActionsEnterprise(
  resolver: EnterpriseAdminGetAllowedActionsEnterpriseResolver
) {
  return msw.http.get(
    '/enterprises/:enterprise/actions/permissions/selected-actions',
    resolver
  );
}

export function handleEnterpriseAdminSetAllowedActionsEnterprise(
  resolver: EnterpriseAdminSetAllowedActionsEnterpriseResolver
) {
  return msw.http.put(
    '/enterprises/:enterprise/actions/permissions/selected-actions',
    resolver
  );
}

export function handleActionsGetGithubActionsDefaultWorkflowPermissionsEnterprise(
  resolver: ActionsGetGithubActionsDefaultWorkflowPermissionsEnterpriseResolver
) {
  return msw.http.get(
    '/enterprises/:enterprise/actions/permissions/workflow',
    resolver
  );
}

export function handleActionsSetGithubActionsDefaultWorkflowPermissionsEnterprise(
  resolver: ActionsSetGithubActionsDefaultWorkflowPermissionsEnterpriseResolver
) {
  return msw.http.put(
    '/enterprises/:enterprise/actions/permissions/workflow',
    resolver
  );
}

export function handleEnterpriseAdminListSelfHostedRunnerGroupsForEnterprise(
  resolver: EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResolver
) {
  return msw.http.get(
    '/enterprises/:enterprise/actions/runner-groups',
    resolver
  );
}

export function handleEnterpriseAdminCreateSelfHostedRunnerGroupForEnterprise(
  resolver: EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResolver
) {
  return msw.http.post(
    '/enterprises/:enterprise/actions/runner-groups',
    resolver
  );
}

export function handleEnterpriseAdminGetSelfHostedRunnerGroupForEnterprise(
  resolver: EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResolver
) {
  return msw.http.get(
    '/enterprises/:enterprise/actions/runner-groups/:runner_group_id',
    resolver
  );
}

export function handleEnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise(
  resolver: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResolver
) {
  return msw.http.patch(
    '/enterprises/:enterprise/actions/runner-groups/:runner_group_id',
    resolver
  );
}

export function handleEnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise(
  resolver: EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResolver
) {
  return msw.http.delete(
    '/enterprises/:enterprise/actions/runner-groups/:runner_group_id',
    resolver
  );
}

export function handleEnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise(
  resolver: EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResolver
) {
  return msw.http.get(
    '/enterprises/:enterprise/actions/runner-groups/:runner_group_id/organizations',
    resolver
  );
}

export function handleEnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise(
  resolver: EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResolver
) {
  return msw.http.put(
    '/enterprises/:enterprise/actions/runner-groups/:runner_group_id/organizations',
    resolver
  );
}

export function handleEnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise(
  resolver: EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResolver
) {
  return msw.http.put(
    '/enterprises/:enterprise/actions/runner-groups/:runner_group_id/organizations/:org_id',
    resolver
  );
}

export function handleEnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise(
  resolver: EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResolver
) {
  return msw.http.delete(
    '/enterprises/:enterprise/actions/runner-groups/:runner_group_id/organizations/:org_id',
    resolver
  );
}

export function handleEnterpriseAdminListSelfHostedRunnersInGroupForEnterprise(
  resolver: EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResolver
) {
  return msw.http.get(
    '/enterprises/:enterprise/actions/runner-groups/:runner_group_id/runners',
    resolver
  );
}

export function handleEnterpriseAdminSetSelfHostedRunnersInGroupForEnterprise(
  resolver: EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResolver
) {
  return msw.http.put(
    '/enterprises/:enterprise/actions/runner-groups/:runner_group_id/runners',
    resolver
  );
}

export function handleEnterpriseAdminAddSelfHostedRunnerToGroupForEnterprise(
  resolver: EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResolver
) {
  return msw.http.put(
    '/enterprises/:enterprise/actions/runner-groups/:runner_group_id/runners/:runner_id',
    resolver
  );
}

export function handleEnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise(
  resolver: EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResolver
) {
  return msw.http.delete(
    '/enterprises/:enterprise/actions/runner-groups/:runner_group_id/runners/:runner_id',
    resolver
  );
}

export function handleEnterpriseAdminListSelfHostedRunnersForEnterprise(
  resolver: EnterpriseAdminListSelfHostedRunnersForEnterpriseResolver
) {
  return msw.http.get('/enterprises/:enterprise/actions/runners', resolver);
}

export function handleEnterpriseAdminListRunnerApplicationsForEnterprise(
  resolver: EnterpriseAdminListRunnerApplicationsForEnterpriseResolver
) {
  return msw.http.get(
    '/enterprises/:enterprise/actions/runners/downloads',
    resolver
  );
}

export function handleEnterpriseAdminCreateRegistrationTokenForEnterprise(
  resolver: EnterpriseAdminCreateRegistrationTokenForEnterpriseResolver
) {
  return msw.http.post(
    '/enterprises/:enterprise/actions/runners/registration-token',
    resolver
  );
}

export function handleEnterpriseAdminCreateRemoveTokenForEnterprise(
  resolver: EnterpriseAdminCreateRemoveTokenForEnterpriseResolver
) {
  return msw.http.post(
    '/enterprises/:enterprise/actions/runners/remove-token',
    resolver
  );
}

export function handleEnterpriseAdminGetSelfHostedRunnerForEnterprise(
  resolver: EnterpriseAdminGetSelfHostedRunnerForEnterpriseResolver
) {
  return msw.http.get(
    '/enterprises/:enterprise/actions/runners/:runner_id',
    resolver
  );
}

export function handleEnterpriseAdminDeleteSelfHostedRunnerFromEnterprise(
  resolver: EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResolver
) {
  return msw.http.delete(
    '/enterprises/:enterprise/actions/runners/:runner_id',
    resolver
  );
}

export function handleEnterpriseAdminListLabelsForSelfHostedRunnerForEnterprise(
  resolver: EnterpriseAdminListLabelsForSelfHostedRunnerForEnterpriseResolver
) {
  return msw.http.get(
    '/enterprises/:enterprise/actions/runners/:runner_id/labels',
    resolver
  );
}

export function handleEnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise(
  resolver: EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseResolver
) {
  return msw.http.post(
    '/enterprises/:enterprise/actions/runners/:runner_id/labels',
    resolver
  );
}

export function handleEnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise(
  resolver: EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseResolver
) {
  return msw.http.put(
    '/enterprises/:enterprise/actions/runners/:runner_id/labels',
    resolver
  );
}

export function handleEnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise(
  resolver: EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseResolver
) {
  return msw.http.delete(
    '/enterprises/:enterprise/actions/runners/:runner_id/labels',
    resolver
  );
}

export function handleEnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise(
  resolver: EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseResolver
) {
  return msw.http.delete(
    '/enterprises/:enterprise/actions/runners/:runner_id/labels/:name',
    resolver
  );
}

export function handleCodeScanningListAlertsForEnterprise(
  resolver: CodeScanningListAlertsForEnterpriseResolver
) {
  return msw.http.get(
    '/enterprises/:enterprise/code-scanning/alerts',
    resolver
  );
}

export function handleSecretScanningListAlertsForEnterprise(
  resolver: SecretScanningListAlertsForEnterpriseResolver
) {
  return msw.http.get(
    '/enterprises/:enterprise/secret-scanning/alerts',
    resolver
  );
}

export function handleBillingGetGithubAdvancedSecurityBillingGhe(
  resolver: BillingGetGithubAdvancedSecurityBillingGheResolver
) {
  return msw.http.get(
    '/enterprises/:enterprise/settings/billing/advanced-security',
    resolver
  );
}

export function handleActivityListPublicEvents(
  resolver: ActivityListPublicEventsResolver
) {
  return msw.http.get('/events', resolver);
}

export function handleActivityGetFeeds(resolver: ActivityGetFeedsResolver) {
  return msw.http.get('/feeds', resolver);
}

export function handleGistsList(resolver: GistsListResolver) {
  return msw.http.get('/gists', resolver);
}

export function handleGistsCreate(resolver: GistsCreateResolver) {
  return msw.http.post('/gists', resolver);
}

export function handleGistsListPublic(resolver: GistsListPublicResolver) {
  return msw.http.get('/gists/public', resolver);
}

export function handleGistsListStarred(resolver: GistsListStarredResolver) {
  return msw.http.get('/gists/starred', resolver);
}

export function handleGistsGet(resolver: GistsGetResolver) {
  return msw.http.get('/gists/:gist_id', resolver);
}

export function handleGistsUpdate(resolver: GistsUpdateResolver) {
  return msw.http.patch('/gists/:gist_id', resolver);
}

export function handleGistsDelete(resolver: GistsDeleteResolver) {
  return msw.http.delete('/gists/:gist_id', resolver);
}

export function handleGistsListComments(resolver: GistsListCommentsResolver) {
  return msw.http.get('/gists/:gist_id/comments', resolver);
}

export function handleGistsCreateComment(resolver: GistsCreateCommentResolver) {
  return msw.http.post('/gists/:gist_id/comments', resolver);
}

export function handleGistsGetComment(resolver: GistsGetCommentResolver) {
  return msw.http.get('/gists/:gist_id/comments/:comment_id', resolver);
}

export function handleGistsUpdateComment(resolver: GistsUpdateCommentResolver) {
  return msw.http.patch('/gists/:gist_id/comments/:comment_id', resolver);
}

export function handleGistsDeleteComment(resolver: GistsDeleteCommentResolver) {
  return msw.http.delete('/gists/:gist_id/comments/:comment_id', resolver);
}

export function handleGistsListCommits(resolver: GistsListCommitsResolver) {
  return msw.http.get('/gists/:gist_id/commits', resolver);
}

export function handleGistsListForks(resolver: GistsListForksResolver) {
  return msw.http.get('/gists/:gist_id/forks', resolver);
}

export function handleGistsFork(resolver: GistsForkResolver) {
  return msw.http.post('/gists/:gist_id/forks', resolver);
}

export function handleGistsCheckIsStarred(
  resolver: GistsCheckIsStarredResolver
) {
  return msw.http.get('/gists/:gist_id/star', resolver);
}

export function handleGistsStar(resolver: GistsStarResolver) {
  return msw.http.put('/gists/:gist_id/star', resolver);
}

export function handleGistsUnstar(resolver: GistsUnstarResolver) {
  return msw.http.delete('/gists/:gist_id/star', resolver);
}

export function handleGistsGetRevision(resolver: GistsGetRevisionResolver) {
  return msw.http.get('/gists/:gist_id/:sha', resolver);
}

export function handleGitignoreGetAllTemplates(
  resolver: GitignoreGetAllTemplatesResolver
) {
  return msw.http.get('/gitignore/templates', resolver);
}

export function handleGitignoreGetTemplate(
  resolver: GitignoreGetTemplateResolver
) {
  return msw.http.get('/gitignore/templates/:name', resolver);
}

export function handleAppsListReposAccessibleToInstallation(
  resolver: AppsListReposAccessibleToInstallationResolver
) {
  return msw.http.get('/installation/repositories', resolver);
}

export function handleAppsRevokeInstallationAccessToken(
  resolver: AppsRevokeInstallationAccessTokenResolver
) {
  return msw.http.delete('/installation/token', resolver);
}

export function handleIssuesList(resolver: IssuesListResolver) {
  return msw.http.get('/issues', resolver);
}

export function handleLicensesGetAllCommonlyUsed(
  resolver: LicensesGetAllCommonlyUsedResolver
) {
  return msw.http.get('/licenses', resolver);
}

export function handleLicensesGet(resolver: LicensesGetResolver) {
  return msw.http.get('/licenses/:license', resolver);
}

export function handleMarkdownRender(resolver: MarkdownRenderResolver) {
  return msw.http.post('/markdown', resolver);
}

export function handleMarkdownRenderRaw(resolver: MarkdownRenderRawResolver) {
  return msw.http.post('/markdown/raw', resolver);
}

export function handleAppsGetSubscriptionPlanForAccount(
  resolver: AppsGetSubscriptionPlanForAccountResolver
) {
  return msw.http.get('/marketplace_listing/accounts/:account_id', resolver);
}

export function handleAppsListPlans(resolver: AppsListPlansResolver) {
  return msw.http.get('/marketplace_listing/plans', resolver);
}

export function handleAppsListAccountsForPlan(
  resolver: AppsListAccountsForPlanResolver
) {
  return msw.http.get('/marketplace_listing/plans/:plan_id/accounts', resolver);
}

export function handleAppsGetSubscriptionPlanForAccountStubbed(
  resolver: AppsGetSubscriptionPlanForAccountStubbedResolver
) {
  return msw.http.get(
    '/marketplace_listing/stubbed/accounts/:account_id',
    resolver
  );
}

export function handleAppsListPlansStubbed(
  resolver: AppsListPlansStubbedResolver
) {
  return msw.http.get('/marketplace_listing/stubbed/plans', resolver);
}

export function handleAppsListAccountsForPlanStubbed(
  resolver: AppsListAccountsForPlanStubbedResolver
) {
  return msw.http.get(
    '/marketplace_listing/stubbed/plans/:plan_id/accounts',
    resolver
  );
}

export function handleMetaGet(resolver: MetaGetResolver) {
  return msw.http.get('/meta', resolver);
}

export function handleActivityListPublicEventsForRepoNetwork(
  resolver: ActivityListPublicEventsForRepoNetworkResolver
) {
  return msw.http.get('/networks/:owner/:repo/events', resolver);
}

export function handleActivityListNotificationsForAuthenticatedUser(
  resolver: ActivityListNotificationsForAuthenticatedUserResolver
) {
  return msw.http.get('/notifications', resolver);
}

export function handleActivityMarkNotificationsAsRead(
  resolver: ActivityMarkNotificationsAsReadResolver
) {
  return msw.http.put('/notifications', resolver);
}

export function handleActivityGetThread(resolver: ActivityGetThreadResolver) {
  return msw.http.get('/notifications/threads/:thread_id', resolver);
}

export function handleActivityMarkThreadAsRead(
  resolver: ActivityMarkThreadAsReadResolver
) {
  return msw.http.patch('/notifications/threads/:thread_id', resolver);
}

export function handleActivityGetThreadSubscriptionForAuthenticatedUser(
  resolver: ActivityGetThreadSubscriptionForAuthenticatedUserResolver
) {
  return msw.http.get(
    '/notifications/threads/:thread_id/subscription',
    resolver
  );
}

export function handleActivitySetThreadSubscription(
  resolver: ActivitySetThreadSubscriptionResolver
) {
  return msw.http.put(
    '/notifications/threads/:thread_id/subscription',
    resolver
  );
}

export function handleActivityDeleteThreadSubscription(
  resolver: ActivityDeleteThreadSubscriptionResolver
) {
  return msw.http.delete(
    '/notifications/threads/:thread_id/subscription',
    resolver
  );
}

export function handleMetaGetOctocat(resolver: MetaGetOctocatResolver) {
  return msw.http.get('/octocat', resolver);
}

export function handleOrgsList(resolver: OrgsListResolver) {
  return msw.http.get('/organizations', resolver);
}

export function handleOrgsListCustomRoles(
  resolver: OrgsListCustomRolesResolver
) {
  return msw.http.get('/organizations/:organization_id/custom_roles', resolver);
}

export function handleOrgsGet(resolver: OrgsGetResolver) {
  return msw.http.get('/orgs/:org', resolver);
}

export function handleOrgsUpdate(resolver: OrgsUpdateResolver) {
  return msw.http.patch('/orgs/:org', resolver);
}

export function handleActionsGetActionsCacheUsageForOrg(
  resolver: ActionsGetActionsCacheUsageForOrgResolver
) {
  return msw.http.get('/orgs/:org/actions/cache/usage', resolver);
}

export function handleActionsGetActionsCacheUsageByRepoForOrg(
  resolver: ActionsGetActionsCacheUsageByRepoForOrgResolver
) {
  return msw.http.get('/orgs/:org/actions/cache/usage-by-repository', resolver);
}

export function handleActionsGetGithubActionsPermissionsOrganization(
  resolver: ActionsGetGithubActionsPermissionsOrganizationResolver
) {
  return msw.http.get('/orgs/:org/actions/permissions', resolver);
}

export function handleActionsSetGithubActionsPermissionsOrganization(
  resolver: ActionsSetGithubActionsPermissionsOrganizationResolver
) {
  return msw.http.put('/orgs/:org/actions/permissions', resolver);
}

export function handleActionsListSelectedRepositoriesEnabledGithubActionsOrganization(
  resolver: ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResolver
) {
  return msw.http.get('/orgs/:org/actions/permissions/repositories', resolver);
}

export function handleActionsSetSelectedRepositoriesEnabledGithubActionsOrganization(
  resolver: ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResolver
) {
  return msw.http.put('/orgs/:org/actions/permissions/repositories', resolver);
}

export function handleActionsEnableSelectedRepositoryGithubActionsOrganization(
  resolver: ActionsEnableSelectedRepositoryGithubActionsOrganizationResolver
) {
  return msw.http.put(
    '/orgs/:org/actions/permissions/repositories/:repository_id',
    resolver
  );
}

export function handleActionsDisableSelectedRepositoryGithubActionsOrganization(
  resolver: ActionsDisableSelectedRepositoryGithubActionsOrganizationResolver
) {
  return msw.http.delete(
    '/orgs/:org/actions/permissions/repositories/:repository_id',
    resolver
  );
}

export function handleActionsGetAllowedActionsOrganization(
  resolver: ActionsGetAllowedActionsOrganizationResolver
) {
  return msw.http.get(
    '/orgs/:org/actions/permissions/selected-actions',
    resolver
  );
}

export function handleActionsSetAllowedActionsOrganization(
  resolver: ActionsSetAllowedActionsOrganizationResolver
) {
  return msw.http.put(
    '/orgs/:org/actions/permissions/selected-actions',
    resolver
  );
}

export function handleActionsGetGithubActionsDefaultWorkflowPermissionsOrganization(
  resolver: ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationResolver
) {
  return msw.http.get('/orgs/:org/actions/permissions/workflow', resolver);
}

export function handleActionsSetGithubActionsDefaultWorkflowPermissionsOrganization(
  resolver: ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationResolver
) {
  return msw.http.put('/orgs/:org/actions/permissions/workflow', resolver);
}

export function handleActionsListSelfHostedRunnerGroupsForOrg(
  resolver: ActionsListSelfHostedRunnerGroupsForOrgResolver
) {
  return msw.http.get('/orgs/:org/actions/runner-groups', resolver);
}

export function handleActionsCreateSelfHostedRunnerGroupForOrg(
  resolver: ActionsCreateSelfHostedRunnerGroupForOrgResolver
) {
  return msw.http.post('/orgs/:org/actions/runner-groups', resolver);
}

export function handleActionsGetSelfHostedRunnerGroupForOrg(
  resolver: ActionsGetSelfHostedRunnerGroupForOrgResolver
) {
  return msw.http.get(
    '/orgs/:org/actions/runner-groups/:runner_group_id',
    resolver
  );
}

export function handleActionsUpdateSelfHostedRunnerGroupForOrg(
  resolver: ActionsUpdateSelfHostedRunnerGroupForOrgResolver
) {
  return msw.http.patch(
    '/orgs/:org/actions/runner-groups/:runner_group_id',
    resolver
  );
}

export function handleActionsDeleteSelfHostedRunnerGroupFromOrg(
  resolver: ActionsDeleteSelfHostedRunnerGroupFromOrgResolver
) {
  return msw.http.delete(
    '/orgs/:org/actions/runner-groups/:runner_group_id',
    resolver
  );
}

export function handleActionsListRepoAccessToSelfHostedRunnerGroupInOrg(
  resolver: ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResolver
) {
  return msw.http.get(
    '/orgs/:org/actions/runner-groups/:runner_group_id/repositories',
    resolver
  );
}

export function handleActionsSetRepoAccessToSelfHostedRunnerGroupInOrg(
  resolver: ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResolver
) {
  return msw.http.put(
    '/orgs/:org/actions/runner-groups/:runner_group_id/repositories',
    resolver
  );
}

export function handleActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg(
  resolver: ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResolver
) {
  return msw.http.delete(
    '/orgs/:org/actions/runner-groups/:runner_group_id/repositories/:repository_id',
    resolver
  );
}

export function handleActionsListSelfHostedRunnersInGroupForOrg(
  resolver: ActionsListSelfHostedRunnersInGroupForOrgResolver
) {
  return msw.http.get(
    '/orgs/:org/actions/runner-groups/:runner_group_id/runners',
    resolver
  );
}

export function handleActionsSetSelfHostedRunnersInGroupForOrg(
  resolver: ActionsSetSelfHostedRunnersInGroupForOrgResolver
) {
  return msw.http.put(
    '/orgs/:org/actions/runner-groups/:runner_group_id/runners',
    resolver
  );
}

export function handleActionsAddSelfHostedRunnerToGroupForOrg(
  resolver: ActionsAddSelfHostedRunnerToGroupForOrgResolver
) {
  return msw.http.put(
    '/orgs/:org/actions/runner-groups/:runner_group_id/runners/:runner_id',
    resolver
  );
}

export function handleActionsRemoveSelfHostedRunnerFromGroupForOrg(
  resolver: ActionsRemoveSelfHostedRunnerFromGroupForOrgResolver
) {
  return msw.http.delete(
    '/orgs/:org/actions/runner-groups/:runner_group_id/runners/:runner_id',
    resolver
  );
}

export function handleActionsListSelfHostedRunnersForOrg(
  resolver: ActionsListSelfHostedRunnersForOrgResolver
) {
  return msw.http.get('/orgs/:org/actions/runners', resolver);
}

export function handleActionsListRunnerApplicationsForOrg(
  resolver: ActionsListRunnerApplicationsForOrgResolver
) {
  return msw.http.get('/orgs/:org/actions/runners/downloads', resolver);
}

export function handleActionsCreateRegistrationTokenForOrg(
  resolver: ActionsCreateRegistrationTokenForOrgResolver
) {
  return msw.http.post(
    '/orgs/:org/actions/runners/registration-token',
    resolver
  );
}

export function handleActionsCreateRemoveTokenForOrg(
  resolver: ActionsCreateRemoveTokenForOrgResolver
) {
  return msw.http.post('/orgs/:org/actions/runners/remove-token', resolver);
}

export function handleActionsGetSelfHostedRunnerForOrg(
  resolver: ActionsGetSelfHostedRunnerForOrgResolver
) {
  return msw.http.get('/orgs/:org/actions/runners/:runner_id', resolver);
}

export function handleActionsDeleteSelfHostedRunnerFromOrg(
  resolver: ActionsDeleteSelfHostedRunnerFromOrgResolver
) {
  return msw.http.delete('/orgs/:org/actions/runners/:runner_id', resolver);
}

export function handleActionsListLabelsForSelfHostedRunnerForOrg(
  resolver: ActionsListLabelsForSelfHostedRunnerForOrgResolver
) {
  return msw.http.get('/orgs/:org/actions/runners/:runner_id/labels', resolver);
}

export function handleActionsAddCustomLabelsToSelfHostedRunnerForOrg(
  resolver: ActionsAddCustomLabelsToSelfHostedRunnerForOrgResolver
) {
  return msw.http.post(
    '/orgs/:org/actions/runners/:runner_id/labels',
    resolver
  );
}

export function handleActionsSetCustomLabelsForSelfHostedRunnerForOrg(
  resolver: ActionsSetCustomLabelsForSelfHostedRunnerForOrgResolver
) {
  return msw.http.put('/orgs/:org/actions/runners/:runner_id/labels', resolver);
}

export function handleActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg(
  resolver: ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgResolver
) {
  return msw.http.delete(
    '/orgs/:org/actions/runners/:runner_id/labels',
    resolver
  );
}

export function handleActionsRemoveCustomLabelFromSelfHostedRunnerForOrg(
  resolver: ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgResolver
) {
  return msw.http.delete(
    '/orgs/:org/actions/runners/:runner_id/labels/:name',
    resolver
  );
}

export function handleActionsListOrgSecrets(
  resolver: ActionsListOrgSecretsResolver
) {
  return msw.http.get('/orgs/:org/actions/secrets', resolver);
}

export function handleActionsGetOrgPublicKey(
  resolver: ActionsGetOrgPublicKeyResolver
) {
  return msw.http.get('/orgs/:org/actions/secrets/public-key', resolver);
}

export function handleActionsGetOrgSecret(
  resolver: ActionsGetOrgSecretResolver
) {
  return msw.http.get('/orgs/:org/actions/secrets/:secret_name', resolver);
}

export function handleActionsCreateOrUpdateOrgSecret(
  resolver: ActionsCreateOrUpdateOrgSecretResolver
) {
  return msw.http.put('/orgs/:org/actions/secrets/:secret_name', resolver);
}

export function handleActionsDeleteOrgSecret(
  resolver: ActionsDeleteOrgSecretResolver
) {
  return msw.http.delete('/orgs/:org/actions/secrets/:secret_name', resolver);
}

export function handleActionsListSelectedReposForOrgSecret(
  resolver: ActionsListSelectedReposForOrgSecretResolver
) {
  return msw.http.get(
    '/orgs/:org/actions/secrets/:secret_name/repositories',
    resolver
  );
}

export function handleActionsSetSelectedReposForOrgSecret(
  resolver: ActionsSetSelectedReposForOrgSecretResolver
) {
  return msw.http.put(
    '/orgs/:org/actions/secrets/:secret_name/repositories',
    resolver
  );
}

export function handleActionsAddSelectedRepoToOrgSecret(
  resolver: ActionsAddSelectedRepoToOrgSecretResolver
) {
  return msw.http.put(
    '/orgs/:org/actions/secrets/:secret_name/repositories/:repository_id',
    resolver
  );
}

export function handleActionsRemoveSelectedRepoFromOrgSecret(
  resolver: ActionsRemoveSelectedRepoFromOrgSecretResolver
) {
  return msw.http.delete(
    '/orgs/:org/actions/secrets/:secret_name/repositories/:repository_id',
    resolver
  );
}

export function handleOrgsListBlockedUsers(
  resolver: OrgsListBlockedUsersResolver
) {
  return msw.http.get('/orgs/:org/blocks', resolver);
}

export function handleOrgsCheckBlockedUser(
  resolver: OrgsCheckBlockedUserResolver
) {
  return msw.http.get('/orgs/:org/blocks/:username', resolver);
}

export function handleOrgsBlockUser(resolver: OrgsBlockUserResolver) {
  return msw.http.put('/orgs/:org/blocks/:username', resolver);
}

export function handleOrgsUnblockUser(resolver: OrgsUnblockUserResolver) {
  return msw.http.delete('/orgs/:org/blocks/:username', resolver);
}

export function handleCodeScanningListAlertsForOrg(
  resolver: CodeScanningListAlertsForOrgResolver
) {
  return msw.http.get('/orgs/:org/code-scanning/alerts', resolver);
}

export function handleCodespacesListInOrganization(
  resolver: CodespacesListInOrganizationResolver
) {
  return msw.http.get('/orgs/:org/codespaces', resolver);
}

export function handleCodespacesSetCodespacesBilling(
  resolver: CodespacesSetCodespacesBillingResolver
) {
  return msw.http.put('/orgs/:org/codespaces/billing', resolver);
}

export function handleCodespacesListOrgSecrets(
  resolver: CodespacesListOrgSecretsResolver
) {
  return msw.http.get('/orgs/:org/codespaces/secrets', resolver);
}

export function handleCodespacesGetOrgPublicKey(
  resolver: CodespacesGetOrgPublicKeyResolver
) {
  return msw.http.get('/orgs/:org/codespaces/secrets/public-key', resolver);
}

export function handleCodespacesGetOrgSecret(
  resolver: CodespacesGetOrgSecretResolver
) {
  return msw.http.get('/orgs/:org/codespaces/secrets/:secret_name', resolver);
}

export function handleCodespacesCreateOrUpdateOrgSecret(
  resolver: CodespacesCreateOrUpdateOrgSecretResolver
) {
  return msw.http.put('/orgs/:org/codespaces/secrets/:secret_name', resolver);
}

export function handleCodespacesDeleteOrgSecret(
  resolver: CodespacesDeleteOrgSecretResolver
) {
  return msw.http.delete(
    '/orgs/:org/codespaces/secrets/:secret_name',
    resolver
  );
}

export function handleCodespacesListSelectedReposForOrgSecret(
  resolver: CodespacesListSelectedReposForOrgSecretResolver
) {
  return msw.http.get(
    '/orgs/:org/codespaces/secrets/:secret_name/repositories',
    resolver
  );
}

export function handleCodespacesSetSelectedReposForOrgSecret(
  resolver: CodespacesSetSelectedReposForOrgSecretResolver
) {
  return msw.http.put(
    '/orgs/:org/codespaces/secrets/:secret_name/repositories',
    resolver
  );
}

export function handleCodespacesAddSelectedRepoToOrgSecret(
  resolver: CodespacesAddSelectedRepoToOrgSecretResolver
) {
  return msw.http.put(
    '/orgs/:org/codespaces/secrets/:secret_name/repositories/:repository_id',
    resolver
  );
}

export function handleCodespacesRemoveSelectedRepoFromOrgSecret(
  resolver: CodespacesRemoveSelectedRepoFromOrgSecretResolver
) {
  return msw.http.delete(
    '/orgs/:org/codespaces/secrets/:secret_name/repositories/:repository_id',
    resolver
  );
}

export function handleOrgsCreateCustomRole(
  resolver: OrgsCreateCustomRoleResolver
) {
  return msw.http.post('/orgs/:org/custom_roles', resolver);
}

export function handleOrgsGetCustomRole(resolver: OrgsGetCustomRoleResolver) {
  return msw.http.get('/orgs/:org/custom_roles/:role_id', resolver);
}

export function handleOrgsUpdateCustomRole(
  resolver: OrgsUpdateCustomRoleResolver
) {
  return msw.http.patch('/orgs/:org/custom_roles/:role_id', resolver);
}

export function handleOrgsDeleteCustomRole(
  resolver: OrgsDeleteCustomRoleResolver
) {
  return msw.http.delete('/orgs/:org/custom_roles/:role_id', resolver);
}

export function handleDependabotListAlertsForOrg(
  resolver: DependabotListAlertsForOrgResolver
) {
  return msw.http.get('/orgs/:org/dependabot/alerts', resolver);
}

export function handleDependabotListOrgSecrets(
  resolver: DependabotListOrgSecretsResolver
) {
  return msw.http.get('/orgs/:org/dependabot/secrets', resolver);
}

export function handleDependabotGetOrgPublicKey(
  resolver: DependabotGetOrgPublicKeyResolver
) {
  return msw.http.get('/orgs/:org/dependabot/secrets/public-key', resolver);
}

export function handleDependabotGetOrgSecret(
  resolver: DependabotGetOrgSecretResolver
) {
  return msw.http.get('/orgs/:org/dependabot/secrets/:secret_name', resolver);
}

export function handleDependabotCreateOrUpdateOrgSecret(
  resolver: DependabotCreateOrUpdateOrgSecretResolver
) {
  return msw.http.put('/orgs/:org/dependabot/secrets/:secret_name', resolver);
}

export function handleDependabotDeleteOrgSecret(
  resolver: DependabotDeleteOrgSecretResolver
) {
  return msw.http.delete(
    '/orgs/:org/dependabot/secrets/:secret_name',
    resolver
  );
}

export function handleDependabotListSelectedReposForOrgSecret(
  resolver: DependabotListSelectedReposForOrgSecretResolver
) {
  return msw.http.get(
    '/orgs/:org/dependabot/secrets/:secret_name/repositories',
    resolver
  );
}

export function handleDependabotSetSelectedReposForOrgSecret(
  resolver: DependabotSetSelectedReposForOrgSecretResolver
) {
  return msw.http.put(
    '/orgs/:org/dependabot/secrets/:secret_name/repositories',
    resolver
  );
}

export function handleDependabotAddSelectedRepoToOrgSecret(
  resolver: DependabotAddSelectedRepoToOrgSecretResolver
) {
  return msw.http.put(
    '/orgs/:org/dependabot/secrets/:secret_name/repositories/:repository_id',
    resolver
  );
}

export function handleDependabotRemoveSelectedRepoFromOrgSecret(
  resolver: DependabotRemoveSelectedRepoFromOrgSecretResolver
) {
  return msw.http.delete(
    '/orgs/:org/dependabot/secrets/:secret_name/repositories/:repository_id',
    resolver
  );
}

export function handleActivityListPublicOrgEvents(
  resolver: ActivityListPublicOrgEventsResolver
) {
  return msw.http.get('/orgs/:org/events', resolver);
}

export function handleOrgsListFailedInvitations(
  resolver: OrgsListFailedInvitationsResolver
) {
  return msw.http.get('/orgs/:org/failed_invitations', resolver);
}

export function handleOrgsListFineGrainedPermissions(
  resolver: OrgsListFineGrainedPermissionsResolver
) {
  return msw.http.get('/orgs/:org/fine_grained_permissions', resolver);
}

export function handleOrgsListWebhooks(resolver: OrgsListWebhooksResolver) {
  return msw.http.get('/orgs/:org/hooks', resolver);
}

export function handleOrgsCreateWebhook(resolver: OrgsCreateWebhookResolver) {
  return msw.http.post('/orgs/:org/hooks', resolver);
}

export function handleOrgsGetWebhook(resolver: OrgsGetWebhookResolver) {
  return msw.http.get('/orgs/:org/hooks/:hook_id', resolver);
}

export function handleOrgsUpdateWebhook(resolver: OrgsUpdateWebhookResolver) {
  return msw.http.patch('/orgs/:org/hooks/:hook_id', resolver);
}

export function handleOrgsDeleteWebhook(resolver: OrgsDeleteWebhookResolver) {
  return msw.http.delete('/orgs/:org/hooks/:hook_id', resolver);
}

export function handleOrgsGetWebhookConfigForOrg(
  resolver: OrgsGetWebhookConfigForOrgResolver
) {
  return msw.http.get('/orgs/:org/hooks/:hook_id/config', resolver);
}

export function handleOrgsUpdateWebhookConfigForOrg(
  resolver: OrgsUpdateWebhookConfigForOrgResolver
) {
  return msw.http.patch('/orgs/:org/hooks/:hook_id/config', resolver);
}

export function handleOrgsListWebhookDeliveries(
  resolver: OrgsListWebhookDeliveriesResolver
) {
  return msw.http.get('/orgs/:org/hooks/:hook_id/deliveries', resolver);
}

export function handleOrgsGetWebhookDelivery(
  resolver: OrgsGetWebhookDeliveryResolver
) {
  return msw.http.get(
    '/orgs/:org/hooks/:hook_id/deliveries/:delivery_id',
    resolver
  );
}

export function handleOrgsRedeliverWebhookDelivery(
  resolver: OrgsRedeliverWebhookDeliveryResolver
) {
  return msw.http.post(
    '/orgs/:org/hooks/:hook_id/deliveries/:delivery_id/attempts',
    resolver
  );
}

export function handleOrgsPingWebhook(resolver: OrgsPingWebhookResolver) {
  return msw.http.post('/orgs/:org/hooks/:hook_id/pings', resolver);
}

export function handleAppsGetOrgInstallation(
  resolver: AppsGetOrgInstallationResolver
) {
  return msw.http.get('/orgs/:org/installation', resolver);
}

export function handleOrgsListAppInstallations(
  resolver: OrgsListAppInstallationsResolver
) {
  return msw.http.get('/orgs/:org/installations', resolver);
}

export function handleInteractionsGetRestrictionsForOrg(
  resolver: InteractionsGetRestrictionsForOrgResolver
) {
  return msw.http.get('/orgs/:org/interaction-limits', resolver);
}

export function handleInteractionsSetRestrictionsForOrg(
  resolver: InteractionsSetRestrictionsForOrgResolver
) {
  return msw.http.put('/orgs/:org/interaction-limits', resolver);
}

export function handleInteractionsRemoveRestrictionsForOrg(
  resolver: InteractionsRemoveRestrictionsForOrgResolver
) {
  return msw.http.delete('/orgs/:org/interaction-limits', resolver);
}

export function handleOrgsListPendingInvitations(
  resolver: OrgsListPendingInvitationsResolver
) {
  return msw.http.get('/orgs/:org/invitations', resolver);
}

export function handleOrgsCreateInvitation(
  resolver: OrgsCreateInvitationResolver
) {
  return msw.http.post('/orgs/:org/invitations', resolver);
}

export function handleOrgsCancelInvitation(
  resolver: OrgsCancelInvitationResolver
) {
  return msw.http.delete('/orgs/:org/invitations/:invitation_id', resolver);
}

export function handleOrgsListInvitationTeams(
  resolver: OrgsListInvitationTeamsResolver
) {
  return msw.http.get('/orgs/:org/invitations/:invitation_id/teams', resolver);
}

export function handleIssuesListForOrg(resolver: IssuesListForOrgResolver) {
  return msw.http.get('/orgs/:org/issues', resolver);
}

export function handleOrgsListMembers(resolver: OrgsListMembersResolver) {
  return msw.http.get('/orgs/:org/members', resolver);
}

export function handleOrgsCheckMembershipForUser(
  resolver: OrgsCheckMembershipForUserResolver
) {
  return msw.http.get('/orgs/:org/members/:username', resolver);
}

export function handleOrgsRemoveMember(resolver: OrgsRemoveMemberResolver) {
  return msw.http.delete('/orgs/:org/members/:username', resolver);
}

export function handleCodespacesGetCodespacesForUserInOrg(
  resolver: CodespacesGetCodespacesForUserInOrgResolver
) {
  return msw.http.get('/orgs/:org/members/:username/codespaces', resolver);
}

export function handleCodespacesDeleteFromOrganization(
  resolver: CodespacesDeleteFromOrganizationResolver
) {
  return msw.http.delete(
    '/orgs/:org/members/:username/codespaces/:codespace_name',
    resolver
  );
}

export function handleCodespacesStopInOrganization(
  resolver: CodespacesStopInOrganizationResolver
) {
  return msw.http.post(
    '/orgs/:org/members/:username/codespaces/:codespace_name/stop',
    resolver
  );
}

export function handleOrgsGetMembershipForUser(
  resolver: OrgsGetMembershipForUserResolver
) {
  return msw.http.get('/orgs/:org/memberships/:username', resolver);
}

export function handleOrgsSetMembershipForUser(
  resolver: OrgsSetMembershipForUserResolver
) {
  return msw.http.put('/orgs/:org/memberships/:username', resolver);
}

export function handleOrgsRemoveMembershipForUser(
  resolver: OrgsRemoveMembershipForUserResolver
) {
  return msw.http.delete('/orgs/:org/memberships/:username', resolver);
}

export function handleMigrationsListForOrg(
  resolver: MigrationsListForOrgResolver
) {
  return msw.http.get('/orgs/:org/migrations', resolver);
}

export function handleMigrationsStartForOrg(
  resolver: MigrationsStartForOrgResolver
) {
  return msw.http.post('/orgs/:org/migrations', resolver);
}

export function handleMigrationsGetStatusForOrg(
  resolver: MigrationsGetStatusForOrgResolver
) {
  return msw.http.get('/orgs/:org/migrations/:migration_id', resolver);
}

export function handleMigrationsDownloadArchiveForOrg(
  resolver: MigrationsDownloadArchiveForOrgResolver
) {
  return msw.http.get('/orgs/:org/migrations/:migration_id/archive', resolver);
}

export function handleMigrationsDeleteArchiveForOrg(
  resolver: MigrationsDeleteArchiveForOrgResolver
) {
  return msw.http.delete(
    '/orgs/:org/migrations/:migration_id/archive',
    resolver
  );
}

export function handleMigrationsUnlockRepoForOrg(
  resolver: MigrationsUnlockRepoForOrgResolver
) {
  return msw.http.delete(
    '/orgs/:org/migrations/:migration_id/repos/:repo_name/lock',
    resolver
  );
}

export function handleMigrationsListReposForOrg(
  resolver: MigrationsListReposForOrgResolver
) {
  return msw.http.get(
    '/orgs/:org/migrations/:migration_id/repositories',
    resolver
  );
}

export function handleOrgsListOutsideCollaborators(
  resolver: OrgsListOutsideCollaboratorsResolver
) {
  return msw.http.get('/orgs/:org/outside_collaborators', resolver);
}

export function handleOrgsConvertMemberToOutsideCollaborator(
  resolver: OrgsConvertMemberToOutsideCollaboratorResolver
) {
  return msw.http.put('/orgs/:org/outside_collaborators/:username', resolver);
}

export function handleOrgsRemoveOutsideCollaborator(
  resolver: OrgsRemoveOutsideCollaboratorResolver
) {
  return msw.http.delete(
    '/orgs/:org/outside_collaborators/:username',
    resolver
  );
}

export function handlePackagesListPackagesForOrganization(
  resolver: PackagesListPackagesForOrganizationResolver
) {
  return msw.http.get('/orgs/:org/packages', resolver);
}

export function handlePackagesGetPackageForOrganization(
  resolver: PackagesGetPackageForOrganizationResolver
) {
  return msw.http.get(
    '/orgs/:org/packages/:package_type/:package_name',
    resolver
  );
}

export function handlePackagesDeletePackageForOrg(
  resolver: PackagesDeletePackageForOrgResolver
) {
  return msw.http.delete(
    '/orgs/:org/packages/:package_type/:package_name',
    resolver
  );
}

export function handlePackagesRestorePackageForOrg(
  resolver: PackagesRestorePackageForOrgResolver
) {
  return msw.http.post(
    '/orgs/:org/packages/:package_type/:package_name/restore',
    resolver
  );
}

export function handlePackagesGetAllPackageVersionsForPackageOwnedByOrg(
  resolver: PackagesGetAllPackageVersionsForPackageOwnedByOrgResolver
) {
  return msw.http.get(
    '/orgs/:org/packages/:package_type/:package_name/versions',
    resolver
  );
}

export function handlePackagesGetPackageVersionForOrganization(
  resolver: PackagesGetPackageVersionForOrganizationResolver
) {
  return msw.http.get(
    '/orgs/:org/packages/:package_type/:package_name/versions/:package_version_id',
    resolver
  );
}

export function handlePackagesDeletePackageVersionForOrg(
  resolver: PackagesDeletePackageVersionForOrgResolver
) {
  return msw.http.delete(
    '/orgs/:org/packages/:package_type/:package_name/versions/:package_version_id',
    resolver
  );
}

export function handlePackagesRestorePackageVersionForOrg(
  resolver: PackagesRestorePackageVersionForOrgResolver
) {
  return msw.http.post(
    '/orgs/:org/packages/:package_type/:package_name/versions/:package_version_id/restore',
    resolver
  );
}

export function handleProjectsListForOrg(resolver: ProjectsListForOrgResolver) {
  return msw.http.get('/orgs/:org/projects', resolver);
}

export function handleProjectsCreateForOrg(
  resolver: ProjectsCreateForOrgResolver
) {
  return msw.http.post('/orgs/:org/projects', resolver);
}

export function handleOrgsListPublicMembers(
  resolver: OrgsListPublicMembersResolver
) {
  return msw.http.get('/orgs/:org/public_members', resolver);
}

export function handleOrgsCheckPublicMembershipForUser(
  resolver: OrgsCheckPublicMembershipForUserResolver
) {
  return msw.http.get('/orgs/:org/public_members/:username', resolver);
}

export function handleOrgsSetPublicMembershipForAuthenticatedUser(
  resolver: OrgsSetPublicMembershipForAuthenticatedUserResolver
) {
  return msw.http.put('/orgs/:org/public_members/:username', resolver);
}

export function handleOrgsRemovePublicMembershipForAuthenticatedUser(
  resolver: OrgsRemovePublicMembershipForAuthenticatedUserResolver
) {
  return msw.http.delete('/orgs/:org/public_members/:username', resolver);
}

export function handleReposListForOrg(resolver: ReposListForOrgResolver) {
  return msw.http.get('/orgs/:org/repos', resolver);
}

export function handleReposCreateInOrg(resolver: ReposCreateInOrgResolver) {
  return msw.http.post('/orgs/:org/repos', resolver);
}

export function handleSecretScanningListAlertsForOrg(
  resolver: SecretScanningListAlertsForOrgResolver
) {
  return msw.http.get('/orgs/:org/secret-scanning/alerts', resolver);
}

export function handleOrgsListSecurityManagerTeams(
  resolver: OrgsListSecurityManagerTeamsResolver
) {
  return msw.http.get('/orgs/:org/security-managers', resolver);
}

export function handleOrgsAddSecurityManagerTeam(
  resolver: OrgsAddSecurityManagerTeamResolver
) {
  return msw.http.put(
    '/orgs/:org/security-managers/teams/:team_slug',
    resolver
  );
}

export function handleOrgsRemoveSecurityManagerTeam(
  resolver: OrgsRemoveSecurityManagerTeamResolver
) {
  return msw.http.delete(
    '/orgs/:org/security-managers/teams/:team_slug',
    resolver
  );
}

export function handleBillingGetGithubActionsBillingOrg(
  resolver: BillingGetGithubActionsBillingOrgResolver
) {
  return msw.http.get('/orgs/:org/settings/billing/actions', resolver);
}

export function handleBillingGetGithubAdvancedSecurityBillingOrg(
  resolver: BillingGetGithubAdvancedSecurityBillingOrgResolver
) {
  return msw.http.get(
    '/orgs/:org/settings/billing/advanced-security',
    resolver
  );
}

export function handleBillingGetGithubPackagesBillingOrg(
  resolver: BillingGetGithubPackagesBillingOrgResolver
) {
  return msw.http.get('/orgs/:org/settings/billing/packages', resolver);
}

export function handleBillingGetSharedStorageBillingOrg(
  resolver: BillingGetSharedStorageBillingOrgResolver
) {
  return msw.http.get('/orgs/:org/settings/billing/shared-storage', resolver);
}

export function handleTeamsList(resolver: TeamsListResolver) {
  return msw.http.get('/orgs/:org/teams', resolver);
}

export function handleTeamsCreate(resolver: TeamsCreateResolver) {
  return msw.http.post('/orgs/:org/teams', resolver);
}

export function handleTeamsGetByName(resolver: TeamsGetByNameResolver) {
  return msw.http.get('/orgs/:org/teams/:team_slug', resolver);
}

export function handleTeamsUpdateInOrg(resolver: TeamsUpdateInOrgResolver) {
  return msw.http.patch('/orgs/:org/teams/:team_slug', resolver);
}

export function handleTeamsDeleteInOrg(resolver: TeamsDeleteInOrgResolver) {
  return msw.http.delete('/orgs/:org/teams/:team_slug', resolver);
}

export function handleTeamsListDiscussionsInOrg(
  resolver: TeamsListDiscussionsInOrgResolver
) {
  return msw.http.get('/orgs/:org/teams/:team_slug/discussions', resolver);
}

export function handleTeamsCreateDiscussionInOrg(
  resolver: TeamsCreateDiscussionInOrgResolver
) {
  return msw.http.post('/orgs/:org/teams/:team_slug/discussions', resolver);
}

export function handleTeamsGetDiscussionInOrg(
  resolver: TeamsGetDiscussionInOrgResolver
) {
  return msw.http.get(
    '/orgs/:org/teams/:team_slug/discussions/:discussion_number',
    resolver
  );
}

export function handleTeamsUpdateDiscussionInOrg(
  resolver: TeamsUpdateDiscussionInOrgResolver
) {
  return msw.http.patch(
    '/orgs/:org/teams/:team_slug/discussions/:discussion_number',
    resolver
  );
}

export function handleTeamsDeleteDiscussionInOrg(
  resolver: TeamsDeleteDiscussionInOrgResolver
) {
  return msw.http.delete(
    '/orgs/:org/teams/:team_slug/discussions/:discussion_number',
    resolver
  );
}

export function handleTeamsListDiscussionCommentsInOrg(
  resolver: TeamsListDiscussionCommentsInOrgResolver
) {
  return msw.http.get(
    '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments',
    resolver
  );
}

export function handleTeamsCreateDiscussionCommentInOrg(
  resolver: TeamsCreateDiscussionCommentInOrgResolver
) {
  return msw.http.post(
    '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments',
    resolver
  );
}

export function handleTeamsGetDiscussionCommentInOrg(
  resolver: TeamsGetDiscussionCommentInOrgResolver
) {
  return msw.http.get(
    '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number',
    resolver
  );
}

export function handleTeamsUpdateDiscussionCommentInOrg(
  resolver: TeamsUpdateDiscussionCommentInOrgResolver
) {
  return msw.http.patch(
    '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number',
    resolver
  );
}

export function handleTeamsDeleteDiscussionCommentInOrg(
  resolver: TeamsDeleteDiscussionCommentInOrgResolver
) {
  return msw.http.delete(
    '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number',
    resolver
  );
}

export function handleReactionsListForTeamDiscussionCommentInOrg(
  resolver: ReactionsListForTeamDiscussionCommentInOrgResolver
) {
  return msw.http.get(
    '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions',
    resolver
  );
}

export function handleReactionsCreateForTeamDiscussionCommentInOrg(
  resolver: ReactionsCreateForTeamDiscussionCommentInOrgResolver
) {
  return msw.http.post(
    '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions',
    resolver
  );
}

export function handleReactionsDeleteForTeamDiscussionComment(
  resolver: ReactionsDeleteForTeamDiscussionCommentResolver
) {
  return msw.http.delete(
    '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id',
    resolver
  );
}

export function handleReactionsListForTeamDiscussionInOrg(
  resolver: ReactionsListForTeamDiscussionInOrgResolver
) {
  return msw.http.get(
    '/orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions',
    resolver
  );
}

export function handleReactionsCreateForTeamDiscussionInOrg(
  resolver: ReactionsCreateForTeamDiscussionInOrgResolver
) {
  return msw.http.post(
    '/orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions',
    resolver
  );
}

export function handleReactionsDeleteForTeamDiscussion(
  resolver: ReactionsDeleteForTeamDiscussionResolver
) {
  return msw.http.delete(
    '/orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions/:reaction_id',
    resolver
  );
}

export function handleTeamsListPendingInvitationsInOrg(
  resolver: TeamsListPendingInvitationsInOrgResolver
) {
  return msw.http.get('/orgs/:org/teams/:team_slug/invitations', resolver);
}

export function handleTeamsListMembersInOrg(
  resolver: TeamsListMembersInOrgResolver
) {
  return msw.http.get('/orgs/:org/teams/:team_slug/members', resolver);
}

export function handleTeamsGetMembershipForUserInOrg(
  resolver: TeamsGetMembershipForUserInOrgResolver
) {
  return msw.http.get(
    '/orgs/:org/teams/:team_slug/memberships/:username',
    resolver
  );
}

export function handleTeamsAddOrUpdateMembershipForUserInOrg(
  resolver: TeamsAddOrUpdateMembershipForUserInOrgResolver
) {
  return msw.http.put(
    '/orgs/:org/teams/:team_slug/memberships/:username',
    resolver
  );
}

export function handleTeamsRemoveMembershipForUserInOrg(
  resolver: TeamsRemoveMembershipForUserInOrgResolver
) {
  return msw.http.delete(
    '/orgs/:org/teams/:team_slug/memberships/:username',
    resolver
  );
}

export function handleTeamsListProjectsInOrg(
  resolver: TeamsListProjectsInOrgResolver
) {
  return msw.http.get('/orgs/:org/teams/:team_slug/projects', resolver);
}

export function handleTeamsCheckPermissionsForProjectInOrg(
  resolver: TeamsCheckPermissionsForProjectInOrgResolver
) {
  return msw.http.get(
    '/orgs/:org/teams/:team_slug/projects/:project_id',
    resolver
  );
}

export function handleTeamsAddOrUpdateProjectPermissionsInOrg(
  resolver: TeamsAddOrUpdateProjectPermissionsInOrgResolver
) {
  return msw.http.put(
    '/orgs/:org/teams/:team_slug/projects/:project_id',
    resolver
  );
}

export function handleTeamsRemoveProjectInOrg(
  resolver: TeamsRemoveProjectInOrgResolver
) {
  return msw.http.delete(
    '/orgs/:org/teams/:team_slug/projects/:project_id',
    resolver
  );
}

export function handleTeamsListReposInOrg(
  resolver: TeamsListReposInOrgResolver
) {
  return msw.http.get('/orgs/:org/teams/:team_slug/repos', resolver);
}

export function handleTeamsCheckPermissionsForRepoInOrg(
  resolver: TeamsCheckPermissionsForRepoInOrgResolver
) {
  return msw.http.get(
    '/orgs/:org/teams/:team_slug/repos/:owner/:repo',
    resolver
  );
}

export function handleTeamsAddOrUpdateRepoPermissionsInOrg(
  resolver: TeamsAddOrUpdateRepoPermissionsInOrgResolver
) {
  return msw.http.put(
    '/orgs/:org/teams/:team_slug/repos/:owner/:repo',
    resolver
  );
}

export function handleTeamsRemoveRepoInOrg(
  resolver: TeamsRemoveRepoInOrgResolver
) {
  return msw.http.delete(
    '/orgs/:org/teams/:team_slug/repos/:owner/:repo',
    resolver
  );
}

export function handleTeamsListChildInOrg(
  resolver: TeamsListChildInOrgResolver
) {
  return msw.http.get('/orgs/:org/teams/:team_slug/teams', resolver);
}

export function handleOrgsEnableOrDisableSecurityProductOnAllOrgRepos(
  resolver: OrgsEnableOrDisableSecurityProductOnAllOrgReposResolver
) {
  return msw.http.post('/orgs/:org/:security_product/:enablement', resolver);
}

export function handleProjectsGetCard(resolver: ProjectsGetCardResolver) {
  return msw.http.get('/projects/columns/cards/:card_id', resolver);
}

export function handleProjectsUpdateCard(resolver: ProjectsUpdateCardResolver) {
  return msw.http.patch('/projects/columns/cards/:card_id', resolver);
}

export function handleProjectsDeleteCard(resolver: ProjectsDeleteCardResolver) {
  return msw.http.delete('/projects/columns/cards/:card_id', resolver);
}

export function handleProjectsMoveCard(resolver: ProjectsMoveCardResolver) {
  return msw.http.post('/projects/columns/cards/:card_id/moves', resolver);
}

export function handleProjectsGetColumn(resolver: ProjectsGetColumnResolver) {
  return msw.http.get('/projects/columns/:column_id', resolver);
}

export function handleProjectsUpdateColumn(
  resolver: ProjectsUpdateColumnResolver
) {
  return msw.http.patch('/projects/columns/:column_id', resolver);
}

export function handleProjectsDeleteColumn(
  resolver: ProjectsDeleteColumnResolver
) {
  return msw.http.delete('/projects/columns/:column_id', resolver);
}

export function handleProjectsListCards(resolver: ProjectsListCardsResolver) {
  return msw.http.get('/projects/columns/:column_id/cards', resolver);
}

export function handleProjectsCreateCard(resolver: ProjectsCreateCardResolver) {
  return msw.http.post('/projects/columns/:column_id/cards', resolver);
}

export function handleProjectsMoveColumn(resolver: ProjectsMoveColumnResolver) {
  return msw.http.post('/projects/columns/:column_id/moves', resolver);
}

export function handleProjectsGet(resolver: ProjectsGetResolver) {
  return msw.http.get('/projects/:project_id', resolver);
}

export function handleProjectsUpdate(resolver: ProjectsUpdateResolver) {
  return msw.http.patch('/projects/:project_id', resolver);
}

export function handleProjectsDelete(resolver: ProjectsDeleteResolver) {
  return msw.http.delete('/projects/:project_id', resolver);
}

export function handleProjectsListCollaborators(
  resolver: ProjectsListCollaboratorsResolver
) {
  return msw.http.get('/projects/:project_id/collaborators', resolver);
}

export function handleProjectsAddCollaborator(
  resolver: ProjectsAddCollaboratorResolver
) {
  return msw.http.put(
    '/projects/:project_id/collaborators/:username',
    resolver
  );
}

export function handleProjectsRemoveCollaborator(
  resolver: ProjectsRemoveCollaboratorResolver
) {
  return msw.http.delete(
    '/projects/:project_id/collaborators/:username',
    resolver
  );
}

export function handleProjectsGetPermissionForUser(
  resolver: ProjectsGetPermissionForUserResolver
) {
  return msw.http.get(
    '/projects/:project_id/collaborators/:username/permission',
    resolver
  );
}

export function handleProjectsListColumns(
  resolver: ProjectsListColumnsResolver
) {
  return msw.http.get('/projects/:project_id/columns', resolver);
}

export function handleProjectsCreateColumn(
  resolver: ProjectsCreateColumnResolver
) {
  return msw.http.post('/projects/:project_id/columns', resolver);
}

export function handleRateLimitGet(resolver: RateLimitGetResolver) {
  return msw.http.get('/rate_limit', resolver);
}

export function handleReposGet(resolver: ReposGetResolver) {
  return msw.http.get('/repos/:owner/:repo', resolver);
}

export function handleReposUpdate(resolver: ReposUpdateResolver) {
  return msw.http.patch('/repos/:owner/:repo', resolver);
}

export function handleReposDelete(resolver: ReposDeleteResolver) {
  return msw.http.delete('/repos/:owner/:repo', resolver);
}

export function handleActionsListArtifactsForRepo(
  resolver: ActionsListArtifactsForRepoResolver
) {
  return msw.http.get('/repos/:owner/:repo/actions/artifacts', resolver);
}

export function handleActionsGetArtifact(resolver: ActionsGetArtifactResolver) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/artifacts/:artifact_id',
    resolver
  );
}

export function handleActionsDeleteArtifact(
  resolver: ActionsDeleteArtifactResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/actions/artifacts/:artifact_id',
    resolver
  );
}

export function handleActionsDownloadArtifact(
  resolver: ActionsDownloadArtifactResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/artifacts/:artifact_id/:archive_format',
    resolver
  );
}

export function handleActionsGetActionsCacheUsage(
  resolver: ActionsGetActionsCacheUsageResolver
) {
  return msw.http.get('/repos/:owner/:repo/actions/cache/usage', resolver);
}

export function handleActionsGetActionsCacheList(
  resolver: ActionsGetActionsCacheListResolver
) {
  return msw.http.get('/repos/:owner/:repo/actions/caches', resolver);
}

export function handleActionsDeleteActionsCacheByKey(
  resolver: ActionsDeleteActionsCacheByKeyResolver
) {
  return msw.http.delete('/repos/:owner/:repo/actions/caches', resolver);
}

export function handleActionsDeleteActionsCacheById(
  resolver: ActionsDeleteActionsCacheByIdResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/actions/caches/:cache_id',
    resolver
  );
}

export function handleActionsGetJobForWorkflowRun(
  resolver: ActionsGetJobForWorkflowRunResolver
) {
  return msw.http.get('/repos/:owner/:repo/actions/jobs/:job_id', resolver);
}

export function handleActionsDownloadJobLogsForWorkflowRun(
  resolver: ActionsDownloadJobLogsForWorkflowRunResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/jobs/:job_id/logs',
    resolver
  );
}

export function handleActionsReRunJobForWorkflowRun(
  resolver: ActionsReRunJobForWorkflowRunResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/actions/jobs/:job_id/rerun',
    resolver
  );
}

export function handleActionsGetGithubActionsPermissionsRepository(
  resolver: ActionsGetGithubActionsPermissionsRepositoryResolver
) {
  return msw.http.get('/repos/:owner/:repo/actions/permissions', resolver);
}

export function handleActionsSetGithubActionsPermissionsRepository(
  resolver: ActionsSetGithubActionsPermissionsRepositoryResolver
) {
  return msw.http.put('/repos/:owner/:repo/actions/permissions', resolver);
}

export function handleActionsGetWorkflowAccessToRepository(
  resolver: ActionsGetWorkflowAccessToRepositoryResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/permissions/access',
    resolver
  );
}

export function handleActionsSetWorkflowAccessToRepository(
  resolver: ActionsSetWorkflowAccessToRepositoryResolver
) {
  return msw.http.put(
    '/repos/:owner/:repo/actions/permissions/access',
    resolver
  );
}

export function handleActionsGetAllowedActionsRepository(
  resolver: ActionsGetAllowedActionsRepositoryResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/permissions/selected-actions',
    resolver
  );
}

export function handleActionsSetAllowedActionsRepository(
  resolver: ActionsSetAllowedActionsRepositoryResolver
) {
  return msw.http.put(
    '/repos/:owner/:repo/actions/permissions/selected-actions',
    resolver
  );
}

export function handleActionsGetGithubActionsDefaultWorkflowPermissionsRepository(
  resolver: ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/permissions/workflow',
    resolver
  );
}

export function handleActionsSetGithubActionsDefaultWorkflowPermissionsRepository(
  resolver: ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryResolver
) {
  return msw.http.put(
    '/repos/:owner/:repo/actions/permissions/workflow',
    resolver
  );
}

export function handleActionsListSelfHostedRunnersForRepo(
  resolver: ActionsListSelfHostedRunnersForRepoResolver
) {
  return msw.http.get('/repos/:owner/:repo/actions/runners', resolver);
}

export function handleActionsListRunnerApplicationsForRepo(
  resolver: ActionsListRunnerApplicationsForRepoResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/runners/downloads',
    resolver
  );
}

export function handleActionsCreateRegistrationTokenForRepo(
  resolver: ActionsCreateRegistrationTokenForRepoResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/actions/runners/registration-token',
    resolver
  );
}

export function handleActionsCreateRemoveTokenForRepo(
  resolver: ActionsCreateRemoveTokenForRepoResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/actions/runners/remove-token',
    resolver
  );
}

export function handleActionsGetSelfHostedRunnerForRepo(
  resolver: ActionsGetSelfHostedRunnerForRepoResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/runners/:runner_id',
    resolver
  );
}

export function handleActionsDeleteSelfHostedRunnerFromRepo(
  resolver: ActionsDeleteSelfHostedRunnerFromRepoResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/actions/runners/:runner_id',
    resolver
  );
}

export function handleActionsListLabelsForSelfHostedRunnerForRepo(
  resolver: ActionsListLabelsForSelfHostedRunnerForRepoResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/runners/:runner_id/labels',
    resolver
  );
}

export function handleActionsAddCustomLabelsToSelfHostedRunnerForRepo(
  resolver: ActionsAddCustomLabelsToSelfHostedRunnerForRepoResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/actions/runners/:runner_id/labels',
    resolver
  );
}

export function handleActionsSetCustomLabelsForSelfHostedRunnerForRepo(
  resolver: ActionsSetCustomLabelsForSelfHostedRunnerForRepoResolver
) {
  return msw.http.put(
    '/repos/:owner/:repo/actions/runners/:runner_id/labels',
    resolver
  );
}

export function handleActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo(
  resolver: ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/actions/runners/:runner_id/labels',
    resolver
  );
}

export function handleActionsRemoveCustomLabelFromSelfHostedRunnerForRepo(
  resolver: ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/actions/runners/:runner_id/labels/:name',
    resolver
  );
}

export function handleActionsListWorkflowRunsForRepo(
  resolver: ActionsListWorkflowRunsForRepoResolver
) {
  return msw.http.get('/repos/:owner/:repo/actions/runs', resolver);
}

export function handleActionsGetWorkflowRun(
  resolver: ActionsGetWorkflowRunResolver
) {
  return msw.http.get('/repos/:owner/:repo/actions/runs/:run_id', resolver);
}

export function handleActionsDeleteWorkflowRun(
  resolver: ActionsDeleteWorkflowRunResolver
) {
  return msw.http.delete('/repos/:owner/:repo/actions/runs/:run_id', resolver);
}

export function handleActionsGetReviewsForRun(
  resolver: ActionsGetReviewsForRunResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/runs/:run_id/approvals',
    resolver
  );
}

export function handleActionsApproveWorkflowRun(
  resolver: ActionsApproveWorkflowRunResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/actions/runs/:run_id/approve',
    resolver
  );
}

export function handleActionsListWorkflowRunArtifacts(
  resolver: ActionsListWorkflowRunArtifactsResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/runs/:run_id/artifacts',
    resolver
  );
}

export function handleActionsGetWorkflowRunAttempt(
  resolver: ActionsGetWorkflowRunAttemptResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/runs/:run_id/attempts/:attempt_number',
    resolver
  );
}

export function handleActionsListJobsForWorkflowRunAttempt(
  resolver: ActionsListJobsForWorkflowRunAttemptResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/runs/:run_id/attempts/:attempt_number/jobs',
    resolver
  );
}

export function handleActionsDownloadWorkflowRunAttemptLogs(
  resolver: ActionsDownloadWorkflowRunAttemptLogsResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/runs/:run_id/attempts/:attempt_number/logs',
    resolver
  );
}

export function handleActionsCancelWorkflowRun(
  resolver: ActionsCancelWorkflowRunResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/actions/runs/:run_id/cancel',
    resolver
  );
}

export function handleActionsListJobsForWorkflowRun(
  resolver: ActionsListJobsForWorkflowRunResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/runs/:run_id/jobs',
    resolver
  );
}

export function handleActionsDownloadWorkflowRunLogs(
  resolver: ActionsDownloadWorkflowRunLogsResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/runs/:run_id/logs',
    resolver
  );
}

export function handleActionsDeleteWorkflowRunLogs(
  resolver: ActionsDeleteWorkflowRunLogsResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/actions/runs/:run_id/logs',
    resolver
  );
}

export function handleActionsGetPendingDeploymentsForRun(
  resolver: ActionsGetPendingDeploymentsForRunResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/runs/:run_id/pending_deployments',
    resolver
  );
}

export function handleActionsReviewPendingDeploymentsForRun(
  resolver: ActionsReviewPendingDeploymentsForRunResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/actions/runs/:run_id/pending_deployments',
    resolver
  );
}

export function handleActionsReRunWorkflow(
  resolver: ActionsReRunWorkflowResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/actions/runs/:run_id/rerun',
    resolver
  );
}

export function handleActionsReRunWorkflowFailedJobs(
  resolver: ActionsReRunWorkflowFailedJobsResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/actions/runs/:run_id/rerun-failed-jobs',
    resolver
  );
}

export function handleActionsGetWorkflowRunUsage(
  resolver: ActionsGetWorkflowRunUsageResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/runs/:run_id/timing',
    resolver
  );
}

export function handleActionsListRepoSecrets(
  resolver: ActionsListRepoSecretsResolver
) {
  return msw.http.get('/repos/:owner/:repo/actions/secrets', resolver);
}

export function handleActionsGetRepoPublicKey(
  resolver: ActionsGetRepoPublicKeyResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/secrets/public-key',
    resolver
  );
}

export function handleActionsGetRepoSecret(
  resolver: ActionsGetRepoSecretResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/secrets/:secret_name',
    resolver
  );
}

export function handleActionsCreateOrUpdateRepoSecret(
  resolver: ActionsCreateOrUpdateRepoSecretResolver
) {
  return msw.http.put(
    '/repos/:owner/:repo/actions/secrets/:secret_name',
    resolver
  );
}

export function handleActionsDeleteRepoSecret(
  resolver: ActionsDeleteRepoSecretResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/actions/secrets/:secret_name',
    resolver
  );
}

export function handleActionsListRepoWorkflows(
  resolver: ActionsListRepoWorkflowsResolver
) {
  return msw.http.get('/repos/:owner/:repo/actions/workflows', resolver);
}

export function handleActionsGetWorkflow(resolver: ActionsGetWorkflowResolver) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/workflows/:workflow_id',
    resolver
  );
}

export function handleActionsDisableWorkflow(
  resolver: ActionsDisableWorkflowResolver
) {
  return msw.http.put(
    '/repos/:owner/:repo/actions/workflows/:workflow_id/disable',
    resolver
  );
}

export function handleActionsCreateWorkflowDispatch(
  resolver: ActionsCreateWorkflowDispatchResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/actions/workflows/:workflow_id/dispatches',
    resolver
  );
}

export function handleActionsEnableWorkflow(
  resolver: ActionsEnableWorkflowResolver
) {
  return msw.http.put(
    '/repos/:owner/:repo/actions/workflows/:workflow_id/enable',
    resolver
  );
}

export function handleActionsListWorkflowRuns(
  resolver: ActionsListWorkflowRunsResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/workflows/:workflow_id/runs',
    resolver
  );
}

export function handleActionsGetWorkflowUsage(
  resolver: ActionsGetWorkflowUsageResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/actions/workflows/:workflow_id/timing',
    resolver
  );
}

export function handleIssuesListAssignees(
  resolver: IssuesListAssigneesResolver
) {
  return msw.http.get('/repos/:owner/:repo/assignees', resolver);
}

export function handleIssuesCheckUserCanBeAssigned(
  resolver: IssuesCheckUserCanBeAssignedResolver
) {
  return msw.http.get('/repos/:owner/:repo/assignees/:assignee', resolver);
}

export function handleReposListAutolinks(resolver: ReposListAutolinksResolver) {
  return msw.http.get('/repos/:owner/:repo/autolinks', resolver);
}

export function handleReposCreateAutolink(
  resolver: ReposCreateAutolinkResolver
) {
  return msw.http.post('/repos/:owner/:repo/autolinks', resolver);
}

export function handleReposGetAutolink(resolver: ReposGetAutolinkResolver) {
  return msw.http.get('/repos/:owner/:repo/autolinks/:autolink_id', resolver);
}

export function handleReposDeleteAutolink(
  resolver: ReposDeleteAutolinkResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/autolinks/:autolink_id',
    resolver
  );
}

export function handleReposEnableAutomatedSecurityFixes(
  resolver: ReposEnableAutomatedSecurityFixesResolver
) {
  return msw.http.put('/repos/:owner/:repo/automated-security-fixes', resolver);
}

export function handleReposDisableAutomatedSecurityFixes(
  resolver: ReposDisableAutomatedSecurityFixesResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/automated-security-fixes',
    resolver
  );
}

export function handleReposListBranches(resolver: ReposListBranchesResolver) {
  return msw.http.get('/repos/:owner/:repo/branches', resolver);
}

export function handleReposGetBranch(resolver: ReposGetBranchResolver) {
  return msw.http.get('/repos/:owner/:repo/branches/:branch', resolver);
}

export function handleReposGetBranchProtection(
  resolver: ReposGetBranchProtectionResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/branches/:branch/protection',
    resolver
  );
}

export function handleReposUpdateBranchProtection(
  resolver: ReposUpdateBranchProtectionResolver
) {
  return msw.http.put(
    '/repos/:owner/:repo/branches/:branch/protection',
    resolver
  );
}

export function handleReposDeleteBranchProtection(
  resolver: ReposDeleteBranchProtectionResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/branches/:branch/protection',
    resolver
  );
}

export function handleReposGetAdminBranchProtection(
  resolver: ReposGetAdminBranchProtectionResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/branches/:branch/protection/enforce_admins',
    resolver
  );
}

export function handleReposSetAdminBranchProtection(
  resolver: ReposSetAdminBranchProtectionResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/branches/:branch/protection/enforce_admins',
    resolver
  );
}

export function handleReposDeleteAdminBranchProtection(
  resolver: ReposDeleteAdminBranchProtectionResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/branches/:branch/protection/enforce_admins',
    resolver
  );
}

export function handleReposGetPullRequestReviewProtection(
  resolver: ReposGetPullRequestReviewProtectionResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews',
    resolver
  );
}

export function handleReposUpdatePullRequestReviewProtection(
  resolver: ReposUpdatePullRequestReviewProtectionResolver
) {
  return msw.http.patch(
    '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews',
    resolver
  );
}

export function handleReposDeletePullRequestReviewProtection(
  resolver: ReposDeletePullRequestReviewProtectionResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews',
    resolver
  );
}

export function handleReposGetCommitSignatureProtection(
  resolver: ReposGetCommitSignatureProtectionResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/branches/:branch/protection/required_signatures',
    resolver
  );
}

export function handleReposCreateCommitSignatureProtection(
  resolver: ReposCreateCommitSignatureProtectionResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/branches/:branch/protection/required_signatures',
    resolver
  );
}

export function handleReposDeleteCommitSignatureProtection(
  resolver: ReposDeleteCommitSignatureProtectionResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/branches/:branch/protection/required_signatures',
    resolver
  );
}

export function handleReposGetStatusChecksProtection(
  resolver: ReposGetStatusChecksProtectionResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/branches/:branch/protection/required_status_checks',
    resolver
  );
}

export function handleReposUpdateStatusCheckProtection(
  resolver: ReposUpdateStatusCheckProtectionResolver
) {
  return msw.http.patch(
    '/repos/:owner/:repo/branches/:branch/protection/required_status_checks',
    resolver
  );
}

export function handleReposRemoveStatusCheckProtection(
  resolver: ReposRemoveStatusCheckProtectionResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/branches/:branch/protection/required_status_checks',
    resolver
  );
}

export function handleReposGetAllStatusCheckContexts(
  resolver: ReposGetAllStatusCheckContextsResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts',
    resolver
  );
}

export function handleReposAddStatusCheckContexts(
  resolver: ReposAddStatusCheckContextsResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts',
    resolver
  );
}

export function handleReposSetStatusCheckContexts(
  resolver: ReposSetStatusCheckContextsResolver
) {
  return msw.http.put(
    '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts',
    resolver
  );
}

export function handleReposRemoveStatusCheckContexts(
  resolver: ReposRemoveStatusCheckContextsResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts',
    resolver
  );
}

export function handleReposGetAccessRestrictions(
  resolver: ReposGetAccessRestrictionsResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/branches/:branch/protection/restrictions',
    resolver
  );
}

export function handleReposDeleteAccessRestrictions(
  resolver: ReposDeleteAccessRestrictionsResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/branches/:branch/protection/restrictions',
    resolver
  );
}

export function handleReposGetAppsWithAccessToProtectedBranch(
  resolver: ReposGetAppsWithAccessToProtectedBranchResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps',
    resolver
  );
}

export function handleReposAddAppAccessRestrictions(
  resolver: ReposAddAppAccessRestrictionsResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps',
    resolver
  );
}

export function handleReposSetAppAccessRestrictions(
  resolver: ReposSetAppAccessRestrictionsResolver
) {
  return msw.http.put(
    '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps',
    resolver
  );
}

export function handleReposRemoveAppAccessRestrictions(
  resolver: ReposRemoveAppAccessRestrictionsResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps',
    resolver
  );
}

export function handleReposGetTeamsWithAccessToProtectedBranch(
  resolver: ReposGetTeamsWithAccessToProtectedBranchResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams',
    resolver
  );
}

export function handleReposAddTeamAccessRestrictions(
  resolver: ReposAddTeamAccessRestrictionsResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams',
    resolver
  );
}

export function handleReposSetTeamAccessRestrictions(
  resolver: ReposSetTeamAccessRestrictionsResolver
) {
  return msw.http.put(
    '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams',
    resolver
  );
}

export function handleReposRemoveTeamAccessRestrictions(
  resolver: ReposRemoveTeamAccessRestrictionsResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams',
    resolver
  );
}

export function handleReposGetUsersWithAccessToProtectedBranch(
  resolver: ReposGetUsersWithAccessToProtectedBranchResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/branches/:branch/protection/restrictions/users',
    resolver
  );
}

export function handleReposAddUserAccessRestrictions(
  resolver: ReposAddUserAccessRestrictionsResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/branches/:branch/protection/restrictions/users',
    resolver
  );
}

export function handleReposSetUserAccessRestrictions(
  resolver: ReposSetUserAccessRestrictionsResolver
) {
  return msw.http.put(
    '/repos/:owner/:repo/branches/:branch/protection/restrictions/users',
    resolver
  );
}

export function handleReposRemoveUserAccessRestrictions(
  resolver: ReposRemoveUserAccessRestrictionsResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/branches/:branch/protection/restrictions/users',
    resolver
  );
}

export function handleReposRenameBranch(resolver: ReposRenameBranchResolver) {
  return msw.http.post('/repos/:owner/:repo/branches/:branch/rename', resolver);
}

export function handleChecksCreate(resolver: ChecksCreateResolver) {
  return msw.http.post('/repos/:owner/:repo/check-runs', resolver);
}

export function handleChecksGet(resolver: ChecksGetResolver) {
  return msw.http.get('/repos/:owner/:repo/check-runs/:check_run_id', resolver);
}

export function handleChecksUpdate(resolver: ChecksUpdateResolver) {
  return msw.http.patch(
    '/repos/:owner/:repo/check-runs/:check_run_id',
    resolver
  );
}

export function handleChecksListAnnotations(
  resolver: ChecksListAnnotationsResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/check-runs/:check_run_id/annotations',
    resolver
  );
}

export function handleChecksRerequestRun(resolver: ChecksRerequestRunResolver) {
  return msw.http.post(
    '/repos/:owner/:repo/check-runs/:check_run_id/rerequest',
    resolver
  );
}

export function handleChecksCreateSuite(resolver: ChecksCreateSuiteResolver) {
  return msw.http.post('/repos/:owner/:repo/check-suites', resolver);
}

export function handleChecksSetSuitesPreferences(
  resolver: ChecksSetSuitesPreferencesResolver
) {
  return msw.http.patch(
    '/repos/:owner/:repo/check-suites/preferences',
    resolver
  );
}

export function handleChecksGetSuite(resolver: ChecksGetSuiteResolver) {
  return msw.http.get(
    '/repos/:owner/:repo/check-suites/:check_suite_id',
    resolver
  );
}

export function handleChecksListForSuite(resolver: ChecksListForSuiteResolver) {
  return msw.http.get(
    '/repos/:owner/:repo/check-suites/:check_suite_id/check-runs',
    resolver
  );
}

export function handleChecksRerequestSuite(
  resolver: ChecksRerequestSuiteResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/check-suites/:check_suite_id/rerequest',
    resolver
  );
}

export function handleCodeScanningListAlertsForRepo(
  resolver: CodeScanningListAlertsForRepoResolver
) {
  return msw.http.get('/repos/:owner/:repo/code-scanning/alerts', resolver);
}

export function handleCodeScanningGetAlert(
  resolver: CodeScanningGetAlertResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/code-scanning/alerts/:alert_number',
    resolver
  );
}

export function handleCodeScanningUpdateAlert(
  resolver: CodeScanningUpdateAlertResolver
) {
  return msw.http.patch(
    '/repos/:owner/:repo/code-scanning/alerts/:alert_number',
    resolver
  );
}

export function handleCodeScanningListAlertInstances(
  resolver: CodeScanningListAlertInstancesResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/code-scanning/alerts/:alert_number/instances',
    resolver
  );
}

export function handleCodeScanningListRecentAnalyses(
  resolver: CodeScanningListRecentAnalysesResolver
) {
  return msw.http.get('/repos/:owner/:repo/code-scanning/analyses', resolver);
}

export function handleCodeScanningGetAnalysis(
  resolver: CodeScanningGetAnalysisResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/code-scanning/analyses/:analysis_id',
    resolver
  );
}

export function handleCodeScanningDeleteAnalysis(
  resolver: CodeScanningDeleteAnalysisResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/code-scanning/analyses/:analysis_id',
    resolver
  );
}

export function handleCodeScanningListCodeqlDatabases(
  resolver: CodeScanningListCodeqlDatabasesResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/code-scanning/codeql/databases',
    resolver
  );
}

export function handleCodeScanningGetCodeqlDatabase(
  resolver: CodeScanningGetCodeqlDatabaseResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/code-scanning/codeql/databases/:language',
    resolver
  );
}

export function handleCodeScanningUploadSarif(
  resolver: CodeScanningUploadSarifResolver
) {
  return msw.http.post('/repos/:owner/:repo/code-scanning/sarifs', resolver);
}

export function handleCodeScanningGetSarif(
  resolver: CodeScanningGetSarifResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/code-scanning/sarifs/:sarif_id',
    resolver
  );
}

export function handleReposCodeownersErrors(
  resolver: ReposCodeownersErrorsResolver
) {
  return msw.http.get('/repos/:owner/:repo/codeowners/errors', resolver);
}

export function handleCodespacesListInRepositoryForAuthenticatedUser(
  resolver: CodespacesListInRepositoryForAuthenticatedUserResolver
) {
  return msw.http.get('/repos/:owner/:repo/codespaces', resolver);
}

export function handleCodespacesCreateWithRepoForAuthenticatedUser(
  resolver: CodespacesCreateWithRepoForAuthenticatedUserResolver
) {
  return msw.http.post('/repos/:owner/:repo/codespaces', resolver);
}

export function handleCodespacesListDevcontainersInRepositoryForAuthenticatedUser(
  resolver: CodespacesListDevcontainersInRepositoryForAuthenticatedUserResolver
) {
  return msw.http.get('/repos/:owner/:repo/codespaces/devcontainers', resolver);
}

export function handleCodespacesRepoMachinesForAuthenticatedUser(
  resolver: CodespacesRepoMachinesForAuthenticatedUserResolver
) {
  return msw.http.get('/repos/:owner/:repo/codespaces/machines', resolver);
}

export function handleCodespacesPreFlightWithRepoForAuthenticatedUser(
  resolver: CodespacesPreFlightWithRepoForAuthenticatedUserResolver
) {
  return msw.http.get('/repos/:owner/:repo/codespaces/new', resolver);
}

export function handleCodespacesListRepoSecrets(
  resolver: CodespacesListRepoSecretsResolver
) {
  return msw.http.get('/repos/:owner/:repo/codespaces/secrets', resolver);
}

export function handleCodespacesGetRepoPublicKey(
  resolver: CodespacesGetRepoPublicKeyResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/codespaces/secrets/public-key',
    resolver
  );
}

export function handleCodespacesGetRepoSecret(
  resolver: CodespacesGetRepoSecretResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/codespaces/secrets/:secret_name',
    resolver
  );
}

export function handleCodespacesCreateOrUpdateRepoSecret(
  resolver: CodespacesCreateOrUpdateRepoSecretResolver
) {
  return msw.http.put(
    '/repos/:owner/:repo/codespaces/secrets/:secret_name',
    resolver
  );
}

export function handleCodespacesDeleteRepoSecret(
  resolver: CodespacesDeleteRepoSecretResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/codespaces/secrets/:secret_name',
    resolver
  );
}

export function handleReposListCollaborators(
  resolver: ReposListCollaboratorsResolver
) {
  return msw.http.get('/repos/:owner/:repo/collaborators', resolver);
}

export function handleReposCheckCollaborator(
  resolver: ReposCheckCollaboratorResolver
) {
  return msw.http.get('/repos/:owner/:repo/collaborators/:username', resolver);
}

export function handleReposAddCollaborator(
  resolver: ReposAddCollaboratorResolver
) {
  return msw.http.put('/repos/:owner/:repo/collaborators/:username', resolver);
}

export function handleReposRemoveCollaborator(
  resolver: ReposRemoveCollaboratorResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/collaborators/:username',
    resolver
  );
}

export function handleReposGetCollaboratorPermissionLevel(
  resolver: ReposGetCollaboratorPermissionLevelResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/collaborators/:username/permission',
    resolver
  );
}

export function handleReposListCommitCommentsForRepo(
  resolver: ReposListCommitCommentsForRepoResolver
) {
  return msw.http.get('/repos/:owner/:repo/comments', resolver);
}

export function handleReposGetCommitComment(
  resolver: ReposGetCommitCommentResolver
) {
  return msw.http.get('/repos/:owner/:repo/comments/:comment_id', resolver);
}

export function handleReposUpdateCommitComment(
  resolver: ReposUpdateCommitCommentResolver
) {
  return msw.http.patch('/repos/:owner/:repo/comments/:comment_id', resolver);
}

export function handleReposDeleteCommitComment(
  resolver: ReposDeleteCommitCommentResolver
) {
  return msw.http.delete('/repos/:owner/:repo/comments/:comment_id', resolver);
}

export function handleReactionsListForCommitComment(
  resolver: ReactionsListForCommitCommentResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/comments/:comment_id/reactions',
    resolver
  );
}

export function handleReactionsCreateForCommitComment(
  resolver: ReactionsCreateForCommitCommentResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/comments/:comment_id/reactions',
    resolver
  );
}

export function handleReactionsDeleteForCommitComment(
  resolver: ReactionsDeleteForCommitCommentResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/comments/:comment_id/reactions/:reaction_id',
    resolver
  );
}

export function handleReposListCommits(resolver: ReposListCommitsResolver) {
  return msw.http.get('/repos/:owner/:repo/commits', resolver);
}

export function handleReposListBranchesForHeadCommit(
  resolver: ReposListBranchesForHeadCommitResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/commits/:commit_sha/branches-where-head',
    resolver
  );
}

export function handleReposListCommentsForCommit(
  resolver: ReposListCommentsForCommitResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/commits/:commit_sha/comments',
    resolver
  );
}

export function handleReposCreateCommitComment(
  resolver: ReposCreateCommitCommentResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/commits/:commit_sha/comments',
    resolver
  );
}

export function handleReposListPullRequestsAssociatedWithCommit(
  resolver: ReposListPullRequestsAssociatedWithCommitResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/commits/:commit_sha/pulls',
    resolver
  );
}

export function handleReposGetCommit(resolver: ReposGetCommitResolver) {
  return msw.http.get('/repos/:owner/:repo/commits/:ref', resolver);
}

export function handleChecksListForRef(resolver: ChecksListForRefResolver) {
  return msw.http.get('/repos/:owner/:repo/commits/:ref/check-runs', resolver);
}

export function handleChecksListSuitesForRef(
  resolver: ChecksListSuitesForRefResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/commits/:ref/check-suites',
    resolver
  );
}

export function handleReposGetCombinedStatusForRef(
  resolver: ReposGetCombinedStatusForRefResolver
) {
  return msw.http.get('/repos/:owner/:repo/commits/:ref/status', resolver);
}

export function handleReposListCommitStatusesForRef(
  resolver: ReposListCommitStatusesForRefResolver
) {
  return msw.http.get('/repos/:owner/:repo/commits/:ref/statuses', resolver);
}

export function handleReposGetCommunityProfileMetrics(
  resolver: ReposGetCommunityProfileMetricsResolver
) {
  return msw.http.get('/repos/:owner/:repo/community/profile', resolver);
}

export function handleReposCompareCommits(
  resolver: ReposCompareCommitsResolver
) {
  return msw.http.get('/repos/:owner/:repo/compare/:basehead', resolver);
}

export function handleReposGetContent(resolver: ReposGetContentResolver) {
  return msw.http.get('/repos/:owner/:repo/contents/:path', resolver);
}

export function handleReposCreateOrUpdateFileContents(
  resolver: ReposCreateOrUpdateFileContentsResolver
) {
  return msw.http.put('/repos/:owner/:repo/contents/:path', resolver);
}

export function handleReposDeleteFile(resolver: ReposDeleteFileResolver) {
  return msw.http.delete('/repos/:owner/:repo/contents/:path', resolver);
}

export function handleReposListContributors(
  resolver: ReposListContributorsResolver
) {
  return msw.http.get('/repos/:owner/:repo/contributors', resolver);
}

export function handleDependabotListAlertsForRepo(
  resolver: DependabotListAlertsForRepoResolver
) {
  return msw.http.get('/repos/:owner/:repo/dependabot/alerts', resolver);
}

export function handleDependabotGetAlert(resolver: DependabotGetAlertResolver) {
  return msw.http.get(
    '/repos/:owner/:repo/dependabot/alerts/:alert_number',
    resolver
  );
}

export function handleDependabotUpdateAlert(
  resolver: DependabotUpdateAlertResolver
) {
  return msw.http.patch(
    '/repos/:owner/:repo/dependabot/alerts/:alert_number',
    resolver
  );
}

export function handleDependabotListRepoSecrets(
  resolver: DependabotListRepoSecretsResolver
) {
  return msw.http.get('/repos/:owner/:repo/dependabot/secrets', resolver);
}

export function handleDependabotGetRepoPublicKey(
  resolver: DependabotGetRepoPublicKeyResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/dependabot/secrets/public-key',
    resolver
  );
}

export function handleDependabotGetRepoSecret(
  resolver: DependabotGetRepoSecretResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/dependabot/secrets/:secret_name',
    resolver
  );
}

export function handleDependabotCreateOrUpdateRepoSecret(
  resolver: DependabotCreateOrUpdateRepoSecretResolver
) {
  return msw.http.put(
    '/repos/:owner/:repo/dependabot/secrets/:secret_name',
    resolver
  );
}

export function handleDependabotDeleteRepoSecret(
  resolver: DependabotDeleteRepoSecretResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/dependabot/secrets/:secret_name',
    resolver
  );
}

export function handleDependencyGraphDiffRange(
  resolver: DependencyGraphDiffRangeResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/dependency-graph/compare/:basehead',
    resolver
  );
}

export function handleDependencyGraphCreateRepositorySnapshot(
  resolver: DependencyGraphCreateRepositorySnapshotResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/dependency-graph/snapshots',
    resolver
  );
}

export function handleReposListDeployments(
  resolver: ReposListDeploymentsResolver
) {
  return msw.http.get('/repos/:owner/:repo/deployments', resolver);
}

export function handleReposCreateDeployment(
  resolver: ReposCreateDeploymentResolver
) {
  return msw.http.post('/repos/:owner/:repo/deployments', resolver);
}

export function handleReposGetDeployment(resolver: ReposGetDeploymentResolver) {
  return msw.http.get(
    '/repos/:owner/:repo/deployments/:deployment_id',
    resolver
  );
}

export function handleReposDeleteDeployment(
  resolver: ReposDeleteDeploymentResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/deployments/:deployment_id',
    resolver
  );
}

export function handleReposListDeploymentStatuses(
  resolver: ReposListDeploymentStatusesResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/deployments/:deployment_id/statuses',
    resolver
  );
}

export function handleReposCreateDeploymentStatus(
  resolver: ReposCreateDeploymentStatusResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/deployments/:deployment_id/statuses',
    resolver
  );
}

export function handleReposGetDeploymentStatus(
  resolver: ReposGetDeploymentStatusResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/deployments/:deployment_id/statuses/:status_id',
    resolver
  );
}

export function handleReposCreateDispatchEvent(
  resolver: ReposCreateDispatchEventResolver
) {
  return msw.http.post('/repos/:owner/:repo/dispatches', resolver);
}

export function handleReposGetAllEnvironments(
  resolver: ReposGetAllEnvironmentsResolver
) {
  return msw.http.get('/repos/:owner/:repo/environments', resolver);
}

export function handleReposGetEnvironment(
  resolver: ReposGetEnvironmentResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/environments/:environment_name',
    resolver
  );
}

export function handleReposCreateOrUpdateEnvironment(
  resolver: ReposCreateOrUpdateEnvironmentResolver
) {
  return msw.http.put(
    '/repos/:owner/:repo/environments/:environment_name',
    resolver
  );
}

export function handleReposDeleteAnEnvironment(
  resolver: ReposDeleteAnEnvironmentResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/environments/:environment_name',
    resolver
  );
}

export function handleReposListDeploymentBranchPolicies(
  resolver: ReposListDeploymentBranchPoliciesResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/environments/:environment_name/deployment-branch-policies',
    resolver
  );
}

export function handleReposCreateDeploymentBranchPolicy(
  resolver: ReposCreateDeploymentBranchPolicyResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/environments/:environment_name/deployment-branch-policies',
    resolver
  );
}

export function handleReposGetDeploymentBranchPolicy(
  resolver: ReposGetDeploymentBranchPolicyResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/environments/:environment_name/deployment-branch-policies/:branch_policy_id',
    resolver
  );
}

export function handleReposUpdateDeploymentBranchPolicy(
  resolver: ReposUpdateDeploymentBranchPolicyResolver
) {
  return msw.http.put(
    '/repos/:owner/:repo/environments/:environment_name/deployment-branch-policies/:branch_policy_id',
    resolver
  );
}

export function handleReposDeleteDeploymentBranchPolicy(
  resolver: ReposDeleteDeploymentBranchPolicyResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/environments/:environment_name/deployment-branch-policies/:branch_policy_id',
    resolver
  );
}

export function handleActivityListRepoEvents(
  resolver: ActivityListRepoEventsResolver
) {
  return msw.http.get('/repos/:owner/:repo/events', resolver);
}

export function handleReposListForks(resolver: ReposListForksResolver) {
  return msw.http.get('/repos/:owner/:repo/forks', resolver);
}

export function handleReposCreateFork(resolver: ReposCreateForkResolver) {
  return msw.http.post('/repos/:owner/:repo/forks', resolver);
}

export function handleGitCreateBlob(resolver: GitCreateBlobResolver) {
  return msw.http.post('/repos/:owner/:repo/git/blobs', resolver);
}

export function handleGitGetBlob(resolver: GitGetBlobResolver) {
  return msw.http.get('/repos/:owner/:repo/git/blobs/:file_sha', resolver);
}

export function handleGitCreateCommit(resolver: GitCreateCommitResolver) {
  return msw.http.post('/repos/:owner/:repo/git/commits', resolver);
}

export function handleGitGetCommit(resolver: GitGetCommitResolver) {
  return msw.http.get('/repos/:owner/:repo/git/commits/:commit_sha', resolver);
}

export function handleGitListMatchingRefs(
  resolver: GitListMatchingRefsResolver
) {
  return msw.http.get('/repos/:owner/:repo/git/matching-refs/:ref', resolver);
}

export function handleGitGetRef(resolver: GitGetRefResolver) {
  return msw.http.get('/repos/:owner/:repo/git/ref/:ref', resolver);
}

export function handleGitCreateRef(resolver: GitCreateRefResolver) {
  return msw.http.post('/repos/:owner/:repo/git/refs', resolver);
}

export function handleGitUpdateRef(resolver: GitUpdateRefResolver) {
  return msw.http.patch('/repos/:owner/:repo/git/refs/:ref', resolver);
}

export function handleGitDeleteRef(resolver: GitDeleteRefResolver) {
  return msw.http.delete('/repos/:owner/:repo/git/refs/:ref', resolver);
}

export function handleGitCreateTag(resolver: GitCreateTagResolver) {
  return msw.http.post('/repos/:owner/:repo/git/tags', resolver);
}

export function handleGitGetTag(resolver: GitGetTagResolver) {
  return msw.http.get('/repos/:owner/:repo/git/tags/:tag_sha', resolver);
}

export function handleGitCreateTree(resolver: GitCreateTreeResolver) {
  return msw.http.post('/repos/:owner/:repo/git/trees', resolver);
}

export function handleGitGetTree(resolver: GitGetTreeResolver) {
  return msw.http.get('/repos/:owner/:repo/git/trees/:tree_sha', resolver);
}

export function handleReposListWebhooks(resolver: ReposListWebhooksResolver) {
  return msw.http.get('/repos/:owner/:repo/hooks', resolver);
}

export function handleReposCreateWebhook(resolver: ReposCreateWebhookResolver) {
  return msw.http.post('/repos/:owner/:repo/hooks', resolver);
}

export function handleReposGetWebhook(resolver: ReposGetWebhookResolver) {
  return msw.http.get('/repos/:owner/:repo/hooks/:hook_id', resolver);
}

export function handleReposUpdateWebhook(resolver: ReposUpdateWebhookResolver) {
  return msw.http.patch('/repos/:owner/:repo/hooks/:hook_id', resolver);
}

export function handleReposDeleteWebhook(resolver: ReposDeleteWebhookResolver) {
  return msw.http.delete('/repos/:owner/:repo/hooks/:hook_id', resolver);
}

export function handleReposGetWebhookConfigForRepo(
  resolver: ReposGetWebhookConfigForRepoResolver
) {
  return msw.http.get('/repos/:owner/:repo/hooks/:hook_id/config', resolver);
}

export function handleReposUpdateWebhookConfigForRepo(
  resolver: ReposUpdateWebhookConfigForRepoResolver
) {
  return msw.http.patch('/repos/:owner/:repo/hooks/:hook_id/config', resolver);
}

export function handleReposListWebhookDeliveries(
  resolver: ReposListWebhookDeliveriesResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/hooks/:hook_id/deliveries',
    resolver
  );
}

export function handleReposGetWebhookDelivery(
  resolver: ReposGetWebhookDeliveryResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/hooks/:hook_id/deliveries/:delivery_id',
    resolver
  );
}

export function handleReposRedeliverWebhookDelivery(
  resolver: ReposRedeliverWebhookDeliveryResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/hooks/:hook_id/deliveries/:delivery_id/attempts',
    resolver
  );
}

export function handleReposPingWebhook(resolver: ReposPingWebhookResolver) {
  return msw.http.post('/repos/:owner/:repo/hooks/:hook_id/pings', resolver);
}

export function handleReposTestPushWebhook(
  resolver: ReposTestPushWebhookResolver
) {
  return msw.http.post('/repos/:owner/:repo/hooks/:hook_id/tests', resolver);
}

export function handleMigrationsGetImportStatus(
  resolver: MigrationsGetImportStatusResolver
) {
  return msw.http.get('/repos/:owner/:repo/import', resolver);
}

export function handleMigrationsStartImport(
  resolver: MigrationsStartImportResolver
) {
  return msw.http.put('/repos/:owner/:repo/import', resolver);
}

export function handleMigrationsUpdateImport(
  resolver: MigrationsUpdateImportResolver
) {
  return msw.http.patch('/repos/:owner/:repo/import', resolver);
}

export function handleMigrationsCancelImport(
  resolver: MigrationsCancelImportResolver
) {
  return msw.http.delete('/repos/:owner/:repo/import', resolver);
}

export function handleMigrationsGetCommitAuthors(
  resolver: MigrationsGetCommitAuthorsResolver
) {
  return msw.http.get('/repos/:owner/:repo/import/authors', resolver);
}

export function handleMigrationsMapCommitAuthor(
  resolver: MigrationsMapCommitAuthorResolver
) {
  return msw.http.patch(
    '/repos/:owner/:repo/import/authors/:author_id',
    resolver
  );
}

export function handleMigrationsGetLargeFiles(
  resolver: MigrationsGetLargeFilesResolver
) {
  return msw.http.get('/repos/:owner/:repo/import/large_files', resolver);
}

export function handleMigrationsSetLfsPreference(
  resolver: MigrationsSetLfsPreferenceResolver
) {
  return msw.http.patch('/repos/:owner/:repo/import/lfs', resolver);
}

export function handleAppsGetRepoInstallation(
  resolver: AppsGetRepoInstallationResolver
) {
  return msw.http.get('/repos/:owner/:repo/installation', resolver);
}

export function handleInteractionsGetRestrictionsForRepo(
  resolver: InteractionsGetRestrictionsForRepoResolver
) {
  return msw.http.get('/repos/:owner/:repo/interaction-limits', resolver);
}

export function handleInteractionsSetRestrictionsForRepo(
  resolver: InteractionsSetRestrictionsForRepoResolver
) {
  return msw.http.put('/repos/:owner/:repo/interaction-limits', resolver);
}

export function handleInteractionsRemoveRestrictionsForRepo(
  resolver: InteractionsRemoveRestrictionsForRepoResolver
) {
  return msw.http.delete('/repos/:owner/:repo/interaction-limits', resolver);
}

export function handleReposListInvitations(
  resolver: ReposListInvitationsResolver
) {
  return msw.http.get('/repos/:owner/:repo/invitations', resolver);
}

export function handleReposUpdateInvitation(
  resolver: ReposUpdateInvitationResolver
) {
  return msw.http.patch(
    '/repos/:owner/:repo/invitations/:invitation_id',
    resolver
  );
}

export function handleReposDeleteInvitation(
  resolver: ReposDeleteInvitationResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/invitations/:invitation_id',
    resolver
  );
}

export function handleIssuesListForRepo(resolver: IssuesListForRepoResolver) {
  return msw.http.get('/repos/:owner/:repo/issues', resolver);
}

export function handleIssuesCreate(resolver: IssuesCreateResolver) {
  return msw.http.post('/repos/:owner/:repo/issues', resolver);
}

export function handleIssuesListCommentsForRepo(
  resolver: IssuesListCommentsForRepoResolver
) {
  return msw.http.get('/repos/:owner/:repo/issues/comments', resolver);
}

export function handleIssuesGetComment(resolver: IssuesGetCommentResolver) {
  return msw.http.get(
    '/repos/:owner/:repo/issues/comments/:comment_id',
    resolver
  );
}

export function handleIssuesUpdateComment(
  resolver: IssuesUpdateCommentResolver
) {
  return msw.http.patch(
    '/repos/:owner/:repo/issues/comments/:comment_id',
    resolver
  );
}

export function handleIssuesDeleteComment(
  resolver: IssuesDeleteCommentResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/issues/comments/:comment_id',
    resolver
  );
}

export function handleReactionsListForIssueComment(
  resolver: ReactionsListForIssueCommentResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/issues/comments/:comment_id/reactions',
    resolver
  );
}

export function handleReactionsCreateForIssueComment(
  resolver: ReactionsCreateForIssueCommentResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/issues/comments/:comment_id/reactions',
    resolver
  );
}

export function handleReactionsDeleteForIssueComment(
  resolver: ReactionsDeleteForIssueCommentResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/issues/comments/:comment_id/reactions/:reaction_id',
    resolver
  );
}

export function handleIssuesListEventsForRepo(
  resolver: IssuesListEventsForRepoResolver
) {
  return msw.http.get('/repos/:owner/:repo/issues/events', resolver);
}

export function handleIssuesGetEvent(resolver: IssuesGetEventResolver) {
  return msw.http.get('/repos/:owner/:repo/issues/events/:event_id', resolver);
}

export function handleIssuesGet(resolver: IssuesGetResolver) {
  return msw.http.get('/repos/:owner/:repo/issues/:issue_number', resolver);
}

export function handleIssuesUpdate(resolver: IssuesUpdateResolver) {
  return msw.http.patch('/repos/:owner/:repo/issues/:issue_number', resolver);
}

export function handleIssuesAddAssignees(resolver: IssuesAddAssigneesResolver) {
  return msw.http.post(
    '/repos/:owner/:repo/issues/:issue_number/assignees',
    resolver
  );
}

export function handleIssuesRemoveAssignees(
  resolver: IssuesRemoveAssigneesResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/issues/:issue_number/assignees',
    resolver
  );
}

export function handleIssuesListComments(resolver: IssuesListCommentsResolver) {
  return msw.http.get(
    '/repos/:owner/:repo/issues/:issue_number/comments',
    resolver
  );
}

export function handleIssuesCreateComment(
  resolver: IssuesCreateCommentResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/issues/:issue_number/comments',
    resolver
  );
}

export function handleIssuesListEvents(resolver: IssuesListEventsResolver) {
  return msw.http.get(
    '/repos/:owner/:repo/issues/:issue_number/events',
    resolver
  );
}

export function handleIssuesListLabelsOnIssue(
  resolver: IssuesListLabelsOnIssueResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/issues/:issue_number/labels',
    resolver
  );
}

export function handleIssuesAddLabels(resolver: IssuesAddLabelsResolver) {
  return msw.http.post(
    '/repos/:owner/:repo/issues/:issue_number/labels',
    resolver
  );
}

export function handleIssuesSetLabels(resolver: IssuesSetLabelsResolver) {
  return msw.http.put(
    '/repos/:owner/:repo/issues/:issue_number/labels',
    resolver
  );
}

export function handleIssuesRemoveAllLabels(
  resolver: IssuesRemoveAllLabelsResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/issues/:issue_number/labels',
    resolver
  );
}

export function handleIssuesRemoveLabel(resolver: IssuesRemoveLabelResolver) {
  return msw.http.delete(
    '/repos/:owner/:repo/issues/:issue_number/labels/:name',
    resolver
  );
}

export function handleIssuesLock(resolver: IssuesLockResolver) {
  return msw.http.put(
    '/repos/:owner/:repo/issues/:issue_number/lock',
    resolver
  );
}

export function handleIssuesUnlock(resolver: IssuesUnlockResolver) {
  return msw.http.delete(
    '/repos/:owner/:repo/issues/:issue_number/lock',
    resolver
  );
}

export function handleReactionsListForIssue(
  resolver: ReactionsListForIssueResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/issues/:issue_number/reactions',
    resolver
  );
}

export function handleReactionsCreateForIssue(
  resolver: ReactionsCreateForIssueResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/issues/:issue_number/reactions',
    resolver
  );
}

export function handleReactionsDeleteForIssue(
  resolver: ReactionsDeleteForIssueResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/issues/:issue_number/reactions/:reaction_id',
    resolver
  );
}

export function handleIssuesListEventsForTimeline(
  resolver: IssuesListEventsForTimelineResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/issues/:issue_number/timeline',
    resolver
  );
}

export function handleReposListDeployKeys(
  resolver: ReposListDeployKeysResolver
) {
  return msw.http.get('/repos/:owner/:repo/keys', resolver);
}

export function handleReposCreateDeployKey(
  resolver: ReposCreateDeployKeyResolver
) {
  return msw.http.post('/repos/:owner/:repo/keys', resolver);
}

export function handleReposGetDeployKey(resolver: ReposGetDeployKeyResolver) {
  return msw.http.get('/repos/:owner/:repo/keys/:key_id', resolver);
}

export function handleReposDeleteDeployKey(
  resolver: ReposDeleteDeployKeyResolver
) {
  return msw.http.delete('/repos/:owner/:repo/keys/:key_id', resolver);
}

export function handleIssuesListLabelsForRepo(
  resolver: IssuesListLabelsForRepoResolver
) {
  return msw.http.get('/repos/:owner/:repo/labels', resolver);
}

export function handleIssuesCreateLabel(resolver: IssuesCreateLabelResolver) {
  return msw.http.post('/repos/:owner/:repo/labels', resolver);
}

export function handleIssuesGetLabel(resolver: IssuesGetLabelResolver) {
  return msw.http.get('/repos/:owner/:repo/labels/:name', resolver);
}

export function handleIssuesUpdateLabel(resolver: IssuesUpdateLabelResolver) {
  return msw.http.patch('/repos/:owner/:repo/labels/:name', resolver);
}

export function handleIssuesDeleteLabel(resolver: IssuesDeleteLabelResolver) {
  return msw.http.delete('/repos/:owner/:repo/labels/:name', resolver);
}

export function handleReposListLanguages(resolver: ReposListLanguagesResolver) {
  return msw.http.get('/repos/:owner/:repo/languages', resolver);
}

export function handleReposEnableLfsForRepo(
  resolver: ReposEnableLfsForRepoResolver
) {
  return msw.http.put('/repos/:owner/:repo/lfs', resolver);
}

export function handleReposDisableLfsForRepo(
  resolver: ReposDisableLfsForRepoResolver
) {
  return msw.http.delete('/repos/:owner/:repo/lfs', resolver);
}

export function handleLicensesGetForRepo(resolver: LicensesGetForRepoResolver) {
  return msw.http.get('/repos/:owner/:repo/license', resolver);
}

export function handleReposMergeUpstream(resolver: ReposMergeUpstreamResolver) {
  return msw.http.post('/repos/:owner/:repo/merge-upstream', resolver);
}

export function handleReposMerge(resolver: ReposMergeResolver) {
  return msw.http.post('/repos/:owner/:repo/merges', resolver);
}

export function handleIssuesListMilestones(
  resolver: IssuesListMilestonesResolver
) {
  return msw.http.get('/repos/:owner/:repo/milestones', resolver);
}

export function handleIssuesCreateMilestone(
  resolver: IssuesCreateMilestoneResolver
) {
  return msw.http.post('/repos/:owner/:repo/milestones', resolver);
}

export function handleIssuesGetMilestone(resolver: IssuesGetMilestoneResolver) {
  return msw.http.get(
    '/repos/:owner/:repo/milestones/:milestone_number',
    resolver
  );
}

export function handleIssuesUpdateMilestone(
  resolver: IssuesUpdateMilestoneResolver
) {
  return msw.http.patch(
    '/repos/:owner/:repo/milestones/:milestone_number',
    resolver
  );
}

export function handleIssuesDeleteMilestone(
  resolver: IssuesDeleteMilestoneResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/milestones/:milestone_number',
    resolver
  );
}

export function handleIssuesListLabelsForMilestone(
  resolver: IssuesListLabelsForMilestoneResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/milestones/:milestone_number/labels',
    resolver
  );
}

export function handleActivityListRepoNotificationsForAuthenticatedUser(
  resolver: ActivityListRepoNotificationsForAuthenticatedUserResolver
) {
  return msw.http.get('/repos/:owner/:repo/notifications', resolver);
}

export function handleActivityMarkRepoNotificationsAsRead(
  resolver: ActivityMarkRepoNotificationsAsReadResolver
) {
  return msw.http.put('/repos/:owner/:repo/notifications', resolver);
}

export function handleReposGetPages(resolver: ReposGetPagesResolver) {
  return msw.http.get('/repos/:owner/:repo/pages', resolver);
}

export function handleReposCreatePagesSite(
  resolver: ReposCreatePagesSiteResolver
) {
  return msw.http.post('/repos/:owner/:repo/pages', resolver);
}

export function handleReposUpdateInformationAboutPagesSite(
  resolver: ReposUpdateInformationAboutPagesSiteResolver
) {
  return msw.http.put('/repos/:owner/:repo/pages', resolver);
}

export function handleReposDeletePagesSite(
  resolver: ReposDeletePagesSiteResolver
) {
  return msw.http.delete('/repos/:owner/:repo/pages', resolver);
}

export function handleReposListPagesBuilds(
  resolver: ReposListPagesBuildsResolver
) {
  return msw.http.get('/repos/:owner/:repo/pages/builds', resolver);
}

export function handleReposRequestPagesBuild(
  resolver: ReposRequestPagesBuildResolver
) {
  return msw.http.post('/repos/:owner/:repo/pages/builds', resolver);
}

export function handleReposGetLatestPagesBuild(
  resolver: ReposGetLatestPagesBuildResolver
) {
  return msw.http.get('/repos/:owner/:repo/pages/builds/latest', resolver);
}

export function handleReposGetPagesBuild(resolver: ReposGetPagesBuildResolver) {
  return msw.http.get('/repos/:owner/:repo/pages/builds/:build_id', resolver);
}

export function handleReposCreatePagesDeployment(
  resolver: ReposCreatePagesDeploymentResolver
) {
  return msw.http.post('/repos/:owner/:repo/pages/deployment', resolver);
}

export function handleReposGetPagesHealthCheck(
  resolver: ReposGetPagesHealthCheckResolver
) {
  return msw.http.get('/repos/:owner/:repo/pages/health', resolver);
}

export function handleProjectsListForRepo(
  resolver: ProjectsListForRepoResolver
) {
  return msw.http.get('/repos/:owner/:repo/projects', resolver);
}

export function handleProjectsCreateForRepo(
  resolver: ProjectsCreateForRepoResolver
) {
  return msw.http.post('/repos/:owner/:repo/projects', resolver);
}

export function handlePullsList(resolver: PullsListResolver) {
  return msw.http.get('/repos/:owner/:repo/pulls', resolver);
}

export function handlePullsCreate(resolver: PullsCreateResolver) {
  return msw.http.post('/repos/:owner/:repo/pulls', resolver);
}

export function handlePullsListReviewCommentsForRepo(
  resolver: PullsListReviewCommentsForRepoResolver
) {
  return msw.http.get('/repos/:owner/:repo/pulls/comments', resolver);
}

export function handlePullsGetReviewComment(
  resolver: PullsGetReviewCommentResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/pulls/comments/:comment_id',
    resolver
  );
}

export function handlePullsUpdateReviewComment(
  resolver: PullsUpdateReviewCommentResolver
) {
  return msw.http.patch(
    '/repos/:owner/:repo/pulls/comments/:comment_id',
    resolver
  );
}

export function handlePullsDeleteReviewComment(
  resolver: PullsDeleteReviewCommentResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/pulls/comments/:comment_id',
    resolver
  );
}

export function handleReactionsListForPullRequestReviewComment(
  resolver: ReactionsListForPullRequestReviewCommentResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/pulls/comments/:comment_id/reactions',
    resolver
  );
}

export function handleReactionsCreateForPullRequestReviewComment(
  resolver: ReactionsCreateForPullRequestReviewCommentResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/pulls/comments/:comment_id/reactions',
    resolver
  );
}

export function handleReactionsDeleteForPullRequestComment(
  resolver: ReactionsDeleteForPullRequestCommentResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/pulls/comments/:comment_id/reactions/:reaction_id',
    resolver
  );
}

export function handlePullsGet(resolver: PullsGetResolver) {
  return msw.http.get('/repos/:owner/:repo/pulls/:pull_number', resolver);
}

export function handlePullsUpdate(resolver: PullsUpdateResolver) {
  return msw.http.patch('/repos/:owner/:repo/pulls/:pull_number', resolver);
}

export function handleCodespacesCreateWithPrForAuthenticatedUser(
  resolver: CodespacesCreateWithPrForAuthenticatedUserResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/pulls/:pull_number/codespaces',
    resolver
  );
}

export function handlePullsListReviewComments(
  resolver: PullsListReviewCommentsResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/pulls/:pull_number/comments',
    resolver
  );
}

export function handlePullsCreateReviewComment(
  resolver: PullsCreateReviewCommentResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/pulls/:pull_number/comments',
    resolver
  );
}

export function handlePullsCreateReplyForReviewComment(
  resolver: PullsCreateReplyForReviewCommentResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/pulls/:pull_number/comments/:comment_id/replies',
    resolver
  );
}

export function handlePullsListCommits(resolver: PullsListCommitsResolver) {
  return msw.http.get(
    '/repos/:owner/:repo/pulls/:pull_number/commits',
    resolver
  );
}

export function handlePullsListFiles(resolver: PullsListFilesResolver) {
  return msw.http.get('/repos/:owner/:repo/pulls/:pull_number/files', resolver);
}

export function handlePullsCheckIfMerged(resolver: PullsCheckIfMergedResolver) {
  return msw.http.get('/repos/:owner/:repo/pulls/:pull_number/merge', resolver);
}

export function handlePullsMerge(resolver: PullsMergeResolver) {
  return msw.http.put('/repos/:owner/:repo/pulls/:pull_number/merge', resolver);
}

export function handlePullsListRequestedReviewers(
  resolver: PullsListRequestedReviewersResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/pulls/:pull_number/requested_reviewers',
    resolver
  );
}

export function handlePullsRequestReviewers(
  resolver: PullsRequestReviewersResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/pulls/:pull_number/requested_reviewers',
    resolver
  );
}

export function handlePullsRemoveRequestedReviewers(
  resolver: PullsRemoveRequestedReviewersResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/pulls/:pull_number/requested_reviewers',
    resolver
  );
}

export function handlePullsListReviews(resolver: PullsListReviewsResolver) {
  return msw.http.get(
    '/repos/:owner/:repo/pulls/:pull_number/reviews',
    resolver
  );
}

export function handlePullsCreateReview(resolver: PullsCreateReviewResolver) {
  return msw.http.post(
    '/repos/:owner/:repo/pulls/:pull_number/reviews',
    resolver
  );
}

export function handlePullsGetReview(resolver: PullsGetReviewResolver) {
  return msw.http.get(
    '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id',
    resolver
  );
}

export function handlePullsUpdateReview(resolver: PullsUpdateReviewResolver) {
  return msw.http.put(
    '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id',
    resolver
  );
}

export function handlePullsDeletePendingReview(
  resolver: PullsDeletePendingReviewResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id',
    resolver
  );
}

export function handlePullsListCommentsForReview(
  resolver: PullsListCommentsForReviewResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/comments',
    resolver
  );
}

export function handlePullsDismissReview(resolver: PullsDismissReviewResolver) {
  return msw.http.put(
    '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/dismissals',
    resolver
  );
}

export function handlePullsSubmitReview(resolver: PullsSubmitReviewResolver) {
  return msw.http.post(
    '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/events',
    resolver
  );
}

export function handlePullsUpdateBranch(resolver: PullsUpdateBranchResolver) {
  return msw.http.put(
    '/repos/:owner/:repo/pulls/:pull_number/update-branch',
    resolver
  );
}

export function handleReposGetReadme(resolver: ReposGetReadmeResolver) {
  return msw.http.get('/repos/:owner/:repo/readme', resolver);
}

export function handleReposGetReadmeInDirectory(
  resolver: ReposGetReadmeInDirectoryResolver
) {
  return msw.http.get('/repos/:owner/:repo/readme/:dir', resolver);
}

export function handleReposListReleases(resolver: ReposListReleasesResolver) {
  return msw.http.get('/repos/:owner/:repo/releases', resolver);
}

export function handleReposCreateRelease(resolver: ReposCreateReleaseResolver) {
  return msw.http.post('/repos/:owner/:repo/releases', resolver);
}

export function handleReposGetReleaseAsset(
  resolver: ReposGetReleaseAssetResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/releases/assets/:asset_id',
    resolver
  );
}

export function handleReposUpdateReleaseAsset(
  resolver: ReposUpdateReleaseAssetResolver
) {
  return msw.http.patch(
    '/repos/:owner/:repo/releases/assets/:asset_id',
    resolver
  );
}

export function handleReposDeleteReleaseAsset(
  resolver: ReposDeleteReleaseAssetResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/releases/assets/:asset_id',
    resolver
  );
}

export function handleReposGenerateReleaseNotes(
  resolver: ReposGenerateReleaseNotesResolver
) {
  return msw.http.post('/repos/:owner/:repo/releases/generate-notes', resolver);
}

export function handleReposGetLatestRelease(
  resolver: ReposGetLatestReleaseResolver
) {
  return msw.http.get('/repos/:owner/:repo/releases/latest', resolver);
}

export function handleReposGetReleaseByTag(
  resolver: ReposGetReleaseByTagResolver
) {
  return msw.http.get('/repos/:owner/:repo/releases/tags/:tag', resolver);
}

export function handleReposGetRelease(resolver: ReposGetReleaseResolver) {
  return msw.http.get('/repos/:owner/:repo/releases/:release_id', resolver);
}

export function handleReposUpdateRelease(resolver: ReposUpdateReleaseResolver) {
  return msw.http.patch('/repos/:owner/:repo/releases/:release_id', resolver);
}

export function handleReposDeleteRelease(resolver: ReposDeleteReleaseResolver) {
  return msw.http.delete('/repos/:owner/:repo/releases/:release_id', resolver);
}

export function handleReposListReleaseAssets(
  resolver: ReposListReleaseAssetsResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/releases/:release_id/assets',
    resolver
  );
}

export function handleReposUploadReleaseAsset(
  resolver: ReposUploadReleaseAssetResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/releases/:release_id/assets',
    resolver
  );
}

export function handleReactionsListForRelease(
  resolver: ReactionsListForReleaseResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/releases/:release_id/reactions',
    resolver
  );
}

export function handleReactionsCreateForRelease(
  resolver: ReactionsCreateForReleaseResolver
) {
  return msw.http.post(
    '/repos/:owner/:repo/releases/:release_id/reactions',
    resolver
  );
}

export function handleReactionsDeleteForRelease(
  resolver: ReactionsDeleteForReleaseResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/releases/:release_id/reactions/:reaction_id',
    resolver
  );
}

export function handleSecretScanningListAlertsForRepo(
  resolver: SecretScanningListAlertsForRepoResolver
) {
  return msw.http.get('/repos/:owner/:repo/secret-scanning/alerts', resolver);
}

export function handleSecretScanningGetAlert(
  resolver: SecretScanningGetAlertResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/secret-scanning/alerts/:alert_number',
    resolver
  );
}

export function handleSecretScanningUpdateAlert(
  resolver: SecretScanningUpdateAlertResolver
) {
  return msw.http.patch(
    '/repos/:owner/:repo/secret-scanning/alerts/:alert_number',
    resolver
  );
}

export function handleSecretScanningListLocationsForAlert(
  resolver: SecretScanningListLocationsForAlertResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/secret-scanning/alerts/:alert_number/locations',
    resolver
  );
}

export function handleActivityListStargazersForRepo(
  resolver: ActivityListStargazersForRepoResolver
) {
  return msw.http.get('/repos/:owner/:repo/stargazers', resolver);
}

export function handleReposGetCodeFrequencyStats(
  resolver: ReposGetCodeFrequencyStatsResolver
) {
  return msw.http.get('/repos/:owner/:repo/stats/code_frequency', resolver);
}

export function handleReposGetCommitActivityStats(
  resolver: ReposGetCommitActivityStatsResolver
) {
  return msw.http.get('/repos/:owner/:repo/stats/commit_activity', resolver);
}

export function handleReposGetContributorsStats(
  resolver: ReposGetContributorsStatsResolver
) {
  return msw.http.get('/repos/:owner/:repo/stats/contributors', resolver);
}

export function handleReposGetParticipationStats(
  resolver: ReposGetParticipationStatsResolver
) {
  return msw.http.get('/repos/:owner/:repo/stats/participation', resolver);
}

export function handleReposGetPunchCardStats(
  resolver: ReposGetPunchCardStatsResolver
) {
  return msw.http.get('/repos/:owner/:repo/stats/punch_card', resolver);
}

export function handleReposCreateCommitStatus(
  resolver: ReposCreateCommitStatusResolver
) {
  return msw.http.post('/repos/:owner/:repo/statuses/:sha', resolver);
}

export function handleActivityListWatchersForRepo(
  resolver: ActivityListWatchersForRepoResolver
) {
  return msw.http.get('/repos/:owner/:repo/subscribers', resolver);
}

export function handleActivityGetRepoSubscription(
  resolver: ActivityGetRepoSubscriptionResolver
) {
  return msw.http.get('/repos/:owner/:repo/subscription', resolver);
}

export function handleActivitySetRepoSubscription(
  resolver: ActivitySetRepoSubscriptionResolver
) {
  return msw.http.put('/repos/:owner/:repo/subscription', resolver);
}

export function handleActivityDeleteRepoSubscription(
  resolver: ActivityDeleteRepoSubscriptionResolver
) {
  return msw.http.delete('/repos/:owner/:repo/subscription', resolver);
}

export function handleReposListTags(resolver: ReposListTagsResolver) {
  return msw.http.get('/repos/:owner/:repo/tags', resolver);
}

export function handleReposListTagProtection(
  resolver: ReposListTagProtectionResolver
) {
  return msw.http.get('/repos/:owner/:repo/tags/protection', resolver);
}

export function handleReposCreateTagProtection(
  resolver: ReposCreateTagProtectionResolver
) {
  return msw.http.post('/repos/:owner/:repo/tags/protection', resolver);
}

export function handleReposDeleteTagProtection(
  resolver: ReposDeleteTagProtectionResolver
) {
  return msw.http.delete(
    '/repos/:owner/:repo/tags/protection/:tag_protection_id',
    resolver
  );
}

export function handleReposDownloadTarballArchive(
  resolver: ReposDownloadTarballArchiveResolver
) {
  return msw.http.get('/repos/:owner/:repo/tarball/:ref', resolver);
}

export function handleReposListTeams(resolver: ReposListTeamsResolver) {
  return msw.http.get('/repos/:owner/:repo/teams', resolver);
}

export function handleReposGetAllTopics(resolver: ReposGetAllTopicsResolver) {
  return msw.http.get('/repos/:owner/:repo/topics', resolver);
}

export function handleReposReplaceAllTopics(
  resolver: ReposReplaceAllTopicsResolver
) {
  return msw.http.put('/repos/:owner/:repo/topics', resolver);
}

export function handleReposGetClones(resolver: ReposGetClonesResolver) {
  return msw.http.get('/repos/:owner/:repo/traffic/clones', resolver);
}

export function handleReposGetTopPaths(resolver: ReposGetTopPathsResolver) {
  return msw.http.get('/repos/:owner/:repo/traffic/popular/paths', resolver);
}

export function handleReposGetTopReferrers(
  resolver: ReposGetTopReferrersResolver
) {
  return msw.http.get(
    '/repos/:owner/:repo/traffic/popular/referrers',
    resolver
  );
}

export function handleReposGetViews(resolver: ReposGetViewsResolver) {
  return msw.http.get('/repos/:owner/:repo/traffic/views', resolver);
}

export function handleReposTransfer(resolver: ReposTransferResolver) {
  return msw.http.post('/repos/:owner/:repo/transfer', resolver);
}

export function handleReposCheckVulnerabilityAlerts(
  resolver: ReposCheckVulnerabilityAlertsResolver
) {
  return msw.http.get('/repos/:owner/:repo/vulnerability-alerts', resolver);
}

export function handleReposEnableVulnerabilityAlerts(
  resolver: ReposEnableVulnerabilityAlertsResolver
) {
  return msw.http.put('/repos/:owner/:repo/vulnerability-alerts', resolver);
}

export function handleReposDisableVulnerabilityAlerts(
  resolver: ReposDisableVulnerabilityAlertsResolver
) {
  return msw.http.delete('/repos/:owner/:repo/vulnerability-alerts', resolver);
}

export function handleReposDownloadZipballArchive(
  resolver: ReposDownloadZipballArchiveResolver
) {
  return msw.http.get('/repos/:owner/:repo/zipball/:ref', resolver);
}

export function handleReposCreateUsingTemplate(
  resolver: ReposCreateUsingTemplateResolver
) {
  return msw.http.post(
    '/repos/:template_owner/:template_repo/generate',
    resolver
  );
}

export function handleReposListPublic(resolver: ReposListPublicResolver) {
  return msw.http.get('/repositories', resolver);
}

export function handleActionsListEnvironmentSecrets(
  resolver: ActionsListEnvironmentSecretsResolver
) {
  return msw.http.get(
    '/repositories/:repository_id/environments/:environment_name/secrets',
    resolver
  );
}

export function handleActionsGetEnvironmentPublicKey(
  resolver: ActionsGetEnvironmentPublicKeyResolver
) {
  return msw.http.get(
    '/repositories/:repository_id/environments/:environment_name/secrets/public-key',
    resolver
  );
}

export function handleActionsGetEnvironmentSecret(
  resolver: ActionsGetEnvironmentSecretResolver
) {
  return msw.http.get(
    '/repositories/:repository_id/environments/:environment_name/secrets/:secret_name',
    resolver
  );
}

export function handleActionsCreateOrUpdateEnvironmentSecret(
  resolver: ActionsCreateOrUpdateEnvironmentSecretResolver
) {
  return msw.http.put(
    '/repositories/:repository_id/environments/:environment_name/secrets/:secret_name',
    resolver
  );
}

export function handleActionsDeleteEnvironmentSecret(
  resolver: ActionsDeleteEnvironmentSecretResolver
) {
  return msw.http.delete(
    '/repositories/:repository_id/environments/:environment_name/secrets/:secret_name',
    resolver
  );
}

export function handleSearchCode(resolver: SearchCodeResolver) {
  return msw.http.get('/search/code', resolver);
}

export function handleSearchCommits(resolver: SearchCommitsResolver) {
  return msw.http.get('/search/commits', resolver);
}

export function handleSearchIssuesAndPullRequests(
  resolver: SearchIssuesAndPullRequestsResolver
) {
  return msw.http.get('/search/issues', resolver);
}

export function handleSearchLabels(resolver: SearchLabelsResolver) {
  return msw.http.get('/search/labels', resolver);
}

export function handleSearchRepos(resolver: SearchReposResolver) {
  return msw.http.get('/search/repositories', resolver);
}

export function handleSearchTopics(resolver: SearchTopicsResolver) {
  return msw.http.get('/search/topics', resolver);
}

export function handleSearchUsers(resolver: SearchUsersResolver) {
  return msw.http.get('/search/users', resolver);
}

export function handleTeamsGetLegacy(resolver: TeamsGetLegacyResolver) {
  return msw.http.get('/teams/:team_id', resolver);
}

export function handleTeamsUpdateLegacy(resolver: TeamsUpdateLegacyResolver) {
  return msw.http.patch('/teams/:team_id', resolver);
}

export function handleTeamsDeleteLegacy(resolver: TeamsDeleteLegacyResolver) {
  return msw.http.delete('/teams/:team_id', resolver);
}

export function handleTeamsListDiscussionsLegacy(
  resolver: TeamsListDiscussionsLegacyResolver
) {
  return msw.http.get('/teams/:team_id/discussions', resolver);
}

export function handleTeamsCreateDiscussionLegacy(
  resolver: TeamsCreateDiscussionLegacyResolver
) {
  return msw.http.post('/teams/:team_id/discussions', resolver);
}

export function handleTeamsGetDiscussionLegacy(
  resolver: TeamsGetDiscussionLegacyResolver
) {
  return msw.http.get(
    '/teams/:team_id/discussions/:discussion_number',
    resolver
  );
}

export function handleTeamsUpdateDiscussionLegacy(
  resolver: TeamsUpdateDiscussionLegacyResolver
) {
  return msw.http.patch(
    '/teams/:team_id/discussions/:discussion_number',
    resolver
  );
}

export function handleTeamsDeleteDiscussionLegacy(
  resolver: TeamsDeleteDiscussionLegacyResolver
) {
  return msw.http.delete(
    '/teams/:team_id/discussions/:discussion_number',
    resolver
  );
}

export function handleTeamsListDiscussionCommentsLegacy(
  resolver: TeamsListDiscussionCommentsLegacyResolver
) {
  return msw.http.get(
    '/teams/:team_id/discussions/:discussion_number/comments',
    resolver
  );
}

export function handleTeamsCreateDiscussionCommentLegacy(
  resolver: TeamsCreateDiscussionCommentLegacyResolver
) {
  return msw.http.post(
    '/teams/:team_id/discussions/:discussion_number/comments',
    resolver
  );
}

export function handleTeamsGetDiscussionCommentLegacy(
  resolver: TeamsGetDiscussionCommentLegacyResolver
) {
  return msw.http.get(
    '/teams/:team_id/discussions/:discussion_number/comments/:comment_number',
    resolver
  );
}

export function handleTeamsUpdateDiscussionCommentLegacy(
  resolver: TeamsUpdateDiscussionCommentLegacyResolver
) {
  return msw.http.patch(
    '/teams/:team_id/discussions/:discussion_number/comments/:comment_number',
    resolver
  );
}

export function handleTeamsDeleteDiscussionCommentLegacy(
  resolver: TeamsDeleteDiscussionCommentLegacyResolver
) {
  return msw.http.delete(
    '/teams/:team_id/discussions/:discussion_number/comments/:comment_number',
    resolver
  );
}

export function handleReactionsListForTeamDiscussionCommentLegacy(
  resolver: ReactionsListForTeamDiscussionCommentLegacyResolver
) {
  return msw.http.get(
    '/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions',
    resolver
  );
}

export function handleReactionsCreateForTeamDiscussionCommentLegacy(
  resolver: ReactionsCreateForTeamDiscussionCommentLegacyResolver
) {
  return msw.http.post(
    '/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions',
    resolver
  );
}

export function handleReactionsListForTeamDiscussionLegacy(
  resolver: ReactionsListForTeamDiscussionLegacyResolver
) {
  return msw.http.get(
    '/teams/:team_id/discussions/:discussion_number/reactions',
    resolver
  );
}

export function handleReactionsCreateForTeamDiscussionLegacy(
  resolver: ReactionsCreateForTeamDiscussionLegacyResolver
) {
  return msw.http.post(
    '/teams/:team_id/discussions/:discussion_number/reactions',
    resolver
  );
}

export function handleTeamsListPendingInvitationsLegacy(
  resolver: TeamsListPendingInvitationsLegacyResolver
) {
  return msw.http.get('/teams/:team_id/invitations', resolver);
}

export function handleTeamsListMembersLegacy(
  resolver: TeamsListMembersLegacyResolver
) {
  return msw.http.get('/teams/:team_id/members', resolver);
}

export function handleTeamsGetMemberLegacy(
  resolver: TeamsGetMemberLegacyResolver
) {
  return msw.http.get('/teams/:team_id/members/:username', resolver);
}

export function handleTeamsAddMemberLegacy(
  resolver: TeamsAddMemberLegacyResolver
) {
  return msw.http.put('/teams/:team_id/members/:username', resolver);
}

export function handleTeamsRemoveMemberLegacy(
  resolver: TeamsRemoveMemberLegacyResolver
) {
  return msw.http.delete('/teams/:team_id/members/:username', resolver);
}

export function handleTeamsGetMembershipForUserLegacy(
  resolver: TeamsGetMembershipForUserLegacyResolver
) {
  return msw.http.get('/teams/:team_id/memberships/:username', resolver);
}

export function handleTeamsAddOrUpdateMembershipForUserLegacy(
  resolver: TeamsAddOrUpdateMembershipForUserLegacyResolver
) {
  return msw.http.put('/teams/:team_id/memberships/:username', resolver);
}

export function handleTeamsRemoveMembershipForUserLegacy(
  resolver: TeamsRemoveMembershipForUserLegacyResolver
) {
  return msw.http.delete('/teams/:team_id/memberships/:username', resolver);
}

export function handleTeamsListProjectsLegacy(
  resolver: TeamsListProjectsLegacyResolver
) {
  return msw.http.get('/teams/:team_id/projects', resolver);
}

export function handleTeamsCheckPermissionsForProjectLegacy(
  resolver: TeamsCheckPermissionsForProjectLegacyResolver
) {
  return msw.http.get('/teams/:team_id/projects/:project_id', resolver);
}

export function handleTeamsAddOrUpdateProjectPermissionsLegacy(
  resolver: TeamsAddOrUpdateProjectPermissionsLegacyResolver
) {
  return msw.http.put('/teams/:team_id/projects/:project_id', resolver);
}

export function handleTeamsRemoveProjectLegacy(
  resolver: TeamsRemoveProjectLegacyResolver
) {
  return msw.http.delete('/teams/:team_id/projects/:project_id', resolver);
}

export function handleTeamsListReposLegacy(
  resolver: TeamsListReposLegacyResolver
) {
  return msw.http.get('/teams/:team_id/repos', resolver);
}

export function handleTeamsCheckPermissionsForRepoLegacy(
  resolver: TeamsCheckPermissionsForRepoLegacyResolver
) {
  return msw.http.get('/teams/:team_id/repos/:owner/:repo', resolver);
}

export function handleTeamsAddOrUpdateRepoPermissionsLegacy(
  resolver: TeamsAddOrUpdateRepoPermissionsLegacyResolver
) {
  return msw.http.put('/teams/:team_id/repos/:owner/:repo', resolver);
}

export function handleTeamsRemoveRepoLegacy(
  resolver: TeamsRemoveRepoLegacyResolver
) {
  return msw.http.delete('/teams/:team_id/repos/:owner/:repo', resolver);
}

export function handleTeamsListChildLegacy(
  resolver: TeamsListChildLegacyResolver
) {
  return msw.http.get('/teams/:team_id/teams', resolver);
}

export function handleUsersGetAuthenticated(
  resolver: UsersGetAuthenticatedResolver
) {
  return msw.http.get('/user', resolver);
}

export function handleUsersUpdateAuthenticated(
  resolver: UsersUpdateAuthenticatedResolver
) {
  return msw.http.patch('/user', resolver);
}

export function handleUsersListBlockedByAuthenticatedUser(
  resolver: UsersListBlockedByAuthenticatedUserResolver
) {
  return msw.http.get('/user/blocks', resolver);
}

export function handleUsersCheckBlocked(resolver: UsersCheckBlockedResolver) {
  return msw.http.get('/user/blocks/:username', resolver);
}

export function handleUsersBlock(resolver: UsersBlockResolver) {
  return msw.http.put('/user/blocks/:username', resolver);
}

export function handleUsersUnblock(resolver: UsersUnblockResolver) {
  return msw.http.delete('/user/blocks/:username', resolver);
}

export function handleCodespacesListForAuthenticatedUser(
  resolver: CodespacesListForAuthenticatedUserResolver
) {
  return msw.http.get('/user/codespaces', resolver);
}

export function handleCodespacesCreateForAuthenticatedUser(
  resolver: CodespacesCreateForAuthenticatedUserResolver
) {
  return msw.http.post('/user/codespaces', resolver);
}

export function handleCodespacesListSecretsForAuthenticatedUser(
  resolver: CodespacesListSecretsForAuthenticatedUserResolver
) {
  return msw.http.get('/user/codespaces/secrets', resolver);
}

export function handleCodespacesGetPublicKeyForAuthenticatedUser(
  resolver: CodespacesGetPublicKeyForAuthenticatedUserResolver
) {
  return msw.http.get('/user/codespaces/secrets/public-key', resolver);
}

export function handleCodespacesGetSecretForAuthenticatedUser(
  resolver: CodespacesGetSecretForAuthenticatedUserResolver
) {
  return msw.http.get('/user/codespaces/secrets/:secret_name', resolver);
}

export function handleCodespacesCreateOrUpdateSecretForAuthenticatedUser(
  resolver: CodespacesCreateOrUpdateSecretForAuthenticatedUserResolver
) {
  return msw.http.put('/user/codespaces/secrets/:secret_name', resolver);
}

export function handleCodespacesDeleteSecretForAuthenticatedUser(
  resolver: CodespacesDeleteSecretForAuthenticatedUserResolver
) {
  return msw.http.delete('/user/codespaces/secrets/:secret_name', resolver);
}

export function handleCodespacesListRepositoriesForSecretForAuthenticatedUser(
  resolver: CodespacesListRepositoriesForSecretForAuthenticatedUserResolver
) {
  return msw.http.get(
    '/user/codespaces/secrets/:secret_name/repositories',
    resolver
  );
}

export function handleCodespacesSetRepositoriesForSecretForAuthenticatedUser(
  resolver: CodespacesSetRepositoriesForSecretForAuthenticatedUserResolver
) {
  return msw.http.put(
    '/user/codespaces/secrets/:secret_name/repositories',
    resolver
  );
}

export function handleCodespacesAddRepositoryForSecretForAuthenticatedUser(
  resolver: CodespacesAddRepositoryForSecretForAuthenticatedUserResolver
) {
  return msw.http.put(
    '/user/codespaces/secrets/:secret_name/repositories/:repository_id',
    resolver
  );
}

export function handleCodespacesRemoveRepositoryForSecretForAuthenticatedUser(
  resolver: CodespacesRemoveRepositoryForSecretForAuthenticatedUserResolver
) {
  return msw.http.delete(
    '/user/codespaces/secrets/:secret_name/repositories/:repository_id',
    resolver
  );
}

export function handleCodespacesGetForAuthenticatedUser(
  resolver: CodespacesGetForAuthenticatedUserResolver
) {
  return msw.http.get('/user/codespaces/:codespace_name', resolver);
}

export function handleCodespacesUpdateForAuthenticatedUser(
  resolver: CodespacesUpdateForAuthenticatedUserResolver
) {
  return msw.http.patch('/user/codespaces/:codespace_name', resolver);
}

export function handleCodespacesDeleteForAuthenticatedUser(
  resolver: CodespacesDeleteForAuthenticatedUserResolver
) {
  return msw.http.delete('/user/codespaces/:codespace_name', resolver);
}

export function handleCodespacesExportForAuthenticatedUser(
  resolver: CodespacesExportForAuthenticatedUserResolver
) {
  return msw.http.post('/user/codespaces/:codespace_name/exports', resolver);
}

export function handleCodespacesGetExportDetailsForAuthenticatedUser(
  resolver: CodespacesGetExportDetailsForAuthenticatedUserResolver
) {
  return msw.http.get(
    '/user/codespaces/:codespace_name/exports/:export_id',
    resolver
  );
}

export function handleCodespacesCodespaceMachinesForAuthenticatedUser(
  resolver: CodespacesCodespaceMachinesForAuthenticatedUserResolver
) {
  return msw.http.get('/user/codespaces/:codespace_name/machines', resolver);
}

export function handleCodespacesStartForAuthenticatedUser(
  resolver: CodespacesStartForAuthenticatedUserResolver
) {
  return msw.http.post('/user/codespaces/:codespace_name/start', resolver);
}

export function handleCodespacesStopForAuthenticatedUser(
  resolver: CodespacesStopForAuthenticatedUserResolver
) {
  return msw.http.post('/user/codespaces/:codespace_name/stop', resolver);
}

export function handleUsersSetPrimaryEmailVisibilityForAuthenticatedUser(
  resolver: UsersSetPrimaryEmailVisibilityForAuthenticatedUserResolver
) {
  return msw.http.patch('/user/email/visibility', resolver);
}

export function handleUsersListEmailsForAuthenticatedUser(
  resolver: UsersListEmailsForAuthenticatedUserResolver
) {
  return msw.http.get('/user/emails', resolver);
}

export function handleUsersAddEmailForAuthenticatedUser(
  resolver: UsersAddEmailForAuthenticatedUserResolver
) {
  return msw.http.post('/user/emails', resolver);
}

export function handleUsersDeleteEmailForAuthenticatedUser(
  resolver: UsersDeleteEmailForAuthenticatedUserResolver
) {
  return msw.http.delete('/user/emails', resolver);
}

export function handleUsersListFollowersForAuthenticatedUser(
  resolver: UsersListFollowersForAuthenticatedUserResolver
) {
  return msw.http.get('/user/followers', resolver);
}

export function handleUsersListFollowedByAuthenticatedUser(
  resolver: UsersListFollowedByAuthenticatedUserResolver
) {
  return msw.http.get('/user/following', resolver);
}

export function handleUsersCheckPersonIsFollowedByAuthenticated(
  resolver: UsersCheckPersonIsFollowedByAuthenticatedResolver
) {
  return msw.http.get('/user/following/:username', resolver);
}

export function handleUsersFollow(resolver: UsersFollowResolver) {
  return msw.http.put('/user/following/:username', resolver);
}

export function handleUsersUnfollow(resolver: UsersUnfollowResolver) {
  return msw.http.delete('/user/following/:username', resolver);
}

export function handleUsersListGpgKeysForAuthenticatedUser(
  resolver: UsersListGpgKeysForAuthenticatedUserResolver
) {
  return msw.http.get('/user/gpg_keys', resolver);
}

export function handleUsersCreateGpgKeyForAuthenticatedUser(
  resolver: UsersCreateGpgKeyForAuthenticatedUserResolver
) {
  return msw.http.post('/user/gpg_keys', resolver);
}

export function handleUsersGetGpgKeyForAuthenticatedUser(
  resolver: UsersGetGpgKeyForAuthenticatedUserResolver
) {
  return msw.http.get('/user/gpg_keys/:gpg_key_id', resolver);
}

export function handleUsersDeleteGpgKeyForAuthenticatedUser(
  resolver: UsersDeleteGpgKeyForAuthenticatedUserResolver
) {
  return msw.http.delete('/user/gpg_keys/:gpg_key_id', resolver);
}

export function handleAppsListInstallationsForAuthenticatedUser(
  resolver: AppsListInstallationsForAuthenticatedUserResolver
) {
  return msw.http.get('/user/installations', resolver);
}

export function handleAppsListInstallationReposForAuthenticatedUser(
  resolver: AppsListInstallationReposForAuthenticatedUserResolver
) {
  return msw.http.get(
    '/user/installations/:installation_id/repositories',
    resolver
  );
}

export function handleAppsAddRepoToInstallationForAuthenticatedUser(
  resolver: AppsAddRepoToInstallationForAuthenticatedUserResolver
) {
  return msw.http.put(
    '/user/installations/:installation_id/repositories/:repository_id',
    resolver
  );
}

export function handleAppsRemoveRepoFromInstallationForAuthenticatedUser(
  resolver: AppsRemoveRepoFromInstallationForAuthenticatedUserResolver
) {
  return msw.http.delete(
    '/user/installations/:installation_id/repositories/:repository_id',
    resolver
  );
}

export function handleInteractionsGetRestrictionsForAuthenticatedUser(
  resolver: InteractionsGetRestrictionsForAuthenticatedUserResolver
) {
  return msw.http.get('/user/interaction-limits', resolver);
}

export function handleInteractionsSetRestrictionsForAuthenticatedUser(
  resolver: InteractionsSetRestrictionsForAuthenticatedUserResolver
) {
  return msw.http.put('/user/interaction-limits', resolver);
}

export function handleInteractionsRemoveRestrictionsForAuthenticatedUser(
  resolver: InteractionsRemoveRestrictionsForAuthenticatedUserResolver
) {
  return msw.http.delete('/user/interaction-limits', resolver);
}

export function handleIssuesListForAuthenticatedUser(
  resolver: IssuesListForAuthenticatedUserResolver
) {
  return msw.http.get('/user/issues', resolver);
}

export function handleUsersListPublicSshKeysForAuthenticatedUser(
  resolver: UsersListPublicSshKeysForAuthenticatedUserResolver
) {
  return msw.http.get('/user/keys', resolver);
}

export function handleUsersCreatePublicSshKeyForAuthenticatedUser(
  resolver: UsersCreatePublicSshKeyForAuthenticatedUserResolver
) {
  return msw.http.post('/user/keys', resolver);
}

export function handleUsersGetPublicSshKeyForAuthenticatedUser(
  resolver: UsersGetPublicSshKeyForAuthenticatedUserResolver
) {
  return msw.http.get('/user/keys/:key_id', resolver);
}

export function handleUsersDeletePublicSshKeyForAuthenticatedUser(
  resolver: UsersDeletePublicSshKeyForAuthenticatedUserResolver
) {
  return msw.http.delete('/user/keys/:key_id', resolver);
}

export function handleAppsListSubscriptionsForAuthenticatedUser(
  resolver: AppsListSubscriptionsForAuthenticatedUserResolver
) {
  return msw.http.get('/user/marketplace_purchases', resolver);
}

export function handleAppsListSubscriptionsForAuthenticatedUserStubbed(
  resolver: AppsListSubscriptionsForAuthenticatedUserStubbedResolver
) {
  return msw.http.get('/user/marketplace_purchases/stubbed', resolver);
}

export function handleOrgsListMembershipsForAuthenticatedUser(
  resolver: OrgsListMembershipsForAuthenticatedUserResolver
) {
  return msw.http.get('/user/memberships/orgs', resolver);
}

export function handleOrgsGetMembershipForAuthenticatedUser(
  resolver: OrgsGetMembershipForAuthenticatedUserResolver
) {
  return msw.http.get('/user/memberships/orgs/:org', resolver);
}

export function handleOrgsUpdateMembershipForAuthenticatedUser(
  resolver: OrgsUpdateMembershipForAuthenticatedUserResolver
) {
  return msw.http.patch('/user/memberships/orgs/:org', resolver);
}

export function handleMigrationsListForAuthenticatedUser(
  resolver: MigrationsListForAuthenticatedUserResolver
) {
  return msw.http.get('/user/migrations', resolver);
}

export function handleMigrationsStartForAuthenticatedUser(
  resolver: MigrationsStartForAuthenticatedUserResolver
) {
  return msw.http.post('/user/migrations', resolver);
}

export function handleMigrationsGetStatusForAuthenticatedUser(
  resolver: MigrationsGetStatusForAuthenticatedUserResolver
) {
  return msw.http.get('/user/migrations/:migration_id', resolver);
}

export function handleMigrationsGetArchiveForAuthenticatedUser(
  resolver: MigrationsGetArchiveForAuthenticatedUserResolver
) {
  return msw.http.get('/user/migrations/:migration_id/archive', resolver);
}

export function handleMigrationsDeleteArchiveForAuthenticatedUser(
  resolver: MigrationsDeleteArchiveForAuthenticatedUserResolver
) {
  return msw.http.delete('/user/migrations/:migration_id/archive', resolver);
}

export function handleMigrationsUnlockRepoForAuthenticatedUser(
  resolver: MigrationsUnlockRepoForAuthenticatedUserResolver
) {
  return msw.http.delete(
    '/user/migrations/:migration_id/repos/:repo_name/lock',
    resolver
  );
}

export function handleMigrationsListReposForAuthenticatedUser(
  resolver: MigrationsListReposForAuthenticatedUserResolver
) {
  return msw.http.get('/user/migrations/:migration_id/repositories', resolver);
}

export function handleOrgsListForAuthenticatedUser(
  resolver: OrgsListForAuthenticatedUserResolver
) {
  return msw.http.get('/user/orgs', resolver);
}

export function handlePackagesListPackagesForAuthenticatedUser(
  resolver: PackagesListPackagesForAuthenticatedUserResolver
) {
  return msw.http.get('/user/packages', resolver);
}

export function handlePackagesGetPackageForAuthenticatedUser(
  resolver: PackagesGetPackageForAuthenticatedUserResolver
) {
  return msw.http.get('/user/packages/:package_type/:package_name', resolver);
}

export function handlePackagesDeletePackageForAuthenticatedUser(
  resolver: PackagesDeletePackageForAuthenticatedUserResolver
) {
  return msw.http.delete(
    '/user/packages/:package_type/:package_name',
    resolver
  );
}

export function handlePackagesRestorePackageForAuthenticatedUser(
  resolver: PackagesRestorePackageForAuthenticatedUserResolver
) {
  return msw.http.post(
    '/user/packages/:package_type/:package_name/restore',
    resolver
  );
}

export function handlePackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser(
  resolver: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResolver
) {
  return msw.http.get(
    '/user/packages/:package_type/:package_name/versions',
    resolver
  );
}

export function handlePackagesGetPackageVersionForAuthenticatedUser(
  resolver: PackagesGetPackageVersionForAuthenticatedUserResolver
) {
  return msw.http.get(
    '/user/packages/:package_type/:package_name/versions/:package_version_id',
    resolver
  );
}

export function handlePackagesDeletePackageVersionForAuthenticatedUser(
  resolver: PackagesDeletePackageVersionForAuthenticatedUserResolver
) {
  return msw.http.delete(
    '/user/packages/:package_type/:package_name/versions/:package_version_id',
    resolver
  );
}

export function handlePackagesRestorePackageVersionForAuthenticatedUser(
  resolver: PackagesRestorePackageVersionForAuthenticatedUserResolver
) {
  return msw.http.post(
    '/user/packages/:package_type/:package_name/versions/:package_version_id/restore',
    resolver
  );
}

export function handleProjectsCreateForAuthenticatedUser(
  resolver: ProjectsCreateForAuthenticatedUserResolver
) {
  return msw.http.post('/user/projects', resolver);
}

export function handleUsersListPublicEmailsForAuthenticatedUser(
  resolver: UsersListPublicEmailsForAuthenticatedUserResolver
) {
  return msw.http.get('/user/public_emails', resolver);
}

export function handleReposListForAuthenticatedUser(
  resolver: ReposListForAuthenticatedUserResolver
) {
  return msw.http.get('/user/repos', resolver);
}

export function handleReposCreateForAuthenticatedUser(
  resolver: ReposCreateForAuthenticatedUserResolver
) {
  return msw.http.post('/user/repos', resolver);
}

export function handleReposListInvitationsForAuthenticatedUser(
  resolver: ReposListInvitationsForAuthenticatedUserResolver
) {
  return msw.http.get('/user/repository_invitations', resolver);
}

export function handleReposAcceptInvitationForAuthenticatedUser(
  resolver: ReposAcceptInvitationForAuthenticatedUserResolver
) {
  return msw.http.patch(
    '/user/repository_invitations/:invitation_id',
    resolver
  );
}

export function handleReposDeclineInvitationForAuthenticatedUser(
  resolver: ReposDeclineInvitationForAuthenticatedUserResolver
) {
  return msw.http.delete(
    '/user/repository_invitations/:invitation_id',
    resolver
  );
}

export function handleUsersListSshSigningKeysForAuthenticatedUser(
  resolver: UsersListSshSigningKeysForAuthenticatedUserResolver
) {
  return msw.http.get('/user/ssh_signing_keys', resolver);
}

export function handleUsersCreateSshSigningKeyForAuthenticatedUser(
  resolver: UsersCreateSshSigningKeyForAuthenticatedUserResolver
) {
  return msw.http.post('/user/ssh_signing_keys', resolver);
}

export function handleUsersGetSshSigningKeyForAuthenticatedUser(
  resolver: UsersGetSshSigningKeyForAuthenticatedUserResolver
) {
  return msw.http.get('/user/ssh_signing_keys/:ssh_signing_key_id', resolver);
}

export function handleUsersDeleteSshSigningKeyForAuthenticatedUser(
  resolver: UsersDeleteSshSigningKeyForAuthenticatedUserResolver
) {
  return msw.http.delete(
    '/user/ssh_signing_keys/:ssh_signing_key_id',
    resolver
  );
}

export function handleActivityListReposStarredByAuthenticatedUser(
  resolver: ActivityListReposStarredByAuthenticatedUserResolver
) {
  return msw.http.get('/user/starred', resolver);
}

export function handleActivityCheckRepoIsStarredByAuthenticatedUser(
  resolver: ActivityCheckRepoIsStarredByAuthenticatedUserResolver
) {
  return msw.http.get('/user/starred/:owner/:repo', resolver);
}

export function handleActivityStarRepoForAuthenticatedUser(
  resolver: ActivityStarRepoForAuthenticatedUserResolver
) {
  return msw.http.put('/user/starred/:owner/:repo', resolver);
}

export function handleActivityUnstarRepoForAuthenticatedUser(
  resolver: ActivityUnstarRepoForAuthenticatedUserResolver
) {
  return msw.http.delete('/user/starred/:owner/:repo', resolver);
}

export function handleActivityListWatchedReposForAuthenticatedUser(
  resolver: ActivityListWatchedReposForAuthenticatedUserResolver
) {
  return msw.http.get('/user/subscriptions', resolver);
}

export function handleTeamsListForAuthenticatedUser(
  resolver: TeamsListForAuthenticatedUserResolver
) {
  return msw.http.get('/user/teams', resolver);
}

export function handleUsersList(resolver: UsersListResolver) {
  return msw.http.get('/users', resolver);
}

export function handleUsersGetByUsername(resolver: UsersGetByUsernameResolver) {
  return msw.http.get('/users/:username', resolver);
}

export function handleActivityListEventsForAuthenticatedUser(
  resolver: ActivityListEventsForAuthenticatedUserResolver
) {
  return msw.http.get('/users/:username/events', resolver);
}

export function handleActivityListOrgEventsForAuthenticatedUser(
  resolver: ActivityListOrgEventsForAuthenticatedUserResolver
) {
  return msw.http.get('/users/:username/events/orgs/:org', resolver);
}

export function handleActivityListPublicEventsForUser(
  resolver: ActivityListPublicEventsForUserResolver
) {
  return msw.http.get('/users/:username/events/public', resolver);
}

export function handleUsersListFollowersForUser(
  resolver: UsersListFollowersForUserResolver
) {
  return msw.http.get('/users/:username/followers', resolver);
}

export function handleUsersListFollowingForUser(
  resolver: UsersListFollowingForUserResolver
) {
  return msw.http.get('/users/:username/following', resolver);
}

export function handleUsersCheckFollowingForUser(
  resolver: UsersCheckFollowingForUserResolver
) {
  return msw.http.get('/users/:username/following/:target_user', resolver);
}

export function handleGistsListForUser(resolver: GistsListForUserResolver) {
  return msw.http.get('/users/:username/gists', resolver);
}

export function handleUsersListGpgKeysForUser(
  resolver: UsersListGpgKeysForUserResolver
) {
  return msw.http.get('/users/:username/gpg_keys', resolver);
}

export function handleUsersGetContextForUser(
  resolver: UsersGetContextForUserResolver
) {
  return msw.http.get('/users/:username/hovercard', resolver);
}

export function handleAppsGetUserInstallation(
  resolver: AppsGetUserInstallationResolver
) {
  return msw.http.get('/users/:username/installation', resolver);
}

export function handleUsersListPublicKeysForUser(
  resolver: UsersListPublicKeysForUserResolver
) {
  return msw.http.get('/users/:username/keys', resolver);
}

export function handleOrgsListForUser(resolver: OrgsListForUserResolver) {
  return msw.http.get('/users/:username/orgs', resolver);
}

export function handlePackagesListPackagesForUser(
  resolver: PackagesListPackagesForUserResolver
) {
  return msw.http.get('/users/:username/packages', resolver);
}

export function handlePackagesGetPackageForUser(
  resolver: PackagesGetPackageForUserResolver
) {
  return msw.http.get(
    '/users/:username/packages/:package_type/:package_name',
    resolver
  );
}

export function handlePackagesDeletePackageForUser(
  resolver: PackagesDeletePackageForUserResolver
) {
  return msw.http.delete(
    '/users/:username/packages/:package_type/:package_name',
    resolver
  );
}

export function handlePackagesRestorePackageForUser(
  resolver: PackagesRestorePackageForUserResolver
) {
  return msw.http.post(
    '/users/:username/packages/:package_type/:package_name/restore',
    resolver
  );
}

export function handlePackagesGetAllPackageVersionsForPackageOwnedByUser(
  resolver: PackagesGetAllPackageVersionsForPackageOwnedByUserResolver
) {
  return msw.http.get(
    '/users/:username/packages/:package_type/:package_name/versions',
    resolver
  );
}

export function handlePackagesGetPackageVersionForUser(
  resolver: PackagesGetPackageVersionForUserResolver
) {
  return msw.http.get(
    '/users/:username/packages/:package_type/:package_name/versions/:package_version_id',
    resolver
  );
}

export function handlePackagesDeletePackageVersionForUser(
  resolver: PackagesDeletePackageVersionForUserResolver
) {
  return msw.http.delete(
    '/users/:username/packages/:package_type/:package_name/versions/:package_version_id',
    resolver
  );
}

export function handlePackagesRestorePackageVersionForUser(
  resolver: PackagesRestorePackageVersionForUserResolver
) {
  return msw.http.post(
    '/users/:username/packages/:package_type/:package_name/versions/:package_version_id/restore',
    resolver
  );
}

export function handleProjectsListForUser(
  resolver: ProjectsListForUserResolver
) {
  return msw.http.get('/users/:username/projects', resolver);
}

export function handleActivityListReceivedEventsForUser(
  resolver: ActivityListReceivedEventsForUserResolver
) {
  return msw.http.get('/users/:username/received_events', resolver);
}

export function handleActivityListReceivedPublicEventsForUser(
  resolver: ActivityListReceivedPublicEventsForUserResolver
) {
  return msw.http.get('/users/:username/received_events/public', resolver);
}

export function handleReposListForUser(resolver: ReposListForUserResolver) {
  return msw.http.get('/users/:username/repos', resolver);
}

export function handleBillingGetGithubActionsBillingUser(
  resolver: BillingGetGithubActionsBillingUserResolver
) {
  return msw.http.get('/users/:username/settings/billing/actions', resolver);
}

export function handleBillingGetGithubPackagesBillingUser(
  resolver: BillingGetGithubPackagesBillingUserResolver
) {
  return msw.http.get('/users/:username/settings/billing/packages', resolver);
}

export function handleBillingGetSharedStorageBillingUser(
  resolver: BillingGetSharedStorageBillingUserResolver
) {
  return msw.http.get(
    '/users/:username/settings/billing/shared-storage',
    resolver
  );
}

export function handleUsersListSshSigningKeysForUser(
  resolver: UsersListSshSigningKeysForUserResolver
) {
  return msw.http.get('/users/:username/ssh_signing_keys', resolver);
}

export function handleActivityListReposStarredByUser(
  resolver: ActivityListReposStarredByUserResolver
) {
  return msw.http.get('/users/:username/starred', resolver);
}

export function handleActivityListReposWatchedByUser(
  resolver: ActivityListReposWatchedByUserResolver
) {
  return msw.http.get('/users/:username/subscriptions', resolver);
}

export function handleMetaGetZen(resolver: MetaGetZenResolver) {
  return msw.http.get('/zen', resolver);
}
