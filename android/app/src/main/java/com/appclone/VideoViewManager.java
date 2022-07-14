package com.appclone;

import android.net.Uri;
import android.util.Log;
import android.widget.VideoView;

import androidx.annotation.NonNull;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class VideoViewManager extends SimpleViewManager<VideoView> {
    public static final String REACT_CLASS = "VideoViewCustom";


    @NonNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @NonNull
    @Override
    protected VideoView createViewInstance(@NonNull ThemedReactContext reactContext) {
        VideoView view = new VideoView(reactContext);
        return view;
    }

    @ReactProp(name = "url")
    public void setVideoPath(VideoView videoView, String urlPath) {
        Log.d("urlPath", "setVideoPath: " + urlPath);
        Uri uri = Uri.parse(urlPath);
        videoView.setVideoURI(uri);
        videoView.start();
    }

}
