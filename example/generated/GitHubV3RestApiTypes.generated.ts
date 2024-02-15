export type MetaRootRequest = {
  body: unknown;
  path: {};
  query: {};
  header: {};
};

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

export type MetaRootResponse = { status: 200; body: Root };

export type AppsGetAuthenticatedRequest = {
  body: unknown;
  path: {};
  query: {};
  header: {};
};

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

export type AppsGetAuthenticatedResponse = { status: 200; body: GitHubApp };

export type AppsCreateFromManifestRequest = {
  body: unknown;
  path: { readonly code: string };
  query: {};
  header: {};
};

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

export type AppsCreateFromManifestResponse =
  | {
      status: 201;
      body: GitHubApp & {
        readonly client_id: string;
        readonly client_secret: string;
        readonly webhook_secret: string | null;
        readonly pem: string;
      };
    }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type AppsGetWebhookConfigForAppRequest = {
  body: unknown;
  path: {};
  query: {};
  header: {};
};

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

export type AppsGetWebhookConfigForAppResponse = {
  status: 200;
  body: WebhookConfiguration;
};

export type AppsUpdateWebhookConfigForAppRequest = {
  body: {
    readonly url?: WebhookConfigUrl;
    readonly content_type?: WebhookConfigContentType;
    readonly secret?: WebhookConfigSecret;
    readonly insecure_ssl?: WebhookConfigInsecureSsl;
  };
  path: {};
  query: {};
  header: {};
};

export type AppsUpdateWebhookConfigForAppResponse = {
  status: 200;
  body: WebhookConfiguration;
};

export type AppsListWebhookDeliveriesRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly cursor?: string };
  header: {};
};

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

export type AppsListWebhookDeliveriesResponse =
  | { status: 200; body: ReadonlyArray<SimpleWebhookDelivery> }
  | { status: 400; body: BasicError }
  | { status: 422; body: ValidationError };

export type AppsGetWebhookDeliveryRequest = {
  body: unknown;
  path: { readonly delivery_id: number };
  query: {};
  header: {};
};

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
    readonly headers: unknown | null;
    readonly payload: unknown | null;
  };
  readonly response: {
    readonly headers: unknown | null;
    readonly payload: string | null;
  };
};

export type AppsGetWebhookDeliveryResponse =
  | { status: 200; body: WebhookDelivery }
  | { status: 400; body: BasicError }
  | { status: 422; body: ValidationError };

export type AppsRedeliverWebhookDeliveryRequest = {
  body: unknown;
  path: { readonly delivery_id: number };
  query: {};
  header: {};
};

export type AppsRedeliverWebhookDeliveryResponse =
  | { status: 202; body: unknown }
  | { status: 400; body: BasicError }
  | { status: 422; body: ValidationError };

export type AppsListInstallationsRequest = {
  body: unknown;
  path: {};
  query: {
    readonly per_page?: number;
    readonly page?: number;
    readonly since?: string;
    readonly outdated?: string;
  };
  header: {};
};

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

export type AppsListInstallationsResponse = {
  status: 200;
  body: ReadonlyArray<Installation>;
};

export type AppsGetInstallationRequest = {
  body: unknown;
  path: { readonly installation_id: number };
  query: {};
  header: {};
};

export type AppsGetInstallationResponse =
  | { status: 200; body: Installation }
  | { status: 404; body: BasicError };

export type AppsDeleteInstallationRequest = {
  body: unknown;
  path: { readonly installation_id: number };
  query: {};
  header: {};
};

export type AppsDeleteInstallationResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError };

export type AppsCreateInstallationAccessTokenRequest = {
  body:
    | {
        readonly repositories?: ReadonlyArray<string>;
        readonly repository_ids?: ReadonlyArray<number>;
        readonly permissions?: AppPermissions;
      }
    | undefined;
  path: { readonly installation_id: number };
  query: {};
  header: {};
};

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

export type AppsCreateInstallationAccessTokenResponse =
  | { status: 201; body: InstallationToken }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type AppsSuspendInstallationRequest = {
  body: unknown;
  path: { readonly installation_id: number };
  query: {};
  header: {};
};

export type AppsSuspendInstallationResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError };

export type AppsUnsuspendInstallationRequest = {
  body: unknown;
  path: { readonly installation_id: number };
  query: {};
  header: {};
};

export type AppsUnsuspendInstallationResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError };

export type AppsDeleteAuthorizationRequest = {
  body: { readonly access_token: string };
  path: { readonly client_id: string };
  query: {};
  header: {};
};

export type AppsDeleteAuthorizationResponse =
  | { status: 204; body: unknown }
  | { status: 422; body: ValidationError };

export type AppsCheckTokenRequest = {
  body: { readonly access_token: string };
  path: { readonly client_id: string };
  query: {};
  header: {};
};

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

export type AppsCheckTokenResponse =
  | { status: 200; body: Authorization }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type AppsResetTokenRequest = {
  body: { readonly access_token: string };
  path: { readonly client_id: string };
  query: {};
  header: {};
};

export type AppsResetTokenResponse =
  | { status: 200; body: Authorization }
  | { status: 422; body: ValidationError };

export type AppsDeleteTokenRequest = {
  body: { readonly access_token: string };
  path: { readonly client_id: string };
  query: {};
  header: {};
};

export type AppsDeleteTokenResponse =
  | { status: 204; body: unknown }
  | { status: 422; body: ValidationError };

export type AppsScopeTokenRequest = {
  body: {
    readonly access_token: string;
    readonly target?: string;
    readonly target_id?: number;
    readonly repositories?: ReadonlyArray<string>;
    readonly repository_ids?: ReadonlyArray<number>;
    readonly permissions?: AppPermissions;
  };
  path: { readonly client_id: string };
  query: {};
  header: {};
};

export type AppsScopeTokenResponse =
  | { status: 200; body: Authorization }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type AppsGetBySlugRequest = {
  body: unknown;
  path: { readonly app_slug: string };
  query: {};
  header: {};
};

export type AppsGetBySlugResponse =
  | { status: 200; body: GitHubApp }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type CodesOfConductGetAllCodesOfConductRequest = {
  body: unknown;
  path: {};
  query: {};
  header: {};
};

export type CodeOfConduct = {
  readonly key: string;
  readonly name: string;
  readonly url: string;
  readonly body?: string;
  readonly html_url: string | null;
};

export type CodesOfConductGetAllCodesOfConductResponse =
  | { status: 200; body: ReadonlyArray<CodeOfConduct> }
  | { status: 304; body: unknown };

export type CodesOfConductGetConductCodeRequest = {
  body: unknown;
  path: { readonly key: string };
  query: {};
  header: {};
};

export type CodesOfConductGetConductCodeResponse =
  | { status: 200; body: CodeOfConduct }
  | { status: 304; body: unknown }
  | { status: 404; body: BasicError };

export type EmojisGetRequest = {
  body: unknown;
  path: {};
  query: {};
  header: {};
};

export type EmojisGetResponse =
  | { status: 200; body: unknown }
  | { status: 304; body: unknown };

export type EnterpriseAdminGetServerStatisticsRequest = {
  body: unknown;
  path: { readonly enterprise_or_org: string };
  query: { readonly date_start?: string; readonly date_end?: string };
  header: {};
};

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

export type EnterpriseAdminGetServerStatisticsResponse = {
  status: 200;
  body: ServerStatisticsProxyEndpoint;
};

export type ActionsGetActionsCacheUsageForEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string };
  query: {};
  header: {};
};

export type ActionsCacheUsageOrgEnterprise = {
  readonly total_active_caches_count: number;
  readonly total_active_caches_size_in_bytes: number;
};

export type ActionsGetActionsCacheUsageForEnterpriseResponse = {
  status: 200;
  body: ActionsCacheUsageOrgEnterprise;
};

export type EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string };
  query: {};
  header: {};
};

export type EnabledOrganizations = 'all' | 'none' | 'selected';

export type AllowedActions = 'all' | 'local_only' | 'selected';

export type SelectedActionsUrl = string;

export type ActionsEnterprisePermissions = {
  readonly enabled_organizations: EnabledOrganizations;
  readonly selected_organizations_url?: string;
  readonly allowed_actions?: AllowedActions;
  readonly selected_actions_url?: SelectedActionsUrl;
};

export type EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse = {
  status: 200;
  body: ActionsEnterprisePermissions;
};

export type EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest = {
  body: {
    readonly enabled_organizations: EnabledOrganizations;
    readonly allowed_actions?: AllowedActions;
  };
  path: { readonly enterprise: string };
  query: {};
  header: {};
};

export type EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse = {
  status: 204;
  body: unknown;
};

export type EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly organizations: ReadonlyArray<OrganizationSimple>;
  };
};

export type EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest = {
  body: { readonly selected_organization_ids: ReadonlyArray<number> };
  path: { readonly enterprise: string };
  query: {};
  header: {};
};

export type EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse = {
  status: 204;
  body: unknown;
};

export type EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string; readonly org_id: number };
  query: {};
  header: {};
};

export type EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse = {
  status: 204;
  body: unknown;
};

export type EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string; readonly org_id: number };
  query: {};
  header: {};
};

export type EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse = {
  status: 204;
  body: unknown;
};

export type EnterpriseAdminGetAllowedActionsEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string };
  query: {};
  header: {};
};

export type SelectedActions = {
  readonly github_owned_allowed?: boolean;
  readonly verified_allowed?: boolean;
  readonly patterns_allowed?: ReadonlyArray<string>;
};

export type EnterpriseAdminGetAllowedActionsEnterpriseResponse = {
  status: 200;
  body: SelectedActions;
};

export type EnterpriseAdminSetAllowedActionsEnterpriseRequest = {
  body: SelectedActions;
  path: { readonly enterprise: string };
  query: {};
  header: {};
};

export type EnterpriseAdminSetAllowedActionsEnterpriseResponse = {
  status: 204;
  body: unknown;
};

export type ActionsGetGithubActionsDefaultWorkflowPermissionsEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string };
  query: {};
  header: {};
};

export type ActionsDefaultWorkflowPermissions = 'read' | 'write';

export type ActionsCanApprovePullRequestReviews = boolean;

export type ActionsGetDefaultWorkflowPermissions = {
  readonly default_workflow_permissions: ActionsDefaultWorkflowPermissions;
  readonly can_approve_pull_request_reviews: ActionsCanApprovePullRequestReviews;
};

export type ActionsGetGithubActionsDefaultWorkflowPermissionsEnterpriseResponse = {
  status: 200;
  body: ActionsGetDefaultWorkflowPermissions;
};

export type ActionsSetDefaultWorkflowPermissions = {
  readonly default_workflow_permissions?: ActionsDefaultWorkflowPermissions;
  readonly can_approve_pull_request_reviews?: ActionsCanApprovePullRequestReviews;
};

export type ActionsSetGithubActionsDefaultWorkflowPermissionsEnterpriseRequest = {
  body: ActionsSetDefaultWorkflowPermissions;
  path: { readonly enterprise: string };
  query: {};
  header: {};
};

export type ActionsSetGithubActionsDefaultWorkflowPermissionsEnterpriseResponse = {
  status: 204;
  body: unknown;
};

export type EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string };
  query: {
    readonly per_page?: number;
    readonly page?: number;
    readonly visible_to_organization?: string;
  };
  header: {};
};

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

export type EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly runner_groups: ReadonlyArray<RunnerGroupsEnterprise>;
  };
};

export type EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest = {
  body: {
    readonly name: string;
    readonly visibility?: 'selected' | 'all';
    readonly selected_organization_ids?: ReadonlyArray<number>;
    readonly runners?: ReadonlyArray<number>;
    readonly allows_public_repositories?: boolean;
    readonly restricted_to_workflows?: boolean;
    readonly selected_workflows?: ReadonlyArray<string>;
  };
  path: { readonly enterprise: string };
  query: {};
  header: {};
};

export type EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse = {
  status: 201;
  body: RunnerGroupsEnterprise;
};

export type EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string; readonly runner_group_id: number };
  query: {};
  header: {};
};

export type EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse = {
  status: 200;
  body: RunnerGroupsEnterprise;
};

export type EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest = {
  body:
    | {
        readonly name?: string;
        readonly visibility?: 'selected' | 'all';
        readonly allows_public_repositories?: boolean;
        readonly restricted_to_workflows?: boolean;
        readonly selected_workflows?: ReadonlyArray<string>;
      }
    | undefined;
  path: { readonly enterprise: string; readonly runner_group_id: number };
  query: {};
  header: {};
};

export type EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse = {
  status: 200;
  body: RunnerGroupsEnterprise;
};

export type EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string; readonly runner_group_id: number };
  query: {};
  header: {};
};

export type EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse = {
  status: 204;
  body: unknown;
};

export type EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string; readonly runner_group_id: number };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly organizations: ReadonlyArray<OrganizationSimple>;
  };
};

export type EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest = {
  body: { readonly selected_organization_ids: ReadonlyArray<number> };
  path: { readonly enterprise: string; readonly runner_group_id: number };
  query: {};
  header: {};
};

export type EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse = {
  status: 204;
  body: unknown;
};

export type EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest = {
  body: unknown;
  path: {
    readonly enterprise: string;
    readonly runner_group_id: number;
    readonly org_id: number;
  };
  query: {};
  header: {};
};

export type EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse = {
  status: 204;
  body: unknown;
};

export type EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest = {
  body: unknown;
  path: {
    readonly enterprise: string;
    readonly runner_group_id: number;
    readonly org_id: number;
  };
  query: {};
  header: {};
};

export type EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse = {
  status: 204;
  body: unknown;
};

export type EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string; readonly runner_group_id: number };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly runners: ReadonlyArray<SelfHostedRunners>;
  };
};

export type EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest = {
  body: { readonly runners: ReadonlyArray<number> };
  path: { readonly enterprise: string; readonly runner_group_id: number };
  query: {};
  header: {};
};

export type EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse = {
  status: 204;
  body: unknown;
};

export type EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest = {
  body: unknown;
  path: {
    readonly enterprise: string;
    readonly runner_group_id: number;
    readonly runner_id: number;
  };
  query: {};
  header: {};
};

export type EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse = {
  status: 204;
  body: unknown;
};

export type EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest = {
  body: unknown;
  path: {
    readonly enterprise: string;
    readonly runner_group_id: number;
    readonly runner_id: number;
  };
  query: {};
  header: {};
};

export type EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse = {
  status: 204;
  body: unknown;
};

export type EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse = {
  status: 200;
  body: {
    readonly total_count?: number;
    readonly runners?: ReadonlyArray<SelfHostedRunners>;
  };
};

export type EnterpriseAdminListRunnerApplicationsForEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string };
  query: {};
  header: {};
};

export type RunnerApplication = {
  readonly os: string;
  readonly architecture: string;
  readonly download_url: string;
  readonly filename: string;
  readonly temp_download_token?: string;
  readonly sha256_checksum?: string;
};

export type EnterpriseAdminListRunnerApplicationsForEnterpriseResponse = {
  status: 200;
  body: ReadonlyArray<RunnerApplication>;
};

export type EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string };
  query: {};
  header: {};
};

export type AuthenticationToken = {
  readonly token: string;
  readonly expires_at: string;
  readonly permissions?: unknown;
  readonly repositories?: ReadonlyArray<Repository>;
  readonly single_file?: string | null;
  readonly repository_selection?: 'all' | 'selected';
};

export type EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse = {
  status: 201;
  body: AuthenticationToken;
};

export type EnterpriseAdminCreateRemoveTokenForEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string };
  query: {};
  header: {};
};

export type EnterpriseAdminCreateRemoveTokenForEnterpriseResponse = {
  status: 201;
  body: AuthenticationToken;
};

export type EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string; readonly runner_id: number };
  query: {};
  header: {};
};

export type EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse = {
  status: 200;
  body: SelfHostedRunners;
};

export type EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string; readonly runner_id: number };
  query: {};
  header: {};
};

export type EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse = {
  status: 204;
  body: unknown;
};

export type EnterpriseAdminListLabelsForSelfHostedRunnerForEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string; readonly runner_id: number };
  query: {};
  header: {};
};

export type EnterpriseAdminListLabelsForSelfHostedRunnerForEnterpriseResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
      };
    }
  | { status: 404; body: BasicError };

export type EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseRequest = {
  body: { readonly labels: ReadonlyArray<string> };
  path: { readonly enterprise: string; readonly runner_id: number };
  query: {};
  header: {};
};

export type EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
      };
    }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseRequest = {
  body: { readonly labels: ReadonlyArray<string> };
  path: { readonly enterprise: string; readonly runner_id: number };
  query: {};
  header: {};
};

export type EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
      };
    }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string; readonly runner_id: number };
  query: {};
  header: {};
};

export type EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
      };
    }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseRequest = {
  body: unknown;
  path: {
    readonly enterprise: string;
    readonly runner_id: number;
    readonly name: string;
  };
  query: {};
  header: {};
};

export type EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
      };
    }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type CodeScanningAnalysisToolName = string;

export type CodeScanningAnalysisToolGuid = string | null;

export type CodeScanningAlertState = 'open' | 'closed' | 'dismissed' | 'fixed';

export type CodeScanningListAlertsForEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string };
  query: {
    readonly tool_name?: CodeScanningAnalysisToolName;
    readonly tool_guid?: CodeScanningAnalysisToolGuid;
    readonly before?: string;
    readonly after?: string;
    readonly page?: number;
    readonly per_page?: number;
    readonly direction?: 'asc' | 'desc';
    readonly state?: CodeScanningAlertState;
    readonly sort?: 'created' | 'updated';
  };
  header: {};
};

export type AlertNumber = number;

export type AlertCreatedAt = string;

export type AlertUpdatedAt = string;

export type AlertUrl = string;

export type AlertHtmlUrl = string;

export type AlertInstancesUrl = string;

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

export type CodeScanningAnalysisToolVersion = string | null;

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

