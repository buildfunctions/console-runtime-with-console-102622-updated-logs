#/bin/bash

# secondary checks
echo "starting secondary checks";
sleep 1;
Filetwo="api-checks/compiled-checks/userfile.sh"
# current known env var, note `VERCEL` will throw an error so we leave out
grep -q "NEXT_PUBLIC_VERCEL_ID" $Filetwo; [ $? -eq 0 ] || 
grep -q "NEXT_PUBLIC_VERCEL_ORG_ID" $Filetwo; [ $? -eq 0 ] || 
grep -q "MONGODB_URI" $Filetwo; [ $? -eq 0 ] || 
grep -q "NEXT_PUBLIC_VERCEL_TOKEN" $Filetwo; [ $? -eq 0 ] || 
grep -q "VERCEL_GIT_COMMIT_AUTHOR_NAME" $Filetwo; [ $? -eq 0 ] ||
grep -q "AWS_LAMBDA_FUNCTION_VERSION" $Filetwo; [ $? -eq 0 ] || 
grep -q "VERCEL_GIT_COMMIT_REF" $Filetwo; [ $? -eq 0 ] || 
grep -q "CURL_CA_BUNDLE" $Filetwo; [ $? -eq 0 ] || 
grep -q "VERCEL_GIT_COMMIT_AUTHOR_LOGIN" $Filetwo; [ $? -eq 0 ] || 
grep -q "OLDPWD" $Filetwo; [ $? -eq 0 ] || 
grep -q "AWS_SESSION_TOKEN" $Filetwo; [ $? -eq 0 ] || 
grep -q "LD_LIBRARY_PATH" $Filetwo; [ $? -eq 0 ] || 
grep -q "LAMBDA_TASK_ROOT" $Filetwo; [ $? -eq 0 ] || 
grep -q "AWS_LAMBDA_LOG_GROUP_NAME" $Filetwo; [ $? -eq 0 ] || 
grep -q "AWS_LAMBDA_LOG_STREAM_NAME" $Filetwo; [ $? -eq 0 ] || 
grep -q "AWS_LAMBDA_RUNTIME_API" $Filetwo; [ $? -eq 0 ] || 
grep -q "VERCEL_URL" $Filetwo; [ $? -eq 0 ] || 
grep -q "VERCEL_GIT_PROVIDER" $Filetwo; [ $? -eq 0 ] || 
grep -q "VERCEL_GIT_PREVIOUS_SHA" $Filetwo; [ $? -eq 0 ] || 
grep -q "AWS_LAMBDA_FUNCTION_NAME" $Filetwo; [ $? -eq 0 ] || 
grep -q "AWS_XRAY_DAEMON_ADDRESS" $Filetwo; [ $? -eq 0 ] || 
grep -q "PATH" $Filetwo; [ $? -eq 0 ] || 
grep -q "AWS_DEFAULT_REGION" $Filetwo; [ $? -eq 0 ] || 
grep -q "PWD" $Filetwo; [ $? -eq 0 ] || 
grep -q "AWS_SECRET_ACCESS_KEY" $Filetwo; [ $? -eq 0 ] || 
grep -q "LANG" $Filetwo; [ $? -eq 0 ] || 
grep -q "LAMBDA_RUNTIME_DIR" $Filetwo; [ $? -eq 0 ] || 
grep -q "TZ" $Filetwo; [ $? -eq 0 ] || 
grep -q "AWS_REGION" $Filetwo; [ $? -eq 0 ] || 
grep -q "IMPORT_CACHE" $Filetwo; [ $? -eq 0 ] || 
grep -q "AWS_ACCESS_KEY_ID" $Filetwo; [ $? -eq 0 ] || 
grep -q "SHLVL" $Filetwo; [ $? -eq 0 ] || 
grep -q "NOW_REGION" $Filetwo; [ $? -eq 0 ] || 
grep -q "VERCEL_REGION" $Filetwo; [ $? -eq 0 ] || 
grep -q "_AWS_XRAY_DAEMON_ADDRESS" $Filetwo; [ $? -eq 0 ] || 
grep -q "_AWS_XRAY_DAEMON_PORT" $Filetwo; [ $? -eq 0 ] || 
grep -q "VERCEL_GIT_REPO_ID" $Filetwo; [ $? -eq 0 ] || 
grep -q "TURBO_REMOTE_ONLY" $Filetwo; [ $? -eq 0 ] || 
grep -q "AWS_XRAY_CONTEXT_MISSING" $Filetwo; [ $? -eq 0 ] || 
grep -q "VERCEL_ENV" $Filetwo; [ $? -eq 0 ] || 
grep -q "_HANDLER" $Filetwo; [ $? -eq 0 ] || 
grep -q "AWS_LAMBDA_FUNCTION_MEMORY_SIZE" $Filetwo; [ $? -eq 0 ] || 
grep -q "VERCEL_GIT_COMMIT_MESSAGE" $Filetwo; [ $? -eq 0 ] ||
grep -q "VERCEL_GIT_REPO_SLUG" $Filetwo; [ $? -eq 0 ] ||
# we dont want these commands called either
grep -q "env" $Filetwo; [ $? -eq 0 ] && echo "sorry, build failed." || $(cp -Rf api-checks/compiled-checks/userfile.sh api/functions/newfile.sh);
sleep 1;
echo "secondary checks complete - Buildfunctions";
