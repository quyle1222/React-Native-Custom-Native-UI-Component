package com.appclone;

import android.net.Uri;

import androidx.annotation.Nullable;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.image.ImageResizeMode;
import com.facebook.react.views.image.ReactImageView;

public class ReactImageManager extends SimpleViewManager<ReactImageView> {

    public static final String REACT_CLASS = "RCTImageViewCustom";
    ReactApplicationContext mCallerContext;

    public ReactImageManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

    @Override
    public String getName() {
        return REACT_CLASS;

    }

    @Override
    public ReactImageView createViewInstance(ThemedReactContext context) {
        return new ReactImageView(context, Fresco.newDraweeControllerBuilder(),
                null, mCallerContext);
    }

    @ReactProp(name = "src")
    public void setSrc(ReactImageView view, @Nullable String sources) {
        Uri uri = Uri.parse(sources);
        view.setDefaultSource(sources);
        view.setImageURI(uri);
    }


    @ReactProp(name = "borderRadius", defaultFloat = 0f)
    public void setBorderRadius(ReactImageView view, float borderRadius) {
        view.setBorderRadius(borderRadius);
    }

    @ReactProp(name = ViewProps.RESIZE_MODE)
    public void setResizeMode(ReactImageView view, @Nullable String resizeMode) {
        view.setScaleType(ImageResizeMode.toScaleType(resizeMode));
    }
}