export type CodeScanningListAlertsForEnterpriseResponse =
  | { status: 200; body: ReadonlyArray<CodeScanningOrganizationAlertItems> }
  | { status: 404; body: BasicError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type SecretScanningListAlertsForEnterpriseRequest = {
  body: unknown;
  path: { readonly enterprise: string };
  query: {
    readonly state?: 'open' | 'resolved';
    readonly secret_type?: string;
    readonly resolution?: string;
    readonly sort?: 'created' | 'updated';
    readonly direction?: 'asc' | 'desc';
    readonly per_page?: number;
    readonly before?: string;
    readonly after?: string;
  };
  header: {};
};

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

export type SecretScanningListAlertsForEnterpriseResponse =
  | { status: 200; body: ReadonlyArray<OrganizationSecretScanningAlert> }
  | { status: 404; body: BasicError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type BillingGetGithubAdvancedSecurityBillingGheRequest = {
  body: unknown;
  path: { readonly enterprise: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type BillingGetGithubAdvancedSecurityBillingGheResponse =
  | { status: 200; body: AdvancedSecurityActiveCommitters }
  | { status: 403; body: BasicError };

export type ActivityListPublicEventsRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type ActivityListPublicEventsResponse =
  | { status: 200; body: ReadonlyArray<Event> }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type ActivityGetFeedsRequest = {
  body: unknown;
  path: {};
  query: {};
  header: {};
};

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

export type ActivityGetFeedsResponse = { status: 200; body: Feed };

export type GistsListRequest = {
  body: unknown;
  path: {};
  query: {
    readonly since?: string;
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type BaseGist = {
  readonly url: string;
  readonly forks_url: string;
  readonly commits_url: string;
  readonly id: string;
  readonly node_id: string;
  readonly git_pull_url: string;
  readonly git_push_url: string;
  readonly html_url: string;
  readonly files: unknown;
  readonly public: boolean;
  readonly created_at: string;
  readonly updated_at: string;
  readonly description: string | null;
  readonly comments: number;
  readonly user: SimpleUser;
  readonly comments_url: string;
  readonly owner?: SimpleUser;
  readonly truncated?: boolean;
  readonly forks?: ReadonlyArray<unknown>;
  readonly history?: ReadonlyArray<unknown>;
};

export type GistsListResponse =
  | { status: 200; body: ReadonlyArray<BaseGist> }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError };

export type GistsCreateRequest = {
  body: {
    readonly description?: string;
    readonly files: unknown;
    readonly public?: boolean | 'true' | 'false';
  };
  path: {};
  query: {};
  header: {};
};

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
  readonly files: unknown;
  readonly public: boolean;
  readonly created_at: string;
  readonly updated_at: string;
  readonly description: string | null;
  readonly comments: number;
  readonly user: SimpleUser;
  readonly comments_url: string;
  readonly owner?: SimpleUser;
  readonly truncated?: boolean;
  readonly forks?: ReadonlyArray<unknown>;
  readonly history?: ReadonlyArray<unknown>;
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
  readonly files?: unknown;
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

export type GistsCreateResponse =
  | { status: 201; body: GistSimple }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type GistsListPublicRequest = {
  body: unknown;
  path: {};
  query: {
    readonly since?: string;
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type GistsListPublicResponse =
  | { status: 200; body: ReadonlyArray<BaseGist> }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationError };

export type GistsListStarredRequest = {
  body: unknown;
  path: {};
  query: {
    readonly since?: string;
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type GistsListStarredResponse =
  | { status: 200; body: ReadonlyArray<BaseGist> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type GistsGetRequest = {
  body: unknown;
  path: { readonly gist_id: string };
  query: {};
  header: {};
};

export type GistsGetResponse =
  | { status: 200; body: GistSimple }
  | { status: 304; body: unknown }
  | {
      status: 403;
      body: {
        readonly block?: {
          readonly reason?: string;
          readonly created_at?: string;
          readonly html_url?: string | null;
        };
        readonly message?: string;
        readonly documentation_url?: string;
      };
    }
  | { status: 404; body: BasicError };

export type GistsUpdateRequest = {
  body:
    | ({ readonly description?: string; readonly files?: unknown } & (
        | unknown
        | unknown
      ))
    | null;
  path: { readonly gist_id: string };
  query: {};
  header: {};
};

export type GistsUpdateResponse =
  | { status: 200; body: GistSimple }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type GistsDeleteRequest = {
  body: unknown;
  path: { readonly gist_id: string };
  query: {};
  header: {};
};

export type GistsDeleteResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type GistsListCommentsRequest = {
  body: unknown;
  path: { readonly gist_id: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type GistsListCommentsResponse =
  | { status: 200; body: ReadonlyArray<GistComment> }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type GistsCreateCommentRequest = {
  body: { readonly body: string };
  path: { readonly gist_id: string };
  query: {};
  header: {};
};

export type GistsCreateCommentResponse =
  | { status: 201; body: GistComment }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type GistsGetCommentRequest = {
  body: unknown;
  path: { readonly gist_id: string; readonly comment_id: number };
  query: {};
  header: {};
};

export type GistsGetCommentResponse =
  | { status: 200; body: GistComment }
  | { status: 304; body: unknown }
  | {
      status: 403;
      body: {
        readonly block?: {
          readonly reason?: string;
          readonly created_at?: string;
          readonly html_url?: string | null;
        };
        readonly message?: string;
        readonly documentation_url?: string;
      };
    }
  | { status: 404; body: BasicError };

export type GistsUpdateCommentRequest = {
  body: { readonly body: string };
  path: { readonly gist_id: string; readonly comment_id: number };
  query: {};
  header: {};
};

export type GistsUpdateCommentResponse =
  | { status: 200; body: GistComment }
  | { status: 404; body: BasicError };

export type GistsDeleteCommentRequest = {
  body: unknown;
  path: { readonly gist_id: string; readonly comment_id: number };
  query: {};
  header: {};
};

export type GistsDeleteCommentResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type GistsListCommitsRequest = {
  body: unknown;
  path: { readonly gist_id: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type GistsListCommitsResponse =
  | { status: 200; body: ReadonlyArray<GistCommit> }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type GistsListForksRequest = {
  body: unknown;
  path: { readonly gist_id: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type GistsListForksResponse =
  | { status: 200; body: ReadonlyArray<GistSimple> }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type GistsForkRequest = {
  body: unknown;
  path: { readonly gist_id: string };
  query: {};
  header: {};
};

export type GistsForkResponse =
  | { status: 201; body: BaseGist }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type GistsCheckIsStarredRequest = {
  body: unknown;
  path: { readonly gist_id: string };
  query: {};
  header: {};
};

export type GistsCheckIsStarredResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: {} };

export type GistsStarRequest = {
  body: unknown;
  path: { readonly gist_id: string };
  query: {};
  header: {};
};

export type GistsStarResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type GistsUnstarRequest = {
  body: unknown;
  path: { readonly gist_id: string };
  query: {};
  header: {};
};

export type GistsUnstarResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type GistsGetRevisionRequest = {
  body: unknown;
  path: { readonly gist_id: string; readonly sha: string };
  query: {};
  header: {};
};

export type GistsGetRevisionResponse =
  | { status: 200; body: GistSimple }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type GitignoreGetAllTemplatesRequest = {
  body: unknown;
  path: {};
  query: {};
  header: {};
};

export type GitignoreGetAllTemplatesResponse =
  | { status: 200; body: ReadonlyArray<string> }
  | { status: 304; body: unknown };

export type GitignoreGetTemplateRequest = {
  body: unknown;
  path: { readonly name: string };
  query: {};
  header: {};
};

export type GitignoreTemplate = {
  readonly name: string;
  readonly source: string;
};

export type GitignoreGetTemplateResponse =
  | { status: 200; body: GitignoreTemplate }
  | { status: 304; body: unknown };

export type AppsListReposAccessibleToInstallationRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type AppsListReposAccessibleToInstallationResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly repositories: ReadonlyArray<Repository>;
        readonly repository_selection?: string;
      };
    }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type AppsRevokeInstallationAccessTokenRequest = {
  body: unknown;
  path: {};
  query: {};
  header: {};
};

export type AppsRevokeInstallationAccessTokenResponse = {
  status: 204;
  body: unknown;
};

export type IssuesListRequest = {
  body: unknown;
  path: {};
  query: {
    readonly filter?:
      | 'assigned'
      | 'created'
      | 'mentioned'
      | 'subscribed'
      | 'repos'
      | 'all';
    readonly state?: 'open' | 'closed' | 'all';
    readonly labels?: string;
    readonly sort?: 'created' | 'updated' | 'comments';
    readonly direction?: 'asc' | 'desc';
    readonly since?: string;
    readonly collab?: boolean;
    readonly orgs?: boolean;
    readonly owned?: boolean;
    readonly pulls?: boolean;
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type IssuesListResponse =
  | { status: 200; body: ReadonlyArray<Issue> }
  | { status: 304; body: unknown }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type LicensesGetAllCommonlyUsedRequest = {
  body: unknown;
  path: {};
  query: {
    readonly featured?: boolean;
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type LicensesGetAllCommonlyUsedResponse =
  | { status: 200; body: ReadonlyArray<LicenseSimple> }
  | { status: 304; body: unknown };

export type LicensesGetRequest = {
  body: unknown;
  path: { readonly license: string };
  query: {};
  header: {};
};

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

export type LicensesGetResponse =
  | { status: 200; body: License }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type MarkdownRenderRequest = {
  body: {
    readonly text: string;
    readonly mode?: 'markdown' | 'gfm';
    readonly context?: string;
  };
  path: {};
  query: {};
  header: {};
};

export type MarkdownRenderResponse =
  | { status: 200; body: string }
  | { status: 304; body: unknown };

export type MarkdownRenderRawRequest = {
  body: unknown;
  path: {};
  query: {};
  header: {};
};

export type MarkdownRenderRawResponse =
  | { status: 200; body: string }
  | { status: 304; body: unknown };

export type AppsGetSubscriptionPlanForAccountRequest = {
  body: unknown;
  path: { readonly account_id: number };
  query: {};
  header: {};
};

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

export type AppsGetSubscriptionPlanForAccountResponse =
  | { status: 200; body: MarketplacePurchase }
  | { status: 401; body: BasicError }
  | { status: 404; body: BasicError };

export type AppsListPlansRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type AppsListPlansResponse =
  | { status: 200; body: ReadonlyArray<MarketplaceListingPlan> }
  | { status: 401; body: BasicError }
  | { status: 404; body: BasicError };

export type AppsListAccountsForPlanRequest = {
  body: unknown;
  path: { readonly plan_id: number };
  query: {
    readonly sort?: 'created' | 'updated';
    readonly direction?: 'asc' | 'desc';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type AppsListAccountsForPlanResponse =
  | { status: 200; body: ReadonlyArray<MarketplacePurchase> }
  | { status: 401; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type AppsGetSubscriptionPlanForAccountStubbedRequest = {
  body: unknown;
  path: { readonly account_id: number };
  query: {};
  header: {};
};

export type AppsGetSubscriptionPlanForAccountStubbedResponse =
  | { status: 200; body: MarketplacePurchase }
  | { status: 401; body: BasicError }
  | { status: 404; body: unknown };

export type AppsListPlansStubbedRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type AppsListPlansStubbedResponse =
  | { status: 200; body: ReadonlyArray<MarketplaceListingPlan> }
  | { status: 401; body: BasicError };

export type AppsListAccountsForPlanStubbedRequest = {
  body: unknown;
  path: { readonly plan_id: number };
  query: {
    readonly sort?: 'created' | 'updated';
    readonly direction?: 'asc' | 'desc';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type AppsListAccountsForPlanStubbedResponse =
  | { status: 200; body: ReadonlyArray<MarketplacePurchase> }
  | { status: 401; body: BasicError };

export type MetaGetRequest = { body: unknown; path: {}; query: {}; header: {} };

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

export type MetaGetResponse =
  | { status: 200; body: ApiOverview }
  | { status: 304; body: unknown };

export type ActivityListPublicEventsForRepoNetworkRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ActivityListPublicEventsForRepoNetworkResponse =
  | { status: 200; body: ReadonlyArray<Event> }
  | { status: 301; body: BasicError }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type ActivityListNotificationsForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: {
    readonly all?: boolean;
    readonly participating?: boolean;
    readonly since?: string;
    readonly before?: string;
    readonly page?: number;
    readonly per_page?: number;
  };
  header: {};
};

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

export type ActivityListNotificationsForAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<Thread> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationError };

export type ActivityMarkNotificationsAsReadRequest = {
  body: { readonly last_read_at?: string; readonly read?: boolean } | undefined;
  path: {};
  query: {};
  header: {};
};

export type ActivityMarkNotificationsAsReadResponse =
  | { status: 202; body: { readonly message?: string } }
  | { status: 205; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type ActivityGetThreadRequest = {
  body: unknown;
  path: { readonly thread_id: number };
  query: {};
  header: {};
};

export type ActivityGetThreadResponse =
  | { status: 200; body: Thread }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type ActivityMarkThreadAsReadRequest = {
  body: unknown;
  path: { readonly thread_id: number };
  query: {};
  header: {};
};

export type ActivityMarkThreadAsReadResponse =
  | { status: 205; body: unknown }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError };

export type ActivityGetThreadSubscriptionForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly thread_id: number };
  query: {};
  header: {};
};

export type ThreadSubscription = {
  readonly subscribed: boolean;
  readonly ignored: boolean;
  readonly reason: string | null;
  readonly created_at: string | null;
  readonly url: string;
  readonly thread_url?: string;
  readonly repository_url?: string;
};

export type ActivityGetThreadSubscriptionForAuthenticatedUserResponse =
  | { status: 200; body: ThreadSubscription }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type ActivitySetThreadSubscriptionRequest = {
  body: { readonly ignored?: boolean } | undefined;
  path: { readonly thread_id: number };
  query: {};
  header: {};
};

export type ActivitySetThreadSubscriptionResponse =
  | { status: 200; body: ThreadSubscription }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type ActivityDeleteThreadSubscriptionRequest = {
  body: unknown;
  path: { readonly thread_id: number };
  query: {};
  header: {};
};

export type ActivityDeleteThreadSubscriptionResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type MetaGetOctocatRequest = {
  body: unknown;
  path: {};
  query: { readonly s?: string };
  header: {};
};

export type MetaGetOctocatResponse = { status: 200; body: Buffer };

export type OrgsListRequest = {
  body: unknown;
  path: {};
  query: { readonly since?: number; readonly per_page?: number };
  header: {};
};

export type OrgsListResponse =
  | { status: 200; body: ReadonlyArray<OrganizationSimple> }
  | { status: 304; body: unknown };

export type OrgsListCustomRolesRequest = {
  body: unknown;
  path: { readonly organization_id: string };
  query: {};
  header: {};
};

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

export type OrgsListCustomRolesResponse = {
  status: 200;
  body: {
    readonly total_count?: number;
    readonly custom_roles?: ReadonlyArray<OrganizationCustomRepositoryRole>;
  };
};

export type OrgsGetRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {};
  header: {};
};

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

export type OrgsGetResponse =
  | { status: 200; body: OrganizationFull }
  | { status: 404; body: BasicError };

export type OrgsUpdateRequest = {
  body:
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
  path: { readonly org: string };
  query: {};
  header: {};
};

export type OrgsUpdateResponse =
  | { status: 200; body: OrganizationFull }
  | { status: 409; body: BasicError }
  | { status: 422; body: ValidationError | ValidationErrorSimple };

export type ActionsGetActionsCacheUsageForOrgRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type ActionsGetActionsCacheUsageForOrgResponse = {
  status: 200;
  body: ActionsCacheUsageOrgEnterprise;
};

export type ActionsGetActionsCacheUsageByRepoForOrgRequest = {
  body: unknown;
  path: { readonly org: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ActionsCacheUsageByRepository = {
  readonly full_name: string;
  readonly active_caches_size_in_bytes: number;
  readonly active_caches_count: number;
};

export type ActionsGetActionsCacheUsageByRepoForOrgResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly repository_cache_usages: ReadonlyArray<ActionsCacheUsageByRepository>;
  };
};

export type ActionsGetGithubActionsPermissionsOrganizationRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type EnabledRepositories = 'all' | 'none' | 'selected';

export type ActionsOrganizationPermissions = {
  readonly enabled_repositories: EnabledRepositories;
  readonly selected_repositories_url?: string;
  readonly allowed_actions?: AllowedActions;
  readonly selected_actions_url?: SelectedActionsUrl;
};

export type ActionsGetGithubActionsPermissionsOrganizationResponse = {
  status: 200;
  body: ActionsOrganizationPermissions;
};

export type ActionsSetGithubActionsPermissionsOrganizationRequest = {
  body: {
    readonly enabled_repositories: EnabledRepositories;
    readonly allowed_actions?: AllowedActions;
  };
  path: { readonly org: string };
  query: {};
  header: {};
};

export type ActionsSetGithubActionsPermissionsOrganizationResponse = {
  status: 204;
  body: unknown;
};

export type ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest = {
  body: unknown;
  path: { readonly org: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly repositories: ReadonlyArray<Repository>;
  };
};

export type ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest = {
  body: { readonly selected_repository_ids: ReadonlyArray<number> };
  path: { readonly org: string };
  query: {};
  header: {};
};

export type ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse = {
  status: 204;
  body: unknown;
};

export type ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest = {
  body: unknown;
  path: { readonly org: string; readonly repository_id: number };
  query: {};
  header: {};
};

export type ActionsEnableSelectedRepositoryGithubActionsOrganizationResponse = {
  status: 204;
  body: unknown;
};

export type ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest = {
  body: unknown;
  path: { readonly org: string; readonly repository_id: number };
  query: {};
  header: {};
};

export type ActionsDisableSelectedRepositoryGithubActionsOrganizationResponse = {
  status: 204;
  body: unknown;
};

export type ActionsGetAllowedActionsOrganizationRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type ActionsGetAllowedActionsOrganizationResponse = {
  status: 200;
  body: SelectedActions;
};

export type ActionsSetAllowedActionsOrganizationRequest = {
  body: SelectedActions | undefined;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type ActionsSetAllowedActionsOrganizationResponse = {
  status: 204;
  body: unknown;
};

export type ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationResponse = {
  status: 200;
  body: ActionsGetDefaultWorkflowPermissions;
};

export type ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationRequest = {
  body: ActionsSetDefaultWorkflowPermissions | undefined;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationResponse =
  | { status: 204; body: unknown }
  | { status: 409; body: unknown };

export type ActionsListSelfHostedRunnerGroupsForOrgRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {
    readonly per_page?: number;
    readonly page?: number;
    readonly visible_to_repository?: string;
  };
  header: {};
};

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

export type ActionsListSelfHostedRunnerGroupsForOrgResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly runner_groups: ReadonlyArray<RunnerGroupsOrg>;
  };
};

export type ActionsCreateSelfHostedRunnerGroupForOrgRequest = {
  body: {
    readonly name: string;
    readonly visibility?: 'selected' | 'all' | 'private';
    readonly selected_repository_ids?: ReadonlyArray<number>;
    readonly runners?: ReadonlyArray<number>;
    readonly allows_public_repositories?: boolean;
    readonly restricted_to_workflows?: boolean;
    readonly selected_workflows?: ReadonlyArray<string>;
  };
  path: { readonly org: string };
  query: {};
  header: {};
};

export type ActionsCreateSelfHostedRunnerGroupForOrgResponse = {
  status: 201;
  body: RunnerGroupsOrg;
};

export type ActionsGetSelfHostedRunnerGroupForOrgRequest = {
  body: unknown;
  path: { readonly org: string; readonly runner_group_id: number };
  query: {};
  header: {};
};

export type ActionsGetSelfHostedRunnerGroupForOrgResponse = {
  status: 200;
  body: RunnerGroupsOrg;
};

export type ActionsUpdateSelfHostedRunnerGroupForOrgRequest = {
  body: {
    readonly name: string;
    readonly visibility?: 'selected' | 'all' | 'private';
    readonly allows_public_repositories?: boolean;
    readonly restricted_to_workflows?: boolean;
    readonly selected_workflows?: ReadonlyArray<string>;
  };
  path: { readonly org: string; readonly runner_group_id: number };
  query: {};
  header: {};
};

export type ActionsUpdateSelfHostedRunnerGroupForOrgResponse = {
  status: 200;
  body: RunnerGroupsOrg;
};

export type ActionsDeleteSelfHostedRunnerGroupFromOrgRequest = {
  body: unknown;
  path: { readonly org: string; readonly runner_group_id: number };
  query: {};
  header: {};
};

export type ActionsDeleteSelfHostedRunnerGroupFromOrgResponse = {
  status: 204;
  body: unknown;
};

export type ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest = {
  body: unknown;
  path: { readonly org: string; readonly runner_group_id: number };
  query: { readonly page?: number; readonly per_page?: number };
  header: {};
};

export type ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly repositories: ReadonlyArray<MinimalRepository>;
  };
};

export type ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest = {
  body: { readonly selected_repository_ids: ReadonlyArray<number> };
  path: { readonly org: string; readonly runner_group_id: number };
  query: {};
  header: {};
};

export type ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse = {
  status: 204;
  body: unknown;
};

export type ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly runner_group_id: number;
    readonly repository_id: number;
  };
  query: {};
  header: {};
};

export type ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse = {
  status: 204;
  body: unknown;
};

export type ActionsListSelfHostedRunnersInGroupForOrgRequest = {
  body: unknown;
  path: { readonly org: string; readonly runner_group_id: number };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ActionsListSelfHostedRunnersInGroupForOrgResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly runners: ReadonlyArray<SelfHostedRunners>;
  };
};

export type ActionsSetSelfHostedRunnersInGroupForOrgRequest = {
  body: { readonly runners: ReadonlyArray<number> };
  path: { readonly org: string; readonly runner_group_id: number };
  query: {};
  header: {};
};

export type ActionsSetSelfHostedRunnersInGroupForOrgResponse = {
  status: 204;
  body: unknown;
};

export type ActionsAddSelfHostedRunnerToGroupForOrgRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly runner_group_id: number;
    readonly runner_id: number;
  };
  query: {};
  header: {};
};

export type ActionsAddSelfHostedRunnerToGroupForOrgResponse = {
  status: 204;
  body: unknown;
};

export type ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly runner_group_id: number;
    readonly runner_id: number;
  };
  query: {};
  header: {};
};

export type ActionsRemoveSelfHostedRunnerFromGroupForOrgResponse = {
  status: 204;
  body: unknown;
};

export type ActionsListSelfHostedRunnersForOrgRequest = {
  body: unknown;
  path: { readonly org: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ActionsListSelfHostedRunnersForOrgResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly runners: ReadonlyArray<SelfHostedRunners>;
  };
};

export type ActionsListRunnerApplicationsForOrgRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type ActionsListRunnerApplicationsForOrgResponse = {
  status: 200;
  body: ReadonlyArray<RunnerApplication>;
};

export type ActionsCreateRegistrationTokenForOrgRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type ActionsCreateRegistrationTokenForOrgResponse = {
  status: 201;
  body: AuthenticationToken;
};

export type ActionsCreateRemoveTokenForOrgRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type ActionsCreateRemoveTokenForOrgResponse = {
  status: 201;
  body: AuthenticationToken;
};

export type ActionsGetSelfHostedRunnerForOrgRequest = {
  body: unknown;
  path: { readonly org: string; readonly runner_id: number };
  query: {};
  header: {};
};

export type ActionsGetSelfHostedRunnerForOrgResponse = {
  status: 200;
  body: SelfHostedRunners;
};

export type ActionsDeleteSelfHostedRunnerFromOrgRequest = {
  body: unknown;
  path: { readonly org: string; readonly runner_id: number };
  query: {};
  header: {};
};

export type ActionsDeleteSelfHostedRunnerFromOrgResponse = {
  status: 204;
  body: unknown;
};

export type ActionsListLabelsForSelfHostedRunnerForOrgRequest = {
  body: unknown;
  path: { readonly org: string; readonly runner_id: number };
  query: {};
  header: {};
};

export type ActionsListLabelsForSelfHostedRunnerForOrgResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
      };
    }
  | { status: 404; body: BasicError };

export type ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest = {
  body: { readonly labels: ReadonlyArray<string> };
  path: { readonly org: string; readonly runner_id: number };
  query: {};
  header: {};
};

export type ActionsAddCustomLabelsToSelfHostedRunnerForOrgResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
      };
    }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type ActionsSetCustomLabelsForSelfHostedRunnerForOrgRequest = {
  body: { readonly labels: ReadonlyArray<string> };
  path: { readonly org: string; readonly runner_id: number };
  query: {};
  header: {};
};

export type ActionsSetCustomLabelsForSelfHostedRunnerForOrgResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
      };
    }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgRequest = {
  body: unknown;
  path: { readonly org: string; readonly runner_id: number };
  query: {};
  header: {};
};

export type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
      };
    }
  | { status: 404; body: BasicError };

export type ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly runner_id: number;
    readonly name: string;
  };
  query: {};
  header: {};
};

export type ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
      };
    }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type ActionsListOrgSecretsRequest = {
  body: unknown;
  path: { readonly org: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ActionsSecretForAnOrganization = {
  readonly name: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly visibility: 'all' | 'private' | 'selected';
  readonly selected_repositories_url?: string;
};

export type ActionsListOrgSecretsResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly secrets: ReadonlyArray<ActionsSecretForAnOrganization>;
  };
};

export type ActionsGetOrgPublicKeyRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type ActionsPublicKey = {
  readonly key_id: string;
  readonly key: string;
  readonly id?: number;
  readonly url?: string;
  readonly title?: string;
  readonly created_at?: string;
};

export type ActionsGetOrgPublicKeyResponse = {
  status: 200;
  body: ActionsPublicKey;
};

export type ActionsGetOrgSecretRequest = {
  body: unknown;
  path: { readonly org: string; readonly secret_name: string };
  query: {};
  header: {};
};

export type ActionsGetOrgSecretResponse = {
  status: 200;
  body: ActionsSecretForAnOrganization;
};

export type ActionsCreateOrUpdateOrgSecretRequest = {
  body: {
    readonly encrypted_value?: string;
    readonly key_id?: string;
    readonly visibility: 'all' | 'private' | 'selected';
    readonly selected_repository_ids?: ReadonlyArray<number>;
  };
  path: { readonly org: string; readonly secret_name: string };
  query: {};
  header: {};
};

export type EmptyObject = {};

export type ActionsCreateOrUpdateOrgSecretResponse =
  | { status: 201; body: EmptyObject }
  | { status: 204; body: unknown };

export type ActionsDeleteOrgSecretRequest = {
  body: unknown;
  path: { readonly org: string; readonly secret_name: string };
  query: {};
  header: {};
};

export type ActionsDeleteOrgSecretResponse = { status: 204; body: unknown };

export type ActionsListSelectedReposForOrgSecretRequest = {
  body: unknown;
  path: { readonly org: string; readonly secret_name: string };
  query: { readonly page?: number; readonly per_page?: number };
  header: {};
};

export type ActionsListSelectedReposForOrgSecretResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly repositories: ReadonlyArray<MinimalRepository>;
  };
};

export type ActionsSetSelectedReposForOrgSecretRequest = {
  body: { readonly selected_repository_ids: ReadonlyArray<number> };
  path: { readonly org: string; readonly secret_name: string };
  query: {};
  header: {};
};

export type ActionsSetSelectedReposForOrgSecretResponse = {
  status: 204;
  body: unknown;
};

export type ActionsAddSelectedRepoToOrgSecretRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly secret_name: string;
    readonly repository_id: number;
  };
  query: {};
  header: {};
};

export type ActionsAddSelectedRepoToOrgSecretResponse =
  | { status: 204; body: unknown }
  | { status: 409; body: unknown };

export type ActionsRemoveSelectedRepoFromOrgSecretRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly secret_name: string;
    readonly repository_id: number;
  };
  query: {};
  header: {};
};

export type ActionsRemoveSelectedRepoFromOrgSecretResponse =
  | { status: 204; body: unknown }
  | { status: 409; body: unknown };

export type OrgsListBlockedUsersRequest = {
  body: unknown;
  path: { readonly org: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type OrgsListBlockedUsersResponse = {
  status: 200;
  body: ReadonlyArray<SimpleUser>;
};

export type OrgsCheckBlockedUserRequest = {
  body: unknown;
  path: { readonly org: string; readonly username: string };
  query: {};
  header: {};
};

export type OrgsCheckBlockedUserResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError };

export type OrgsBlockUserRequest = {
  body: unknown;
  path: { readonly org: string; readonly username: string };
  query: {};
  header: {};
};

export type OrgsBlockUserResponse =
  | { status: 204; body: unknown }
  | { status: 422; body: ValidationError };

export type OrgsUnblockUserRequest = {
  body: unknown;
  path: { readonly org: string; readonly username: string };
  query: {};
  header: {};
};

export type OrgsUnblockUserResponse = { status: 204; body: unknown };

export type CodeScanningListAlertsForOrgRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {
    readonly tool_name?: CodeScanningAnalysisToolName;
    readonly tool_guid?: CodeScanningAnalysisToolGuid;
    readonly before?: string;
    readonly after?: string;
    readonly page?: number;
    readonly per_page?: number;
    readonly direction?: 'asc' | 'desc';
    readonly state?: CodeScanningAlertState;
    readonly sort?: 'created' | 'updated';
  };
  header: {};
};

export type CodeScanningListAlertsForOrgResponse =
  | { status: 200; body: ReadonlyArray<CodeScanningOrganizationAlertItems> }
  | { status: 404; body: BasicError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type CodespacesListInOrganizationRequest = {
  body: unknown;
  path: { readonly org: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type CodespacesListInOrganizationResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly codespaces: ReadonlyArray<Codespace>;
      };
    }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 500; body: BasicError };

export type CodespacesSetCodespacesBillingRequest = {
  body: {
    readonly visibility:
      | 'disabled'
      | 'selected_members'
      | 'all_members'
      | 'all_members_and_outside_collaborators';
    readonly selected_usernames?: ReadonlyArray<string>;
  };
  path: { readonly org: string };
  query: {};
  header: {};
};

export type CodespacesSetCodespacesBillingResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 400; body: unknown }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError }
  | { status: 500; body: BasicError };

export type CodespacesListOrgSecretsRequest = {
  body: unknown;
  path: { readonly org: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type CodespacesSecret = {
  readonly name: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly visibility: 'all' | 'private' | 'selected';
  readonly selected_repositories_url?: string;
};

export type CodespacesListOrgSecretsResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly secrets: ReadonlyArray<CodespacesSecret>;
  };
};

export type CodespacesGetOrgPublicKeyRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type CodespacesPublicKey = {
  readonly key_id: string;
  readonly key: string;
  readonly id?: number;
  readonly url?: string;
  readonly title?: string;
  readonly created_at?: string;
};

export type CodespacesGetOrgPublicKeyResponse = {
  status: 200;
  body: CodespacesPublicKey;
};

export type CodespacesGetOrgSecretRequest = {
  body: unknown;
  path: { readonly org: string; readonly secret_name: string };
  query: {};
  header: {};
};

export type CodespacesGetOrgSecretResponse = {
  status: 200;
  body: CodespacesSecret;
};

export type CodespacesCreateOrUpdateOrgSecretRequest = {
  body: {
    readonly encrypted_value?: string;
    readonly key_id?: string;
    readonly visibility: 'all' | 'private' | 'selected';
    readonly selected_repository_ids?: ReadonlyArray<number>;
  };
  path: { readonly org: string; readonly secret_name: string };
  query: {};
  header: {};
};

export type CodespacesCreateOrUpdateOrgSecretResponse =
  | { status: 201; body: EmptyObject }
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type CodespacesDeleteOrgSecretRequest = {
  body: unknown;
  path: { readonly org: string; readonly secret_name: string };
  query: {};
  header: {};
};

export type CodespacesDeleteOrgSecretResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError };

export type CodespacesListSelectedReposForOrgSecretRequest = {
  body: unknown;
  path: { readonly org: string; readonly secret_name: string };
  query: { readonly page?: number; readonly per_page?: number };
  header: {};
};

export type CodespacesListSelectedReposForOrgSecretResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly repositories: ReadonlyArray<MinimalRepository>;
      };
    }
  | { status: 404; body: BasicError };

export type CodespacesSetSelectedReposForOrgSecretRequest = {
  body: { readonly selected_repository_ids: ReadonlyArray<number> };
  path: { readonly org: string; readonly secret_name: string };
  query: {};
  header: {};
};

export type CodespacesSetSelectedReposForOrgSecretResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError }
  | { status: 409; body: unknown };

export type CodespacesAddSelectedRepoToOrgSecretRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly secret_name: string;
    readonly repository_id: number;
  };
  query: {};
  header: {};
};

export type CodespacesAddSelectedRepoToOrgSecretResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError }
  | { status: 409; body: unknown }
  | { status: 422; body: ValidationError };

export type CodespacesRemoveSelectedRepoFromOrgSecretRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly secret_name: string;
    readonly repository_id: number;
  };
  query: {};
  header: {};
};

export type CodespacesRemoveSelectedRepoFromOrgSecretResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError }
  | { status: 409; body: unknown }
  | { status: 422; body: ValidationError };

export type OrgsCreateCustomRoleRequest = {
  body: {
    readonly name: string;
    readonly description?: string;
    readonly base_role: 'read' | 'triage' | 'write' | 'maintain';
    readonly permissions: ReadonlyArray<string>;
  };
  path: { readonly org: string };
  query: {};
  header: {};
};

export type OrgsCreateCustomRoleResponse =
  | { status: 201; body: OrganizationCustomRepositoryRole }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type OrgsGetCustomRoleRequest = {
  body: unknown;
  path: { readonly org: string; readonly role_id: number };
  query: {};
  header: {};
};

export type OrgsGetCustomRoleResponse =
  | { status: 200; body: OrganizationCustomRepositoryRole }
  | { status: 404; body: BasicError };

export type OrgsUpdateCustomRoleRequest = {
  body: {
    readonly name?: string;
    readonly description?: string;
    readonly base_role?: 'read' | 'triage' | 'write' | 'maintain';
    readonly permissions?: ReadonlyArray<string>;
  };
  path: { readonly org: string; readonly role_id: number };
  query: {};
  header: {};
};

export type OrgsUpdateCustomRoleResponse =
  | { status: 200; body: OrganizationCustomRepositoryRole }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type OrgsDeleteCustomRoleRequest = {
  body: unknown;
  path: { readonly org: string; readonly role_id: number };
  query: {};
  header: {};
};

export type OrgsDeleteCustomRoleResponse = { status: 204; body: unknown };

export type DependabotListAlertsForOrgRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {
    readonly state?: string;
    readonly severity?: string;
    readonly ecosystem?: string;
    readonly package?: string;
    readonly scope?: 'development' | 'runtime';
    readonly sort?: 'created' | 'updated';
    readonly direction?: 'asc' | 'desc';
    readonly before?: string;
    readonly after?: string;
    readonly first?: number;
    readonly last?: number;
  };
  header: {};
};

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

export type DependabotListAlertsForOrgResponse =
  | { status: 200; body: ReadonlyArray<DependabotAlertWithRepository> }
  | { status: 304; body: unknown }
  | { status: 400; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type DependabotListOrgSecretsRequest = {
  body: unknown;
  path: { readonly org: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type DependabotSecretForAnOrganization = {
  readonly name: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly visibility: 'all' | 'private' | 'selected';
  readonly selected_repositories_url?: string;
};

export type DependabotListOrgSecretsResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly secrets: ReadonlyArray<DependabotSecretForAnOrganization>;
  };
};

export type DependabotGetOrgPublicKeyRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type DependabotPublicKey = {
  readonly key_id: string;
  readonly key: string;
};

export type DependabotGetOrgPublicKeyResponse = {
  status: 200;
  body: DependabotPublicKey;
};

export type DependabotGetOrgSecretRequest = {
  body: unknown;
  path: { readonly org: string; readonly secret_name: string };
  query: {};
  header: {};
};

export type DependabotGetOrgSecretResponse = {
  status: 200;
  body: DependabotSecretForAnOrganization;
};

export type DependabotCreateOrUpdateOrgSecretRequest = {
  body: {
    readonly encrypted_value?: string;
    readonly key_id?: string;
    readonly visibility: 'all' | 'private' | 'selected';
    readonly selected_repository_ids?: ReadonlyArray<string>;
  };
  path: { readonly org: string; readonly secret_name: string };
  query: {};
  header: {};
};

export type DependabotCreateOrUpdateOrgSecretResponse =
  | { status: 201; body: EmptyObject }
  | { status: 204; body: unknown };

export type DependabotDeleteOrgSecretRequest = {
  body: unknown;
  path: { readonly org: string; readonly secret_name: string };
  query: {};
  header: {};
};

export type DependabotDeleteOrgSecretResponse = { status: 204; body: unknown };

export type DependabotListSelectedReposForOrgSecretRequest = {
  body: unknown;
  path: { readonly org: string; readonly secret_name: string };
  query: { readonly page?: number; readonly per_page?: number };
  header: {};
};

export type DependabotListSelectedReposForOrgSecretResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly repositories: ReadonlyArray<MinimalRepository>;
  };
};

export type DependabotSetSelectedReposForOrgSecretRequest = {
  body: { readonly selected_repository_ids: ReadonlyArray<number> };
  path: { readonly org: string; readonly secret_name: string };
  query: {};
  header: {};
};

export type DependabotSetSelectedReposForOrgSecretResponse = {
  status: 204;
  body: unknown;
};

export type DependabotAddSelectedRepoToOrgSecretRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly secret_name: string;
    readonly repository_id: number;
  };
  query: {};
  header: {};
};

export type DependabotAddSelectedRepoToOrgSecretResponse =
  | { status: 204; body: unknown }
  | { status: 409; body: unknown };

export type DependabotRemoveSelectedRepoFromOrgSecretRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly secret_name: string;
    readonly repository_id: number;
  };
  query: {};
  header: {};
};

export type DependabotRemoveSelectedRepoFromOrgSecretResponse =
  | { status: 204; body: unknown }
  | { status: 409; body: unknown };

