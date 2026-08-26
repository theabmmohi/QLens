# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}

# Uncomment this to preserve the line number information for
# debugging stack traces.
#-keepattributes SourceFile,LineNumberTable

# If you keep the line number information, uncomment this to
# hide the original source file name.
#-renamesourcefileattribute SourceFile

# Capacitor plugins rely on reflection to find @CapacitorPlugin / @PluginMethod
# annotated classes and methods - keep them all intact.
-keep @com.getcapacitor.annotation.CapacitorPlugin class * { *; }
-keepclassmembers class * {
    @com.getcapacitor.PluginMethod *;
}
-keep class com.getcapacitor.** { *; }

# capacitor-nodejs bridges to the Node.js runtime via JNI/reflection -
# keep its classes and members untouched.
-keep class net.hampoelz.capacitor.nodejs.** { *; }
-keepclassmembers class net.hampoelz.capacitor.nodejs.** { *; }
