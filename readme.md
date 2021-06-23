Codery.DataTypePicker
=====================
An Umbraco prevalue field editor to pick data type from list of available data types.

How to use it
-------------
```csharp
[PropertyEditorAsset(ClientDependencyType.Javascript, Codery.DataTypePicker.Constants.ControllerPath)]
public class MyCustomPropertyEditor : PropertyEditor
{
  protected override PreValueEditor CreatePreValueEditor()
  {
    var editor = base.CreatePreValueEditor();

    editor.Fields.Add(new PreValueField
    {
        Key = "dataType",
        Name = "Data Type",
        View = Codery.DataTypePicker.Constants.ViewPath
    });
  }
}
```
In your new property editor class, create a new data type field and use the supplied view and controller paths to initialise the picker.
The value stored will be the key (GUID) of the selected data type (note: in older versions of this package, pre v2.1.0, this stored the ID instead).

How to install it
-----------------
The package can be installed through NuGet:
```
Install-Package Codery.DataTypePicker 
```