export type ActivityListPublicOrgEventsRequest = {
  body: unknown;
  path: { readonly org: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ActivityListPublicOrgEventsResponse = {
  status: 200;
  body: ReadonlyArray<Event>;
};

export type OrgsListFailedInvitationsRequest = {
  body: unknown;
  path: { readonly org: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type OrgsListFailedInvitationsResponse =
  | { status: 200; body: ReadonlyArray<OrganizationInvitation> }
  | { status: 404; body: BasicError };

export type OrgsListFineGrainedPermissionsRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type OrganizationFineGrainedPermission = {
  readonly name: string;
  readonly description: string;
};

export type OrgsListFineGrainedPermissionsResponse = {
  status: 200;
  body: ReadonlyArray<OrganizationFineGrainedPermission>;
};

export type OrgsListWebhooksRequest = {
  body: unknown;
  path: { readonly org: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type OrgsListWebhooksResponse =
  | { status: 200; body: ReadonlyArray<OrgHook> }
  | { status: 404; body: BasicError };

export type OrgsCreateWebhookRequest = {
  body: {
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
  path: { readonly org: string };
  query: {};
  header: {};
};

export type OrgsCreateWebhookResponse =
  | { status: 201; body: OrgHook }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type OrgsGetWebhookRequest = {
  body: unknown;
  path: { readonly org: string; readonly hook_id: number };
  query: {};
  header: {};
};

export type OrgsGetWebhookResponse =
  | { status: 200; body: OrgHook }
  | { status: 404; body: BasicError };

export type OrgsUpdateWebhookRequest = {
  body:
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
  path: { readonly org: string; readonly hook_id: number };
  query: {};
  header: {};
};

export type OrgsUpdateWebhookResponse =
  | { status: 200; body: OrgHook }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type OrgsDeleteWebhookRequest = {
  body: unknown;
  path: { readonly org: string; readonly hook_id: number };
  query: {};
  header: {};
};

export type OrgsDeleteWebhookResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError };

export type OrgsGetWebhookConfigForOrgRequest = {
  body: unknown;
  path: { readonly org: string; readonly hook_id: number };
  query: {};
  header: {};
};

export type OrgsGetWebhookConfigForOrgResponse = {
  status: 200;
  body: WebhookConfiguration;
};

export type OrgsUpdateWebhookConfigForOrgRequest = {
  body:
    | {
        readonly url?: WebhookConfigUrl;
        readonly content_type?: WebhookConfigContentType;
        readonly secret?: WebhookConfigSecret;
        readonly insecure_ssl?: WebhookConfigInsecureSsl;
      }
    | undefined;
  path: { readonly org: string; readonly hook_id: number };
  query: {};
  header: {};
};

export type OrgsUpdateWebhookConfigForOrgResponse = {
  status: 200;
  body: WebhookConfiguration;
};

export type OrgsListWebhookDeliveriesRequest = {
  body: unknown;
  path: { readonly org: string; readonly hook_id: number };
  query: { readonly per_page?: number; readonly cursor?: string };
  header: {};
};

export type OrgsListWebhookDeliveriesResponse =
  | { status: 200; body: ReadonlyArray<SimpleWebhookDelivery> }
  | { status: 400; body: BasicError }
  | { status: 422; body: ValidationError };

export type OrgsGetWebhookDeliveryRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly hook_id: number;
    readonly delivery_id: number;
  };
  query: {};
  header: {};
};

export type OrgsGetWebhookDeliveryResponse =
  | { status: 200; body: WebhookDelivery }
  | { status: 400; body: BasicError }
  | { status: 422; body: ValidationError };

export type OrgsRedeliverWebhookDeliveryRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly hook_id: number;
    readonly delivery_id: number;
  };
  query: {};
  header: {};
};

export type OrgsRedeliverWebhookDeliveryResponse =
  | { status: 202; body: unknown }
  | { status: 400; body: BasicError }
  | { status: 422; body: ValidationError };

export type OrgsPingWebhookRequest = {
  body: unknown;
  path: { readonly org: string; readonly hook_id: number };
  query: {};
  header: {};
};

export type OrgsPingWebhookResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError };

export type AppsGetOrgInstallationRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type AppsGetOrgInstallationResponse = {
  status: 200;
  body: Installation;
};

export type OrgsListAppInstallationsRequest = {
  body: unknown;
  path: { readonly org: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type OrgsListAppInstallationsResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly installations: ReadonlyArray<Installation>;
  };
};

export type InteractionsGetRestrictionsForOrgRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type InteractionGroup =
  | 'existing_users'
  | 'contributors_only'
  | 'collaborators_only';

export type InteractionLimits = {
  readonly limit: InteractionGroup;
  readonly origin: string;
  readonly expires_at: string;
};

export type InteractionsGetRestrictionsForOrgResponse = {
  status: 200;
  body: InteractionLimits | {};
};

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

export type InteractionsSetRestrictionsForOrgRequest = {
  body: InteractionRestrictions;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type InteractionsSetRestrictionsForOrgResponse =
  | { status: 200; body: InteractionLimits }
  | { status: 422; body: ValidationError };

export type InteractionsRemoveRestrictionsForOrgRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type InteractionsRemoveRestrictionsForOrgResponse = {
  status: 204;
  body: unknown;
};

export type OrgsListPendingInvitationsRequest = {
  body: unknown;
  path: { readonly org: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type OrgsListPendingInvitationsResponse =
  | { status: 200; body: ReadonlyArray<OrganizationInvitation> }
  | { status: 404; body: BasicError };

export type OrgsCreateInvitationRequest = {
  body:
    | {
        readonly invitee_id?: number;
        readonly email?: string;
        readonly role?: 'admin' | 'direct_member' | 'billing_manager';
        readonly team_ids?: ReadonlyArray<number>;
      }
    | undefined;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type OrgsCreateInvitationResponse =
  | { status: 201; body: OrganizationInvitation }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type OrgsCancelInvitationRequest = {
  body: unknown;
  path: { readonly org: string; readonly invitation_id: number };
  query: {};
  header: {};
};

export type OrgsCancelInvitationResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type OrgsListInvitationTeamsRequest = {
  body: unknown;
  path: { readonly org: string; readonly invitation_id: number };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type OrgsListInvitationTeamsResponse =
  | { status: 200; body: ReadonlyArray<Team> }
  | { status: 404; body: BasicError };

export type IssuesListForOrgRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {
    readonly filter?:
      | 'assigned'
      | 'created'
      | 'mentioned'
      | 'subscribed'
      | 'repos'
      | 'all';
    readonly state?: 'open' | 'closed' | 'all';
    readonly labels?: string;
    readonly sort?: 'created' | 'updated' | 'comments';
    readonly direction?: 'asc' | 'desc';
    readonly since?: string;
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type IssuesListForOrgResponse =
  | { status: 200; body: ReadonlyArray<Issue> }
  | { status: 404; body: BasicError };

export type OrgsListMembersRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {
    readonly filter?: '2fa_disabled' | 'all';
    readonly role?: 'all' | 'admin' | 'member';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type OrgsListMembersResponse =
  | { status: 200; body: ReadonlyArray<SimpleUser> }
  | { status: 422; body: ValidationError };

export type OrgsCheckMembershipForUserRequest = {
  body: unknown;
  path: { readonly org: string; readonly username: string };
  query: {};
  header: {};
};

export type OrgsCheckMembershipForUserResponse =
  | { status: 204; body: unknown }
  | { status: 302; body: unknown }
  | { status: 404; body: unknown };

export type OrgsRemoveMemberRequest = {
  body: unknown;
  path: { readonly org: string; readonly username: string };
  query: {};
  header: {};
};

export type OrgsRemoveMemberResponse =
  | { status: 204; body: unknown }
  | { status: 403; body: BasicError };

export type CodespacesGetCodespacesForUserInOrgRequest = {
  body: unknown;
  path: { readonly org: string; readonly username: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type CodespacesGetCodespacesForUserInOrgResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly codespaces: ReadonlyArray<Codespace>;
      };
    }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 500; body: BasicError };

export type CodespacesDeleteFromOrganizationRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly username: string;
    readonly codespace_name: string;
  };
  query: {};
  header: {};
};

export type CodespacesDeleteFromOrganizationResponse =
  | { status: 202; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 500; body: BasicError };

export type CodespacesStopInOrganizationRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly username: string;
    readonly codespace_name: string;
  };
  query: {};
  header: {};
};

export type CodespacesStopInOrganizationResponse =
  | { status: 200; body: Codespace }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 500; body: BasicError };

export type OrgsGetMembershipForUserRequest = {
  body: unknown;
  path: { readonly org: string; readonly username: string };
  query: {};
  header: {};
};

export type OrgMembership = {
  readonly url: string;
  readonly state: 'active' | 'pending';
  readonly role: 'admin' | 'member' | 'billing_manager';
  readonly organization_url: string;
  readonly organization: OrganizationSimple;
  readonly user: SimpleUser;
  readonly permissions?: { readonly can_create_repository: boolean };
};

export type OrgsGetMembershipForUserResponse =
  | { status: 200; body: OrgMembership }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type OrgsSetMembershipForUserRequest = {
  body: { readonly role?: 'admin' | 'member' } | undefined;
  path: { readonly org: string; readonly username: string };
  query: {};
  header: {};
};

export type OrgsSetMembershipForUserResponse =
  | { status: 200; body: OrgMembership }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationError };

export type OrgsRemoveMembershipForUserRequest = {
  body: unknown;
  path: { readonly org: string; readonly username: string };
  query: {};
  header: {};
};

export type OrgsRemoveMembershipForUserResponse =
  | { status: 204; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type MigrationsListForOrgRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {
    readonly per_page?: number;
    readonly page?: number;
    readonly exclude?: ReadonlyArray<'repositories'>;
  };
  header: {};
};

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
  readonly exclude?: ReadonlyArray<unknown>;
};

export type MigrationsListForOrgResponse = {
  status: 200;
  body: ReadonlyArray<Migration>;
};

export type MigrationsStartForOrgRequest = {
  body: {
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
  path: { readonly org: string };
  query: {};
  header: {};
};

export type MigrationsStartForOrgResponse =
  | { status: 201; body: Migration }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type MigrationsGetStatusForOrgRequest = {
  body: unknown;
  path: { readonly org: string; readonly migration_id: number };
  query: { readonly exclude?: ReadonlyArray<'repositories'> };
  header: {};
};

export type MigrationsGetStatusForOrgResponse =
  | { status: 200; body: Migration }
  | { status: 404; body: BasicError };

export type MigrationsDownloadArchiveForOrgRequest = {
  body: unknown;
  path: { readonly org: string; readonly migration_id: number };
  query: {};
  header: {};
};

export type MigrationsDownloadArchiveForOrgResponse =
  | { status: 302; body: unknown }
  | { status: 404; body: BasicError };

export type MigrationsDeleteArchiveForOrgRequest = {
  body: unknown;
  path: { readonly org: string; readonly migration_id: number };
  query: {};
  header: {};
};

export type MigrationsDeleteArchiveForOrgResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError };

export type MigrationsUnlockRepoForOrgRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly migration_id: number;
    readonly repo_name: string;
  };
  query: {};
  header: {};
};

export type MigrationsUnlockRepoForOrgResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError };

export type MigrationsListReposForOrgRequest = {
  body: unknown;
  path: { readonly org: string; readonly migration_id: number };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type MigrationsListReposForOrgResponse =
  | { status: 200; body: ReadonlyArray<MinimalRepository> }
  | { status: 404; body: BasicError };

export type OrgsListOutsideCollaboratorsRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {
    readonly filter?: '2fa_disabled' | 'all';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type OrgsListOutsideCollaboratorsResponse = {
  status: 200;
  body: ReadonlyArray<SimpleUser>;
};

export type OrgsConvertMemberToOutsideCollaboratorRequest = {
  body: { readonly async?: boolean } | undefined;
  path: { readonly org: string; readonly username: string };
  query: {};
  header: {};
};

export type OrgsConvertMemberToOutsideCollaboratorResponse =
  | { status: 202; body: {} }
  | { status: 204; body: unknown }
  | { status: 403; body: unknown }
  | { status: 404; body: BasicError };

export type OrgsRemoveOutsideCollaboratorRequest = {
  body: unknown;
  path: { readonly org: string; readonly username: string };
  query: {};
  header: {};
};

export type OrgsRemoveOutsideCollaboratorResponse =
  | { status: 204; body: unknown }
  | {
      status: 422;
      body: { readonly message?: string; readonly documentation_url?: string };
    };

export type PackagesListPackagesForOrganizationRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly visibility?: 'public' | 'private' | 'internal';
  };
  header: {};
};

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

export type PackagesListPackagesForOrganizationResponse =
  | { status: 200; body: ReadonlyArray<Package> }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type PackagesGetPackageForOrganizationRequest = {
  body: unknown;
  path: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly package_name: string;
    readonly org: string;
  };
  query: {};
  header: {};
};

export type PackagesGetPackageForOrganizationResponse = {
  status: 200;
  body: Package;
};

export type PackagesDeletePackageForOrgRequest = {
  body: unknown;
  path: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly package_name: string;
    readonly org: string;
  };
  query: {};
  header: {};
};

export type PackagesDeletePackageForOrgResponse =
  | { status: 204; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type PackagesRestorePackageForOrgRequest = {
  body: unknown;
  path: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly package_name: string;
    readonly org: string;
  };
  query: { readonly token?: string };
  header: {};
};

export type PackagesRestorePackageForOrgResponse =
  | { status: 204; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type PackagesGetAllPackageVersionsForPackageOwnedByOrgRequest = {
  body: unknown;
  path: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly package_name: string;
    readonly org: string;
  };
  query: {
    readonly page?: number;
    readonly per_page?: number;
    readonly state?: 'active' | 'deleted';
  };
  header: {};
};

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

export type PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse =
  | { status: 200; body: ReadonlyArray<PackageVersion> }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type PackagesGetPackageVersionForOrganizationRequest = {
  body: unknown;
  path: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly package_name: string;
    readonly org: string;
    readonly package_version_id: number;
  };
  query: {};
  header: {};
};

export type PackagesGetPackageVersionForOrganizationResponse = {
  status: 200;
  body: PackageVersion;
};

export type PackagesDeletePackageVersionForOrgRequest = {
  body: unknown;
  path: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly package_name: string;
    readonly org: string;
    readonly package_version_id: number;
  };
  query: {};
  header: {};
};

export type PackagesDeletePackageVersionForOrgResponse =
  | { status: 204; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type PackagesRestorePackageVersionForOrgRequest = {
  body: unknown;
  path: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly package_name: string;
    readonly org: string;
    readonly package_version_id: number;
  };
  query: {};
  header: {};
};

export type PackagesRestorePackageVersionForOrgResponse =
  | { status: 204; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type ProjectsListForOrgRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {
    readonly state?: 'open' | 'closed' | 'all';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

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

export type ProjectsListForOrgResponse =
  | { status: 200; body: ReadonlyArray<Project> }
  | { status: 422; body: ValidationErrorSimple };

export type ProjectsCreateForOrgRequest = {
  body: { readonly name: string; readonly body?: string };
  path: { readonly org: string };
  query: {};
  header: {};
};

export type ProjectsCreateForOrgResponse =
  | { status: 201; body: Project }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 410; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type OrgsListPublicMembersRequest = {
  body: unknown;
  path: { readonly org: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type OrgsListPublicMembersResponse = {
  status: 200;
  body: ReadonlyArray<SimpleUser>;
};

export type OrgsCheckPublicMembershipForUserRequest = {
  body: unknown;
  path: { readonly org: string; readonly username: string };
  query: {};
  header: {};
};

export type OrgsCheckPublicMembershipForUserResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: unknown };

export type OrgsSetPublicMembershipForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly org: string; readonly username: string };
  query: {};
  header: {};
};

export type OrgsSetPublicMembershipForAuthenticatedUserResponse =
  | { status: 204; body: unknown }
  | { status: 403; body: BasicError };

export type OrgsRemovePublicMembershipForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly org: string; readonly username: string };
  query: {};
  header: {};
};

export type OrgsRemovePublicMembershipForAuthenticatedUserResponse = {
  status: 204;
  body: unknown;
};

export type ReposListForOrgRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {
    readonly type?:
      | 'all'
      | 'public'
      | 'private'
      | 'forks'
      | 'sources'
      | 'member'
      | 'internal';
    readonly sort?: 'created' | 'updated' | 'pushed' | 'full_name';
    readonly direction?: 'asc' | 'desc';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ReposListForOrgResponse = {
  status: 200;
  body: ReadonlyArray<MinimalRepository>;
};

export type ReposCreateInOrgRequest = {
  body: {
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
  path: { readonly org: string };
  query: {};
  header: {};
};

export type ReposCreateInOrgResponse =
  | { status: 201; body: Repository }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationError };

export type SecretScanningListAlertsForOrgRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {
    readonly state?: 'open' | 'resolved';
    readonly secret_type?: string;
    readonly resolution?: string;
    readonly sort?: 'created' | 'updated';
    readonly direction?: 'asc' | 'desc';
    readonly page?: number;
    readonly per_page?: number;
    readonly before?: string;
    readonly after?: string;
  };
  header: {};
};

export type SecretScanningListAlertsForOrgResponse =
  | { status: 200; body: ReadonlyArray<OrganizationSecretScanningAlert> }
  | { status: 404; body: BasicError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type OrgsListSecurityManagerTeamsRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type OrgsListSecurityManagerTeamsResponse = {
  status: 200;
  body: ReadonlyArray<TeamSimple>;
};

export type OrgsAddSecurityManagerTeamRequest = {
  body: unknown;
  path: { readonly org: string; readonly team_slug: string };
  query: {};
  header: {};
};

export type OrgsAddSecurityManagerTeamResponse =
  | { status: 204; body: unknown }
  | { status: 409; body: unknown };

export type OrgsRemoveSecurityManagerTeamRequest = {
  body: unknown;
  path: { readonly org: string; readonly team_slug: string };
  query: {};
  header: {};
};

export type OrgsRemoveSecurityManagerTeamResponse = {
  status: 204;
  body: unknown;
};

export type BillingGetGithubActionsBillingOrgRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {};
  header: {};
};

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

export type BillingGetGithubActionsBillingOrgResponse = {
  status: 200;
  body: ActionsBillingUsage;
};

export type BillingGetGithubAdvancedSecurityBillingOrgRequest = {
  body: unknown;
  path: { readonly org: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type BillingGetGithubAdvancedSecurityBillingOrgResponse =
  | { status: 200; body: AdvancedSecurityActiveCommitters }
  | { status: 403; body: BasicError };

export type BillingGetGithubPackagesBillingOrgRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type PackagesBillingUsage = {
  readonly total_gigabytes_bandwidth_used: number;
  readonly total_paid_gigabytes_bandwidth_used: number;
  readonly included_gigabytes_bandwidth: number;
};

export type BillingGetGithubPackagesBillingOrgResponse = {
  status: 200;
  body: PackagesBillingUsage;
};

export type BillingGetSharedStorageBillingOrgRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type CombinedBillingUsage = {
  readonly days_left_in_billing_cycle: number;
  readonly estimated_paid_storage_for_month: number;
  readonly estimated_storage_for_month: number;
};

export type BillingGetSharedStorageBillingOrgResponse = {
  status: 200;
  body: CombinedBillingUsage;
};

export type TeamsListRequest = {
  body: unknown;
  path: { readonly org: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type TeamsListResponse =
  | { status: 200; body: ReadonlyArray<Team> }
  | { status: 403; body: BasicError };

export type TeamsCreateRequest = {
  body: {
    readonly name: string;
    readonly description?: string;
    readonly maintainers?: ReadonlyArray<string>;
    readonly repo_names?: ReadonlyArray<string>;
    readonly privacy?: 'secret' | 'closed';
    readonly permission?: 'pull' | 'push';
    readonly parent_team_id?: number;
  };
  path: { readonly org: string };
  query: {};
  header: {};
};

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

export type TeamsCreateResponse =
  | { status: 201; body: FullTeam }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationError };

export type TeamsGetByNameRequest = {
  body: unknown;
  path: { readonly org: string; readonly team_slug: string };
  query: {};
  header: {};
};

export type TeamsGetByNameResponse =
  | { status: 200; body: FullTeam }
  | { status: 404; body: BasicError };

export type TeamsUpdateInOrgRequest = {
  body:
    | {
        readonly name?: string;
        readonly description?: string;
        readonly privacy?: 'secret' | 'closed';
        readonly permission?: 'pull' | 'push' | 'admin';
        readonly parent_team_id?: number | null;
      }
    | undefined;
  path: { readonly org: string; readonly team_slug: string };
  query: {};
  header: {};
};

export type TeamsUpdateInOrgResponse =
  | { status: 200; body: FullTeam }
  | { status: 201; body: FullTeam }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type TeamsDeleteInOrgRequest = {
  body: unknown;
  path: { readonly org: string; readonly team_slug: string };
  query: {};
  header: {};
};

export type TeamsDeleteInOrgResponse = { status: 204; body: unknown };

export type TeamsListDiscussionsInOrgRequest = {
  body: unknown;
  path: { readonly org: string; readonly team_slug: string };
  query: {
    readonly direction?: 'asc' | 'desc';
    readonly per_page?: number;
    readonly page?: number;
    readonly pinned?: string;
  };
  header: {};
};

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

export type TeamsListDiscussionsInOrgResponse = {
  status: 200;
  body: ReadonlyArray<TeamDiscussion>;
};

export type TeamsCreateDiscussionInOrgRequest = {
  body: {
    readonly title: string;
    readonly body: string;
    readonly private?: boolean;
  };
  path: { readonly org: string; readonly team_slug: string };
  query: {};
  header: {};
};

export type TeamsCreateDiscussionInOrgResponse = {
  status: 201;
  body: TeamDiscussion;
};

export type TeamsGetDiscussionInOrgRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly discussion_number: number;
  };
  query: {};
  header: {};
};

export type TeamsGetDiscussionInOrgResponse = {
  status: 200;
  body: TeamDiscussion;
};

export type TeamsUpdateDiscussionInOrgRequest = {
  body: { readonly title?: string; readonly body?: string } | undefined;
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly discussion_number: number;
  };
  query: {};
  header: {};
};

export type TeamsUpdateDiscussionInOrgResponse = {
  status: 200;
  body: TeamDiscussion;
};

export type TeamsDeleteDiscussionInOrgRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly discussion_number: number;
  };
  query: {};
  header: {};
};

export type TeamsDeleteDiscussionInOrgResponse = { status: 204; body: unknown };

export type TeamsListDiscussionCommentsInOrgRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly discussion_number: number;
  };
  query: {
    readonly direction?: 'asc' | 'desc';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

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

export type TeamsListDiscussionCommentsInOrgResponse = {
  status: 200;
  body: ReadonlyArray<TeamDiscussionComment>;
};

export type TeamsCreateDiscussionCommentInOrgRequest = {
  body: { readonly body: string };
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly discussion_number: number;
  };
  query: {};
  header: {};
};

export type TeamsCreateDiscussionCommentInOrgResponse = {
  status: 201;
  body: TeamDiscussionComment;
};

export type TeamsGetDiscussionCommentInOrgRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly discussion_number: number;
    readonly comment_number: number;
  };
  query: {};
  header: {};
};

export type TeamsGetDiscussionCommentInOrgResponse = {
  status: 200;
  body: TeamDiscussionComment;
};

export type TeamsUpdateDiscussionCommentInOrgRequest = {
  body: { readonly body: string };
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly discussion_number: number;
    readonly comment_number: number;
  };
  query: {};
  header: {};
};

export type TeamsUpdateDiscussionCommentInOrgResponse = {
  status: 200;
  body: TeamDiscussionComment;
};

export type TeamsDeleteDiscussionCommentInOrgRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly discussion_number: number;
    readonly comment_number: number;
  };
  query: {};
  header: {};
};

export type TeamsDeleteDiscussionCommentInOrgResponse = {
  status: 204;
  body: unknown;
};

export type ReactionsListForTeamDiscussionCommentInOrgRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly discussion_number: number;
    readonly comment_number: number;
  };
  query: {
    readonly content?:
      | '+1'
      | '-1'
      | 'laugh'
      | 'confused'
      | 'heart'
      | 'hooray'
      | 'rocket'
      | 'eyes';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

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

export type ReactionsListForTeamDiscussionCommentInOrgResponse = {
  status: 200;
  body: ReadonlyArray<Reaction>;
};

export type ReactionsCreateForTeamDiscussionCommentInOrgRequest = {
  body: {
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
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly discussion_number: number;
    readonly comment_number: number;
  };
  query: {};
  header: {};
};

export type ReactionsCreateForTeamDiscussionCommentInOrgResponse =
  | { status: 200; body: Reaction }
  | { status: 201; body: Reaction };

export type ReactionsDeleteForTeamDiscussionCommentRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly discussion_number: number;
    readonly comment_number: number;
    readonly reaction_id: number;
  };
  query: {};
  header: {};
};

export type ReactionsDeleteForTeamDiscussionCommentResponse = {
  status: 204;
  body: unknown;
};

export type ReactionsListForTeamDiscussionInOrgRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly discussion_number: number;
  };
  query: {
    readonly content?:
      | '+1'
      | '-1'
      | 'laugh'
      | 'confused'
      | 'heart'
      | 'hooray'
      | 'rocket'
      | 'eyes';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ReactionsListForTeamDiscussionInOrgResponse = {
  status: 200;
  body: ReadonlyArray<Reaction>;
};

export type ReactionsCreateForTeamDiscussionInOrgRequest = {
  body: {
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
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly discussion_number: number;
  };
  query: {};
  header: {};
};

export type ReactionsCreateForTeamDiscussionInOrgResponse =
  | { status: 200; body: Reaction }
  | { status: 201; body: Reaction };

export type ReactionsDeleteForTeamDiscussionRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly discussion_number: number;
    readonly reaction_id: number;
  };
  query: {};
  header: {};
};

export type ReactionsDeleteForTeamDiscussionResponse = {
  status: 204;
  body: unknown;
};

export type TeamsListPendingInvitationsInOrgRequest = {
  body: unknown;
  path: { readonly org: string; readonly team_slug: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type TeamsListPendingInvitationsInOrgResponse = {
  status: 200;
  body: ReadonlyArray<OrganizationInvitation>;
};

export type TeamsListMembersInOrgRequest = {
  body: unknown;
  path: { readonly org: string; readonly team_slug: string };
  query: {
    readonly role?: 'member' | 'maintainer' | 'all';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type TeamsListMembersInOrgResponse = {
  status: 200;
  body: ReadonlyArray<SimpleUser>;
};

export type TeamsGetMembershipForUserInOrgRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly username: string;
  };
  query: {};
  header: {};
};

export type TeamMembership = {
  readonly url: string;
  readonly role: 'member' | 'maintainer';
  readonly state: 'active' | 'pending';
};

export type TeamsGetMembershipForUserInOrgResponse =
  | { status: 200; body: TeamMembership }
  | { status: 404; body: unknown };

export type TeamsAddOrUpdateMembershipForUserInOrgRequest = {
  body: { readonly role?: 'member' | 'maintainer' } | undefined;
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly username: string;
  };
  query: {};
  header: {};
};

export type TeamsAddOrUpdateMembershipForUserInOrgResponse =
  | { status: 200; body: TeamMembership }
  | { status: 403; body: unknown }
  | { status: 422; body: unknown };

export type TeamsRemoveMembershipForUserInOrgRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly username: string;
  };
  query: {};
  header: {};
};

export type TeamsRemoveMembershipForUserInOrgResponse =
  | { status: 204; body: unknown }
  | { status: 403; body: unknown };

export type TeamsListProjectsInOrgRequest = {
  body: unknown;
  path: { readonly org: string; readonly team_slug: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type TeamsListProjectsInOrgResponse = {
  status: 200;
  body: ReadonlyArray<TeamProject>;
};

export type TeamsCheckPermissionsForProjectInOrgRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly project_id: number;
  };
  query: {};
  header: {};
};

export type TeamsCheckPermissionsForProjectInOrgResponse =
  | { status: 200; body: TeamProject }
  | { status: 404; body: unknown };

export type TeamsAddOrUpdateProjectPermissionsInOrgRequest = {
  body: { readonly permission?: 'read' | 'write' | 'admin' } | null | undefined;
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly project_id: number;
  };
  query: {};
  header: {};
};

export type TeamsAddOrUpdateProjectPermissionsInOrgResponse =
  | { status: 204; body: unknown }
  | {
      status: 403;
      body: { readonly message?: string; readonly documentation_url?: string };
    };

export type TeamsRemoveProjectInOrgRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly project_id: number;
  };
  query: {};
  header: {};
};

export type TeamsRemoveProjectInOrgResponse = { status: 204; body: unknown };

export type TeamsListReposInOrgRequest = {
  body: unknown;
  path: { readonly org: string; readonly team_slug: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type TeamsListReposInOrgResponse = {
  status: 200;
  body: ReadonlyArray<MinimalRepository>;
};

export type TeamsCheckPermissionsForRepoInOrgRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly owner: string;
    readonly repo: string;
  };
  query: {};
  header: {};
};

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

export type TeamsCheckPermissionsForRepoInOrgResponse =
  | { status: 200; body: TeamRepository }
  | { status: 204; body: unknown }
  | { status: 404; body: unknown };

export type TeamsAddOrUpdateRepoPermissionsInOrgRequest = {
  body: { readonly permission?: string } | undefined;
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly owner: string;
    readonly repo: string;
  };
  query: {};
  header: {};
};

export type TeamsAddOrUpdateRepoPermissionsInOrgResponse = {
  status: 204;
  body: unknown;
};

export type TeamsRemoveRepoInOrgRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly team_slug: string;
    readonly owner: string;
    readonly repo: string;
  };
  query: {};
  header: {};
};

export type TeamsRemoveRepoInOrgResponse = { status: 204; body: unknown };

