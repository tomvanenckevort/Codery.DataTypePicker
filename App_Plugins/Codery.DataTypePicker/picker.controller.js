angular.module('umbraco').controller('Codery.DataTypePickerController', function ($scope, editorState, dataTypeResource) {

    $scope.dataTypes = [];

    // load all data types, apart from current to avoid inception

    dataTypeResource.getAll()
        .then(function (data) {
            $scope.dataTypes = _.filter(data, function (dt) { return dt.id !== editorState.current.id; });

            if ($scope.model.value !== undefined && $scope.model.value !== null) {
                var intValue = parseInt($scope.model.value);

                if (!isNaN(intValue)) {
                    // old int value, get the data type's GUID key instead
                    var dataType = _.find(data, function (dt) { return dt.id === intValue; });

                    if (dataType) {
                        $scope.model.value = dataType.key;
                    }
                }
            }
        });

});
