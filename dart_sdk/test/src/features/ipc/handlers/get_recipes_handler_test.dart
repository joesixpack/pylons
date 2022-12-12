import 'package:flutter_test/flutter_test.dart';

import 'package:pylons_sdk/src/core/constants/strings.dart';
import 'package:pylons_sdk/src/features/ipc/handlers/get_recipes_handler.dart';
import 'package:pylons_sdk/src/features/models/sdk_ipc_response.dart';
import 'package:pylons_sdk/src/generated/pylons/recipe.pb.dart';
import 'package:pylons_sdk/src/pylons_wallet/response_fetcher/response_fetch.dart';

import '../../../../mocks/mock_constants.dart';

void main() {
  test('should complete the get All recipe future', () {
    final completer = getResponseFetch().initResponseCompleter(Strings.GET_RECIPES);
    var sdkResponse = SDKIPCResponse(
        success: false, error: '', data: '', errorCode: '', action: '');
    var handler = GetRecipesHandler();
    handler.handler(sdkResponse);
    expect(true, completer.isCompleted);
  });

  test('should complete the get All recipe future with data ', () async {
    final completer = getResponseFetch().initResponseCompleter(Strings.GET_RECIPES);
    var sdkResponse = SDKIPCResponse(
        success: true,
        error: '',
        data: [MOCK_RECIPE.toProto3Json()],
        errorCode: '',
        action: '');
    var handler = GetRecipesHandler();

    Future.delayed(Duration(seconds: 1), () {
      handler.handler(sdkResponse);
      expect(true, completer.isCompleted);
    });

    var response = await completer.future;
    expect(true, response.success);
    expect(true, response.data is List<Recipe>);
    expect(1, List<Recipe>.from(response.data).length);
  });

  test('should complete the get All recipe future with error ', () async {
    final completer = getResponseFetch().initResponseCompleter(Strings.GET_RECIPES);
    var sdkResponse = SDKIPCResponse(
        success: true,
        error: '',
        data: [
          // Will throw parsing error
          Recipe()
            ..createEmptyInstance()
            ..toProto3Json()
        ],
        errorCode: '',
        action: '');
    var handler = GetRecipesHandler();

    Future.delayed(Duration(seconds: 1), () {
      handler.handler(sdkResponse);
      expect(true, completer.isCompleted);
    });

    var response = await completer.future;
    expect(false, response.success);
    expect(Strings.ERR_MALFORMED_RECIPES, response.errorCode);
  });
}