export type TeamsListChildInOrgRequest = {
  body: unknown;
  path: { readonly org: string; readonly team_slug: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type TeamsListChildInOrgResponse = {
  status: 200;
  body: ReadonlyArray<Team>;
};

export type OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest = {
  body: unknown;
  path: {
    readonly org: string;
    readonly security_product:
      | 'dependency_graph'
      | 'dependabot_alerts'
      | 'dependabot_security_updates'
      | 'advanced_security'
      | 'secret_scanning'
      | 'secret_scanning_push_protection';
    readonly enablement: 'enable_all' | 'disable_all';
  };
  query: {};
  header: {};
};

export type OrgsEnableOrDisableSecurityProductOnAllOrgReposResponse =
  | { status: 204; body: unknown }
  | { status: 422; body: unknown };

export type ProjectsGetCardRequest = {
  body: unknown;
  path: { readonly card_id: number };
  query: {};
  header: {};
};

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

export type ProjectsGetCardResponse =
  | { status: 200; body: ProjectCard }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type ProjectsUpdateCardRequest = {
  body:
    | { readonly note?: string | null; readonly archived?: boolean }
    | undefined;
  path: { readonly card_id: number };
  query: {};
  header: {};
};

export type ProjectsUpdateCardResponse =
  | { status: 200; body: ProjectCard }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type ProjectsDeleteCardRequest = {
  body: unknown;
  path: { readonly card_id: number };
  query: {};
  header: {};
};

export type ProjectsDeleteCardResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | {
      status: 403;
      body: {
        readonly message?: string;
        readonly documentation_url?: string;
        readonly errors?: ReadonlyArray<string>;
      };
    }
  | { status: 404; body: BasicError };

export type ProjectsMoveCardRequest = {
  body: { readonly position: string; readonly column_id?: number };
  path: { readonly card_id: number };
  query: {};
  header: {};
};

export type ProjectsMoveCardResponse =
  | { status: 201; body: {} }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | {
      status: 403;
      body: {
        readonly message?: string;
        readonly documentation_url?: string;
        readonly errors?: ReadonlyArray<{
          readonly code?: string;
          readonly message?: string;
          readonly resource?: string;
          readonly field?: string;
        }>;
      };
    }
  | { status: 422; body: ValidationError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
        readonly errors?: ReadonlyArray<{
          readonly code?: string;
          readonly message?: string;
        }>;
      };
    };

export type ProjectsGetColumnRequest = {
  body: unknown;
  path: { readonly column_id: number };
  query: {};
  header: {};
};

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

export type ProjectsGetColumnResponse =
  | { status: 200; body: ProjectColumn }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type ProjectsUpdateColumnRequest = {
  body: { readonly name: string };
  path: { readonly column_id: number };
  query: {};
  header: {};
};

export type ProjectsUpdateColumnResponse =
  | { status: 200; body: ProjectColumn }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type ProjectsDeleteColumnRequest = {
  body: unknown;
  path: { readonly column_id: number };
  query: {};
  header: {};
};

export type ProjectsDeleteColumnResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type ProjectsListCardsRequest = {
  body: unknown;
  path: { readonly column_id: number };
  query: {
    readonly archived_state?: 'all' | 'archived' | 'not_archived';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ProjectsListCardsResponse =
  | { status: 200; body: ReadonlyArray<ProjectCard> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type ProjectsCreateCardRequest = {
  body:
    | { readonly note: string | null }
    | { readonly content_id: number; readonly content_type: string };
  path: { readonly column_id: number };
  query: {};
  header: {};
};

export type ProjectsCreateCardResponse =
  | { status: 201; body: ProjectCard }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationError | ValidationErrorSimple }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
        readonly errors?: ReadonlyArray<{
          readonly code?: string;
          readonly message?: string;
        }>;
      };
    };

export type ProjectsMoveColumnRequest = {
  body: { readonly position: string };
  path: { readonly column_id: number };
  query: {};
  header: {};
};

export type ProjectsMoveColumnResponse =
  | { status: 201; body: {} }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type ProjectsGetRequest = {
  body: unknown;
  path: { readonly project_id: number };
  query: {};
  header: {};
};

export type ProjectsGetResponse =
  | { status: 200; body: Project }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type ProjectsUpdateRequest = {
  body:
    | {
        readonly name?: string;
        readonly body?: string | null;
        readonly state?: string;
        readonly organization_permission?: 'read' | 'write' | 'admin' | 'none';
        readonly private?: boolean;
      }
    | undefined;
  path: { readonly project_id: number };
  query: {};
  header: {};
};

export type ProjectsUpdateResponse =
  | { status: 200; body: Project }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | {
      status: 403;
      body: {
        readonly message?: string;
        readonly documentation_url?: string;
        readonly errors?: ReadonlyArray<string>;
      };
    }
  | { status: 404; body: unknown }
  | { status: 410; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type ProjectsDeleteRequest = {
  body: unknown;
  path: { readonly project_id: number };
  query: {};
  header: {};
};

export type ProjectsDeleteResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | {
      status: 403;
      body: {
        readonly message?: string;
        readonly documentation_url?: string;
        readonly errors?: ReadonlyArray<string>;
      };
    }
  | { status: 404; body: BasicError }
  | { status: 410; body: BasicError };

export type ProjectsListCollaboratorsRequest = {
  body: unknown;
  path: { readonly project_id: number };
  query: {
    readonly affiliation?: 'outside' | 'direct' | 'all';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ProjectsListCollaboratorsResponse =
  | { status: 200; body: ReadonlyArray<SimpleUser> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type ProjectsAddCollaboratorRequest = {
  body: { readonly permission?: 'read' | 'write' | 'admin' } | null | undefined;
  path: { readonly project_id: number; readonly username: string };
  query: {};
  header: {};
};

export type ProjectsAddCollaboratorResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type ProjectsRemoveCollaboratorRequest = {
  body: unknown;
  path: { readonly project_id: number; readonly username: string };
  query: {};
  header: {};
};

export type ProjectsRemoveCollaboratorResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type ProjectsGetPermissionForUserRequest = {
  body: unknown;
  path: { readonly project_id: number; readonly username: string };
  query: {};
  header: {};
};

export type ProjectCollaboratorPermission = {
  readonly permission: string;
  readonly user: SimpleUser;
};

export type ProjectsGetPermissionForUserResponse =
  | { status: 200; body: ProjectCollaboratorPermission }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type ProjectsListColumnsRequest = {
  body: unknown;
  path: { readonly project_id: number };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ProjectsListColumnsResponse =
  | { status: 200; body: ReadonlyArray<ProjectColumn> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type ProjectsCreateColumnRequest = {
  body: { readonly name: string };
  path: { readonly project_id: number };
  query: {};
  header: {};
};

export type ProjectsCreateColumnResponse =
  | { status: 201; body: ProjectColumn }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type RateLimitGetRequest = {
  body: unknown;
  path: {};
  query: {};
  header: {};
};

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

export type RateLimitGetResponse =
  | { status: 200; body: RateLimitOverview }
  | { status: 304; body: unknown }
  | { status: 404; body: BasicError };

export type ReposGetRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

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

export type ReposGetResponse =
  | { status: 200; body: FullRepository }
  | { status: 301; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type ReposUpdateRequest = {
  body:
    | {
        readonly name?: string;
        readonly description?: string;
        readonly homepage?: string;
        readonly private?: boolean;
        readonly visibility?: 'public' | 'private' | 'internal';
        readonly security_and_analysis?: {
          readonly advanced_security?: { readonly status?: string };
          readonly secret_scanning?: { readonly status?: string };
          readonly secret_scanning_push_protection?: {
            readonly status?: string;
          };
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
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposUpdateResponse =
  | { status: 200; body: FullRepository }
  | { status: 307; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposDeleteRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposDeleteResponse =
  | { status: 204; body: unknown }
  | { status: 307; body: BasicError }
  | {
      status: 403;
      body: { readonly message?: string; readonly documentation_url?: string };
    }
  | { status: 404; body: BasicError };

export type ActionsListArtifactsForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {
    readonly per_page?: number;
    readonly page?: number;
    readonly name?: string;
  };
  header: {};
};

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

export type ActionsListArtifactsForRepoResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly artifacts: ReadonlyArray<Artifact>;
  };
};

export type ActionsGetArtifactRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly artifact_id: number;
  };
  query: {};
  header: {};
};

export type ActionsGetArtifactResponse = { status: 200; body: Artifact };

export type ActionsDeleteArtifactRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly artifact_id: number;
  };
  query: {};
  header: {};
};

export type ActionsDeleteArtifactResponse = { status: 204; body: unknown };

export type ActionsDownloadArtifactRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly artifact_id: number;
    readonly archive_format: string;
  };
  query: {};
  header: {};
};

export type ActionsDownloadArtifactResponse =
  | { status: 302; body: unknown }
  | { status: 410; body: BasicError };

export type ActionsGetActionsCacheUsageRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ActionsGetActionsCacheUsageResponse = {
  status: 200;
  body: ActionsCacheUsageByRepository;
};

export type ActionsGetActionsCacheListRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {
    readonly per_page?: number;
    readonly page?: number;
    readonly ref?: CodeScanningRef;
    readonly key?: string;
    readonly sort?: 'created_at' | 'last_accessed_at' | 'size_in_bytes';
    readonly direction?: 'asc' | 'desc';
  };
  header: {};
};

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

export type ActionsGetActionsCacheListResponse = {
  status: 200;
  body: RepositoryActionsCaches;
};

export type ActionsDeleteActionsCacheByKeyRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly key: string; readonly ref?: CodeScanningRef };
  header: {};
};

export type ActionsDeleteActionsCacheByKeyResponse = {
  status: 200;
  body: RepositoryActionsCaches;
};

export type ActionsDeleteActionsCacheByIdRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly cache_id: number;
  };
  query: {};
  header: {};
};

export type ActionsDeleteActionsCacheByIdResponse = {
  status: 204;
  body: unknown;
};

export type ActionsGetJobForWorkflowRunRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly job_id: number;
  };
  query: {};
  header: {};
};

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

export type ActionsGetJobForWorkflowRunResponse = { status: 200; body: Job };

export type ActionsDownloadJobLogsForWorkflowRunRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly job_id: number;
  };
  query: {};
  header: {};
};

export type ActionsDownloadJobLogsForWorkflowRunResponse = {
  status: 302;
  body: unknown;
};

export type ActionsReRunJobForWorkflowRunRequest = {
  body: { readonly enable_debug_logging?: boolean } | null | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly job_id: number;
  };
  query: {};
  header: {};
};

export type ActionsReRunJobForWorkflowRunResponse =
  | { status: 201; body: EmptyObject }
  | { status: 403; body: BasicError };

export type ActionsGetGithubActionsPermissionsRepositoryRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ActionsEnabled = boolean;

export type ActionsRepositoryPermissions = {
  readonly enabled: ActionsEnabled;
  readonly allowed_actions?: AllowedActions;
  readonly selected_actions_url?: SelectedActionsUrl;
};

export type ActionsGetGithubActionsPermissionsRepositoryResponse = {
  status: 200;
  body: ActionsRepositoryPermissions;
};

export type ActionsSetGithubActionsPermissionsRepositoryRequest = {
  body: {
    readonly enabled: ActionsEnabled;
    readonly allowed_actions?: AllowedActions;
  };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ActionsSetGithubActionsPermissionsRepositoryResponse = {
  status: 204;
  body: unknown;
};

export type ActionsGetWorkflowAccessToRepositoryRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ActionsWorkflowAccessToRepository = {
  readonly access_level: 'none' | 'organization' | 'enterprise';
};

export type ActionsGetWorkflowAccessToRepositoryResponse = {
  status: 200;
  body: ActionsWorkflowAccessToRepository;
};

export type ActionsSetWorkflowAccessToRepositoryRequest = {
  body: ActionsWorkflowAccessToRepository;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ActionsSetWorkflowAccessToRepositoryResponse = {
  status: 204;
  body: unknown;
};

export type ActionsGetAllowedActionsRepositoryRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ActionsGetAllowedActionsRepositoryResponse = {
  status: 200;
  body: SelectedActions;
};

export type ActionsSetAllowedActionsRepositoryRequest = {
  body: SelectedActions | undefined;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ActionsSetAllowedActionsRepositoryResponse = {
  status: 204;
  body: unknown;
};

export type ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryResponse = {
  status: 200;
  body: ActionsGetDefaultWorkflowPermissions;
};

export type ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryRequest = {
  body: ActionsSetDefaultWorkflowPermissions;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryResponse =
  | { status: 204; body: unknown }
  | { status: 409; body: unknown };

export type ActionsListSelfHostedRunnersForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ActionsListSelfHostedRunnersForRepoResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly runners: ReadonlyArray<SelfHostedRunners>;
  };
};

export type ActionsListRunnerApplicationsForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ActionsListRunnerApplicationsForRepoResponse = {
  status: 200;
  body: ReadonlyArray<RunnerApplication>;
};

export type ActionsCreateRegistrationTokenForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ActionsCreateRegistrationTokenForRepoResponse = {
  status: 201;
  body: AuthenticationToken;
};

export type ActionsCreateRemoveTokenForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ActionsCreateRemoveTokenForRepoResponse = {
  status: 201;
  body: AuthenticationToken;
};

export type ActionsGetSelfHostedRunnerForRepoRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly runner_id: number;
  };
  query: {};
  header: {};
};

export type ActionsGetSelfHostedRunnerForRepoResponse = {
  status: 200;
  body: SelfHostedRunners;
};

export type ActionsDeleteSelfHostedRunnerFromRepoRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly runner_id: number;
  };
  query: {};
  header: {};
};

export type ActionsDeleteSelfHostedRunnerFromRepoResponse = {
  status: 204;
  body: unknown;
};

export type ActionsListLabelsForSelfHostedRunnerForRepoRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly runner_id: number;
  };
  query: {};
  header: {};
};

export type ActionsListLabelsForSelfHostedRunnerForRepoResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
      };
    }
  | { status: 404; body: BasicError };

export type ActionsAddCustomLabelsToSelfHostedRunnerForRepoRequest = {
  body: { readonly labels: ReadonlyArray<string> };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly runner_id: number;
  };
  query: {};
  header: {};
};

export type ActionsAddCustomLabelsToSelfHostedRunnerForRepoResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
      };
    }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequest = {
  body: { readonly labels: ReadonlyArray<string> };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly runner_id: number;
  };
  query: {};
  header: {};
};

export type ActionsSetCustomLabelsForSelfHostedRunnerForRepoResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
      };
    }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly runner_id: number;
  };
  query: {};
  header: {};
};

export type ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
      };
    }
  | { status: 404; body: BasicError };

export type ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly runner_id: number;
    readonly name: string;
  };
  query: {};
  header: {};
};

export type ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly labels: ReadonlyArray<SelfHostedRunnerLabel>;
      };
    }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type ActionsListWorkflowRunsForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {
    readonly actor?: string;
    readonly branch?: string;
    readonly event?: string;
    readonly status?:
      | 'completed'
      | 'action_required'
      | 'cancelled'
      | 'failure'
      | 'neutral'
      | 'skipped'
      | 'stale'
      | 'success'
      | 'timed_out'
      | 'in_progress'
      | 'queued'
      | 'requested'
      | 'waiting';
    readonly per_page?: number;
    readonly page?: number;
    readonly created?: string;
    readonly exclude_pull_requests?: boolean;
    readonly check_suite_id?: number;
    readonly head_sha?: string;
  };
  header: {};
};

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

export type ActionsListWorkflowRunsForRepoResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly workflow_runs: ReadonlyArray<WorkflowRun>;
  };
};

export type ActionsGetWorkflowRunRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly run_id: number;
  };
  query: { readonly exclude_pull_requests?: boolean };
  header: {};
};

export type ActionsGetWorkflowRunResponse = { status: 200; body: WorkflowRun };

export type ActionsDeleteWorkflowRunRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly run_id: number;
  };
  query: {};
  header: {};
};

export type ActionsDeleteWorkflowRunResponse = { status: 204; body: unknown };

export type ActionsGetReviewsForRunRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly run_id: number;
  };
  query: {};
  header: {};
};

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

export type ActionsGetReviewsForRunResponse = {
  status: 200;
  body: ReadonlyArray<EnvironmentApproval>;
};

export type ActionsApproveWorkflowRunRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly run_id: number;
  };
  query: {};
  header: {};
};

export type ActionsApproveWorkflowRunResponse =
  | { status: 201; body: EmptyObject }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type ActionsListWorkflowRunArtifactsRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly run_id: number;
  };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ActionsListWorkflowRunArtifactsResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly artifacts: ReadonlyArray<Artifact>;
  };
};

export type ActionsGetWorkflowRunAttemptRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly run_id: number;
    readonly attempt_number: number;
  };
  query: { readonly exclude_pull_requests?: boolean };
  header: {};
};

export type ActionsGetWorkflowRunAttemptResponse = {
  status: 200;
  body: WorkflowRun;
};

export type ActionsListJobsForWorkflowRunAttemptRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly run_id: number;
    readonly attempt_number: number;
  };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ActionsListJobsForWorkflowRunAttemptResponse =
  | {
      status: 200;
      body: { readonly total_count: number; readonly jobs: ReadonlyArray<Job> };
    }
  | { status: 404; body: BasicError };

export type ActionsDownloadWorkflowRunAttemptLogsRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly run_id: number;
    readonly attempt_number: number;
  };
  query: {};
  header: {};
};

export type ActionsDownloadWorkflowRunAttemptLogsResponse = {
  status: 302;
  body: unknown;
};

export type ActionsCancelWorkflowRunRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly run_id: number;
  };
  query: {};
  header: {};
};

export type ActionsCancelWorkflowRunResponse =
  | { status: 202; body: EmptyObject }
  | { status: 409; body: BasicError };

export type ActionsListJobsForWorkflowRunRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly run_id: number;
  };
  query: {
    readonly filter?: 'latest' | 'all';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ActionsListJobsForWorkflowRunResponse = {
  status: 200;
  body: { readonly total_count: number; readonly jobs: ReadonlyArray<Job> };
};

export type ActionsDownloadWorkflowRunLogsRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly run_id: number;
  };
  query: {};
  header: {};
};

export type ActionsDownloadWorkflowRunLogsResponse = {
  status: 302;
  body: unknown;
};

export type ActionsDeleteWorkflowRunLogsRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly run_id: number;
  };
  query: {};
  header: {};
};

export type ActionsDeleteWorkflowRunLogsResponse =
  | { status: 204; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 500; body: BasicError };

export type ActionsGetPendingDeploymentsForRunRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly run_id: number;
  };
  query: {};
  header: {};
};

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

export type ActionsGetPendingDeploymentsForRunResponse = {
  status: 200;
  body: ReadonlyArray<PendingDeployment>;
};

export type ActionsReviewPendingDeploymentsForRunRequest = {
  body: {
    readonly environment_ids: ReadonlyArray<number>;
    readonly state: 'approved' | 'rejected';
    readonly comment: string;
  };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly run_id: number;
  };
  query: {};
  header: {};
};

export type Deployment = {
  readonly url: string;
  readonly id: number;
  readonly node_id: string;
  readonly sha: string;
  readonly ref: string;
  readonly task: string;
  readonly payload: unknown | string;
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

export type ActionsReviewPendingDeploymentsForRunResponse = {
  status: 200;
  body: ReadonlyArray<Deployment>;
};

export type ActionsReRunWorkflowRequest = {
  body: { readonly enable_debug_logging?: boolean } | null | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly run_id: number;
  };
  query: {};
  header: {};
};

export type ActionsReRunWorkflowResponse = { status: 201; body: EmptyObject };

export type ActionsReRunWorkflowFailedJobsRequest = {
  body: { readonly enable_debug_logging?: boolean } | null | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly run_id: number;
  };
  query: {};
  header: {};
};

export type ActionsReRunWorkflowFailedJobsResponse = {
  status: 201;
  body: EmptyObject;
};

export type ActionsGetWorkflowRunUsageRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly run_id: number;
  };
  query: {};
  header: {};
};

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

export type ActionsGetWorkflowRunUsageResponse = {
  status: 200;
  body: WorkflowRunUsage;
};

export type ActionsListRepoSecretsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ActionsSecret = {
  readonly name: string;
  readonly created_at: string;
  readonly updated_at: string;
};

export type ActionsListRepoSecretsResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly secrets: ReadonlyArray<ActionsSecret>;
  };
};

export type ActionsGetRepoPublicKeyRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ActionsGetRepoPublicKeyResponse = {
  status: 200;
  body: ActionsPublicKey;
};

export type ActionsGetRepoSecretRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly secret_name: string;
  };
  query: {};
  header: {};
};

export type ActionsGetRepoSecretResponse = { status: 200; body: ActionsSecret };

export type ActionsCreateOrUpdateRepoSecretRequest = {
  body: { readonly encrypted_value?: string; readonly key_id?: string };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly secret_name: string;
  };
  query: {};
  header: {};
};

export type ActionsCreateOrUpdateRepoSecretResponse =
  | { status: 201; body: EmptyObject }
  | { status: 204; body: unknown };

export type ActionsDeleteRepoSecretRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly secret_name: string;
  };
  query: {};
  header: {};
};

export type ActionsDeleteRepoSecretResponse = { status: 204; body: unknown };

export type ActionsListRepoWorkflowsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type ActionsListRepoWorkflowsResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly workflows: ReadonlyArray<Workflow>;
  };
};

export type ActionsGetWorkflowRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly workflow_id: number | string;
  };
  query: {};
  header: {};
};

export type ActionsGetWorkflowResponse = { status: 200; body: Workflow };

export type ActionsDisableWorkflowRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly workflow_id: number | string;
  };
  query: {};
  header: {};
};

export type ActionsDisableWorkflowResponse = { status: 204; body: unknown };

export type ActionsCreateWorkflowDispatchRequest = {
  body: { readonly ref: string; readonly inputs?: unknown };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly workflow_id: number | string;
  };
  query: {};
  header: {};
};

export type ActionsCreateWorkflowDispatchResponse = {
  status: 204;
  body: unknown;
};

export type ActionsEnableWorkflowRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly workflow_id: number | string;
  };
  query: {};
  header: {};
};

export type ActionsEnableWorkflowResponse = { status: 204; body: unknown };

export type ActionsListWorkflowRunsRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly workflow_id: number | string;
  };
  query: {
    readonly actor?: string;
    readonly branch?: string;
    readonly event?: string;
    readonly status?:
      | 'completed'
      | 'action_required'
      | 'cancelled'
      | 'failure'
      | 'neutral'
      | 'skipped'
      | 'stale'
      | 'success'
      | 'timed_out'
      | 'in_progress'
      | 'queued'
      | 'requested'
      | 'waiting';
    readonly per_page?: number;
    readonly page?: number;
    readonly created?: string;
    readonly exclude_pull_requests?: boolean;
    readonly check_suite_id?: number;
    readonly head_sha?: string;
  };
  header: {};
};

export type ActionsListWorkflowRunsResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly workflow_runs: ReadonlyArray<WorkflowRun>;
  };
};

export type ActionsGetWorkflowUsageRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly workflow_id: number | string;
  };
  query: {};
  header: {};
};

export type WorkflowUsage = {
  readonly billable: {
    readonly UBUNTU?: { readonly total_ms?: number };
    readonly MACOS?: { readonly total_ms?: number };
    readonly WINDOWS?: { readonly total_ms?: number };
  };
};

export type ActionsGetWorkflowUsageResponse = {
  status: 200;
  body: WorkflowUsage;
};

export type IssuesListAssigneesRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type IssuesListAssigneesResponse =
  | { status: 200; body: ReadonlyArray<SimpleUser> }
  | { status: 404; body: BasicError };

export type IssuesCheckUserCanBeAssignedRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly assignee: string;
  };
  query: {};
  header: {};
};

export type IssuesCheckUserCanBeAssignedResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError };

export type ReposListAutolinksRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly page?: number };
  header: {};
};

export type AutolinkReference = {
  readonly id: number;
  readonly key_prefix: string;
  readonly url_template: string;
  readonly is_alphanumeric: boolean;
};

export type ReposListAutolinksResponse = {
  status: 200;
  body: ReadonlyArray<AutolinkReference>;
};

export type ReposCreateAutolinkRequest = {
  body: {
    readonly key_prefix: string;
    readonly url_template: string;
    readonly is_alphanumeric?: boolean;
  };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposCreateAutolinkResponse =
  | { status: 201; body: AutolinkReference }
  | { status: 422; body: ValidationError };

export type ReposGetAutolinkRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly autolink_id: number;
  };
  query: {};
  header: {};
};

export type ReposGetAutolinkResponse =
  | { status: 200; body: AutolinkReference }
  | { status: 404; body: BasicError };

export type ReposDeleteAutolinkRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly autolink_id: number;
  };
  query: {};
  header: {};
};

export type ReposDeleteAutolinkResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError };

export type ReposEnableAutomatedSecurityFixesRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposEnableAutomatedSecurityFixesResponse = {
  status: 204;
  body: unknown;
};

export type ReposDisableAutomatedSecurityFixesRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposDisableAutomatedSecurityFixesResponse = {
  status: 204;
  body: unknown;
};

export type ReposListBranchesRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {
    readonly protected?: boolean;
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

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

export type ReposListBranchesResponse =
  | { status: 200; body: ReadonlyArray<ShortBranch> }
  | { status: 404; body: BasicError };

export type ReposGetBranchRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

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

export type ReposGetBranchResponse =
  | { status: 200; body: BranchWithProtection }
  | { status: 301; body: BasicError }
  | { status: 404; body: BasicError };

export type ReposGetBranchProtectionRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposGetBranchProtectionResponse =
  | { status: 200; body: BranchProtection }
  | { status: 404; body: BasicError };

export type ReposUpdateBranchProtectionRequest = {
  body: {
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
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

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

export type ReposUpdateBranchProtectionResponse =
  | { status: 200; body: ProtectedBranch }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type ReposDeleteBranchProtectionRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposDeleteBranchProtectionResponse =
  | { status: 204; body: unknown }
  | { status: 403; body: BasicError };

export type ReposGetAdminBranchProtectionRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposGetAdminBranchProtectionResponse = {
  status: 200;
  body: ProtectedBranchAdminEnforced;
};

export type ReposSetAdminBranchProtectionRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposSetAdminBranchProtectionResponse = {
  status: 200;
  body: ProtectedBranchAdminEnforced;
};

export type ReposDeleteAdminBranchProtectionRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposDeleteAdminBranchProtectionResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError };

export type ReposGetPullRequestReviewProtectionRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposGetPullRequestReviewProtectionResponse = {
  status: 200;
  body: ProtectedBranchPullRequestReview;
};

export type ReposUpdatePullRequestReviewProtectionRequest = {
  body:
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
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposUpdatePullRequestReviewProtectionResponse =
  | { status: 200; body: ProtectedBranchPullRequestReview }
  | { status: 422; body: ValidationError };

export type ReposDeletePullRequestReviewProtectionRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposDeletePullRequestReviewProtectionResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError };

export type ReposGetCommitSignatureProtectionRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposGetCommitSignatureProtectionResponse =
  | { status: 200; body: ProtectedBranchAdminEnforced }
  | { status: 404; body: BasicError };

export type ReposCreateCommitSignatureProtectionRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposCreateCommitSignatureProtectionResponse =
  | { status: 200; body: ProtectedBranchAdminEnforced }
  | { status: 404; body: BasicError };

export type ReposDeleteCommitSignatureProtectionRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposDeleteCommitSignatureProtectionResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError };

export type ReposGetStatusChecksProtectionRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposGetStatusChecksProtectionResponse =
  | { status: 200; body: StatusCheckPolicy }
  | { status: 404; body: BasicError };

export type ReposUpdateStatusCheckProtectionRequest = {
  body:
    | {
        readonly strict?: boolean;
        readonly contexts?: ReadonlyArray<string>;
        readonly checks?: ReadonlyArray<{
          readonly context: string;
          readonly app_id?: number;
        }>;
      }
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposUpdateStatusCheckProtectionResponse =
  | { status: 200; body: StatusCheckPolicy }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposRemoveStatusCheckProtectionRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposRemoveStatusCheckProtectionResponse = {
  status: 204;
  body: unknown;
};

export type ReposGetAllStatusCheckContextsRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposGetAllStatusCheckContextsResponse =
  | { status: 200; body: ReadonlyArray<string> }
  | { status: 404; body: BasicError };

export type ReposAddStatusCheckContextsRequest = {
  body:
    | { readonly contexts: ReadonlyArray<string> }
    | ReadonlyArray<string>
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposAddStatusCheckContextsResponse =
  | { status: 200; body: ReadonlyArray<string> }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposSetStatusCheckContextsRequest = {
  body:
    | { readonly contexts: ReadonlyArray<string> }
    | ReadonlyArray<string>
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposSetStatusCheckContextsResponse =
  | { status: 200; body: ReadonlyArray<string> }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposRemoveStatusCheckContextsRequest = {
  body:
    | { readonly contexts: ReadonlyArray<string> }
    | ReadonlyArray<string>
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposRemoveStatusCheckContextsResponse =
  | { status: 200; body: ReadonlyArray<string> }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposGetAccessRestrictionsRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposGetAccessRestrictionsResponse =
  | { status: 200; body: BranchRestrictionPolicy }
  | { status: 404; body: BasicError };

export type ReposDeleteAccessRestrictionsRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposDeleteAccessRestrictionsResponse = {
  status: 204;
  body: unknown;
};

export type ReposGetAppsWithAccessToProtectedBranchRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposGetAppsWithAccessToProtectedBranchResponse =
  | { status: 200; body: ReadonlyArray<GitHubApp> }
  | { status: 404; body: BasicError };

export type ReposAddAppAccessRestrictionsRequest = {
  body:
    | { readonly apps: ReadonlyArray<string> }
    | ReadonlyArray<string>
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposAddAppAccessRestrictionsResponse =
  | { status: 200; body: ReadonlyArray<GitHubApp> }
  | { status: 422; body: ValidationError };

export type ReposSetAppAccessRestrictionsRequest = {
  body:
    | { readonly apps: ReadonlyArray<string> }
    | ReadonlyArray<string>
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposSetAppAccessRestrictionsResponse =
  | { status: 200; body: ReadonlyArray<GitHubApp> }
  | { status: 422; body: ValidationError };

export type ReposRemoveAppAccessRestrictionsRequest = {
  body:
    | { readonly apps: ReadonlyArray<string> }
    | ReadonlyArray<string>
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposRemoveAppAccessRestrictionsResponse =
  | { status: 200; body: ReadonlyArray<GitHubApp> }
  | { status: 422; body: ValidationError };

export type ReposGetTeamsWithAccessToProtectedBranchRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposGetTeamsWithAccessToProtectedBranchResponse =
  | { status: 200; body: ReadonlyArray<Team> }
  | { status: 404; body: BasicError };

export type ReposAddTeamAccessRestrictionsRequest = {
  body:
    | { readonly teams: ReadonlyArray<string> }
    | ReadonlyArray<string>
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposAddTeamAccessRestrictionsResponse =
  | { status: 200; body: ReadonlyArray<Team> }
  | { status: 422; body: ValidationError };

export type ReposSetTeamAccessRestrictionsRequest = {
  body:
    | { readonly teams: ReadonlyArray<string> }
    | ReadonlyArray<string>
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposSetTeamAccessRestrictionsResponse =
  | { status: 200; body: ReadonlyArray<Team> }
  | { status: 422; body: ValidationError };

export type ReposRemoveTeamAccessRestrictionsRequest = {
  body:
    | { readonly teams: ReadonlyArray<string> }
    | ReadonlyArray<string>
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposRemoveTeamAccessRestrictionsResponse =
  | { status: 200; body: ReadonlyArray<Team> }
  | { status: 422; body: ValidationError };

export type ReposGetUsersWithAccessToProtectedBranchRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposGetUsersWithAccessToProtectedBranchResponse =
  | { status: 200; body: ReadonlyArray<SimpleUser> }
  | { status: 404; body: BasicError };

export type ReposAddUserAccessRestrictionsRequest = {
  body:
    | { readonly users: ReadonlyArray<string> }
    | ReadonlyArray<string>
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposAddUserAccessRestrictionsResponse =
  | { status: 200; body: ReadonlyArray<SimpleUser> }
  | { status: 422; body: ValidationError };

export type ReposSetUserAccessRestrictionsRequest = {
  body:
    | { readonly users: ReadonlyArray<string> }
    | ReadonlyArray<string>
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposSetUserAccessRestrictionsResponse =
  | { status: 200; body: ReadonlyArray<SimpleUser> }
  | { status: 422; body: ValidationError };

export type ReposRemoveUserAccessRestrictionsRequest = {
  body:
    | { readonly users: ReadonlyArray<string> }
    | ReadonlyArray<string>
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposRemoveUserAccessRestrictionsResponse =
  | { status: 200; body: ReadonlyArray<SimpleUser> }
  | { status: 422; body: ValidationError };

export type ReposRenameBranchRequest = {
  body: { readonly new_name: string };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly branch: string;
  };
  query: {};
  header: {};
};

export type ReposRenameBranchResponse =
  | { status: 201; body: BranchWithProtection }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type ChecksCreateRequest = {
  body: {
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
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

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

export type ChecksCreateResponse = { status: 201; body: CheckRun };

export type ChecksGetRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly check_run_id: number;
  };
  query: {};
  header: {};
};

export type ChecksGetResponse = { status: 200; body: CheckRun };

export type ChecksUpdateRequest = {
  body: {
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
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly check_run_id: number;
  };
  query: {};
  header: {};
};

export type ChecksUpdateResponse = { status: 200; body: CheckRun };

export type ChecksListAnnotationsRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly check_run_id: number;
  };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type ChecksListAnnotationsResponse = {
  status: 200;
  body: ReadonlyArray<CheckAnnotation>;
};

export type ChecksRerequestRunRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly check_run_id: number;
  };
  query: {};
  header: {};
};

export type ChecksRerequestRunResponse =
  | { status: 201; body: EmptyObject }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: BasicError };

export type ChecksCreateSuiteRequest = {
  body: { readonly head_sha: string };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

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

export type ChecksCreateSuiteResponse =
  | { status: 200; body: CheckSuite }
  | { status: 201; body: CheckSuite };

export type ChecksSetSuitesPreferencesRequest = {
  body: {
    readonly auto_trigger_checks?: ReadonlyArray<{
      readonly app_id: number;
      readonly setting: boolean;
    }>;
  };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type CheckSuitePreference = {
  readonly preferences: {
    readonly auto_trigger_checks?: ReadonlyArray<{
      readonly app_id: number;
      readonly setting: boolean;
    }>;
  };
  readonly repository: MinimalRepository;
};

export type ChecksSetSuitesPreferencesResponse = {
  status: 200;
  body: CheckSuitePreference;
};

export type ChecksGetSuiteRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly check_suite_id: number;
  };
  query: {};
  header: {};
};

export type ChecksGetSuiteResponse = { status: 200; body: CheckSuite };

export type ChecksListForSuiteRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly check_suite_id: number;
  };
  query: {
    readonly check_name?: string;
    readonly status?: 'queued' | 'in_progress' | 'completed';
    readonly filter?: 'latest' | 'all';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ChecksListForSuiteResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly check_runs: ReadonlyArray<CheckRun>;
  };
};

export type ChecksRerequestSuiteRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly check_suite_id: number;
  };
  query: {};
  header: {};
};

export type ChecksRerequestSuiteResponse = { status: 201; body: EmptyObject };

export type CodeScanningListAlertsForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {
    readonly tool_name?: CodeScanningAnalysisToolName;
    readonly tool_guid?: CodeScanningAnalysisToolGuid;
    readonly page?: number;
    readonly per_page?: number;
    readonly ref?: CodeScanningRef;
    readonly direction?: 'asc' | 'desc';
    readonly sort?: 'created' | 'updated';
    readonly state?: CodeScanningAlertState;
  };
  header: {};
};

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

export type CodeScanningListAlertsForRepoResponse =
  | { status: 200; body: ReadonlyArray<CodeScanningAlertItems> }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type CodeScanningGetAlertRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly alert_number: AlertNumber;
  };
  query: {};
  header: {};
};

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

export type CodeScanningGetAlertResponse =
  | { status: 200; body: CodeScanningAlert }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type CodeScanningAlertSetState = 'open' | 'dismissed';

export type CodeScanningUpdateAlertRequest = {
  body: {
    readonly state: CodeScanningAlertSetState;
    readonly dismissed_reason?: CodeScanningAlertDismissedReason;
    readonly dismissed_comment?: CodeScanningAlertDismissedComment;
  };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly alert_number: AlertNumber;
  };
  query: {};
  header: {};
};

export type CodeScanningUpdateAlertResponse =
  | { status: 200; body: CodeScanningAlert }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type CodeScanningListAlertInstancesRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly alert_number: AlertNumber;
  };
  query: {
    readonly page?: number;
    readonly per_page?: number;
    readonly ref?: CodeScanningRef;
  };
  header: {};
};

