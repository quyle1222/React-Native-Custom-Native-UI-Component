package com.appclone;

import android.media.MediaPlayer;
import android.net.Uri;
import android.view.View;
import android.widget.MediaController;
import android.widget.VideoView;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.util.RNLog;
import com.facebook.react.views.textinput.ReactEditText;

public class VideoViewManager extends SimpleViewManager<VideoView> {
    public static final String REACT_CLASS = "VideoViewCustom";
    public final int CHANGE_FUNCTION = 1;
    ReactContext reactContext;
    private final int numberOfCall = 0;
    private MediaController mediaController;

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
        this.mediaController = new MediaController(reactContext){
            @Override
            public void show() {
            }
        };
        mediaController.setMediaPlayer(view);
        mediaController.setEnabled(false);
        mediaController.hide();
        view.setMediaController(mediaController);
        return view;
    }

    @Override
    public void onDropViewInstance(@NonNull VideoView view) {
        super.onDropViewInstance(view);
        view.stopPlayback();
    }

    @ReactProp(name = "url")
    public void setVideoPath(VideoView videoView, String urlPath) {
        Uri uri = Uri.parse(urlPath);
        videoView.setVideoURI(uri);
        this.handlePlayVideo(videoView);
    }

    private void handlePlayVideo (VideoView videoView){
        videoView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mediaController.hide();
                return;
            }
        });
        videoView.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
            @Override
            public void onPrepared(MediaPlayer mediaPlayer) {
                videoView.requestFocus();
                videoView.seekTo(1);
                videoView.start();
            }
        });
        videoView.setOnFocusChangeListener(new View.OnFocusChangeListener() {
            @Override
            public void onFocusChange(View view, boolean b) {
                if (b){
                    videoView.resume();
                } else {
                    videoView.pause();
                }
            }
        });
    }
}
