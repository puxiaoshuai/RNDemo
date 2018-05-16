package com.hellorn;

import android.app.Activity;
import android.os.Bundle;
import android.view.KeyEvent;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;

import javax.annotation.Nullable;

public class MainActivity extends ReactActivity {
  private String mPid="1";
  private String mTitle;
  private Bundle mBundle;
  private MyreactDelegate mMyreactDelegate;
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "HelloRN";
    }
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        mMyreactDelegate=new MyreactDelegate(this, getMainComponentName());
        return mMyreactDelegate;
    }
    class MyreactDelegate extends ReactActivityDelegate {
        public MyreactDelegate(Activity activity,@Nullable String mainComponentName) {
            super(activity, mainComponentName);
        }
        @Nullable
        @Override
        protected Bundle getLaunchOptions() {
           /* mPid=getIntent().getStringExtra("pid");*/
            if (mPid.equals("1"))
            {
                mTitle="扶贫政策";
            }else   if (mPid.equals("4"))
            {
                mTitle="脱贫先锋";
            }
            else   if (mPid.equals("5"))
            {
                mTitle="扶贫新闻";
            }
            else   if (mPid.equals("6"))
            {
                mTitle="22+1扶贫专项行动";
            }
            mBundle=new Bundle();
            mBundle.putString("pid",mPid);
            mBundle.putString("title",mTitle);
            mBundle.putString("init_tag","1");
            return mBundle;
        }
    }

}