export type CodeScanningListAlertInstancesResponse =
  | { status: 200; body: ReadonlyArray<CodeScanningAlertInstance> }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type CodeScanningAnalysisSarifId = string;

export type CodeScanningListRecentAnalysesRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {
    readonly tool_name?: CodeScanningAnalysisToolName;
    readonly tool_guid?: CodeScanningAnalysisToolGuid;
    readonly page?: number;
    readonly per_page?: number;
    readonly ref?: CodeScanningRef;
    readonly sarif_id?: CodeScanningAnalysisSarifId;
    readonly direction?: 'asc' | 'desc';
    readonly sort?: 'created';
  };
  header: {};
};

export type CodeScanningAnalysisCommitSha = string;

export type CodeScanningAnalysisEnvironment = string;

export type CodeScanningAnalysisCreatedAt = string;

export type CodeScanningAnalysisUrl = string;

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

export type CodeScanningListRecentAnalysesResponse =
  | { status: 200; body: ReadonlyArray<CodeScanningAnalysis> }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type CodeScanningGetAnalysisRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly analysis_id: number;
  };
  query: {};
  header: {};
};

export type CodeScanningGetAnalysisResponse =
  | { status: 200; body: CodeScanningAnalysis }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type CodeScanningDeleteAnalysisRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly analysis_id: number;
  };
  query: { readonly confirm_delete?: string | null };
  header: {};
};

export type AnalysisDeletion = {
  readonly next_analysis_url: string | null;
  readonly confirm_delete_url: string | null;
};

export type CodeScanningDeleteAnalysisResponse =
  | { status: 200; body: AnalysisDeletion }
  | { status: 400; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type CodeScanningListCodeqlDatabasesRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

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

export type CodeScanningListCodeqlDatabasesResponse =
  | { status: 200; body: ReadonlyArray<CodeQlDatabase> }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type CodeScanningGetCodeqlDatabaseRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly language: string;
  };
  query: {};
  header: {};
};

export type CodeScanningGetCodeqlDatabaseResponse =
  | { status: 200; body: CodeQlDatabase }
  | { status: 302; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type CodeScanningAnalysisSarifFile = string;

export type CodeScanningUploadSarifRequest = {
  body: {
    readonly commit_sha: CodeScanningAnalysisCommitSha;
    readonly ref: CodeScanningRef;
    readonly sarif: CodeScanningAnalysisSarifFile;
    readonly checkout_uri?: string;
    readonly started_at?: string;
    readonly tool_name?: string;
    readonly validate?: boolean;
  };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type CodeScanningSarifsReceipt = {
  readonly id?: CodeScanningAnalysisSarifId;
  readonly url?: string;
};

export type CodeScanningUploadSarifResponse =
  | { status: 202; body: CodeScanningSarifsReceipt }
  | { status: 400; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 413; body: unknown }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type CodeScanningGetSarifRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly sarif_id: string;
  };
  query: {};
  header: {};
};

export type CodeScanningSarifsStatus = {
  readonly processing_status?: 'pending' | 'complete' | 'failed';
  readonly analyses_url?: string | null;
  readonly errors?: ReadonlyArray<string> | null;
};

export type CodeScanningGetSarifResponse =
  | { status: 200; body: CodeScanningSarifsStatus }
  | { status: 403; body: BasicError }
  | { status: 404; body: unknown }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type ReposCodeownersErrorsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly ref?: string };
  header: {};
};

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

export type ReposCodeownersErrorsResponse =
  | { status: 200; body: CodeownersErrors }
  | { status: 404; body: unknown };

export type CodespacesListInRepositoryForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type CodespacesListInRepositoryForAuthenticatedUserResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly codespaces: ReadonlyArray<Codespace>;
      };
    }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 500; body: BasicError };

export type CodespacesCreateWithRepoForAuthenticatedUserRequest = {
  body: {
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
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type CodespacesCreateWithRepoForAuthenticatedUserResponse =
  | { status: 201; body: Codespace }
  | { status: 202; body: Codespace }
  | { status: 400; body: BasicError }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type CodespacesListDevcontainersInRepositoryForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type CodespacesListDevcontainersInRepositoryForAuthenticatedUserResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly devcontainers: ReadonlyArray<{
          readonly path: string;
          readonly name?: string;
        }>;
      };
    }
  | { status: 400; body: BasicError }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 500; body: BasicError };

export type CodespacesRepoMachinesForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly location?: string; readonly client_ip?: string };
  header: {};
};

export type CodespacesRepoMachinesForAuthenticatedUserResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly machines: ReadonlyArray<CodespaceMachine>;
      };
    }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 500; body: BasicError };

export type CodespacesPreFlightWithRepoForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly ref?: string; readonly client_ip?: string };
  header: {};
};

export type CodespacesPreFlightWithRepoForAuthenticatedUserResponse =
  | {
      status: 200;
      body: {
        readonly billable_owner?: SimpleUser;
        readonly defaults?: {
          readonly location: string;
          readonly devcontainer_path: string | null;
        };
      };
    }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type CodespacesListRepoSecretsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type CodespacesListRepoSecretsResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly secrets: ReadonlyArray<CodespacesSecret>;
  };
};

export type CodespacesGetRepoPublicKeyRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type CodespacesGetRepoPublicKeyResponse = {
  status: 200;
  body: CodespacesPublicKey;
};

export type CodespacesGetRepoSecretRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly secret_name: string;
  };
  query: {};
  header: {};
};

export type CodespacesGetRepoSecretResponse = {
  status: 200;
  body: CodespacesSecret;
};

export type CodespacesCreateOrUpdateRepoSecretRequest = {
  body: { readonly encrypted_value?: string; readonly key_id?: string };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly secret_name: string;
  };
  query: {};
  header: {};
};

export type CodespacesCreateOrUpdateRepoSecretResponse =
  | { status: 201; body: EmptyObject }
  | { status: 204; body: unknown };

export type CodespacesDeleteRepoSecretRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly secret_name: string;
  };
  query: {};
  header: {};
};

export type CodespacesDeleteRepoSecretResponse = { status: 204; body: unknown };

export type ReposListCollaboratorsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {
    readonly affiliation?: 'outside' | 'direct' | 'all';
    readonly permission?: 'pull' | 'triage' | 'push' | 'maintain' | 'admin';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

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

export type ReposListCollaboratorsResponse =
  | { status: 200; body: ReadonlyArray<Collaborator> }
  | { status: 404; body: BasicError };

export type ReposCheckCollaboratorRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly username: string;
  };
  query: {};
  header: {};
};

export type ReposCheckCollaboratorResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: unknown };

export type ReposAddCollaboratorRequest = {
  body: { readonly permission?: string } | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly username: string;
  };
  query: {};
  header: {};
};

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

export type ReposAddCollaboratorResponse =
  | { status: 201; body: RepositoryInvitation }
  | { status: 204; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposRemoveCollaboratorRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly username: string;
  };
  query: {};
  header: {};
};

export type ReposRemoveCollaboratorResponse = { status: 204; body: unknown };

export type ReposGetCollaboratorPermissionLevelRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly username: string;
  };
  query: {};
  header: {};
};

export type RepositoryCollaboratorPermission = {
  readonly permission: string;
  readonly role_name: string;
  readonly user: Collaborator;
};

export type ReposGetCollaboratorPermissionLevelResponse =
  | { status: 200; body: RepositoryCollaboratorPermission }
  | { status: 404; body: BasicError };

export type ReposListCommitCommentsForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type ReposListCommitCommentsForRepoResponse = {
  status: 200;
  body: ReadonlyArray<CommitComment>;
};

export type ReposGetCommitCommentRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly comment_id: number;
  };
  query: {};
  header: {};
};

export type ReposGetCommitCommentResponse =
  | { status: 200; body: CommitComment }
  | { status: 404; body: BasicError };

export type ReposUpdateCommitCommentRequest = {
  body: { readonly body: string };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly comment_id: number;
  };
  query: {};
  header: {};
};

export type ReposUpdateCommitCommentResponse =
  | { status: 200; body: CommitComment }
  | { status: 404; body: BasicError };

export type ReposDeleteCommitCommentRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly comment_id: number;
  };
  query: {};
  header: {};
};

export type ReposDeleteCommitCommentResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError };

export type ReactionsListForCommitCommentRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly comment_id: number;
  };
  query: {
    readonly content?:
      | '+1'
      | '-1'
      | 'laugh'
      | 'confused'
      | 'heart'
      | 'hooray'
      | 'rocket'
      | 'eyes';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ReactionsListForCommitCommentResponse =
  | { status: 200; body: ReadonlyArray<Reaction> }
  | { status: 404; body: BasicError };

export type ReactionsCreateForCommitCommentRequest = {
  body: {
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
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly comment_id: number;
  };
  query: {};
  header: {};
};

export type ReactionsCreateForCommitCommentResponse =
  | { status: 200; body: Reaction }
  | { status: 201; body: Reaction }
  | { status: 422; body: ValidationError };

export type ReactionsDeleteForCommitCommentRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly comment_id: number;
    readonly reaction_id: number;
  };
  query: {};
  header: {};
};

export type ReactionsDeleteForCommitCommentResponse = {
  status: 204;
  body: unknown;
};

export type ReposListCommitsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {
    readonly sha?: string;
    readonly path?: string;
    readonly author?: string;
    readonly since?: string;
    readonly until?: string;
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ReposListCommitsResponse =
  | { status: 200; body: ReadonlyArray<Commit> }
  | { status: 400; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 409; body: BasicError }
  | { status: 500; body: BasicError };

export type ReposListBranchesForHeadCommitRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly commit_sha: string;
  };
  query: {};
  header: {};
};

export type BranchShort = {
  readonly name: string;
  readonly commit: { readonly sha: string; readonly url: string };
  readonly protected: boolean;
};

export type ReposListBranchesForHeadCommitResponse =
  | { status: 200; body: ReadonlyArray<BranchShort> }
  | { status: 422; body: ValidationError };

export type ReposListCommentsForCommitRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly commit_sha: string;
  };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ReposListCommentsForCommitResponse = {
  status: 200;
  body: ReadonlyArray<CommitComment>;
};

export type ReposCreateCommitCommentRequest = {
  body: {
    readonly body: string;
    readonly path?: string;
    readonly position?: number;
    readonly line?: number;
  };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly commit_sha: string;
  };
  query: {};
  header: {};
};

export type ReposCreateCommitCommentResponse =
  | { status: 201; body: CommitComment }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposListPullRequestsAssociatedWithCommitRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly commit_sha: string;
  };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type ReposListPullRequestsAssociatedWithCommitResponse = {
  status: 200;
  body: ReadonlyArray<PullRequestSimple>;
};

export type ReposGetCommitRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string; readonly ref: string };
  query: { readonly page?: number; readonly per_page?: number };
  header: {};
};

export type ReposGetCommitResponse =
  | { status: 200; body: Commit }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError }
  | { status: 500; body: BasicError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type ChecksListForRefRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string; readonly ref: string };
  query: {
    readonly check_name?: string;
    readonly status?: 'queued' | 'in_progress' | 'completed';
    readonly filter?: 'latest' | 'all';
    readonly per_page?: number;
    readonly page?: number;
    readonly app_id?: number;
  };
  header: {};
};

export type ChecksListForRefResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly check_runs: ReadonlyArray<CheckRun>;
  };
};

export type ChecksListSuitesForRefRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string; readonly ref: string };
  query: {
    readonly app_id?: number;
    readonly check_name?: string;
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ChecksListSuitesForRefResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly check_suites: ReadonlyArray<CheckSuite>;
  };
};

export type ReposGetCombinedStatusForRefRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string; readonly ref: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type ReposGetCombinedStatusForRefResponse =
  | { status: 200; body: CombinedCommitStatus }
  | { status: 404; body: BasicError };

export type ReposListCommitStatusesForRefRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string; readonly ref: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type ReposListCommitStatusesForRefResponse =
  | { status: 200; body: ReadonlyArray<Status> }
  | { status: 301; body: BasicError };

export type ReposGetCommunityProfileMetricsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

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

export type ReposGetCommunityProfileMetricsResponse = {
  status: 200;
  body: CommunityProfile;
};

export type ReposCompareCommitsRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly basehead: string;
  };
  query: { readonly page?: number; readonly per_page?: number };
  header: {};
};

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

export type ReposCompareCommitsResponse =
  | { status: 200; body: CommitComparison }
  | { status: 404; body: BasicError }
  | { status: 500; body: BasicError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type ReposGetContentRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly path: string;
  };
  query: { readonly ref?: string };
  header: {};
};

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

export type ReposGetContentResponse =
  | {
      status: 200;
      body: ContentDirectory | ContentFile | SymlinkContent | SubmoduleContent;
    }
  | { status: 302; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type ReposCreateOrUpdateFileContentsRequest = {
  body: {
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
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly path: string;
  };
  query: {};
  header: {};
};

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

export type ReposCreateOrUpdateFileContentsResponse =
  | { status: 200; body: FileCommit }
  | { status: 201; body: FileCommit }
  | { status: 404; body: BasicError }
  | { status: 409; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposDeleteFileRequest = {
  body: {
    readonly message: string;
    readonly sha: string;
    readonly branch?: string;
    readonly committer?: { readonly name?: string; readonly email?: string };
    readonly author?: { readonly name?: string; readonly email?: string };
  };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly path: string;
  };
  query: {};
  header: {};
};

export type ReposDeleteFileResponse =
  | { status: 200; body: FileCommit }
  | { status: 404; body: BasicError }
  | { status: 409; body: BasicError }
  | { status: 422; body: ValidationError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type ReposListContributorsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {
    readonly anon?: string;
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

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

export type ReposListContributorsResponse =
  | { status: 200; body: ReadonlyArray<Contributor> }
  | { status: 204; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type DependabotListAlertsForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {
    readonly state?: string;
    readonly severity?: string;
    readonly ecosystem?: string;
    readonly package?: string;
    readonly manifest?: string;
    readonly scope?: 'development' | 'runtime';
    readonly sort?: 'created' | 'updated';
    readonly direction?: 'asc' | 'desc';
    readonly page?: number;
    readonly per_page?: number;
    readonly before?: string;
    readonly after?: string;
    readonly first?: number;
    readonly last?: number;
  };
  header: {};
};

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

export type DependabotListAlertsForRepoResponse =
  | { status: 200; body: ReadonlyArray<DependabotAlert> }
  | { status: 304; body: unknown }
  | { status: 400; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type DependabotGetAlertRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly alert_number: AlertNumber;
  };
  query: {};
  header: {};
};

export type DependabotGetAlertResponse =
  | { status: 200; body: DependabotAlert }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type DependabotUpdateAlertRequest = {
  body: {
    readonly state: 'dismissed' | 'open';
    readonly dismissed_reason?:
      | 'fix_started'
      | 'inaccurate'
      | 'no_bandwidth'
      | 'not_used'
      | 'tolerable_risk';
    readonly dismissed_comment?: string;
  };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly alert_number: AlertNumber;
  };
  query: {};
  header: {};
};

export type DependabotUpdateAlertResponse =
  | { status: 200; body: DependabotAlert }
  | { status: 400; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 409; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type DependabotListRepoSecretsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type DependabotSecret = {
  readonly name: string;
  readonly created_at: string;
  readonly updated_at: string;
};

export type DependabotListRepoSecretsResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly secrets: ReadonlyArray<DependabotSecret>;
  };
};

export type DependabotGetRepoPublicKeyRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type DependabotGetRepoPublicKeyResponse = {
  status: 200;
  body: DependabotPublicKey;
};

export type DependabotGetRepoSecretRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly secret_name: string;
  };
  query: {};
  header: {};
};

export type DependabotGetRepoSecretResponse = {
  status: 200;
  body: DependabotSecret;
};

export type DependabotCreateOrUpdateRepoSecretRequest = {
  body: { readonly encrypted_value?: string; readonly key_id?: string };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly secret_name: string;
  };
  query: {};
  header: {};
};

export type DependabotCreateOrUpdateRepoSecretResponse =
  | { status: 201; body: EmptyObject }
  | { status: 204; body: unknown };

export type DependabotDeleteRepoSecretRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly secret_name: string;
  };
  query: {};
  header: {};
};

export type DependabotDeleteRepoSecretResponse = { status: 204; body: unknown };

export type DependencyGraphDiffRangeRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly basehead: string;
  };
  query: { readonly name?: string };
  header: {};
};

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

export type DependencyGraphDiffRangeResponse =
  | { status: 200; body: DependencyGraphDiff }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type Metadata = unknown;

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
  readonly manifests?: unknown;
  readonly scanned: string;
};

export type DependencyGraphCreateRepositorySnapshotRequest = {
  body: Snapshot;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type DependencyGraphCreateRepositorySnapshotResponse = {
  status: 201;
  body: {
    readonly id: number;
    readonly created_at: string;
    readonly result: string;
    readonly message: string;
  };
};

export type ReposListDeploymentsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {
    readonly sha?: string;
    readonly ref?: string;
    readonly task?: string;
    readonly environment?: string | null;
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ReposListDeploymentsResponse = {
  status: 200;
  body: ReadonlyArray<Deployment>;
};

export type ReposCreateDeploymentRequest = {
  body: {
    readonly ref: string;
    readonly task?: string;
    readonly auto_merge?: boolean;
    readonly required_contexts?: ReadonlyArray<string>;
    readonly payload?: unknown | string;
    readonly environment?: string;
    readonly description?: string | null;
    readonly transient_environment?: boolean;
    readonly production_environment?: boolean;
  };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposCreateDeploymentResponse =
  | { status: 201; body: Deployment }
  | { status: 202; body: { readonly message?: string } }
  | { status: 409; body: unknown }
  | { status: 422; body: ValidationError };

export type ReposGetDeploymentRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly deployment_id: number;
  };
  query: {};
  header: {};
};

export type ReposGetDeploymentResponse =
  | { status: 200; body: Deployment }
  | { status: 404; body: BasicError };

export type ReposDeleteDeploymentRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly deployment_id: number;
  };
  query: {};
  header: {};
};

export type ReposDeleteDeploymentResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type ReposListDeploymentStatusesRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly deployment_id: number;
  };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type ReposListDeploymentStatusesResponse =
  | { status: 200; body: ReadonlyArray<DeploymentStatus> }
  | { status: 404; body: BasicError };

export type ReposCreateDeploymentStatusRequest = {
  body: {
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
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly deployment_id: number;
  };
  query: {};
  header: {};
};

export type ReposCreateDeploymentStatusResponse =
  | { status: 201; body: DeploymentStatus }
  | { status: 422; body: ValidationError };

export type ReposGetDeploymentStatusRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly deployment_id: number;
    readonly status_id: number;
  };
  query: {};
  header: {};
};

export type ReposGetDeploymentStatusResponse =
  | { status: 200; body: DeploymentStatus }
  | { status: 404; body: BasicError };

export type ReposCreateDispatchEventRequest = {
  body: { readonly event_type: string; readonly client_payload?: unknown };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposCreateDispatchEventResponse =
  | { status: 204; body: unknown }
  | { status: 422; body: ValidationError };

export type ReposGetAllEnvironmentsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type ReposGetAllEnvironmentsResponse = {
  status: 200;
  body: {
    readonly total_count?: number;
    readonly environments?: ReadonlyArray<Environment>;
  };
};

export type ReposGetEnvironmentRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly environment_name: string;
  };
  query: {};
  header: {};
};

export type ReposGetEnvironmentResponse = { status: 200; body: Environment };

export type ReposCreateOrUpdateEnvironmentRequest = {
  body:
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
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly environment_name: string;
  };
  query: {};
  header: {};
};

export type ReposCreateOrUpdateEnvironmentResponse =
  | { status: 200; body: Environment }
  | { status: 422; body: BasicError };

export type ReposDeleteAnEnvironmentRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly environment_name: string;
  };
  query: {};
  header: {};
};

export type ReposDeleteAnEnvironmentResponse = { status: 204; body: unknown };

export type ReposListDeploymentBranchPoliciesRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly environment_name: string;
  };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type DeploymentBranchPolicy = {
  readonly id?: number;
  readonly node_id?: string;
  readonly name?: string;
};

export type ReposListDeploymentBranchPoliciesResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly branch_policies: ReadonlyArray<DeploymentBranchPolicy>;
  };
};

export type DeploymentBranchPolicyNamePattern = { readonly name: string };

export type ReposCreateDeploymentBranchPolicyRequest = {
  body: DeploymentBranchPolicyNamePattern;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly environment_name: string;
  };
  query: {};
  header: {};
};

export type ReposCreateDeploymentBranchPolicyResponse =
  | { status: 200; body: DeploymentBranchPolicy }
  | { status: 303; body: unknown }
  | { status: 404; body: unknown };

export type ReposGetDeploymentBranchPolicyRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly environment_name: string;
    readonly branch_policy_id: number;
  };
  query: {};
  header: {};
};

export type ReposGetDeploymentBranchPolicyResponse = {
  status: 200;
  body: DeploymentBranchPolicy;
};

export type ReposUpdateDeploymentBranchPolicyRequest = {
  body: DeploymentBranchPolicyNamePattern;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly environment_name: string;
    readonly branch_policy_id: number;
  };
  query: {};
  header: {};
};

export type ReposUpdateDeploymentBranchPolicyResponse = {
  status: 200;
  body: DeploymentBranchPolicy;
};

export type ReposDeleteDeploymentBranchPolicyRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly environment_name: string;
    readonly branch_policy_id: number;
  };
  query: {};
  header: {};
};

export type ReposDeleteDeploymentBranchPolicyResponse = {
  status: 204;
  body: unknown;
};

export type ActivityListRepoEventsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ActivityListRepoEventsResponse = {
  status: 200;
  body: ReadonlyArray<Event>;
};

export type ReposListForksRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {
    readonly sort?: 'newest' | 'oldest' | 'stargazers' | 'watchers';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ReposListForksResponse =
  | { status: 200; body: ReadonlyArray<MinimalRepository> }
  | { status: 400; body: BasicError };

export type ReposCreateForkRequest = {
  body:
    | {
        readonly organization?: string;
        readonly name?: string;
        readonly default_branch_only?: boolean;
      }
    | null
    | undefined;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposCreateForkResponse =
  | { status: 202; body: FullRepository }
  | { status: 400; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type GitCreateBlobRequest = {
  body: { readonly content: string; readonly encoding?: string };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ShortBlob = { readonly url: string; readonly sha: string };

export type GitCreateBlobResponse =
  | { status: 201; body: ShortBlob }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 409; body: BasicError }
  | { status: 422; body: ValidationError };

export type GitGetBlobRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly file_sha: string;
  };
  query: {};
  header: {};
};

export type Blob = {
  readonly content: string;
  readonly encoding: string;
  readonly url: string;
  readonly sha: string;
  readonly size: number | null;
  readonly node_id: string;
  readonly highlighted_content?: string;
};

export type GitGetBlobResponse =
  | { status: 200; body: Blob }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type GitCreateCommitRequest = {
  body: {
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
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

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

export type GitCreateCommitResponse =
  | { status: 201; body: GitCommit }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type GitGetCommitRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly commit_sha: string;
  };
  query: {};
  header: {};
};

export type GitGetCommitResponse =
  | { status: 200; body: GitCommit }
  | { status: 404; body: BasicError };

export type GitListMatchingRefsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string; readonly ref: string };
  query: {};
  header: {};
};

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

export type GitListMatchingRefsResponse = {
  status: 200;
  body: ReadonlyArray<GitReference>;
};

export type GitGetRefRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string; readonly ref: string };
  query: {};
  header: {};
};

export type GitGetRefResponse =
  | { status: 200; body: GitReference }
  | { status: 404; body: BasicError };

export type GitCreateRefRequest = {
  body: { readonly ref: string; readonly sha: string; readonly key?: string };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type GitCreateRefResponse =
  | { status: 201; body: GitReference }
  | { status: 422; body: ValidationError };

export type GitUpdateRefRequest = {
  body: { readonly sha: string; readonly force?: boolean };
  path: { readonly owner: string; readonly repo: string; readonly ref: string };
  query: {};
  header: {};
};

export type GitUpdateRefResponse =
  | { status: 200; body: GitReference }
  | { status: 422; body: ValidationError };

export type GitDeleteRefRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string; readonly ref: string };
  query: {};
  header: {};
};

export type GitDeleteRefResponse =
  | { status: 204; body: unknown }
  | { status: 422; body: ValidationError };

export type GitCreateTagRequest = {
  body: {
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
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

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

export type GitCreateTagResponse =
  | { status: 201; body: GitTag }
  | { status: 422; body: ValidationError };

export type GitGetTagRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly tag_sha: string;
  };
  query: {};
  header: {};
};

export type GitGetTagResponse =
  | { status: 200; body: GitTag }
  | { status: 404; body: BasicError };

export type GitCreateTreeRequest = {
  body: {
    readonly tree: ReadonlyArray<{
      readonly path?: string;
      readonly mode?: '100644' | '100755' | '040000' | '160000' | '120000';
      readonly type?: 'blob' | 'tree' | 'commit';
      readonly sha?: string | null;
      readonly content?: string;
    }>;
    readonly base_tree?: string;
  };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

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

export type GitCreateTreeResponse =
  | { status: 201; body: GitTree }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type GitGetTreeRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly tree_sha: string;
  };
  query: { readonly recursive?: string };
  header: {};
};

export type GitGetTreeResponse =
  | { status: 200; body: GitTree }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposListWebhooksRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type ReposListWebhooksResponse =
  | { status: 200; body: ReadonlyArray<Webhook> }
  | { status: 404; body: BasicError };

export type ReposCreateWebhookRequest = {
  body:
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
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposCreateWebhookResponse =
  | { status: 201; body: Webhook }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposGetWebhookRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly hook_id: number;
  };
  query: {};
  header: {};
};

export type ReposGetWebhookResponse =
  | { status: 200; body: Webhook }
  | { status: 404; body: BasicError };

export type ReposUpdateWebhookRequest = {
  body: {
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
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly hook_id: number;
  };
  query: {};
  header: {};
};

export type ReposUpdateWebhookResponse =
  | { status: 200; body: Webhook }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposDeleteWebhookRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly hook_id: number;
  };
  query: {};
  header: {};
};

export type ReposDeleteWebhookResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError };

export type ReposGetWebhookConfigForRepoRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly hook_id: number;
  };
  query: {};
  header: {};
};

