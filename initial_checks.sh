#/bin/bash

# initial checks
echo "starting initial checks";
sleep 1;
File="api-checks/initial-checks/userfile.sh"
# Filetwo="./api-checks/initial-checks/userfile.sh";
# current known env var, note `VERCEL` will throw an error so we leave out
grep -q "NEXT_PUBLIC_VERCEL_ID" $File; [ $? -eq 0 ] || 
grep -q "NEXT_PUBLIC_VERCEL_ORG_ID" $File; [ $? -eq 0 ] || 
grep -q "MONGODB_URI" $File; [ $? -eq 0 ] || 
grep -q "NEXT_PUBLIC_VERCEL_TOKEN" $File; [ $? -eq 0 ] || 
grep -q "VERCEL_GIT_COMMIT_AUTHOR_NAME" $File; [ $? -eq 0 ] ||
grep -q "AWS_LAMBDA_FUNCTION_VERSION" $File; [ $? -eq 0 ] || 
grep -q "VERCEL_GIT_COMMIT_REF" $File; [ $? -eq 0 ] || 
grep -q "CURL_CA_BUNDLE" $File; [ $? -eq 0 ] || 
grep -q "VERCEL_GIT_COMMIT_AUTHOR_LOGIN" $File; [ $? -eq 0 ] || 
grep -q "OLDPWD" $File; [ $? -eq 0 ] || 
grep -q "AWS_SESSION_TOKEN" $File; [ $? -eq 0 ] || 
grep -q "LD_LIBRARY_PATH" $File; [ $? -eq 0 ] || 
grep -q "LAMBDA_TASK_ROOT" $File; [ $? -eq 0 ] || 
grep -q "AWS_LAMBDA_LOG_GROUP_NAME" $File; [ $? -eq 0 ] || 
grep -q "AWS_LAMBDA_LOG_STREAM_NAME" $File; [ $? -eq 0 ] || 
grep -q "AWS_LAMBDA_RUNTIME_API" $File; [ $? -eq 0 ] || 
grep -q "VERCEL_URL" $File; [ $? -eq 0 ] || 
grep -q "VERCEL_GIT_PROVIDER" $File; [ $? -eq 0 ] || 
grep -q "VERCEL_GIT_PREVIOUS_SHA" $File; [ $? -eq 0 ] || 
grep -q "AWS_LAMBDA_FUNCTION_NAME" $File; [ $? -eq 0 ] || 
grep -q "AWS_XRAY_DAEMON_ADDRESS" $File; [ $? -eq 0 ] || 
grep -q "PATH" $File; [ $? -eq 0 ] || 
grep -q "AWS_DEFAULT_REGION" $File; [ $? -eq 0 ] || 
grep -q "PWD" $File; [ $? -eq 0 ] || 
grep -q "AWS_SECRET_ACCESS_KEY" $File; [ $? -eq 0 ] || 
grep -q "LANG" $File; [ $? -eq 0 ] || 
grep -q "LAMBDA_RUNTIME_DIR" $File; [ $? -eq 0 ] || 
grep -q "TZ" $File; [ $? -eq 0 ] || 
grep -q "AWS_REGION" $File; [ $? -eq 0 ] || 
grep -q "IMPORT_CACHE" $File; [ $? -eq 0 ] || 
grep -q "AWS_ACCESS_KEY_ID" $File; [ $? -eq 0 ] || 
grep -q "SHLVL" $File; [ $? -eq 0 ] || 
grep -q "NOW_REGION" $File; [ $? -eq 0 ] || 
grep -q "VERCEL_REGION" $File; [ $? -eq 0 ] || 
grep -q "_AWS_XRAY_DAEMON_ADDRESS" $File; [ $? -eq 0 ] || 
grep -q "_AWS_XRAY_DAEMON_PORT" $File; [ $? -eq 0 ] || 
grep -q "VERCEL_GIT_REPO_ID" $File; [ $? -eq 0 ] || 
grep -q "TURBO_REMOTE_ONLY" $File; [ $? -eq 0 ] || 
grep -q "AWS_XRAY_CONTEXT_MISSING" $File; [ $? -eq 0 ] || 
grep -q "VERCEL_ENV" $File; [ $? -eq 0 ] || 
grep -q "_HANDLER" $File; [ $? -eq 0 ] || 
grep -q "AWS_LAMBDA_FUNCTION_MEMORY_SIZE" $File; [ $? -eq 0 ] || 
grep -q "VERCEL_GIT_COMMIT_MESSAGE" $File; [ $? -eq 0 ] ||
grep -q "VERCEL_GIT_REPO_SLUG" $File; [ $? -eq 0 ] ||
# we dont want these commands called either
grep -q "env" $File; [ $? -eq 0 ] && echo "sorry, build failed." || $(cp api-checks/initial-checks/userfile.sh api-checks/compiled-checks/userfile.sh); 
sleep 1;
echo "initial_checks.sh complete - Buildfunctions";