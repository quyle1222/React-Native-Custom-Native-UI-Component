package com.appclone;

import android.net.Uri;
import android.widget.VideoView;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.util.RNLog;

public class VideoViewManager extends SimpleViewManager<VideoView> {
    public static final String REACT_CLASS = "VideoViewCustom";
    public final int CHANGE_FUNCTION = 1;
    ReactContext reactContext;
    private int numberOfCall = 0;

    public VideoViewManager(ReactApplicationContext reactContext) {
        this.reactContext = reactContext;
    }

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
        numberOfCall += 1;
        try {
            new Thread(() -> {
                RNLog.w(reactContext, "Number call" + numberOfCall + "url " + urlPath);
                Uri uri = Uri.parse(urlPath);
                videoView.setVideoURI(uri);
                videoView.start();
            }).run();
        } catch (Exception error) {
            RNLog.w(reactContext, error.getMessage());
        }
    }
}