export type ReposGetWebhookConfigForRepoResponse = {
  status: 200;
  body: WebhookConfiguration;
};

export type ReposUpdateWebhookConfigForRepoRequest = {
  body:
    | {
        readonly url?: WebhookConfigUrl;
        readonly content_type?: WebhookConfigContentType;
        readonly secret?: WebhookConfigSecret;
        readonly insecure_ssl?: WebhookConfigInsecureSsl;
      }
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly hook_id: number;
  };
  query: {};
  header: {};
};

export type ReposUpdateWebhookConfigForRepoResponse = {
  status: 200;
  body: WebhookConfiguration;
};

export type ReposListWebhookDeliveriesRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly hook_id: number;
  };
  query: { readonly per_page?: number; readonly cursor?: string };
  header: {};
};

export type ReposListWebhookDeliveriesResponse =
  | { status: 200; body: ReadonlyArray<SimpleWebhookDelivery> }
  | { status: 400; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposGetWebhookDeliveryRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly hook_id: number;
    readonly delivery_id: number;
  };
  query: {};
  header: {};
};

export type ReposGetWebhookDeliveryResponse =
  | { status: 200; body: WebhookDelivery }
  | { status: 400; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposRedeliverWebhookDeliveryRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly hook_id: number;
    readonly delivery_id: number;
  };
  query: {};
  header: {};
};

export type ReposRedeliverWebhookDeliveryResponse =
  | { status: 202; body: unknown }
  | { status: 400; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposPingWebhookRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly hook_id: number;
  };
  query: {};
  header: {};
};

export type ReposPingWebhookResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError };

export type ReposTestPushWebhookRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly hook_id: number;
  };
  query: {};
  header: {};
};

export type ReposTestPushWebhookResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError };

export type MigrationsGetImportStatusRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

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

export type MigrationsGetImportStatusResponse =
  | { status: 200; body: Import }
  | { status: 404; body: BasicError };

export type MigrationsStartImportRequest = {
  body: {
    readonly vcs_url: string;
    readonly vcs?: 'subversion' | 'git' | 'mercurial' | 'tfvc';
    readonly vcs_username?: string;
    readonly vcs_password?: string;
    readonly tfvc_project?: string;
  };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type MigrationsStartImportResponse =
  | { status: 201; body: Import }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type MigrationsUpdateImportRequest = {
  body:
    | {
        readonly vcs_username?: string;
        readonly vcs_password?: string;
        readonly vcs?: 'subversion' | 'tfvc' | 'git' | 'mercurial';
        readonly tfvc_project?: string;
      }
    | null
    | undefined;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type MigrationsUpdateImportResponse = { status: 200; body: Import };

export type MigrationsCancelImportRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type MigrationsCancelImportResponse = { status: 204; body: unknown };

export type MigrationsGetCommitAuthorsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly since?: number };
  header: {};
};

export type PorterAuthor = {
  readonly id: number;
  readonly remote_id: string;
  readonly remote_name: string;
  readonly email: string;
  readonly name: string;
  readonly url: string;
  readonly import_url: string;
};

export type MigrationsGetCommitAuthorsResponse =
  | { status: 200; body: ReadonlyArray<PorterAuthor> }
  | { status: 404; body: BasicError };

export type MigrationsMapCommitAuthorRequest = {
  body: { readonly email?: string; readonly name?: string } | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly author_id: number;
  };
  query: {};
  header: {};
};

export type MigrationsMapCommitAuthorResponse =
  | { status: 200; body: PorterAuthor }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type MigrationsGetLargeFilesRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type PorterLargeFile = {
  readonly ref_name: string;
  readonly path: string;
  readonly oid: string;
  readonly size: number;
};

export type MigrationsGetLargeFilesResponse = {
  status: 200;
  body: ReadonlyArray<PorterLargeFile>;
};

export type MigrationsSetLfsPreferenceRequest = {
  body: { readonly use_lfs: 'opt_in' | 'opt_out' };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type MigrationsSetLfsPreferenceResponse =
  | { status: 200; body: Import }
  | { status: 422; body: ValidationError };

export type AppsGetRepoInstallationRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type AppsGetRepoInstallationResponse =
  | { status: 200; body: Installation }
  | { status: 301; body: BasicError }
  | { status: 404; body: BasicError };

export type InteractionsGetRestrictionsForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type InteractionsGetRestrictionsForRepoResponse = {
  status: 200;
  body: InteractionLimits | {};
};

export type InteractionsSetRestrictionsForRepoRequest = {
  body: InteractionRestrictions;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type InteractionsSetRestrictionsForRepoResponse =
  | { status: 200; body: InteractionLimits }
  | { status: 409; body: unknown };

export type InteractionsRemoveRestrictionsForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type InteractionsRemoveRestrictionsForRepoResponse =
  | { status: 204; body: unknown }
  | { status: 409; body: unknown };

export type ReposListInvitationsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ReposListInvitationsResponse = {
  status: 200;
  body: ReadonlyArray<RepositoryInvitation>;
};

export type ReposUpdateInvitationRequest = {
  body:
    | {
        readonly permissions?:
          | 'read'
          | 'write'
          | 'maintain'
          | 'triage'
          | 'admin';
      }
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly invitation_id: number;
  };
  query: {};
  header: {};
};

export type ReposUpdateInvitationResponse = {
  status: 200;
  body: RepositoryInvitation;
};

export type ReposDeleteInvitationRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly invitation_id: number;
  };
  query: {};
  header: {};
};

export type ReposDeleteInvitationResponse = { status: 204; body: unknown };

export type IssuesListForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {
    readonly milestone?: string;
    readonly state?: 'open' | 'closed' | 'all';
    readonly assignee?: string;
    readonly creator?: string;
    readonly mentioned?: string;
    readonly labels?: string;
    readonly sort?: 'created' | 'updated' | 'comments';
    readonly direction?: 'asc' | 'desc';
    readonly since?: string;
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type IssuesListForRepoResponse =
  | { status: 200; body: ReadonlyArray<Issue> }
  | { status: 301; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type IssuesCreateRequest = {
  body: {
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
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type IssuesCreateResponse =
  | { status: 201; body: Issue }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 410; body: BasicError }
  | { status: 422; body: ValidationError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type IssuesListCommentsForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {
    readonly sort?: 'created' | 'updated';
    readonly direction?: 'asc' | 'desc';
    readonly since?: string;
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type IssuesListCommentsForRepoResponse =
  | { status: 200; body: ReadonlyArray<IssueComment> }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type IssuesGetCommentRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly comment_id: number;
  };
  query: {};
  header: {};
};

export type IssuesGetCommentResponse =
  | { status: 200; body: IssueComment }
  | { status: 404; body: BasicError };

export type IssuesUpdateCommentRequest = {
  body: { readonly body: string };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly comment_id: number;
  };
  query: {};
  header: {};
};

export type IssuesUpdateCommentResponse =
  | { status: 200; body: IssueComment }
  | { status: 422; body: ValidationError };

export type IssuesDeleteCommentRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly comment_id: number;
  };
  query: {};
  header: {};
};

export type IssuesDeleteCommentResponse = { status: 204; body: unknown };

export type ReactionsListForIssueCommentRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly comment_id: number;
  };
  query: {
    readonly content?:
      | '+1'
      | '-1'
      | 'laugh'
      | 'confused'
      | 'heart'
      | 'hooray'
      | 'rocket'
      | 'eyes';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ReactionsListForIssueCommentResponse =
  | { status: 200; body: ReadonlyArray<Reaction> }
  | { status: 404; body: BasicError };

export type ReactionsCreateForIssueCommentRequest = {
  body: {
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
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly comment_id: number;
  };
  query: {};
  header: {};
};

export type ReactionsCreateForIssueCommentResponse =
  | { status: 200; body: Reaction }
  | { status: 201; body: Reaction }
  | { status: 422; body: ValidationError };

export type ReactionsDeleteForIssueCommentRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly comment_id: number;
    readonly reaction_id: number;
  };
  query: {};
  header: {};
};

export type ReactionsDeleteForIssueCommentResponse = {
  status: 204;
  body: unknown;
};

export type IssuesListEventsForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type IssuesListEventsForRepoResponse =
  | { status: 200; body: ReadonlyArray<IssueEvent> }
  | { status: 422; body: ValidationError };

export type IssuesGetEventRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly event_id: number;
  };
  query: {};
  header: {};
};

export type IssuesGetEventResponse =
  | { status: 200; body: IssueEvent }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 410; body: BasicError };

export type IssuesGetRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly issue_number: number;
  };
  query: {};
  header: {};
};

export type IssuesGetResponse =
  | { status: 200; body: Issue }
  | { status: 301; body: BasicError }
  | { status: 304; body: unknown }
  | { status: 404; body: BasicError }
  | { status: 410; body: BasicError };

export type IssuesUpdateRequest = {
  body:
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
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly issue_number: number;
  };
  query: {};
  header: {};
};

export type IssuesUpdateResponse =
  | { status: 200; body: Issue }
  | { status: 301; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 410; body: BasicError }
  | { status: 422; body: ValidationError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type IssuesAddAssigneesRequest = {
  body: { readonly assignees?: ReadonlyArray<string> } | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly issue_number: number;
  };
  query: {};
  header: {};
};

export type IssuesAddAssigneesResponse = { status: 201; body: Issue };

export type IssuesRemoveAssigneesRequest = {
  body: { readonly assignees?: ReadonlyArray<string> } | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly issue_number: number;
  };
  query: {};
  header: {};
};

export type IssuesRemoveAssigneesResponse = { status: 200; body: Issue };

export type IssuesListCommentsRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly issue_number: number;
  };
  query: {
    readonly since?: string;
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type IssuesListCommentsResponse =
  | { status: 200; body: ReadonlyArray<IssueComment> }
  | { status: 404; body: BasicError }
  | { status: 410; body: BasicError };

export type IssuesCreateCommentRequest = {
  body: { readonly body: string };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly issue_number: number;
  };
  query: {};
  header: {};
};

export type IssuesCreateCommentResponse =
  | { status: 201; body: IssueComment }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 410; body: BasicError }
  | { status: 422; body: ValidationError };

export type IssuesListEventsRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly issue_number: number;
  };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type IssuesListEventsResponse =
  | { status: 200; body: ReadonlyArray<IssueEventForIssue> }
  | { status: 410; body: BasicError };

export type IssuesListLabelsOnIssueRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly issue_number: number;
  };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type Label = {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly name: string;
  readonly description: string | null;
  readonly color: string;
  readonly default: boolean;
};

export type IssuesListLabelsOnIssueResponse =
  | { status: 200; body: ReadonlyArray<Label> }
  | { status: 301; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 410; body: BasicError };

export type IssuesAddLabelsRequest = {
  body:
    | { readonly labels?: ReadonlyArray<string> }
    | ReadonlyArray<string>
    | { readonly labels?: ReadonlyArray<{ readonly name: string }> }
    | ReadonlyArray<{ readonly name: string }>
    | string
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly issue_number: number;
  };
  query: {};
  header: {};
};

export type IssuesAddLabelsResponse =
  | { status: 200; body: ReadonlyArray<Label> }
  | { status: 301; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 410; body: BasicError }
  | { status: 422; body: ValidationError };

export type IssuesSetLabelsRequest = {
  body:
    | { readonly labels?: ReadonlyArray<string> }
    | ReadonlyArray<string>
    | { readonly labels?: ReadonlyArray<{ readonly name: string }> }
    | ReadonlyArray<{ readonly name: string }>
    | string
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly issue_number: number;
  };
  query: {};
  header: {};
};

export type IssuesSetLabelsResponse =
  | { status: 200; body: ReadonlyArray<Label> }
  | { status: 301; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 410; body: BasicError }
  | { status: 422; body: ValidationError };

export type IssuesRemoveAllLabelsRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly issue_number: number;
  };
  query: {};
  header: {};
};

export type IssuesRemoveAllLabelsResponse =
  | { status: 204; body: unknown }
  | { status: 301; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 410; body: BasicError };

export type IssuesRemoveLabelRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly issue_number: number;
    readonly name: string;
  };
  query: {};
  header: {};
};

export type IssuesRemoveLabelResponse =
  | { status: 200; body: ReadonlyArray<Label> }
  | { status: 301; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 410; body: BasicError };

export type IssuesLockRequest = {
  body:
    | {
        readonly lock_reason?: 'off-topic' | 'too heated' | 'resolved' | 'spam';
      }
    | null
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly issue_number: number;
  };
  query: {};
  header: {};
};

export type IssuesLockResponse =
  | { status: 204; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 410; body: BasicError }
  | { status: 422; body: ValidationError };

export type IssuesUnlockRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly issue_number: number;
  };
  query: {};
  header: {};
};

export type IssuesUnlockResponse =
  | { status: 204; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type ReactionsListForIssueRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly issue_number: number;
  };
  query: {
    readonly content?:
      | '+1'
      | '-1'
      | 'laugh'
      | 'confused'
      | 'heart'
      | 'hooray'
      | 'rocket'
      | 'eyes';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ReactionsListForIssueResponse =
  | { status: 200; body: ReadonlyArray<Reaction> }
  | { status: 404; body: BasicError }
  | { status: 410; body: BasicError };

export type ReactionsCreateForIssueRequest = {
  body: {
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
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly issue_number: number;
  };
  query: {};
  header: {};
};

export type ReactionsCreateForIssueResponse =
  | { status: 200; body: Reaction }
  | { status: 201; body: Reaction }
  | { status: 422; body: ValidationError };

export type ReactionsDeleteForIssueRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly issue_number: number;
    readonly reaction_id: number;
  };
  query: {};
  header: {};
};

export type ReactionsDeleteForIssueResponse = { status: 204; body: unknown };

export type IssuesListEventsForTimelineRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly issue_number: number;
  };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type TimelineEvent = unknown &
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

export type IssuesListEventsForTimelineResponse =
  | { status: 200; body: ReadonlyArray<TimelineEvent> }
  | { status: 404; body: BasicError }
  | { status: 410; body: BasicError };

export type ReposListDeployKeysRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type ReposListDeployKeysResponse = {
  status: 200;
  body: ReadonlyArray<DeployKey>;
};

export type ReposCreateDeployKeyRequest = {
  body: {
    readonly title?: string;
    readonly key: string;
    readonly read_only?: boolean;
  };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposCreateDeployKeyResponse =
  | { status: 201; body: DeployKey }
  | { status: 422; body: ValidationError };

export type ReposGetDeployKeyRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly key_id: number;
  };
  query: {};
  header: {};
};

export type ReposGetDeployKeyResponse =
  | { status: 200; body: DeployKey }
  | { status: 404; body: BasicError };

export type ReposDeleteDeployKeyRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly key_id: number;
  };
  query: {};
  header: {};
};

export type ReposDeleteDeployKeyResponse = { status: 204; body: unknown };

export type IssuesListLabelsForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type IssuesListLabelsForRepoResponse =
  | { status: 200; body: ReadonlyArray<Label> }
  | { status: 404; body: BasicError };

export type IssuesCreateLabelRequest = {
  body: {
    readonly name: string;
    readonly color?: string;
    readonly description?: string;
  };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type IssuesCreateLabelResponse =
  | { status: 201; body: Label }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type IssuesGetLabelRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly name: string;
  };
  query: {};
  header: {};
};

export type IssuesGetLabelResponse =
  | { status: 200; body: Label }
  | { status: 404; body: BasicError };

export type IssuesUpdateLabelRequest = {
  body:
    | {
        readonly new_name?: string;
        readonly color?: string;
        readonly description?: string;
      }
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly name: string;
  };
  query: {};
  header: {};
};

export type IssuesUpdateLabelResponse = { status: 200; body: Label };

export type IssuesDeleteLabelRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly name: string;
  };
  query: {};
  header: {};
};

export type IssuesDeleteLabelResponse = { status: 204; body: unknown };

export type ReposListLanguagesRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type Language = unknown;

export type ReposListLanguagesResponse = { status: 200; body: Language };

export type ReposEnableLfsForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposEnableLfsForRepoResponse =
  | { status: 202; body: unknown }
  | { status: 403; body: unknown };

export type ReposDisableLfsForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposDisableLfsForRepoResponse = { status: 204; body: unknown };

export type LicensesGetForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

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

export type LicensesGetForRepoResponse = { status: 200; body: LicenseContent };

export type ReposMergeUpstreamRequest = {
  body: { readonly branch: string };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type MergedUpstream = {
  readonly message?: string;
  readonly merge_type?: 'merge' | 'fast-forward' | 'none';
  readonly base_branch?: string;
};

export type ReposMergeUpstreamResponse =
  | { status: 200; body: MergedUpstream }
  | { status: 409; body: unknown }
  | { status: 422; body: unknown };

export type ReposMergeRequest = {
  body: {
    readonly base: string;
    readonly head: string;
    readonly commit_message?: string;
  };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposMergeResponse =
  | { status: 201; body: Commit }
  | { status: 204; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: unknown }
  | { status: 409; body: unknown }
  | { status: 422; body: ValidationError };

export type IssuesListMilestonesRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {
    readonly state?: 'open' | 'closed' | 'all';
    readonly sort?: 'due_on' | 'completeness';
    readonly direction?: 'asc' | 'desc';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type IssuesListMilestonesResponse =
  | { status: 200; body: ReadonlyArray<Milestone> }
  | { status: 404; body: BasicError };

export type IssuesCreateMilestoneRequest = {
  body: {
    readonly title: string;
    readonly state?: 'open' | 'closed';
    readonly description?: string;
    readonly due_on?: string;
  };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type IssuesCreateMilestoneResponse =
  | { status: 201; body: Milestone }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type IssuesGetMilestoneRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly milestone_number: number;
  };
  query: {};
  header: {};
};

export type IssuesGetMilestoneResponse =
  | { status: 200; body: Milestone }
  | { status: 404; body: BasicError };

export type IssuesUpdateMilestoneRequest = {
  body:
    | {
        readonly title?: string;
        readonly state?: 'open' | 'closed';
        readonly description?: string;
        readonly due_on?: string;
      }
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly milestone_number: number;
  };
  query: {};
  header: {};
};

export type IssuesUpdateMilestoneResponse = { status: 200; body: Milestone };

export type IssuesDeleteMilestoneRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly milestone_number: number;
  };
  query: {};
  header: {};
};

export type IssuesDeleteMilestoneResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError };

export type IssuesListLabelsForMilestoneRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly milestone_number: number;
  };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type IssuesListLabelsForMilestoneResponse = {
  status: 200;
  body: ReadonlyArray<Label>;
};

export type ActivityListRepoNotificationsForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {
    readonly all?: boolean;
    readonly participating?: boolean;
    readonly since?: string;
    readonly before?: string;
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ActivityListRepoNotificationsForAuthenticatedUserResponse = {
  status: 200;
  body: ReadonlyArray<Thread>;
};

export type ActivityMarkRepoNotificationsAsReadRequest = {
  body: { readonly last_read_at?: string } | undefined;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ActivityMarkRepoNotificationsAsReadResponse =
  | { status: 202; body: { readonly message?: string; readonly url?: string } }
  | { status: 205; body: unknown };

export type ReposGetPagesRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

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

export type ReposGetPagesResponse =
  | { status: 200; body: GitHubPages }
  | { status: 404; body: BasicError };

export type ReposCreatePagesSiteRequest = {
  body:
    | ({
        readonly build_type?: 'legacy' | 'workflow';
        readonly source?: {
          readonly branch: string;
          readonly path?: '/' | '/docs';
        };
      } & (unknown | unknown))
    | null;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposCreatePagesSiteResponse =
  | { status: 201; body: GitHubPages }
  | { status: 409; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposUpdateInformationAboutPagesSiteRequest = {
  body: {
    readonly cname?: string | null;
    readonly https_enforced?: boolean;
    readonly public?: boolean;
    readonly build_type?: 'legacy' | 'workflow';
    readonly source?:
      | 'gh-pages'
      | 'master'
      | 'master /docs'
      | { readonly branch: string; readonly path: '/' | '/docs' };
  } & (unknown | unknown | unknown | unknown | unknown);
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposUpdateInformationAboutPagesSiteResponse =
  | { status: 204; body: unknown }
  | { status: 400; body: BasicError }
  | { status: 409; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposDeletePagesSiteRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposDeletePagesSiteResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError }
  | { status: 409; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposListPagesBuildsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type ReposListPagesBuildsResponse = {
  status: 200;
  body: ReadonlyArray<PageBuild>;
};

export type ReposRequestPagesBuildRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type PageBuildStatus = { readonly url: string; readonly status: string };

export type ReposRequestPagesBuildResponse = {
  status: 201;
  body: PageBuildStatus;
};

export type ReposGetLatestPagesBuildRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposGetLatestPagesBuildResponse = { status: 200; body: PageBuild };

export type ReposGetPagesBuildRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly build_id: number;
  };
  query: {};
  header: {};
};

export type ReposGetPagesBuildResponse = { status: 200; body: PageBuild };

export type ReposCreatePagesDeploymentRequest = {
  body: {
    readonly artifact_url: string;
    readonly environment?: string;
    readonly pages_build_version: string;
    readonly oidc_token: string;
  };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposCreatePagesDeploymentResponse =
  | { status: 200; body: GitHubPages }
  | { status: 400; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposGetPagesHealthCheckRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

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

export type ReposGetPagesHealthCheckResponse =
  | { status: 200; body: PagesHealthCheckStatus }
  | { status: 202; body: EmptyObject }
  | { status: 400; body: unknown }
  | { status: 404; body: BasicError }
  | { status: 422; body: unknown };

export type ProjectsListForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {
    readonly state?: 'open' | 'closed' | 'all';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ProjectsListForRepoResponse =
  | { status: 200; body: ReadonlyArray<Project> }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 410; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type ProjectsCreateForRepoRequest = {
  body: { readonly name: string; readonly body?: string };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ProjectsCreateForRepoResponse =
  | { status: 201; body: Project }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 410; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type PullsListRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {
    readonly state?: 'open' | 'closed' | 'all';
    readonly head?: string;
    readonly base?: string;
    readonly sort?: 'created' | 'updated' | 'popularity' | 'long-running';
    readonly direction?: 'asc' | 'desc';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type PullsListResponse =
  | { status: 200; body: ReadonlyArray<PullRequestSimple> }
  | { status: 304; body: unknown }
  | { status: 422; body: ValidationError };

export type PullsCreateRequest = {
  body: {
    readonly title?: string;
    readonly head: string;
    readonly base: string;
    readonly body?: string;
    readonly maintainer_can_modify?: boolean;
    readonly draft?: boolean;
    readonly issue?: number;
  };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

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

export type PullsCreateResponse =
  | { status: 201; body: PullRequest }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationError };

export type PullsListReviewCommentsForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {
    readonly sort?: 'created' | 'updated' | 'created_at';
    readonly direction?: 'asc' | 'desc';
    readonly since?: string;
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type PullsListReviewCommentsForRepoResponse = {
  status: 200;
  body: ReadonlyArray<PullRequestReviewComment>;
};

export type PullsGetReviewCommentRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly comment_id: number;
  };
  query: {};
  header: {};
};

export type PullsGetReviewCommentResponse =
  | { status: 200; body: PullRequestReviewComment }
  | { status: 404; body: BasicError };

export type PullsUpdateReviewCommentRequest = {
  body: { readonly body: string };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly comment_id: number;
  };
  query: {};
  header: {};
};

export type PullsUpdateReviewCommentResponse = {
  status: 200;
  body: PullRequestReviewComment;
};

export type PullsDeleteReviewCommentRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly comment_id: number;
  };
  query: {};
  header: {};
};

export type PullsDeleteReviewCommentResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError };

export type ReactionsListForPullRequestReviewCommentRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly comment_id: number;
  };
  query: {
    readonly content?:
      | '+1'
      | '-1'
      | 'laugh'
      | 'confused'
      | 'heart'
      | 'hooray'
      | 'rocket'
      | 'eyes';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ReactionsListForPullRequestReviewCommentResponse =
  | { status: 200; body: ReadonlyArray<Reaction> }
  | { status: 404; body: BasicError };

export type ReactionsCreateForPullRequestReviewCommentRequest = {
  body: {
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
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly comment_id: number;
  };
  query: {};
  header: {};
};

export type ReactionsCreateForPullRequestReviewCommentResponse =
  | { status: 200; body: Reaction }
  | { status: 201; body: Reaction }
  | { status: 422; body: ValidationError };

export type ReactionsDeleteForPullRequestCommentRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly comment_id: number;
    readonly reaction_id: number;
  };
  query: {};
  header: {};
};

export type ReactionsDeleteForPullRequestCommentResponse = {
  status: 204;
  body: unknown;
};

export type PullsGetRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
  };
  query: {};
  header: {};
};

export type PullsGetResponse =
  | { status: 200; body: PullRequest }
  | { status: 304; body: unknown }
  | { status: 404; body: BasicError }
  | { status: 500; body: BasicError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type PullsUpdateRequest = {
  body:
    | {
        readonly title?: string;
        readonly body?: string;
        readonly state?: 'open' | 'closed';
        readonly base?: string;
        readonly maintainer_can_modify?: boolean;
      }
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
  };
  query: {};
  header: {};
};

export type PullsUpdateResponse =
  | { status: 200; body: PullRequest }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationError };

export type CodespacesCreateWithPrForAuthenticatedUserRequest = {
  body: {
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
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
  };
  query: {};
  header: {};
};

export type CodespacesCreateWithPrForAuthenticatedUserResponse =
  | { status: 201; body: Codespace }
  | { status: 202; body: Codespace }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type PullsListReviewCommentsRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
  };
  query: {
    readonly sort?: 'created' | 'updated';
    readonly direction?: 'asc' | 'desc';
    readonly since?: string;
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type PullsListReviewCommentsResponse = {
  status: 200;
  body: ReadonlyArray<PullRequestReviewComment>;
};

export type PullsCreateReviewCommentRequest = {
  body: {
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
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
  };
  query: {};
  header: {};
};

export type PullsCreateReviewCommentResponse =
  | { status: 201; body: PullRequestReviewComment }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationError };

export type PullsCreateReplyForReviewCommentRequest = {
  body: { readonly body: string };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
    readonly comment_id: number;
  };
  query: {};
  header: {};
};

export type PullsCreateReplyForReviewCommentResponse =
  | { status: 201; body: PullRequestReviewComment }
  | { status: 404; body: BasicError };

export type PullsListCommitsRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
  };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type PullsListCommitsResponse = {
  status: 200;
  body: ReadonlyArray<Commit>;
};

export type PullsListFilesRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
  };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type PullsListFilesResponse =
  | { status: 200; body: ReadonlyArray<DiffEntry> }
  | { status: 422; body: ValidationError }
  | { status: 500; body: BasicError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type PullsCheckIfMergedRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
  };
  query: {};
  header: {};
};

export type PullsCheckIfMergedResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: unknown };

export type PullsMergeRequest = {
  body:
    | {
        readonly commit_title?: string;
        readonly commit_message?: string;
        readonly sha?: string;
        readonly merge_method?: 'merge' | 'squash' | 'rebase';
      }
    | null
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
  };
  query: {};
  header: {};
};

export type PullRequestMergeResult = {
  readonly sha: string;
  readonly merged: boolean;
  readonly message: string;
};

export type PullsMergeResponse =
  | { status: 200; body: PullRequestMergeResult }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | {
      status: 405;
      body: { readonly message?: string; readonly documentation_url?: string };
    }
  | {
      status: 409;
      body: { readonly message?: string; readonly documentation_url?: string };
    }
  | { status: 422; body: ValidationError };

export type PullsListRequestedReviewersRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
  };
  query: {};
  header: {};
};

export type PullRequestReviewRequest = {
  readonly users: ReadonlyArray<SimpleUser>;
  readonly teams: ReadonlyArray<Team>;
};

export type PullsListRequestedReviewersResponse = {
  status: 200;
  body: PullRequestReviewRequest;
};

export type PullsRequestReviewersRequest = {
  body:
    | ({
        readonly reviewers?: ReadonlyArray<string>;
        readonly team_reviewers?: ReadonlyArray<string>;
      } & (unknown | unknown))
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
  };
  query: {};
  header: {};
};

export type PullsRequestReviewersResponse =
  | { status: 201; body: PullRequestSimple }
  | { status: 403; body: BasicError }
  | { status: 422; body: unknown };

export type PullsRemoveRequestedReviewersRequest = {
  body: {
    readonly reviewers: ReadonlyArray<string>;
    readonly team_reviewers?: ReadonlyArray<string>;
  };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
  };
  query: {};
  header: {};
};

export type PullsRemoveRequestedReviewersResponse =
  | { status: 200; body: PullRequestSimple }
  | { status: 422; body: ValidationError };

export type PullsListReviewsRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
  };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type PullsListReviewsResponse = {
  status: 200;
  body: ReadonlyArray<PullRequestReview>;
};

export type PullsCreateReviewRequest = {
  body:
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
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
  };
  query: {};
  header: {};
};

export type PullsCreateReviewResponse =
  | { status: 200; body: PullRequestReview }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type PullsGetReviewRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
    readonly review_id: number;
  };
  query: {};
  header: {};
};

export type PullsGetReviewResponse =
  | { status: 200; body: PullRequestReview }
  | { status: 404; body: BasicError };

export type PullsUpdateReviewRequest = {
  body: { readonly body: string };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
    readonly review_id: number;
  };
  query: {};
  header: {};
};

export type PullsUpdateReviewResponse =
  | { status: 200; body: PullRequestReview }
  | { status: 422; body: ValidationErrorSimple };

export type PullsDeletePendingReviewRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
    readonly review_id: number;
  };
  query: {};
  header: {};
};

export type PullsDeletePendingReviewResponse =
  | { status: 200; body: PullRequestReview }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type PullsListCommentsForReviewRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
    readonly review_id: number;
  };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type PullsListCommentsForReviewResponse =
  | { status: 200; body: ReadonlyArray<LegacyReviewComment> }
  | { status: 404; body: BasicError };

export type PullsDismissReviewRequest = {
  body: { readonly message: string; readonly event?: 'DISMISS' };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
    readonly review_id: number;
  };
  query: {};
  header: {};
};

export type PullsDismissReviewResponse =
  | { status: 200; body: PullRequestReview }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type PullsSubmitReviewRequest = {
  body: {
    readonly body?: string;
    readonly event: 'APPROVE' | 'REQUEST_CHANGES' | 'COMMENT';
  };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
    readonly review_id: number;
  };
  query: {};
  header: {};
};

export type PullsSubmitReviewResponse =
  | { status: 200; body: PullRequestReview }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type PullsUpdateBranchRequest = {
  body: { readonly expected_head_sha?: string } | null | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly pull_number: number;
  };
  query: {};
  header: {};
};

export type PullsUpdateBranchResponse =
  | { status: 202; body: { readonly message?: string; readonly url?: string } }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposGetReadmeRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly ref?: string };
  header: {};
};

export type ReposGetReadmeResponse =
  | { status: 200; body: ContentFile }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposGetReadmeInDirectoryRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string; readonly dir: string };
  query: { readonly ref?: string };
  header: {};
};

export type ReposGetReadmeInDirectoryResponse =
  | { status: 200; body: ContentFile }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposListReleasesRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type ReposListReleasesResponse =
  | { status: 200; body: ReadonlyArray<Release> }
  | { status: 404; body: BasicError };

export type ReposCreateReleaseRequest = {
  body: {
    readonly tag_name: string;
    readonly target_commitish?: string;
    readonly name?: string;
    readonly body?: string;
    readonly draft?: boolean;
    readonly prerelease?: boolean;
    readonly discussion_category_name?: string;
    readonly generate_release_notes?: boolean;
  };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposCreateReleaseResponse =
  | { status: 201; body: Release }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposGetReleaseAssetRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly asset_id: number;
  };
  query: {};
  header: {};
};

export type ReposGetReleaseAssetResponse =
  | { status: 200; body: ReleaseAsset }
  | { status: 302; body: unknown }
  | { status: 404; body: BasicError };

export type ReposUpdateReleaseAssetRequest = {
  body:
    | {
        readonly name?: string;
        readonly label?: string;
        readonly state?: string;
      }
    | undefined;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly asset_id: number;
  };
  query: {};
  header: {};
};

export type ReposUpdateReleaseAssetResponse = {
  status: 200;
  body: ReleaseAsset;
};

export type ReposDeleteReleaseAssetRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly asset_id: number;
  };
  query: {};
  header: {};
};

export type ReposDeleteReleaseAssetResponse = { status: 204; body: unknown };

export type ReposGenerateReleaseNotesRequest = {
  body: {
    readonly tag_name: string;
    readonly target_commitish?: string;
    readonly previous_tag_name?: string;
    readonly configuration_file_path?: string;
  };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type GeneratedReleaseNotesContent = {
  readonly name: string;
  readonly body: string;
};

export type ReposGenerateReleaseNotesResponse =
  | { status: 200; body: GeneratedReleaseNotesContent }
  | { status: 404; body: BasicError };

export type ReposGetLatestReleaseRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposGetLatestReleaseResponse = { status: 200; body: Release };

export type ReposGetReleaseByTagRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string; readonly tag: string };
  query: {};
  header: {};
};

export type ReposGetReleaseByTagResponse =
  | { status: 200; body: Release }
  | { status: 404; body: BasicError };

export type ReposGetReleaseRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly release_id: number;
  };
  query: {};
  header: {};
};

export type ReposGetReleaseResponse =
  | { status: 200; body: Release }
  | { status: 404; body: BasicError };

export type ReposUpdateReleaseRequest = {
  body:
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
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly release_id: number;
  };
  query: {};
  header: {};
};

export type ReposUpdateReleaseResponse =
  | { status: 200; body: Release }
  | { status: 404; body: BasicError };

export type ReposDeleteReleaseRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly release_id: number;
  };
  query: {};
  header: {};
};

export type ReposDeleteReleaseResponse = { status: 204; body: unknown };

export type ReposListReleaseAssetsRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly release_id: number;
  };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ReposListReleaseAssetsResponse = {
  status: 200;
  body: ReadonlyArray<ReleaseAsset>;
};

export type ReposUploadReleaseAssetRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly release_id: number;
  };
  query: { readonly name: string; readonly label?: string };
  header: {};
};

export type ReposUploadReleaseAssetResponse =
  | { status: 201; body: ReleaseAsset }
  | { status: 422; body: unknown };

export type ReactionsListForReleaseRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly release_id: number;
  };
  query: {
    readonly content?: '+1' | 'laugh' | 'heart' | 'hooray' | 'rocket' | 'eyes';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ReactionsListForReleaseResponse =
  | { status: 200; body: ReadonlyArray<Reaction> }
  | { status: 404; body: BasicError };

export type ReactionsCreateForReleaseRequest = {
  body: {
    readonly content: '+1' | 'laugh' | 'heart' | 'hooray' | 'rocket' | 'eyes';
  };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly release_id: number;
  };
  query: {};
  header: {};
};

export type ReactionsCreateForReleaseResponse =
  | { status: 200; body: Reaction }
  | { status: 201; body: Reaction }
  | { status: 422; body: ValidationError };

export type ReactionsDeleteForReleaseRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly release_id: number;
    readonly reaction_id: number;
  };
  query: {};
  header: {};
};

export type ReactionsDeleteForReleaseResponse = { status: 204; body: unknown };

export type SecretScanningListAlertsForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {
    readonly state?: 'open' | 'resolved';
    readonly secret_type?: string;
    readonly resolution?: string;
    readonly sort?: 'created' | 'updated';
    readonly direction?: 'asc' | 'desc';
    readonly page?: number;
    readonly per_page?: number;
    readonly before?: string;
    readonly after?: string;
  };
  header: {};
};

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

export type SecretScanningListAlertsForRepoResponse =
  | { status: 200; body: ReadonlyArray<SecretScanningAlert> }
  | { status: 404; body: unknown }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type SecretScanningGetAlertRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly alert_number: AlertNumber;
  };
  query: {};
  header: {};
};

export type SecretScanningGetAlertResponse =
  | { status: 200; body: SecretScanningAlert }
  | { status: 304; body: unknown }
  | { status: 404; body: unknown }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type SecretScanningAlertResolutionComment = string | null;

export type SecretScanningUpdateAlertRequest = {
  body: {
    readonly state: SecretScanningAlertState;
    readonly resolution?: SecretScanningAlertResolution;
    readonly resolution_comment?: SecretScanningAlertResolutionComment;
  };
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly alert_number: AlertNumber;
  };
  query: {};
  header: {};
};

export type SecretScanningUpdateAlertResponse =
  | { status: 200; body: SecretScanningAlert }
  | { status: 400; body: unknown }
  | { status: 404; body: unknown }
  | { status: 422; body: unknown }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type SecretScanningListLocationsForAlertRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly alert_number: AlertNumber;
  };
  query: { readonly page?: number; readonly per_page?: number };
  header: {};
};

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

export type SecretScanningListLocationsForAlertResponse =
  | { status: 200; body: ReadonlyArray<SecretScanningLocation> }
  | { status: 404; body: unknown }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type ActivityListStargazersForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type Stargazer = {
  readonly starred_at: string;
  readonly user: SimpleUser;
};

export type ActivityListStargazersForRepoResponse =
  | { status: 200; body: ReadonlyArray<SimpleUser> | ReadonlyArray<Stargazer> }
  | { status: 422; body: ValidationError };

export type ReposGetCodeFrequencyStatsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type CodeFrequencyStat = ReadonlyArray<number>;

export type ReposGetCodeFrequencyStatsResponse =
  | { status: 200; body: ReadonlyArray<CodeFrequencyStat> }
  | { status: 202; body: unknown }
  | { status: 204; body: unknown };

export type ReposGetCommitActivityStatsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type CommitActivity = {
  readonly days: ReadonlyArray<number>;
  readonly total: number;
  readonly week: number;
};

export type ReposGetCommitActivityStatsResponse =
  | { status: 200; body: ReadonlyArray<CommitActivity> }
  | { status: 202; body: unknown }
  | { status: 204; body: unknown };

export type ReposGetContributorsStatsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

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

export type ReposGetContributorsStatsResponse =
  | { status: 200; body: ReadonlyArray<ContributorActivity> }
  | { status: 202; body: unknown }
  | { status: 204; body: unknown };

export type ReposGetParticipationStatsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ParticipationStats = {
  readonly all: ReadonlyArray<number>;
  readonly owner: ReadonlyArray<number>;
};

export type ReposGetParticipationStatsResponse =
  | { status: 200; body: ParticipationStats }
  | { status: 404; body: BasicError };

export type ReposGetPunchCardStatsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposGetPunchCardStatsResponse =
  | { status: 200; body: ReadonlyArray<CodeFrequencyStat> }
  | { status: 204; body: unknown };

export type ReposCreateCommitStatusRequest = {
  body: {
    readonly state: 'error' | 'failure' | 'pending' | 'success';
    readonly target_url?: string | null;
    readonly description?: string | null;
    readonly context?: string;
  };
  path: { readonly owner: string; readonly repo: string; readonly sha: string };
  query: {};
  header: {};
};

export type ReposCreateCommitStatusResponse = { status: 201; body: Status };

export type ActivityListWatchersForRepoRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ActivityListWatchersForRepoResponse = {
  status: 200;
  body: ReadonlyArray<SimpleUser>;
};

export type ActivityGetRepoSubscriptionRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ActivityGetRepoSubscriptionResponse =
  | { status: 200; body: RepositoryInvitation }
  | { status: 403; body: BasicError }
  | { status: 404; body: unknown };

export type ActivitySetRepoSubscriptionRequest = {
  body:
    | { readonly subscribed?: boolean; readonly ignored?: boolean }
    | undefined;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ActivitySetRepoSubscriptionResponse = {
  status: 200;
  body: RepositoryInvitation;
};

export type ActivityDeleteRepoSubscriptionRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ActivityDeleteRepoSubscriptionResponse = {
  status: 204;
  body: unknown;
};

export type ReposListTagsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type Tag = {
  readonly name: string;
  readonly commit: { readonly sha: string; readonly url: string };
  readonly zipball_url: string;
  readonly tarball_url: string;
  readonly node_id: string;
};

export type ReposListTagsResponse = { status: 200; body: ReadonlyArray<Tag> };

export type ReposListTagProtectionRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type TagProtection = {
  readonly id?: number;
  readonly created_at?: string;
  readonly updated_at?: string;
  readonly enabled?: boolean;
  readonly pattern: string;
};

export type ReposListTagProtectionResponse =
  | { status: 200; body: ReadonlyArray<TagProtection> }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type ReposCreateTagProtectionRequest = {
  body: { readonly pattern: string };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposCreateTagProtectionResponse =
  | { status: 201; body: TagProtection }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type ReposDeleteTagProtectionRequest = {
  body: unknown;
  path: {
    readonly owner: string;
    readonly repo: string;
    readonly tag_protection_id: number;
  };
  query: {};
  header: {};
};

export type ReposDeleteTagProtectionResponse =
  | { status: 204; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type ReposDownloadTarballArchiveRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string; readonly ref: string };
  query: {};
  header: {};
};

export type ReposDownloadTarballArchiveResponse = {
  status: 302;
  body: unknown;
};

export type ReposListTeamsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ReposListTeamsResponse = { status: 200; body: ReadonlyArray<Team> };

export type ReposGetAllTopicsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly page?: number; readonly per_page?: number };
  header: {};
};

export type Topic = { readonly names: ReadonlyArray<string> };

export type ReposGetAllTopicsResponse =
  | { status: 200; body: Topic }
  | { status: 404; body: BasicError };

export type ReposReplaceAllTopicsRequest = {
  body: { readonly names: ReadonlyArray<string> };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposReplaceAllTopicsResponse =
  | { status: 200; body: Topic }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type ReposGetClonesRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per?: '' | 'day' | 'week' };
  header: {};
};

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

export type ReposGetClonesResponse =
  | { status: 200; body: CloneTraffic }
  | { status: 403; body: BasicError };

export type ReposGetTopPathsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ContentTraffic = {
  readonly path: string;
  readonly title: string;
  readonly count: number;
  readonly uniques: number;
};

export type ReposGetTopPathsResponse =
  | { status: 200; body: ReadonlyArray<ContentTraffic> }
  | { status: 403; body: BasicError };

export type ReposGetTopReferrersRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReferrerTraffic = {
  readonly referrer: string;
  readonly count: number;
  readonly uniques: number;
};

export type ReposGetTopReferrersResponse =
  | { status: 200; body: ReadonlyArray<ReferrerTraffic> }
  | { status: 403; body: BasicError };

export type ReposGetViewsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: { readonly per?: '' | 'day' | 'week' };
  header: {};
};

export type ViewTraffic = {
  readonly count: number;
  readonly uniques: number;
  readonly views: ReadonlyArray<Traffic>;
};

export type ReposGetViewsResponse =
  | { status: 200; body: ViewTraffic }
  | { status: 403; body: BasicError };

export type ReposTransferRequest = {
  body: {
    readonly new_owner: string;
    readonly team_ids?: ReadonlyArray<number>;
  };
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposTransferResponse = { status: 202; body: MinimalRepository };

export type ReposCheckVulnerabilityAlertsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposCheckVulnerabilityAlertsResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: unknown };

export type ReposEnableVulnerabilityAlertsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposEnableVulnerabilityAlertsResponse = {
  status: 204;
  body: unknown;
};

export type ReposDisableVulnerabilityAlertsRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ReposDisableVulnerabilityAlertsResponse = {
  status: 204;
  body: unknown;
};

export type ReposDownloadZipballArchiveRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string; readonly ref: string };
  query: {};
  header: {};
};

export type ReposDownloadZipballArchiveResponse = {
  status: 302;
  body: unknown;
};

export type ReposCreateUsingTemplateRequest = {
  body: {
    readonly owner?: string;
    readonly name: string;
    readonly description?: string;
    readonly include_all_branches?: boolean;
    readonly private?: boolean;
  };
  path: { readonly template_owner: string; readonly template_repo: string };
  query: {};
  header: {};
};

export type ReposCreateUsingTemplateResponse = {
  status: 201;
  body: Repository;
};

export type ReposListPublicRequest = {
  body: unknown;
  path: {};
  query: { readonly since?: number };
  header: {};
};

export type ReposListPublicResponse =
  | { status: 200; body: ReadonlyArray<MinimalRepository> }
  | { status: 304; body: unknown }
  | { status: 422; body: ValidationError };

export type ActionsListEnvironmentSecretsRequest = {
  body: unknown;
  path: { readonly repository_id: number; readonly environment_name: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ActionsListEnvironmentSecretsResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly secrets: ReadonlyArray<ActionsSecret>;
  };
};

export type ActionsGetEnvironmentPublicKeyRequest = {
  body: unknown;
  path: { readonly repository_id: number; readonly environment_name: string };
  query: {};
  header: {};
};

export type ActionsGetEnvironmentPublicKeyResponse = {
  status: 200;
  body: ActionsPublicKey;
};

export type ActionsGetEnvironmentSecretRequest = {
  body: unknown;
  path: {
    readonly repository_id: number;
    readonly environment_name: string;
    readonly secret_name: string;
  };
  query: {};
  header: {};
};

export type ActionsGetEnvironmentSecretResponse = {
  status: 200;
  body: ActionsSecret;
};

export type ActionsCreateOrUpdateEnvironmentSecretRequest = {
  body: { readonly encrypted_value: string; readonly key_id: string };
  path: {
    readonly repository_id: number;
    readonly environment_name: string;
    readonly secret_name: string;
  };
  query: {};
  header: {};
};

export type ActionsCreateOrUpdateEnvironmentSecretResponse =
  | { status: 201; body: EmptyObject }
  | { status: 204; body: unknown };

export type ActionsDeleteEnvironmentSecretRequest = {
  body: unknown;
  path: {
    readonly repository_id: number;
    readonly environment_name: string;
    readonly secret_name: string;
  };
  query: {};
  header: {};
};

export type ActionsDeleteEnvironmentSecretResponse = {
  status: 204;
  body: unknown;
};

export type SearchCodeRequest = {
  body: unknown;
  path: {};
  query: {
    readonly q: string;
    readonly sort?: 'indexed';
    readonly order?: 'desc' | 'asc';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

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

export type SearchCodeResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly incomplete_results: boolean;
        readonly items: ReadonlyArray<CodeSearchResultItem>;
      };
    }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type SearchCommitsRequest = {
  body: unknown;
  path: {};
  query: {
    readonly q: string;
    readonly sort?: 'author-date' | 'committer-date';
    readonly order?: 'desc' | 'asc';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

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

export type SearchCommitsResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly incomplete_results: boolean;
        readonly items: ReadonlyArray<CommitSearchResultItem>;
      };
    }
  | { status: 304; body: unknown };

export type SearchIssuesAndPullRequestsRequest = {
  body: unknown;
  path: {};
  query: {
    readonly q: string;
    readonly sort?:
      | 'comments'
      | 'reactions'
      | 'reactions-+1'
      | 'reactions--1'
      | 'reactions-smile'
      | 'reactions-thinking_face'
      | 'reactions-heart'
      | 'reactions-tada'
      | 'interactions'
      | 'created'
      | 'updated';
    readonly order?: 'desc' | 'asc';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

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

export type SearchIssuesAndPullRequestsResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly incomplete_results: boolean;
        readonly items: ReadonlyArray<IssueSearchResultItem>;
      };
    }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type SearchLabelsRequest = {
  body: unknown;
  path: {};
  query: {
    readonly repository_id: number;
    readonly q: string;
    readonly sort?: 'created' | 'updated';
    readonly order?: 'desc' | 'asc';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

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

export type SearchLabelsResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly incomplete_results: boolean;
        readonly items: ReadonlyArray<LabelSearchResultItem>;
      };
    }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type SearchReposRequest = {
  body: unknown;
  path: {};
  query: {
    readonly q: string;
    readonly sort?: 'stars' | 'forks' | 'help-wanted-issues' | 'updated';
    readonly order?: 'desc' | 'asc';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

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

export type SearchReposResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly incomplete_results: boolean;
        readonly items: ReadonlyArray<RepoSearchResultItem>;
      };
    }
  | { status: 304; body: unknown }
  | { status: 422; body: ValidationError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type SearchTopicsRequest = {
  body: unknown;
  path: {};
  query: {
    readonly q: string;
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

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

export type SearchTopicsResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly incomplete_results: boolean;
        readonly items: ReadonlyArray<TopicSearchResultItem>;
      };
    }
  | { status: 304; body: unknown };

export type SearchUsersRequest = {
  body: unknown;
  path: {};
  query: {
    readonly q: string;
    readonly sort?: 'followers' | 'repositories' | 'joined';
    readonly order?: 'desc' | 'asc';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

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

export type SearchUsersResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly incomplete_results: boolean;
        readonly items: ReadonlyArray<UserSearchResultItem>;
      };
    }
  | { status: 304; body: unknown }
  | { status: 422; body: ValidationError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type TeamsGetLegacyRequest = {
  body: unknown;
  path: { readonly team_id: number };
  query: {};
  header: {};
};

export type TeamsGetLegacyResponse =
  | { status: 200; body: FullTeam }
  | { status: 404; body: BasicError };

export type TeamsUpdateLegacyRequest = {
  body: {
    readonly name: string;
    readonly description?: string;
    readonly privacy?: 'secret' | 'closed';
    readonly permission?: 'pull' | 'push' | 'admin';
    readonly parent_team_id?: number | null;
  };
  path: { readonly team_id: number };
  query: {};
  header: {};
};

export type TeamsUpdateLegacyResponse =
  | { status: 200; body: FullTeam }
  | { status: 201; body: FullTeam }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type TeamsDeleteLegacyRequest = {
  body: unknown;
  path: { readonly team_id: number };
  query: {};
  header: {};
};

export type TeamsDeleteLegacyResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type TeamsListDiscussionsLegacyRequest = {
  body: unknown;
  path: { readonly team_id: number };
  query: {
    readonly direction?: 'asc' | 'desc';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type TeamsListDiscussionsLegacyResponse = {
  status: 200;
  body: ReadonlyArray<TeamDiscussion>;
};

export type TeamsCreateDiscussionLegacyRequest = {
  body: {
    readonly title: string;
    readonly body: string;
    readonly private?: boolean;
  };
  path: { readonly team_id: number };
  query: {};
  header: {};
};

export type TeamsCreateDiscussionLegacyResponse = {
  status: 201;
  body: TeamDiscussion;
};

export type TeamsGetDiscussionLegacyRequest = {
  body: unknown;
  path: { readonly team_id: number; readonly discussion_number: number };
  query: {};
  header: {};
};

export type TeamsGetDiscussionLegacyResponse = {
  status: 200;
  body: TeamDiscussion;
};

export type TeamsUpdateDiscussionLegacyRequest = {
  body: { readonly title?: string; readonly body?: string } | undefined;
  path: { readonly team_id: number; readonly discussion_number: number };
  query: {};
  header: {};
};

export type TeamsUpdateDiscussionLegacyResponse = {
  status: 200;
  body: TeamDiscussion;
};

export type TeamsDeleteDiscussionLegacyRequest = {
  body: unknown;
  path: { readonly team_id: number; readonly discussion_number: number };
  query: {};
  header: {};
};

export type TeamsDeleteDiscussionLegacyResponse = {
  status: 204;
  body: unknown;
};

export type TeamsListDiscussionCommentsLegacyRequest = {
  body: unknown;
  path: { readonly team_id: number; readonly discussion_number: number };
  query: {
    readonly direction?: 'asc' | 'desc';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type TeamsListDiscussionCommentsLegacyResponse = {
  status: 200;
  body: ReadonlyArray<TeamDiscussionComment>;
};

export type TeamsCreateDiscussionCommentLegacyRequest = {
  body: { readonly body: string };
  path: { readonly team_id: number; readonly discussion_number: number };
  query: {};
  header: {};
};

export type TeamsCreateDiscussionCommentLegacyResponse = {
  status: 201;
  body: TeamDiscussionComment;
};

export type TeamsGetDiscussionCommentLegacyRequest = {
  body: unknown;
  path: {
    readonly team_id: number;
    readonly discussion_number: number;
    readonly comment_number: number;
  };
  query: {};
  header: {};
};

export type TeamsGetDiscussionCommentLegacyResponse = {
  status: 200;
  body: TeamDiscussionComment;
};

export type TeamsUpdateDiscussionCommentLegacyRequest = {
  body: { readonly body: string };
  path: {
    readonly team_id: number;
    readonly discussion_number: number;
    readonly comment_number: number;
  };
  query: {};
  header: {};
};

export type TeamsUpdateDiscussionCommentLegacyResponse = {
  status: 200;
  body: TeamDiscussionComment;
};

export type TeamsDeleteDiscussionCommentLegacyRequest = {
  body: unknown;
  path: {
    readonly team_id: number;
    readonly discussion_number: number;
    readonly comment_number: number;
  };
  query: {};
  header: {};
};

export type TeamsDeleteDiscussionCommentLegacyResponse = {
  status: 204;
  body: unknown;
};

export type ReactionsListForTeamDiscussionCommentLegacyRequest = {
  body: unknown;
  path: {
    readonly team_id: number;
    readonly discussion_number: number;
    readonly comment_number: number;
  };
  query: {
    readonly content?:
      | '+1'
      | '-1'
      | 'laugh'
      | 'confused'
      | 'heart'
      | 'hooray'
      | 'rocket'
      | 'eyes';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ReactionsListForTeamDiscussionCommentLegacyResponse = {
  status: 200;
  body: ReadonlyArray<Reaction>;
};

export type ReactionsCreateForTeamDiscussionCommentLegacyRequest = {
  body: {
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
  path: {
    readonly team_id: number;
    readonly discussion_number: number;
    readonly comment_number: number;
  };
  query: {};
  header: {};
};

export type ReactionsCreateForTeamDiscussionCommentLegacyResponse = {
  status: 201;
  body: Reaction;
};

export type ReactionsListForTeamDiscussionLegacyRequest = {
  body: unknown;
  path: { readonly team_id: number; readonly discussion_number: number };
  query: {
    readonly content?:
      | '+1'
      | '-1'
      | 'laugh'
      | 'confused'
      | 'heart'
      | 'hooray'
      | 'rocket'
      | 'eyes';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ReactionsListForTeamDiscussionLegacyResponse = {
  status: 200;
  body: ReadonlyArray<Reaction>;
};

export type ReactionsCreateForTeamDiscussionLegacyRequest = {
  body: {
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
  path: { readonly team_id: number; readonly discussion_number: number };
  query: {};
  header: {};
};

export type ReactionsCreateForTeamDiscussionLegacyResponse = {
  status: 201;
  body: Reaction;
};

export type TeamsListPendingInvitationsLegacyRequest = {
  body: unknown;
  path: { readonly team_id: number };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type TeamsListPendingInvitationsLegacyResponse = {
  status: 200;
  body: ReadonlyArray<OrganizationInvitation>;
};

export type TeamsListMembersLegacyRequest = {
  body: unknown;
  path: { readonly team_id: number };
  query: {
    readonly role?: 'member' | 'maintainer' | 'all';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type TeamsListMembersLegacyResponse =
  | { status: 200; body: ReadonlyArray<SimpleUser> }
  | { status: 404; body: BasicError };

export type TeamsGetMemberLegacyRequest = {
  body: unknown;
  path: { readonly team_id: number; readonly username: string };
  query: {};
  header: {};
};

export type TeamsGetMemberLegacyResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: unknown };

export type TeamsAddMemberLegacyRequest = {
  body: unknown;
  path: { readonly team_id: number; readonly username: string };
  query: {};
  header: {};
};

export type TeamsAddMemberLegacyResponse =
  | { status: 204; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: unknown }
  | { status: 422; body: unknown };

export type TeamsRemoveMemberLegacyRequest = {
  body: unknown;
  path: { readonly team_id: number; readonly username: string };
  query: {};
  header: {};
};

export type TeamsRemoveMemberLegacyResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: unknown };

export type TeamsGetMembershipForUserLegacyRequest = {
  body: unknown;
  path: { readonly team_id: number; readonly username: string };
  query: {};
  header: {};
};

export type TeamsGetMembershipForUserLegacyResponse =
  | { status: 200; body: TeamMembership }
  | { status: 404; body: BasicError };

export type TeamsAddOrUpdateMembershipForUserLegacyRequest = {
  body: { readonly role?: 'member' | 'maintainer' } | undefined;
  path: { readonly team_id: number; readonly username: string };
  query: {};
  header: {};
};

export type TeamsAddOrUpdateMembershipForUserLegacyResponse =
  | { status: 200; body: TeamMembership }
  | { status: 403; body: unknown }
  | { status: 404; body: BasicError }
  | { status: 422; body: unknown };

export type TeamsRemoveMembershipForUserLegacyRequest = {
  body: unknown;
  path: { readonly team_id: number; readonly username: string };
  query: {};
  header: {};
};

export type TeamsRemoveMembershipForUserLegacyResponse =
  | { status: 204; body: unknown }
  | { status: 403; body: unknown };

export type TeamsListProjectsLegacyRequest = {
  body: unknown;
  path: { readonly team_id: number };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type TeamsListProjectsLegacyResponse =
  | { status: 200; body: ReadonlyArray<TeamProject> }
  | { status: 404; body: BasicError };

export type TeamsCheckPermissionsForProjectLegacyRequest = {
  body: unknown;
  path: { readonly team_id: number; readonly project_id: number };
  query: {};
  header: {};
};

export type TeamsCheckPermissionsForProjectLegacyResponse =
  | { status: 200; body: TeamProject }
  | { status: 404; body: unknown };

export type TeamsAddOrUpdateProjectPermissionsLegacyRequest = {
  body: { readonly permission?: 'read' | 'write' | 'admin' } | undefined;
  path: { readonly team_id: number; readonly project_id: number };
  query: {};
  header: {};
};

export type TeamsAddOrUpdateProjectPermissionsLegacyResponse =
  | { status: 204; body: unknown }
  | {
      status: 403;
      body: { readonly message?: string; readonly documentation_url?: string };
    }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type TeamsRemoveProjectLegacyRequest = {
  body: unknown;
  path: { readonly team_id: number; readonly project_id: number };
  query: {};
  header: {};
};

export type TeamsRemoveProjectLegacyResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type TeamsListReposLegacyRequest = {
  body: unknown;
  path: { readonly team_id: number };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type TeamsListReposLegacyResponse =
  | { status: 200; body: ReadonlyArray<MinimalRepository> }
  | { status: 404; body: BasicError };

export type TeamsCheckPermissionsForRepoLegacyRequest = {
  body: unknown;
  path: {
    readonly team_id: number;
    readonly owner: string;
    readonly repo: string;
  };
  query: {};
  header: {};
};

export type TeamsCheckPermissionsForRepoLegacyResponse =
  | { status: 200; body: TeamRepository }
  | { status: 204; body: unknown }
  | { status: 404; body: unknown };

export type TeamsAddOrUpdateRepoPermissionsLegacyRequest = {
  body: { readonly permission?: 'pull' | 'push' | 'admin' } | undefined;
  path: {
    readonly team_id: number;
    readonly owner: string;
    readonly repo: string;
  };
  query: {};
  header: {};
};

export type TeamsAddOrUpdateRepoPermissionsLegacyResponse =
  | { status: 204; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationError };

export type TeamsRemoveRepoLegacyRequest = {
  body: unknown;
  path: {
    readonly team_id: number;
    readonly owner: string;
    readonly repo: string;
  };
  query: {};
  header: {};
};

export type TeamsRemoveRepoLegacyResponse = { status: 204; body: unknown };

export type TeamsListChildLegacyRequest = {
  body: unknown;
  path: { readonly team_id: number };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type TeamsListChildLegacyResponse =
  | { status: 200; body: ReadonlyArray<Team> }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type UsersGetAuthenticatedRequest = {
  body: unknown;
  path: {};
  query: {};
  header: {};
};

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

export type UsersGetAuthenticatedResponse =
  | { status: 200; body: PrivateUser | PublicUser }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type UsersUpdateAuthenticatedRequest = {
  body:
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
  path: {};
  query: {};
  header: {};
};

export type UsersUpdateAuthenticatedResponse =
  | { status: 200; body: PrivateUser }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type UsersListBlockedByAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type UsersListBlockedByAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<SimpleUser> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type UsersCheckBlockedRequest = {
  body: unknown;
  path: { readonly username: string };
  query: {};
  header: {};
};

export type UsersCheckBlockedResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type UsersBlockRequest = {
  body: unknown;
  path: { readonly username: string };
  query: {};
  header: {};
};

export type UsersBlockResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type UsersUnblockRequest = {
  body: unknown;
  path: { readonly username: string };
  query: {};
  header: {};
};

export type UsersUnblockResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type CodespacesListForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: {
    readonly per_page?: number;
    readonly page?: number;
    readonly repository_id?: number;
  };
  header: {};
};

export type CodespacesListForAuthenticatedUserResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly codespaces: ReadonlyArray<Codespace>;
      };
    }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 500; body: BasicError };

export type CodespacesCreateForAuthenticatedUserRequest = {
  body:
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
  path: {};
  query: {};
  header: {};
};

export type CodespacesCreateForAuthenticatedUserResponse =
  | { status: 201; body: Codespace }
  | { status: 202; body: Codespace }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | {
      status: 503;
      body: {
        readonly code?: string;
        readonly message?: string;
        readonly documentation_url?: string;
      };
    };

export type CodespacesListSecretsForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type CodespacesListSecretsForAuthenticatedUserResponse = {
  status: 200;
  body: {
    readonly total_count: number;
    readonly secrets: ReadonlyArray<CodespacesSecret>;
  };
};

export type CodespacesGetPublicKeyForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: {};
  header: {};
};

export type CodespacesUserPublicKey = {
  readonly key_id: string;
  readonly key: string;
};

export type CodespacesGetPublicKeyForAuthenticatedUserResponse = {
  status: 200;
  body: CodespacesUserPublicKey;
};

export type CodespacesGetSecretForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly secret_name: string };
  query: {};
  header: {};
};

export type CodespacesGetSecretForAuthenticatedUserResponse = {
  status: 200;
  body: CodespacesSecret;
};

export type CodespacesCreateOrUpdateSecretForAuthenticatedUserRequest = {
  body: {
    readonly encrypted_value?: string;
    readonly key_id: string;
    readonly selected_repository_ids?: ReadonlyArray<string>;
  };
  path: { readonly secret_name: string };
  query: {};
  header: {};
};

export type CodespacesCreateOrUpdateSecretForAuthenticatedUserResponse =
  | { status: 201; body: EmptyObject }
  | { status: 204; body: unknown }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type CodespacesDeleteSecretForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly secret_name: string };
  query: {};
  header: {};
};

export type CodespacesDeleteSecretForAuthenticatedUserResponse = {
  status: 204;
  body: unknown;
};

export type CodespacesListRepositoriesForSecretForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly secret_name: string };
  query: {};
  header: {};
};

export type CodespacesListRepositoriesForSecretForAuthenticatedUserResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly repositories: ReadonlyArray<MinimalRepository>;
      };
    }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 500; body: BasicError };

export type CodespacesSetRepositoriesForSecretForAuthenticatedUserRequest = {
  body: { readonly selected_repository_ids: ReadonlyArray<number> };
  path: { readonly secret_name: string };
  query: {};
  header: {};
};

export type CodespacesSetRepositoriesForSecretForAuthenticatedUserResponse =
  | { status: 204; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 500; body: BasicError };

export type CodespacesAddRepositoryForSecretForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly secret_name: string; readonly repository_id: number };
  query: {};
  header: {};
};

export type CodespacesAddRepositoryForSecretForAuthenticatedUserResponse =
  | { status: 204; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 500; body: BasicError };

export type CodespacesRemoveRepositoryForSecretForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly secret_name: string; readonly repository_id: number };
  query: {};
  header: {};
};

export type CodespacesRemoveRepositoryForSecretForAuthenticatedUserResponse =
  | { status: 204; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 500; body: BasicError };

export type CodespacesGetForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly codespace_name: string };
  query: {};
  header: {};
};

export type CodespacesGetForAuthenticatedUserResponse =
  | { status: 200; body: Codespace }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 500; body: BasicError };

export type CodespacesUpdateForAuthenticatedUserRequest = {
  body:
    | {
        readonly machine?: string;
        readonly display_name?: string;
        readonly recent_folders?: ReadonlyArray<string>;
      }
    | undefined;
  path: { readonly codespace_name: string };
  query: {};
  header: {};
};

export type CodespacesUpdateForAuthenticatedUserResponse =
  | { status: 200; body: Codespace }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type CodespacesDeleteForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly codespace_name: string };
  query: {};
  header: {};
};

export type CodespacesDeleteForAuthenticatedUserResponse =
  | { status: 202; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 500; body: BasicError };

export type CodespacesExportForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly codespace_name: string };
  query: {};
  header: {};
};

export type FetchesInformationAboutAnExportOfACodespace = {
  readonly state?: string | null;
  readonly completed_at?: string | null;
  readonly branch?: string | null;
  readonly sha?: string | null;
  readonly id?: string;
  readonly export_url?: string;
  readonly html_url?: string | null;
};

export type CodespacesExportForAuthenticatedUserResponse =
  | { status: 202; body: FetchesInformationAboutAnExportOfACodespace }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError }
  | { status: 500; body: BasicError };

export type CodespacesGetExportDetailsForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly codespace_name: string; readonly export_id: string };
  query: {};
  header: {};
};

export type CodespacesGetExportDetailsForAuthenticatedUserResponse =
  | { status: 200; body: FetchesInformationAboutAnExportOfACodespace }
  | { status: 404; body: BasicError };

export type CodespacesCodespaceMachinesForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly codespace_name: string };
  query: {};
  header: {};
};

export type CodespacesCodespaceMachinesForAuthenticatedUserResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly machines: ReadonlyArray<CodespaceMachine>;
      };
    }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 500; body: BasicError };

export type CodespacesStartForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly codespace_name: string };
  query: {};
  header: {};
};

export type CodespacesStartForAuthenticatedUserResponse =
  | { status: 200; body: Codespace }
  | { status: 304; body: unknown }
  | { status: 400; body: BasicError }
  | { status: 401; body: BasicError }
  | { status: 402; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 409; body: BasicError }
  | { status: 500; body: BasicError };

export type CodespacesStopForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly codespace_name: string };
  query: {};
  header: {};
};

export type CodespacesStopForAuthenticatedUserResponse =
  | { status: 200; body: Codespace }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 500; body: BasicError };

export type UsersSetPrimaryEmailVisibilityForAuthenticatedUserRequest = {
  body: { readonly visibility: 'public' | 'private' };
  path: {};
  query: {};
  header: {};
};

export type Email = {
  readonly email: string;
  readonly primary: boolean;
  readonly verified: boolean;
  readonly visibility: string | null;
};

export type UsersSetPrimaryEmailVisibilityForAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<Email> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type UsersListEmailsForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type UsersListEmailsForAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<Email> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type UsersAddEmailForAuthenticatedUserRequest = {
  body:
    | { readonly emails: ReadonlyArray<string> }
    | ReadonlyArray<string>
    | string
    | undefined;
  path: {};
  query: {};
  header: {};
};

export type UsersAddEmailForAuthenticatedUserResponse =
  | { status: 201; body: ReadonlyArray<Email> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type UsersDeleteEmailForAuthenticatedUserRequest = {
  body:
    | { readonly emails: ReadonlyArray<string> }
    | ReadonlyArray<string>
    | string
    | undefined;
  path: {};
  query: {};
  header: {};
};

export type UsersDeleteEmailForAuthenticatedUserResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type UsersListFollowersForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type UsersListFollowersForAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<SimpleUser> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type UsersListFollowedByAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type UsersListFollowedByAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<SimpleUser> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type UsersCheckPersonIsFollowedByAuthenticatedRequest = {
  body: unknown;
  path: { readonly username: string };
  query: {};
  header: {};
};

export type UsersCheckPersonIsFollowedByAuthenticatedResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type UsersFollowRequest = {
  body: unknown;
  path: { readonly username: string };
  query: {};
  header: {};
};

export type UsersFollowResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type UsersUnfollowRequest = {
  body: unknown;
  path: { readonly username: string };
  query: {};
  header: {};
};

export type UsersUnfollowResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type UsersListGpgKeysForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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
    readonly emails?: ReadonlyArray<unknown>;
    readonly subkeys?: ReadonlyArray<unknown>;
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

export type UsersListGpgKeysForAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<GpgKey> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type UsersCreateGpgKeyForAuthenticatedUserRequest = {
  body: { readonly name?: string; readonly armored_public_key: string };
  path: {};
  query: {};
  header: {};
};

export type UsersCreateGpgKeyForAuthenticatedUserResponse =
  | { status: 201; body: GpgKey }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type UsersGetGpgKeyForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly gpg_key_id: number };
  query: {};
  header: {};
};

export type UsersGetGpgKeyForAuthenticatedUserResponse =
  | { status: 200; body: GpgKey }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type UsersDeleteGpgKeyForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly gpg_key_id: number };
  query: {};
  header: {};
};

export type UsersDeleteGpgKeyForAuthenticatedUserResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type AppsListInstallationsForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type AppsListInstallationsForAuthenticatedUserResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly installations: ReadonlyArray<Installation>;
      };
    }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type AppsListInstallationReposForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly installation_id: number };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type AppsListInstallationReposForAuthenticatedUserResponse =
  | {
      status: 200;
      body: {
        readonly total_count: number;
        readonly repository_selection?: string;
        readonly repositories: ReadonlyArray<Repository>;
      };
    }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type AppsAddRepoToInstallationForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly installation_id: number; readonly repository_id: number };
  query: {};
  header: {};
};

export type AppsAddRepoToInstallationForAuthenticatedUserResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type AppsRemoveRepoFromInstallationForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly installation_id: number; readonly repository_id: number };
  query: {};
  header: {};
};

export type AppsRemoveRepoFromInstallationForAuthenticatedUserResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type InteractionsGetRestrictionsForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: {};
  header: {};
};

export type InteractionsGetRestrictionsForAuthenticatedUserResponse =
  | { status: 200; body: InteractionLimits | {} }
  | { status: 204; body: unknown };

export type InteractionsSetRestrictionsForAuthenticatedUserRequest = {
  body: InteractionRestrictions;
  path: {};
  query: {};
  header: {};
};

export type InteractionsSetRestrictionsForAuthenticatedUserResponse =
  | { status: 200; body: InteractionLimits }
  | { status: 422; body: ValidationError };

export type InteractionsRemoveRestrictionsForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: {};
  header: {};
};

export type InteractionsRemoveRestrictionsForAuthenticatedUserResponse = {
  status: 204;
  body: unknown;
};

export type IssuesListForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: {
    readonly filter?:
      | 'assigned'
      | 'created'
      | 'mentioned'
      | 'subscribed'
      | 'repos'
      | 'all';
    readonly state?: 'open' | 'closed' | 'all';
    readonly labels?: string;
    readonly sort?: 'created' | 'updated' | 'comments';
    readonly direction?: 'asc' | 'desc';
    readonly since?: string;
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type IssuesListForAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<Issue> }
  | { status: 304; body: unknown }
  | { status: 404; body: BasicError };

export type UsersListPublicSshKeysForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type Key = {
  readonly key: string;
  readonly id: number;
  readonly url: string;
  readonly title: string;
  readonly created_at: string;
  readonly verified: boolean;
  readonly read_only: boolean;
};

export type UsersListPublicSshKeysForAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<Key> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type UsersCreatePublicSshKeyForAuthenticatedUserRequest = {
  body: { readonly title?: string; readonly key: string };
  path: {};
  query: {};
  header: {};
};

export type UsersCreatePublicSshKeyForAuthenticatedUserResponse =
  | { status: 201; body: Key }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type UsersGetPublicSshKeyForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly key_id: number };
  query: {};
  header: {};
};

export type UsersGetPublicSshKeyForAuthenticatedUserResponse =
  | { status: 200; body: Key }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type UsersDeletePublicSshKeyForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly key_id: number };
  query: {};
  header: {};
};

export type UsersDeletePublicSshKeyForAuthenticatedUserResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type AppsListSubscriptionsForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

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

export type AppsListSubscriptionsForAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<UserMarketplacePurchase> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 404; body: BasicError };

export type AppsListSubscriptionsForAuthenticatedUserStubbedRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type AppsListSubscriptionsForAuthenticatedUserStubbedResponse =
  | { status: 200; body: ReadonlyArray<UserMarketplacePurchase> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError };

export type OrgsListMembershipsForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: {
    readonly state?: 'active' | 'pending';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type OrgsListMembershipsForAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<OrgMembership> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationError };

export type OrgsGetMembershipForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly org: string };
  query: {};
  header: {};
};

export type OrgsGetMembershipForAuthenticatedUserResponse =
  | { status: 200; body: OrgMembership }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type OrgsUpdateMembershipForAuthenticatedUserRequest = {
  body: { readonly state: 'active' };
  path: { readonly org: string };
  query: {};
  header: {};
};

export type OrgsUpdateMembershipForAuthenticatedUserResponse =
  | { status: 200; body: OrgMembership }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type MigrationsListForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type MigrationsListForAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<Migration> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type MigrationsStartForAuthenticatedUserRequest = {
  body: {
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
  path: {};
  query: {};
  header: {};
};

export type MigrationsStartForAuthenticatedUserResponse =
  | { status: 201; body: Migration }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationError };

export type MigrationsGetStatusForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly migration_id: number };
  query: { readonly exclude?: ReadonlyArray<string> };
  header: {};
};

export type MigrationsGetStatusForAuthenticatedUserResponse =
  | { status: 200; body: Migration }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type MigrationsGetArchiveForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly migration_id: number };
  query: {};
  header: {};
};

export type MigrationsGetArchiveForAuthenticatedUserResponse =
  | { status: 302; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type MigrationsDeleteArchiveForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly migration_id: number };
  query: {};
  header: {};
};

export type MigrationsDeleteArchiveForAuthenticatedUserResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type MigrationsUnlockRepoForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly migration_id: number; readonly repo_name: string };
  query: {};
  header: {};
};

export type MigrationsUnlockRepoForAuthenticatedUserResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type MigrationsListReposForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly migration_id: number };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type MigrationsListReposForAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<MinimalRepository> }
  | { status: 404; body: BasicError };

export type OrgsListForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type OrgsListForAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<OrganizationSimple> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type PackagesListPackagesForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly visibility?: 'public' | 'private' | 'internal';
  };
  header: {};
};

export type PackagesListPackagesForAuthenticatedUserResponse = {
  status: 200;
  body: ReadonlyArray<Package>;
};

export type PackagesGetPackageForAuthenticatedUserRequest = {
  body: unknown;
  path: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly package_name: string;
  };
  query: {};
  header: {};
};

export type PackagesGetPackageForAuthenticatedUserResponse = {
  status: 200;
  body: Package;
};

export type PackagesDeletePackageForAuthenticatedUserRequest = {
  body: unknown;
  path: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly package_name: string;
  };
  query: {};
  header: {};
};

export type PackagesDeletePackageForAuthenticatedUserResponse =
  | { status: 204; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type PackagesRestorePackageForAuthenticatedUserRequest = {
  body: unknown;
  path: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly package_name: string;
  };
  query: { readonly token?: string };
  header: {};
};

export type PackagesRestorePackageForAuthenticatedUserResponse =
  | { status: 204; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserRequest = {
  body: unknown;
  path: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly package_name: string;
  };
  query: {
    readonly page?: number;
    readonly per_page?: number;
    readonly state?: 'active' | 'deleted';
  };
  header: {};
};

export type PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<PackageVersion> }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type PackagesGetPackageVersionForAuthenticatedUserRequest = {
  body: unknown;
  path: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly package_name: string;
    readonly package_version_id: number;
  };
  query: {};
  header: {};
};

export type PackagesGetPackageVersionForAuthenticatedUserResponse = {
  status: 200;
  body: PackageVersion;
};

export type PackagesDeletePackageVersionForAuthenticatedUserRequest = {
  body: unknown;
  path: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly package_name: string;
    readonly package_version_id: number;
  };
  query: {};
  header: {};
};

export type PackagesDeletePackageVersionForAuthenticatedUserResponse =
  | { status: 204; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type PackagesRestorePackageVersionForAuthenticatedUserRequest = {
  body: unknown;
  path: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly package_name: string;
    readonly package_version_id: number;
  };
  query: {};
  header: {};
};

export type PackagesRestorePackageVersionForAuthenticatedUserResponse =
  | { status: 204; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type ProjectsCreateForAuthenticatedUserRequest = {
  body: { readonly name: string; readonly body?: string | null };
  path: {};
  query: {};
  header: {};
};

export type ProjectsCreateForAuthenticatedUserResponse =
  | { status: 201; body: Project }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationErrorSimple };

export type UsersListPublicEmailsForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type UsersListPublicEmailsForAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<Email> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type ReposListForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: {
    readonly visibility?: 'all' | 'public' | 'private';
    readonly affiliation?: string;
    readonly type?: 'all' | 'owner' | 'public' | 'private' | 'member';
    readonly sort?: 'created' | 'updated' | 'pushed' | 'full_name';
    readonly direction?: 'asc' | 'desc';
    readonly per_page?: number;
    readonly page?: number;
    readonly since?: string;
    readonly before?: string;
  };
  header: {};
};

export type ReposListForAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<Repository> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposCreateForAuthenticatedUserRequest = {
  body: {
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
  path: {};
  query: {};
  header: {};
};

export type ReposCreateForAuthenticatedUserResponse =
  | { status: 201; body: Repository }
  | { status: 304; body: unknown }
  | { status: 400; body: BasicError }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type ReposListInvitationsForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ReposListInvitationsForAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<RepositoryInvitation> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type ReposAcceptInvitationForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly invitation_id: number };
  query: {};
  header: {};
};

export type ReposAcceptInvitationForAuthenticatedUserResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 409; body: BasicError };

export type ReposDeclineInvitationForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly invitation_id: number };
  query: {};
  header: {};
};

export type ReposDeclineInvitationForAuthenticatedUserResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 409; body: BasicError };

export type UsersListSshSigningKeysForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type SshSigningKey = {
  readonly key: string;
  readonly id: number;
  readonly title: string;
  readonly created_at: string;
};

export type UsersListSshSigningKeysForAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<SshSigningKey> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type UsersCreateSshSigningKeyForAuthenticatedUserRequest = {
  body: { readonly title?: string; readonly key: string };
  path: {};
  query: {};
  header: {};
};

export type UsersCreateSshSigningKeyForAuthenticatedUserResponse =
  | { status: 201; body: SshSigningKey }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type UsersGetSshSigningKeyForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly ssh_signing_key_id: number };
  query: {};
  header: {};
};

export type UsersGetSshSigningKeyForAuthenticatedUserResponse =
  | { status: 200; body: SshSigningKey }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type UsersDeleteSshSigningKeyForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly ssh_signing_key_id: number };
  query: {};
  header: {};
};

export type UsersDeleteSshSigningKeyForAuthenticatedUserResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type ActivityListReposStarredByAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: {
    readonly sort?: 'created' | 'updated';
    readonly direction?: 'asc' | 'desc';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ActivityListReposStarredByAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<Repository> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type ActivityCheckRepoIsStarredByAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ActivityCheckRepoIsStarredByAuthenticatedUserResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type ActivityStarRepoForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ActivityStarRepoForAuthenticatedUserResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type ActivityUnstarRepoForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly owner: string; readonly repo: string };
  query: {};
  header: {};
};

export type ActivityUnstarRepoForAuthenticatedUserResponse =
  | { status: 204; body: unknown }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type ActivityListWatchedReposForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ActivityListWatchedReposForAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<MinimalRepository> }
  | { status: 304; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type TeamsListForAuthenticatedUserRequest = {
  body: unknown;
  path: {};
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type TeamsListForAuthenticatedUserResponse =
  | { status: 200; body: ReadonlyArray<FullTeam> }
  | { status: 304; body: unknown }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type UsersListRequest = {
  body: unknown;
  path: {};
  query: { readonly since?: number; readonly per_page?: number };
  header: {};
};

export type UsersListResponse =
  | { status: 200; body: ReadonlyArray<SimpleUser> }
  | { status: 304; body: unknown };

export type UsersGetByUsernameRequest = {
  body: unknown;
  path: { readonly username: string };
  query: {};
  header: {};
};

export type UsersGetByUsernameResponse =
  | { status: 200; body: PrivateUser | PublicUser }
  | { status: 404; body: BasicError };

export type ActivityListEventsForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly username: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ActivityListEventsForAuthenticatedUserResponse = {
  status: 200;
  body: ReadonlyArray<Event>;
};

export type ActivityListOrgEventsForAuthenticatedUserRequest = {
  body: unknown;
  path: { readonly username: string; readonly org: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ActivityListOrgEventsForAuthenticatedUserResponse = {
  status: 200;
  body: ReadonlyArray<Event>;
};

export type ActivityListPublicEventsForUserRequest = {
  body: unknown;
  path: { readonly username: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ActivityListPublicEventsForUserResponse = {
  status: 200;
  body: ReadonlyArray<Event>;
};

export type UsersListFollowersForUserRequest = {
  body: unknown;
  path: { readonly username: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type UsersListFollowersForUserResponse = {
  status: 200;
  body: ReadonlyArray<SimpleUser>;
};

export type UsersListFollowingForUserRequest = {
  body: unknown;
  path: { readonly username: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type UsersListFollowingForUserResponse = {
  status: 200;
  body: ReadonlyArray<SimpleUser>;
};

export type UsersCheckFollowingForUserRequest = {
  body: unknown;
  path: { readonly username: string; readonly target_user: string };
  query: {};
  header: {};
};

export type UsersCheckFollowingForUserResponse =
  | { status: 204; body: unknown }
  | { status: 404; body: unknown };

export type GistsListForUserRequest = {
  body: unknown;
  path: { readonly username: string };
  query: {
    readonly since?: string;
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type GistsListForUserResponse =
  | { status: 200; body: ReadonlyArray<BaseGist> }
  | { status: 422; body: ValidationError };

export type UsersListGpgKeysForUserRequest = {
  body: unknown;
  path: { readonly username: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type UsersListGpgKeysForUserResponse = {
  status: 200;
  body: ReadonlyArray<GpgKey>;
};

export type UsersGetContextForUserRequest = {
  body: unknown;
  path: { readonly username: string };
  query: {
    readonly subject_type?:
      | 'organization'
      | 'repository'
      | 'issue'
      | 'pull_request';
    readonly subject_id?: string;
  };
  header: {};
};

export type Hovercard = {
  readonly contexts: ReadonlyArray<{
    readonly message: string;
    readonly octicon: string;
  }>;
};

export type UsersGetContextForUserResponse =
  | { status: 200; body: Hovercard }
  | { status: 404; body: BasicError }
  | { status: 422; body: ValidationError };

export type AppsGetUserInstallationRequest = {
  body: unknown;
  path: { readonly username: string };
  query: {};
  header: {};
};

export type AppsGetUserInstallationResponse = {
  status: 200;
  body: Installation;
};

export type UsersListPublicKeysForUserRequest = {
  body: unknown;
  path: { readonly username: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type KeySimple = { readonly id: number; readonly key: string };

export type UsersListPublicKeysForUserResponse = {
  status: 200;
  body: ReadonlyArray<KeySimple>;
};

export type OrgsListForUserRequest = {
  body: unknown;
  path: { readonly username: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type OrgsListForUserResponse = {
  status: 200;
  body: ReadonlyArray<OrganizationSimple>;
};

export type PackagesListPackagesForUserRequest = {
  body: unknown;
  path: { readonly username: string };
  query: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly visibility?: 'public' | 'private' | 'internal';
  };
  header: {};
};

export type PackagesListPackagesForUserResponse =
  | { status: 200; body: ReadonlyArray<Package> }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError };

export type PackagesGetPackageForUserRequest = {
  body: unknown;
  path: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly package_name: string;
    readonly username: string;
  };
  query: {};
  header: {};
};

export type PackagesGetPackageForUserResponse = { status: 200; body: Package };

export type PackagesDeletePackageForUserRequest = {
  body: unknown;
  path: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly package_name: string;
    readonly username: string;
  };
  query: {};
  header: {};
};

export type PackagesDeletePackageForUserResponse =
  | { status: 204; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type PackagesRestorePackageForUserRequest = {
  body: unknown;
  path: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly package_name: string;
    readonly username: string;
  };
  query: { readonly token?: string };
  header: {};
};

export type PackagesRestorePackageForUserResponse =
  | { status: 204; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type PackagesGetAllPackageVersionsForPackageOwnedByUserRequest = {
  body: unknown;
  path: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly package_name: string;
    readonly username: string;
  };
  query: {};
  header: {};
};

export type PackagesGetAllPackageVersionsForPackageOwnedByUserResponse =
  | { status: 200; body: ReadonlyArray<PackageVersion> }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type PackagesGetPackageVersionForUserRequest = {
  body: unknown;
  path: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly package_name: string;
    readonly package_version_id: number;
    readonly username: string;
  };
  query: {};
  header: {};
};

export type PackagesGetPackageVersionForUserResponse = {
  status: 200;
  body: PackageVersion;
};

export type PackagesDeletePackageVersionForUserRequest = {
  body: unknown;
  path: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly package_name: string;
    readonly username: string;
    readonly package_version_id: number;
  };
  query: {};
  header: {};
};

export type PackagesDeletePackageVersionForUserResponse =
  | { status: 204; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type PackagesRestorePackageVersionForUserRequest = {
  body: unknown;
  path: {
    readonly package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'container';
    readonly package_name: string;
    readonly username: string;
    readonly package_version_id: number;
  };
  query: {};
  header: {};
};

export type PackagesRestorePackageVersionForUserResponse =
  | { status: 204; body: unknown }
  | { status: 401; body: BasicError }
  | { status: 403; body: BasicError }
  | { status: 404; body: BasicError };

export type ProjectsListForUserRequest = {
  body: unknown;
  path: { readonly username: string };
  query: {
    readonly state?: 'open' | 'closed' | 'all';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ProjectsListForUserResponse =
  | { status: 200; body: ReadonlyArray<Project> }
  | { status: 422; body: ValidationError };

export type ActivityListReceivedEventsForUserRequest = {
  body: unknown;
  path: { readonly username: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ActivityListReceivedEventsForUserResponse = {
  status: 200;
  body: ReadonlyArray<Event>;
};

export type ActivityListReceivedPublicEventsForUserRequest = {
  body: unknown;
  path: { readonly username: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ActivityListReceivedPublicEventsForUserResponse = {
  status: 200;
  body: ReadonlyArray<Event>;
};

export type ReposListForUserRequest = {
  body: unknown;
  path: { readonly username: string };
  query: {
    readonly type?: 'all' | 'owner' | 'member';
    readonly sort?: 'created' | 'updated' | 'pushed' | 'full_name';
    readonly direction?: 'asc' | 'desc';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type ReposListForUserResponse = {
  status: 200;
  body: ReadonlyArray<MinimalRepository>;
};

export type BillingGetGithubActionsBillingUserRequest = {
  body: unknown;
  path: { readonly username: string };
  query: {};
  header: {};
};

export type BillingGetGithubActionsBillingUserResponse = {
  status: 200;
  body: ActionsBillingUsage;
};

export type BillingGetGithubPackagesBillingUserRequest = {
  body: unknown;
  path: { readonly username: string };
  query: {};
  header: {};
};

export type BillingGetGithubPackagesBillingUserResponse = {
  status: 200;
  body: PackagesBillingUsage;
};

export type BillingGetSharedStorageBillingUserRequest = {
  body: unknown;
  path: { readonly username: string };
  query: {};
  header: {};
};

export type BillingGetSharedStorageBillingUserResponse = {
  status: 200;
  body: CombinedBillingUsage;
};

export type UsersListSshSigningKeysForUserRequest = {
  body: unknown;
  path: { readonly username: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type UsersListSshSigningKeysForUserResponse = {
  status: 200;
  body: ReadonlyArray<SshSigningKey>;
};

export type ActivityListReposStarredByUserRequest = {
  body: unknown;
  path: { readonly username: string };
  query: {
    readonly sort?: 'created' | 'updated';
    readonly direction?: 'asc' | 'desc';
    readonly per_page?: number;
    readonly page?: number;
  };
  header: {};
};

export type StarredRepository = {
  readonly starred_at: string;
  readonly repo: Repository;
};

export type ActivityListReposStarredByUserResponse = {
  status: 200;
  body: ReadonlyArray<StarredRepository> | ReadonlyArray<Repository>;
};

export type ActivityListReposWatchedByUserRequest = {
  body: unknown;
  path: { readonly username: string };
  query: { readonly per_page?: number; readonly page?: number };
  header: {};
};

export type ActivityListReposWatchedByUserResponse = {
  status: 200;
  body: ReadonlyArray<MinimalRepository>;
};

export type MetaGetZenRequest = {
  body: unknown;
  path: {};
  query: {};
  header: {};
};

export type MetaGetZenResponse = { status: 200; body: Buffer };
